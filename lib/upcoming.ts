// Upcoming Projects page content, transcribed from https://aakashindia.in/upcoming-project/ (WordPress HTML).
// The highlights say 689 apartments while the Aakash Puri card says 687; both are kept as published.

import type { Img } from "./content";

const SITE = "https://aakashindia.in";
const IMG = "/images/aakash-india";

const puriImage = { src: `${IMG}/2026-07-rathyatra-banner.webp`, width: 2240, height: 1260 };

export const upcomingPage = {
  title: "Project - Aakash India",
  description:
    "Aakash Puri, an upcoming Aakash India residential project in Puri, Odisha: 6.34 acres of land, 2 residential towers and 689 premium apartments. Also upcoming: Aakash Riviera Reserve, premium 4 BHK residences in Dobo, Jamshedpur.",
  path: "/upcoming-project/",
  heading: "Project",
  banner: { src: `${IMG}/2024-01-project-page-scaled.webp` },
  ogImage: puriImage,
};

// The highlights, promo and location sections below are hidden on the page for now (kept for reuse).
export const highlights = [
  { value: "6.34", label: "Acres of Land" },
  { value: "2", label: "Residential Towers" },
  { value: "689", label: "Premium Apartments" },
];

export const promo = {
  title: "Your Home in Jagannath Dham is Waiting",
  image: { ...puriImage, alt: "Rathyatra Banner" } satisfies Img,
};

export const projectLocation = {
  title: "Project Location",
  text: "Discover the location of our upcoming development.",
  embed:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3754.108795709179!2d85.78886!3d19.792984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDQ3JzM0LjciTiA4NcKwNDcnMTkuOSJF!5e0!5m2!1sen!2sin!4v1781692135273!5m2!1sen!2sin",
  // Same coordinates as the embed (19°47'34.7"N 85°47'19.9"E).
  mapsHref: "https://www.google.com/maps?q=19.792984,85.78886",
};

export type UpcomingProject = {
  name: string;
  href: string;
  location: string;
  image: Img;
  /** Card rows, in the source's order. */
  facts: { label: string; value: string }[];
};

export const upcomingProjects: UpcomingProject[] = [
  {
    name: "Aakash Puri",
    href: `${SITE}/portfolios/aakash-puri/`,
    location: "Puri, Odisha",
    image: { ...puriImage, alt: "Aakash Puri" },
    facts: [
      { label: "Status", value: "Upcoming" },
      { label: "Type", value: "Residential" },
      { label: "Area", value: "Coming Soon" },
      { label: "Acres of Land", value: "6.34" },
      { label: "Residential Towers", value: "2" },
      { label: "Apartments", value: "687" },
      { label: "Apartment Type", value: "Studio, 1 BHK, 2 BHK, 3 BHK" },
    ],
  },
  {
    name: "Aakash Riviera Reserve",
    href: `${SITE}/portfolio/aakash-riviera-reserve/`,
    location: "Dobo, Jamshedpur",
    image: { src: `${IMG}/2023-12-aakash-riviera-gallery-9.webp`, width: 1000, height: 560, alt: "Aakash Riviera Reserve" },
    facts: [
      { label: "Status", value: "Upcoming" },
      { label: "Type", value: "Premium 4 BHK Residences" },
      { label: "Area", value: "4,000+ Sq. Ft. (Carpet + Balcony Area)" },
      { label: "Location", value: "Dobo, Jamshedpur" },
      { label: "BHK", value: "4 BHK" },
    ],
  },
];
