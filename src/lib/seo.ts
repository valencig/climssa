import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.climssa.com";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const defaultTitle =
  "Climssa | Aire acondicionado, instalacion y mantenimiento";

export const defaultDescription =
  "Venta, instalacion y mantenimiento de aire acondicionado para casas, negocios y oficinas en Mexico. Solicita tu cotizacion con Climssa.";

export const defaultImage = "/images/minisplit-residencial.png";

type CreateMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function absoluteUrl(path = "/") {
  const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedPath === "/") {
    return `${normalizedSiteUrl}/`;
  }

  return `${normalizedSiteUrl}${normalizedPath}`;
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
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: titleWithBrand,
      description,
      url: absoluteUrl(path),
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