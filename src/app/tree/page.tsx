import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/paths";

const links = [
  {
    href: "https://wa.me/593987386437",
    label: "WhatsApp",
    description: "Agenda tu valoración",
  },
  {
    href: "mailto:inspiramedicalandsteticcenter@gmail.com",
    label: "Correo",
    description: "inspiramedicalandsteticcenter@gmail.com",
  },
  {
    href: "https://www.instagram.com/inspira_medicaluio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    label: "Instagram",
    description: "@inspira_medicaluio",
  },
  {
    href: "https://www.tiktok.com/@rinoplastia_ultrasonica?_t=8euzVK7iZZm&_r=1",
    label: "TikTok",
    description: "@rinoplastia_ultrasonica",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100078724092474&mibextid=ZbWKwL",
    label: "Facebook",
    description: "Inspira Medical",
  },
  {
    href: "/",
    label: "Sitio web",
    description: "Rinoplastia Ultrasónica",
    internal: true,
  },
];

export default function TreePage() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center bg-[#050910] px-6 py-12 font-sans">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-brand-sky/10 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(127,212,240,0.45) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <Link href="/" className="animate-fade-up mb-2">
          <Image
            src={assetPath("/logo.png")}
            alt="Inspira Medical & Estetic Center"
            width={280}
            height={90}
            className="h-auto w-[220px] object-contain drop-shadow-lg md:w-[260px]"
            priority
            unoptimized
          />
        </Link>

        <div className="animate-fade-up-delay mt-4 flex items-center gap-3">
          <span className="h-px w-8 bg-brand-sky" />
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-brand-cyan">
            Técnica Turca
          </p>
          <span className="h-px w-8 bg-brand-sky" />
        </div>
        <p className="animate-fade-up-delay mt-3 text-center text-lg font-semibold text-white">
          Rinoplastia Ultrasónica
        </p>
        <p className="animate-fade-up-delay mt-1 text-center text-xs font-light tracking-wide text-white/50">
          Cero dolor · Resultados naturales
        </p>
        <p className="animate-fade-up-delay mt-4 max-w-xs text-center text-sm font-light leading-relaxed text-white/60">
          Agenda tu valoración o síguenos en redes.
        </p>

        <nav className="animate-fade-up-delay-2 mt-10 flex w-full flex-col gap-3">
          {links.map((link) => {
            const className =
              "group flex w-full items-center justify-between border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm transition hover:border-brand-sky/45 hover:bg-white/[0.07]";

            const content = (
              <>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {link.label}
                  </span>
                  <span className="mt-0.5 block text-xs font-light text-white/50">
                    {link.description}
                  </span>
                </span>
                <span className="text-brand-cyan transition group-hover:translate-x-0.5">
                  →
                </span>
              </>
            );

            if (link.internal) {
              return (
                <Link key={link.label} href={link.href} className={className}>
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            );
          })}
        </nav>

        <Link
          href="/"
          className="mt-10 text-xs font-medium tracking-wide text-white/40 transition hover:text-brand-cyan"
        >
          ← Volver al inicio
        </Link>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-sky/40 to-transparent" />
    </main>
  );
}
