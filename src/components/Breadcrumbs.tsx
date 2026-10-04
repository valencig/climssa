import Link from "next/link";
import { pageUrl } from "@/lib/seo";

type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: pageUrl(item.href),
    })),
  };

  return (
    <nav aria-label="Ruta de navegacion" className="mb-8 text-sm font-semibold text-slate-600">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
      />
      <ol className="flex flex-wrap gap-x-3 gap-y-2">
        {items.map((item, index) => (
          <li className="flex items-center gap-3" key={item.href}>
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link className="text-blue-800 hover:underline" href={item.href}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
