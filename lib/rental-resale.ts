// Rental / Resale properties page content, transcribed from
// https://aakashindia.in/rental-resale-properties/ (WordPress HTML).
// The "Property Hacks" loop grid (one "Aakash Greens" post card) sits in a container the live
// page hides on every device, so it is intentionally not rendered, to match what visitors see.

import type { Img } from "./content";
import { opts, type Field } from "./forms";

const IMG = "/images/aakash-india";

export const rentalPage = {
  title: "Rental / Resale properties - Aakash India",
  description:
    "Search rental and resale properties from Aakash India by location, type and budget, send a rental inquiry, or register your own flat, shop or showroom for rent or resale.",
  path: "/rental-resale-properties/",
  banner: { src: `${IMG}/2024-01-project-page-scaled.webp`, width: 2400, height: 1352, alt: "" } satisfies Img,
  heading: "Find Your Property",
  intro: "Use the filters below to explore the perfect property that matches your needs.  Choose location, type, budget, and more to narrow down your search.",
  image: {
    src: `${IMG}/2025-07-real-estate-services.webp`,
    width: 868,
    height: 579,
    alt: "Handshake over a desk with two model houses",
  } satisfies Img,
};

/* ---------- search ---------- */

export type PriceRange = { min: number; max: number | null }; // rupees, inclusive min, exclusive max

export const searchFilters = {
  location: { label: "Location", options: opts("Jamshedpur", "Ranchi", "Rourkela") },
  city: { label: "City", options: opts("Jamshedpur", "Ranchi", "Rourkela") },
  type: { label: "Property Type", options: opts("Residential", "Commercial") },
  price: {
    label: "Price Range",
    options: [
      { value: "0-2000000", label: "Below ₹20 Lakhs" },
      { value: "2000000-5000000", label: "₹20–50 Lakhs" },
      { value: "5000000-10000000", label: "₹50 Lakhs – ₹1 Cr" },
      { value: "10000000+", label: "Above ₹1 Cr" },
    ],
  },
  saleType: { label: "Rental or Resale", options: opts("Rental", "Resale") },
} as const;

export type SearchKey = keyof typeof searchFilters;
export type SearchQuery = Partial<Record<SearchKey, string>>;

export type Listing = {
  title: string;
  href?: string;
  image?: Img;
  location: string;
  city: string;
  type: "Residential" | "Commercial";
  saleType: "Rental" | "Resale";
  /** Asking price (resale) or monthly rent (rental), in rupees. */
  price: number;
};

/**
 * Published rental / resale listings. The source page has none (its search form posts to "#"),
 * so this is empty and the search shows its "nothing listed" state.
 * TODO: populate from the CMS / listings source once one exists.
 */
export const listings: Listing[] = [];

export function parsePrice(value: string): PriceRange | null {
  const m = /^(\d+)(?:-(\d+)|\+)$/.exec(value);
  return m ? { min: Number(m[1]), max: m[2] ? Number(m[2]) : null } : null;
}

export function matchesQuery(l: Listing, q: SearchQuery): boolean {
  if (q.location && l.location !== q.location) return false;
  if (q.city && l.city !== q.city) return false;
  if (q.type && l.type !== q.type) return false;
  if (q.saleType && l.saleType !== q.saleType) return false;
  const range = q.price ? parsePrice(q.price) : null;
  if (range && (l.price < range.min || (range.max !== null && l.price >= range.max))) return false;
  return true;
}

/* ---------- tiles (each opens the "Let's have a chat" popup on the source) ---------- */

export const tiles: { label: string; image: Img }[] = [
  { label: "Plots and Land", image: { src: `${IMG}/2025-08-residential-commercial-plots-for-sale-500x500-1.webp`, width: 500, height: 281, alt: "" } },
  { label: "Sell / Rent your property", image: { src: `${IMG}/2025-08-cleveland-heights-with-city-in-background.webp`, width: 1500, height: 1244, alt: "" } },
  { label: "Explore Heights", image: { src: `${IMG}/2025-08-top-four-tips-sell-a-flat-faster-01-1-scaled-1.webp`, width: 2400, height: 1371, alt: "" } },
  { label: "Property Hacks", image: { src: `${IMG}/2025-08-1_vpmevsgfdagwn0fxj6eoua.webp`, width: 768, height: 576, alt: "" } },
];

/* ---------- forms ---------- */

