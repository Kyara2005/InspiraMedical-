import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/paths";

export function TecnicaTurca() {
  return (
    <section
      id="tecnica-turca"
      className="relative overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_85%_45%,rgba(78,184,232,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_10%_80%,rgba(10,42,92,0.45),transparent_50%)]" />
        <div className="absolute inset-y-0 right-0 w-[58%] bg-gradient-to-l from-black via-black/40 to-transparent md:w-[52%]" />
      </div>

      <div className="relative mx-auto grid min-h-[88svh] max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-6 md:py-0 lg:min-h-[92svh]">
        <div className="relative z-10 order-2 max-w-xl md:order-1 md:py-24">
          <div className="animate-fade-up mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-sky" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-cyan">
              Filosofía quirúrgica
            </p>
          </div>

          <h2 className="animate-fade-up-delay text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Técnica
            <span className="mt-1 block bg-gradient-to-r from-brand-sky via-brand-cyan to-white bg-clip-text text-transparent">
              Turca
            </span>
          </h2>

          <p className="animate-fade-up-delay-2 mt-6 text-lg font-medium leading-snug text-white/90 md:text-xl">
            La Rinoplastia Ultrasónica con filosofía Turca
          </p>

          <p className="animate-fade-up-delay-2 mt-4 max-w-md text-base font-light leading-relaxed text-white/65 md:text-[1.05rem]">
            es un procedimiento innovador que combina técnicas avanzadas para
            lograr resultados naturales, permanentes y precisos y lo mejor de
            todo:{" "}
            <span className="font-semibold text-brand-cyan">cero dolor</span>.
          </p>

          <ul className="animate-fade-up-delay-2 mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Resultados naturales",
              "Permanentes y precisos",
              "Técnicas avanzadas",
              "Cero dolor",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm font-medium tracking-wide text-white/80"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-sky/15 ring-1 ring-brand-sky/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-sky" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-3">
            <Link
              href="/tree"
              className="rounded-md bg-brand-sky px-6 py-3 text-sm font-semibold text-brand-navy shadow-[0_0_40px_-8px_rgba(78,184,232,0.55)] transition hover:bg-brand-cyan"
            >
              Agendar valoración
            </Link>
            <Link
              href="#galeria"
              className="rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-brand-cyan/60 hover:bg-white/10"
            >
              Ver antes y después
            </Link>
          </div>
        </div>

        <div className="relative order-1 md:order-2 md:min-h-[88svh]">
          <div className="tecnica-image-glow absolute -inset-4 rounded-[2rem] opacity-60 md:-inset-8" />
          <div className="relative mx-auto w-full max-w-lg md:absolute md:inset-y-8 md:right-0 md:mx-0 md:flex md:max-w-none md:w-[min(100%,540px)] md:flex-col md:justify-center lg:w-[560px]">
            <figure className="tecnica-reflect-stage relative aspect-[3/4] max-h-[62vh] w-full overflow-hidden md:max-h-[68vh]">
              <div className="tecnica-reflect-shine" aria-hidden />
              <Image
                src={assetPath("/tecnica-turca.png")}
                alt="Rinoplastia Ultrasónica Técnica Turca — perfil clínico de precisión"
                fill
                className="tecnica-reflect-image object-cover object-[center_20%]"
                sizes="(max-width: 768px) 100vw, 560px"
                quality={95}
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r md:from-black/50 md:via-transparent md:to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5 z-10 md:bottom-8 md:left-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-cyan/90">
                  Precisión milimétrica
                </p>
                <p className="mt-1 text-sm font-light text-white/70">
                  Arte quirúrgico · Tecnología ultrasónica
                </p>
              </figcaption>
            </figure>

            {/* Reflejo espejo animado */}
            <div
              className="tecnica-mirror pointer-events-none relative mt-1 h-24 overflow-hidden opacity-70 md:h-28"
              aria-hidden
            >
              <div className="tecnica-mirror-inner absolute inset-x-0 top-0 aspect-[3/4] origin-top">
                <Image
                  src={assetPath("/tecnica-turca.png")}
                  alt=""
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 768px) 100vw, 560px"
                  quality={80}
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/75 to-black" />
              <div className="tecnica-mirror-wave" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-sky/50 to-transparent" />
    </section>
  );
}
