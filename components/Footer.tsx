import Image from "next/image";
import Link from "next/link";
import { footer, site } from "@/lib/content";
import BackToTop from "./BackToTop";
import { ArrowRight, Building, CircleDot, Mail, Phone, socialIcon, WhatsApp } from "./icons";

function LinkList({ items }: { items: readonly { label: string; href?: string }[] }) {
  return (
    <ul className="footer-links">
      {items.map((l) => (
        <li key={l.label}>
          {l.href ? (
            <a href={l.href}>
              <CircleDot /> {l.label}
            </a>
          ) : (
            <span>
              <CircleDot /> {l.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/** `flush`: no top margin, for pages whose last section runs straight into the footer. */
export default function Footer({ flush = false }: { flush?: boolean }) {
  return (
    <>
      <footer className={`site-footer${flush ? " site-footer--flush" : ""}`}>
        {/* No ids here: Next keeps recently visited pages mounted (hidden), so fixed ids would repeat. */}
        <section className="newsletter" aria-label="Newsletter signup">
          <Image className="newsletter-bg" src={footer.newsletterBg.src} alt="" fill sizes="100vw" quality={60} />
          <div className="container newsletter-inner">
            <div>
              <h2 className="footer-title newsletter-title">
                Newsletter Signup
              </h2>
              <p>Stay ahead with all the news we want to share with our exclusive community.</p>
            </div>
            {/* Posts to the existing WordPress newsletter page; no client JS required. */}
            <form className="newsletter-form" action={`${site.url}/newsletter`} method="get">
              <input type="email" name="email" placeholder="Email" aria-label="Email" required autoComplete="email" />
              <button type="submit" className="btn btn-gold">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src={site.logo.src} width={site.logo.width} height={site.logo.height} alt={site.logo.alt} sizes="210px" />
            <p className="footer-tagline">{footer.tagline}</p>
            <p className="footer-seo">
              {footer.seoText.map((part) =>
                typeof part === "string" ? (
                  part
                ) : (
                  <a key={part.href} href={part.href}>
                    {part.label}
                  </a>
                ),
              )}
            </p>
          </div>
          <div>
            <h2 className="footer-title">Company info</h2>
            <LinkList items={footer.company} />
          </div>
          <div>
            <h2 className="footer-title">Useful Links</h2>
            <LinkList items={footer.useful} />
          </div>
          <div className="footer-contact">
            <h2 className="footer-title">GET IN TOUCH</h2>
            <address>
              <p>
                <Building />
                <span>{site.address}</span>
              </p>
              <p>
                <Phone width={16} height={16} />
                <a href={site.phoneHref}>{site.phone}</a>
              </p>
              <p>
                <Mail width={16} height={16} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </address>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © 2026 – <Link href="/">Aakash India</Link>. All rights reserved.
          </p>
          <ul className="footer-social">
            {site.social.map((s) => {
              const Icon = socialIcon[s.icon];
              return (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <Icon width={14} height={14} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>

      <a className="enquire-tab" href={site.enquireHref}>
        <ArrowRight /> Enquire Now
      </a>
      {/* Phones/tablets: a bottom bar instead of the side tab, so nothing covers content. */}
      <nav className="action-bar" aria-label="Quick actions">
        <a href={site.enquireHref}>
          <ArrowRight /> Enquire Now
        </a>
        <a href={site.phoneHref}>
          <Phone width={16} height={16} /> Call Now
        </a>
      </nav>
      <a className="whatsapp-btn" href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Aakash India on WhatsApp">
        <WhatsApp />
      </a>
      <BackToTop />
    </>
  );
}
