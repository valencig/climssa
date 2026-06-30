import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/seo";
import { contact, navigationItems } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-950/10 bg-white/92 backdrop-blur-xl">
      <div className="bg-blue-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-2 text-xs font-semibold">
          <span className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
            {contact.address}
          </span>
          <span>{contact.hours}</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        <Link
          aria-label="Ir al inicio de Climssa"
          className="relative block h-16 w-44 shrink-0"
          href="/"
        >
          <Image
            alt="Climssa Climas de Sinaloa SA de CV"
            className="object-contain"
            fill
            priority
            sizes="176px"
            src={withBasePath("/images/climssa-logo.png")}
          />
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-black text-slate-700">
          {navigationItems.map((item) => (
            <Link
              className="transition hover:text-blue-800"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-black text-blue-950 transition hover:bg-blue-100"
            href={`tel:${contact.phone}`}
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            {contact.phoneDisplay}
          </a>
          <WhatsAppButton className="px-4 py-2" variant="outline" />
          <Link
            className="inline-flex items-center justify-center rounded-full bg-blue-800 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-900/15 transition hover:bg-blue-950"
            href="/cotizacion"
          >
            Solicitar cotizacion
          </Link>
        </div>
      </div>
    </header>
  );
}