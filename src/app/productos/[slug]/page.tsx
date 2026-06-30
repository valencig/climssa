import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ClipboardList } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getProductBySlug, products } from "@/lib/products";
import { createPageMetadata, withBasePath } from "@/lib/seo";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Producto no encontrado",
      description:
        "El producto solicitado no esta disponible en el catalogo de Climssa.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createPageMetadata({
    title: product.name,
    description: `${product.description} Solicita cotizacion con Climssa para ${product.name}.`,
    path: `/productos/${product.slug}`,
    image: product.image,
  });
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Hola, quiero cotizar el producto: ${product.name}`;

  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Link className="font-black text-blue-800" href="/productos">
          Volver al catalogo
        </Link>

        <div className="mt-10 grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-blue-950/10 bg-blue-50 shadow-2xl shadow-blue-950/10">
            <Image
              alt={product.name}
              className="object-cover contrast-105 saturate-90"
              fill
              priority
              sizes="(min-width: 768px) 46vw, 100vw"
              src={withBasePath(product.image)}
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase text-blue-700">
              Producto Climssa
            </p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-blue-950 md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              {product.description}
            </p>

            <div className="mt-8 grid gap-4 rounded-3xl border border-blue-950/10 bg-white p-6 text-slate-700 shadow-sm sm:grid-cols-2">
              <p>
                <strong className="block text-sm uppercase text-slate-500">
                  Marca
                </strong>
                <span className="font-black text-blue-950">{product.brand}</span>
              </p>
              <p>
                <strong className="block text-sm uppercase text-slate-500">
                  Capacidad
                </strong>
                <span className="font-black text-blue-950">
                  {product.capacity}
                </span>
              </p>
              <p>
                <strong className="block text-sm uppercase text-slate-500">
                  Categoria
                </strong>
                <span className="font-black text-blue-950">
                  {product.category}
                </span>
              </p>
              <p>
                <strong className="block text-sm uppercase text-slate-500">
                  Tipo
                </strong>
                <span className="font-black text-blue-950">{product.type}</span>
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-blue-800 px-6 py-3 font-black text-white shadow-xl shadow-blue-900/20 transition hover:bg-blue-950"
                href="/cotizacion"
              >
                Solicitar cotizacion
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <WhatsAppButton message={whatsappMessage} variant="outline" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[2rem] border border-blue-950/10 bg-slate-50 p-8 shadow-sm">
            <CheckCircle2 aria-hidden="true" className="h-10 w-10 text-blue-800" />
            <h2 className="mt-6 text-3xl font-black text-blue-950">
              Caracteristicas
            </h2>
            <ul className="mt-6 grid gap-4 text-slate-700">
              {product.features.map((feature) => (
                <li className="flex gap-3 font-bold" key={feature}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-800"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-blue-950/10 bg-blue-950 p-8 text-white shadow-2xl shadow-blue-950/15">
            <ClipboardList aria-hidden="true" className="h-10 w-10 text-blue-200" />
            <h2 className="mt-6 text-3xl font-black">Uso recomendado</h2>
            <p className="mt-5 leading-8 text-blue-100">
              {product.recommendedUse}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-white px-6 py-3 font-black text-blue-950 transition hover:bg-blue-50"
                href="/cotizacion"
              >
                Solicitar cotizacion
              </Link>
              <WhatsAppButton
                className="bg-emerald-500 text-white hover:bg-emerald-600"
                message={whatsappMessage}
              />
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#eef6ff_0%,#ffffff_100%)] p-8 shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-black uppercase text-blue-700">
                Asesoria tecnica
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-blue-950 md:text-4xl">
                Te ayudamos a confirmar si este equipo es adecuado para tu espacio.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Comparte medidas aproximadas, ciudad, tipo de uso y si necesitas
                instalacion. Climssa te orienta con una cotizacion clara.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                className="rounded-full bg-blue-800 px-6 py-3 font-black text-white shadow-xl shadow-blue-900/20 transition hover:bg-blue-950"
                href="/productos"
              >
                Ver mas productos
              </Link>
              <WhatsAppButton message={whatsappMessage} variant="outline" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}