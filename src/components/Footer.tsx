import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/paths";

export function Footer() {
  return (
    <footer className="bg-brand-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Image
            src={assetPath("/logo.png")}
            alt="Inspira Medical"
            width={140}
            height={42}
            className="h-9 w-auto object-contain"
            unoptimized
          />
          <p className="text-xs font-light text-white/45">
            © {new Date().getFullYear()} Inspira Medical & Estetic Center
          </p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-white/65">
          <Link href="#especialidades" className="transition hover:text-brand-cyan">
            Procedimiento
          </Link>
          <Link href="#galeria" className="transition hover:text-brand-cyan">
            Galería
          </Link>
          <Link href="/tree" className="transition hover:text-brand-cyan">
            Linktree
          </Link>
        </div>
      </div>
    </footer>
  );
}
