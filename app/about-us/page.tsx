import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { ArrowRight, Clock } from "@/components/icons";
import { aboutPage, founder, gallery, journey, missionVision } from "@/lib/about";
import "./about.css";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.description,
  alternates: { canonical: "/about-us/" },
  openGraph: {
    type: "article",
    url: "/about-us/",
    title: aboutPage.title,
    description: aboutPage.description,
    images: [{ url: aboutPage.ogImage }],
  },
};

export default function AboutPage() {
  const { mission, vision } = missionVision;
  return (
    <>
      <Header current="/about-us/" />
      <main id="top">
        {/* Page title bar */}
        <section className="page-banner">
          <Image
            className="page-banner-img"
            src={aboutPage.banner.src}
            alt=""
            fill
            sizes="100vw"
            quality={60}
            preload
          />
          <div className="page-banner-inner container">
            <h1>About Us</h1>
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                <li aria-current="page">
                  <ArrowRight /> About Us
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Founder */}
        <section className="founder" aria-labelledby="founder-name">
          <div className="container founder-inner">
            <div className="founder-photo">
              <Image {...founder.image} alt={founder.image.alt} sizes="(max-width: 767px) 100vw, 280px" />
            </div>
            <div className="founder-text">
              <p className="kicker">{founder.kicker}</p>
              <h2 id="founder-name" className="founder-name">
                {founder.name}
              </h2>
              <p>{founder.text}</p>
            </div>
          </div>
        </section>

        {/* Mission & vision */}
        <section className="mv" aria-label="Our mission and vision">
          <div className="mv-right">
            <Image {...missionVision.right} alt={missionVision.right.alt} sizes="(max-width: 1199px) 100vw, 1310px" />
          </div>
          <div className="mv-row">
            <div className="mv-left">
              <Image {...missionVision.left} alt={missionVision.left.alt} sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 1140px" />
            </div>
            <div className="mv-box">
              <h2>{mission.title}</h2>
              <p>{mission.text}</p>
              <h2>{vision.title}</h2>
              <p>{vision.text}</p>
            </div>
          </div>
        </section>

        {/* Journey timeline */}
        <section className="journey" aria-labelledby="journey-title">
          <div className="journey-inner">
            <p className="kicker journey-kicker">{journey.kicker}</p>
            <h2 id="journey-title" className="journey-title">
              {journey.title}
            </h2>
            <ol className="timeline">
              {journey.items.map((it) => (
                <li key={it.year} className="tl-item">
                  <span className="tl-year">{it.year}</span>
                  <span className="tl-icon" aria-hidden="true">
                    <Clock />
                  </span>
                  <div className="tl-card">
                    <h3>{it.title}</h3>
                    {it.text && <p>{it.text}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section className="gallery-section" aria-labelledby="gallery-title">
          <div className="gallery-inner">
            <h2 id="gallery-title" className="kicker gallery-title">
              Gallery
            </h2>
            <Gallery tabs={gallery} />
          </div>
        </section>
      </main>
      <Footer flush />
    </>
  );
}
