// Contact Us page content, transcribed from https://aakashindia.in/contact-us/ (WordPress HTML).
// The source also has a team-card section (John Doe / William Smith / Emma Stone with
// placeholder phone + email); it is hidden on every device and is theme demo content, so it is
// intentionally not rendered.

import type { Img } from "./content";
import type { Field } from "./forms";

const IMG = "/images/aakash-india";

export const contactPage = {
  title: "Connect with Aakash India Today",
  description: "Reach out to Aakash India for inquiries or partnerships. We're here to assist you every step of the way.",
  path: "/contact-us/",
  heading: "Contact Us",
  banner: { src: `${IMG}/2024-02-whatsapp-image-2024-02-12-at-22.07.11_584d2ed7.webp`, width: 1280, height: 448, alt: "" } satisfies Img,
};

export const headOffice = {
  kicker: "get in touch",
  title: "Head Office Address",
  address: "Payal Cinema Complex, Mango, Jamshedpur - 831012 India",
  // The live site's own Google Maps link for the office (used in its footer).
  directions: "https://maps.app.goo.gl/RArUZKFj7j4RLkEB7",
  emails: ["info@aakashindia.in", "sales@aakashindia.in"],
  phone: { label: "+91 70798 29999", href: "tel:+917079829999" },
  hours: "Monday to Saturday: 9:00 AM TO 16:00 PM",
  // The keyless Google Maps embed the source page uses (no API key, no coordinates).
  mapEmbed:
    "https://maps.google.com/maps?q=Aakash%20India%20Projects%20%26%20Builders%20Pvt.%20Ltd%20%7C%20Real%20Estate%20%7C%20House%20Construction%20%7C%20Largest%20Luxury%20Builders%20in%20Jamshedpur%2C%20Payal%20Cinema%20Complex%2C%20Mango%2C%20Jamshedpur%2C%20Jharkhand%20831012%2C%20India&t=m&z=14&output=embed&iwloc=near",
  mapTitle: "Map: Aakash India head office, Payal Cinema Complex, Mango, Jamshedpur",
};

export const contactForm = {
  kicker: "leave a message",
  title: "Write to us",
  name: "Contact Form",
  fields: [
    { kind: "text", name: "name", label: "Name", autoComplete: "name" },
    { kind: "email", name: "email", label: "Email", required: true, autoComplete: "email" },
    { kind: "tel", name: "phone", label: "Phone Number", autoComplete: "tel" },
    { kind: "textarea", name: "message", label: "Message", rows: 4 },
  ] satisfies Field[],
  image: { src: `${IMG}/2023-12-cam-03-.webp`, width: 1667, height: 1184, alt: "Rendering of an Aakash India building" } satisfies Img,
};
