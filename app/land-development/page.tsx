import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { ArrowRight } from "@/components/icons";
import { site } from "@/lib/content";
import { landForm, landIntro, landPage, whyChoose } from "@/lib/land";
import "./land.css";

export const metadata: Metadata = {
  title: landPage.title,
  description: landPage.description,
  alternates: { canonical: landPage.path },
  openGraph: {
    type: "article",
    url: landPage.path,
    title: landPage.title,
    description: landPage.description,
    images: [{ url: landPage.ogImage.src, width: landPage.ogImage.width, height: landPage.ogImage.height }],
  },
};

export default function LandDevelopmentPage() {
  return (
    <>
      <Header current={landPage.path} />
      <main id="top">
        {/* Page title bar */}
        <section className="page-banner">
          <Image className="page-banner-img" src={landPage.banner.src} alt="" fill sizes="100vw" quality={60} preload />
          <div className="page-banner-inner container">
            <h1>Land Development</h1>
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                <li aria-current="page">
                  <ArrowRight /> Land Development
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Intro */}
        <section className="ld-intro" aria-labelledby="ld-intro-title">
          <div className="container ld-intro-inner">
            <div className="ld-intro-text">
              <h2 id="ld-intro-title" className="ld-title">
                {landIntro.title}
              </h2>
              <p>{landIntro.text}</p>
              <a className="btn btn-gold" href={landIntro.cta.href}>
                {landIntro.cta.label} <ArrowRight />
              </a>
            </div>
            <div className="ld-intro-image">
              <Image {...landIntro.image} alt={landIntro.image.alt} sizes="(max-width: 767px) 100vw, 50vw" loading="eager" />
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="ld-why" aria-labelledby="ld-why-title">
          <div className="container">
            <div className="ld-why-head">
              <h2 id="ld-why-title" className="ld-title">
                {whyChoose.title}
              </h2>
              <p>{whyChoose.text}</p>
            </div>
            <ul className="ld-cards">
              {whyChoose.items.map((item) => (
                <li key={item.title} className="ld-card">
                  <Image {...item.icon} alt={item.icon.alt} sizes="70px" className="ld-card-icon" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Enquiry */}
        <section id="enquire" className="ld-enquire" aria-labelledby="ld-form-title">
          <div className="container ld-enquire-inner">
            <div className="ld-form-col">
              <h2 id="ld-form-title" className="ld-title ld-form-title">
                {landForm.title}
              </h2>
              <LeadForm id="land" name={landForm.name} fields={landForm.fields} />
              <p className="ld-alt">
                Alternatively, you can mail us at <a href={`mailto:${site.email}`}>{site.email}</a> or call us on{" "}
                <a href={landForm.phone.href}>{landForm.phone.label}</a>.
              </p>
            </div>
            <div className="ld-enquire-image">
              <Image {...landForm.image} alt={landForm.image.alt} sizes="(max-width: 767px) 100vw, 50vw" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
