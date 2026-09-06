// communities.ts — one entry per Tooele County community the team serves.
// NEUTRAL geography only: no demographic, crime, school-quality, or price statistics
// (CONTENT_BRIEF §3 / site rules). Describe the place, never who lives there.
// Landmarks listed are public places. No stat appears here unless the brief provided it (none did).
// Photos: Wikimedia Commons, license verified 2026-09-06 (assets-src/README.md, /credits/). No people in frame.

export type PhotoCredit = {
  /** Original file title on Wikimedia Commons. */
  file: string;
  author: string;
  license: "CC0" | "Public domain" | "CC BY-SA 4.0";
  /** Commons file page (license + author of record). */
  url: string;
  /** Present only for licenses that require a license link (CC BY-SA). */
  licenseUrl?: string;
};

export type CommunityPhoto = {
  /** 1200×800 webp for tiles and page headers. */
  src: string;
  /** 640×427 webp for small tiles / srcset. */
  small: string;
  alt: string;
  credit: PhotoCredit;
};

export type Community = {
  slug: string;
  name: string;
  title: string; // <= 60 chars for <title>
  description: string; // <= 155 chars for meta
  intro: string;
  gettingAround: string;
  housing: string;
  thingsToDo: string[];
  photo: CommunityPhoto;
};

const img = (slug: string) => ({ src: `/images/communities/${slug}-1200.webp`, small: `/images/communities/${slug}-640.webp` });

