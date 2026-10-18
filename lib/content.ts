// Homepage content, transcribed from the aakashindia.in WordPress homepage HTML.
// Image paths point at local copies in public/images/aakash-india (see manifest.json).

const IMG = "/images/aakash-india";
const SITE = "https://aakashindia.in";

export type Img = { src: string; width: number; height: number; alt: string };

export const site = {
  name: "Aakash India",
  url: SITE,
  phone: "7969059999",
  phoneHref: "tel:+917969059999",
  email: "info@aakashindia.in",
  address: "Corporate Office : Payal Cinema Complex, Mango, Jamshedpur - 831012, India",
  whatsapp:
    "https://wa.me/916287999409?text=" +
    encodeURIComponent("Hi *Aakash India*! I need more info about Aakash India https://aakashindia.in/."),
  enquireHref: "/contact-us/",
  logo: {
    src: `${IMG}/2023-12-aakash_india_new_logo_white_page-0001-removebg-preview.webp`,
    width: 441,
    height: 163,
    alt: "Aakash India – Building Lifestyles, since 1971",
  } satisfies Img,
  social: [
    { label: "Facebook", href: "https://www.facebook.com/AakashIndiaprojects/", icon: "facebook" },
    { label: "Instagram", href: "https://www.instagram.com/aakashindiap/", icon: "instagram" },
    { label: "YouTube", href: "https://www.youtube.com/@aakashindiagroup", icon: "youtube" },
  ] as const,
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Our Projects",
    href: "/portfolio/",
    children: [
      { label: "Completed Projects", href: "/portfolio/?osf_portfolio_status=Completed" },
      { label: "Ongoing Projects", href: "/portfolio/?osf_portfolio_status=Ongoing" },
      { label: "Upcoming Projects", href: "/upcoming-project/" },
    ],
  },
  { label: "About Us", href: "/about-us/" },
  { label: "Rental / Resale properties", href: "/rental-resale-properties/" },
  { label: "Land", href: "/land-development/" },
  { label: "Leasing", href: "/leasing-opportunities/" },
  { label: "Career", href: "/career/" },
  { label: "Blog", href: `${SITE}/blog/` },
  { label: "Contact", href: "/contact-us/" },
  { label: "FAQ", href: "/faq/" },
];

export type HeroSlide = { kicker: string; lines: [string, string]; href: string; image: Img };

// Source order. The live slider opens on slide 02 (Aakash Riviera), as in the reference screenshot.
export const heroSlides: HeroSlide[] = [
  {
    kicker: "Aakash Nirvana",
    lines: ["The Ultimate Sky", "Living Experience"],
    href: `${SITE}/project/nirvana/`,
    image: { src: `${IMG}/2023-12-aakash-nirvana.webp`, width: 2200, height: 1696, alt: "Aakash Nirvana residential tower at dusk" },
  },
  {
    kicker: "Aakash Riviera",
    lines: ["Luxury Homes", "Inspired By Nature"],
    href: `${SITE}/project/riviera/`,
    image: { src: `${IMG}/2024-01-drone-cam.webp`, width: 1440, height: 810, alt: "Aerial view of Aakash Riviera beside the Subarnarekha river and Dalma hills" },
  },
  {
    kicker: "Aakash Skyline",
    lines: ["Step Into A World Of", "Your Dreams"],
    href: `${SITE}/project/skyline/`,
    image: { src: `${IMG}/2024-01-aerial-.webp`, width: 1667, height: 938, alt: "Aerial night view of Aakash Skyline, Mango" },
  },
  {
    kicker: "Aakash Courtyard",
    lines: ["Where Business", "Is A Lifestyle"],
    href: `${SITE}/project/courtyard/`,
    image: { src: `${IMG}/2024-01-ext-01-2-scaled.webp`, width: 2400, height: 1349, alt: "Aakash Courtyard commercial building exterior" },
  },
  {
    kicker: "Puri",
    lines: ["Your home in Puri", "Is waiting"],
    href: "/upcoming-project/",
    image: { src: `${IMG}/2026-07-rathyatra-banner.webp`, width: 2240, height: 1260, alt: "Coming soon in Puri – Rath Yatra banner" },
  },
];
export const HERO_INITIAL = 1;

