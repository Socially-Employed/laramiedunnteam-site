# Laramie Dunn Team — website

Static marketing site for the **Laramie Dunn Team** (Lisa Neil + Laramie Dunn · RealtyPath LLC, Tooele Valley).
Built with **Astro 7 (static output) + Tailwind 4** (via `@tailwindcss/vite`). Design system mirrors the live
521 E Gilmour landing page tokens.

## Run

```bash
npm install
npm run dev        # local dev server
npm run build      # static build -> dist/
npm run preview    # preview the built site
npm run check      # build + link check + fair-housing phrase check (CI gate)
npm run prepare:images   # regenerate optimized images from source assets (sharp)
```

## Where the facts come from

Every business fact on this site traces to **`../CONTENT_BRIEF.md`** and is centralized in
**`src/config/site.ts`**. `null` in that file means **NOT ON FILE — do not invent** (license numbers,
Laramie's headshot, socials, etc.). Rename the brand in one place: `BRAND_NAME`.

## Guardrails

- **Fair Housing:** `FAIR_HOUSING_RULES.md` holds the verbatim rule lines + a banned-phrase list;
  `npm run check:fairhousing` greps the built HTML and fails on any hit.
- **No external CDN:** fonts (Fraunces + Inter, self-hosted woff2 in `public/fonts`) and icons (Lucide,
  inlined in `src/components/Icon.astro`) come from the Asset Library. See `THIRD_PARTY_NOTICES.md`.
- **No analytics shipped** (spec convention).

## Assets / licensing

Fonts and icons materialized from the Vivare Asset Library (`assetctl`). License obligations are recorded in
`THIRD_PARTY_NOTICES.md` with the bundled license texts under `licenses/`.

## Deploy

See `DEPLOY.md` — written in a later step.
