import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  Clock,
  Headphones,
  HomeIcon,
  MapPin,
  ShieldCheck,
  Snowflake,
  Truck,
  Wrench,
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { MotionReveal } from "@/components/MotionReveal";
import { ProductCard } from "@/components/ProductCard";
import { QuoteForm } from "@/components/QuoteForm";
import { ScrollTextReveal } from "@/components/ScrollTextReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { products } from "@/lib/products";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { contact, partnerBrands, serviceSummaries } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Aire acondicionado, instalacion y mantenimiento",
  description:
    "Climssa vende, instala y da mantenimiento a equipos de aire acondicionado para casas, negocios y oficinas en Ciudad de Mexico y Mexico.",
  path: "/",
  image: "/images/minisplit-residencial.png",
});

const serviceIcons = [Snowflake, Wrench, ShieldCheck];
const featuredProducts = products.slice(0, 3);

const solutionCards = [
  {
    title: "Para hogares",
    description: "Confort eficiente para recamaras, salas y departamentos.",
    icon: HomeIcon,
  },
  {
    title: "Para empresas",
    description: "Soluciones para oficinas, locales y areas de trabajo.",
    icon: Building2,
  },
  {
    title: "Instalacion",
    description: "Tecnicos capacitados para montaje y puesta en marcha.",
    icon: Wrench,
  },
  {
    title: "Refacciones",
    description: "Soporte para mantener equipos operando con confianza.",
    icon: ShieldCheck,
  },
];

const productCategories = [
  "Minisplits inverter",
  "Cassette comercial",
  "Sistemas VRF / VRV",
  "Equipos tipo paquete",
  "Ductos y accesorios",
  "Refacciones multimarcas",
];

