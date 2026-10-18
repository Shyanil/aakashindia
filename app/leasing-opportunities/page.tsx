import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { ArrowRight, CircleDot } from "@/components/icons";
import { site } from "@/lib/content";
import { advantages, featured, leaseList, leasingForm, leasingIntro, leasingPage, properties } from "@/lib/leasing";
import "./leasing.css";

export const metadata: Metadata = {
  title: leasingPage.title,
  description: leasingPage.description,
  alternates: { canonical: leasingPage.path },
  openGraph: {
    type: "article",
    url: leasingPage.path,
    title: leasingPage.title,
    description: leasingPage.description,
    images: [{ url: leasingPage.ogImage.src, width: leasingPage.ogImage.width, height: leasingPage.ogImage.height }],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
    { "@type": "ListItem", position: 2, name: leasingPage.heading, item: `${site.url}${leasingPage.path}` },
  ],
};

export default function LeasingPage() {
  return (
    <>
      <Header current={leasingPage.path} />
      <main id="top">
        {/* Page title bar */}
        <section className="page-banner">
          <Image className="page-banner-img" src={leasingPage.banner.src} alt="" fill sizes="100vw" quality={60} preload />
          <div className="page-banner-inner container">
            <h1>{leasingPage.heading}</h1>
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                <li aria-current="page">
                  <ArrowRight /> {leasingPage.heading}
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Intro: two overlapping photos + copy */}
        <section className="ls-intro" aria-labelledby="ls-intro-title">
          <div className="container ls-intro-inner">
            <div className="ls-collage">
              {leasingIntro.images.map((img) => (
                <Image key={img.src} {...img} alt={img.alt} sizes="(max-width: 767px) 90vw, 400px" />
              ))}
            </div>
            <div className="ls-intro-text">
              <h2 id="ls-intro-title" className="ls-title">
                {leasingIntro.title}
              </h2>
              <p>{leasingIntro.text}</p>
            </div>
          </div>
        </section>

        {/* Leasing advantage */}
        <section className="ls-adv" aria-labelledby="ls-adv-title">
          <div className="container">
            <h2 id="ls-adv-title" className="ls-title">
              {advantages.title}
            </h2>
            <p className="ls-lead">{advantages.text}</p>
            <ul className="ls-adv-cards">
              {advantages.items.map((a) => (
                <li key={a.title} className="ls-adv-card">
                  <Image {...a.icon} alt={a.icon.alt} sizes="70px" className="ls-adv-icon" />
                  <div>
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Lease with ease: properties */}
        <section className="ls-list" aria-labelledby="ls-list-title">
          <div className="container">
            <h2 id="ls-list-title" className="ls-title">
              {leaseList.title}
            </h2>
            <p className="ls-lead">{leaseList.text}</p>
          </div>

          {featured.map((f) => (
            <article key={f.name} className={`ls-feature ls-feature-${f.tone}`} aria-labelledby={`ls-${f.tone}-title`}>
              <div className="ls-feature-media">
                <Image {...f.image} alt={f.image.alt} sizes="(max-width: 767px) 100vw, 50vw" />
              </div>
              <div className="ls-feature-body">
                <h3 id={`ls-${f.tone}-title`}>{f.name}</h3>
                <p className="ls-address">{f.address}</p>
                <ul className="ls-features">
                  {f.features.map((x) => (
                    <li key={x}>
                      <CircleDot /> {x}
                    </li>
                  ))}
                </ul>
                <a className="btn ls-enquire-btn" href="#form">
                  Enquire Now <ArrowRight />
                </a>
              </div>
            </article>
          ))}

          <ul className="container ls-props">
            {properties.map((p) => (
              <li key={p.name} className="ls-prop">
                <div className="ls-prop-img">
                  <Image {...p.image} alt={p.image.alt} sizes="(max-width: 767px) 100vw, 250px" />
                </div>
                <div className="ls-prop-body">
                  <h3>{p.name}</h3>
                  <p>{p.address}</p>
                  <a className="ls-prop-link" href="#form">
                    Enquire Now <ArrowRight />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Enquiry form */}
        <section id="form" className="ls-form-section" aria-labelledby="ls-form-title">
          <div className="container ls-form-inner">
            <div className="ls-form-col">
              <h2 id="ls-form-title" className="ls-title ls-form-title">
                {leasingForm.title}
              </h2>
              <LeadForm id="leasing" name={leasingForm.name} fields={leasingForm.fields} contact={leasingForm} />
              <p className="ls-alt">
                Alternatively, you can mail us at <a href={`mailto:${leasingForm.email}`}>{leasingForm.email}</a> or call us on{" "}
                <a href={leasingForm.phone.href}>{leasingForm.phone.label}</a>.
              </p>
            </div>
            <div className="ls-form-image">
              <Image {...leasingForm.image} alt={leasingForm.image.alt} sizes="(max-width: 767px) 100vw, 50vw" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}
