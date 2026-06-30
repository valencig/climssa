import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

type ProductCardProps = {
  brand: string;
  capacity: string;
  category: string;
  description: string;
  image: string;
  name: string;
  slug: string;
};

export function ProductCard({
  brand,
  capacity,
  category,
  description,
  image,
  name,
  slug,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-blue-950/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/10">
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <Image
          alt={name}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={image}
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 text-xs font-black uppercase text-blue-700">
          <span>{brand}</span>
          <span>{capacity}</span>
        </div>
        <h3 className="mt-4 text-2xl font-black text-blue-950">{name}</h3>
        <p className="mt-1 text-sm font-bold text-slate-500">{category}</p>
        <p className="mt-4 leading-7 text-slate-600">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-blue-800 px-4 py-2 text-sm font-black text-blue-900 transition hover:bg-blue-50"
            href={`/productos/${slug}`}
          >
            Ver detalles
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <WhatsAppButton
            className="px-4 py-2"
            message={`Hola, quiero cotizar el producto: ${name}`}
          >
            Solicitar cotizacion
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}