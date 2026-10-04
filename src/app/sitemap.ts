import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { absoluteUrl, allowIndexing, pageUrl } from "@/lib/seo";
import { officePath, professionalPath } from "@/lib/site";

export const dynamic = "force-static";

type SitemapEntry = MetadataRoute.Sitemap[number];

const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/servicios", changeFrequency: "monthly", priority: 0.9 },
  { path: "/productos", changeFrequency: "weekly", priority: 0.9 },
  { path: "/proyectos", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contacto", changeFrequency: "monthly", priority: 0.8 },
  { path: "/cotizacion", changeFrequency: "monthly", priority: 0.9 },
  { path: professionalPath, changeFrequency: "monthly", priority: 0.9 },
  { path: officePath, changeFrequency: "monthly", priority: 0.7 },
] satisfies Array<{
  path: string;
  changeFrequency: SitemapEntry["changeFrequency"];
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!allowIndexing) return [];

  return [
    ...staticRoutes.map((route) => ({
      url: pageUrl(route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...products.map((product) => ({
      url: pageUrl(`/productos/${product.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [absoluteUrl(product.image)],
    })),
  ];
}