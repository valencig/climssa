import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contact, navigationItems } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="border-t border-blue-950/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="relative h-20 w-56">
            <Image
              alt="Climssa Climas de Sinaloa SA de CV"
              className="object-contain object-left"
              fill
              sizes="224px"
              src="/images/climssa-logo.png"
            />
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Aire acondicionado desde 1988: venta, instalacion, mantenimiento y
            refacciones para hogares, oficinas, comercios y proyectos
            empresariales.
          </p>
          <div className="mt-6">
            <WhatsAppButton />
          </div>
        </div>

        <div>
          <p className="font-black text-slate-950">Navegacion</p>
          <nav className="mt-4 grid gap-3 text-sm font-semibold text-slate-600">
            {navigationItems.map((item) => (
              <Link className="hover:text-blue-800" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="hover:text-blue-800" href="/images/CREDITS.md">
              Creditos de imagenes
            </Link>
          </nav>
        </div>

        <div>
          <p className="font-black text-slate-950">Contacto</p>
          <div className="mt-4 grid gap-4 text-sm leading-6 text-slate-600">
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-blue-800" />
              {contact.address}
            </p>
            <p className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-blue-800" />
              {contact.phoneDisplay}
            </p>
            <div className="flex gap-3">
              <MessageCircle
                aria-hidden="true"
                className="mt-1 h-4 w-4 shrink-0 text-emerald-600"
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
              <Mail aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-blue-800" />
              {contact.email}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-6 py-5 text-center text-xs font-semibold text-slate-500">
        2026 {contact.legalName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}