import type { Metadata, Viewport } from "next";
import { LinkInBio } from "@/components/links/link-in-bio";

const title = "Isaiah Ball | Links";
const description =
  "Follow Isaiah Ball on Instagram and TikTok, or get in touch about a brand partnership, modeling booking, or creative project.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/links" },
  openGraph: {
    title,
    description,
    url: "/links",
    siteName: "Isaiah Ball",
    images: [
      {
        url: "/images/looks/01-studio/01-hero-wide-establishing.jpg",
        width: 1200,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};

// Match the browser chrome (Safari, in-app browsers) to the page.
export const viewport: Viewport = {
  themeColor: "#1c1815",
};

export default function LinksPage() {
  return <LinkInBio />;
}
