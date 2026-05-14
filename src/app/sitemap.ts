import type { MetadataRoute } from "next";

const siteUrl = "https://ap-mayfest.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-14");

  return ["", "ja/", "en/"].map((path) => ({
    url: `${siteUrl}/2026/${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.9,
  }));
}
