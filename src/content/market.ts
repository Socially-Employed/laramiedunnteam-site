// market.ts — the ONLY market figures allowed on public pages (CONTENT_BRIEF §9 addendum, 2026-09-11).
// Source: Realtor.com via FRED (St. Louis Fed). No MLS-derived numbers may be added here; the monthly
// MLS report goes out by email only. Update the four values, MARKET_ASOF and MARKET_UPDATED together.

export const MARKET_ASOF = "August 2026";
export const MARKET_UPDATED = "2026-09-11";
export const MARKET_UPDATED_LABEL = "September 11, 2026";
export const MARKET_SOURCE = "Realtor.com via FRED (St. Louis Fed)";
export const MARKET_SOURCE_URL = "https://fred.stlouisfed.org/";
export const MARKET_TERMS_URL = "https://fred.stlouisfed.org/legal/";

export interface MarketStat {
  /** FRED series ID. */
  id: string;
  label: string;
  value: string;
  url: string;
  /** Plain-English reading of what the number measures. */
  read: string;
}

export const MARKET_STATS: MarketStat[] = [
  {
    id: "MEDLISPRI49045",
    label: "Median listing price",
    value: "$524,900",
    url: "https://fred.stlouisfed.org/series/MEDLISPRI49045",
    read: "Half of the homes listed for sale in Tooele County during the month were asking more than this and half were asking less. It is an asking-price figure, not a sold-price figure.",
  },
  {
    id: "MEDDAYONMAR49045",
    label: "Median days on market",
    value: "56",
    url: "https://fred.stlouisfed.org/series/MEDDAYONMAR49045",
    read: "The typical listing had been on the market this many days. A rising number means homes are taking longer to go under contract; a falling number means they are moving faster.",
  },
  {
    id: "ACTLISCOU49045",
    label: "Active listings",
    value: "388",
    url: "https://fred.stlouisfed.org/series/ACTLISCOU49045",
    read: "How many homes were for sale in the county during the month. More listings means more choice for buyers and more competition for sellers.",
  },
  {
    id: "NEWLISCOU49045",
    label: "New listings",
    value: "128",
    url: "https://fred.stlouisfed.org/series/NEWLISCOU49045",
    read: "How many homes came on the market during the month. Set against the active count, it shows how quickly the pool of homes for sale is being refilled.",
  },
];

export const sourceLine = (s: MarketStat) => `Source: ${MARKET_SOURCE}, series ${s.id}, ${MARKET_ASOF}`;
