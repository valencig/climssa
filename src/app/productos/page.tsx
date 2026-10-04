import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { products } from "@/lib/products";
import { createPageMetadata } from "@/lib/seo";
import { professionalPath, quoteMessages } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Equipos y refacciones de aire acondicionado en CDMX",
  description:
    "Consulta tipos de minisplits, cassette, piso-techo, paquete y refacciones en Climssa, CDMX. Confirma modelo, voltaje y disponibilidad al cotizar.",
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
              Equipos y refacciones para instalaciones en CDMX
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Referencias de minisplits inverter, cassette, equipos tipo paquete,
              piso-techo, ductos y refacciones. Consulta equipos para reventa,
              instalaciones residenciales o proyectos comerciales. La marca,
              modelo, voltaje y disponibilidad se confirman al cotizar.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Este catalogo contiene ejemplos orientativos e imagenes ilustrativas,
              no un inventario de modelos disponibles ni una tienda en linea.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              className="rounded-full bg-blue-800 px-6 py-3 font-black text-white shadow-xl shadow-blue-900/20 transition hover:bg-blue-950"
              href={professionalPath}
            >
              Compra para profesionales
            </Link>
            <WhatsAppButton message={quoteMessages.equipment} variant="outline">
              Cotizar equipos por WhatsApp
            </WhatsAppButton>
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