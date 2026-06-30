import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/site";

type WhatsAppButtonProps = {
  children?: React.ReactNode;
  className?: string;
  message?: string;
  variant?: "primary" | "outline" | "ghost";
};

const variants = {
  primary:
    "bg-emerald-500 text-white shadow-lg shadow-emerald-900/15 hover:bg-emerald-600",
  outline:
    "border border-emerald-500 bg-white text-emerald-700 hover:bg-emerald-50",
  ghost: "text-emerald-700 hover:bg-emerald-50",
};

export function WhatsAppButton({
  children = "Enviar WhatsApp",
  className = "",
  message = "Hola, quiero solicitar una cotizacion con Climssa.",
  variant = "primary",
}: WhatsAppButtonProps) {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? contact.whatsappFallback;
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition ${variants[variant]} ${className}`}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" className="h-4 w-4" />
      {children}
    </a>
  );
}