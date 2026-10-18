// About Us page content, transcribed from https://aakashindia.in/about-us/ (WordPress HTML).
// Sections the live page hides on every device ("Discover Our Story", the two Director
// profiles) are intentionally not rendered, to match what visitors actually see.

import type { Img } from "./content";

const IMG = "/images/aakash-india";
const SITE = "https://aakashindia.in";

// Originals wider than 2400px are capped by scripts/optimize-images.mjs; keep ratios exact.
const img = (file: string, w: number, h: number, alt: string): Img =>
  w > 2400 ? { src: `${IMG}/${file}`, width: 2400, height: Math.round((h * 2400) / w), alt } : { src: `${IMG}/${file}`, width: w, height: h, alt };

export const aboutPage = {
  title: "Aakash India: Elevating Your Living With Comfort and Luxury in Jamshedpur",
  description:
    "Aakash India dreams of offering luxury living, blending elegance, convenience, and top-notch amenities to the residents. Discover your dream home today with us.",
  banner: img("2024-02-shutterstock_130099715-1-scaled.webp", 2560, 1689, "Business handshake"),
  ogImage: `${SITE}/wp-content/uploads/elementor/thumbs/Shot_2-qjqp1nlp10pkl2f2k6oiclhk5sla36we1njdif3onw.jpg`,
};

export const founder = {
  kicker: "Founder",
  name: "Mr. Hari sawa",
  text: "Starting from a small hardware mart, he aimed to bring big city ideas to the small town and established the Aakash India Foundation. Following Late Hari Sawa’s footsteps, we, at Aakash India, grew from very small beginnings to landmark projects over five decades. Today, Mr. Rahul Sawa and Mr. Vishal Sawa lead with empathy, carrying forward their father's legacy of innovation. Our current projects are landmarks changing the city’s horizon, and we're excited to keep dreaming up new ideas for the future.",
  image: img("2024-03-img20240314161926-1-scaled-e1710424120234.webp", 1450, 1578, "Framed portrait of the late Mr Hari Sawa, founder of Aakash India"),
};

export const missionVision = {
  mission: {
    title: "Our mission",
    text: "Our mission is to ensure that the small city of Jamshedpur sets up new standards in urban development and community enrichment. We prioritise our clients’ interests, ensuring a positive and lasting impact through world-class service. Guided by Shri Hari Sawa Ji’s vision, taken forward by Vishal and Rahul Sawa’s leadership, we consistently perform in direct alignment with our mission statement.",
  },
  vision: {
    title: "Our vision",
    text: "They say, behind every dream lies the courage to chase it, fueled by relentless hard work and dedication. And in this story, it was Mr. Hari Sawa who embodied this truth, the visionary behind the established empire of Aakash India. The story begins with his unceasing passion and determination. He dreamt of a better tomorrow for the entire city of Jamshedpur and to transform the horizon by leaving a mark of progress for generations to come.",
  },
  left: img("2024-01-shot-07.webp", 1500, 844, "Aerial render of Aakash Skyline, Mango"),
  right: img("2023-12-aakash-courtyard-scaled.webp", 2400, 1193, "Aakash Courtyard commercial building at dusk"),
};

export const journey = {
  kicker: "Our Journey",
  title: "Inspired to excel. Driven to make a difference.",
  items: [
    { year: "1971", title: "Sawa Hardware", text: "We started with humble beginnings from Sawa ital Hardware, incepted by our father Late Sri Hari Sawa" },
    { year: "1980", title: "Payal Cinema", text: "Our first foray into construction business started here, and now we have developed it into an exclusive one-of-a-kind movie viewing experience" },
    { year: "1988", title: "Aakash India", text: "Our maiden voyage in the real-estate landscape had started and our operations catapulted from here" },
    { year: "2010", title: "Time Out", text: "Our first venture into the F&B industry with organic dining experience with specialty cuisines" },
    { year: "2011", title: "Yellow Tree", text: "We explored deeper into the service industry with boutique hotels" },
    { year: "2016", title: "Aakash Utilities", text: "Maintenance of systems and management of services provided all comes under the umbrella of Aakash Utilities" },
    { year: "2019", title: "Aakash Riviera", text: "With Aakash Riviera, we developed an exclusive residential project where luxury and peace coexist" },
    { year: "2021", title: "Aakash Courtyard", text: "Nestled in the lap of hills, our Aakash Courtyard is a landmark project with premium commercial office spaces" },
    { year: "2022", title: "Aakash Skyline", text: "At Aakash Skyline we designed a perfectly well-rounded zone with luxurious residences and commercial spaces" },
    { year: "2023", title: "Aakash Nirvana", text: "With Aakash Nirvana, we developed an exclusive residential project where luxury and peace coexist" },
    { year: "2024", title: "Aakash Aananda", text: "With Aakash Ananda, we developed an exclusive residential project where luxury and peace coexist" },
    { year: "2026", title: "Coming Soon", text: "" },
  ],
};

export type Photo = Img;
export type Video = { title: string; duration: string; src: string; poster: Img };
export type GalleryPanel = { label: string; photos?: Photo[]; videos?: Video[] };
export type GalleryTab = { label: string; panels: GalleryPanel[] };

