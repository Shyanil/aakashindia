import Image from "next/image";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Carousel from "@/components/Carousel";
import FeatureSlider from "@/components/FeatureSlider";
import VideoLite from "@/components/VideoLite";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";
import { ArrowRight, Quote } from "@/components/icons";
import {
  about,
  awards,
  blogAuthor,
  events,
  features,
  HERO_INITIAL,
  heroSlides,
  legacy,
  postCategories,
  posts,
  projects,
  promo,
  site,
  story,
  testimonial,
} from "@/lib/content";

function SectionHeading({ kicker, title, center, as: H = "h2" }: { kicker?: string; title: React.ReactNode; center?: boolean; as?: "h2" | "h3" }) {
  return (
    <div className={`heading${center ? " heading-center" : ""}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      <H className="heading-title">{title}</H>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <h1 className="sr-only">Aakash India – Top Builders &amp; Real Estate Developers in Jamshedpur, Jharkhand</h1>
        <HeroSlider slides={heroSlides} initial={HERO_INITIAL} />

        {/* WHO WE ARE */}
        <section className="about" aria-labelledby="about-title">
          <div className="about-head container">
            <p className="kicker">{about.kicker}</p>
            <h2 id="about-title" className="heading-title">
              {about.title}
            </h2>
          </div>
          <div className="about-building">
            <Image {...about.building} alt={about.building.alt} sizes="(max-width: 1199px) 100vw, 1310px" />
          </div>
          <div className="about-row">
            <div className="about-portrait">
              <Image {...about.portrait} alt={about.portrait.alt} sizes="(max-width: 767px) 100vw, 34vw" />
            </div>
            <div className="about-box">
              <h2 className="about-vision">{about.visionTitle}</h2>
              <p>{about.body}</p>
              <a className="btn btn-gold-soft" href={about.cta.href}>
                <ArrowRight /> {about.cta.label}
              </a>
            </div>
          </div>
        </section>

        {/* STORY VIDEO */}
        <section className="story container" aria-label={story.title}>
          <VideoLite videoId={story.videoId} title={story.title} poster={story.poster} />
        </section>

        {/* FEATURED PROJECTS */}
        <section className="projects" aria-labelledby="projects-title">
          <Carousel
            label="Featured projects"
            indicator="dots"
            className="carousel-bleed"
            header={<SectionHeading kicker="featured projects" title={<span id="projects-title">Where happiness lives</span>} />}
            action={
              <a className="link-underline" href={`${site.url}/portfolio/`}>
                <ArrowRight /> view all projects
              </a>
            }
          >
            {projects.map((p, i) => (
              <li key={p.name} className="project-card">
                <Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 767px) 860px, (max-width: 1199px) 900px, 1030px" />
                <div className="project-overlay">
                  <h3>
                    <a href={p.href}>{p.name}</a>
                  </h3>
                  <p className="project-loc">{p.location}</p>
                  {p.rera && (
                    <p className="project-rera">
                      <span>RERA NO</span>
                      {p.rera}
                    </p>
                  )}
                  <span className="project-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </li>
            ))}
          </Carousel>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why container" aria-labelledby="why-title">
          <div className="heading why-heading">
            <p className="kicker">WHY CHOOSE US</p>
            <h2 id="why-title" className="heading-title">
              We Are Building
              <br />
              Lifestyle Projects
            </h2>
          </div>
          <FeatureSlider items={features} />
        </section>

        {/* AWARDS */}
        <section className="awards container" aria-labelledby="awards-title">
          <div className="heading heading-center">
            <p className="kicker">{awards.kicker}</p>
            <h2 id="awards-title" className="heading-title">
              {awards.title}
            </h2>
          </div>
          <Image className="awards-img" {...awards.image} alt={awards.image.alt} sizes="(max-width: 1199px) 100vw, 1170px" />
        </section>

        {/* LEGACY */}
        <section className="legacy" aria-labelledby="legacy-title">
          <div className="container legacy-inner">
            <div className="legacy-text">
              <p className="kicker">{legacy.kicker}</p>
              <h2 id="legacy-title" className="legacy-title">
                <span className="legacy-years">{legacy.years}</span> {legacy.titleRest}
              </h2>
              <p className="legacy-lead">{legacy.text}</p>
              <dl className="stats">
                {legacy.stats.map((s) => (
                  <div key={s.label} className="stat">
                    <dt>{s.label}</dt>
                    <dd>
                      {s.value}
                      <sup>+</sup>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="legacy-media">
            <Image {...legacy.image} alt={legacy.image.alt} sizes="(max-width: 1199px) 100vw, 50vw" />
            <div className="legacy-badge">
              <strong>{legacy.badge.value}</strong>
              <span>{legacy.badge.label}</span>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonial container" aria-labelledby="testimonial-title">
          <div className="testimonial-box">
            <div className="testimonial-media">
              <Image src={testimonial.image.src} alt={testimonial.image.alt} fill sizes="(max-width: 1199px) 100vw, 585px" />
            </div>
            <div className="testimonial-body">
              <p className="kicker">{testimonial.kicker}</p>
              <h2 id="testimonial-title" className="testimonial-title">
                {testimonial.title}
              </h2>
              <figure className="quote">
                <Quote className="quote-icon" />
                <div>
                  <blockquote>{testimonial.quote}</blockquote>
                  <figcaption>
                    <strong>{testimonial.name}</strong>
                    {testimonial.role.map((r) => (
                      <span key={r}>{r}</span>
                    ))}
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section className="events" aria-labelledby="events-title">
          <div className="container">
            <SectionHeading center title={<span id="events-title">Our Events</span>} />
          </div>
          <Carousel label="Our events" indicator="progress" arrows={false} className="carousel-bleed events-carousel">
            {events.map((e) => (
              <li key={e.month} className="event-card">
                <div className="event-img">
                  <Image src={e.image.src} alt={e.image.alt} fill sizes="(max-width: 767px) 80vw, (max-width: 1199px) 45vw, 355px" />
                </div>
                <h3>{e.month}</h3>
                <p>{e.text}</p>
              </li>
            ))}
          </Carousel>
        </section>

        {/* BLOG */}
        <section className="blog container" aria-labelledby="blog-title">
          <h2 id="blog-title" className="blog-heading">
            From Our Blog
          </h2>
          <div className="blog-grid">
            {posts.map((p) => (
              <article key={p.href} className="post">
                <a href={p.href} className="post-img" tabIndex={-1} aria-hidden="true">
                  <Image {...p.image} alt={p.image.alt} sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 365px" />
                </a>
                <ul className="post-tags" aria-label="Categories">
                  {postCategories.map((c) => (
                    <li key={c.label}>
                      <a href={c.href}>{c.label}</a>
                    </li>
                  ))}
                </ul>
                <h3>
                  <a href={p.href}>{p.title}</a>
                </h3>
                <p className="post-meta">
                  By <a href={blogAuthor.href}>{blogAuthor.name}</a>, <time dateTime={p.iso}>{p.date}</time>
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <PromoPopup {...promo} />
    </>
  );
}
