export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  capacity: string;
  type: string;
  description: string;
  image: string;
  features: string[];
  recommendedUse: string;
};

export const products: Product[] = [
  {
    slug: "minisplit-inverter-12000-btu",
    name: "Minisplit inverter 12,000 BTU",
    brand: "Carrier / York / Daikin",
    category: "Residencial",
    capacity: "12,000 BTU",
    type: "Minisplit inverter",
    description:
      "Equipo eficiente para recamaras, estudios y espacios pequenos con bajo consumo electrico y operacion silenciosa.",
    image: "/images/minisplit-residencial.png",
    features: [
      "Tecnologia inverter para consumo eficiente",
      "Operacion silenciosa para descanso o trabajo",
      "Control de temperatura para espacios pequenos",
      "Opcion ideal para instalacion residencial",
    ],
    recommendedUse:
      "Recamaras, estudios, departamentos, consultorios pequenos y oficinas privadas.",
  },
  {
    slug: "minisplit-inverter-18000-btu",
    name: "Minisplit inverter 18,000 BTU",
    brand: "York / Carrier / Prime",
    category: "Residencial y oficina",
    capacity: "18,000 BTU",
    type: "Minisplit inverter",
    description:
      "Capacidad intermedia para areas familiares, oficinas privadas y espacios con uso continuo durante temporada de calor.",
    image: "/images/minisplit-oficina.png",
    features: [
      "Mayor capacidad para estancias medianas",
      "Tecnologia inverter segun disponibilidad de marca",
      "Buena relacion entre confort y consumo",
      "Compatible con proyectos residenciales y comerciales ligeros",
    ],
    recommendedUse:
      "Salas, comedores, oficinas medianas, locales pequenos y areas de atencion.",
  },
  {
    slug: "minisplit-inverter-24000-btu",
    name: "Minisplit inverter 24,000 BTU",
    brand: "Daikin / Hitachi / York",
    category: "Residencial amplio y comercial",
    capacity: "24,000 BTU",
    type: "Minisplit inverter",
    description:
      "Minisplit de alta capacidad para espacios amplios donde se requiere enfriamiento constante y distribucion estable.",
    image: "/images/minisplit-oficina.png",
    features: [
      "Capacidad para espacios amplios",
      "Control eficiente de temperatura",
      "Instalacion sencilla frente a sistemas centrales",
      "Opciones multimarcas para presupuesto y disponibilidad",
    ],
    recommendedUse:
      "Salones, areas abiertas, oficinas grandes, restaurantes pequenos y locales comerciales.",
  },
  {
    slug: "aire-acondicionado-tipo-cassette",
    name: "Aire acondicionado tipo cassette",
    brand: "York / McQuay / Hitachi",
    category: "Comercial",
    capacity: "18,000 a 60,000 BTU",
    type: "Cassette",
    description:
      "Equipo de plafon para distribuir aire de forma uniforme en oficinas, comercios y espacios donde se busca una instalacion limpia.",
    image: "/images/cassette-comercial.png",
    features: [
      "Distribucion de aire en cuatro direcciones",
      "Instalacion discreta en plafon",
      "Adecuado para espacios comerciales",
      "Capacidades variables segun proyecto",
    ],
    recommendedUse:
      "Oficinas, locales comerciales, salas de juntas, consultorios y areas de atencion.",
  },
  {
    slug: "aire-acondicionado-tipo-paquete",
    name: "Aire acondicionado tipo paquete",
    brand: "Carrier / York / Trane",
    category: "Comercial e industrial ligero",
    capacity: "24,000 a 120,000 BTU",
    type: "Tipo paquete",
    description:
      "Unidad robusta para espacios de mayor demanda, ideal cuando se requiere una solucion compacta para climatizacion comercial.",
    image: "/images/paquete-comercial.png",
    features: [
      "Unidad compacta para instalacion comercial",
      "Alta capacidad de enfriamiento",
      "Solucion para operacion continua",
      "Compatible con ducteria segun proyecto",
    ],
    recommendedUse:
      "Locales grandes, restaurantes, naves ligeras, oficinas amplias y areas comerciales.",
  },
  {
    slug: "aire-acondicionado-piso-techo",
    name: "Aire acondicionado piso-techo",
    brand: "Daikin / Prime / Trane",
    category: "Comercial",
    capacity: "24,000 a 60,000 BTU",
    type: "Piso-techo",
    description:
      "Solucion flexible para espacios abiertos que permite montaje en muro bajo o techo segun la arquitectura del lugar.",
    image: "/images/paquete-comercial.png",
    features: [
      "Instalacion flexible en piso o techo",
      "Buena distribucion para areas abiertas",
      "Alternativa cuando no hay plafon para cassette",
      "Capacidades para uso comercial",
    ],
    recommendedUse:
      "Locales, salones, oficinas abiertas, restaurantes y espacios comerciales sin plafon.",
  },
  {
    slug: "ductos-accesorios-refacciones",
    name: "Ductos, accesorios y refacciones",
    brand: "Multimarca",
    category: "Accesorios y refacciones",
    capacity: "Compatible con multiples sistemas",
    type: "Ductos y refacciones",
    description:
      "Materiales, accesorios y refacciones para instalacion, mantenimiento y reparacion de equipos de aire acondicionado.",
    image: "/images/ductos-refacciones.png",
    features: [
      "Accesorios para instalacion y mantenimiento",
      "Opciones para sistemas residenciales y comerciales",
      "Soporte para identificar compatibilidad",
      "Cotizacion segun equipo y necesidad tecnica",
    ],
    recommendedUse:
      "Instalaciones nuevas, reparaciones, mantenimiento correctivo y proyectos con ducteria.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}