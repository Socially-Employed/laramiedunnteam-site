import type { APIRoute } from "astro";
import { SITE_URL } from "../config/site";

// Generated at build time so the sitemap URL follows SITE_URL (one-line domain flip at cutover).
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap-index.xml\n`, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
