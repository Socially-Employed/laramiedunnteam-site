// searches.ts — the search criteria vocabulary shared by the hero search bar, /search/, and the footer.
// Property descriptors only (what the home IS), never who it is for (Fair Housing).

export const PRICE_STEPS = [
  200_000, 250_000, 300_000, 350_000, 400_000, 450_000, 500_000, 600_000, 700_000, 800_000, 1_000_000, 1_250_000, 1_500_000, 2_000_000,
] as const;

export const fmtPrice = (n: number) => (n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(n % 1_000_000 ? 2 : 0).replace(/\.?0+$/, "")}M` : `$${Math.round(n / 1000)}K`);

export type SpecialtySearch = { key: string; label: string; blurb: string };

/** Footer "Specialty searches" and the must-have checkboxes on /search/. Keys are stable (used in URLs). */
export const SPECIALTY_SEARCHES: SpecialtySearch[] = [
  { key: "acreage", label: "Acreage & horse property", blurb: "Larger parcels, outbuildings, animal rights." },
  { key: "new-construction", label: "New construction", blurb: "Builder inventory and lots across the valley." },
  { key: "basement-apartment", label: "Basement apartment", blurb: "Separate-entrance suites and accessory units." },
  { key: "luxury", label: "Luxury homes", blurb: "Custom builds and view lots." },
  { key: "condo-townhome", label: "Condos & townhomes", blurb: "Attached homes with lower upkeep." },
  { key: "golf", label: "Golf course", blurb: "Homes along the Stansbury Park course." },
  { key: "lake", label: "Lake & waterfront", blurb: "Stansbury Lake and canal frontage." },
  { key: "garage-3", label: "3+ car garage", blurb: "Room for trucks, toys, and a shop." },
  { key: "rv-parking", label: "RV parking", blurb: "Side yards and pads sized for a trailer." },
  { key: "single-level", label: "Single-level living", blurb: "Ramblers and main-floor primary suites." },
];

export const PROPERTY_TYPES = [
  { key: "any", label: "Any type" },
  { key: "single-family", label: "Single-family" },
  { key: "condo-townhome", label: "Condo / townhome" },
  { key: "land", label: "Land / lot" },
  { key: "multi", label: "Multi-unit" },
] as const;