export type FormDef = {
  id: string;
  /** Routing key for the submission handler; one per source form. */
  name: string;
  heading: string;
  text: string;
  image: Img;
  fields: Field[];
};

const flatTypes = opts("2bhk", "3bhk", "4bhk", "Pent House", "Duplex", "Shop", "Showroom");
const furnishing = opts("Furnished", "Semi Furnished", "Unfurnished");

const registrationFields: Field[] = [
  { kind: "text", name: "name", label: "Name", half: true, autoComplete: "name" },
  { kind: "tel", name: "mobile", label: "Mobile Number", required: true, half: true, autoComplete: "tel" },
  { kind: "email", name: "email", label: "Email", required: true, half: true, autoComplete: "email" },
  {
    kind: "select",
    name: "property_name",
    label: "Property Name",
    required: true,
    half: true,
    options: opts(
      "Aakash Riviera", "Aakash Heights", "Aakash Greens", "Saha Aakash", "Choudhary Aakash Enclave", "Aakash Manna",
      "Gyan Aakash", "Aadya Aakash", "Swastik Prabha", "Aakash Ajmera", "Aakash D’Choudhary", "Uday Aakash",
      "Aakash Kalsi", "Aakash Tower", "Aakashdeep Plaza", "Aakash Ganga",
    ),
  },
  { kind: "select", name: "property_type", label: "Property Type", half: true, options: flatTypes },
  { kind: "text", name: "floor", label: "Floor Details", half: true },
  { kind: "text", name: "parking", label: "Parking Details", half: true },
  { kind: "text", name: "price", label: "Price", half: true },
  { kind: "text", name: "description", label: "Description" },
  { kind: "select", name: "furnishing", label: "Furnishing status", options: furnishing },
  {
    kind: "checkboxes",
    name: "amenities",
    label: "Amenities",
    options: opts("Parking", "Lift", "Power backup", "Park", "Club house", "Community hall", "Gym", "24*7 security", "Swimming pool", "Gas pipeline"),
  },
  { kind: "files", name: "photos", label: "Photos of property", accept: "image/*", maxFiles: 10, maxMB: 10 },
  { kind: "files", name: "videos", label: "Videos of property", accept: "video/*", maxFiles: 3, maxMB: 100 },
];

const regImage: Img = {
  src: `${IMG}/2025-01-how-to-choose-a-home-that-will-adapt-as-your-family-expands.webp`,
  width: 1152,
  height: 896,
  alt: "",
};

export const forms: FormDef[] = [
  {
    id: "inquiry",
    name: "Rental Inquiry Form",
    heading: "Inquiry Form",
    text: "To be used by people looking property for rent",
    image: { src: `${IMG}/2025-07-pexels-pavel-danilyuk-7937319-scaled.webp`, width: 2400, height: 1602, alt: "" },
    fields: [
      { kind: "text", name: "name", label: "Name", autoComplete: "name" },
      { kind: "tel", name: "mobile", label: "Mobile Number", autoComplete: "tel" },
      { kind: "email", name: "email", label: "Email", required: true, half: true, autoComplete: "email" },
      { kind: "select", name: "type", label: "Type", half: true, options: flatTypes },
      { kind: "select", name: "location", label: "Location", options: opts("Mango", "Dimna", "Dobo", "Sonari") },
      { kind: "text", name: "requirement", label: "Requirement", required: true },
      { kind: "select", name: "furnishing", label: "Furnishing status", options: furnishing },
    ],
  },
  {
    id: "rental-registration",
    name: "Rental Property Registration",
    heading: "Rental Property Registration",
    text: "To be used by people who want to add their property on rent",
    image: regImage,
    fields: registrationFields,
  },
  {
    id: "resale-registration",
    name: "Resale Property Registration",
    heading: "Resale Property Registration",
    text: "To be used by people who want to add their property for resale",
    image: regImage,
    fields: registrationFields,
  },
];

/** The popup every tile opens on the source page. */
export const chatForm = {
  name: "Rental Resale Strategies",
  heading: "Fill the form to know Retail Resale Strategies.",
  subheading: "Let's have a chat",
  fields: [
    { kind: "text", name: "name", label: "Full Name", autoComplete: "name" },
    { kind: "tel", name: "phone", label: "Phone", required: true, autoComplete: "tel" },
    { kind: "email", name: "email", label: "Email", required: true, autoComplete: "email" },
  ] satisfies Field[],
};
