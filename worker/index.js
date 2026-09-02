// Laramie Dunn Team site Worker.
// - Serves the static Astro build from the ASSETS binding.
// - POST /api/lead: validates, stores a full copy in R2 (LDT_LEADS bucket), then forwards a mapped copy
//   to the Team Hub lead endpoint so the existing ntfy relay pushes it to Lisa's phone.
// - GET /api/health: liveness.
// Hub contract (upload-worker/src/index.js L55-95): name<=120, phone<=40, email<=160, budget<=40,
// timeline<=40, src<=60; honeypot field `company`; needs name + (phone|email). It does NOT accept
// a free-text message, so the message (or the property address, when given) is truncated into
// `budget` and intent goes into `timeline`.
// Attribution: the site captures first-touch utm_* + referrer + landing page (BaseLayout script) and the
// form posts them; they are stored in the R2 copy under `attr` and utm_source is folded into the hub `src`.
// Future upgrade (documented, not done here): extend the hub to accept `message` + dynamic title.

const HUB_LEAD_URL = "https://laramiedunnteam.vivare.io/api/lead";
// Preview hostnames must never be indexed; the purchased domain will not match this and is indexable.
const PREVIEW_HOST = /\.(vivare\.io|workers\.dev)$/i;
const MAX_BODY = 8 * 1024;
const ATTR_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

const clip = (v, n) => (typeof v === "string" ? v.trim().slice(0, n) : "");

async function readBody(req) {
  const ct = req.headers.get("content-type") || "";
  const raw = await req.text();
  if (raw.length > MAX_BODY) throw new Error("too large");
  if (ct.includes("application/json")) return JSON.parse(raw || "{}");
  const p = new URLSearchParams(raw);
  return Object.fromEntries(p.entries());
}

function wantsHtml(req) {
  const a = req.headers.get("accept") || "";
  const ct = req.headers.get("content-type") || "";
  return !ct.includes("application/json") && a.includes("text/html");
}

async function handleLead(req, env, ctx) {
  const origin = new URL(req.url).origin;
  const html = wantsHtml(req);
  const done = (ok, msg, status = 200, extra = {}) =>
    html
      ? Response.redirect(`${origin}/contact/${ok ? "thanks/" : "?error=" + encodeURIComponent(msg)}`, 303)
      : Response.json({ ok, message: msg, ...extra }, { status: ok ? 200 : status });

  let body;
  try { body = await readBody(req); } catch { return done(false, "Could not read the form.", 400); }

  // Honeypot: bots fill `company`. Pretend success, store nothing.
  if (clip(body.company, 10)) return done(true, "Thanks.");

  const attr = {};
  for (const k of ATTR_KEYS) { const v = clip(body[k], 120); if (v) attr[k] = v; }
  const ref = clip(body.ref, 300); if (ref) attr.ref = ref;
  const landing = clip(body.landing, 300); if (landing) attr.landing = landing;

  const lead = {
    name: clip(body.name, 120),
    email: clip(body.email, 160),
    phone: clip(body.phone, 40),
    intent: clip(body.intent, 20) || "other",       // buy | sell | both | other
    message: clip(body.message, 2000),
    address: clip(body.address, 200),           // home-value requests (optional elsewhere)
    src: clip(body.src, 60) || "website",
    page: clip(body.page, 200),
    attr,
    ts: new Date().toISOString(),
    ip: req.headers.get("cf-connecting-ip") || "",
    ua: clip(req.headers.get("user-agent") || "", 300),
  };
  if (!lead.name || !(lead.email || lead.phone)) return done(false, "Please add your name and a phone or email.", 400);
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return done(false, "That email doesn't look right.", 400);

  const id = `${lead.ts.replace(/[:.]/g, "-")}-${crypto.randomUUID().slice(0, 8)}`;
  // R2 object per lead: leads/<id>.json (the bucket is private; read via the Cloudflare API or dashboard).
  // Awaited (not waitUntil) so a storage failure is visible in the JSON response and in Workers Logs.
  let stored = false;
  if (env.LDT_LEADS) {
    try {
      await env.LDT_LEADS.put(`leads/${id}.json`, JSON.stringify(lead), { httpMetadata: { contentType: "application/json" } });
      stored = true;
    } catch (e) {
      console.error("lead r2 put failed", id, String(e));
    }
  } else {
    console.error("lead r2 binding missing", id);
  }

  // Forward to the Team Hub so the relay pushes it to Lisa's phone. utm_source rides along in `src`.
  const forward = {
    name: lead.name,
    phone: lead.phone,
    email: lead.email,
    budget: clip(lead.address || lead.message, 40),   // address wins so it reaches Lisa's push
    timeline: lead.intent,
    src: clip(`website:${lead.src}${attr.utm_source ? ":" + attr.utm_source : ""}`, 60),
  };
  ctx.waitUntil(
    fetch(HUB_LEAD_URL, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(forward) })
      .then(async (r) => { if (!r.ok) { console.error("lead hub forward", id, r.status); if (env.LDT_LEADS) await env.LDT_LEADS.put(`fwdfail/${id}.txt`, String(r.status)); } })
      .catch(async (e) => { console.error("lead hub forward", id, String(e)); if (env.LDT_LEADS) await env.LDT_LEADS.put(`fwdfail/${id}.txt`, String(e).slice(0, 200)); })
  );
  return done(true, "Thanks - we'll be in touch shortly.", 200, { id, stored });
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    // www -> apex (301) so the purchased domain has ONE canonical host (canonical tags/sitemap use SITE_URL).
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/api/lead") {
      if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405, headers: { allow: "POST" } });
      return handleLead(req, env, ctx);
    }
    if (url.pathname === "/api/health") return Response.json({ ok: true, ts: Date.now() });
    if (url.pathname.startsWith("/api/")) return new Response("Not Found", { status: 404 });
    const res = await env.ASSETS.fetch(req);
    const h = new Headers(res.headers);
    h.set("x-content-type-options", "nosniff");
    h.set("referrer-policy", "strict-origin-when-cross-origin");
    h.set("x-frame-options", "SAMEORIGIN");
    if (PREVIEW_HOST.test(url.hostname)) h.set("x-robots-tag", "noindex");
    return new Response(res.body, { status: res.status, headers: h });
  },
};
