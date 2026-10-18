import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareerDialogs from "@/components/CareerDialogs";
import { ArrowRight, ChevronDown } from "@/components/icons";
import { site } from "@/lib/content";
import { applyForms, careerPage, lookingForYou, mosaic, openApplication, positions, workWithUs } from "@/lib/career";
import "./career.css";

export const metadata: Metadata = {
  title: careerPage.title,
  description: careerPage.description,
  alternates: { canonical: careerPage.path },
  openGraph: {
    type: "article",
    url: careerPage.path,
    title: careerPage.title,
    description: careerPage.description,
    images: [{ url: careerPage.ogImage.src, width: careerPage.ogImage.width, height: careerPage.ogImage.height }],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
    { "@type": "ListItem", position: 2, name: careerPage.heading, item: `${site.url}${careerPage.path}` },
  ],
};

/** "Apply Now": a real mailto link to HR that CareerDialogs upgrades to the application form. */
function ApplyLink({ role, className = "btn btn-gold" }: { role?: string; className?: string }) {
  const subject = role ? `Application: ${role}` : "Job application";
  return (
    <a
      className={className}
      href={`mailto:${applyForms.hr.email}?subject=${encodeURIComponent(subject)}`}
      data-apply={role ? "job" : "general"}
      data-role={role}
      aria-haspopup="dialog"
    >
      Apply Now <ArrowRight />
    </a>
  );
}

export default function CareerPage() {
  return (
    <>
      <Header current={careerPage.path} />
      <main id="top">
        {/* Page title bar */}
        <section className="page-banner">
          <Image className="page-banner-img" src={careerPage.banner.src} alt="" fill sizes="100vw" quality={60} preload />
          <div className="page-banner-inner container">
            <h1>{careerPage.heading}</h1>
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                <li aria-current="page">
                  <ArrowRight /> {careerPage.heading}
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Work with us */}
        <section className="cr-work" aria-labelledby="cr-work-title">
          <Image {...workWithUs.backdrop} alt="" className="cr-work-backdrop" sizes="50vw" />
          <div className="container cr-work-inner">
            <div className="cr-work-text">
              <p className="kicker">{workWithUs.kicker}</p>
              <h2 id="cr-work-title" className="cr-title">
                {workWithUs.title}
              </h2>
              <p>{workWithUs.text}</p>
              <Link className="btn btn-gold" href={workWithUs.cta.href}>
                {workWithUs.cta.label} <ArrowRight />
              </Link>
            </div>
            <div className="cr-work-image">
              <Image {...workWithUs.image} alt={workWithUs.image.alt} sizes="(max-width: 767px) 100vw, 50vw" loading="eager" />
            </div>
          </div>
        </section>

        {/* We are looking for you */}
        <section className="cr-looking" aria-labelledby="cr-looking-title">
          <div className="container">
            <p className="kicker cr-center">{lookingForYou.kicker}</p>
            <h2 id="cr-looking-title" className="cr-title cr-center">
              {lookingForYou.title}
            </h2>
            <ul className="cr-cards">
              {lookingForYou.items.map((item) => (
                <li key={item.title} className="cr-card">
                  <Image {...item.icon} alt={item.icon.alt} sizes="60px" className="cr-card-icon" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Open positions */}
        <section className="cr-positions" aria-labelledby="cr-positions-title">
          <div className="container">
            <h2 id="cr-positions-title" className="cr-title cr-center">
              Open Positions
            </h2>
            <div className="cr-accordion">
              {positions.map((p, i) => (
                <details key={p.title} className="cr-job" open={i === 0}>
                  <summary>
                    <span>{p.title}</span>
                    <ChevronDown className="cr-job-chevron" width={18} height={18} />
                  </summary>
                  <div className="cr-job-body">
                    <dl className="cr-job-facts">
                      {p.details.map((d) => (
                        <div key={d.label}>
                          <dt>{d.label} :-</dt>
                          <dd>{d.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <h3 className="cr-job-sub">Technical Qualification :-</h3>
                    <ul className="cr-job-list">
                      {p.technical.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    {p.description && (
                      <>
                        <h3 className="cr-job-sub">Job Description :</h3>
                        <p>{p.description}</p>
                      </>
                    )}
                    {p.remarks && (
                      <p className="cr-job-remarks">
                        <strong>Remarks :</strong> {p.remarks}
                      </p>
                    )}
                    <ApplyLink role={p.title} />
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Image mosaic */}
        <section className="cr-mosaic" aria-label="Life at Aakash India">
          <div className="cr-mosaic-row">
            <div className="cr-mosaic-img">
              <Image {...mosaic.first.image} alt={mosaic.first.image.alt} sizes="(max-width: 767px) 100vw, 66vw" />
            </div>
            <div className="cr-mosaic-panel cr-mosaic-gold">
              <h2>
                {mosaic.first.title[0]}
                <br />
                {mosaic.first.title[1]}
              </h2>
            </div>
          </div>
          <div className="cr-mosaic-row cr-mosaic-row-rev">
            <div className="cr-mosaic-panel cr-mosaic-blue">
              <h2>{mosaic.second.title[0]}</h2>
            </div>
            <div className="cr-mosaic-img">
              <Image {...mosaic.second.image} alt={mosaic.second.image.alt} sizes="(max-width: 767px) 100vw, 66vw" />
            </div>
          </div>
        </section>

        {/* Open application */}
        <section className="cr-open container" aria-labelledby="cr-open-title">
          <div className="cr-open-band">
            <h2 id="cr-open-title">
              {openApplication.title}
              <br />
              {openApplication.subtitle}
            </h2>
            <ApplyLink className="btn btn-gold cr-open-btn" />
          </div>
        </section>
      </main>
      <Footer />
      <CareerDialogs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}