export const about = {
  kicker: "WHO WE ARE",
  title: "A Legacy of Excellence - Transforming Dreams into Reality since 1971",
  visionTitle: "The Vision of Mr Hari Sawa",
  body: "Starting from a small hardware mart, he aimed to bring big city ideas to the small town and established the Aakash India Foundation. Following Late Hari Sawa’s footsteps, we, at Aakash India, grew from very small beginnings to landmark projects over five decades. Today, Mr. Rahul Sawa and Mr. Vishal Sawa lead with empathy, carrying forward their father’s legacy of innovation. Our current projects are landmarks changing the city’s horizon, and we’re excited to keep dreaming up new ideas for the future.",
  cta: { label: "more About Us", href: "/about-us/" },
  portrait: { src: `${IMG}/2024-03-img20240314161926-1-scaled-e1710424120234.webp`, width: 1450, height: 1578, alt: "Framed portrait of the late Mr Hari Sawa, founder of Aakash India" } satisfies Img,
  building: { src: `${IMG}/2023-12-aakash-courtyard-scaled.webp`, width: 2400, height: 1192, alt: "Aakash Courtyard, a landmark commercial project in Jamshedpur" } satisfies Img,
};

export const story = {
  title: "Story of Aakash India",
  videoId: "0pwVXVCiqX8",
  poster: { src: `${IMG}/2023-12-aakash-riviera-gallery-9.webp`, width: 1000, height: 560, alt: "Aerial render of Aakash Riviera on the riverfront" } satisfies Img,
};

export type Project = { name: string; location: string; rera?: string; href: string; image: Img };

export const projects: Project[] = [
  {
    name: "Aakash Riviera Mall",
    location: "New Jamshedpur",
    rera: "JRERA/PROJECT/618/2019",
    href: `${SITE}/portfolio/aakash-riveria-mall/`,
    image: { src: `${IMG}/2025-07-cam_02-rev-1-min-1400x700.webp`, width: 1400, height: 700, alt: "Commercial project in Jamshedpur" },
  },
  {
    name: "Aakash Aananda",
    location: "Dimna main road",
    rera: "JHARERA/PROJECT/212/2024",
    href: `${SITE}/portfolio/aakash-aananda/`,
    image: { src: `${IMG}/2025-01-view4-1400x700.webp`, width: 1400, height: 700, alt: "Residential Flat in Jamshedpur" },
  },
  {
    name: "Aakash Nirvana",
    location: "Sonari, Jamshedpur",
    rera: "JHARERA/PROJECT/106/2023",
    href: `${SITE}/portfolio/nirvana/`,
    image: { src: `${IMG}/2019-10-shot_06_edit-1-scaled-1-1024x576-1.webp`, width: 1024, height: 576, alt: "Aakash Nirvana residential project in Sonari" },
  },
  {
    name: "Aakash Courtyard",
    location: "New Jamshedpur",
    rera: "JHARERA/PROJECT/86/2022",
    href: `${SITE}/portfolio/courtyard/`,
    image: { src: `${IMG}/2023-12-3.webp`, width: 1000, height: 560, alt: "Aakash Courtyard commercial project" },
  },
  {
    name: "Aakash Skyline",
    location: "Mango, Jamshedpur",
    rera: "JHARERA/PROJECT/114/2022",
    href: `${SITE}/portfolio/skyline/`,
    image: { src: `${IMG}/2023-12-4.webp`, width: 1000, height: 560, alt: "Aakash Skyline residential project in Mango" },
  },
  {
    name: "Aakash Riviera",
    location: "New Jamshedpur",
    href: `${SITE}/portfolio/riviera/`,
    image: { src: `${IMG}/2023-12-aakash-riviera-gallery-9.webp`, width: 1000, height: 560, alt: "Aakash Riviera riverside residences" },
  },
];

