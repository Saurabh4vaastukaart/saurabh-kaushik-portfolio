import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { UniverseBackground } from "@/components/universe-background";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const siteUrl = "https://saurabh-kaushik-portfolio-two.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saurabh Kaushik | Product Manager",
    template: "%s | Saurabh Kaushik",
  },
  description:
    "Portfolio of Saurabh Kaushik, a Product Manager building AI, SaaS, healthcare, EdTech and growth products from discovery to measurable impact.",
  keywords: [
    "Saurabh Kaushik",
    "Product Manager",
    "AI Product Manager",
    "SaaS Product Manager",
    "Product Portfolio",
    "Gurugram",
  ],
  authors: [{ name: "Saurabh Kaushik" }],
  creator: "Saurabh Kaushik",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Saurabh Kaushik | Product Manager",
    description:
      "AI, SaaS and growth product work told through problems, decisions and measurable outcomes.",
    siteName: "Saurabh Kaushik Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Kaushik | Product Manager",
    description:
      "AI, SaaS and growth product work told through problems, decisions and measurable outcomes.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060914",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saurabh Kaushik",
  jobTitle: "Product Manager",
  email: "mailto:saurabhkaushick@gmail.com",
  telephone: "+91 99921 82382",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/in/saurabhkaushick"],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <UniverseBackground />
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
