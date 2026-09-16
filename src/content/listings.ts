// listings.ts - GENERATED from website/listings-data/listings_active.json (URE public listing pages, our own listings only).
// Regenerate: cd website/listings-data && python3 fetch_public.py && python3 parse_public.py && python3 gen_listings_ts.py <site_root>  (do not hand-edit).
// Photos are served from assets.utahrealestate.com at the MLS-published sizes; captions are the MLS photo descriptions.
export const PHOTO_BASE = 'https://assets.utahrealestate.com/photos';
export const photo = (mls: string, h: string, size: '640x480' | '1024x768' | '2048x1536' = '1024x768') => `${PHOTO_BASE}/${size}/${mls}_${h}.jpg`;
export interface ListingPhoto { h: string; alt: string; type: string; mls?: string }  // mls set only on a borrowed sister-listing rendering
export const photoOf = (l: { mls: string }, p: ListingPhoto, size: '640x480' | '1024x768' | '2048x1536' = '1024x768') => photo(p.mls || l.mls, p.h, size);
export interface Listing { mls: string; slug: string; address: string; city: string; zip: string; price: number; status: string; kind: string; style: string; yearBuilt: number | null; beds: number | null; baths: number | null; sqft: number | null; lotAcres: number | null; construction: string; remarks: string; photos: ListingPhoto[]; source: string; href: string }
export const UPDATED = '2026-09-15';
export const LISTINGS: Listing[] = [
 {
  "mls": "2135169",
  "slug": "521-e-gilmour-st-121-grantsville",
  "address": "521 E Gilmour St #121",
  "city": "Grantsville",
  "zip": "84029",
  "price": 1299000,
  "status": "Active",
  "kind": "Single Family",
  "style": "2-Story",
  "yearBuilt": 2026,
  "beds": 7,
  "baths": 5,
  "sqft": 4939,
  "lotAcres": 0.5,
  "construction": "",
  "remarks": "2026 Salt Lake Parade of Homes Showcase - A True Masterpiece by Heritage Homes! Are you ready for perfection? This stunning new construction home offers luxury and thoughtful design at every turn. From the inviting front porch to the elegant entry, you'll immediately appreciate the craftsmanship and detail. A spacious office sits just off the entry, leading to an oversized family room featuring a Heritage Homes signature fireplace, dramatic lighting and expansive glass doors opening to a huge covered deck. Natural light floods the home, creating warmth while highlighting beautiful views, The gourmet kitchen is a showstopper with custom cabinetry, double ovens, a 36\" Frigidaire professional line cooktop, Double side by side fridges and a roomy walk-in panty and a generous dining area filled with light perfect for entertaining. The primary suite offers large windows and a luxurious en suite complete with an oversized shower, soaking tub and expansive walk in closet. Upstairs features a loft, two large bedrooms, and a stunning bridge overlooking the family room below. The fully finished basement has a full kitchen and includes two additional bedrooms with a Jack and Jill bathroom spacious family room, a second bathroom and a dedicated theater room. Fully landscaped with exceptional finish work throughout and an oversized four - car garage, this Parade home truly has it all. It is a must see to fully appreciate the design space and luxury! General Contractor added several premium upgrades to this beautiful home for the Parade of Homes - Multiple water features, Auto Electric blinds throughout the house. Electronic Shades on the covered deck, Professionally designed and landscaped yard with amazing lighting. Property Features ADU Information: Attached Not Currently Rented Approx Sq. Ft.: 2,141 sqft Beds: 3 Baths: 2 Kitchen Included: Yes Separate Entrance: Yes Separate Water Meter: No Separate Gas Meter: No Separate Electric Meter: No Advertisement",
  "photos": [
   {
    "h": "871b90f3a3f3c9ddd9700724b179b692_6a60eedf29d38",
    "alt": "Contemporary two-story residence featuring a stone and board-and-batten facade",
    "type": "Exterior"
   },
   {
    "h": "b353958f2b24c17f75284a04fb257d9d_6a60f7397392a",
    "alt": "Back house",
    "type": "Exterior"
   },
   {
    "h": "87f53734fbeded887df93bc224a95e4f_6a60f739170fb",
    "alt": "Professionally landscaped backyard featuring a water feature, paved pathway, pergola, mature trees, and a white privacy fence",
    "type": "Exterior"
   },
   {
    "h": "6ebf2653de644f8eb98fc121e5fb8527_6a60f73c91ad4",
    "alt": "Back house",
    "type": "Exterior"
   },
   {
    "h": "3bbb151dc640a48146e4a3b8e0662812_6a60f73dbb024",
    "alt": "Landscaped backyard featuring a meandering rock-lined stream, dark gravel ground cover, and a concrete pathway",
    "type": "Exterior"
   },
   {
    "h": "b4366c54d834be71efe2208e1388d557_6a60f74647204",
    "alt": "Landscaped backyard featuring a tiered rock water feature, dark volcanic rock ground cover, a manicured lawn, a white privacy fence, and a distant mountain range",
    "type": "Exterior"
   },
   {
    "h": "e34c35bff5270490b59955e4eec87958_6a60f74a41407",
    "alt": "Patio terrace",
    "type": "Exterior"
   },
   {
    "h": "d078c56a04710198ee4d2edfcec337ff_6a60f74b6a340",
    "alt": "Landscaped backyard featuring a paver stone pathway, tiered rock beds, and a manicured lawn",
    "type": "Exterior"
   },
   {
    "h": "76feff6780b58f7da3ed34708045901b_6a60f2bccbaaf",
    "alt": "Living room",
    "type": "Living Room"
   },
   {
    "h": "13295ed9fcec57ed43972dfc71d91bdf_6a60f2bab71b6",
    "alt": "Spacious living area featuring a vaulted ceiling and a stone fireplace with a wood mantle",
    "type": "Living Room"
   },
   {
    "h": "c764211da4708aadb93c6c03de575fb3_6a60f2bf11465",
    "alt": "Living room",
    "type": "Living Room"
   },
   {
    "h": "b4afe050147170d5b1fdcaf7aad66fa3_6a60f648c4af1",
    "alt": "Living room",
    "type": "Living Room"
   },
   {
    "h": "b3a5fee44e99cefd6141d06d48fab1eb_6a60f2b43f273",
    "alt": "Kitchen",
    "type": "Kitchen"
   },
   {
    "h": "e48b0f0568e232ef146bbe089b059ef8_6a60f2b5eafc5",
    "alt": "Kitchen",
    "type": "Kitchen"
   },
   {
    "h": "f821756b125fca82c8f6c169121b5b64_6a60f2b97e796",
    "alt": "Kitchen",
    "type": "Kitchen"
   },
   {
    "h": "78775414c5092d366697c66d0e0c0d01_6a60f2b7898bd",
    "alt": "Dining area",
    "type": "Dining Area"
   },
   {
    "h": "23e09686aaa8fc0765bb554cb1cc8ada_6a60f2b0891ac",
    "alt": "Kitchen",
    "type": "Kitchen"
   },
   {
    "h": "90c54493f97ef6adacad0702ed55f7c9_6a60f36ab70a6",
    "alt": "Dedicated room featuring a French door entry, extensive wainscoting, wood-finish flooring, and window shutters",
    "type": "Office"
   },
   {
    "h": "1dd7614f6320166a70c5d69aa5648fb8_6a60f3fd11aec",
    "alt": "Freestanding soaking tub with matte black floor-mounted faucet, surrounded by large format wall tiling and coordinating floor tiles",
    "type": "Bathroom"
   },
   {
    "h": "d1fddde1dad20d0d57c95e1df8fe64ef_6a60f4a8277cf",
    "alt": "Bedroom",
    "type": "Bedroom"
   },
   {
    "h": "2c83ae9430fb9cb5ffa72810c6c1a398_6a60f4002a420",
    "alt": "Room featuring a linear fireplace with a shiplap surround and wood mantle",
    "type": "Bedroom"
   },
   {
    "h": "0e6ca9f3ac94c0a19795c54d9a9945c3_6a60f3fd9511a",
    "alt": "Bathroom",
    "type": "Bathroom"
   },
   {
    "h": "4d2bebaf75b143ee4b7b8e3c4bdc086b_6a60f3f326294",
    "alt": "Spacious bathroom featuring a frameless glass shower enclosure with matte black fixtures, a built-in shower bench, and two recessed shelves",
    "type": "Bathroom"
   },
   {
    "h": "1cb1236e5aeefbd62429ab2a2d97d10e_6a60f3fb1cd84",
    "alt": "Freestanding soaking tub with a floor-mounted matte black faucet, surrounded by large format tile flooring and a wainscot of marble-look wall tile",
    "type": "Bathroom"
   },
   {
    "h": "979749d3500b138e52937d441928353d_6a60f3f8743b8",
    "alt": "Shower enclosure with large format porcelain tile walls, a matte black shower door handle, and built-in corner shelving",
    "type": "Bathroom"
   },
   {
    "h": "a00e7056d769ca06b7bd638126a728aa_6a60f3f9c26bf",
    "alt": "Frameless glass shower enclosure featuring a matte black rain shower head and handheld sprayer",
    "type": "Bathroom"
   },
   {
    "h": "c851bbf1f2df9663359830fc00ef9214_6a60f3f53addd",
    "alt": "Built-in wood-finish cabinetry with drawers, plantation shutters, and overhead lighting",
    "type": "Closet"
   },
   {
    "h": "48d2fc34fc1c8c75ef8e52b926c9e422_6a60f3f65902e",
    "alt": "Walk-in closet with extensive white built-in shelving, hanging rods, and light beige carpeting",
    "type": "Closet"
   },
   {
    "h": "1b0fb290e75db26db44ee791257872bc_6a60f64c25796",
    "alt": "Mudroom featuring custom wood cabinetry with dark pulls, a built-in storage bench, white wainscoting, and wood-finish flooring",
    "type": "Mud Room"
   },
   {
    "h": "ac7ba70bc6583f181026a4d8be7850e5_6a60f64f74e5c",
    "alt": "Laundry area featuring a utility sink with a black faucet, white countertop, and wood-finish cabinetry",
    "type": "Laundry Room"
   },
   {
    "h": "579a7b25b9fb692dd87131ba26080281_6a60f64b6e195",
    "alt": "Bathroom",
    "type": "Bathroom"
   },
   {
    "h": "c411c0abbf878709d9e1278be8d0271c_6a60f5707c9df",
    "alt": "Carpeted interior space featuring a large window, recessed lighting, white baseboards, and a white interior door",
    "type": "Exercise Room"
   },
   {
    "h": "7fa2d828c2baa2949f2f5ad7e9e08e64_6a60f5793887e",
    "alt": "Living room",
    "type": "Living Room"
   },
   {
    "h": "6eae7c5a2399de465d18ec463f10de0f_6a60f575bc041",
    "alt": "Living room",
    "type": "Living Room"
   },
   {
    "h": "12168b95fda7d13967e1a845e00886c3_6a60f5784ec0c",
    "alt": "Open-concept living space featuring wood-finish flooring and recessed lighting throughout",
    "type": "Living Room"
   },
   {
    "h": "3c3f6fc4dbfb69facaeb5e77d2eaac23_6a60f5750f44b",
    "alt": "Kitchen",
    "type": "Kitchen"
   },
   {
    "h": "b14b116d829ecb8dfcbb904566f66f99_6a60f56fa5c1f",
    "alt": "Dining area",
    "type": "Dining Area"
   },
   {
    "h": "8377c91c9ad36ca71150173ba3db8f8e_6a60f56881e91",
    "alt": "Spacious room featuring neutral carpeting, recessed ceiling lighting, and a wide window with white trim",
    "type": "Bedroom"
   },
   {
    "h": "c582239dd8670e73b251eb6f988ab9c6_6a60f56d06df7",
    "alt": "Bedroom",
    "type": "Bedroom"
   },
   {
    "h": "84f15928d6fca705970f9b2e662043e0_6a60f572b86e9",
    "alt": "Bathroom",
    "type": "Bathroom"
   },
   {
    "h": "bb69c1882f98786051642a63cffd1f8a_6a60f56b4859a",
    "alt": "Bathroom featuring a deep blue herringbone tile shower surround, a white bathtub, and a dark wood-finish vanity with a light-toned countertop",
    "type": "Bathroom"
   },
   {
    "h": "4bf524c454732f4aa55177de898df408_6a60f63da10ad",
    "alt": "Spacious room featuring plush carpet flooring, a ceiling fan with integrated lighting, and recessed lighting",
    "type": "Bedroom"
   },
   {
    "h": "23e608a0340a7140ae9a246638fe8ddd_6a60f63da1751",
    "alt": "Plush carpeted flooring, a five-blade ceiling fan, recessed lighting, and a window with plantation shutters",
    "type": "Bedroom"
   },
   {
    "h": "0740bc2c87f57a9b479f7c45c2211d5a_6a60f640c750b",
    "alt": "Bathroom",
    "type": "Bathroom"
   },
   {
    "h": "b9736867c4e94d806ff60e8392a3c035_6a60f6416a011",
    "alt": "Dual vanity with wood-finish cabinetry, white countertops, and integrated sinks",
    "type": "Bathroom"
   },
   {
    "h": "3835a408321a2c089d6200cf268e543e_6a60f644bedd6",
    "alt": "Spacious room with plush gray carpeting, recessed ceiling lighting, and a modern black ceiling fan",
    "type": "Bedroom"
   },
   {
    "h": "67df165883c7c5e24eae5a4fcd6cd524_6a60f647b0980",
    "alt": "Room featuring plush carpeting and a window with plantation shutters",
    "type": "Bedroom"
   },
   {
    "h": "8a16eace72fb4d61c783f23181c3bb8c_6a60f5681c148",
    "alt": "Recessed lighting and a central chandelier illuminate this room featuring wood-finish flooring and white baseboards",
    "type": "Other"
   },
   {
    "h": "acb71cfff11bc6afad0399bc7d9a5c77_6a60f643eccf5",
    "alt": "Hallway featuring wood-finish flooring, white baseboards, and recessed ceiling lighting",
    "type": "Other"
   },
   {
    "h": "2f33af17892e620df30686bbc718ba9d_6a60f7402df4d",
    "alt": "Multi-tiered water feature with natural stone boulders, dark volcanic rock landscaping, and integrated accent plants, all bordered by a white privacy fence",
    "type": "Other"
   },
   {
    "h": "e6e821903d84a432d3383581c8ecf06a_6a60f742a0925",
    "alt": "Cascading water feature with natural stone boulders and dark gravel landscaping",
    "type": "Other"
   },
   {
    "h": "0cbddb2eb5ffb90206f332269554c76a_6a60f7449406e",
    "alt": "Outdoor water feature with natural stone and flowing water, bordered by dark volcanic rock landscaping",
    "type": "Other"
   },
   {
    "h": "bd33d2728d2c428bdc059b879745a7ef_6984aa23ade4d",
    "alt": "Photo #53",
    "type": "Floor Plan"
   },
   {
    "h": "0320cae30df86166beeeb6f1715a03d0_6984aa23b18e4",
    "alt": "Photo #54",
    "type": "Floor Plan"
   },
   {
    "h": "a448afd851f64c67e623ede377b895e7_6984aa2568050",
    "alt": "Photo #55",
    "type": "Floor Plan"
   }
  ],
  "source": "https://www.utahrealestate.com/2135169",
  "href": "/listings/521-e-gilmour-st-grantsville/"
 },
 {
  "mls": "2160660",
  "slug": "4087-n-cochrane-ln-erda",
  "address": "4087 N Cochrane Ln",
  "city": "Erda",
  "zip": "84074",
  "price": 999000,
  "status": "Active T/C",
  "kind": "Single Family",
  "style": "Rambler/Ranch",
  "yearBuilt": 2004,
  "beds": 4,
  "baths": 4,
  "sqft": 4010,
  "lotAcres": 1.94,
  "construction": "",
  "remarks": "Country living at its finest! This beautifully upgraded homes sits on 2 professionally landscaped acres designed perfectly for horse lovers. Enjoy two pasture areas, a horse walker, round corral, outdoor riding arena, 2 covered stalls with a Nelson waterer, and additional hay storage, tractor storage, covered storage (or an extra 4 stalls there is a hydrant and an additional Nelson waterer that will service these stalls.) and a lockable tack room with a yard light. All the horse fencing is RAM strap with hot wire. The property also features a 16' by 20' shop with a 16' by 10' covered patio overlooking raised garden beds with auto drip system and a small fruit tree orchard. The yard is set up for a trailer, water and power hook ups, 5 water hydrants, Natural gas hook up for barbecue. Inside you'll love the custom cabinetry, granite countertops, travertine flooring, Stainless GE cafe appliances range, dishwasher, microwave and refrigerator and a warming drawer. A cozy fireplace in the family room. The spacious primary suite opens to the back patio and includes a luxurious bath with walk-in shower, soaker tub, generous counter space and a large organized walk-in closet.The mudroom is large and has great storage along with having a shower making it easy to clean up after working outside. Upstairs offers a large bonus room ideal for an office, family room or bedroom. The basement includes an exterior entrance, dining room with fireplace and controllable thermostat. beautiful cherry kitchen, travertine floors, granite countertops, GE stainless appliances, range, dishwasher, microwave and refrigerator. The family room has 7 in 1 stereo speakers with cat 5 system. two additional bedrooms one with a walk in closet. There's also a great workshop and storage space 9' x44' - Under the front porch storage space 4' x 12'. Also included water softener, the water heater has recirculating heat pump and the HVAC is high efficiency. The well pump is a variable pump water filter and surge tank. This home has great ADU potential. The incredible property must be seen to be appreciated!! \"NEW ROOF IN 2025 with a transferable warranty!! and a RADON MITIGATION SYSTEM!\" There is an extra power box by round pen for future building. There is a light by the round pen for night time use. (There are 5 hydrants on the property - side road, walker, back pasture, hay barn, orchard) The pastures have full sprinklers systems with timers. The garden is on a drip system with a timer. Property Features ADU Information: Attached Not Currently Rented Approx Sq. Ft.: 1,797 sqft Beds: 2 Baths: 1 Kitchen Included: Yes Separate Entrance: Yes Separate Water Meter: No Separate Gas Meter: No Separate Electric Meter: No Advertisement",
  "photos": [
   {
    "h": "934a7e4690e9f8fb01210e0a0d1db630_6a16043228387",
    "alt": "Brick and stucco exterior featuring a prominent gabled roofline and natural wood shutters",
    "type": "Exterior"
   },
   {
    "h": "7aca7a76031b7ee99cd5e08a1561e3d6_6a162f0509bce",
    "alt": "Expansive property featuring a main residence with brown roofing, multiple outbuildings, a large rectangular green space, and two circular sand areas",
    "type": "Exterior"
   },
   {
    "h": "7f9dc291c28e00a8a0780feca80b04b9_6a162e3b7e6de",
    "alt": "Aerial view showcasing extensive grounds with a large green pasture, an expansive sand arena, a barn structure with a reddish-brown roof, a gravel drive, and mature trees providing shade",
    "type": "Exterior"
   },
   {
    "h": "2be06acca9afa5cb8d35db7c1e119411_6a1608382bd66",
    "alt": "Brick and stucco exterior featuring a covered front porch with columns, a prominent front gable, and a driveway with a white fence",
    "type": "Exterior"
   },
   {
    "h": "9375559377467f24625a75289fd912ee_6a160863183a8",
    "alt": "Expansive residence featuring a brick and siding exterior, a gabled roofline, and a covered front porch with columns",
    "type": "Exterior"
   },
   {
    "h": "8b80810919ccde584f3134ec4488504a_6a16212f966c2",
    "alt": "Brown corrugated metal building with a light-colored entry door, concrete pad, and white perimeter fencing",
    "type": "Exterior"
   },
   {
    "h": "e0a720a4141a3771a01bf38d9873110a_6a162133e99bf",
    "alt": "Metal-sided outbuilding with a tan access door, concrete pad, and adjoining gravel area",
    "type": "Exterior"
   },
   {
    "h": "25cb03b4f31a857133702c8395b5118a_6a1621357ba49",
    "alt": "Metal-sided barn structure with multiple open bays and a gravel floor",
    "type": "Exterior"
   },
   {
    "h": "4e7c846b5b5970df10a5a6c6d0077775_6a162138ad706",
    "alt": "Metal-sided barn featuring a covered overhang, multiple bay openings, and interior lighting fixtures",
    "type": "Exterior"
   },
   {
    "h": "516f42b53a7b7200795d3a157437362e_6a16213b3c576",
    "alt": "Gravel entrance area with a metal archway and white fencing, featuring a dark metal gate with decorative elements",
    "type": "Exterior"
   },
   {
    "h": "a51e05f6cd35582a6353102944417486_6a16213cd5c64",
    "alt": "Enclosed round pen with a sand base, surrounded by metal fencing",
    "type": "Exterior"
   },
   {
    "h": "9dc6e9e7b8a944318ddafd2b520c6844_6a16213d75e8e",
    "alt": "Accessory structure with dual-pane windows and a covered entry, concrete patio, gravel pathways, and white perimeter fencing",
    "type": "Exterior"
   },
   {
    "h": "b10ecfe438dd373cc262fed8f5576cdb_6a16213ea0a6e",
    "alt": "Outdoor area featuring established trees, a white perimeter fence, and a gravel surface",
    "type": "Exterior"
   },
   {
    "h": "736e1731e2e4217443002c20549d8683_6a16213f6e5aa",
    "alt": "Expansive gravel outdoor arena with metal panel fencing",
    "type": "Exterior"
   },
   {
    "h": "4e368f5f38f6ffd6f3abd458b7354439_6a162140350bb",
    "alt": "Enclosed equestrian arena featuring a white three-rail fence, a central training apparatus, and a gravel surface",
    "type": "Exterior"
   },
   {
    "h": "0066a8d43c5c377e0d143905b469c286_6a162141c4c86",
    "alt": "Gravel lot with white fencing",
    "type": "Exterior"
   },
   {
    "h": "cc1db49b09d6c017dc49b67d157003f0_6a162144bd2c4",
    "alt": "Expansive lawn area featuring white vinyl fencing, a gravel driveway, and distant mountain scenery",
    "type": "Exterior"
   },
   {
    "h": "905900461191e6e0b48cd510cb866f4e_6a162145dbaaf",
    "alt": "Gravel driveway flanked by a white fence with brick pillars, set against a backdrop of mature trees and distant mountains",
    "type": "Exterior"
   },
   {
    "h": "c15c17ddc8fd8769b4bdf2a453c83473_6a1621e7c59fd",
    "alt": "Cream-colored outbuilding with a gambrel roofline, featuring decorative doors, a weather vane, and an attached wood pergola",
    "type": "Exterior"
   },
   {
    "h": "908f491d3a886def3f5d8fd868e97d23_6a1621e7bbe7d",
    "alt": "Gravel-finished outdoor area featuring mature trees, a white fence line, and a concrete patio section",
    "type": "Exterior"
   },
   {
    "h": "edeb20d7c010b0bf0046e51f686fea01_6a1621ee1917d",
    "alt": "Covered patio area featuring a ceiling fan, concrete flooring, and a pergola entry",
    "type": "Exterior"
   },
   {
    "h": "d55ab4820c0a8cb1b884a34aa86c4ef6_6a1621eebd7df",
    "alt": "Expansive grassy yard area with a rock-edged garden bed",
    "type": "Exterior"
   },
   {
    "h": "39e5e8ec27f9f0b3a8f35981888b2f8d_6a1621efb985c",
    "alt": "Covered patio featuring an exposed wood beam ceiling, stained concrete flooring, and an exterior wall with vertical siding",
    "type": "Exterior"
   },
   {
    "h": "0174402bc26c7fdfcee488558b4071f9_6a1621f0656fe",
    "alt": "Barn-style outbuilding featuring a covered patio, concrete flooring, and an adjacent raised garden bed",
    "type": "Exterior"
   },
   {
    "h": "6e2b255f57c8d4e6cdf458cf9a1b19a0_6a1621f144961",
    "alt": "Side yard featuring a cultivated garden bed with drip irrigation, a light-colored privacy fence, and a concrete pathway leading to a building with a brown shingle roof",
    "type": "Exterior"
   },
   {
    "h": "73a747dfed4bd614d407b7f45f57e35f_6a1621f1e8521",
    "alt": "Expansive backyard garden featuring multiple raised garden beds, a drip irrigation system, and a white privacy fence",
    "type": "Exterior"
   },
   {
    "h": "2c20c87f5bab3170db278a2a208db614_6a1621f2d8d00",
    "alt": "Expansive backyard featuring a manicured lawn, a rock border, and a white picket fence",
    "type": "Exterior"
   },
   {
    "h": "d1b2ca87081b6da37634e3692d897f7c_6a1621f3bfcfe",
    "alt": "Manicured lawn with a decorative rock border and concrete edging",
    "type": "Exterior"
   },
   {
    "h": "9dc6e9e7b8a944318ddafd2b520c6844_6a1621f47ab05",
    "alt": "Accessory structure with dual-pane windows and a covered entry, concrete patio, gravel pathways, and white perimeter fencing",
    "type": "Exterior"
   },
   {
    "h": "a7df1c68c92ca04a48d521f1cf524a8a_6a16224f1cc54",
    "alt": "Exterior patio area featuring textured stucco walls and a dark brown soffit",
    "type": "Exterior"
   },
   {
    "h": "a6218ceda8f1073ac728b916f612abf0_6a16224f8b692",
    "alt": "Expansive lawn area with natural rock landscaping, mature shade trees, and a gravel drive",
    "type": "Exterior"
   },
   {
    "h": "cc3c3c35e107031ab9d001da3598ecaa_6a16225118e8e",
    "alt": "Spacious lawn featuring mature trees with rock and mulch beds, a fenced perimeter, and a covered back patio",
    "type": "Exterior"
   },
   {
    "h": "b2a5e6651b680e61ad71d7a618673b5e_6a162251e036c",
    "alt": "Expansive concrete patio area shaded by mature trees, featuring a stone retaining wall and terraced steps",
    "type": "Exterior"
   },
   {
    "h": "1b42ce070d2877ed10e78bdc1736c2c4_6a162252e9206",
    "alt": "Expansive concrete patio area with a covered porch featuring stucco siding",
    "type": "Exterior"
   },
   {
    "h": "4c038150ae93e8152768678d2cdafe1c_6a16225439bd6",
    "alt": "Spacious outdoor area with a concrete patio, mature trees, and a gravel bed",
    "type": "Exterior"
   },
   {
    "h": "753bd50731d144e82ea5079f441d2628_6a16225547aa0",
    "alt": "Expansive concrete patio with mature trees providing natural shade",
    "type": "Exterior"
   },
   {
    "h": "ce84d91f1f93567e2cc5a4697316af14_6a162255e00f2",
    "alt": "Covered patio featuring textured stucco exterior walls and a brown paneled ceiling",
    "type": "Exterior"
   },
   {
    "h": "4dc35d4c1b606161b1acd896fba224d2_6a162256d7032",
    "alt": "Expansive concrete patio with a landscaped planting bed",
    "type": "Exterior"
   },
   {
    "h": "f3f5160fb689d0e4631b4965cbd95860_6a162257b13e4",
    "alt": "Expansive outdoor living area featuring a concrete patio, mature trees, and a rock retaining wall",
    "type": "Exterior"
   },
   {
    "h": "d886d8fe2edd5368ac7742b7681170e1_6a1622589b4ae",
    "alt": "Expansive green lawn with a white fence enclosure surrounding a gravel arena",
    "type": "Exterior"
   },
   {
    "h": "2aa01e78d1b3246eb25b625fc5ef6081_6a160c84e81b1",
    "alt": "Spacious living area featuring a stone-clad fireplace with a built-in television alcove and wood mantel",
    "type": "Living Room"
   },
   {
    "h": "3ca40b7ad92fc3fe319d0d20bf80baee_6a160c837e0ac",
    "alt": "Expansive living area featuring a stone-clad fireplace, integrated shelving, wood-finish cabinetry, recessed lighting, and a ceiling fan",
    "type": "Living Room"
   },
   {
    "h": "db760fccdc912a3d0c9deab86f96b0fe_6a160c838681c",
    "alt": "Central stone fireplace with an arched television recess and a wood mantel",
    "type": "Living Room"
   },
   {
    "h": "faf38cf82e291b9217c1a23417ee6afc_6a160c851223f",
    "alt": "Open-concept living area featuring a stone-faced fireplace with hearth, a wood mantel, and built-in shelving",
    "type": "Living Room"
   },
   {
    "h": "77981f60bcc3bd624c7d78e173041902_6a160d11cafc9",
    "alt": "Open-concept kitchen featuring light wood cabinetry, stone-finish countertops, stainless steel appliances, and tile flooring",
    "type": "Kitchen"
   },
   {
    "h": "5bf9c2b7dd5c97a2385707e4dcefc949_6a160d4f9dbe0",
    "alt": "Kitchen and dining area featuring light-toned tile flooring throughout",
    "type": "Dining Area"
   },
   {
    "h": "bf66d33551c0a17a6f991288cedabfc2_6a160e143e93f",
    "alt": "Spacious kitchen featuring extensive wood cabinetry, stainless steel double ovens, and a large center island with a stone countertop",
    "type": "Kitchen"
   },
   {
    "h": "4b0cde241cffff82a736c4d0d6e5fd63_6a160e90c5e79",
    "alt": "Kitchen featuring a central island with granite countertop, extensive wood cabinetry, stainless steel appliances, recessed lighting, and patterned tile flooring",
    "type": "Kitchen"
   },
   {
    "h": "c898290478fe49cc8bc21d92df1cf307_6a160f425b3e9",
    "alt": "Spacious open-concept kitchen and living area featuring a large granite-topped island, light wood cabinetry, and stainless steel built-in appliances",
    "type": "Kitchen"
   },
   {
    "h": "a2fad39dde65bf49227c0ac192632bb3_6a16101aad156",
    "alt": "Carpeted room with a ceiling fan, recessed lighting, crown molding, and two windows with Roman shades",
    "type": "Bedroom"
   },
   {
    "h": "7f1cb72dda9a31d44809f481eff1cf47_6a16102b79dea",
    "alt": "Carpeted room featuring a large window with Roman shades, crown molding, recessed lighting, and a ceiling fan",
    "type": "Bedroom"
   },
   {
    "h": "4852fe20327d9f8d27bb556d28fe2798_6a16122f1cc19",
    "alt": "Bathroom featuring dual vanities with granite countertops, a built-in makeup area, a tiled walk-in shower, a built-in soaking tub, and natural light from a large window",
    "type": "Bathroom"
   },
   {
    "h": "f476b5136ce08da8e8997b9f0800f8d1_6a1612910723b",
    "alt": "Walk-in shower featuring full-height natural stone tiling, a decorative border, and a contrasting checkered floor pattern",
    "type": "Bathroom"
   },
   {
    "h": "0b5b6cd3ea0ebd8ba7c7180880e3bf3b_6a1612c066173",
    "alt": "Soaking tub with bronze fixtures, surrounded by stone tile and wood-finish accents",
    "type": "Bathroom"
   },
   {
    "h": "ecc13b70a5bca4c35204139634f2a5f6_6a16136f91fa7",
    "alt": "Bathroom featuring an integrated corner soaking tub with deck-mounted fixtures, a single vanity with wood cabinetry and a stone-look countertop, and large format tile flooring",
    "type": "Bathroom"
   },
   {
    "h": "a0878427be06795e1d37fb904afe8619_6a1613a811dff",
    "alt": "Spacious walk-in closet featuring extensive built-in shelving, multiple hanging rods, and neutral-toned carpeting",
    "type": "Closet"
   },
   {
    "h": "6f1e605c20f9010add7afb6582f427f5_6a1614a203b05",
    "alt": "Carpeted bedroom featuring a wooden headboard, recessed closet door with black hardware, and a ceiling fan with light fixture",
    "type": "Bedroom"
   },
   {
    "h": "ae3497b4a791d83e29f470d54056c911_6a1615561b8a0",
    "alt": "Carpeted bedroom featuring a vaulted ceiling and an arched window",
    "type": "Bedroom"
   },
   {
    "h": "934a46c6e4a691e096c272a4186d400a_6a1615ba5b4cb",
    "alt": "Corner shower with textured glass enclosure and chrome hardware",
    "type": "Bathroom"
   },
   {
    "h": "ef89142e49b5981e97e4f32e43c708cd_6a16178f48962",
    "alt": "Tub and shower combination featuring earth-toned wall tile and a built-in shower niche with shelving",
    "type": "Bathroom"
   },
   {
    "h": "98beeb6654ed615bce5658117a0d6f79_6a16178f631d5",
    "alt": "Bathroom featuring a wood-finish vanity with a granite-style countertop and an undermount sink",
    "type": "Bathroom"
   },
   {
    "h": "43b16183101625eb75a0a55c8ac439a1_6a16179063895",
    "alt": "Staircase featuring neutral carpeting, a polished wood handrail, and white trim",
    "type": "Stairs"
   },
   {
    "h": "abf543cd0ac100f10ae460b663ddfb3f_6a161837e4ab8",
    "alt": "Spacious attic room with sloped ceilings and light beige carpeting",
    "type": "Living Room"
   },
   {
    "h": "51260c234cbe8929ecd624fc22c97cbe_6a1618eb6fcb5",
    "alt": "Open-concept living space featuring a stacked stone fireplace with a wood mantel, recessed lighting, and a ceiling fan",
    "type": "Dining Area"
   },
   {
    "h": "a85701725bcd7fb796da207c0e584b0d_6a1618f3ea74a",
    "alt": "Carpeted living space featuring a stone-clad fireplace with a dark wood mantel, recessed lighting, and multiple windows with blinds",
    "type": "Dining Area"
   },
   {
    "h": "c7807923e5462357ac49188c299b8bbf_6a161934b3408",
    "alt": "Lower-level entertainment space featuring a full kitchen with wood cabinetry, light-toned countertops, and stainless steel appliances",
    "type": "Kitchen"
   },
   {
    "h": "62efeb7e3381591e2a3cd3b833b2975f_6a16199fe60cc",
    "alt": "Full kitchen featuring stainless steel appliances, wood cabinetry, and a granite countertop island with pendant lighting",
    "type": "Kitchen"
   },
   {
    "h": "1eb7cec38d834c9db99f1b5a16518144_6a1619f83d5f4",
    "alt": "Kitchen island with a light granite countertop and beadboard paneling",
    "type": "Kitchen"
   },
   {
    "h": "c6747b9cc64a971c31ae9d7e38680186_6a161a371038d",
    "alt": "Recessed lighting throughout, crown molding with accent lighting, and wall sconces provide varied illumination",
    "type": "Living Room"
   },
   {
    "h": "41965021b8bc728456af2e24b15ebde7_6a161a7313576",
    "alt": "Open-concept living area featuring plush carpeting and recessed lighting",
    "type": "Living Room"
   },
   {
    "h": "41965021b8bc728456af2e24b15ebde7_6a161a9875318",
    "alt": "Open-concept living area featuring plush carpeting and recessed lighting",
    "type": "Living Room"
   },
   {
    "h": "d136cf9a63aa062bb7d82b3e31026155_6a161b595a576",
    "alt": "Neutral-toned walls complement plush carpeting",
    "type": "Bedroom"
   },
   {
    "h": "6ec9d99bb876f0f06a47845584d992c8_6a161c574bb6a",
    "alt": "Bathroom featuring a natural wood vanity with dark hardware, a dark stone-finish countertop, and an undermount sink",
    "type": "Bathroom"
   },
   {
    "h": "98dcca0d0d91cda48e7f5fc076b4fe61_6a161d4c76542",
    "alt": "Carpeted room with recessed lighting and a window featuring horizontal blinds",
    "type": "Exercise Room"
   },
   {
    "h": "f1df5c78bd9883ac95f88e65fbbbcf13_6a16212c1442d",
    "alt": "Enclosed storage structure featuring exposed wood paneling, metal ceiling, and concrete flooring",
    "type": "Storage"
   },
   {
    "h": "144aeaa23c4ce7140b66648ecf79d512_6a1621372e4ef",
    "alt": "Image quality insufficient for description",
    "type": "Stable"
   },
   {
    "h": "ba41fd12e944ef4b7ba54bb0897c3199_6a162139b6813",
    "alt": "Gravel turnout area featuring metal fencing, a covered barn structure with multiple stalls, a white perimeter fence, and concrete paving",
    "type": "Stable"
   },
   {
    "h": "b473d8c0c39fd1bca46773f8dd8118aa_6a16213a6aa14",
    "alt": "Gravel-surfaced paddock area featuring metal corrals and a covered shelter with a corrugated metal roof",
    "type": "Stable"
   },
   {
    "h": "4682ecd0fc9c2b4539afcb6064e2bd5c_6a16213be0a3d",
    "alt": "Expansive gravel-surfaced equestrian area featuring multiple fenced enclosures, a covered livestock shelter with a metal roof, and an additional barn structure with exterior stalls",
    "type": "Stable"
   },
   {
    "h": "9bdf01da6d413d19fe1bb59addf80b95_6a1621e97bdd1",
    "alt": "Utility space featuring exposed wood framing, a large skylight, and multiple light fixtures",
    "type": "Storage"
   },
   {
    "h": "da28526172c13e9d9de352b218e477f0_6a1621e9d27ef",
    "alt": "Image quality insufficient for description",
    "type": "Storage"
   },
   {
    "h": "142fbb20e55567ee67d767daceda8346_6a1621ed2b11a",
    "alt": "Utility building featuring exposed wood framing, a skylight, and concrete flooring",
    "type": "Storage"
   },
   {
    "h": "4ab6e70c908498588aa117f9053d740b_6a1617e355e74",
    "alt": "Carpeted room featuring a ceiling fan with light fixture, a window, and sloped ceilings",
    "type": "Other"
   },
   {
    "h": "47d100465244977bc0d9abc2c3585e9e_6a162142523ce",
    "alt": "Gravel drive featuring white post-and-rail fencing, mature trees, and a mountain backdrop",
    "type": "Other"
   },
   {
    "h": "a98716dac1f4b11e5dab0e905c0d0c32_6a162143b64ee",
    "alt": "Expansive concrete driveway flanked by mature trees and a white picket fence",
    "type": "Other"
   },
   {
    "h": "0f32c65cb534f3bf88ff75ca67457290_6a1621480e8b4",
    "alt": "Expansive gravel driveway providing ample parking",
    "type": "Other"
   },
   {
    "h": "33e4c44efac60d9f33e8d6ec8cf14427_6a1621eb0e6b3",
    "alt": "Image quality insufficient for description",
    "type": "Other"
   },
   {
    "h": "7e7da696974566fddeae7483d7537bb7_6a1621eb8f79b",
    "alt": "Utility shed interior featuring exposed wood-finish framing, a loft storage area, and pegboard walls",
    "type": "Other"
   },
   {
    "h": "44064eeef09128ed8b65951526957832_6a1621ec98d1e",
    "alt": "Spacious utility shed featuring exposed wood framing, concrete flooring, and ample pegboard storage",
    "type": "Other"
   }
  ],
  "source": "https://www.utahrealestate.com/2160660",
  "href": "/listings/4087-n-cochrane-ln-erda/"
 },
 {
  "mls": "2176025",
  "slug": "732-s-chancelor-way-108-grantsville",
  "address": "732 S Chancelor Way #108",
  "city": "Grantsville",
  "zip": "84029",
  "price": 819000,
  "status": "Active",
  "kind": "Single Family",
  "style": "2-Story",
  "yearBuilt": 2026,
  "beds": 4,
  "baths": 3,
  "sqft": 4433,
  "lotAcres": 0.5,
  "construction": "To Be Built",
  "remarks": "Welcome home to the Addie by Heritage Homes - A stunning two-story plan with a main floor primary suite. This home is designed with both beauty and function in mind. Step through the grand entry into a spacious office or formal living room, then continue into the open-concept family room filled with natural light. Gather around one of Heritage Homes signature fireplaces and enjoy a warm, inviting space perfect for relaxing or entertaining. The bright dining area flows seamlessly into the oversized kitchen complete with high end upgrades and a generous pantry offering plenty of storage. Whether you're preparing everyday meals or hosting friends and family, this kitchen is designed to impress. The luxurious primary suite features an oversized shower a large soaking tub and a spacious walk in closest. Upstairs you have flexible options, enjoy three generously sized bedrooms, or transform the third bedroom into an open loft space overlooking the the family room below. With the exceptional craftsmanship and thoughtful details Heritage Homes is known for, the Addie is a new construction opportunity you won't want to miss. Property Features Interior Features Bath: Primary Bath: Sep. Tub/Shower Closet: Walk-In Den/Office Dishwasher, Built-In Disposal Gas Log Kitchen: Second Oven: Double Range: Countertop Vaulted Ceilings Quartz Countertops Floor Coverings: Carpet; Tile; Vinyl (LVP) Air Conditioning: Central Air; Electric Heating: Forced Air; Gas: Central Basement: (0% finished) Full Advertisement",
  "photos": [
   {
    "h": "656838f4265e8e34971b0cf0ab9a2e2c_6a5db0d6b8c7f",
    "alt": "Contemporary architectural design featuring a stone and white siding exterior",
    "type": "Exterior"
   },
   {
    "h": "391210279e701afed2edf449b4a85778_6a5db0b95d5f1",
    "alt": "Photo #2",
    "type": "Floor Plan"
   }
  ],
  "source": "https://www.utahrealestate.com/2176025",
  "href": "/listings/732-s-chancelor-way-108-grantsville/"
 },
 {
  "mls": "2146259",
  "slug": "1042-e-shilow-rd-135-erda",
  "address": "1042 E Shilow Rd #135",
  "city": "Erda",
  "zip": "84074",
  "price": 788000,
  "status": "Active",
  "kind": "Single Family",
  "style": "Rambler/Ranch",
  "yearBuilt": 2026,
  "beds": 3,
  "baths": 2,
  "sqft": 3649,
  "lotAcres": 1.0,
  "construction": "To Be Built",
  "remarks": "The Aidan by Heritage Homes showcases exceptional design and thoughtful detail throughout. An inviting open entry leads to a bright family room featuring a warm fireplace and abundant natural light. The spacious kitchen flows seamlessly into the dining area and includes a large walk in pantry, perfect for everyday living and entertaining. A convenient half bath is located just off the family room for guests. The primary suite offers a large shower, soaking tub and generous walk-in closet, while two additional bedrooms provide comfortable, well sized living spaces. A beautiful blend of function and style in this stunning new home. Call for more details on this new construction Property Features Interior Features Bath: Primary Bath: Sep. Tub/Shower Closet: Walk-In Dishwasher, Built-In Disposal Gas Log Oven: Double Smart Thermostat(s) Quartz Countertops Floor Coverings: Carpet; Tile; Vinyl (LVP) Air Conditioning: Central Air; Electric Heating: Forced Air; Gas: Central Basement: (0% finished) Full Advertisement",
  "photos": [
   {
    "h": "55c9af10946f4771da7a268e03837ee7_6a5aae1be75cb",
    "alt": "Representative rendering of the Aidan plan by Heritage Homes (elevation and finishes vary)",
    "type": "Exterior",
    "mls": "2172935"
   },
   {
    "h": "9bdfff505277dc6cf97f932eda1c7c1f_69ef906e9a8f5",
    "alt": "View of miscellaneous document",
    "type": "Other"
   },
   {
    "h": "31085989517783af0b55663065cbfe99_69ef908103412",
    "alt": "View of room layout",
    "type": "Other"
   },
   {
    "h": "4946f3081bed28da5d57033bb3e76fde_69ef908c3bdca",
    "alt": "View of property floor plan",
    "type": "Other"
   }
  ],
  "source": "https://www.utahrealestate.com/2146259",
  "href": "/listings/1042-e-shilow-rd-135-erda/"
 },
 {
  "mls": "2157141",
  "slug": "952-e-shilow-rd-131-erda",
  "address": "952 E Shilow Rd #131",
  "city": "Erda",
  "zip": "84074",
  "price": 759900,
  "status": "Active",
  "kind": "Single Family",
  "style": "Rambler/Ranch",
  "yearBuilt": 2026,
  "beds": 3,
  "baths": 2,
  "sqft": 3720,
  "lotAcres": 1.0,
  "construction": "To Be Built",
  "remarks": "Country living elevated on this beautiful 1-acre horse property with breathtaking view of Tooele County and the surrounding mountains. This thoughtfully designed 3720 sq foot home features a fantastic open floor plan with vaulted ceilings, oversized windows, and abundant natural light throughout. Enjoy a spacious kitchen and dining area perfect for gathering and entertaining. The large primary suite offers a relaxing retreat with a luxurious primary bathroom designed for comfort and style. Bring your horses, toys, and outdoor dreams. There's room for it all while enjoying peaceful country living just minutes from amenities and 30 minutes from downtown Salt Lake City Property Features Interior Features Bath: Primary Bath: Sep. Tub/Shower Closet: Walk-In Dishwasher, Built-In Disposal Range/Oven: Free Stdng. Vaulted Ceilings Quartz Countertops Floor Coverings: Carpet; Tile; Vinyl (LVP) Window Coverings: None Air Conditioning: Central Air; Gas Heating: Forced Air; Gas: Central Basement: (0% finished) Full Advertisement",
  "photos": [
   {
    "h": "3c132521a57929811b8ffcb413083866_6a02b7f75a93e",
    "alt": "Contemporary ranch-style exterior featuring a black roof, white vertical siding, light-toned stone accents, and a dual garage",
    "type": "Exterior"
   },
   {
    "h": "7dba772afa2f7641dcdc8649c93a5447_6a5f6aca6c13e",
    "alt": "Photo #2",
    "type": "Floor Plan"
   }
  ],
  "source": "https://www.utahrealestate.com/2157141",
  "href": "/listings/952-e-shilow-rd-131-erda/"
 },
 {
  "mls": "2176021",
  "slug": "193-e-swather-way-109-grantsville",
  "address": "193 E Swather Way #109",
  "city": "Grantsville",
  "zip": "84029",
  "price": 749900,
  "status": "Active",
  "kind": "Single Family",
  "style": "Rambler/Ranch",
  "yearBuilt": 2026,
  "beds": 3,
  "baths": 2,
  "sqft": 3729,
  "lotAcres": 0.5,
  "construction": "Under Construction",
  "remarks": "'$15,000.00 TOWARD CLOSING COSTS IF YOU USE OUR LENDER\" This incredible home is packed with high-end upgrades and truly has to be seen to be believed. Step into a stunning kitchen featuring rich walnut cabinetry, elegant walnut beams, a large walk-in pantry, and Taj Mahal quartz countertops throughout. An 8' high by 10 - foot wide sliding glass door floods the space with natural light and creates the perfect indoor-outdoor flow. The family room boasts oversized bright windows, a soaring 12-foot vaulted ceiling, and a grand fireplace that anchors the space beautifully. Designer lighting is thoughtfully placed throughout the home, enhancing every room. The luxurious primary suite offers custom cabinetry with a large center console and a unique cantilevered seating area is an ideal retreat. The huge oversized four car garage provides exceptional storage and parking. the interior basement entrance leads to a spacious basement that has been pre-plumbed for a future kitchen and laundry room, making it perfect for a potential ADU. \"The photos are of a home Epic Homes built with the same finishes and design\" This is a must see Property Features Interior Features Gas Log Range/Oven: Free Stdng. Vaulted Ceilings Granite Countertops Floor Coverings: Carpet; Tile; Vinyl (LVP) Window Coverings: None Air Conditioning: Central Air; Electric Heating: Forced Air; Gas: Central Basement: (0% finished) Full Advertisement",
  "photos": [
   {
    "h": "3c132521a57929811b8ffcb413083866_6a6e92e1b3a0f",
    "alt": "Contemporary exterior with board-and-batten siding, stone accents, and a black shingle roof",
    "type": "Exterior"
   },
   {
    "h": "a8cc9605e68593bc3ad4f7a404699c4f_6a6e92fe0a7e1",
    "alt": "Bright foyer featuring wood-finish flooring and a contemporary chandelier",
    "type": "Entry"
   },
   {
    "h": "33588ecbc36738f4f9d079644f3529c5_6a6e934b23e25",
    "alt": "Living area featuring large picture windows, wood-finish flooring, a contemporary fireplace with a floating mantel, recessed lighting, and a ceiling fan",
    "type": "Living Room"
   },
   {
    "h": "85d6172721c8e872711fb900b9fc3d35_6a6e9396c3072",
    "alt": "Spacious living area featuring high vaulted ceilings, expansive windows with mountain scenery, wood-finish flooring, a contemporary fireplace with a wood mantle, and recessed lighting",
    "type": "Living Room"
   },
   {
    "h": "3a9e21b23f0ee0e501e0d290689d53ad_6a6e934d812af",
    "alt": "Open-concept living space featuring wood-finish flooring, a vaulted ceiling with a ceiling fan and recessed lighting, and a wall of tall windows",
    "type": "Living Room"
   },
   {
    "h": "5b8690e1d24ddd196f585ae0d914ff33_6a6e9396cc9e7",
    "alt": "Expansive living area featuring vaulted ceilings, recessed lighting, and large windows",
    "type": "Living Room"
   },
   {
    "h": "402a1fd57ee4385a8298fef857180036_6a6e93999506f",
    "alt": "Spacious living area featuring high vaulted ceilings, recessed lighting, and wood-finish flooring",
    "type": "Living Room"
   },
   {
    "h": "558ff5ac8829f0fc2ca93a6c5c29ea58_6a6e9341777bf",
    "alt": "Open-concept kitchen featuring wood-finish flooring, custom cabinetry, stainless steel appliances, and stone countertops",
    "type": "Kitchen"
   },
   {
    "h": "7fa5fc46b86a0ce10d8897aed9048ddb_6a6e934319cfd",
    "alt": "Chef's kitchen featuring custom wood cabinetry, a large center island with waterfall-edge countertop, stainless steel appliances, subway tile backsplash, and pendant lighting",
    "type": "Kitchen"
   },
   {
    "h": "07c6bd68e8a55bbb7d179d3a51120852_6a6e934634dd1",
    "alt": "Stainless steel gas range with a tiled backsplash",
    "type": "Kitchen"
   },
   {
    "h": "123bb0aeaa28412f0d2dedb037ef0a0d_6a6e93476dc2f",
    "alt": "Kitchen featuring wood-finish flooring, recessed lighting, and exposed ceiling beams",
    "type": "Kitchen"
   },
   {
    "h": "c5536adc5334d11c60ef8085115d1e65_6a6e934a39e8d",
    "alt": "Kitchen featuring a large central island with light-toned countertops, wood-finish flooring, recessed lighting, exposed ceiling beams, and warm wood cabinetry",
    "type": "Kitchen"
   },
   {
    "h": "2ce6b552ff38bd7b9cfa9f3f94d58b78_6a6e939a6611d",
    "alt": "Dining area featuring wood-finish flooring, a coffered ceiling with a wood beam accent, and recessed lighting",
    "type": "Dining Area"
   },
   {
    "h": "558ff5ac8829f0fc2ca93a6c5c29ea58_6a6e939c7de0d",
    "alt": "Open-concept kitchen featuring wood-finish flooring, custom cabinetry, stainless steel appliances, and stone countertops",
    "type": "Kitchen"
   },
   {
    "h": "7fa5fc46b86a0ce10d8897aed9048ddb_6a6e939d674b4",
    "alt": "Kitchen featuring a large central island with a light-toned countertop, wood-finish flooring, exposed ceiling beams, and a window overlooking outdoor scenery",
    "type": "Kitchen"
   },
   {
    "h": "07c6bd68e8a55bbb7d179d3a51120852_6a6e93a0bd7b5",
    "alt": "Kitchen area featuring wood-finish cabinetry with crown molding, stainless steel range, and a tiled backsplash",
    "type": "Kitchen"
   },
   {
    "h": "123bb0aeaa28412f0d2dedb037ef0a0d_6a6e93a18d8eb",
    "alt": "Kitchen featuring wood-finish flooring, an extensive island with countertop, and overhead wood beams",
    "type": "Kitchen"
   },
   {
    "h": "f7d88e155d67a5d50c47d5d38bf3b2d0_6a6e93c2cc9b9",
    "alt": "Dedicated mudroom featuring custom built-in cabinetry with open shelving above and below, wood-finish flooring, recessed ceiling lighting, and ample wall space for organization and storage",
    "type": "Mud Room"
   },
   {
    "h": "c2a131561e6b6bd1feeef628a4fdacfc_6a6e93c384c42",
    "alt": "Bathroom featuring a white tub and toilet, wood-finish vanity with a light-toned countertop, and patterned floor and wall tiling",
    "type": "Bathroom"
   },
   {
    "h": "1d1b7ff9e23e13ca15880275efad4cbc_6a6e93c68a8f1",
    "alt": "Bright interior space featuring white walls and a vaulted ceiling",
    "type": "Bedroom"
   },
   {
    "h": "85e6f44442d57e54a194081eb11a4a52_6a6e93c790bf4",
    "alt": "Spacious walk-in closet featuring built-in shelving, hanging rods, an integrated storage tower, light-colored walls, and neutral-toned carpeting",
    "type": "Closet"
   },
   {
    "h": "f5497e3cd0bdf7bc6c2cbfb43e5ab2e2_6a6e93c9ac6ca",
    "alt": "Spacious shower enclosure with clear glass panels, brass-finish hardware, and a built-in shower bench",
    "type": "Bathroom"
   },
   {
    "h": "2f2ddd5e4cb9e09bfe16ed417b6887ae_6a6e93ca3df1f",
    "alt": "Double vanity with stone countertop, integrated sinks, wood cabinetry, and brass fixtures",
    "type": "Bathroom"
   },
   {
    "h": "5e4d515bb8959814932080ee754b18b5_6a6e93ccbcdf2",
    "alt": "Bathroom featuring a built-in soaking tub, a single vanity with wood-finish cabinetry and a stone countertop, and large format tile flooring",
    "type": "Bathroom"
   },
   {
    "h": "90212ff4d0ae31fc4c02513a6b5cafdf_6a6e93cd7eb81",
    "alt": "Vaulted ceilings with recessed lighting, large window bay with built-in seating, expansive picture windows, ceiling fan, and sliding barn door entry",
    "type": "Bedroom"
   },
   {
    "h": "9112d8bee210392afe14e9a945f9ec72_6a6e93c060072",
    "alt": "Spacious two-car garage with two overhead doors featuring upper window panels, concrete flooring, and automatic door openers",
    "type": "Garage"
   },
   {
    "h": "2ac6b0f0cec7608465f85a8b9d5d6c47_6a6e93bfd5c19",
    "alt": "Spacious three-car garage featuring concrete flooring, automatic garage door openers, and insulated overhead doors with upper window panes",
    "type": "Garage"
   },
   {
    "h": "cf440ac9acf11067274d28fde7535b7a_6a6e88c6eaa9b",
    "alt": "Photo #28",
    "type": "Floor Plan"
   }
  ],
  "source": "https://www.utahrealestate.com/2176021",
  "href": "/listings/193-e-swather-way-109-grantsville/"
 },
 {
  "mls": "2172935",
  "slug": "732-s-chancelor-way-107-grantsville",
  "address": "732 S Chancelor Way #107",
  "city": "Grantsville",
  "zip": "84029",
  "price": 698000,
  "status": "Active",
  "kind": "Single Family",
  "style": "Rambler/Ranch",
  "yearBuilt": 2026,
  "beds": 3,
  "baths": 3,
  "sqft": 3764,
  "lotAcres": 0.51,
  "construction": "To Be Built",
  "remarks": "The Aidan by Heritage Homes showcases exceptional design and thoughtful detail throughout. An inviting open entry leads to a bright family room featuring a warm fireplace and abundant natural light. The spacious kitchen flows seamlessly into the dining area and includes a large walk in pantry, perfect for everyday living and entertaining. A convenient half bath is located just off the family room for guests. The primary suite offers a large shower, soaking tub and generous walk-in closet, while two additional bedrooms provide comfortable, well sized living spaces. A beautiful blend of function and style in this stunning new home. Call for more details on this new construction Property Features Interior Features Bath: Primary Bath: Sep. Tub/Shower Closet: Walk-In Dishwasher, Built-In Disposal Gas Log Great Room Oven: Double Range: Countertop Range: Gas Quartz Countertops Floor Coverings: Carpet; Tile; Vinyl (LVP) Air Conditioning: Central Air; Electric Heating: Forced Air; Gas: Central; >= 95% efficiency Basement: (0% finished) Full Advertisement",
  "photos": [
   {
    "h": "55c9af10946f4771da7a268e03837ee7_6a5aae1be75cb",
    "alt": "Modern farmhouse exterior featuring board and batten siding",
    "type": "Exterior"
   },
   {
    "h": "354e055fe4cf857535551b60aa6697a9_6a5ab071ac716",
    "alt": "Photo #2",
    "type": "Floor Plan"
   }
  ],
  "source": "https://www.utahrealestate.com/2172935",
  "href": "/listings/732-s-chancelor-way-107-grantsville/"
 },
 {
  "mls": "2182884",
  "slug": "2140-n-lincoln-ln-pine-canyon",
  "address": "2140 N Lincoln Ln",
  "city": "Pine Canyon",
  "zip": "84074",
  "price": 419000,
  "status": "Active",
  "kind": "Land",
  "style": "",
  "yearBuilt": null,
  "beds": null,
  "baths": null,
  "sqft": null,
  "lotAcres": 5.29,
  "construction": "",
  "remarks": "Discover this beautiful 5.29 acre building lot in the highly desirable Heritage Estates subdivision in Pine Canyon. Enjoy breathtaking views of the surrounding mountains, valley, and Great Salt Lake. With plenty of space and a peaceful setting this property offers country living at its finest while remaining close to local convinces. Come take a look and imagine building your dream home here! Property Features Features Utilities: Gas: Available; Power: Available; Sewer: Septic Tank Lot: Corner Lot; Horse Property; View: Lake; View: Mountain; View: Valley Water: Well(s) Land Use: Weeds Advertisement",
  "photos": [
   {
    "h": "5ff0b36ac65667ab6846dead1a472892_6a9ed84d52c1e",
    "alt": "White exterior siding with dark gray roof",
    "type": ""
   },
   {
    "h": "ab0f9d6365817e435f9b19eef33dc1cf_6a9ed7fdc7fc2",
    "alt": "Expansive natural landscape featuring a paved road",
    "type": ""
   },
   {
    "h": "3f927f72e75f3f7f8b9e2a46d9ae8663_6a9ed8400d53f",
    "alt": "Expansive golden grass landscape with mountain backdrop",
    "type": ""
   },
   {
    "h": "ddbd513a9d68ba99ee3c72c3ce8013a2_6a9ed8435d493",
    "alt": "Expansive open field with a mountainous backdrop",
    "type": ""
   },
   {
    "h": "c8d1f405ec85585d389a52c4f8fd49e9_6a9ed846dc4af",
    "alt": "Expansive open field with dry grasses, bordered by a wooden fence, with mountain backdrop",
    "type": ""
   },
   {
    "h": "25a5d3d05908b84013605130976f36ae_6a9ed849d129a",
    "alt": "Expansive parcel featuring a natural landscape and distant mountain range",
    "type": ""
   }
  ],
  "source": "https://www.utahrealestate.com/2182884",
  "href": "/listings/2140-n-lincoln-ln-pine-canyon/"
 },
 {
  "mls": "2164327",
  "slug": "2501-n-lincoln-ln-pine-canyon",
  "address": "2501 N Lincoln Ln",
  "city": "Pine Canyon",
  "zip": "84074",
  "price": 415000,
  "status": "Active",
  "kind": "Land",
  "style": "",
  "yearBuilt": null,
  "beds": null,
  "baths": null,
  "sqft": null,
  "lotAcres": 5.56,
  "construction": "",
  "remarks": "Breathtaking view abound on this 4.94 acre parcel nestled into the heart of scenic Pine Canyon. If you've been dreaming of wide open spaces, fresh mountain air and unmatched privacy, this is the property you've been waiting for! With plenty of room to bring your horses, build your dream home or create your own private retreat, the expansive lot offers endless possibilities Enjoy peaceful surroundings, stunning natural landscapes and the freedom that comes with acreage living - all while being close enough to modern conveniences. Property Features Features Utilities: Gas: Available; Power: Available; Sewer: Septic Tank Lot: Horse Property; Secluded Yard; Terrain: Flat; View: Lake; View: Mountain; View: Valley Water: Well(s) Advertisement",
  "photos": [
   {
    "h": "07ad0301138058947f0bdc584dbe7fea_6a2797ee3e0e2",
    "alt": "Expansive mountain range backdrop with natural terrain and a broad field of green and gold grasses in the foreground",
    "type": ""
   },
   {
    "h": "c45a9fc61bd29c103ed5da02dd41fb0a_6a2797ee43b95",
    "alt": "Image quality insufficient for description",
    "type": ""
   },
   {
    "h": "12d8a6647294a4f0e05908f257da7fe6_6a2797ef2fb80",
    "alt": "Image quality insufficient for description",
    "type": ""
   },
   {
    "h": "50233711b020c4a7e831f20858fb14d9_6a2797ef3ce9e",
    "alt": "Image quality insufficient for description",
    "type": ""
   },
   {
    "h": "95bded6283d56f504d379876714bbae8_6a2797f021378",
    "alt": "Expansive open land featuring natural grasses and distant mountains",
    "type": ""
   },
   {
    "h": "39a12f42f7caa69cb2586f7e3435424e_6a2797f037fe7",
    "alt": "Image quality insufficient for description",
    "type": ""
   }
  ],
  "source": "https://www.utahrealestate.com/2164327",
  "href": "/listings/2501-n-lincoln-ln-pine-canyon/"
 }
];
export const fmtPrice = (n: number) => '$' + n.toLocaleString('en-US');
