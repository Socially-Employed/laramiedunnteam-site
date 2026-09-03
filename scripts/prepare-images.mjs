// prepare-images.mjs — regenerate optimized site images from source assets (sharp).
// All outputs strip EXIF/metadata. No retouching of the headshot per CONTENT_BRIEF §1.
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/images");
mkdirSync(OUT, { recursive: true });

const SRC = {
  headshot: "/tank/work/Organized/Documents/Vivare/LNRE_Branding/lisa_headshot_original.jpeg",
  logo: "/tank/work/Organized/Documents/Vivare/LNRE_Branding/realtypath_official.png",
  // Hero: Oquirrh Mountains above the Tooele Valley (CC0, Justin Luebke via Unsplash/Wikimedia Commons), 4000x2670
  // downscale committed under assets-src/. See assets-src/README.md.
  hero: new URL("../assets-src/hero-oquirrh-tooele.jpg", import.meta.url).pathname,
};

async function run() {
  // Lisa headshot — portrait crop to 800px, EXIF stripped, webp + jpg fallback.
  const head = sharp(SRC.headshot).rotate().resize(800, 1000, { fit: "cover", position: "top" });
  await head.clone().webp({ quality: 82 }).toFile(`${OUT}/lisa-neil-800.webp`);
  await head.clone().jpeg({ quality: 84, mozjpeg: true }).toFile(`${OUT}/lisa-neil-800.jpg`);

  // RealtyPath logo — keep transparency, cap width at 600px, strip metadata.
  await sharp(SRC.logo).resize({ width: 600, withoutEnlargement: true }).png().toFile(`${OUT}/realtypath-logo.png`);

  // Oquirrhs → hero (1600x900 webp + jpg). Left 2960px drops the power poles; band y=770..2435 keeps sky, peaks and the valley floor.
  const hero = sharp(SRC.hero).extract({ left: 0, top: 770, width: 2960, height: 1665 }).resize(1600, 900);
  await hero.clone().webp({ quality: 80 }).toFile(`${OUT}/hero.webp`);
  await hero.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(`${OUT}/hero.jpg`);

  // OG default 1200x630.
  await sharp(SRC.hero).extract({ left: 0, top: 900, width: 2960, height: 1554 }).resize(1200, 630).jpeg({ quality: 82, mozjpeg: true }).toFile(`${OUT}/og-default.jpg`);

  console.log("images written to", OUT);
}
run().catch((e) => { console.error(e); process.exit(1); });
