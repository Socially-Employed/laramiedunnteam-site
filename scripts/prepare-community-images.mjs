// prepare-community-images.mjs — assets-src/communities/*.jpg (Wikimedia Commons, license-verified; see assets-src/README.md)
// → public/images/communities/<slug>-{1200,640}.webp (3:2 tiles) and valley-oquirrh-1800.webp (band background).
// EXIF stripped (sharp does not copy metadata unless asked). Run: node scripts/prepare-community-images.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, "../assets-src/communities");
const OUT = resolve(__dirname, "../public/images/communities");
mkdirSync(OUT, { recursive: true });

// position = sharp gravity for the 3:2 crop.
const TILES = [
  ["grantsville", "centre"],
  ["stansbury-park", "centre"],
  ["tooele", "centre"],
  ["erda", "centre"],
  ["lake-point", "centre"],
  ["stockton", "centre"],
  ["stansbury-island", "centre"],
  ["valley-oquirrh", "centre"],
];

for (const [slug, position] of TILES) {
  const src = `${SRC}/${slug}.jpg`;
  for (const w of [1200, 640]) {
    await sharp(src)
      .resize(w, Math.round((w * 2) / 3), { fit: "cover", position })
      .webp({ quality: 78 })
      .toFile(`${OUT}/${slug}-${w}.webp`);
  }
  console.log("tile", slug);
}

// Wide band background (moody Oquirrh storm) — 1800×760, darkened in CSS not here.
await sharp(`${SRC}/valley-oquirrh.jpg`)
  .resize(1800, 760, { fit: "cover", position: "centre" })
  .webp({ quality: 74 })
  .toFile(`${OUT}/valley-oquirrh-1800.webp`);
console.log("band valley-oquirrh");