const feat = (file: string, width: number, height: number) => ({ src: `${IMG}/${file}`, width, height, alt: "" });

export const features: { title: string; text: string; image: Img }[] = [
  { title: "Community Living", text: "We aim to create spaces where people can interact, connect, share, and build lasting relationships. We promote community living, which makes our residential properties feel like home and promotes a sense of belonging.", image: feat("2023-12-aakash-riviera-gallery-29.webp", 1000, 560) },
  { title: "Luxurious Amenities", text: "From well-equipped fitness centers to relaxing spa facilities, Aakash India’s housing projects ensure you experience a blend of luxury and comfort. Our strategic approach caters to different requirements with finesse.", image: feat("2023-12-aakash-riviera-gallery-17.webp", 1000, 560) },
  { title: "Top-Tier Consultants", text: "We at Aakash India ensure only the best consultants handle our operations. Our commitment towards delivering the highest quality is maintained by experts who ensure every project matches the set standards.", image: feat("2024-01-shutterstock_1020878011-scaled.webp", 2400, 1600) },
  { title: "Premium Quality Materials", text: "We use only the finest materials in our constructions. Our QA team ensures that the quality of the materials is not compromised, which gives our structures the required durability and overall customer satisfaction in every project.", image: feat("2025-08-shutterstock_747626554-scaled-1.webp", 2400, 1602) },
  { title: "Compliance and Best Practices", text: "We adhere to best practices and comply with all government regulations, which ensures our seriousness towards our vision and mission. We ensure that our societies are luxurious, safe, and legally sound.", image: feat("2024-01-shutterstock_2350338023-scaled.webp", 2400, 1600) },
  { title: "Structured and Specialized Teams", text: "Our organisational structure includes dedicated teams for engineering, structure, planning, accounts, marketing, and sales. Our team's strong foundation ensures that every aspect of our operations is handled with finesse.", image: feat("2024-01-shutterstock_497560648-scaled.webp", 2400, 1602) },
  { title: "State-of-the-Art Infrastructure", text: "Aakash India is synonymous with the best infrastructure in the region. Our projects are designed to offer homes and a complete and upscale living experience.", image: feat("2024-02-shutterstock_559826938-scaled.webp", 2400, 1350) },
  { title: "Strategic Site Selection", text: "We carefully choose sites in prime locations with stunning views and excellent connectivity. The selection process is vital to providing our clients with the best living environments.", image: feat("2024-01-shutterstock_1091497337-scaled.webp", 2400, 1348) },
  { title: "Creating Landmarks", text: "Our approach to development is about constructing buildings and creating landmarks. Each project symbolises our commitment to excellence and is a testament to why we are the most preferred developer in Jharkhand.", image: feat("2024-01-shutterstock_1573010833-scaled.webp", 2400, 1350) },
  { title: "First Corporate Park in Jamshedpur", text: "Jamshedpur's inaugural corporate park marks a significant milestone in the city's economic evolution. Designed to be a nucleus for business activity, this modern hub promises top-notch infrastructure and strategic location benefits.", image: feat("2024-01-shutterstock_2179635301-scaled.webp", 2400, 1600) },
  { title: "First Riverside Project", text: "Introducing the first-ever riverside project, set to redefine urban living with its picturesque location and innovative design. This transformative development promises a harmonious blend of nature and modern amenities, creating an idyllic sanctuary for residents and visitors alike.", image: feat("2024-01-drone-1-scaled.webp", 2400, 1350) },
  { title: "Dedicated Customer Relationship Management (CRM)", text: "Our dedicated CRM system stands as a cornerstone of our commitment to exceptional customer service.", image: feat("2024-01-shutterstock_2186135471-1-scaled.webp", 2400, 1600) },
];

