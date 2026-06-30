import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  HomeIcon,
  RotateCw,
  ShieldCheck,
  Snowflake,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { createPageMetadata, withBasePath } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Servicios",
  description:
    "Servicios de venta, instalacion y mantenimiento de aire acondicionado para casas, negocios y oficinas.",
  path: "/servicios",
  image: "/images/minisplit-oficina.png",
});

const services = [
  {
    title: "Venta de aire acondicionado",
    description:
      "Equipos minisplit, cassette, piso-techo, paquete y sistemas comerciales con asesoria para elegir capacidad, tecnologia y marca.",
    icon: Snowflake,
    benefits: [
      "Recomendacion por metros cuadrados y uso del espacio",
      "Opciones inverter para eficiencia energetica",
      "Cotizacion clara para compra e instalacion",
    ],
    idealFor: "Hogares, oficinas, locales comerciales y proyectos empresariales.",
  },
  {
    title: "Instalacion de minisplits",
    description:
      "Instalacion profesional para equipos nuevos, cuidando ubicacion, drenaje, conexion electrica, rendimiento y vida util del sistema.",
    icon: Wrench,
    benefits: [
      "Tecnicos capacitados para montaje limpio",
      "Revision de puntos de instalacion y seguridad",
      "Arranque del equipo y recomendaciones de uso",
    ],
    idealFor: "Recamaras, salas, oficinas privadas, consultorios y comercios pequenos.",
  },
  {
    title: "Mantenimiento preventivo",
    description:
      "Servicio periodico para conservar eficiencia, mejorar flujo de aire, reducir consumo electrico y prevenir fallas costosas.",
    icon: RotateCw,
    benefits: [
      "Limpieza de filtros, evaporador y condensadora",
      "Revision de funcionamiento general",
      "Mejor rendimiento y mayor vida util",
    ],
    idealFor: "Equipos que operan con frecuencia en temporada de calor o espacios de trabajo.",
  },
  {
    title: "Mantenimiento correctivo",
    description:
      "Diagnostico y reparacion cuando el sistema no enfria, gotea, hace ruido, presenta fallas electricas o requiere refacciones.",
    icon: Wrench,
    benefits: [
      "Diagnostico tecnico del problema",
      "Revision de componentes y posibles refacciones",
      "Soporte puntual para recuperar operacion",
    ],
    idealFor: "Equipos con bajo enfriamiento, ruido, fuga, apagados o errores intermitentes.",
  },
  {
    title: "Soluciones para casas, negocios y oficinas",
    description:
      "Proyectos de climatizacion para distintos espacios, desde habitaciones hasta oficinas, locales y areas comerciales completas.",
    icon: Building2,
    benefits: [
      "Analisis de uso, capacidad y distribucion del aire",
      "Seleccion de equipos segun presupuesto y operacion",
      "Seguimiento para instalacion y mantenimiento",
    ],
    idealFor: "Casas, departamentos, tiendas, oficinas, restaurantes y espacios de atencion.",
  },
];

const processSteps = [
  {
    title: "Diagnostico del espacio",
    description: "Revisamos medidas, uso, exposicion solar y necesidades de confort.",
  },
  {
    title: "Seleccion de equipo",
    description: "Recomendamos capacidad, tipo de sistema y opciones de instalacion.",
  },
  {
    title: "Instalacion o servicio",
    description: "Coordinamos el trabajo tecnico con claridad sobre alcance y tiempos.",
  },
  {
    title: "Seguimiento",
    description: "Te orientamos sobre uso, mantenimiento y refacciones cuando aplique.",
  },
];

