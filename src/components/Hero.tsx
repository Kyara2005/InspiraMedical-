import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/paths";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050910]">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Rinoplastia ultrasónica técnica turca"
        >
          <source src={assetPath("/hero-rinoplastia.mp4")} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050910] via-transparent to-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_70%,rgba(78,184,232,0.12),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-20 pt-32 md:justify-center md:pb-24">
        <div className="max-w-xl">
          <Image
            src={assetPath("/logo.png")}
            alt="Inspira Medical & Estetic Center"
            width={400}
            height={130}
            className="animate-fade-up mb-8 h-auto w-[min(100%,320px)] object-contain md:w-[380px]"
            priority
            unoptimized
          />
          <div className="animate-fade-up mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-sky" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-cyan">
              Técnica Turca
            </p>
          </div>
          <h1 className="animate-fade-up-delay text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Rinoplastia Ultrasónica
          </h1>
          <p className="animate-fade-up-delay-2 mt-5 max-w-md text-base font-light leading-relaxed text-white/70 md:text-lg">
            Resultados naturales, permanentes y precisos. Lo mejor de todo: cero
            dolor.
          </p>

          <div className="animate-fade-up-delay-2 mt-9 flex flex-col gap-4">
            <Link
              href="/tree"
              className="hero-cta-pulse group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md bg-brand-sky px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-brand-navy shadow-[0_0_50px_-6px_rgba(78,184,232,0.85)] transition hover:bg-brand-cyan"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
              <span className="relative">Agendar valoración</span>
            </Link>

            <div className="flex flex-wrap gap-2.5">
              <Link
                href="#galeria"
                className="rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-brand-cyan/60 hover:bg-white/10 hover:text-brand-cyan"
              >
                Galería
              </Link>
              <Link
                href="#especialidades"
                className="rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-brand-cyan/60 hover:bg-white/10 hover:text-brand-cyan"
              >
                Procedimiento
              </Link>
              <Link
                href="/tree"
                className="rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-brand-cyan/60 hover:bg-white/10 hover:text-brand-cyan"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-sky/50 to-transparent" />
    </section>
  );
}