export const awards = {
  kicker: "AWARDS & RECOGNITION",
  title: "Stars on Our Shoulders",
  image: {
    src: `${IMG}/2024-01-3-3.webp`,
    width: 1440,
    height: 656,
    alt: "Aakash India awards: Swacha Bharat Award, Young Indians Award, Jharkhand Ke Gaurav Award, SBI Home Loans Partner in Building Homes Award, Ranchi Home Expo Award and Emerging Jharkhand 2022",
  } satisfies Img,
};

export const legacy = {
  kicker: "THE LEGACY",
  years: "55",
  titleRest: "years of establishing our mark in the real estate industry",
  text: "Our real estate development journey shines brighter with the effort and commitment we put into creating scintillating living and workspaces.",
  // Final values of the source counters (data-to-value).
  stats: [
    { value: "1000", label: "Happy Customers" },
    { value: "5", label: "Ongoing Projects" },
    { value: "20", label: "Completed Projects" },
    { value: "50", label: "Employees" },
  ],
  badge: { value: "55", label: "Years of Legacy" },
  image: { src: `${IMG}/2024-01-cam-01.webp`, width: 1583, height: 1108, alt: "Aakash Courtyard street-level render" } satisfies Img,
};

export const testimonial = {
  kicker: "TESTIMONIALS",
  title: "What our satisfied clients say about their experience",
  quote:
    "“It is not just surrounded by nature, but Dalma hills on one side, Subarnekha river on the other side with added benefits such as multi-cuisine restaurants and commercial complex.”",
  name: "Dr. Sunil Kumar",
  role: ["Former Head of Surgery", "Tata Main Hospital, Jamshedpur"],
  image: { src: `${IMG}/2023-12-aakash-riviera-gallery-17.webp`, width: 1000, height: 560, alt: "Aakash Riviera amenities" } satisfies Img,
};

const ev = (file: string, width: number, height: number) => ({ src: `${IMG}/${file}`, width, height });

// The live carousel loops and opens on December, as in the reference screenshot.
export const events: { month: string; text: string; image: Img }[] = [
  { month: "DECEMBER", text: "Embarked on a commemoration of our founder's day", image: { ...ev("2024-03-founders-day-award-ceremoni-2023_2.webp", 1572, 1016), alt: "Founder's Day award ceremony" } },
  { month: "JANUARY", text: "Witnessed the dawn of an extraordinary year in the making", image: { ...ev("2024-02-whatsapp-image-2023-05-08-at-18.10.16.webp", 1156, 867), alt: "New Year celebration with the Aakash India team" } },
  { month: "FEBRUARY", text: "Participated in the joyous event of our MD's birthday celebration", image: { ...ev("2024-03-birthday-of-rahulji-2024.webp", 1600, 1200), alt: "MD's birthday celebration" } },
  { month: "MARCH", text: "Experienced Empowering launches and festivities", image: { ...ev("2024-02-image-1.webp", 1040, 468), alt: "Launches and festivities in March" } },
  { month: "APRIL", text: "Aakash Blood Donation Camp: Giving Hope, Saving Lives.", image: { ...ev("2026-06-img_9387-scaled.webp", 2400, 1600), alt: "Aakash blood donation camp" } },
  { month: "MAY", text: "Marked a celebration honoring our workers' dedication and hard work", image: { ...ev("2024-02-whatsapp-image-2023-05-08-at-18.46.34.webp", 768, 1024), alt: "Workers' day celebration" } },
  { month: "JULY", text: "Witnessed us celebrating the joyous event of our Vishal’s sir Birthday", image: { ...ev("2024-03-birthday-of-vishalji-2023.webp", 1080, 812), alt: "Birthday celebration of Mr Vishal Sawa" } },
  { month: "AUGUST", text: "Independence Day celebration with pride, unity, and patriotism.", image: { ...ev("2026-09-whatsapp-image-2026-09-23-at-11.35.40-am.webp", 1600, 1066), alt: "Independence Day celebration" } },
  { month: "SEPTEMBER", text: "Vishwakarma Puja is celebrated in September to honor Lord Vishwakarma", image: { ...ev("2026-09-img_2162-scaled.webp", 2400, 1800), alt: "Vishwakarma Puja celebration" } },
  { month: "OCTOBER", text: "Witnessed us celebrating the auspicious occasion of lights", image: { ...ev("2024-02-whatsapp-image-2023-05-08-at-18.53.58.webp", 1440, 1081), alt: "Diwali celebration" } },
];

