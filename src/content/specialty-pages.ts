// specialty-pages.ts — copy for the /homes/<slug>/ specialty pages (one per SPECIALTY_SEARCHES key).
// Rails (CONTENT_BRIEF §9 addendum, 2026-09-11): describe the property type, never the buyer or
// occupant; no superlatives; no MLS figures; geography only as already stated in communities.ts.
// `title` is passed to <Base> WITHOUT the brand suffix — Seo.astro appends " · Laramie Dunn Team"
// (20 chars), so keep `title` ≤ 40 chars and `description` ≤ 155 chars.

export interface SpecialtyPage {
  /** Matches SpecialtySearch.key in searches.ts; also the URL segment under /homes/. */
  slug: string;
  title: string;
  description: string;
  h1: string;
  /** Two or three neutral paragraphs about the property type. */
  paragraphs: string[];
  /** Community slugs shown first in the "browse by community" grid. */
  related: string[];
  /** Optional deeper page for this category. */
  hub?: { href: string; label: string };
}

export const SPECIALTY_PAGES: SpecialtyPage[] = [
  {
    slug: "acreage",
    title: "Acreage & Horse Property, Tooele County",
    description:
      "Acreage and horse property in Tooele County, Utah. Larger parcels, outbuildings, and animal rights in Erda, Grantsville, Lake Point, and Stockton.",
    h1: "Acreage and horse property in Tooele County",
    paragraphs: [
      "Larger parcels in Tooele County sit where the valley opens up: Erda, the edges of Grantsville, Lake Point, and south past Tooele toward Stockton and Rush Valley. Listings in this category describe lot size in acres, fencing, and outbuildings such as barns, loafing sheds, and shops, and often note irrigation shares or a well.",
      "Animal rights are set by zoning, and they vary parcel by parcel even on the same road. When we run this search we read the zoning designation and the listing remarks for each result, so you know what a parcel allows before you drive out to walk it.",
      "Water is the other question to settle early. Water rights, irrigation shares, wells, and septic systems each need their own paperwork check, so we treat water as its own line item on every acreage showing. We can point you to the county recorder and the planning office if you want to verify a parcel yourself.",
    ],
    related: ["erda", "grantsville", "lake-point", "stockton"],
  },
  {
    slug: "new-construction",
    title: "New Construction Homes, Tooele County",
    description:
      "New construction in Tooele County, Utah: builder inventory, spec homes, and lots in Grantsville, Erda, Stansbury Park, and Tooele, from the Utah MLS.",
    h1: "New construction homes in Tooele County",
    paragraphs: [
      "Builder inventory in Tooele County ranges from spec homes that are finished and ready to close to lots where you choose the plan and the finishes. Newer subdivisions are spreading at the edges of Grantsville, including Heritage Farms, on larger lots in Erda, in the planned neighborhoods of Stansbury Park, and on the benches and outskirts of Tooele.",
      "A new-construction search in the MLS returns builder listings as well as resale homes that are only a few years old, so tell us whether you want to be the first owner. The team also keeps builder relationships across the valley, which helps when a lot or a plan is not yet advertised, and we walk the process with you: contract, selections, inspections, and the final walkthrough.",
      "Our current listing, 521 E Gilmour St in Grantsville, is a custom build in Heritage Farms by Heritage Homes and was shown as Home #29 in the 2026 Salt Lake Parade of Homes. The new construction guide covers how buying new differs from resale and what the Parade means for a listing.",
    ],
    related: ["grantsville", "erda", "stansbury-park", "tooele"],
    hub: { href: "/new-construction/", label: "Read the new construction guide" },
  },
  {
    slug: "basement-apartment",
    title: "Basement Apartment Homes, Tooele County",
    description:
      "Homes with a basement apartment in Tooele County, Utah: separate-entrance suites in Tooele, Grantsville, and Stansbury Park, searched in the Utah MLS.",
    h1: "Homes with a basement apartment in Tooele County",
    paragraphs: [
      "A basement apartment is a second living unit inside the home, usually with its own exterior entrance, kitchen, bathroom, and laundry. In the Utah MLS these show up under several names, including accessory apartment and accessory dwelling unit, so we search the listing remarks as well as the structured fields to catch all of them.",
      "Whether the unit can be rented depends on the city's accessory dwelling unit rules, the zoning of the lot, and whether the finish work was permitted. Ask us to confirm permit status with the city's planning office before you write an offer, and to check what is recorded on the lot.",
      "Our current listing at 521 E Gilmour St in Grantsville includes a separate-entrance basement apartment.",
    ],
    related: ["tooele", "grantsville", "stansbury-park"],
  },
  {
    slug: "luxury",
    title: "Luxury Homes in Tooele County",
    description:
      "Luxury homes in Tooele County, Utah: custom builds, view lots, and larger parcels in Grantsville, Erda, and Stansbury Park, searched in the Utah MLS.",
    h1: "Luxury and custom homes in Tooele County",
    paragraphs: [
      "Higher-end listings in Tooele County are usually custom builds on larger lots or view lots, with the Oquirrh Mountains on one side of the valley and the Stansbury Mountains on the other. Listings in this range describe finish level, lot size, outbuildings, and views more than they describe a price bracket, so we set the price floor with you when we run the search.",
      "Many homes in this segment are custom or semi-custom builds, so the builder, the plan, and the year built matter as much as the address. We can tell you who built a home and what else that builder has done in the valley.",
      "Our current listing, 521 E Gilmour St in Grantsville, is a custom estate in the Heritage Farms subdivision, built by Heritage Homes and shown as Home #29 in the 2026 Salt Lake Parade of Homes.",
    ],
    related: ["grantsville", "erda", "stansbury-park"],
  },
  {
    slug: "condo-townhome",
    title: "Condos & Townhomes, Tooele County",
    description:
      "Condos and townhomes in Tooele County, Utah: attached homes with lower upkeep in Tooele, Stansbury Park, and Grantsville. HOA details on every listing.",
    h1: "Condos and townhomes in Tooele County",
    paragraphs: [
      "Townhomes, twin homes, and condominiums share at least one wall and usually come with a homeowners association that handles exterior maintenance, landscaping, or shared amenities. The monthly fee, what it covers, and the association's finances are part of what we read on each listing before we send it to you.",
      "Condominiums and townhomes are titled differently. With a condominium you typically own the interior and a share of the common areas; with a townhome you usually own the lot under the home as well. Financing rules can differ between the two, so tell us early if you have a preference and we will filter for it.",
    ],
    related: ["tooele", "stansbury-park", "grantsville"],
  },
  {
    slug: "golf",
    title: "Golf Course Homes in Stansbury Park",
    description:
      "Homes along the golf course in Stansbury Park, Tooele County, Utah: fairway lots and course-adjacent streets, searched for you in the Utah MLS.",
    h1: "Golf course homes in Stansbury Park",
    paragraphs: [
      "Stansbury Park is a planned community built around a man-made lake and a golf course, and the homes that back onto the fairways are the core of this search. Listings usually describe which hole or fairway a lot faces and whether the lot is also close to the lake or the parks.",
      "Course-side lots sit in neighborhoods of varying ages, so the homes range from established builds to newer construction. We can also widen the search to the streets one block off the course if you want the setting without the fairway frontage.",
    ],
    related: ["stansbury-park"],
  },
  {
    slug: "lake",
    title: "Lake & Waterfront Homes, Stansbury Park",
    description:
      "Lake and waterfront homes in Stansbury Park, Tooele County, Utah: Stansbury Lake and canal frontage, searched for you in the Utah MLS.",
    h1: "Lake and waterfront homes in Stansbury Park",
    paragraphs: [
      "Waterfront in Tooele County means Stansbury Lake and the canals that run through Stansbury Park. The lake is man-made, first built in the early 1970s, and covers about 110 acres. Lots back directly to the lake or to a canal, and listings describe the frontage, the dock situation, and which way the lot faces.",
      "Information about the lake, including its rules, is published by the Stansbury Service Agency at stansburypark.gov. We read those before you plan a dock or shoreline work, and we can point you to the agency directly.",
    ],
    related: ["stansbury-park"],
  },
  {
    slug: "garage-3",
    title: "3+ Car Garage Homes, Tooele County",
    description:
      "Homes with a three-car or larger garage in Tooele County, Utah: room for trucks, toys, and a shop. Garage capacity searched directly in the Utah MLS.",
    h1: "Homes with a 3+ car garage in Tooele County",
    paragraphs: [
      "Three-car and larger garages appear across the county, most often on newer construction and on larger lots where a detached shop is common. Garage capacity is a field we can filter on directly in the Utah MLS, so the results are not limited to listings that happen to mention it in the remarks.",
      "Tell us what the space is for. A three-car attached garage, a deep RV bay, and a detached shop with power are three different searches, and listings describe them in different places. We confirm door heights, depth, and power with the listing agent before you drive out.",
    ],
    related: ["erda", "grantsville", "tooele"],
  },
  {
    slug: "rv-parking",
    title: "Homes With RV Parking, Tooele County",
    description:
      "Homes with RV parking in Tooele County, Utah: side yards, gated pads, and bays sized for a trailer in Tooele, Grantsville, Erda, and Lake Point.",
    h1: "Homes with RV parking in Tooele County",
    paragraphs: [
      "RV parking usually means a side yard wide enough for a trailer, a gated concrete or gravel pad, or a dedicated bay. Listings describe it inconsistently, so we search the remarks for RV pad, RV parking, and side access, and then confirm the dimensions with the listing agent.",
      "Whether a trailer can sit outside depends on the homeowners association and on city ordinances, which differ between Tooele, Grantsville, Stansbury Park, and the unincorporated county. Ask us to read the CC&Rs before you count on it.",
    ],
    related: ["tooele", "grantsville", "erda", "lake-point"],
  },
  {
    slug: "single-level",
    title: "Single-Level Homes in Tooele County",
    description:
      "Single-level living in Tooele County, Utah: ramblers and homes with a main-floor primary suite and laundry, searched for you in the Utah MLS.",
    h1: "Single-level living in Tooele County",
    paragraphs: [
      "Single-level living covers ramblers with everything on one floor and two-story homes where the primary suite, laundry, and main living areas are all on the main level. Both are common across the valley, from the established neighborhoods of Tooele to newer subdivisions in Grantsville and Stansbury Park.",
      "Listings usually note a main-floor primary suite and main-floor laundry, and the remarks often add details such as a step-free entry. Tell us which of those matter and we will filter for them rather than sending every rambler in the county.",
    ],
    related: ["tooele", "stansbury-park", "grantsville"],
  },
];

export const specialtyPage = (slug: string) => SPECIALTY_PAGES.find((p) => p.slug === slug);
