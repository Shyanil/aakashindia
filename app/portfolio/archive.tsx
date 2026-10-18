import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioFilters from "@/components/PortfolioFilters";
import { ArrowRight, ChevronLeft, ChevronRight } from "@/components/icons";
import { site } from "@/lib/content";
import { archiveHref, filterOptions, filterProjects, parseQueryFilters, PER_PAGE, type Filters, type Project } from "@/lib/portfolio";
import { Suspense } from "react";
import "./portfolio.css";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;
type ArchiveProps = { searchParams: SearchParams; page: number; status?: string };

export const archivePage = {
  title: "Projects Archive - Aakash India",
  description:
    "Browse Aakash India's completed, ongoing and upcoming residential and commercial projects across Jamshedpur and Rourkela, filtered by status, type and location.",
  heading: "Projects",
  banner: { src: "/images/aakash-india/2024-01-project-page-scaled.webp" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: archivePage.title,
    description: archivePage.description,
    url: `${site.url}/portfolio/`,
    isPartOf: { "@type": "WebSite", name: site.name, url: `${site.url}/` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: archivePage.heading, item: `${site.url}/portfolio/` },
    ],
  },
];

/** Title/description/canonical for one archive view (all projects or one status, any page). */
export function archiveMetadata(status: string | undefined, page: number) {
  const statusLabel = filterOptions.status.options.find((o) => o.slug === status)?.label;
  const base = statusLabel ? `${statusLabel} Projects - Aakash India` : archivePage.title;
  const title = page > 1 ? base.replace(" - ", ` - Page ${page} - `) : base;
  const description = statusLabel
    ? `Aakash India's ${statusLabel.toLowerCase()} residential and commercial projects in Jamshedpur and Rourkela, with location, area and type for each.`
    : archivePage.description;
  const url = archiveHref(page, { status });
  return { title, description, alternates: { canonical: url }, openGraph: { type: "website" as const, url, title, description } };
}

/** Static shell (header, banner, footer) with the URL-driven results streamed in. */
export function ArchiveShell({ searchParams, page, status }: ArchiveProps) {
  return (
    <>
      <Header current="/portfolio/" />
      <main id="top">
        <section className="page-banner">
          <Image className="page-banner-img" src={archivePage.banner.src} alt="" fill sizes="100vw" quality={60} preload />
          <div className="page-banner-inner container">
            <h1>{archivePage.heading}</h1>
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                <li aria-current="page">
                  <ArrowRight /> {archivePage.heading}
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="pf-archive container" aria-label="Projects">
          {/* The fallback is the real, unfiltered page: it is part of the prerendered static HTML, so
              the common URLs (/portfolio/completed/ etc.) show their cards instantly. Only a
              ?type= / ?location= query changes what streams in to replace it. */}
          <Suspense fallback={<ResultsView filters={{ status }} page={page} />}>
            <Results searchParams={searchParams} page={page} status={status} />
          </Suspense>
        </section>
      </main>
      <Footer />
      {jsonLd.map((d) => (
        <script key={d["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}

async function Results({ searchParams, page, status }: ArchiveProps) {
  const sp = await searchParams;
  return <ResultsView filters={{ status, ...parseQueryFilters(sp) }} page={page} />;
}

function ResultsView({ filters, page }: { filters: Filters; page: number }) {
  const matches = filterProjects(filters);
  const pages = Math.max(1, Math.ceil(matches.length / PER_PAGE));
  // Out-of-range pages are rejected before streaming (see paging.ts); a filter can still
  // narrow a valid page to nothing, which shows the empty state below.
  const shown = matches.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  // Remount the (uncontrolled) form whenever the URL's filters change, e.g. on back/forward.
  const formKey = archiveHref(1, filters);

  return (
    <>
      <PortfolioFilters key={formKey} filters={filters} />
      <p className="pf-count" role="status">
        {matches.length === 0
          ? "No projects match these filters."
          : `Showing ${(page - 1) * PER_PAGE + 1}–${(page - 1) * PER_PAGE + shown.length} of ${matches.length} project${matches.length === 1 ? "" : "s"}`}
      </p>
      {shown.length > 0 ? (
        <ul className="pf-grid">
          {shown.map((p, i) => (
            <li key={p.slug}>
              <ProjectCard project={p} eager={i < 3} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="pf-empty">
          Try a different combination, or <Link href="/portfolio/">view all projects</Link>.
        </p>
      )}
      {pages > 1 && <Pagination page={page} pages={pages} filters={filters} />}
    </>
  );
}

function ProjectCard({ project: p, eager }: { project: Project; eager: boolean }) {
  return (
    <article className="pf-card">
      <div className="pf-card-img">
        <Image {...p.image} alt={p.image.alt} sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 390px" loading={eager ? "eager" : "lazy"} />
      </div>
      <div className="pf-card-body">
        <h2 className="pf-card-title">
          <a href={p.href}>{p.name}</a>
        </h2>
        <p className="pf-card-loc">{p.location}</p>
        <dl className="pf-card-list">
          <div>
            <dt>Status</dt>
            <dd>{p.status}</dd>
          </div>
          <div>
            <dt>Area</dt>
            <dd>{p.area}</dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>{p.type}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

function Pagination({ page, pages, filters }: { page: number; pages: number; filters: Filters }) {
  return (
    <nav className="pf-pagination" aria-label="Projects pagination">
      {page > 1 && (
        <Link className="pf-page" href={archiveHref(page - 1, filters)} aria-label="Previous page" scroll={false}>
          <ChevronLeft width={14} height={14} />
        </Link>
      )}
      {Array.from({ length: pages }, (_, i) => i + 1).map((n) =>
        n === page ? (
          <span key={n} className="pf-page is-current" aria-current="page">
            <span className="sr-only">Page </span>
            {n}
          </span>
        ) : (
          <Link key={n} className="pf-page" href={archiveHref(n, filters)} scroll={false}>
            <span className="sr-only">Page </span>
            {n}
          </Link>
        ),
      )}
      {page < pages && (
        <Link className="pf-page" href={archiveHref(page + 1, filters)} aria-label="Next page" scroll={false}>
          <ChevronRight width={14} height={14} />
        </Link>
      )}
    </nav>
  );
}
