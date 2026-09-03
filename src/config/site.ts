// Every fact here traces to website/CONTENT_BRIEF.md; null = NOT ON FILE.
// Rename the brand in ONE place: BRAND_NAME (per plan.md risk note).

export const SITE_URL = "https://ldt.vivare.io"; // PREVIEW host. At cutover set the purchased domain here (canonical, sitemap, robots, OG all follow).
export const BRAND_NAME = "Laramie Dunn Team";
export const BROKERAGE = "RealtyPath LLC (Tooele Valley)";
export const BRAND_STRING = "Laramie Dunn Team · RealtyPath LLC (Tooele Valley)";

export const SERVICE_AREA = [
  "Grantsville",
  "Stansbury Park",
  "Tooele",
  "Erda",
  "Lake Point",
  "Stockton",
] as const;

export const COUNTY = "Tooele County, Utah";

export type Agent = {
  name: string;
  role: string;
  phone: string;
  phoneHref: string;
  email: string;
  licenseNumber: string | null;
  headshot: string | null;
};

export const AGENTS: Agent[] = [
  {
    name: "Lisa Neil",
    role: "Licensed Utah real estate agent",
    phone: "435-849-6130",
    phoneHref: "tel:+14358496130",
    email: "lisa.dunn.neil@gmail.com",
    licenseNumber: null, // NOT ON FILE — do not invent
    headshot: "/images/lisa-neil-800.webp",
  },
  {
    name: "Laramie Dunn",
    role: "Licensed Utah real estate agent",
    phone: "435-224-4000",
    phoneHref: "tel:+14352244000",
    email: "ldunn.ut@gmail.com",
    licenseNumber: null, // NOT ON FILE — do not invent
    headshot: null, // NOT ON FILE — do not invent
  },
];

export const BUSINESS_EMAIL = "lisaneilrealty@gmail.com";

export const SOCIAL = {
  facebook: null, // NOT ON FILE
  instagram: null, // NOT ON FILE
  zillow: null, // NOT ON FILE
} as const;

// Reviews: aggregate-only per CONTENT_BRIEF §6. No quotes exist on file — keep empty; do not invent.
// When real, consented reviews are collected, add { quote, author, detail?, rating? } objects here.
export const TESTIMONIALS: { quote: string; author: string; detail?: string; rating?: number }[] = [];

export const LEAD_ENDPOINT = "/api/lead";
export const GBP_REVIEW_URL = null; // NOT ON FILE — Google Business Profile review link
export const ANALYTICS = null; // none shipped (spec convention)