export const posts = [
  {
    title: "Discover Premium Apartments in Jamshedpur with Aakash India",
    href: `${SITE}/discover-premium-apartments-in-jamshedpur-with-aakash-india/`,
    date: "September 27, 2026",
    iso: "2026-09-27",
    image: { src: `${IMG}/2026-09-discover-premium-apartments-in-jamshedpur-with-aakash-india-850x480.webp`, width: 850, height: 480, alt: "Family walking outside premium apartments in Jamshedpur at sunset" },
  },
  {
    title: "Discover Luxury Living with Aakash India: Premium Residential Projects in Jamshedpur",
    href: `${SITE}/discover-luxury-living-with-aakash-india-premium-residential-projects-in-jamshedpur/`,
    date: "September 11, 2026",
    iso: "2026-09-11",
    image: { src: `${IMG}/2026-09-discover-luxury-living-with-aakash-india-premium-residential-850x480.webp`, width: 850, height: 480, alt: "Family playing on a lawn near residential towers" },
  },
  {
    title: "Find Your Perfect 3BHK Flat in Jamshedpur: A Comprehensive Buying Guide",
    href: `${SITE}/find-your-perfect-3bhk-flat-in-jamshedpur-a-comprehensive-buying-guide/`,
    date: "August 31, 2026",
    iso: "2026-08-31",
    image: { src: `${IMG}/2026-08-find-your-perfect-3bhk-flat-in-jamshedpur-850x480.webp`, width: 850, height: 480, alt: "3BHK flat buying guide for Jamshedpur" },
  },
];
export const postCategories = [
  { label: "Builders", href: `${SITE}/category/builders/` },
  { label: "Real Estate", href: `${SITE}/category/builders/` },
];
export const blogAuthor = { name: "Aakash India", href: `${SITE}/author/devaakash/` };

export const footer = {
  newsletterBg: { src: `${IMG}/2023-12-night-drone.webp`, width: 2000, height: 1125, alt: "" } satisfies Img,
  tagline: "A Legacy of Excellence – Transforming Dreams into Reality for Last 55 Years.",
  // Plain text in the source except for the one linked phrase.
  seoText: [
    "Aakash India projects in Jamshedpur | ",
    { label: "Flats Jamshedpur", href: `${SITE}/flat-in-jamshedpur/` },
    " | Premium Project Mango, Jamshedpur | 2/3 bhk in Jamshedpur | Flats in Dobo | Flats in Sonari | Property in Dimna main road",
  ] as const,
  company: [
    { label: "About Us", href: "/about-us/" },
    { label: "Our Projects", href: `${SITE}/project/` },
    { label: "Land Development", href: "/land-development/" },
    { label: "Leasing Opportunities", href: "/leasing-opportunities/" },
    { label: "Newsletters", href: `${SITE}/newsletter` },
    { label: "FAQ", href: "/faq/" },
  ],
  useful: [
    { label: "Blog", href: `${SITE}/blog/` },
    { label: "Home Loan EMI Calculator", href: `${SITE}/home-loan-emi-calculator/` },
    { label: "Contact", href: "/contact-us/" },
    { label: "Privacy Policy", href: `${SITE}/privacy-policy/` },
    { label: "Terms & Conditions" },
  ],
};

export const promo = {
  href: `${SITE}/portfolios/aakash-puri/`,
  image: { src: `${IMG}/2026-07-rathyatra-banner.webp`, width: 2240, height: 1260, alt: "Rath Yatra greetings from Aakash India – Aakash Puri" } as Img,
};
