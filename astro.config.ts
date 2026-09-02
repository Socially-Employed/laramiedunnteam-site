// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/config/site";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: "static",
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      // /contact/thanks/ is a no-JS post-submit page — keep it out of the sitemap.
      filter: (page) => !page.includes("/contact/thanks"),
    }),
  ],
  build: { inlineStylesheets: "auto" },
  vite: { plugins: [tailwindcss()] },
});
