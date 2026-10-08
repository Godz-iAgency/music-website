import type { Metadata, Viewport } from "next";
import { jsonLd, organization, pageMetadata, siteUrl } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({
    title: "GODZ-i | Production-Ready Apps and Custom App Development",
    description: "Production-ready apps you can use today, and custom apps built for your business. Bookworm AI, SplitMic, Six Plants and Cash Flow Tracker. Austin, Texas.",
    path: "/",
  }),
  robots: { index: true, follow: true },
  appleWebApp: {
    capable: true,
    title: "GODZ-i",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organization)} />
        {children}
      </body>
    </html>
  );
}
