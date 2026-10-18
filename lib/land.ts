// Land Development page content, transcribed from https://aakashindia.in/land-development/ (WordPress HTML).

import type { Img } from "./content";
import type { Field } from "./forms";

const IMG = "/images/aakash-india";

export const landPage = {
  title: "Aakash India: Aiming to Make Finest Land Development With Modern Facilities",
  description:
    "Aakash India aims to transform the finest lands in Jamshedpur into the finest living. We have gained the badge of being a trusted partner offering groundbreaking real estate solutions.",
  path: "/land-development/",
  ogImage: { src: `${IMG}/2024-01-trust.webp`, width: 512, height: 512 },
  banner: { src: `${IMG}/2024-02-2.webp`, width: 1280, height: 855, alt: "" } satisfies Img,
};

export const landIntro = {
  title: "Your Trusted Partner in Jamshedpur!",
  text: "Aakash India stands as the ultimate choice when it comes to unleashing the boundless potential of your land in Jamshedpur and its neighboring regions. Renowned and trusted in the realm of real estate, our primary objective is to offer groundbreaking solutions through collaborative partnerships, empowering you to optimize the worth of your property and attain unmatched triumph.",
  cta: { label: "Partner with us", href: "#enquire" },
  image: { src: `${IMG}/2024-01-ex_10.webp`, width: 1667, height: 937, alt: "Rendering of a glass-fronted Aakash India commercial building at dusk" } satisfies Img,
};

const icon = (file: string): Img => ({ src: `${IMG}/${file}`, width: 512, height: 512, alt: "" });

export const whyChoose = {
  title: "Why Choose Aakash India?",
  text: "When it comes to unlocking the true potential of your land in Jamshedpur and its surrounding areas, Aakash India stands as your premier destination, offering innovative solutions and unwavering support on your journey towards unparalleled success.",
  items: [
    { title: "A Legacy of Trust", text: "Aakash India is a trusted land developer in Jamshedpur, delivering excellence with over 25+ successful projects.", icon: icon("2024-01-trust.webp") },
    { title: "Guaranteed Sales", text: "Aakash India is known for quality and reliability. Our portfolio features successful projects across the city.", icon: icon("2024-01-sales-1.webp") },
    { title: "Timely Delivery", text: "Partnering with Aakash India ensures meticulous commitment to project delivery.", icon: icon("2024-01-on-time.webp") },
    { title: "Appreciation in Value", text: "Partnering with Aakash India in Jamshedpur ensures rapid property appreciation, surpassing market expectations.", icon: icon("2024-01-currency.webp") },
    { title: "Built to Suit", text: "Partnering with us guarantees a custom-built project that considers your family's needs, convenience, religious sentiments, and aesthetics.", icon: icon("2024-01-skyscraper.webp") },
    { title: "Extremely Lucrative Returns", text: "With our expertise, expect 20-30% higher returns than market rates and higher rental values compared to competitors in the same locality.", icon: icon("2024-01-piggy-bank.webp") },
  ],
};

export const landForm = {
  name: "Land Form",
  title: "To Join hands, please fill in the form below.",
  fields: [
    { kind: "text", name: "name", label: "Name", autoComplete: "name" },
    { kind: "email", name: "email", label: "Email", required: true, autoComplete: "email" },
    { kind: "tel", name: "phone", label: "Phone Number", autoComplete: "tel" },
    { kind: "text", name: "land_location", label: "Land Location" },
    { kind: "textarea", name: "message", label: "Message", rows: 3 },
  ] satisfies Field[],
  // The source links this number as "tel:8809767444"; the +91 prefix makes it dial correctly from any phone.
  phone: { label: "8809767444", href: "tel:+918809767444" },
  image: { src: `${IMG}/2024-01-shutterstock_1091497337-scaled.webp`, width: 2400, height: 1348, alt: "" } satisfies Img,
};