const photos = (album: string, files: [string, number, number][]): Photo[] =>
  files.map(([f, w, h], i) => img(f, w, h, `${album} – photo ${i + 1}`));

// Same nesting as the source: album tabs, each with one or more sub-tabs.
export const gallery: GalleryTab[] = [
  {
    label: "Aakash India Picnic",
    panels: [
      {
        label: "Photos",
        photos: photos("Aakash India Picnic", [
          ["2026-05-screenshot-2026-05-27-201251.webp", 932, 629],
          ["2026-05-screenshot-2026-05-27-201241.webp", 929, 619],
          ["2026-05-screenshot-2026-05-27-201226.webp", 931, 624],
          ["2026-05-img_0943-scaled.webp", 2560, 1707],
          ["2026-05-screenshot-2026-05-27-201302.webp", 934, 619],
          ["2026-06-img_0958-scaled.webp", 2560, 1707],
        ]),
      },
      {
        label: "Videos",
        // Hosted MP4s (67 MB / 134 MB) stay on the existing server and only stream on play.
        videos: [
          {
            title: "Sample Video",
            duration: "0:16",
            src: `${SITE}/wp-content/uploads/2026/05/C5700.mp4`,
            poster: img("2026-05-screenshot-2026-05-27-201251.webp", 932, 629, "Aakash India Picnic video"),
          },
          {
            title: "Sample Video",
            duration: "0:16",
            src: `${SITE}/wp-content/uploads/2026/05/C5687.mp4`,
            poster: img("2026-05-screenshot-2026-05-27-201106.webp", 936, 623, "Aakash India Picnic video"),
          },
        ],
      },
    ],
  },
  {
    label: "Aakash Republic Day",
    panels: [
      {
        label: "Riveria",
        photos: photos("Aakash Republic Day at Riviera", [
          ["2026-05-img_1012-scaled.webp", 2560, 1707],
          ["2026-05-img_0982-scaled.webp", 1707, 2560],
          ["2026-05-img_0981-scaled.webp", 2560, 1707],
          ["2026-05-img_0977-scaled.webp", 2560, 1707],
          ["2026-05-img_0975-scaled.webp", 2560, 1707],
          ["2026-06-img_1005-scaled.webp", 2560, 1707],
        ]),
      },
      {
        label: "HQ",
        photos: photos("Aakash Republic Day at HQ", [
          ["2026-05-dsc00335-scaled.webp", 2560, 1439],
          ["2026-05-screenshot-2026-05-28-212535.webp", 1097, 624],
          ["2026-05-screenshot-2026-05-28-212456.webp", 1095, 612],
          ["2026-05-screenshot-2026-05-28-212430.webp", 1094, 610],
          ["2026-06-dsc00525-scaled.webp", 2560, 1439],
          ["2026-05-screenshot-2026-05-28-212445.webp", 1097, 617],
        ]),
      },
    ],
  },
  {
    label: "Aakash India",
    panels: [
      {
        label: "Maha Shivratri",
        photos: photos("Maha Shivratri", [
          ["2026-06-dsc09372-scaled.webp", 2560, 1920],
          ["2026-06-dsc09370-scaled.webp", 2560, 1920],
          ["2026-06-dsc09343-scaled.webp", 2560, 1707],
          ["2026-06-dsc09338-scaled.webp", 2560, 1707],
          ["2026-05-dsc09274-scaled.webp", 2560, 1920],
          ["2026-06-dsc09311-scaled.webp", 2560, 1920],
        ]),
      },
      {
        label: "Women day yoga",
        photos: photos("Women's Day yoga", [
          ["2026-06-dsc06147-scaled.webp", 2560, 1920],
          ["2026-06-dsc06151-scaled.webp", 2560, 1920],
          ["2026-06-dsc06158-scaled.webp", 2560, 1920],
          ["2026-06-dsc06148-scaled.webp", 2560, 1920],
          ["2026-06-dsc06141-scaled.webp", 2560, 1920],
          ["2026-06-dsc06132-scaled.webp", 2560, 1920],
        ]),
      },
      {
        label: "Swimming Pool",
        photos: photos("Swimming pool", [
          ["2026-06-dsc06211-scaled.webp", 2560, 1920],
          ["2026-06-dsc06215-scaled.webp", 2560, 1920],
          ["2026-06-dsc06219-scaled.webp", 2560, 1920],
          ["2026-06-dsc06226-scaled.webp", 2560, 1920],
          ["2026-06-dsc06188-scaled.webp", 2560, 1920],
          ["2026-06-dsc06197-scaled.webp", 2560, 1920],
        ]),
      },
    ],
  },
  {
    label: "Aakash Photos",
    panels: [
      {
        label: "Photos",
        photos: photos("Aakash Photos", [
          ["2026-06-img_9407-scaled.webp", 2560, 1707],
          ["2026-06-img_9400-scaled.webp", 2560, 1707],
          ["2026-06-img_9399-scaled.webp", 2560, 1707],
          ["2026-06-img_9397-scaled.webp", 2560, 1707],
          ["2026-06-img_9395-scaled.webp", 2560, 1707],
          ["2026-06-img_9387-scaled.webp", 2560, 1707],
        ]),
      },
    ],
  },
];
