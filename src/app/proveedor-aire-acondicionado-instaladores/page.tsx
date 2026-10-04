import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { createPageMetadata } from "@/lib/seo";
import { coverageDescription, professionalPath, quoteMessages } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Proveedor de aire acondicionado en CDMX",
  description:
    "Equipos de aire acondicionado para instaladores, revendedores y negocios de mantenimiento en CDMX. Cotiza modelos, cantidades y condiciones con Climssa.",
  path: professionalPath,
});

const buyerNeeds = [
  {
    title: "Equipos para tus instalaciones",
    text: "Si realizas la instalacion, puedes consultar solo el suministro del equipo. Comparte las especificaciones del proyecto para revisar opciones sin incluir mano de obra de Climssa.",
  },
  {
    title: "Aire acondicionado para revender",
    text: "Prepara tus propuestas con una cotizacion de equipos y cantidades. Buscamos ofrecer precios competitivos; el precio final y las condiciones se confirman en cada cotizacion.",
  },
  {
    title: "Negocios de mantenimiento",
    text: "Consulta equipos de reemplazo, refacciones y materiales para tus trabajos. Para identificar una refaccion, comparte la marca, modelo y referencia de la pieza cuando los conozcas.",
  },
];

const questions = [
  {
    question: "¿Puedo comprar el equipo sin contratar instalacion?",
    answer: "Si. Indica que necesitas solo suministro para tu instalacion o reventa. Si tambien requieres ejecucion, podemos revisar el alcance por separado.",
  },
  {
    question: "¿Que datos necesito para cotizar?",
    answer: "Marca o tipo de equipo, modelo si lo tienes, capacidad, voltaje, cantidad y ubicacion de entrega. Si no conoces algun dato, solicita orientacion antes de elegir el equipo.",
  },
  {
    question: "¿Como confirmo disponibilidad, entrega y garantia?",
    answer: "Consulta las condiciones para el modelo y destino que necesitas. No des por confirmados existencia, fecha de entrega o instalacion incluida hasta revisar la cotizacion.",
  },
];

export default function ProfessionalBuyerPage() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Breadcrumbs items={[
            { label: "Inicio", href: "/" },
            { label: "Para profesionales", href: professionalPath },
          ]} />
          <p className="text-sm font-black uppercase text-blue-700">Climssa - Climas de Sinaloa</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-blue-950 md:text-6xl">
            Aire acondicionado para instaladores y revendedores en CDMX
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Tu proveedor de equipos para instalacion, reventa y mantenimiento.
            Estamos en Ciudad de Mexico y atendemos a profesionales que buscan
            opciones para sus clientes, sin necesidad de contratar nuestra instalacion.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton message={quoteMessages.equipment}>
              Cotizar equipos para mi negocio
            </WhatsAppButton>
            <Link className="rounded-full border border-blue-800 px-6 py-3 font-black text-blue-900" href="/productos">
              Consultar equipos y refacciones
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-black text-blue-950">Compra segun el trabajo que realizas</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {buyerNeeds.map((need) => (
            <article className="rounded-3xl border border-blue-950/10 bg-white p-7 shadow-sm" key={need.title}>
              <h3 className="text-xl font-black text-blue-950">{need.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{need.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 md:grid-cols-2">
        <div className="rounded-3xl bg-blue-950 p-8 text-white">
          <h2 className="text-3xl font-black">Prepara tu solicitud de equipos</h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 leading-7 text-blue-100">
            <li>Tipo de equipo: minisplit, cassette, piso-techo o paquete.</li>
            <li>Marca, modelo, capacidad y voltaje, si ya estan definidos.</li>
            <li>Cantidad, lugar de entrega y fecha en la que lo necesitas.</li>
            <li>Si buscas solo equipo, materiales o tambien instalacion.</li>
          </ul>
          <p className="mt-6 leading-7 text-blue-100">
            Confirma precio, impuestos, entrega y garantia antes de cerrar tu pedido.
            No prometemos un margen de reventa ni descuentos automaticos por volumen.
          </p>
        </div>
        <div className="rounded-3xl border border-blue-950/10 bg-white p-8">
          <h2 className="text-3xl font-black text-blue-950">¿Tu cliente necesita un proyecto completo?</h2>
          <p className="mt-5 leading-7 text-slate-600">
            Distingue el suministro de equipos de la ejecucion. Para obras nuevas o
            adecuaciones, revisa nuestra atencion a arquitectos y constructoras.
          </p>
          <p className="mt-4 leading-7 text-slate-600">{coverageDescription}</p>
          <Link className="mt-6 inline-block font-black text-blue-800 hover:underline" href="/proyectos">
            Suministro e instalacion para proyectos
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-3xl font-black text-blue-950">Preguntas de compra profesional</h2>
        <div className="mt-8 space-y-6">
          {questions.map((item) => (
            <article key={item.question}>
              <h3 className="text-xl font-black text-blue-950">{item.question}</h3>
              <p className="mt-2 max-w-4xl leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
