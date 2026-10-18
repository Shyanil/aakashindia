// Projects archive data, transcribed from https://aakashindia.in/portfolio/ (all three archive pages,
// in the source's order). Names, locations, status, area and type strings are kept exactly as
// published, including inconsistencies in the source's area formatting.

import type { Img } from "./content";

const SITE = "https://aakashindia.in";
const IMG = "/images/aakash-india";

export type ProjectStatus = "Upcoming" | "Ongoing" | "Completed";

export type Project = {
  slug: string;
  name: string;
  /** Project detail page (still served by the WordPress site). */
  href: string;
  location: string;
  status: ProjectStatus;
  area: string;
  type: string;
  image: Img;
};

export const projects: Project[] = [
  {
    slug: "aakash-riviera-reserve",
    name: "Aakash Riviera Reserve",
    href: `${SITE}/portfolio/aakash-riviera-reserve/`,
    location: "Dobo, Jamshedpur",
    status: "Upcoming",
    area: "4,000+ Sq. Ft. (Carpet + Balcony Area)",
    type: "Premium 4 BHK Residences",
    image: {
      src: `${IMG}/2023-12-aakash-riviera-gallery-9.webp`,
      width: 1000,
      height: 560,
      alt: "Aakash Riviera Reserve",
    },
  },
  {
    slug: "aakash-riveria-mall",
    name: "Aakash Riviera Mall",
    href: `${SITE}/portfolio/aakash-riveria-mall/`,
    location: "New Jamshedpur",
    status: "Ongoing",
    area: "405 sqft to 13538 sqft",
    type: "Mall",
    image: {
      src: `${IMG}/2025-07-cam_02-rev-1-min-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Commercial project in Jamshedpur",
    },
  },
  {
    slug: "aakash-aananda",
    name: "Aakash Aananda",
    href: `${SITE}/portfolio/aakash-aananda/`,
    location: "Dimna main road",
    status: "Ongoing",
    area: "1763 sq. to 4797 sq. ft.",
    type: "Residential + Commercial",
    image: {
      src: `${IMG}/2025-01-view4-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Residential Flat in Jamshedpur",
    },
  },
  {
    slug: "nirvana",
    name: "Aakash Nirvana",
    href: `${SITE}/portfolio/nirvana/`,
    location: "Sonari, Jamshedpur",
    status: "Ongoing",
    area: "2150 to 3700 sq. ft",
    type: "Residential",
    image: {
      src: `${IMG}/2019-10-shot_06_edit-1-scaled-1-1024x576-1.webp`,
      width: 1024,
      height: 576,
      alt: "Aakash Nirvana",
    },
  },
  {
    slug: "courtyard",
    name: "Aakash Courtyard",
    href: `${SITE}/portfolio/courtyard/`,
    location: "New Jamshedpur",
    status: "Ongoing",
    area: "957 to 3012 sq. ft",
    type: "Corporate Park",
    image: {
      src: `${IMG}/2023-12-3.webp`,
      width: 1000,
      height: 560,
      alt: "Aakash Courtyard",
    },
  },
  {
    slug: "skyline",
    name: "Aakash Skyline",
    href: `${SITE}/portfolio/skyline/`,
    location: "Mango, Jamshedpur",
    status: "Ongoing",
    area: "1052 to 2385 sq. ft",
    type: "Residential + Mall",
    image: {
      src: `${IMG}/2023-12-4.webp`,
      width: 1000,
      height: 560,
      alt: "Aakash Skyline",
    },
  },
  {
    slug: "riviera",
    name: "Aakash Riviera",
    href: `${SITE}/portfolio/riviera/`,
    location: "New Jamshedpur",
    status: "Completed",
    area: "1700 to 4100 sq. ft",
    type: "Residential",
    image: {
      src: `${IMG}/2023-12-aakash-riviera-gallery-9.webp`,
      width: 1000,
      height: 560,
      alt: "Aakash Riviera",
    },
  },
  {
    slug: "aakash-heights",
    name: "Aakash Heights",
    href: `${SITE}/portfolio/aakash-heights/`,
    location: "Mango, Jamshedpur",
    status: "Completed",
    area: "2000 - 3500 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-dsc00264-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Aakash Heights",
    },
  },
  {
    slug: "aakash-greens",
    name: "Aakash Greens",
    href: `${SITE}/portfolio/aakash-greens/`,
    location: "Mango, Jamshedpur",
    status: "Completed",
    area: "2000 - 3500 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-dsc00213-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Aakash Greens",
    },
  },
  {
    slug: "aakash-saha",
    name: "Aakash Saha",
    href: `${SITE}/portfolio/aakash-saha/`,
    location: "New Purulia Road, Mango",
    status: "Completed",
    area: "1110 - 1550 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-dsc00245-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Aakash Saha",
    },
  },
  {
    slug: "choudhary-aakash-enclave",
    name: "Choudhary Aakash Enclave",
    href: `${SITE}/portfolio/choudhary-aakash-enclave/`,
    location: "New Purulia Road, Mango",
    status: "Completed",
    area: "1110 - 1550 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-dsc00180-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Choudhary Aakash Enclave",
    },
  },
  {
    slug: "aakash-manna",
    name: "Aakash Manna",
    href: `${SITE}/portfolio/aakash-manna/`,
    location: "Opp Monni Baba Mandir, Sonari",
    status: "Completed",
    area: "1275- 2324 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-whatsapp-image-2023-09-09-at-11.47.55.jpeg-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Aakash Manna",
    },
  },
  {
    slug: "gyan-aakash",
    name: "Gyan Aakash",
    href: `${SITE}/portfolio/gyan-aakash/`,
    location: "Kutchary Road, Rourkela",
    status: "Completed",
    area: "2000 - 3500 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-pexels-vladimir-srajber-15072148-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Gyan Aakash",
    },
  },
  {
    slug: "aadya-aakash",
    name: "Aadya Aakash",
    href: `${SITE}/portfolio/aadya-aakash/`,
    location: "Contractors Area, Bistupur",
    status: "Completed",
    area: "2000 - 3500 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-dsc00425-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Aadya Aakash",
    },
  },
  {
    slug: "swastik-prabha-aakash",
    name: "Swastik Prabha Aakash",
    href: `${SITE}/portfolio/swastik-prabha-aakash/`,
    location: "Contractors Area, Bistupur",
    status: "Completed",
    area: "2000 - 3500 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-dsc00412-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Swastik Prabha Aakash",
    },
  },
  {
    slug: "aakash-ajmera",
    name: "Aakash Ajmera",
    href: `${SITE}/portfolio/aakash-ajmera/`,
    location: "Dimna Road, Mango",
    status: "Completed",
    area: "2000 - 3500 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-dsc00340-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Aakash Ajmera",
    },
  },
  {
    slug: "aakash-dchoudhary",
    name: "Aakash D’Choudhary",
    href: `${SITE}/portfolio/aakash-dchoudhary/`,
    location: "Dimna Road, Mango",
    status: "Completed",
    area: "2000 - 3500 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-dsc00357-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Aakash D’Choudhary",
    },
  },
  {
    slug: "uday-aakash-tower",
    name: "Uday Aakash Tower",
    href: `${SITE}/portfolio/uday-aakash-tower/`,
    location: "Dimna Road, Mango",
    status: "Completed",
    area: "2000 - 3500 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-dsc00389-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Uday Aakash Tower",
    },
  },
  {
    slug: "aakash-kalsi-tower",
    name: "Aakash Kalsi Tower",
    href: `${SITE}/portfolio/aakash-kalsi-tower/`,
    location: "Dimna Road, Mango",
    status: "Completed",
    area: "2000 - 3500 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-dsc00325-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Aakash Kalsi Tower",
    },
  },
  {
    slug: "aakash-tower",
    name: "Aakash Tower",
    href: `${SITE}/portfolio/aakash-tower/`,
    location: "Dimna Road, Mango",
    status: "Completed",
    area: "2000 - 3500 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-dsc00377-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Aakash Tower",
    },
  },
  {
    slug: "aakashdeep-plaza",
    name: "Aakashdeep Plaza",
    href: `${SITE}/portfolio/aakashdeep-plaza/`,
    location: "Golmuri, Jamshedpur",
    status: "Completed",
    area: "2000 - 3500 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-whatsapp-image-2023-09-09-at-11.47.53-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Aakashdeep Plaza",
    },
  },
  {
    slug: "aakash-ganga",
    name: "Aakash Ganga",
    href: `${SITE}/portfolio/aakash-ganga/`,
    location: "New Purulia Road, Mango",
    status: "Completed",
    area: "2000 - 3500 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-dsc00309-1400x700.webp`,
      width: 1400,
      height: 700,
      alt: "Aakash Ganga",
    },
  },
  {
    slug: "payal-cinema",
    name: "Payal Cinema",
    href: `${SITE}/portfolio/payal-cinema/`,
    location: "Payal Cinema Complex, Mango",
    status: "Completed",
    area: "2000 - 3500 Sq ft",
    type: "Residential",
    image: {
      src: `${IMG}/2024-01-2017-01-08.webp`,
      width: 512,
      height: 384,
      alt: "Payal Cinema",
    },
  },
];

