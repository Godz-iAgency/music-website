import type { MetadataRoute } from "next";
import { appPages } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/build`, changeFrequency: "monthly", priority: 0.9 },
    ...appPages.map((page) => ({ url: `${siteUrl}/apps/${page.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
