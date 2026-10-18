import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import { ArrowRight } from "@/components/icons";
import { site } from "@/lib/content";
import { answerText, faqPage, faqs } from "@/lib/faq";
import "./faq.css";

const banner = { src: "/images/aakash-india/2024-01-project-page-scaled.webp", width: 2400, height: 1352 };

export const metadata: Metadata = {
  title: faqPage.title,
  description: faqPage.description,
  alternates: { canonical: faqPage.path },
  openGraph: {
    type: "article",
    url: faqPage.path,
    title: faqPage.title,
    description: faqPage.description,
    images: [{ url: banner.src, width: banner.width, height: banner.height }],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: faqPage.heading, item: `${site.url}${faqPage.path}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: answerText(f.a) } })),
  },
];

export default function FaqPage() {
  return (
    <>
      <Header current={faqPage.path} />
      <main id="top">
        {/* Page title bar */}
        <section className="page-banner">
          <Image className="page-banner-img" src={banner.src} alt="" fill sizes="100vw" quality={60} preload />
          <div className="page-banner-inner container">
            <h1>{faqPage.heading}</h1>
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                <li aria-current="page">
                  <ArrowRight /> {faqPage.heading}
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section id="faq" className="fq-section" aria-labelledby="fq-title">
          <div className="container">
            <div className="fq-head">
              <h2 id="fq-title" className="fq-eyebrow">
                {faqPage.eyebrow}
              </h2>
              <p className="fq-sub">{faqPage.intro}</p>
            </div>
            <FaqAccordion items={faqs} />
            <div className="fq-cta">
              <p>{faqPage.cta.text}</p>
              <a className="btn btn-gold fq-cta-btn" href={faqPage.cta.href}>
                {faqPage.cta.label}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {jsonLd.map((d) => (
        <script key={d["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}
