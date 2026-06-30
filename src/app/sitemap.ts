import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

type SitemapEntry = MetadataRoute.Sitemap[number];

const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/servicios", changeFrequency: "monthly", priority: 0.9 },
  { path: "/productos", changeFrequency: "weekly", priority: 0.9 },
  { path: "/proyectos", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contacto", changeFrequency: "monthly", priority: 0.8 },
  { path: "/cotizacion", changeFrequency: "monthly", priority: 0.9 },
] satisfies Array<{
  path: string;
  changeFrequency: SitemapEntry["changeFrequency"];
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...products.map((product) => ({
      url: absoluteUrl(`/productos/${product.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [absoluteUrl(product.image)],
    })),
  ];
}