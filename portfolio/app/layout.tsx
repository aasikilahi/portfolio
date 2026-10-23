import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile, seo } from "@/content/site";
import { resumePdfHref } from "@/lib/resume-file";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-plex-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: seo.title,
    template: "%s · Mohamed Aasikilahi M",
  },
  description: seo.description,
  authors: [{ name: profile.name }],
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const pdfHref = resumePdfHref();
  const sameAs = [profile.linkedinUrl, profile.githubUrl].filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    homeLocation: {
      "@type": "Place",
      name: profile.currentLocation,
    },
    sameAs,
    description: seo.description,
  };

  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="min-h-screen antialiased">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteHeader pdfHref={pdfHref} />
        <main id="content">{children}</main>
        <SiteFooter pdfHref={pdfHref} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
