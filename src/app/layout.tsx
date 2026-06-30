import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { defaultDescription, defaultImage, defaultTitle, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Climssa",
  },
  description: defaultDescription,
  applicationName: "Climssa",
  authors: [{ name: "Climssa" }],
  creator: "Climssa",
  publisher: "Climssa",
  keywords: [
    "aire acondicionado",
    "instalacion de minisplits",
    "mantenimiento de aire acondicionado",
    "Climssa",
    "Climas de Sinaloa",
    "aire acondicionado Mexico",
    "aire acondicionado CDMX",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName: "Climssa",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: defaultImage,
        width: 1536,
        height: 1024,
        alt: "Climssa aire acondicionado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="es">
      <body className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
