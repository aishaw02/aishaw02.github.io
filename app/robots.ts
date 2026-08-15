import type { MetadataRoute } from "next";

const siteUrl = "https://aishaw02.github.io";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/mobile-preview/", "/projects/easter-egg/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
