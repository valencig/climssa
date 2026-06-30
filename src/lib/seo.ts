import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.climssa.com";

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
  return new URL(path, siteUrl).toString();
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
      url: path,
      siteName: "Climssa",
      locale: "es_MX",
      type: "website",
      images: [
        {
          url: image,
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
      images: [image],
    },
  };
}