import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "GODZ-i | Use Our Apps or Have Us Build Yours";
const description = "Turn books into 7-day courses, plan a week of meals, track your cash flow, connect with the music industry. Use our apps or book a video call to build yours.";

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
    siteName: "GODZ-i",
    locale: "en_US",
    url: "/",
  },
  twitter: { card: "summary_large_image", title, description },
  appleWebApp: {
    capable: true,
    title: "GODZ-i",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
