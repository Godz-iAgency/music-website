import type { Metadata } from "next";

export const siteUrl = "https://www.godz-iagency.com";
export const callUrl = "https://cal.com/christopher-downer-6pkxir/strategy-session";
export const contactEmail = "Christopher@godz-iagency.com";

// Nested pages do not inherit the root opengraph-image file, so they reference it directly.
const shareImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "GODZ-i. AI-powered apps. Use ours, or we build yours." };

// Every page sets its own canonical and social fields, because nested metadata objects replace the layout's.
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, type: "website", siteName: "GODZ-i", locale: "en_US", url: path, images: [shareImage] },
    twitter: { card: "summary_large_image", title, description, images: [shareImage] },
  };
}

export const organization = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "GODZ-i",
  url: siteUrl,
  logo: `${siteUrl}/godzi_logo_horizontal.png`,
  email: contactEmail,
  founder: { "@type": "Person", name: "Christopher Downer" },
  address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", addressCountry: "US" },
  areaServed: "US",
};

// Escape "<" so structured data can never close the script tag early.
export function jsonLd(data: object) {
  return { __html: JSON.stringify({ "@context": "https://schema.org", ...data }).replace(/</g, "\\u003c") };
}
