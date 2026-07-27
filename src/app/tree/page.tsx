import Image from "next/image";
import Link from "next/link";

const links = [
  {
    href: "https://wa.me/593987386437",
    label: "WhatsApp",
    description: "Agenda tu valoración",
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
    <main className="relative flex min-h-[100svh] flex-col items-center px-6 py-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(78,184,232,0.28), transparent 55%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(26,91,181,0.15), transparent 50%), linear-gradient(180deg, #0a2a5c 0%, #0f3d7a 40%, #1a5bb5 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <Link href="/" className="animate-fade-up mb-2">
          <Image
            src="/logo.png"
            alt="Inspira Medical & Estetic Center"
            width={280}
            height={90}
            className="h-auto w-[220px] object-contain drop-shadow-lg md:w-[260px]"
            priority
          />
        </Link>
        <p className="animate-fade-up-delay mt-2 text-center text-sm font-semibold uppercase tracking-[0.18em] text-brand-cyan/90">
          Rinoplastia Ultrasónica
        </p>
        <p className="animate-fade-up-delay mt-1 text-center text-xs font-light tracking-wide text-white/60">
          Técnica Turca · Cero dolor
        </p>
        <p className="animate-fade-up-delay mt-4 max-w-xs text-center text-sm font-light leading-relaxed text-white/70">
          Agenda tu valoración o síguenos en redes.
        </p>

        <nav className="animate-fade-up-delay-2 mt-10 flex w-full flex-col gap-3">
          {links.map((link) => {
            const className =
              "group flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md transition hover:border-brand-cyan/50 hover:bg-white/18";

            const content = (
              <>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {link.label}
                  </span>
                  <span className="mt-0.5 block text-xs font-light text-white/60">
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
          className="mt-10 text-xs font-medium tracking-wide text-white/50 transition hover:text-brand-cyan"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
