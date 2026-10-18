// FAQ page content, transcribed programmatically from the accordion on https://aakashindia.in/faq/
// (WordPress HTML), keeping the source's question order and answer wording. The source omits the
// question marks on its questions; they are added here. `open` mirrors the source's initial state.

export type Segment = string | { strong: string };
export type Block = { p: Segment[] } | { ul: Segment[][] };
export type Faq = { q: string; open: boolean; a: Block[] };

export const faqPage = {
  title: "Frequently Asked Questions - Aakash India",
  // The source sets no meta description; this one summarises the visible questions.
  description:
    "Answers to common questions about Aakash India: the company, RERA registration, project locations, construction quality, home loans and booking a site visit in Jamshedpur.",
  path: "/faq/",
  heading: "Frequently Asked Questions",
  eyebrow: "Got Questions?",
  intro:
    "Everything you need to know about Aakash India, our projects, and the home buying process.",
  cta: {
    text: "Still have a question?",
    label: "Talk to Our Team",
    href: "tel:+917079829999",
  },
};

export const faqs: Faq[] = [
  {
    q: "Who is Aakash India Projects and Builders Private Limited?",
    open: true,
    a: [
      {
        p: [
          "Aakash India Projects and Builders Private Limited is a premium real estate developer based in Jamshedpur, Jharkhand. Founded in 1971 and incorporated as a private limited company in 2009, the group has over five decades of construction heritage, completing more than 20 projects and serving more than 1,000 families across Jharkhand and Odisha. The company is headquartered at Payal Cinema Complex, Mango, Jamshedpur, 831012.",
        ],
      },
    ],
  },
  {
    q: "How long has Aakash India been in the real estate business?",
    open: true,
    a: [
      {
        p: [
          "Aakash India has been active in real estate since 1971, over five decades of continuous operation in the Jamshedpur market. Today the company is led by directors Rahul Sawa and Vishal Sawa and continues to redefine Jamshedpur's skyline.",
        ],
      },
    ],
  },
  {
    q: "Are the projects under Aakash India RERA registered?",
    open: false,
    a: [
      {
        p: [
          "Yes. The projects under Aakash India Projects and Builders Private Limited are registered with the Jharkhand Real Estate Regulatory Authority, known as JhaRERA. Each project carries its own RERA registration number. For example, Aakash Ananda is registered under JHARERA PROJECT 212 2024. Buyers can verify project status, construction progress, and legal clearances on the JhaRERA portal at jharkhandrera.jharkhand.gov.in using the respective project registration number.",
        ],
      },
    ],
  },
  {
    q: "Where are Aakash India's offices and project sites located?",
    open: false,
    a: [
      {
        p: [
          "The corporate office is located at Payal Cinema Complex, Mango, Jamshedpur, Jharkhand, 831012. Project sites are spread across Jamshedpur's premium micro markets, including:",
        ],
      },
      {
        ul: [
          ["Aakash Riviera in Dobo, Jamshedpur"],
          ["Aakash Ananda on Dimna Main Road, Mango"],
          ["Aakash Nirvana in Adarsh Nagar, Sonari"],
          ["Aakash Riviera Mall in Dobo, Jamshedpur"],
          ["Aakash Skyline in Chepapul, Mango"],
        ],
      },
    ],
  },
  {
    q: "What configuration options are available in Aakash Nirvana?",
    open: false,
    a: [
      {
        p: [
          "Aakash Nirvana, located in Sonari near Marine Drive, is a ground plus fifteen storey residential tower offering 60 premium 3 BHK and 4 BHK apartments. Key features include:",
        ],
      },
      {
        ul: [
          ["Double height private sky deck in each apartment"],
          ["70 percent open area for ventilation and green space"],
          [
            "Views of the Subarnarekha River and Dalma Hills from select floors",
          ],
          ["Terrace clubhouse and swimming pool"],
        ],
      },
    ],
  },
  {
    q: "What is Aakash Riviera Mall and who is it for?",
    open: false,
    a: [
      {
        p: [
          "Aakash Riviera Mall is East India's first scenic riverfront commercial project, developed by Aakash India on the banks of the Subarnarekha River in New Jamshedpur. It offers retail and commercial spaces ranging from 405 square feet to 13,538 square feet, designed to attract lifestyle driven footfall. The project is suited for retail brands, food and beverage outlets, and boutique service businesses seeking a premium waterfront address in Jharkhand's industrial capital.",
        ],
      },
    ],
  },
  {
    q: "Does Aakash India build Vastu compliant homes?",
    open: false,
    a: [
      {
        p: [
          "Yes. Vastu compliance is a design standard across Aakash India's residential projects. Layouts are planned to align room orientations with Vastu Shastra principles. For instance, toilet pans are oriented north to south, puja rooms are integrated in dedicated spaces, and master bedrooms are positioned to maximise positive energy flow. Projects like Aakash Ananda and Aakash Nirvana explicitly confirm Vastu compliant floor plans in their architectural briefs.",
        ],
      },
    ],
  },
  {
    q: "Does Aakash India offer home loan assistance?",
    open: false,
    a: [
      {
        p: [
          "Yes. Aakash India works with leading nationalised and private banks to facilitate home loan approvals for buyers of its residential projects. The company's pre approved project status with select lenders means buyers can benefit from faster loan sanction timelines. For current empanelled banking partners and loan to value ratios available on specific projects, contact the Aakash India sales team at plus 91 70798 29999.",
        ],
      },
    ],
  },
  {
    q: "What construction quality standards does Aakash India follow?",
    open: false,
    a: [
      {
        p: [
          "Aakash India follows BIS code compliant RCC framed construction with seismic and wind load engineering specifications. Key quality markers across projects include:",
        ],
      },
      {
        ul: [
          [
            "AAC blocks, meaning Aerated Autoclaved Concrete, for external walls of 200 millimetres and internal walls of 125 millimetres",
          ],
          [
            "UPVC or powder coated aluminium windows with 5 millimetre clear float glass",
          ],
          [
            "Premium 600 by 600 millimetre or 1800 by 600 millimetre glazed vitrified tile flooring",
          ],
          ["Jaquar, Kohler, or Grohe CP fittings in bathrooms"],
          ["3 phase 5 KVA power supply with DG backup per flat"],
          [
            "Structural engineering by SPA Consultants, Kolkata, with architecture by award winning firms",
          ],
        ],
      },
    ],
  },
  {
    q: "Who are the architects and consultants behind Aakash India's projects?",
    open: false,
    a: [
      {
        p: [
          "Aakash India collaborates with nationally recognised design and engineering practices:",
        ],
      },
      {
        ul: [
          [
            {
              strong: "Architect and Landscape Consultant:",
            },
            "Beyond Architecture, Kolkata, led by Karunamoy Kolay and Tannishtha Mukherjee, with clients including TATA Steel, ITC, and Godrej Properties",
          ],
          [
            {
              strong: "Structural Consultant:",
            },
            "SPA Consultants Private Limited, Kolkata, founded in 1987 by Sanjiv J Parekh, with more than 250 projects across India",
          ],
          [
            {
              strong: "Services Consultant:",
            },
            "SNS, led by Avinish Nayyar, with more than 25 years of experience and more than 1,000 projects across Delhi NCR, Mumbai, Pune, and Bangalore",
          ],
          [
            {
              strong: "Brand Consultant:",
            },
            "BetheBee, a creative agency specialising in Indian real estate branding",
          ],
        ],
      },
    ],
  },
  {
    q: "Why is Jamshedpur considered a good city for real estate investment?",
    open: false,
    a: [
      {
        p: [
          "Jamshedpur is Jharkhand's most industrially developed city and home to TATA Steel, one of Asia's largest integrated steel plants. Key investment drivers include:",
        ],
      },
      {
        ul: [
          [
            {
              strong: "Stable employment base:",
            },
            "Anchored by TATA Group and its supply chain ecosystem, providing consistent housing demand",
          ],
          [
            {
              strong: "Infrastructure connectivity:",
            },
            "Well connected via NH 33 and proximity to Kolkata, Ranchi, and Bhubaneswar",
          ],
          [
            {
              strong: "Natural beauty:",
            },
            "Dalma Hills, the Subarnarekha River, and Dimna Lake offer premium lifestyle value unavailable in most Tier 2 cities",
          ],
          [
            {
              strong: "Lower property prices compared to metros:",
            },
            "Attractive entry points for investors and end users compared to Mumbai, Kolkata, or Hyderabad",
          ],
        ],
      },
    ],
  },
  {
    q: "What makes Mango and Sonari premium residential areas in Jamshedpur?",
    open: false,
    a: [
      {
        p: [
          "Mango, officially known as New Jamshedpur, has emerged as the city's fastest growing residential and commercial corridor due to its proximity to Dimna Lake, Dimna Main Road, and NH 33. It offers banks, schools such as Mount View School and Sheyn International School, hospitals such as Ganga Memorial and Brahmananda Narayana, and retail hubs within a 2 to 5 kilometre radius, making it a self sufficient township. Sonari is an established premium residential micro market on the southern bank of the Subarnarekha River, known for its scenic Marine Drive views, low density development, and proximity to Sonari Airport.",
        ],
      },
    ],
  },
  {
    q: "What is the difference between carpet area, built up area, and super built up area?",
    open: false,
    a: [
      {
        p: [
          "These three area measurements are standardised by RERA India and apply to all residential purchases:",
        ],
      },
      {
        ul: [
          [
            {
              strong: "Carpet area:",
            },
            "The actual usable floor area inside the apartment walls. This is the RERA standardised metric developers must quote. For example, Aakash Nirvana's 4 BHK Unit 01 has a carpet area of 2,711 square feet.",
          ],
          [
            {
              strong: "Built up area:",
            },
            "Carpet area plus wall thickness plus balcony, typically 6 to 10 percent more than carpet area. The same unit's built up area is 2,874 square feet.",
          ],
          [
            {
              strong: "Super built up area:",
            },
            "Built up area plus a proportionate share of common spaces such as lifts, staircases, and lobbies. The same unit's super built up area is 3,700 square feet.",
          ],
        ],
      },
      {
        p: [
          "Under RERA, buyers in India must be quoted pricing on a carpet area basis to ensure transparency.",
        ],
      },
    ],
  },
  {
    q: "How can I contact Aakash India to schedule a site visit?",
    open: false,
    a: [
      {
        p: [
          "You can reach the Aakash India sales team through the following channels:",
        ],
      },
      {
        ul: [
          [
            {
              strong: "Phone and IVR:",
            },
            "+ 91 70798 29999 or + 91 79690 59999",
          ],
          [
            {
              strong: "Email:",
            },
            "sales at aakashindia dot in",
          ],
          [
            {
              strong: "Website:",
            },
            "www.aakashindia.in",
          ],
          [
            {
              strong: "Office:",
            },
            "Payal Cinema Complex, Mango, Jamshedpur, 831012",
          ],
          [
            {
              strong: "Instagram:",
            },
            "aakashindiap.",
            {
              strong: "Facebook:",
            },
            "Aakash India projects",
          ],
        ],
      },
      {
        p: [
          "Site visits for all projects can be booked by calling the IVR number above.",
        ],
      },
    ],
  },
];

/** Plain-text version of an answer, for FAQPage structured data. */
export function answerText(blocks: Block[]): string {
  const seg = (s: Segment[]) =>
    s.map((x) => (typeof x === "string" ? x : x.strong)).join(" ");
  return blocks
    .map((b) => ("p" in b ? seg(b.p) : b.ul.map(seg).join("; ")))
    .join(" ");
}
