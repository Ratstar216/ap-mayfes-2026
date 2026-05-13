import type { MetadataRoute } from "next";

const siteUrl = "https://ap-mayfest.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/2026/`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
