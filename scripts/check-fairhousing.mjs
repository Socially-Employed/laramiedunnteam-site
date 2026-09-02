// check-fairhousing.mjs — banned audience/superlative phrases must not appear in dist HTML text.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");
const RULES = resolve(__dirname, "../FAIR_HOUSING_RULES.md");

function loadBanned() {
  const txt = readFileSync(RULES, "utf8");
  const idx = txt.indexOf("## banned");
  if (idx === -1) throw new Error("no ## banned heading in FAIR_HOUSING_RULES.md");
  return txt.slice(idx).split("\n").slice(1)
    .map((l) => l.trim().toLowerCase())
    .filter((l) => l && !l.startsWith("#"));
}

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

const banned = loadBanned();
const files = existsSync(DIST) ? walk(DIST) : [];
const hits = [];
for (const f of files) {
  // strip tags to text, collapse whitespace, lowercase
  const text = readFileSync(f, "utf8").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").toLowerCase();
  for (const phrase of banned) {
    if (text.includes(phrase)) hits.push(`${f.replace(DIST, "dist")} :: "${phrase}"`);
  }
}

if (hits.length) {
  console.error("Fair Housing violations (banned phrases in rendered text):");
  for (const h of hits) console.error("  " + h);
  process.exit(1);
}
console.log(`check:fairhousing OK — ${files.length} html files, 0 banned phrases (${banned.length} checked).`);
