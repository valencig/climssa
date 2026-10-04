import type { MetadataRoute } from "next";
import { absoluteUrl, allowIndexing, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(allowIndexing ? { sitemap: absoluteUrl("/sitemap.xml") } : {}),
    host: siteUrl,
  };
}