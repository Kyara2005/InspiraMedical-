import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/paths";

const navLinks = [
  { href: "#tecnica-turca", label: "Técnica Turca" },
  { href: "#galeria", label: "Galería" },
  { href: "#certificados", label: "Certificados" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "/tree", label: "Contacto" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={assetPath("/logo.png")}
            alt="Inspira Medical & Estetic Center"
            width={150}
            height={45}
            className="h-9 w-auto object-contain md:h-10"
            priority
            unoptimized
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white/80 transition hover:text-brand-cyan"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/tree"
          className="rounded-md bg-brand-sky px-4 py-2 text-sm font-semibold text-brand-navy shadow-[0_0_30px_-8px_rgba(78,184,232,0.7)] transition hover:bg-brand-cyan"
        >
          Agendar
        </Link>
      </div>
    </header>
  );
}