/** Same page size as the source archive. */
export const PER_PAGE = 9;

/** URL slug for a filter value: "Residential + Commercial" -> "residential-commercial". */
export const slugify = (v: string) =>
  v
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Filter options in the order the source form lists them (order of first appearance). */
const unique = (values: string[]) => [...new Set(values)];
const toOptions = (labels: string[]) => labels.map((label) => ({ label, slug: slugify(label) }));
export const filterOptions = {
  status: { label: "Project Status", options: toOptions(["Upcoming", "Ongoing", "Completed"]) },
  type: { label: "Project Type", options: toOptions(unique(projects.map((p) => p.type))) },
  location: { label: "Location", options: toOptions(unique(projects.map((p) => p.location))) },
} as const;

export type FilterKey = keyof typeof filterOptions;
/** Filter values are slugs, exactly as they appear in the URL. */
export type Filters = Partial<Record<FilterKey, string>>;
export const FILTER_KEYS = Object.keys(filterOptions) as FilterKey[];
export const STATUS_SLUGS = filterOptions.status.options.map((o) => o.slug);

const labelFor = (k: FilterKey, slug?: string) => filterOptions[k].options.find((o) => o.slug === slug)?.label;
export const isStatusSlug = (s: string) => STATUS_SLUGS.includes(s);