export const COMMUNITIES: Community[] = [
  {
    slug: "grantsville",
    name: "Grantsville",
    title: "Grantsville, Utah Homes & Area Guide",
    description:
      "A neutral guide to Grantsville in Tooele County, Utah — getting around, what the housing looks like, and public places to visit.",
    intro:
      "Grantsville sits on the west side of the Tooele Valley, below the Stansbury Mountains. It is one of the older towns in the county, with a historic core along the main street and newer subdivisions spreading toward the foothills.",
    gettingAround:
      "State Route 138 runs through town and connects east to State Route 36 and Interstate 80, the main routes toward Salt Lake County. Most driving in and around Grantsville is on surface roads that reach the rest of the Tooele Valley.",
    housing:
      "Housing ranges from established homes near the historic center to newer construction on larger lots at the edges of town, including subdivisions like Heritage Farms.",
    thingsToDo: [
      "Grantsville Reservoir for open water and shoreline recreation",
      "The Donner-Reed Museum in the historic downtown",
      "Trailheads into the Stansbury Mountains west of town",
    ],
    photo: {
      ...img("grantsville"),
      alt: "The stone Donner-Reed Museum building in downtown Grantsville, Utah, under a clear sky",
      credit: {
        file: "Donner Reed Museum - Grantsville, Utah - 26 May 2025.jpg",
        author: "Beneathtimp",
        license: "CC0",
        url: "https://commons.wikimedia.org/wiki/File:Donner_Reed_Museum_-_Grantsville,_Utah_-_26_May_2025.jpg",
      },
    },
  },
  {
    slug: "stansbury-park",
    name: "Stansbury Park",
    title: "Stansbury Park, Utah Homes & Area Guide",
    description:
      "A neutral guide to Stansbury Park in Tooele County, Utah — getting around, what the housing looks like, and public places to visit.",
    intro:
      "Stansbury Park is a planned community in the north end of the Tooele Valley, built around a man-made lake and a golf course. It sits close to the Interstate 80 corridor at the entrance to the valley.",
    gettingAround:
      "State Route 36 and Interstate 80 are both a short drive away, making Stansbury Park one of the closest points in the county to Salt Lake County to the northeast.",
    housing:
      "The community is largely planned residential development of varying ages, with homes arranged around the lake, parks, and the golf course.",
    thingsToDo: [
      "Stansbury Lake and its shoreline walking paths",
      "Stansbury Park Golf Course",
      "The Stansbury Park Observatory Complex",
    ],
    photo: {
      ...img("stansbury-park"),
      alt: "The historic Benson Grist Mill, a wooden mill building with a water wheel, in Stansbury Park, Utah",
      credit: {
        file: "B-2. Ezra T. Benson Grist Mill (325 Hwy 138, Stansbury Park, UT) on the California National Historic Trail (2009).jpg",
        author: "National Park Service staff",
        license: "Public domain",
        url: "https://commons.wikimedia.org/wiki/File:B-2._Ezra_T._Benson_Grist_Mill_(325_Hwy_138,_Stansbury_Park,_UT)_on_the_California_National_Historic_Trail_(2009)_(a6933bcf-2055-4909-9d7b-7a7b7cb6ca2e).jpg",
      },
    },
  },
  {
    slug: "tooele",
    name: "Tooele",
    title: "Tooele, Utah Homes & Area Guide",
    description:
      "A neutral guide to the city of Tooele, Utah — getting around, what the housing looks like, and public places to visit.",
    intro:
      "Tooele is the county seat and the largest city in the valley, set at the base of the Oquirrh Mountains. It has a long main street, established neighborhoods, and newer development on its outskirts.",
    gettingAround:
      "State Route 36 is the main north-south road through the city, connecting to Interstate 80 to the north and the rest of the valley to the south.",
    housing:
      "You will find a wide mix here — older homes near the center of town, mid-century neighborhoods, and newer subdivisions on the benches and edges of the city.",
    thingsToDo: [
      "Settlement Canyon Reservoir and its trails",
      "The Tooele Valley Railroad Museum",
      "The Deseret Peak Complex for events and recreation",
    ],
    photo: {
      ...img("tooele"),
      alt: "Tooele City Hall, a brick civic building with a clock tower, on Main Street in Tooele, Utah",
      credit: {
        file: "Tooele Utah City Hall.jpeg",
        author: "Ntsimp",
        license: "Public domain",
        url: "https://commons.wikimedia.org/wiki/File:Tooele_Utah_City_Hall.jpeg",
      },
    },
  },
  {
    slug: "erda",
    name: "Erda",
    title: "Erda, Utah Homes & Area Guide",
    description:
      "A neutral guide to Erda in Tooele County, Utah — getting around, what the housing looks like, and public places to visit.",
    intro:
      "Erda is a community between Tooele and the north end of the valley, known for open ground and mountain views on both sides of the valley.",
    gettingAround:
      "State Route 36 runs along the east side of the area and connects north toward Interstate 80 and south toward the city of Tooele.",
    housing:
      "Homes in Erda tend to sit on larger lots, with a rural, open character compared with the more compact neighborhoods elsewhere in the valley.",
    thingsToDo: [
      "Open roads and mountain views across the Tooele Valley",
      "Nearby access to the Deseret Peak Complex",
      "Foothill routes toward the Oquirrh Mountains",
    ],
    photo: {
      ...img("erda"),
      alt: "Open fields in Erda, Utah, looking north toward the Great Salt Lake with mountains on the horizon",
      credit: {
        file: "Erda overlooking the Great Salt Lake.jpg",
        author: "Jackpeck (English Wikipedia)",
        license: "Public domain",
        url: "https://commons.wikimedia.org/wiki/File:Erda_overlooking_the_Great_Salt_Lake.jpg",
      },
    },
  },
  {
    slug: "lake-point",
    name: "Lake Point",
    title: "Lake Point, Utah Homes & Area Guide",
    description:
      "A neutral guide to Lake Point in Tooele County, Utah — getting around, what the housing looks like, and public places to visit.",
    intro:
      "Lake Point sits at the north end of the Tooele Valley near the Great Salt Lake, at the junction where the valley meets the Interstate 80 corridor.",
    gettingAround:
      "The Interstate 80 and State Route 36 junction is right here, making Lake Point the valley's gateway toward Salt Lake County to the east.",
    housing:
      "Housing is a mix of established homes and newer construction, some on larger parcels with views toward the lake and the surrounding mountains.",
    thingsToDo: [
      "The Great Salt Lake Marina nearby",
      "Adobe Rock, a local roadside landmark",
      "Interstate 80 access toward the Antelope Island area",
    ],
    photo: {
      ...img("lake-point"),
      alt: "Aerial view of homes in Lake Point, Utah, with the snow-covered Oquirrh Mountains behind",
      credit: {
        file: "Lake Point.jpg",
        author: "Rlittle09",
        license: "CC BY-SA 4.0",
        url: "https://commons.wikimedia.org/wiki/File:Lake_Point.jpg",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
    },
  },
  {
    slug: "stockton",
    name: "Stockton",
    title: "Stockton, Utah Homes & Area Guide",
    description:
      "A neutral guide to Stockton in Tooele County, Utah — getting around, what the housing looks like, and public places to visit.",
    intro:
      "Stockton is a small town south of the city of Tooele, set between the Oquirrh and Stansbury ranges near Rush Valley. It has a historic mining heritage and a quiet main street.",
    gettingAround:
      "State Route 36 runs through town and connects north to Tooele and Interstate 80, and south into Rush Valley.",
    housing:
      "Housing is mostly smaller-scale and established, with some newer homes and larger lots on the edges of town.",
    thingsToDo: [
      "Rush Lake south of town",
      "The historic Stockton main street",
      "The Stockton Bar, a well-known geological landform",
    ],
    photo: {
      ...img("stockton"),
      alt: "Stockton Town Hall, a small single-story civic building in Stockton, Utah",
      credit: {
        file: "Stockton Utah Town Hall.jpeg",
        author: "Ntsimp",
        license: "CC0",
        url: "https://commons.wikimedia.org/wiki/File:Stockton_Utah_Town_Hall.jpeg",
      },
    },
  },
];

/** County-wide photos used outside the six community guides (home tiles, bands). */
export const COUNTY_PHOTOS: Record<"stansburyIsland" | "oquirrh", CommunityPhoto & { wide?: string }> = {
  stansburyIsland: {
    ...img("stansbury-island"),
    alt: "A dirt trail along the shore of Stansbury Island in the Great Salt Lake, Tooele County, Utah",
    credit: {
      file: "Stansbury Island Trail.jpg",
      author: "OquirrhMountainMan",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Stansbury_Island_Trail.jpg",
    },
  },
  oquirrh: {
    ...img("valley-oquirrh"),
    wide: "/images/communities/valley-oquirrh-1800.webp",
    alt: "Storm clouds over the Oquirrh Mountains in east Tooele County, Utah",
    credit: {
      file: "Oquirrh Mountains in East Tooele County, Utah, United States (Unsplash).jpg",
      author: "Justin Luebke",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Oquirrh_Mountains_in_East_Tooele_County,_Utah,_United_States_(Unsplash).jpg",
    },
  },
};
