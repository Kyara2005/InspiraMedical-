import { assetPath } from "@/lib/paths";

const TIKTOK_URL =
  "https://www.tiktok.com/@rinoplastia_ultrasonica/video/7230866293837090053";

const steps = [
  {
    step: "01",
    title: "Valoración facial",
    description:
      "Analizamos proporciones, vía aérea y expectativas para diseñar un plan quirúrgico a tu medida.",
  },
  {
    step: "02",
    title: "Esculpido ultrasónico",
    description:
      "El piezotomo moldea el hueso con exactitud milimétrica, sin la agresividad de los osteotomos tradicionales.",
  },
  {
    step: "03",
    title: "Armonía del perfil",
    description:
      "Ajustamos dorso, punta y proyección para un resultado que se integra con tu rostro, no que lo compite.",
  },
  {
    step: "04",
    title: "Seguimiento cercano",
    description:
      "Acompañamiento postoperatorio continuo para una recuperación controlada y resultados estables en el tiempo.",
  },
];

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="relative overflow-hidden bg-[#07111f] py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand-blue/15 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-brand-sky/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-sky" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-cyan">
              El procedimiento
            </p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Cómo trabajamos tu caso
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-white/55 md:text-lg">
            Un recorrido clínico claro, de la primera consulta al seguimiento, con
            foco en precisión y naturalidad.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] lg:gap-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-7">
            {steps.map((item) => (
              <article
                key={item.step}
                className="group relative border-t border-brand-sky/35 pt-5 transition hover:border-brand-cyan lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0"
              >
                <span className="text-xs font-semibold tracking-[0.25em] text-brand-sky/80">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white transition group-hover:text-brand-cyan">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-white/55">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <aside className="mx-auto w-full max-w-[340px] lg:mx-0 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl bg-black ring-1 ring-brand-sky/30 shadow-[0_25px_80px_-20px_rgba(78,184,232,0.35)]">
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                <video
                  className="h-full w-full object-cover"
                  src={assetPath("/craneo.mp4")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls
                  aria-label="Anatomía nasal y craneal — procedimiento de rinoplastia ultrasónica"
                />
              </div>
            </div>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-brand-sky/40 bg-brand-sky/10 px-4 py-3 text-sm font-semibold tracking-wide text-brand-cyan transition hover:border-brand-cyan hover:bg-brand-sky/20 hover:text-white"
            >
              Ver en TikTok
              <span aria-hidden>↗</span>
            </a>
          </aside>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-sky/40 to-transparent" />
    </section>
  );
}
