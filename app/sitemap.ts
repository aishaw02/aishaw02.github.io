import type { MetadataRoute } from "next";

const siteUrl = "https://aishaw02.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { path: "/", priority: 1 },
    { path: "/journey/", priority: 0.9 },
    { path: "/projects/", priority: 0.9 },
    { path: "/thoughts/", priority: 0.8 },
    { path: "/life/", priority: 0.8 },
  ].map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
