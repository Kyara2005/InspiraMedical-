import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/paths";

const footerLinks = [
  { href: "#tecnica-turca", label: "Técnica Turca" },
  { href: "#especialidades", label: "Procedimiento" },
  { href: "#galeria", label: "Galería" },
  { href: "#certificados", label: "Certificados" },
  { href: "/tree", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050910]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-sky/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 h-40 w-[480px] -translate-x-1/2 rounded-full bg-brand-blue/15 blur-[90px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row md:items-start">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Image
            src={assetPath("/logo.png")}
            alt="Inspira Medical"
            width={140}
            height={42}
            className="h-9 w-auto object-contain"
            unoptimized
          />
          <p className="max-w-xs text-center text-xs font-light leading-relaxed text-white/45 md:text-left">
            Rinoplastia Ultrasónica con filosofía Turca.
            <span className="mt-1 block text-brand-cyan/70">Cero dolor · Resultados naturales</span>
          </p>
          <p className="text-[11px] font-light text-white/30">
            © {new Date().getFullYear()} Inspira Medical & Estetic Center
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-cyan">
            Navegación
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/55 transition hover:text-brand-cyan"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href="https://wa.me/593987386437"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-md border border-brand-sky/35 bg-brand-sky/10 px-4 py-2 text-xs font-semibold tracking-wide text-brand-cyan transition hover:border-brand-cyan hover:bg-brand-sky/20"
          >
            WhatsApp · Agendar
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
