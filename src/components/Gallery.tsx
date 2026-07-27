import Image from "next/image";
import { assetPath } from "@/lib/paths";

export function Gallery() {
  return (
    <section id="galeria" className="bg-brand-navy py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            Galería
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Conoce la técnica en acción
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-white/70">
            Mira cómo la Rinoplastia Ultrasónica con filosofía Turca transforma
            resultados con precisión y naturalidad.
          </p>
        </div>

        <div className="mt-14 grid items-start justify-items-center gap-6 md:grid-cols-2">
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-black shadow-2xl shadow-black/40 ring-1 ring-white/10">
            <video
              className="mx-auto block h-auto max-h-[75vh] w-full object-contain"
              controls
              playsInline
              preload="auto"
              aria-label="Video de Rinoplastia Ultrasónica Técnica Turca"
            >
              <source src={assetPath("/galeria-rinoplastia.mp4")} type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>

          <figure className="w-full max-w-md overflow-hidden rounded-2xl bg-black shadow-2xl shadow-black/40 ring-1 ring-white/10">
            <Image
              src={assetPath("/galeria-antes-despues.png")}
              alt="Antes y después — Rinoplastia Ultrasónica Terciaria, reconstrucción nasal por Dr. Bernal"
              width={1080}
              height={1920}
              className="mx-auto h-auto max-h-[75vh] w-full object-contain"
              sizes="(max-width: 768px) 100vw, 28rem"
              quality={100}
              unoptimized
            />
            <figcaption className="sr-only">
              Comparación antes y después de rinoplastia ultrasónica terciaria
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
