import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://isaiahball.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Isaiah Ball: Fashion Creator & Model, Nashville TN",
  description:
    "Isaiah Ball is a Nashville based fashion creator, model, and creative partner, available for brand partnerships, modeling, and creative collaborations.",
  openGraph: {
    title: "Isaiah Ball: Fashion Creator & Model, Nashville TN",
    description:
      "Nashville based fashion creator, model, and creative partner.",
    url: siteUrl,
    siteName: "Isaiah Ball",
    images: [
      {
        url: "/images/looks/01-studio/01-hero-wide-establishing.jpg",
        width: 1200,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Isaiah Ball",
  jobTitle: ["Fashion Creator", "Model", "Creative Partner"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nashville",
    addressRegion: "TN",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.instagram.com/_.isaiahball/",
    "https://www.tiktok.com/@_isaiahball",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="bg-ink text-paper flex min-h-full flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
