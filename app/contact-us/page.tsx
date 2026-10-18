import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "@/components/icons";
import { site } from "@/lib/content";
import { contactForm, contactPage, headOffice } from "@/lib/contact";
import "./contact.css";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.description,
  alternates: { canonical: contactPage.path },
  openGraph: {
    type: "article",
    url: contactPage.path,
    title: contactPage.title,
    description: contactPage.description,
    images: [{ url: contactForm.image.src, width: contactForm.image.width, height: contactForm.image.height }],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
    { "@type": "ListItem", position: 2, name: contactPage.heading, item: `${site.url}${contactPage.path}` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <Header current={contactPage.path} />
      <main id="top">
        {/* Page title bar */}
        <section className="page-banner">
          <Image className="page-banner-img" src={contactPage.banner.src} alt="" fill sizes="100vw" quality={60} preload />
          <div className="page-banner-inner container">
            <h1>{contactPage.heading}</h1>
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                <li aria-current="page">
                  <ArrowRight /> {contactPage.heading}
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Head office + map */}
        <section className="ct-office container" aria-labelledby="ct-office-title">
          <div className="ct-details">
            <p className="kicker">{headOffice.kicker}</p>
            <h2 id="ct-office-title" className="ct-title">
              {headOffice.title}
            </h2>
            <address className="ct-list">
              <p>
                <MapPin />
                <span>
                  {headOffice.address}
                  <a className="ct-directions" href={headOffice.directions} target="_blank" rel="noopener noreferrer">
                    Get directions <ArrowRight />
                  </a>
                </span>
              </p>
              <p>
                <Mail />
                <span>
                  {headOffice.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`}>
                      {e}
                    </a>
                  ))}
                </span>
              </p>
              <p>
                <Phone />
                <a href={headOffice.phone.href}>{headOffice.phone.label}</a>
              </p>
              <p>
                <Clock />
                <span>{headOffice.hours}</span>
              </p>
            </address>
          </div>
          <div className="ct-map">
            <iframe src={headOffice.mapEmbed} title={headOffice.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>

        {/* Write to us */}
        <section className="ct-write container" aria-labelledby="ct-write-title">
          <div className="ct-write-box">
            <div className="ct-write-image">
              <Image {...contactForm.image} alt={contactForm.image.alt} sizes="(max-width: 1199px) 0px, 480px" />
            </div>
            <div className="ct-write-form">
              <p className="kicker">{contactForm.kicker}</p>
              <h2 id="ct-write-title" className="ct-title">
                {contactForm.title}
              </h2>
              <LeadForm
                id="contact"
                name={contactForm.name}
                fields={contactForm.fields}
                contact={{ email: headOffice.emails[0], phone: headOffice.phone }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}
