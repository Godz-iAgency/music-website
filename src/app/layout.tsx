import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "GODZ-i | AI Systems for the Music Industry",
  description:
    "AI automation systems built exclusively for the music industry. Booking pipelines, submission scoring, fan capture, and operations automation for venues, talent buyers, bands, record labels, and festivals in Austin, Texas.",
  robots: "index, follow",
  openGraph: {
    title: "GODZ-i | AI Systems for the Music Industry",
    description:
      "We build AI systems for music industry operators. Venues, talent buyers, bands, record labels, and festivals.",
    type: "website",
    url: "https://www.godz-iagency.com",
  },
  twitter: {
    title: "GODZ-i | AI Systems for the Music Industry",
    description:
      "AI automation systems built exclusively for the music industry. Austin, Texas.",
  },
  appleWebApp: {
    capable: true,
    title: "GODZ-i",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