/** Reads type/location from search params (status comes from the path), ignoring unknown values. */
export function parseQueryFilters(sp: Record<string, string | string[] | undefined>): Filters {
  const out: Filters = {};
  for (const k of ["type", "location"] as const) {
    const v = sp[k];
    const value = Array.isArray(v) ? v[0] : v;
    if (value && labelFor(k, value)) out[k] = value;
  }
  return out;
}

export function filterProjects(f: Filters): Project[] {
  const status = labelFor("status", f.status);
  const type = labelFor("type", f.type);
  const location = labelFor("location", f.location);
  return projects.filter(
    (p) => (!status || p.status === status) && (!type || p.type === type) && (!location || p.location === location),
  );
}

/**
 * Clean archive URLs: status in the path, the rest as short query params, e.g.
 * /portfolio/completed/page/2/?type=residential&location=dimna-road-mango
 */
export function archiveHref(page: number, f: Filters): string {
  const qs = new URLSearchParams();
  if (f.type) qs.set("type", f.type);
  if (f.location) qs.set("location", f.location);
  const q = qs.toString();
  return `/portfolio/${f.status ? `${f.status}/` : ""}${page > 1 ? `page/${page}/` : ""}${q ? `?${q}` : ""}`;
}

/** Total pages for a status (or the whole archive), used to prerender every reachable page. */
export function pageCount(status?: string): number {
  return Math.max(1, Math.ceil(filterProjects({ status }).length / PER_PAGE));
}
