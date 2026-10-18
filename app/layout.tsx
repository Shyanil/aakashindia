import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, DM_Serif_Display, Playfair_Display } from "next/font/google";
import SkipLink from "@/components/SkipLink";
import "./globals.css";

// next/font downloads these at build time and serves them from this origin,
// so there is no render-blocking request to Google Fonts at runtime.
const body = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-body", display: "swap" });
const serif = Playfair_Display({ subsets: ["latin"], weight: ["400"], variable: "--font-serif", display: "swap" });
const accent = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], variable: "--font-accent", display: "swap", preload: false });

const title = "Top Builders & Real Estate Developers in Jamshedpur, Jharkhand | Aakash India";
const description =
  "Aakash India, the best real estate brand of Jamshedpur, Jharkhand, offers luxurious accommodations complemented with high-end amenities. Get the best from the best builders and developers in Jamshedpur.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aakashindia.in"),
  title,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Aakash India",
    title,
    description,
    images: [{ url: "/images/aakash-india/2023-12-aakash-courtyard-scaled.webp", width: 2400, height: 1192 }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#173e62",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Aakash India",
  url: "https://aakashindia.in/",
  logo: "https://aakashindia.in/images/aakash-india/2023-12-aakash_india_new_logo_white_page-0001-removebg-preview.webp",
  telephone: "+91-7969059999",
  email: "info@aakashindia.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Payal Cinema Complex, Mango",
    addressLocality: "Jamshedpur",
    addressRegion: "Jharkhand",
    postalCode: "831012",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/AakashIndiaprojects/",
    "https://www.instagram.com/aakashindiap/",
    "https://www.youtube.com/@aakashindiagroup",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${body.variable} ${serif.variable} ${accent.variable}`}>
      <body>
        <SkipLink />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
