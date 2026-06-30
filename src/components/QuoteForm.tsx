"use client";

import { useId, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { products } from "@/lib/products";

const contactFields = [
  {
    autoComplete: "name",
    label: "Nombre",
    name: "name",
    placeholder: "Nombre y apellido",
    type: "text",
  },
  {
    autoComplete: "tel",
    label: "Telefono",
    name: "phone",
    placeholder: "55 0000 0000",
    type: "tel",
  },
  {
    autoComplete: "email",
    label: "Correo electronico",
    name: "email",
    placeholder: "correo@empresa.com",
    type: "email",
  },
  {
    autoComplete: "address-level2",
    label: "Ciudad",
    name: "city",
    placeholder: "Ciudad de Mexico",
    type: "text",
  },
];

const serviceOptions = [
  "Venta de aire acondicionado",
  "Instalacion de minisplits",
  "Mantenimiento preventivo",
  "Mantenimiento correctivo",
  "Solucion para casa",
  "Solucion para negocio u oficina",
];

export function QuoteForm() {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-[2rem] border border-blue-950/10 bg-white p-6 shadow-2xl shadow-blue-950/8 md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        event.currentTarget.reset();
      }}
    >
      <div className="mb-8">
        <p className="text-sm font-black uppercase text-blue-700">
          Formulario de cotizacion
        </p>
        <h2 className="mt-2 text-3xl font-black leading-tight text-blue-950">
          Cuentanos que necesitas climatizar
        </h2>
        <p className="mt-3 leading-7 text-slate-600">
          Por ahora el formulario muestra confirmacion en pantalla. La conexion
          a correo, CRM o base de datos puede agregarse despues.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {contactFields.map((field) => (
          <label
            className="grid gap-2 text-sm font-black text-slate-800"
            htmlFor={`${formId}-${field.name}`}
            key={field.name}
          >
            {field.label}
            <input
              autoComplete={field.autoComplete}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium outline-none transition focus:border-blue-700 focus:bg-white"
              id={`${formId}-${field.name}`}
              name={field.name}
              placeholder={field.label}
              required={field.name === "name" || field.name === "phone"}
              type={field.type}
            />
          </label>
        ))}

        <label
          className="grid gap-2 text-sm font-black text-slate-800"
          htmlFor={`${formId}-service`}
        >
          Servicio requerido
          <select
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium outline-none transition focus:border-blue-700 focus:bg-white"
            defaultValue=""
            id={`${formId}-service`}
            name="service"
            required
          >
            <option disabled value="">
              Selecciona un servicio
            </option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>

        <label
          className="grid gap-2 text-sm font-black text-slate-800"
          htmlFor={`${formId}-product`}
        >
          Producto de interes
          <select
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium outline-none transition focus:border-blue-700 focus:bg-white"
            defaultValue=""
            id={`${formId}-product`}
            name="product"
          >
            <option value="">Aun no estoy seguro</option>
            {products.map((product) => (
              <option key={product.slug} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label
        className="mt-5 grid gap-2 text-sm font-black text-slate-800"
        htmlFor={`${formId}-message`}
      >
        Mensaje
        <textarea
          className="min-h-36 resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium outline-none transition focus:border-blue-700 focus:bg-white"
          id={`${formId}-message`}
          name="message"
          placeholder="Cuentanos que espacio quieres climatizar, si ya tienes equipo o si necesitas asesoria completa."
        />
      </label>

      {submitted ? (
        <div
          className="mt-6 flex gap-3 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700"
          role="status"
        >
          <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0" />
          <p>
            Gracias. Tu solicitud quedo registrada para esta demostracion. El
            siguiente paso sera conectar este formulario a correo o CRM.
          </p>
        </div>
      ) : null}

      <button
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-800 px-6 py-3 font-black text-white shadow-xl shadow-blue-900/20 transition hover:bg-blue-950"
        type="submit"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
        Enviar solicitud
      </button>
    </form>
  );
}