import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createPageMetadata, defaultDescription, defaultTitle, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  ...createPageMetadata({ title: defaultTitle, description: defaultDescription }),
  metadataBase: new URL(siteUrl),
  applicationName: "Climssa",
  authors: [{ name: "Climssa" }],
  creator: "Climssa",
  publisher: "Climssa",
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
