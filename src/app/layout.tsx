import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
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
    title: "GODZ-i | AI-Powered Apps and Custom App Development",
    description: "AI-powered apps you can use today: Bookworm AI, SplitMic, Six Plants, Cash Flow Tracker. Need one built? We build custom AI apps.",
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
        {/* Vercel Web Analytics: visitors, pages and referrers. Enable it in the Vercel project's Analytics tab. */}
        <Analytics />
      </body>
    </html>
  );
}
