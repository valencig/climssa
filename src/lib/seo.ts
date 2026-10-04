import type { Metadata } from "next";

export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.climssa.com").replace(/\/+$/, "");

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const indexingSetting = process.env.NEXT_PUBLIC_ALLOW_INDEXING ?? "true";

if (indexingSetting !== "true" && indexingSetting !== "false") {
  throw new Error("NEXT_PUBLIC_ALLOW_INDEXING must be true or false.");
}

export const allowIndexing = indexingSetting === "true";

export const defaultTitle =
  "Aire acondicionado en CDMX: venta e instalacion | Climssa";

export const defaultDescription =
  "Equipos para instaladores y revendedores, y proyectos de instalacion para arquitectos y constructoras en CDMX y zona metropolitana. Cotiza con Climssa.";

export const defaultImage = "/images/minisplit-residencial.png";

type CreateMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteUrl}${normalizedPath}`;
}

export function pageUrl(path = "/") {
  return absoluteUrl(`${path.replace(/\/+$/, "")}/`);
}

export function withBasePath(path: string) {
  if (!basePath || path.startsWith("http")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedPath === basePath || normalizedPath.startsWith(`${basePath}/`)) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
}

export function createPageMetadata({
  title,
  description,
  image = defaultImage,
  path = "/",
}: CreateMetadataOptions): Metadata {
  const titleWithBrand = title.includes("Climssa") ? title : `${title} | Climssa`;

  return {
    title: { absolute: titleWithBrand },
    description,
    robots: { index: allowIndexing, follow: true },
    alternates: {
      canonical: pageUrl(path),
    },
    openGraph: {
      title: titleWithBrand,
      description,
      url: pageUrl(path),
      siteName: "Climssa",
      locale: "es_MX",
      type: "website",
      images: [
        {
          url: absoluteUrl(image),
          width: 1536,
          height: 1024,
          alt: titleWithBrand,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleWithBrand,
      description,
      images: [absoluteUrl(image)],
    },
  };
}