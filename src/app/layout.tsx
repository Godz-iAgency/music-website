import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "GODZ-i Agency | Software & AI Applications";
const description = "Put what you learn to work. Find your people. Eat well with a plan. Know where your money goes. Explore apps built by GODZ-i Agency.";

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.godz-iagency.com"),
  title,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "GODZ-i Agency",
    locale: "en_US",
    url: "/",
  },
  twitter: { card: "summary_large_image", title, description },
  appleWebApp: {
    capable: true,
    title: "GODZ-i Agency",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
