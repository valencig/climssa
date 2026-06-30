import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { createPageMetadata } from "@/lib/seo";
import { contact } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Solicitar cotizacion",
  description:
    "Formulario para solicitar cotizacion de aire acondicionado con Climssa.",
  path: "/cotizacion",
  image: "/images/minisplit-residencial.png",
});

export default function QuotePage() {
  return (
    <main className="bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:items-start md:py-28">
        <div>
          <p className="text-sm font-black uppercase text-blue-700">
            Cotizacion Climssa
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight text-blue-950 md:text-6xl">
            Solicita una cotizacion con Climssa
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Comparte los datos principales de tu proyecto y el equipo de Climssa
            te orientara con la mejor solucion disponible.
          </p>
          <div className="mt-8">
            <WhatsAppButton variant="outline">Prefiero WhatsApp</WhatsAppButton>
          </div>

          <div className="mt-10 grid gap-4 rounded-[2rem] border border-blue-950/10 bg-white/80 p-6 text-sm font-bold text-slate-700 shadow-sm backdrop-blur">
            <p className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-blue-800" />
              {contact.phoneDisplay}
            </p>
            <div className="flex gap-3">
              <MessageCircle
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
              />
              <div className="grid gap-1">
                {contact.whatsappNumbers.map((whatsapp) => (
                  <a
                    className="hover:text-emerald-700"
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
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-blue-800" />
              {contact.email}
            </p>
            <p className="flex gap-3 leading-6">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-blue-800" />
              {contact.address}
            </p>
          </div>
        </div>

        <QuoteForm />
      </div>
    </main>
  );
}