// communities.ts — one entry per Tooele County community the team serves.
// NEUTRAL geography only: no demographic, crime, school-quality, or price statistics
// (CONTENT_BRIEF §3 / site rules). Describe the place, never who lives there.
// Landmarks listed are public places. No stat appears here unless the brief provided it (none did).

export type Community = {
  slug: string;
  name: string;
  title: string; // <= 60 chars for <title>
  description: string; // <= 155 chars for meta
  intro: string;
  gettingAround: string;
  housing: string;
  thingsToDo: string[];
};

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
  },
];
