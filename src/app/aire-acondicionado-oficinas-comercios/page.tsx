import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { createPageMetadata } from "@/lib/seo";
import { coverageDescription, officePath, quoteMessages } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Aire acondicionado para oficinas y comercios en CDMX",
  description:
    "Suministro, instalacion y renovacion de aire acondicionado para oficinas, locales y pequenos edificios en CDMX y zona metropolitana. Consulta tu proyecto.",
  path: officePath,
  image: "/images/minisplit-oficina.png",
});

const requirements = [
  ["Uso del inmueble", "Indica si se trata de oficinas, un local o areas comunes, su ocupacion y horarios de operacion."],
  ["Equipos existentes", "Comparte marca, modelo y cantidad de unidades a sustituir o ampliar. La capacidad no se elige solo por metros cuadrados."],
  ["Acceso y coordinacion", "Explica las restricciones del inmueble, horarios de acceso y autorizaciones de administracion para revisar el alcance."],
  ["Alcance de la solicitud", "Distingue compra de equipos, retiro de unidades, instalacion nueva o mantenimiento. Las condiciones se confirman en la propuesta."],
];

export default function OfficesPage() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Breadcrumbs items={[
            { label: "Inicio", href: "/" },
            { label: "Oficinas y comercios", href: officePath },
          ]} />
          <p className="text-sm font-black uppercase text-blue-700">Para administradores de inmuebles</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-blue-950 md:text-6xl">
            Aire acondicionado para oficinas y locales comerciales en CDMX
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Consulta el suministro, instalacion o renovacion de equipos con Climssa.
            Atendemos a responsables de oficinas, comercios y pequenos edificios
            que necesitan coordinar trabajos en un inmueble en operacion.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton message={quoteMessages.office}>
              Cotizar para mi oficina o local
            </WhatsAppButton>
            <Link className="rounded-full border border-blue-800 px-6 py-3 font-black text-blue-900" href="/servicios">
              Consultar instalacion y mantenimiento
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-black text-blue-950">Antes de renovar o instalar</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {requirements.map(([title, text]) => (
            <article className="rounded-3xl border border-blue-950/10 bg-white p-7 shadow-sm" key={title}>
              <h3 className="text-xl font-black text-blue-950">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-blue-950 p-8 text-white">
          <h2 className="text-3xl font-black">Una propuesta segun tu inmueble</h2>
          <p className="mt-5 max-w-3xl leading-8 text-blue-100">
            Para elegir entre minisplit, cassette, piso-techo u otras opciones,
            necesitamos conocer el uso del espacio y las condiciones de instalacion.
            Consulta si hace falta una visita y sus condiciones antes de agendar.
            No se presupone trabajo sin interrupciones ni atencion de emergencia.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-blue-100">{coverageDescription}</p>
          <Link className="mt-6 inline-block font-black text-white underline" href="/proyectos">
            Para una obra nueva: proyectos con arquitectos y constructoras
          </Link>
        </div>
      </section>
    </main>
  );
}
