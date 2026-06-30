import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ServiceCardProps = {
  description: string;
  href?: string;
  icon: LucideIcon;
  title: string;
};

export function ServiceCard({
  description,
  href = "/cotizacion",
  icon: Icon,
  title,
}: ServiceCardProps) {
  return (
    <article className="group grid min-h-72 overflow-hidden rounded-3xl border border-blue-950/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/10">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-800 transition group-hover:bg-blue-800 group-hover:text-white">
        <Icon aria-hidden="true" className="h-7 w-7" />
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-black leading-tight text-blue-950">
          {title}
        </h3>
        <p className="mt-4 leading-7 text-slate-600">{description}</p>
      </div>
      <Link
        className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-black text-blue-800"
        href={href}
      >
        Conoce mas
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </article>
  );
}