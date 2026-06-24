/**
 * lib/content.ts — single source of truth for Mr. Details site copy & data.
 * Edit business info here; components consume these typed constants.
 *
 * NOTE: items tagged `placeholder: true` (extra service-area towns) and the
 * email field are NOT confirmed by the client — see DESIGN.md §0/§5.13.
 */

/* ----------------------------- Business ----------------------------- */

export interface Business {
  name: string;
  handle: string;
  tagline: string;
  headline: string;
  headlineAccent: string; // the one gold word inside `headline`
  subhead: string;
  phoneDisplay: string;
  phoneHref: string;
  calendly: string;
  instagram: string;
  instagramHandle: string;
  region: string;
  emailPlaceholder: string; // no public email — placeholder until provided
}

export const BUSINESS: Business = {
  name: "Mr. Details",
  handle: "Mr. Details 617",
  tagline: "Mobile auto detailing on the South Shore of Massachusetts.",
  headline: "Make Your Car Shine Like Never Before",
  headlineAccent: "Shine",
  subhead: "Book a mobile detail for your car with Mr. Details today.",
  phoneDisplay: "(617) 827-2268",
  phoneHref: "tel:+16178272268",
  calendly: "https://calendly.com/mrdetails617",
  instagram: "https://instagram.com/mrdetailsmobiledetailing",
  instagramHandle: "@mrdetailsmobiledetailing",
  region: "South Shore of Massachusetts",
  emailPlaceholder: "hello@mrdetails617.com", // PLACEHOLDER — confirm with client
};

/* ------------------------------- Nav -------------------------------- */

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Area", href: "/service-area" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* --------------------------- Feature tiles -------------------------- */

export type IconName =
  | "star"
  | "pin"
  | "van"
  | "calendar"
  | "car"
  | "spray"
  | "sparkle"
  | "interior"
  | "boat"
  | "plane"
  | "gift";

export interface Feature {
  icon: IconName;
  title: string;
  blurb: string;
  href: string;
  linkLabel: string;
}

export const FEATURES: Feature[] = [
  {
    icon: "star",
    title: "5-Star Experience",
    blurb: "Years of experience cleaning all types of vehicles.",
    href: "/reviews",
    linkLabel: "Read reviews",
  },
  {
    icon: "pin",
    title: "Local Service",
    blurb: "We cover the entire South Shore region of Massachusetts.",
    href: "/service-area",
    linkLabel: "Service area",
  },
  {
    icon: "van",
    title: "We Come to You",
    blurb:
      "Mobile detail at your home or business — service all your vehicles at once.",
    href: "/how-it-works",
    linkLabel: "How it works",
  },
];

/* --------------------------- Badge marquee -------------------------- */

export const BADGES: string[] = [
  "We Come to You",
  "Auto",
  "Marine",
  "Aviation",
  "Mobile Detailing",
  "5-Star Experience",
  "Interior & Exterior",
  "South Shore, MA",
  "Easy Booking",
];

/* ------------------------------ Packages ---------------------------- */

export interface Package {
  title: string;
  scope: string;
  price: string;
  blurb: string;
  img: string;
  alt: string;
  /** Shown on the homepage Packages grid (the three core tiers). */
  featured?: boolean;
}

export const PACKAGES: Package[] = [
  {
    title: "Premium Spring Detail",
    scope: "Premium · Int + Ext",
    price: "$289",
    blurb:
      "Our ultimate clean — a complete interior and exterior detail including tire & rim restoration, engine bay clean-out, ceramic wax buffing and trim restoration.",
    img: "/img/pkg-premium.svg",
    alt: "A premium full detail with a deep ceramic-wax shine",
  },
  {
    title: "Standard Detail",
    scope: "Interior + Exterior",
    price: "$239",
    blurb:
      "Get the works — a complete interior and exterior detail for a head-to-toe transformation.",
    img: "/img/pkg-full.svg",
    alt: "A freshly detailed car, interior and exterior",
    featured: true,
  },
  {
    title: "Basic Interior Detail",
    scope: "Interior Only",
    price: "$179",
    blurb:
      "Drive in comfort with a freshly cleaned interior — seats, carpets, surfaces and glass refreshed.",
    img: "/img/pkg-interior.svg",
    alt: "A spotless detailed car interior",
    featured: true,
  },
  {
    title: "Exterior Detail",
    scope: "Exterior Only",
    price: "$89",
    blurb:
      "Make your car sparkle and shine with a fresh exterior wash and detail.",
    img: "/img/pkg-exterior.svg",
    alt: "Glossy detailed car exterior with paint reflections",
    featured: true,
  },
  {
    title: "Boat Detail",
    scope: "Marine",
    price: "$45 / ft",
    blurb:
      "All hands on deck — our crew gives your boat a full refresh from bow to stern, inside and out.",
    img: "/img/pkg-boat.svg",
    alt: "A clean, freshly detailed boat",
  },
];

