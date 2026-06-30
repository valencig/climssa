import { ArrowRight, ShieldCheck, Snowflake, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

const heroStats = [
  { label: "Desde 1988", icon: ShieldCheck },
  { label: "Instalacion", icon: Wrench },
  { label: "Equipos eficientes", icon: Snowflake },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(14,165,233,0.20),transparent_28%),linear-gradient(135deg,#ffffff_0%,#eef6ff_52%,#dcecff_100%)]">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[0.94fr_1.06fr]">
        <div className="relative z-10">
          <p className="text-sm font-black uppercase text-blue-700">
            Aire acondicionado desde 1988
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,6vw,5.8rem)] font-black leading-[0.95] text-blue-950">
            Soluciones en aire acondicionado para empresas y hogares
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">
            Venta, instalacion, mantenimiento y refacciones con asesoria clara,
            marcas confiables y soporte tecnico para proyectos en Mexico.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-blue-800 px-6 py-3 font-black text-white shadow-xl shadow-blue-900/20 transition hover:bg-blue-950"
              href="/productos"
            >
              Ver productos
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <WhatsAppButton variant="outline">Enviar WhatsApp</WhatsAppButton>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  className="flex items-center gap-3 rounded-2xl border border-white bg-white/72 p-4 shadow-sm backdrop-blur"
                  key={item.label}
                >
                  <Icon aria-hidden="true" className="h-5 w-5 text-blue-800" />
                  <span className="text-sm font-black text-slate-800">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 min-h-[520px]">
          <div className="absolute right-0 top-0 h-80 w-[92%] overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-blue-950/20">
            <Image
              alt="Minisplit de aire acondicionado instalado en interior"
              className="h-full w-full object-cover object-center contrast-105 saturate-90"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 92vw"
              src="/images/minisplit-residencial.png"
            />
          </div>
          <div className="absolute bottom-12 left-0 h-72 w-[74%] overflow-hidden rounded-[2rem] border-8 border-white bg-slate-200 shadow-2xl shadow-blue-950/20">
            <Image
              alt="Unidad condensadora de aire acondicionado instalada"
              className="h-full w-full object-cover contrast-110 saturate-90"
              fill
              sizes="(min-width: 1024px) 40vw, 74vw"
              src="/images/paquete-comercial.png"
            />
          </div>
          <div className="absolute bottom-0 right-6 rounded-[2rem] bg-blue-900 p-7 text-white shadow-2xl shadow-blue-950/25">
            <p className="text-4xl font-black">35+</p>
            <p className="mt-1 max-w-36 text-sm font-semibold leading-5 text-blue-100">
              anos de experiencia en climatizacion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}