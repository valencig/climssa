import { Building2, CalendarCheck, Factory, HomeIcon } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MotionReveal } from "@/components/MotionReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { createPageMetadata } from "@/lib/seo";
import { coverageDescription, officePath, professionalPath, quoteMessages } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Aire acondicionado para proyectos y constructoras",
  description:
    "Suministro e instalacion de aire acondicionado para arquitectos y constructoras en CDMX y zona metropolitana. Proyectos grandes en otras regiones sujetos a evaluacion.",
  path: "/proyectos",
  image: "/images/vrf-vrv-comercial.png",
});

const projectTypes = [
  {
    title: "Instalaciones residenciales",
    description: "Equipos para recamaras, salas, departamentos y casas.",
    icon: HomeIcon,
  },
  {
    title: "Climatizacion para oficinas",
    description: "Ambientes comodos para equipos de trabajo y salas de junta.",
    icon: Building2,
  },
  {
    title: "Soluciones para comercios",
    description: "Sistemas para locales, mostradores, bodegas y areas abiertas.",
    icon: Factory,
  },
  {
    title: "Mantenimiento programado",
    description: "Rutinas preventivas para continuidad, limpieza y eficiencia.",
    icon: CalendarCheck,
  },
];

export default function ProjectsPage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="md:col-span-2">
            <Breadcrumbs items={[
              { label: "Inicio", href: "/" },
              { label: "Proyectos", href: "/proyectos" },
            ]} />
          </div>
          <div>
            <p className="text-sm font-black uppercase text-blue-700">
              Proyectos Climssa
            </p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-blue-950 md:text-6xl">
              Suministro e instalacion para arquitectos y constructoras
            </h1>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-700">
              Integra aire acondicionado a tu obra en CDMX y zona metropolitana.
              En Climssa atendemos a despachos de arquitectura, constructoras y
              responsables de obra que requieren equipos e instalacion para
              casas, edificios, oficinas o comercios.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton message={quoteMessages.project}>
                Cotizar mi proyecto de instalacion
              </WhatsAppButton>
              <Link className="rounded-full border border-blue-800 px-6 py-3 font-black text-blue-900" href={professionalPath}>
                Necesito solo equipos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <h2 className="mb-8 text-3xl font-black text-blue-950">Tipos de trabajo que puedes consultar</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projectTypes.map((project) => {
            const Icon = project.icon;
            return (
              <MotionReveal className="h-full" key={project.title}>
                <article className="h-full rounded-3xl border border-blue-950/10 bg-white p-7 shadow-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-800">
                    <Icon aria-hidden="true" className="h-8 w-8" />
                  </div>
                  <h3 className="mt-8 text-2xl font-black text-blue-950">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 md:grid-cols-2">
        <article className="rounded-3xl border border-blue-950/10 bg-white p-8">
          <h2 className="text-3xl font-black text-blue-950">Datos para cotizar la obra</h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 leading-7 text-slate-600">
            <li>Ubicacion, tipo de inmueble y contacto responsable.</li>
            <li>Etapa del proyecto: planeacion, obra nueva o adecuacion.</li>
            <li>Equipos, capacidades, voltaje y cantidades, si ya estan definidos.</li>
            <li>Fecha objetivo, horarios de acceso y restricciones de obra.</li>
            <li>Si necesitas suministro, instalacion o ambos.</li>
          </ul>
          <p className="mt-6 leading-7 text-slate-600">
            La propuesta debe precisar equipos, materiales, trabajos incluidos y
            exclusiones. Las condiciones de visita, entrega y garantia se revisan
            antes de contratar; no todas las obras requieren el mismo alcance.
          </p>
        </article>
        <article className="rounded-3xl bg-blue-950 p-8 text-white">
          <h2 className="text-3xl font-black">CDMX como zona principal</h2>
          <p className="mt-5 leading-8 text-blue-100">{coverageDescription}</p>
          <p className="mt-4 leading-8 text-blue-100">
            Si tu necesidad incluye calculos, planos u otros entregables
            especializados, indicalo para revisar su viabilidad y alcance antes
            de cotizar.
          </p>
          <Link className="mt-6 inline-block font-black underline" href={officePath}>
            Renovacion de aire acondicionado para oficinas y comercios
          </Link>
        </article>
      </section>
    </main>
  );
}