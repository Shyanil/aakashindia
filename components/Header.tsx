import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/content";
import { ChevronDown, Phone } from "./icons";
import MobileNav from "./MobileNav";

/** `current` is the nav href of the page being shown (marks it with aria-current). */
export default function Header({ current = "/" }: { current?: string }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="header-logo" aria-label="Aakash India home">
          <Image
            src={site.logo.src}
            width={site.logo.width}
            height={site.logo.height}
            alt={site.logo.alt}
            sizes="220px"
            preload
          />
        </Link>

        <nav className="main-nav" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.label} className={item.children ? "has-sub" : undefined}>
                <Link href={item.href} aria-current={item.href === current ? "page" : undefined}>
                  {item.label}
                  {item.children && <ChevronDown />}
                </Link>
                {item.children && (
                  <ul className="sub-menu">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link href={c.href}>{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Link className="header-phone" href={site.phoneHref} aria-label={`Call ${site.phone}`}>
          <span className="header-phone-icon">
            <Phone />
          </span>
          <span className="header-phone-number">{site.phone}</span>
        </Link>

        <MobileNav items={nav} current={current} phone={site.phone} phoneHref={site.phoneHref} />
      </div>
    </header>
  );
}
