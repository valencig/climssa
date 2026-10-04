import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const output = path.resolve("out");
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.climssa.com").replace(/\/+$/, "");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const indexable = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false";
const professional = "/proveedor-aire-acondicionado-instaladores/";
const offices = "/aire-acondicionado-oficinas-comercios/";
const productSlugs = [
  "minisplit-inverter-12000-btu",
  "minisplit-inverter-18000-btu",
  "minisplit-inverter-24000-btu",
  "aire-acondicionado-tipo-cassette",
  "aire-acondicionado-tipo-paquete",
  "aire-acondicionado-piso-techo",
  "ductos-accesorios-refacciones",
];
const routes = [
  "/", "/servicios/", "/productos/", "/proyectos/", "/contacto/", "/cotizacion/",
  professional, offices, ...productSlugs.map((slug) => `/productos/${slug}/`),
];
const decode = (text) => text.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
const readPage = (route) => readFileSync(path.join(output, route, "index.html"), "utf8");
const attribute = (tag, name) => {
  const match = tag.match(new RegExp(`\\b${name}="([^"]*)"`));
  assert(match, `Missing ${name} in ${tag}`);
  return decode(match[1]);
};
const meta = (html, name) => {
  const tag = (html.match(/<meta\b[^>]*>/g) ?? []).find(
    (value) => value.includes(`name="${name}"`) || value.includes(`property="${name}"`),
  );
  assert(tag, `Missing ${name}`);
  return attribute(tag, "content");
};
const jsonLd = (html) => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  .map((match) => JSON.parse(match[1]));

test("every existing and new route exports unique, branded metadata and one H1", () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const route of routes) {
    const html = readPage(route);
    const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1];
    assert(head, `${route}: missing static head`);
    const title = decode(head.match(/<title>([^<]+)<\/title>/)?.[1] ?? "");
    assert.equal((title.match(/Climssa/g) ?? []).length, 1, `${route}: brand must occur once`);
    assert.equal(meta(head, "og:title"), title);
    assert.equal(meta(head, "twitter:title"), title);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route}: exactly one H1`);
    assert(!titles.has(title), `${route}: duplicate title`);
    titles.add(title);
    const description = meta(head, "description");
    assert(description.length > 40 && !descriptions.has(description), `${route}: missing/duplicate description`);
    descriptions.add(description);
    const canonicals = head.match(/<link\b[^>]*rel="canonical"[^>]*>/g) ?? [];
    assert.equal(canonicals.length, 1, `${route}: one canonical`);
    assert.equal(attribute(canonicals[0], "href"), `${siteUrl}${route}`);
    assert.equal(meta(head, "og:url"), `${siteUrl}${route}`);
    assert.equal(meta(head, "robots"), indexable ? "index, follow" : "noindex, follow");
    assert(!head.includes('name="keywords"'), "Meta keywords are not the SEO strategy");
  }
});

test("sitemap and robots agree with indexing policy and final canonical URLs", () => {
  const sitemap = readFileSync(path.join(output, "sitemap.xml"), "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decode(match[1]));
  assert.deepEqual(urls.sort(), indexable ? routes.map((route) => `${siteUrl}${route}`).sort() : []);
  assert(!sitemap.includes("<lastmod>"), "Do not advertise build dates as content modification dates");
  const robots = readFileSync(path.join(output, "robots.txt"), "utf8");
  assert(robots.includes("Allow: /"), "Crawlers must be able to see the demo noindex directive");
  assert(!robots.includes("Disallow: /"));
  assert.equal(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`), indexable);
  if (!indexable) assert(!robots.includes("Sitemap:"));
});

test("local business data does not claim nationwide service or sample product offers", () => {
  const [business] = jsonLd(readPage("/")).filter((data) => data["@type"] === "HVACBusiness");
  assert(business);
  assert.equal(business.name, "Climas de Sinaloa SA de CV");
  assert.equal(business.url, `${siteUrl}/`);
  assert.deepEqual(business.areaServed.map((area) => area.name), [
    "Ciudad de Mexico", "Zona metropolitana de la Ciudad de Mexico",
  ]);
  assert(!("makesOffer" in business));
  assert(!("priceRange" in business));
  assert(!("aggregateRating" in business));
});

test("breadcrumbs match visible navigation and canonical URLs", () => {
  for (const route of [professional, offices, "/proyectos/", ...productSlugs.map((slug) => `/productos/${slug}/`)]) {
    const html = readPage(route);
    const [breadcrumbs] = jsonLd(html).filter((data) => data["@type"] === "BreadcrumbList");
    assert(breadcrumbs, route);
    assert.equal(breadcrumbs.itemListElement.at(-1).item, `${siteUrl}${route}`);
    assert.equal(breadcrumbs.itemListElement[0].item, `${siteUrl}/`);
    assert(html.includes('aria-label="Ruta de navegacion"'));
    for (const [index, item] of breadcrumbs.itemListElement.entries()) {
      assert.equal(item.position, index + 1);
      assert(item.item.endsWith("/"));
      assert(html.includes(item.name));
    }
  }
});

test("professional, project and office CTAs preserve buyer context in WhatsApp", () => {
  const cases = [
    [professional, "soy instalador o revendedor", "Cantidad:"],
    ["/proyectos/", "arquitecto, constructor o responsable de obra", "Etapa de obra"],
    [offices, "administro una oficina", "Horarios de acceso:"],
  ];
  for (const [route, segment, detail] of cases) {
    const html = readPage(route);
    const messages = [...html.matchAll(/<a\b[^>]*href="(https:\/\/wa\.me\/[^"]+)"[^>]*>/g)]
      .map((match) => new URL(decode(match[1])).searchParams.get("text") ?? "");
    assert(messages.some((message) => message.includes(segment) && message.includes(detail)), route);
  }
  const home = readPage("/");
  assert(home.includes(`href="${basePath}${professional}"`));
  assert(home.includes(`href="${basePath}/proyectos/"`));
  assert(home.includes("Climas de Sinaloa en Ciudad de Mexico"));
  assert(!home.includes("Distribuidores autorizados"));
  assert(!home.includes("Instalacion certificada"));
  assert(readPage("/cotizacion/").includes("no envia mensajes"));
  assert(readPage("/productos/").includes("ejemplos orientativos"));
});

test("internal links and social images resolve in both root and subpath exports", () => {
  for (const route of routes) {
    const html = readPage(route);
    for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)) {
      const href = decode(match[1]);
      if (!href.startsWith("/") || href.startsWith("//")) continue;
      const pathname = new URL(href, "https://example.invalid").pathname;
      assert(!basePath || pathname === basePath || pathname.startsWith(`${basePath}/`), `${route}: missing base path ${href}`);
      const relative = decodeURIComponent(pathname.slice(basePath.length));
      const target = path.join(output, relative.endsWith("/") ? `${relative}index.html` : relative);
      assert(existsSync(target), `${route}: broken link ${href}`);
    }
    const image = meta(html, "og:image");
    assert(image.startsWith(`${siteUrl}/images/`), `${route}: invalid social image ${image}`);
    assert(!image.endsWith("/"), "Page slash normalization must not affect assets");
    assert(existsSync(path.join(output, image.slice(siteUrl.length))), `${route}: missing social image`);
  }
});
