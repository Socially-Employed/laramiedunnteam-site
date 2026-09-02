// check-links.mjs — every internal href/src/srcset in dist/**/*.html must resolve to a dist file.
import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

function resolves(link) {
  const clean = link.split("#")[0].split("?")[0];
  if (!clean || clean === "/") return existsSync(join(DIST, "index.html"));
  const rel = clean.replace(/^\//, "");
  const candidates = [join(DIST, rel), join(DIST, rel, "index.html"), join(DIST, rel + ".html")];
  return candidates.some((c) => existsSync(c) && statSync(c).isFile());
}

const files = walk(DIST);
const misses = [];
const attrRe = /(?:href|src)\s*=\s*"([^"]+)"/g;
const srcsetRe = /srcset\s*=\s*"([^"]+)"/g;

for (const f of files) {
  const html = readFileSync(f, "utf8");
  const links = new Set();
  let m;
  while ((m = attrRe.exec(html))) links.add(m[1]);
  while ((m = srcsetRe.exec(html))) {
    for (const part of m[1].split(",")) {
      const url = part.trim().split(/\s+/)[0];
      if (url) links.add(url);
    }
  }
  for (const l of links) {
    if (/^(https?:|mailto:|tel:|data:|#|\/\/)/.test(l)) continue;
    if (!l.startsWith("/")) continue;
    if (!resolves(l)) misses.push(`${f.replace(DIST, "dist")} -> ${l}`);
  }
}

if (misses.length) {
  console.error("Broken internal links:");
  for (const x of misses) console.error("  " + x);
  process.exit(1);
}
console.log(`check:links OK — ${files.length} html files, no broken internal links.`);