export default function ServicesPage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase text-blue-700">
              Servicios Climssa
            </p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-blue-950 md:text-6xl">
              Aire acondicionado para cada etapa del proyecto
            </h1>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-700">
              Te ayudamos a seleccionar, instalar y mantener sistemas de aire
              acondicionado para hogares, negocios y oficinas en Mexico.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-blue-800 px-6 py-3 font-black text-white shadow-xl shadow-blue-900/20 transition hover:bg-blue-950"
                href="/cotizacion"
              >
                Solicitar cotizacion
              </Link>
              <WhatsAppButton variant="outline" />
            </div>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-blue-950/12">
            <Image
              alt="Tecnico instalando y revisando servicio de aire acondicionado"
              className="object-cover"
              fill
              priority
              sizes="(min-width: 768px) 48vw, 100vw"
              src={withBasePath("/images/minisplit-oficina.png")}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-flow-dense gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              className="group rounded-3xl border border-blue-950/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/10"
              key={service.title}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-800 transition group-hover:bg-blue-800 group-hover:text-white">
                <service.icon aria-hidden="true" className="h-7 w-7" />
              </div>
              <h2 className="mt-8 text-3xl font-black leading-tight text-blue-950">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-7 rounded-3xl bg-slate-50 p-5">
                <p className="font-black text-blue-950">Beneficios</p>
                <ul className="mt-4 grid gap-3 text-sm font-bold text-slate-600">
                  {service.benefits.map((benefit) => (
                    <li className="flex gap-3" key={benefit}>
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-blue-800"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm font-bold leading-6 text-slate-600">
                <span className="text-blue-950">Ideal para:</span>{" "}
                {service.idealFor}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center gap-2 rounded-full bg-blue-800 px-5 py-3 text-sm font-black text-white shadow-xl shadow-blue-900/20 transition hover:bg-blue-950"
                  href="/cotizacion"
                >
                  Solicitar cotizacion
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
                <WhatsAppButton
                  className="px-5 py-3"
                  message={`Hola, quiero solicitar una cotizacion para: ${service.title}`}
                  variant="outline"
                >
                  WhatsApp
                </WhatsAppButton>
              </div>
            </article>
          ))}
          <div className="rounded-3xl bg-blue-950 p-8 text-white md:col-span-2">
            <HomeIcon aria-hidden="true" className="h-10 w-10 text-blue-200" />
            <h2 className="mt-8 max-w-2xl text-3xl font-black leading-tight">
              Servicio para casas, locales, oficinas y proyectos empresariales.
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-blue-100">
              La recomendacion correcta depende de uso, metros cuadrados,
              exposicion solar, cantidad de personas y presupuesto operativo.
              Climssa te ayuda a decidir con datos claros.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-blue-700">
                Como trabajamos
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight text-blue-950 md:text-5xl">
                Un proceso claro desde la primera llamada hasta el seguimiento.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Para vender, instalar o mantener un equipo, primero entendemos el
              espacio. Asi evitamos recomendar una capacidad insuficiente,
              equipos sobredimensionados o mantenimientos incompletos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                className="rounded-3xl border border-blue-950/10 bg-slate-50 p-7 shadow-sm"
                key={step.title}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-800 text-sm font-black text-white">
                  {index + 1}
                </div>
                <ClipboardCheck
                  aria-hidden="true"
                  className="mt-8 h-8 w-8 text-blue-800"
                />
                <h3 className="mt-5 text-xl font-black text-blue-950">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#071f49_0%,#0b3f91_100%)] p-8 text-white shadow-2xl shadow-blue-950/20 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <ShieldCheck aria-hidden="true" className="h-10 w-10 text-blue-200" />
              <h2 className="mt-6 max-w-2xl text-4xl font-black leading-tight md:text-5xl">
                Agenda asesoria para venta, instalacion o mantenimiento.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-blue-100">
                Comparte ciudad, tipo de espacio, medida aproximada y el servicio
                que necesitas. Climssa te orienta con una cotizacion clara.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-black text-blue-950 transition hover:bg-blue-50"
                href="/cotizacion"
              >
                Solicitar cotizacion
              </Link>
              <WhatsAppButton className="bg-emerald-500 text-white hover:bg-emerald-600" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}