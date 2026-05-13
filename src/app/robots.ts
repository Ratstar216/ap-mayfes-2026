import type { MetadataRoute } from "next";

const siteUrl = "https://ap-mayfest.com";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/2026/",
    },
    sitemap: `${siteUrl}/2026/sitemap.xml`,
    host: siteUrl,
  };
}
