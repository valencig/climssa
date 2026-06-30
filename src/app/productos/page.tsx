import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { products } from "@/lib/products";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Productos",
  description:
    "Catalogo de minisplits, cassettes, equipos tipo paquete y soluciones de aire acondicionado Climssa.",
  path: "/productos",
  image: "/images/cassette-comercial.png",
});

export default function ProductsPage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-blue-700">
              Catalogo Climssa
            </p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-blue-950 md:text-6xl">
              Equipos de aire acondicionado para hogares y empresas
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Catalogo inicial para cotizar minisplits inverter, cassette,
              equipos tipo paquete, piso-techo, ductos y refacciones. Por ahora
              no vendemos en linea, pero puedes solicitar asesoria y cotizacion.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              className="rounded-full bg-blue-800 px-6 py-3 font-black text-white shadow-xl shadow-blue-900/20 transition hover:bg-blue-950"
              href="/cotizacion"
            >
              Solicitar cotizacion
            </Link>
            <WhatsAppButton variant="outline" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}