/** The three core tiers shown on the homepage. */
export const FEATURED_PACKAGES: Package[] = PACKAGES.filter((p) => p.featured);

/* ------------------------- Special offers --------------------------- *
 * Multi-vehicle deal + maintenance plan (from the client's price list).
 * Seasonal/sale items — confirm current availability before publishing.
 * ------------------------------------------------------------------- */

export interface SpecialOffer {
  icon: IconName;
  title: string;
  price: string;
  blurb: string;
}

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    icon: "van",
    title: "2 Car Deluxe Sale",
    price: "$429",
    blurb:
      "Everything in the deluxe interior and exterior detail for two vehicles at a special price — the ultimate clean, x2.",
  },
  {
    icon: "calendar",
    title: "Monthly Maintenance Plan",
    price: "$1,499",
    blurb: "Keep your car in mint condition all year long.",
  },
];

/* --------------------------- Before / After ------------------------- */

export interface BeforeAfter {
  label: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

export const BEFORE_AFTERS: BeforeAfter[] = [
  {
    label: "Interior",
    before: "/img/ba-interior-before.svg",
    after: "/img/ba-interior-after.svg",
    beforeAlt: "Dirty, dusty car interior before detailing",
    afterAlt: "Spotless, refreshed car interior after detailing",
  },
  {
    label: "Exterior",
    before: "/img/ba-exterior-before.svg",
    after: "/img/ba-exterior-after.svg",
    beforeAlt: "Dull, dirty car paint before detailing",
    afterAlt: "Deep glossy car paint after detailing",
  },
];

/* ------------------------------ Reviews ----------------------------- */

export interface Review {
  quote: string;
  name: string;
  location: string;
  stars: number;
}

export const REVIEWS: Review[] = [
  {
    quote:
      "They did a fantastic job and honestly beat all of my expectations. Super convenient.",
    name: "Wilfredo Gonzalez",
    location: "Braintree, MA",
    stars: 5,
  },
  {
    quote: "These guys are great! They do what they say they will do.",
    name: "Thomas Donahue",
    location: "Weymouth, MA",
    stars: 5,
  },
  {
    // From Instagram (paraphrased) — confirm permission to reuse before publishing.
    quote:
      "They came right to our house and detailed both my and my husband's cars, inside and out. It honestly felt like getting into a brand-new car again.",
    name: "South Shore Customer",
    location: "South Shore, MA",
    stars: 5,
  },
];

/* --------------------------- Value cards ---------------------------- */

export interface ValueCard {
  initial: string;
  icon: IconName;
  title: string;
  blurb: string;
}

export const VALUES: ValueCard[] = [
  {
    initial: "5",
    icon: "star",
    title: "5-Star Experience",
    blurb: "Years detailing all types of vehicles — done right, every time.",
  },
  {
    initial: "M",
    icon: "van",
    title: "We Come to You",
    blurb: "Mobile service at your home or business, on your schedule.",
  },
  {
    initial: "S",
    icon: "pin",
    title: "South Shore Local",
    blurb: "Proudly serving the entire South Shore region of Massachusetts.",
  },
  {
    initial: "B",
    icon: "calendar",
    title: "Easy Booking",
    blurb: "Book online in minutes — we handle the rest.",
  },
];

/* --------------------------- How it works --------------------------- */

export interface Step {
  n: number;
  title: string;
  blurb: string;
}

export const STEPS: Step[] = [
  {
    n: 1,
    title: "Book Online",
    blurb: "Pick a time on our Calendly — or give us a call.",
  },
  {
    n: 2,
    title: "We Come to You",
    blurb:
      "We arrive at your home or business with everything we need to get the job done.",
  },
  {
    n: 3,
    title: "We Detail Your Vehicle(s)",
    blurb: "Interior, exterior, or both — and we can service all your vehicles at once.",
  },
  {
    n: 4,
    title: "Enjoy the Shine",
    blurb: "Drive away with a fresh, showroom-clean vehicle.",
  },
];

/* --------------------------- Service area --------------------------- */

export interface Town {
  name: string;
  /** true = unconfirmed, shown with a small marker for the client to verify */
  placeholder: boolean;
}

export const TOWNS: Town[] = [
  { name: "Braintree", placeholder: false },
  { name: "Weymouth", placeholder: false },
  { name: "Quincy", placeholder: true },
  { name: "Hingham", placeholder: true },
  { name: "Milton", placeholder: true },
  { name: "Cohasset", placeholder: true },
  { name: "Hull", placeholder: true },
  { name: "Scituate", placeholder: true },
];

/* ------------------------- Package details -------------------------- */

export interface PackageDetail {
  title: string;
  scope: string;
  includes: string[];
}

export const PACKAGE_DETAILS: PackageDetail[] = [
  {
    title: "Standard Detail",
    scope: "Interior + Exterior",
    includes: [
      "Exterior hand wash & dry",
      "Wheels, tires & wheel wells cleaned",
      "Tire shine & exterior trim dressing",
      "Full interior vacuum — seats, carpets & mats",
      "Interior surfaces wiped & dressed",
      "Interior & exterior glass cleaned",
      "Door jambs cleaned",
    ],
  },
  {
    title: "Interior Detail",
    scope: "Interior Only",
    includes: [
      "Full interior vacuum — seats, carpets & mats",
      "Seats & upholstery cleaned",
      "Dashboard, console & door panels wiped",
      "Surfaces dressed & refreshed",
      "Interior glass cleaned",
      "Door jambs cleaned",
    ],
  },
  {
    title: "Exterior Detail",
    scope: "Exterior Only",
    includes: [
      "Exterior hand wash & dry",
      "Wheels, tires & wheel wells cleaned",
      "Tire shine & trim dressing",
      "Exterior glass cleaned",
      "Spray sealant for added gloss",
      "Door jambs cleaned",
    ],
  },
];

/** Shown under the includes grid — keeps us honest about unconfirmed specifics. */
export const PACKAGE_DETAILS_NOTE =
  "Representative services — exact contents may vary by package and vehicle.";

/* ------------------------------ Add-ons ----------------------------- */

export interface Addon {
  icon: IconName;
  name: string;
  blurb: string;
}

export const ADDONS: Addon[] = [
  {
    icon: "sparkle",
    name: "High-Quality Ceramic Wax",
    blurb: "A premium ceramic wax for serious gloss and lasting protection.",
  },
  {
    icon: "star",
    name: "Rim Restoration",
    blurb: "Bring dull, grimy rims back to a clean, sharp finish.",
  },
  {
    icon: "spray",
    name: "Soft Wash & Wax Compound",
    blurb: "A gentle wash and wax compound for a smooth, glossy coat.",
  },
  {
    icon: "interior",
    name: "Pet Hair Removal",
    blurb: "Deep removal of embedded pet hair from carpets and upholstery.",
  },
  {
    icon: "car",
    name: "Engine Bay Cleaning",
    blurb: "A clean, dressed engine bay that looks as good as it runs.",
  },
  {
    icon: "van",
    name: "Headlight Restoration",
    blurb: "Clears foggy, yellowed headlights for better clarity.",
  },
];

export const ADDONS_NOTE =
  "Ask about add-ons when you book — availability and pricing confirmed at booking.";

/* --------------------------- What to expect ------------------------- */

export const WE_BRING: string[] = [
  "Everything we need to get the job done, brought right to you",
  "Professional-grade tools and detailing products",
  "Years of experience with all types of vehicles",
  "A detailer who treats your car like our own",
];

export const WE_NEED: string[] = [
  "A spot to park with a little room to work around the vehicle",
  "Access to the vehicle (and the keys)",
  "That's it — we handle the rest",
];

/* ------------------------------- FAQs ------------------------------- */

export interface Faq {
  q: string;
  a: string;
}

export const FAQ_GENERAL: Faq[] = [
  {
    q: "How do I book?",
    a: "Book online in minutes through our Calendly, or call or text us at (617) 827-2268.",
  },
  {
    q: "Do you really come to me?",
    a: "Yes — we're fully mobile. We come to your home or business anywhere across the South Shore of Massachusetts.",
  },
  {
    q: "Can you detail more than one vehicle?",
    a: "Absolutely. We can service all of your vehicles in a single visit — just let us know how many when you book.",
  },
  {
    q: "What areas do you serve?",
    a: "The South Shore region of Massachusetts, including Braintree, Weymouth and surrounding towns. Not sure if we cover your town? Just ask.",
  },
];

export const FAQ_PACKAGES: Faq[] = [
  {
    q: "Which package should I choose?",
    a: "Choose the Full Detail for a complete interior-and-exterior transformation, or pick Interior or Exterior only if you just need one.",
  },
  {
    q: "What's included in each package?",
    a: "Each package covers a thorough clean of its area — see the “What's included” list above. Exact contents are confirmed when you book.",
  },
  {
    q: "How much does a detail cost?",
    a: "Pricing depends on your vehicle's size and condition and the package you choose. Contact us for a quick quote.",
  },
  {
    q: "Do you offer add-ons?",
    a: "Yes — extras like pet hair removal, clay bar, wax and sealant, and more. Ask about add-ons when you book.",
  },
];

export const FAQ_PROCESS: Faq[] = [
  {
    q: "What do you need from me?",
    a: "Just a spot to park with a little room to work, and access to the vehicle. We bring everything else.",
  },
  {
    q: "Do I need to be home the whole time?",
    a: "Not necessarily — as long as we have access to the vehicle, we'll coordinate the details with you when you book.",
  },
  {
    q: "How long does a detail take?",
    a: "A full interior-and-exterior detail typically takes about 3–4 hours, depending on the vehicle's size and condition. We'll confirm a time estimate when you book.",
  },
  {
    q: "What happens if the weather's bad?",
    a: "We keep an eye on the forecast and will reschedule with you if needed, so your detail gets done right.",
  },
];

export const FAQ_AREA: Faq[] = [
  {
    q: "Is my town covered?",
    a: "We serve the South Shore region — Braintree and Weymouth are confirmed, and we cover many surrounding towns. Reach out and we'll let you know.",
  },
  {
    q: "Where do you detail the vehicle?",
    a: "Wherever you park it — a driveway, a parking lot, or your office. We just need a little room to work.",
  },
  {
    q: "Can you come to my workplace?",
    a: "Yes. Plenty of customers book a detail at the office — we come to you wherever you are on the South Shore.",
  },
];

/* ----------------------- Vehicle types (IG) ------------------------- *
 * From their Instagram bio: 🚗 Auto · 🛥️ Marine · 🛩️ Aviation — they detail
 * more than cars. A real differentiator.
 * ------------------------------------------------------------------- */

export interface VehicleType {
  icon: IconName;
  name: string;
  blurb: string;
}

export const VEHICLE_TYPES: VehicleType[] = [
  {
    icon: "car",
    name: "Auto",
    blurb:
      "Cars, trucks & SUVs — interior, exterior, or the full head-to-toe detail.",
  },
  {
    icon: "boat",
    name: "Marine",
    blurb: "Boats and watercraft cleaned, polished and protected.",
  },
  {
    icon: "plane",
    name: "Aviation",
    blurb: "Aircraft detailing with a careful, professional touch.",
  },
];

/* --------------------------- Regions (IG) --------------------------- *
 * Instagram lists two regions. South Shore MA is confirmed; the Florida
 * region is seasonal/unconfirmed — surfaced but clearly flagged.
 * ------------------------------------------------------------------- */

export interface Region {
  name: string;
  emoji: string;
  area: string;
  /** false = pending confirmation with the client (shown with a note). */
  confirmed: boolean;
}

export const REGIONS: Region[] = [
  {
    name: "South Shore, Massachusetts",
    emoji: "⚓️",
    area: "Braintree, Weymouth & surrounding South Shore towns.",
    confirmed: true,
  },
  {
    name: "Southwest Florida",
    emoji: "🌴",
    area: "Naples & Marco Island.",
    confirmed: false,
  },
];

/* ------------------------ Specials / extras (IG) -------------------- *
 * Instagram promos ($399 two-car, $239 winter) are seasonal — we keep the
 * evergreen "save with multiple vehicles" + gift-card messaging instead of
 * publishing prices that may have changed.
 * ------------------------------------------------------------------- */

export const GIFT_CARDS = {
  title: "Gift cards available",
  blurb:
    "A clean car makes a great gift. Gift cards are available year-round — perfect for the holidays, Mother's Day and more.",
};

export const SPECIALS_NOTE =
  "Prices may vary with vehicle size and condition. Sale and seasonal offers change throughout the year — ask about current specials when you book.";

/** Shown under priced grids — honest about size/condition variation. */
export const PRICING_NOTE =
  "Prices may vary with vehicle size and condition. Contact us for an exact quote.";
