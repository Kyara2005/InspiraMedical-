import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-navy">
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
          <source src="/hero-rinoplastia.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Velos suaves: el video se ve nítido y el texto sigue legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/75 via-brand-navy/35 to-brand-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-brand-navy/25" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-20 pt-32 md:justify-center md:pb-24">
        <div className="max-w-xl">
          <Image
            src="/logo.png"
            alt="Inspira Medical & Estetic Center"
            width={400}
            height={130}
            className="animate-fade-up mb-8 h-auto w-[min(100%,320px)] object-contain md:w-[380px]"
            priority
          />
          <p className="animate-fade-up mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-cyan">
            Técnica Turca
          </p>
          <h1 className="animate-fade-up-delay text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Rinoplastia Ultrasónica
          </h1>
          <p className="animate-fade-up-delay-2 mt-5 max-w-md text-base font-light leading-relaxed text-brand-cyan/90 md:text-lg">
            Resultados naturales, permanentes y precisos. Lo mejor de todo: cero
            dolor.
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href="/tree"
              className="rounded-md bg-brand-sky px-6 py-3 text-sm font-semibold text-brand-navy shadow-lg shadow-brand-sky/20 transition hover:bg-brand-cyan"
            >
              Agendar valoración
            </Link>
            <Link
              href="#especialidades"
              className="rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-brand-cyan hover:bg-white/10"
            >
              Conocer el procedimiento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
