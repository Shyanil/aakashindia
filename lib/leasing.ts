// Leasing Opportunities page content, transcribed from https://aakashindia.in/leasing-opportunities/
// (WordPress HTML). Two obvious typos in the source feature lists are corrected
// ("Cenralized" -> "Centralized", "CCTC" -> "CCTV").

import type { Img } from "./content";
import { opts, type Field } from "./forms";

const IMG = "/images/aakash-india";

export const leasingPage = {
  title: "Aakash India Offering Smart Leasing Solutions for Businesses",
  description:
    "Unlock capital efficiency and seamless expansion opportunities with Aakash India's smart leasing options in bustling Jamshedpur. Invest wisely and grow effortlessly.",
  path: "/leasing-opportunities/",
  heading: "Leasing Opportunities",
  banner: { src: `${IMG}/2024-02-1.webp`, width: 1280, height: 853, alt: "" } satisfies Img,
  ogImage: { src: `${IMG}/2024-01-whatsapp-image-2023-02-12-at-12.01.49-pm.webp`, width: 964, height: 705 },
};

export const leasingIntro = {
  title: "Pioneering Your Business Growth",
  text: "With 25 successful projects in our history, we do more than offer properties. We create opportunities and a future where your business can grow and thrive in vibrant communities and prime locations. Projects like Aakash Riviera and Aakash Skyline are more than just spaces. They’re your business’s next step toward expansion and prosperity.",
  images: [
    { src: `${IMG}/2024-01-whatsapp-image-2023-02-12-at-12.01.49-pm.webp`, width: 964, height: 705, alt: "Shoppers inside an Aakash India retail space" },
    { src: `${IMG}/2024-01-cam-05-1-scaled.webp`, width: 2400, height: 1193, alt: "Rendering of an Aakash India commercial building" },
  ] satisfies Img[],
};

const icon = (file: string): Img => ({ src: `${IMG}/${file}`, width: 512, height: 512, alt: "" });

export const advantages = {
  title: "Leasing Advantage with Aakash India",
  text: "Choosing Aakash India for your leasing needs is more than a simple transaction. It’s a smart step towards smart money management, fewer liabilities, and smooth business operations, especially in bustling places like Jamshedpur.",
  items: [
    { title: "Capital Efficiency", text: "Make the most of your capital by investing it where it can grow your business the most with our leasing options.", icon: icon("2024-01-deposit.webp") },
    { title: "Pay For What You Use", text: "Every penny you invest in our leased space is used wisely, ensuring you get the most while spending the least.", icon: icon("2024-01-skyscraper.webp") },
    { title: "High Class Maintenance", text: "Enjoy high-class maintenance at affordable cost and let us take care of keeping your leased property in top shape.", icon: icon("2024-01-on-time.webp") },
    { title: "Expansion Opportunities", text: "Grow your business effortlessly with our flexible leasing options, allowing you to expand your operations without the constraints of ownership.", icon: icon("2024-01-currency.webp") },
  ],
};

export const leaseList = {
  title: "Lease with Ease",
  text: "Here is the list of our properties that are up for lease in the prime location of Jamshedpur & Rourkela!",
};

/** Large banded features: navy band (image left) then gold band (image right), as on the source. */
export const featured: { name: string; address: string; features: string[]; image: Img; tone: "navy" | "gold" }[] = [
  {
    name: "Aakash Riviera Mall",
    address: "Kamar Gora, Dobo, Jamshedpur, Jharkhand",
    features: [
      "Gold Class cinema experience",
      "Open-air multi-cuisine restaurant",
      "Expansive riverside promenade",
      "Can accommodate 8,000 - 10,000 visitors simultaneously",
      "Seamless connectivity to various city nodes",
      "Abundance of renowned global brands",
    ],
    image: { src: `${IMG}/2024-01-rsz_retail_cam.webp`, width: 800, height: 445, alt: "Rendering of Aakash Riviera Mall" },
    tone: "navy",
  },
  {
    name: "Aakash Skyline",
    address: "Chepapul, Mango, Jamshedpur, Tamlia, Jharkhand",
    features: [
      "Centralized air conditioning",
      "Anchor Shops",
      "Restaurants & cafes",
      "Ample Customers Parking for 2 Wheelers & 4 Wheelers",
      "Modern Design Glass Facade",
      "Advanced Security and CCTV Surveillance",
    ],
    image: { src: `${IMG}/2024-01-cam-01-a2-1-1.webp`, width: 1500, height: 843, alt: "Rendering of Aakash Skyline" },
    tone: "gold",
  },
];

export const properties: { name: string; address: string; image: Img }[] = [
  { name: "Aadya Aakash Bistupur", address: "Contractor Area, Bistupur, Jamshedpur", image: { src: `${IMG}/2024-01-dsc00414-scaled.webp`, width: 2400, height: 1349, alt: "Aadya Aakash Bistupur building" } },
  { name: "Aakash D Choudhury", address: "Dimna Road, Mango Jamshedpur", image: { src: `${IMG}/2024-01-dsc00370-scaled.webp`, width: 2400, height: 1353, alt: "Aakash D Choudhury building" } },
  { name: "Aakash Heights", address: "New Purulia Road, Road No. 17, Mango,", image: { src: `${IMG}/2024-01-dsc00269-scaled.webp`, width: 2400, height: 1353, alt: "Aakash Heights building" } },
  { name: "Land in Rourkela", address: "Panposh Rd, Civil Township, Rourkela", image: { src: `${IMG}/2024-01-whatsapp-image-2023-09-08-at-12.01.38-pm.webp`, width: 1152, height: 864, alt: "Land parcel in Rourkela" } },
];

export const leasingForm = {
  name: "Leasing Contact Form",
  title: "Explore Your Next Retail Space Opportunity!",
  fields: [
    { kind: "text", name: "name", label: "Name", autoComplete: "name" },
    { kind: "email", name: "email", label: "Email", required: true, autoComplete: "email" },
    { kind: "tel", name: "phone", label: "Phone Number", autoComplete: "tel" },
    { kind: "select", name: "interested_in", label: "Interested In", options: opts(...featured.map((f) => f.name), ...properties.map((p) => p.name)) },
    { kind: "textarea", name: "message", label: "Message", rows: 4 },
  ] satisfies Field[],
  // The leasing desk's own contacts (the source links the number as "tel:7079829999").
  email: "leasingaipb@gmail.com",
  phone: { label: "7079829999", href: "tel:+917079829999" },
  image: { src: `${IMG}/2024-01-shutterstock_1020878011-scaled.webp`, width: 2400, height: 1600, alt: "" } satisfies Img,
};
