import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "@/components/icons";
import { site } from "@/lib/content";
import { upcomingPage, upcomingProjects } from "@/lib/upcoming";
// Project cards share the archive's card styles.
import "../portfolio/portfolio.css";
import "./upcoming.css";

export const metadata: Metadata = {
  title: upcomingPage.title,
  description: upcomingPage.description,
  alternates: { canonical: upcomingPage.path },
  openGraph: {
    type: "website",
    url: upcomingPage.path,
    title: upcomingPage.title,
    description: upcomingPage.description,
    images: [{ url: upcomingPage.ogImage.src, width: upcomingPage.ogImage.width, height: upcomingPage.ogImage.height }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
    { "@type": "ListItem", position: 2, name: upcomingPage.heading, item: `${site.url}${upcomingPage.path}` },
  ],
};

export default function UpcomingProjectPage() {
  return (
    <>
      <Header current={upcomingPage.path} />
      <main id="top">
        {/* Page title bar */}
        <section className="page-banner">
          <Image className="page-banner-img" src={upcomingPage.banner.src} alt="" fill sizes="100vw" quality={60} preload />
          <div className="page-banner-inner container">
            <h1>{upcomingPage.heading}</h1>
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                <li aria-current="page">
                  <ArrowRight /> {upcomingPage.heading}
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Upcoming projects */}
        <section className="up-projects" aria-labelledby="up-projects-title">
          <div className="container">
            <h2 id="up-projects-title" className="sr-only">
              Upcoming Projects
            </h2>
            <ul className="pf-grid up-grid">
              {upcomingProjects.map((p) => (
                <li key={p.name}>
                  <article className="pf-card">
                    <div className="pf-card-img">
                      <Image {...p.image} alt={p.image.alt} sizes="(max-width: 767px) 100vw, 570px" />
                    </div>
                    <div className="pf-card-body">
                      <h3 className="pf-card-title">
                        <a href={p.href}>{p.name}</a>
                      </h3>
                      <p className="pf-card-loc">{p.location}</p>
                      <dl className="pf-card-list">
                        {p.facts.map((f) => (
                          <div key={f.label}>
                            <dt>{f.label}</dt>
                            <dd>{f.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
