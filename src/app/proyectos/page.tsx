import { Building2, CalendarCheck, Factory, HomeIcon } from "lucide-react";
import Link from "next/link";
import { MotionReveal } from "@/components/MotionReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Proyectos",
  description:
    "Proyectos de aire acondicionado Climssa para hogares, oficinas, comercios e industria ligera.",
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
          <div>
            <p className="text-sm font-black uppercase text-blue-700">
              Proyectos Climssa
            </p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-blue-950 md:text-6xl">
              Proyectos de climatizacion con seguimiento profesional
            </h1>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-700">
              Acompanamos proyectos para hogares, negocios y oficinas: desde la
              seleccion del equipo hasta la instalacion y mantenimiento.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-blue-800 px-6 py-3 font-black text-white shadow-xl shadow-blue-900/20 transition hover:bg-blue-950"
                href="/cotizacion"
              >
                Cotizar un proyecto
              </Link>
              <WhatsAppButton variant="outline" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projectTypes.map((project) => {
            const Icon = project.icon;
            return (
              <MotionReveal className="h-full" key={project.title}>
                <article className="h-full rounded-3xl border border-blue-950/10 bg-white p-7 shadow-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-800">
                    <Icon aria-hidden="true" className="h-8 w-8" />
                  </div>
                  <h2 className="mt-8 text-2xl font-black text-blue-950">
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}