const whyChooseUs = [
  {
    title: "Calidad garantizada",
    description: "Trabajamos con equipos confiables y recomendaciones tecnicas claras.",
    icon: BadgeCheck,
  },
  {
    title: "Atencion profesional",
    description: "Acompanamiento antes, durante y despues de la compra o instalacion.",
    icon: Headphones,
  },
  {
    title: "Entrega y cobertura",
    description: "Atencion en CDMX y envio de equipos a diferentes zonas de Mexico.",
    icon: Truck,
  },
  {
    title: "Experiencia desde 1988",
    description: "Mas de tres decadas resolviendo necesidades de climatizacion.",
    icon: Clock,
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: contact.legalName,
  alternateName: contact.brandName,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/images/climssa-logo.png"),
  image: absoluteUrl("/images/minisplit-residencial.png"),
  telephone: contact.phone,
  email: contact.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Eje Central Lazaro Cardenas 155, Locales A y C, Guerrero",
    addressLocality: "Cuauhtemoc",
    addressRegion: "Ciudad de Mexico",
    postalCode: "06300",
    addressCountry: "MX",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: ["Ciudad de Mexico", "Mexico"],
  makesOffer: products.map((product) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: product.name,
      category: product.category,
      description: product.description,
      image: absoluteUrl(product.image),
    },
  })),
};

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        type="application/ld+json"
      />
      <HeroSection />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase text-blue-700">
              Nuestras soluciones
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight text-blue-950 md:text-5xl">
              Un sistema claro para elegir, instalar y cuidar tu aire
              acondicionado.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Climssa combina catalogo, asesoria, instalacion y mantenimiento para
            que cada espacio tenga la capacidad correcta y un servicio tecnico
            responsable.
          </p>
        </div>

        <div className="mt-12 grid grid-flow-dense gap-6 md:grid-cols-3">
          {serviceSummaries.map((service, index) => (
            <ServiceCard
              description={service.description}
              href={service.href}
              icon={serviceIcons[index]}
              key={service.title}
              title={service.title}
            />
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-blue-700">
              Climas de Sinaloa SA de CV
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-blue-950 md:text-5xl">
              Venta, instalacion y mantenimiento de aire acondicionado en Mexico.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Climssa atiende proyectos residenciales, comerciales y de oficina
              con asesoria para elegir capacidad, tecnologia y configuracion de
              instalacion. Desde nuestra ubicacion en la colonia Guerrero,
              Cuauhtemoc, apoyamos clientes en Ciudad de Mexico, zona
              metropolitana y otros puntos de la Republica Mexicana.
            </p>
          </div>

          <div className="rounded-[2rem] border border-blue-950/10 bg-white p-8 shadow-2xl shadow-blue-950/8">
            <div className="grid gap-6 text-slate-700">
              <p className="flex gap-4 leading-7">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                <span>{contact.address}</span>
              </p>
              <p className="flex gap-4 leading-7">
                <Clock aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                <span>{contact.hours}</span>
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <WhatsAppButton />
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-blue-800 px-5 py-3 text-sm font-black text-blue-900 transition hover:bg-blue-50"
                  href="/contacto"
                >
                  Ver contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {solutionCards.map((solution) => {
              const Icon = solution.icon;
              return (
                <MotionReveal className="h-full" key={solution.title}>
                  <article className="h-full rounded-3xl border border-blue-950/10 bg-slate-50 p-7 shadow-sm">
                    <Icon aria-hidden="true" className="h-10 w-10 text-blue-800" />
                    <h3 className="mt-8 text-2xl font-black text-blue-950">
                      {solution.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600">
                      {solution.description}
                    </p>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase text-blue-700">
              Categorias de producto
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-blue-950 md:text-5xl">
              Catalogo para casas, negocios, oficinas y proyectos comerciales.
            </h2>
          </div>
          <Link
            className="inline-flex w-fit rounded-full bg-blue-800 px-6 py-3 font-black text-white shadow-xl shadow-blue-900/20 transition hover:bg-blue-950"
            href="/productos"
          >
            Ver catalogo
          </Link>
        </div>

        <div className="mt-12 grid grid-flow-dense gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <Link
              className="rounded-3xl border border-blue-950/10 bg-white p-6 text-xl font-black text-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/10"
              href="/productos"
              key={category}
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-blue-700">
                Por que elegirnos
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight text-blue-950 md:text-5xl">
                Servicio confiable para comprar, instalar y mantener tu equipo.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Nuestro trabajo se enfoca en recomendar equipos adecuados,
              instalar con cuidado tecnico y mantener el sistema funcionando con
              eficiencia despues de la compra.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((reason) => {
              const Icon = reason.icon;
              return (
                <article
                  className="rounded-3xl border border-blue-950/10 bg-slate-50 p-7 shadow-sm"
                  key={reason.title}
                >
                  <Icon aria-hidden="true" className="h-10 w-10 text-blue-800" />
                  <h3 className="mt-8 text-2xl font-black text-blue-950">
                    {reason.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase text-blue-700">
              Productos destacados
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-blue-950 md:text-5xl">
              Equipos para necesidades residenciales y comerciales.
            </h2>
          </div>
          <WhatsAppButton variant="outline">Cotizar por WhatsApp</WhatsAppButton>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <div className="overflow-hidden rounded-[2rem] bg-blue-950 p-8 text-white shadow-2xl shadow-blue-950/20 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-blue-200">
                Cotizacion rapida
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight md:text-5xl">
                Recibe orientacion por WhatsApp para elegir el equipo correcto.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-blue-100">
                Comparte tipo de espacio, ciudad, medidas aproximadas y uso del
                equipo. Climssa te ayuda a avanzar con una recomendacion clara.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <WhatsAppButton className="bg-emerald-500 text-white hover:bg-emerald-600" />
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-black text-blue-950 transition hover:bg-blue-50"
                href="/cotizacion"
              >
                Solicitar cotizacion
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-blue-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-black uppercase text-blue-200">
            Distribuidores autorizados
          </p>
        </div>
        <div className="mt-8 flex gap-4 whitespace-nowrap marquee-track">
          {[...partnerBrands, ...partnerBrands].map((brand, index) => (
            <span
              className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-lg font-black text-white"
              key={`${brand}-${index}`}
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ScrollTextReveal text="En Climssa, cada cotizacion empieza por entender tu espacio: metros, uso, carga termica, presupuesto y mantenimiento futuro." />
      </section>

      <section className="bg-[linear-gradient(135deg,#f8fbff_0%,#eaf4ff_100%)] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase text-blue-700">
              Solicita asesoria
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-blue-950 md:text-5xl">
              Cuentanos que necesitas climatizar.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Te orientamos para elegir equipo, capacidad, instalacion o
              mantenimiento segun tu proyecto.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
