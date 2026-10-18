// Career page content, transcribed from https://aakashindia.in/career/ (WordPress HTML), including
// its three popups: the job application form, the general application form, and the
// work-from-home fraud disclaimer that opens 5 seconds after page load.

import type { Img } from "./content";
import { opts, type Field } from "./forms";

const IMG = "/images/aakash-india";

export const careerPage = {
  // The source title ends with a stray quote ("…Aakash India\""); it is dropped here.
  title: "Join Our Excellent Team at Aakash India",
  description:
    "Start walking on a rewarding career journey with Aakash India Group. Exciting opportunities await enthusiastic and committed individuals.",
  path: "/career/",
  heading: "Career",
  banner: { src: `${IMG}/2024-01-shutterstock_1937300755-1-scaled.webp`, width: 2400, height: 1600, alt: "" } satisfies Img,
  ogImage: { src: `${IMG}/2024-01-cam-03--e1704295169477.webp`, width: 1667, height: 980 },
};

export const workWithUs = {
  kicker: "Aakash India",
  title: "Work With Us",
  text: "At Aakash India Group, we believe in careers, not jobs. We invest in each of our employee’s development & improvement and help them have a career growth trajectory they can be proud of. What we look for are self-motivated, enthusiastic, and committed individuals with a can-do attitude, and whose core values align with ours. What we bring to table are a positive workplace, a skilled & ambitious team, exciting work and ample opportunities for growth.",
  cta: { label: "more About Us", href: "/about-us/" },
  image: { src: `${IMG}/2024-01-cam-03--e1704295169477.webp`, width: 1667, height: 980, alt: "Rendering of an Aakash India office building" } satisfies Img,
  backdrop: { src: `${IMG}/2024-01-elavationcam_aakash-india02.webp`, width: 1400, height: 1750, alt: "" } satisfies Img,
};

const icon = (file: string): Img => ({ src: `${IMG}/${file}`, width: 128, height: 128, alt: "" });

export const lookingForYou = {
  kicker: "Join the legacy!",
  title: "We Are Looking For You",
  items: [
    {
      title: "Culture",
      text: "A family of smart & passionate colleagues. A culture that promotes sustainability & trust. Here I becomes we and mine becomes ours. Every challenge is braved shoulder to shoulder. Every accomplishment is a collective win. And everyday is better together!",
      icon: icon("2024-02-culture.webp"),
    },
    {
      title: "Workplace",
      text: "Our green building is a workplace designed with fun-at-work philosophy. We believe that a happy person can add unparalleled value to an organisation. Our pro-employee HR policies are designed to deliver an appropriate work-life balance for all.",
      icon: icon("2024-02-workplace.webp"),
    },
    {
      title: "Growth",
      text: "We invest in developing our talents with training and mentorship, and we challenge you with engaging work that ensures you believe in possibilities and build confidence. We encourage you to grow your skills and feed your curiosity in a rich learning environment.",
      icon: icon("2024-02-success.webp"),
    },
  ],
};

export type Position = {
  title: string;
  details: { label: string; value: string }[];
  technical: string[];
  description?: string;
  remarks?: string;
};

