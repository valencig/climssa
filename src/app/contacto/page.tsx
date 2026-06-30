import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { createPageMetadata } from "@/lib/seo";
import { contact } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Contacto de Climssa: telefono, WhatsApp, correo y ubicacion en Ciudad de Mexico.",
  path: "/contacto",
  image: "/images/paquete-comercial.png",
});

export default function ContactPage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.95fr_1.05fr] md:items-start md:py-28">
        <div>
          <p className="text-sm font-black uppercase text-blue-700">
            Contacto Climssa
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight text-blue-950 md:text-6xl">
            Hablemos de tu proyecto de aire acondicionado
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Solicita asesoria para comprar, instalar o mantener equipos de aire
            acondicionado en Mexico.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton />
            <a
              className="rounded-full border border-blue-800 px-6 py-3 font-black text-blue-900 transition hover:bg-blue-50"
              href={`tel:${contact.phone}`}
            >
              Llamar ahora
            </a>
          </div>
        </div>

        <section className="rounded-[2rem] border border-blue-950/10 bg-white p-8 shadow-2xl shadow-blue-950/8">
          <h2 className="text-2xl font-black text-blue-950">
            Datos de contacto
          </h2>
          <div className="mt-8 grid gap-6 text-slate-700">
            <p className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
              <span>{contact.phoneDisplay}</span>
            </p>
            <div className="flex gap-3">
              <MessageCircle
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-emerald-600"
              />
              <div className="grid gap-1">
                <span className="font-black text-blue-950">WhatsApp de ventas</span>
                {contact.whatsappNumbers.map((whatsapp) => (
                  <a
                    className="font-bold text-slate-700 hover:text-emerald-700"
                    href={`https://wa.me/${whatsapp.number}`}
                    key={whatsapp.number}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {whatsapp.display}
                  </a>
                ))}
              </div>
            </div>
            <p className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
              <span>{contact.email}</span>
            </p>
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
              <span>{contact.address}</span>
            </p>
            <p className="flex gap-3">
              <Clock aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
              <span>{contact.hours}</span>
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-blue-950/10 bg-blue-950 p-8 text-white shadow-2xl shadow-blue-950/15 md:col-span-2">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-black">Atencion en Mexico</h2>
              <p className="mt-4 max-w-3xl leading-8 text-blue-100">
                Climssa atiende solicitudes de venta, instalacion, mantenimiento
                y refacciones. Comparte tu ciudad, tipo de espacio y servicio
                requerido para preparar una respuesta mas precisa.
              </p>
            </div>
            <WhatsAppButton className="bg-emerald-500 text-white hover:bg-emerald-600" />
          </div>
        </section>

        <div className="md:col-span-2">
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}