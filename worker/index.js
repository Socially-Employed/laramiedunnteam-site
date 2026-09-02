// Laramie Dunn Team site Worker.
// - Serves the static Astro build from the ASSETS binding.
// - POST /api/lead: validates, stores a full copy in R2 (LDT_LEADS bucket), then forwards a mapped copy
//   to the Team Hub lead endpoint so the existing ntfy relay pushes it to Lisa's phone.
// - GET /api/health: liveness.
// Hub contract (upload-worker/src/index.js L55-95): name<=120, phone<=40, email<=160, budget<=40,
// timeline<=40, src<=60; honeypot field `company`; needs name + (phone|email). It does NOT accept
// a free-text message, so the message is truncated into `budget` and intent goes into `timeline`.
// Future upgrade (documented, not done here): extend the hub to accept `message` + dynamic title.

const HUB_LEAD_URL = "https://laramiedunnteam.vivare.io/api/lead";
// Preview hostnames must never be indexed; the purchased domain will not match this and is indexable.
const PREVIEW_HOST = /\.(vivare\.io|workers\.dev)$/i;
const MAX_BODY = 8 * 1024;

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
  const done = (ok, msg, status = 200) =>
    html
      ? Response.redirect(`${origin}/contact/${ok ? "thanks/" : "?error=" + encodeURIComponent(msg)}`, 303)
      : Response.json({ ok, message: msg }, { status: ok ? 200 : status });

  let body;
  try { body = await readBody(req); } catch { return done(false, "Could not read the form.", 400); }

  // Honeypot: bots fill `company`. Pretend success, store nothing.
  if (clip(body.company, 10)) return done(true, "Thanks.");

  const lead = {
    name: clip(body.name, 120),
    email: clip(body.email, 160),
    phone: clip(body.phone, 40),
    intent: clip(body.intent, 20) || "other",       // buy | sell | both | other
    message: clip(body.message, 2000),
    src: clip(body.src, 60) || "website",
    page: clip(body.page, 200),
    ts: new Date().toISOString(),
    ip: req.headers.get("cf-connecting-ip") || "",
    ua: clip(req.headers.get("user-agent") || "", 300),
  };
  if (!lead.name || !(lead.email || lead.phone)) return done(false, "Please add your name and a phone or email.", 400);
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return done(false, "That email doesn't look right.", 400);

  const id = `${lead.ts.replace(/[:.]/g, "-")}-${crypto.randomUUID().slice(0, 8)}`;
  // R2 object per lead: leads/<id>.json (the bucket is private; read via the Cloudflare API or dashboard).
  if (env.LDT_LEADS) ctx.waitUntil(env.LDT_LEADS.put(`leads/${id}.json`, JSON.stringify(lead), { httpMetadata: { contentType: "application/json" } }));

  // Forward to the Team Hub so the relay pushes it to Lisa's phone.
  const forward = {
    name: lead.name,
    phone: lead.phone,
    email: lead.email,
    budget: clip(lead.message, 40),
    timeline: lead.intent,
    src: clip(`website:${lead.src}`, 60),
  };
  ctx.waitUntil(
    fetch(HUB_LEAD_URL, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(forward) })
      .then(async (r) => { if (!r.ok && env.LDT_LEADS) await env.LDT_LEADS.put(`fwdfail/${id}.txt`, String(r.status)); })
      .catch(async (e) => { if (env.LDT_LEADS) await env.LDT_LEADS.put(`fwdfail/${id}.txt`, String(e).slice(0, 200)); })
  );
  return done(true, "Thanks - we'll be in touch shortly.");
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
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
