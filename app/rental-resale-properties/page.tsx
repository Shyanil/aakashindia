import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import PropertySearch from "@/components/PropertySearch";
import ResaleTiles from "@/components/ResaleTiles";
import { ArrowRight } from "@/components/icons";
import { forms, rentalPage } from "@/lib/rental-resale";
import "./rental.css";

export const metadata: Metadata = {
  title: rentalPage.title,
  description: rentalPage.description,
  alternates: { canonical: rentalPage.path },
  openGraph: {
    type: "article",
    url: rentalPage.path,
    title: rentalPage.title,
    description: rentalPage.description,
    images: [{ url: rentalPage.image.src, width: rentalPage.image.width, height: rentalPage.image.height }],
  },
};

export default function RentalResalePage() {
  return (
    <>
      <Header current={rentalPage.path} />
      <main id="top">
        {/* Page title bar */}
        <section className="page-banner">
          <Image className="page-banner-img" src={rentalPage.banner.src} alt="" fill sizes="100vw" quality={60} preload />
          <div className="page-banner-inner container">
            <p className="page-banner-title">Rental / Resale properties</p>
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                <li aria-current="page">
                  <ArrowRight /> Rental / Resale properties
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Find your property */}
        <section className="rr-find" aria-labelledby="rr-find-title">
          <div className="container rr-find-inner">
            <div className="rr-find-text">
              <h1 id="rr-find-title" className="rr-find-title">
                {rentalPage.heading}
              </h1>
              <span className="rr-rule" aria-hidden="true" />
              <p className="rr-find-intro">{rentalPage.intro}</p>
            </div>
            <div className="rr-find-image">
              <Image {...rentalPage.image} alt={rentalPage.image.alt} sizes="(max-width: 767px) 100vw, (max-width: 1199px) 90vw, 620px" loading="eager" />
            </div>
            <div className="rr-search">
              <PropertySearch />
            </div>
          </div>
        </section>

        {/* Plots and Land / Sell / Rent / Explore Heights / Property Hacks */}
        <section className="rr-explore container" aria-label="Explore">
          <ResaleTiles />
          <hr className="rr-divider" />
        </section>

        {/* Inquiry and registration forms */}
        <section className="rr-forms container" aria-label="Inquiry and property registration forms">
          {forms.map((f) => (
            <article key={f.id} id={f.id} className="rr-form" aria-labelledby={`${f.id}-title`}>
              <header className="rr-form-head">
                <Image {...f.image} alt="" className="rr-form-bg" sizes="(max-width: 767px) 100vw, 380px" />
                <h2 id={`${f.id}-title`}>{f.heading}</h2>
                <span className="rr-rule rr-rule-light" aria-hidden="true" />
                <p>{f.text}</p>
              </header>
              <LeadForm id={f.id} name={f.name} fields={f.fields} />
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