export const positions: Position[] = [
  {
    title: "Senior IT Executive",
    details: [
      { label: "Number Of Vacancy", value: "1" },
      { label: "Location", value: "Jamshedpur" },
      { label: "Experience", value: "3–4 years" },
      { label: "Education Qualification", value: "B.Tech IT / B.Sc IT / BCA / MBA in IT / MCA" },
    ],
    technical: [
      "Strong Knowledge of Hardware & Infrastructure",
      "Expertise Knowledge of Network Management (routers, switches, firewalls)",
      "Strong understanding of servers (Windows) & data-center room management",
      "Knowledge of Cyber Security, Backup & Recovery",
      "Understanding of structured cabling (CAT6/CAT6A, Fiber)",
      "Familiar with endpoint devices: Desktops, Laptops, Printers, Biometric Devices, Basic UPS & Power-Backup",
    ],
  },
  {
    title: "Purchase Head",
    details: [
      { label: "Number Of Vacancy", value: "1" },
      { label: "Location", value: "Jamshedpur" },
      { label: "Experience", value: "8-9 years" },
      { label: "Education Qualification", value: "BE CIVIL / MBA / PG Diploma in Materials Management" },
    ],
    technical: [
      "Strong knowledge of procurement processes",
      "Strong negotiation skills required",
      "Expertise in Vendor & Material management & Inventory Management",
      "ERP/Tally knowledge will be an added advantage",
      "Immediate joiners will be prioritized",
    ],
  },
  {
    title: "Leasing Manager",
    details: [
      { label: "Number Of Vacancy", value: "1" },
      { label: "Location", value: "Jamshedpur" },
      { label: "Experience", value: "5-6 years" },
      { label: "Education Qualification", value: "BBA / MBA in Business/Marketing / Sales is preferred" },
    ],
    technical: [
      "Knowledge of leasing documentation, market research, and client handling",
      "Proficient in MS Office/CRM tools.",
      "Candidates with strong communication and negotiation skills preferred",
    ],
    description:
      "The Leasing Manager is responsible for driving leasing activities for commercial/retail real estate properties by identifying prospective tenants, negotiating lease agreements, maximizing occupancy, and ensuring rental revenue growth. The role focuses on tenant acquisition, retention, market positioning, and maintaining strong relationships with clients.",
    remarks: "Female Candidate will be preferred",
  },
];

export const mosaic = {
  first: { title: ["Uniting Brilliance,", "Forging Innovations."], image: { src: `${IMG}/2024-03-pexels-rdne-stock-project-7580983.webp`, width: 1280, height: 853, alt: "Colleagues collaborating around a laptop" } satisfies Img },
  second: { title: ["Fostering Collaboration, Igniting Genius."], image: { src: `${IMG}/2024-03-pexels-rdne-stock-project-7580827.webp`, width: 1279, height: 853, alt: "Team discussion in a meeting room" } satisfies Img },
};

export const openApplication = {
  title: "Don't See A Role That Suits You? Doesn't Matter.",
  subtitle: "We are always open to new talent.",
};

const applicantFields: Field[] = [
  { kind: "text", name: "first_name", label: "First Name", required: true, half: true, autoComplete: "given-name" },
  { kind: "text", name: "last_name", label: "Last Name", required: true, half: true, autoComplete: "family-name" },
  { kind: "email", name: "email", label: "Email", required: true, half: true, autoComplete: "email" },
  { kind: "tel", name: "phone", label: "Phone Number", required: true, half: true, autoComplete: "tel" },
];
const cvField: Field = {
  kind: "files",
  name: "cv",
  label: "Upload CV",
  accept: ".pdf,.doc,.docx",
  acceptLabel: "a PDF or Word document",
  maxFiles: 1,
  maxMB: 5,
  required: true,
};

export const applyForms = {
  kicker: "Contact",
  title: "Write to us",
  job: {
    name: "Career Application",
    fields: [...applicantFields, { kind: "select", name: "job_role", label: "Job Role", required: true, options: opts(...positions.map((p) => p.title)) }, cvField] satisfies Field[],
  },
  general: { name: "Career Open Application", fields: [...applicantFields, cvField] satisfies Field[] },
  hr: { email: "hr@aakashindia.in", phone: { label: "8757437444", href: "tel:+918757437444" } },
};

export const disclaimer = {
  title: "Important Disclaimer",
  delayMs: 5000,
  paragraphs: [
    "Aakash India is NOT offering any work-from-home job opportunities. If you receive any call, message, or email claiming to offer such opportunities on behalf of Aakash India, please ignore it.",
    "Aakash India is not associated with any such fraudulent activities, and we strongly advise the public to exercise caution and avoid sharing any personal or financial information with unknown sources.",
    "For official updates and job opportunities, please refer to our official website or contact us directly through our verified channels.",
  ],
};
