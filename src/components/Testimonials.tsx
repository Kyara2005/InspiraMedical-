const testimonials = [
  {
    name: "Valeria Mendoza",
    role: "Rinoplastia Ultrasónica",
    quote:
      "Tenía miedo al dolor, pero fue exactamente como me dijeron: cero dolor y un resultado natural que nadie nota como cirugía.",
  },
  {
    name: "Daniela Torres",
    role: "Técnica Turca",
    quote:
      "La precisión de la técnica ultrasónica se nota. Mi perfil quedó armónico y la recuperación fue mucho más suave de lo esperado.",
  },
  {
    name: "Camila Ríos",
    role: "Paciente Inspira Medical",
    quote:
      "Buscaba un cambio permanente y natural. Con la filosofía Turca logré exactamente eso. Totalmente recomendado.",
  },
];

const concepts3d = [
  {
    id: "nariz",
    title: "Nariz armónica",
    description:
      "Dorso recto, punta definida y proyección equilibrada: una nariz que dialoga con tu rostro.",
    visual: "nose",
  },
  {
    id: "simetria",
    title: "Rostro simétrico",
    description:
      "Ejes faciales alineados y proporciones equilibradas para una armonía visible de frente y de perfil.",
    visual: "face",
  },
  {
    id: "confort",
    title: "Cero dolor",
    description:
      "Una recuperación más suave: menos trauma, menos inflamación y mayor confort postoperatorio.",
    visual: "comfort",
  },
] as const;

function Visual3D({ type }: { type: (typeof concepts3d)[number]["visual"] }) {
  if (type === "nose") {
    return (
      <div className="scene-3d" aria-hidden>
        <div className="scene-3d-inner scene-float">
          <div className="iso-floor" />
          <svg
            viewBox="0 0 160 160"
            className="relative z-10 h-28 w-28 drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"
          >
            <defs>
              <linearGradient id="noseSkin" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f3d2b5" />
                <stop offset="55%" stopColor="#e0b08a" />
                <stop offset="100%" stopColor="#c9926e" />
              </linearGradient>
              <linearGradient id="noseGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7fd4f0" />
                <stop offset="100%" stopColor="#4eb8e8" />
              </linearGradient>
              <filter id="noseSoft" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0.6" />
              </filter>
            </defs>
            <ellipse cx="80" cy="132" rx="38" ry="7" fill="rgba(78,184,232,0.2)" />
            {/* Base 3D nasal — vista 3/4 */}
            <path
              d="M72 28c2-6 10-10 18-8 6 2 10 8 10 16 0 22-2 44-2 66 0 10-4 18-12 22-10 5-22 3-28-4-4-5-4-12-2-18 6-20 12-42 16-74Z"
              fill="url(#noseSkin)"
            />
            <path
              d="M86 30c4 18 6 40 6 62 0 8-2 14-7 18"
              fill="none"
              stroke="url(#noseGlow)"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity="0.9"
            />
            <path
              d="M78 108c6 4 14 5 20 2"
              fill="none"
              stroke="#0a2a5c"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.35"
            />
            <ellipse cx="74" cy="112" rx="5" ry="3.5" fill="#0a2a5c" opacity="0.18" />
            <ellipse cx="96" cy="110" rx="4.5" ry="3" fill="#0a2a5c" opacity="0.15" />
            {/* Guías de armonía */}
            <path
              d="M58 48h44M62 78h40M66 108h36"
              stroke="#7fd4f0"
              strokeWidth="1"
              strokeDasharray="3 4"
              opacity="0.45"
              filter="url(#noseSoft)"
            />
          </svg>
        </div>
      </div>
    );
  }

  if (type === "face") {
    return (
      <div className="scene-3d" aria-hidden>
        <div className="scene-3d-inner scene-float-delay">
          <div className="iso-floor" />
          <svg
            viewBox="0 0 160 160"
            className="relative z-10 h-28 w-28 drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"
          >
            <defs>
              <linearGradient id="faceSkin" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5d7bd" />
                <stop offset="100%" stopColor="#d4a37c" />
              </linearGradient>
              <linearGradient id="symLine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7fd4f0" stopOpacity="0" />
                <stop offset="20%" stopColor="#7fd4f0" />
                <stop offset="80%" stopColor="#4eb8e8" />
                <stop offset="100%" stopColor="#4eb8e8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <ellipse cx="80" cy="134" rx="44" ry="7" fill="rgba(78,184,232,0.2)" />
            {/* Óvalo facial */}
            <ellipse cx="80" cy="78" rx="42" ry="52" fill="url(#faceSkin)" />
            {/* Eje de simetría */}
            <line
              x1="80"
              y1="28"
              x2="80"
              y2="128"
              stroke="url(#symLine)"
              strokeWidth="1.8"
              strokeDasharray="4 3"
            />
            {/* Ojos simétricos */}
            <ellipse cx="62" cy="68" rx="8" ry="4.5" fill="#0a2a5c" opacity="0.55" />
            <ellipse cx="98" cy="68" rx="8" ry="4.5" fill="#0a2a5c" opacity="0.55" />
            <circle cx="62" cy="68" r="2.2" fill="#7fd4f0" />
            <circle cx="98" cy="68" r="2.2" fill="#7fd4f0" />
            {/* Cejas */}
            <path
              d="M52 58c6-4 14-4 20 0"
              fill="none"
              stroke="#0a2a5c"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M88 58c6-4 14-4 20 0"
              fill="none"
              stroke="#0a2a5c"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.45"
            />
            {/* Nariz centrada */}
            <path
              d="M80 72v22c0 2 2 4 5 4"
              fill="none"
              stroke="#0a2a5c"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.4"
            />
            {/* Labios */}
            <path
              d="M66 108c8 6 20 6 28 0"
              fill="none"
              stroke="#0a2a5c"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.35"
            />
            {/* Guías laterales de simetría */}
            <path
              d="M48 48c-6 14-8 30-6 46M112 48c6 14 8 30 6 46"
              fill="none"
              stroke="#4eb8e8"
              strokeWidth="1.2"
              opacity="0.4"
            />
            <circle cx="80" cy="28" r="3" fill="#7fd4f0" opacity="0.8" />
            <circle cx="80" cy="128" r="3" fill="#7fd4f0" opacity="0.8" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="scene-3d" aria-hidden>
      <div className="scene-3d-inner scene-float-slow">
        <div className="iso-floor" />
        <svg
          viewBox="0 0 160 160"
          className="relative z-10 h-28 w-28 drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"
        >
          <defs>
            <linearGradient id="heartG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7fd4f0" />
              <stop offset="100%" stopColor="#1a5bb5" />
            </linearGradient>
          </defs>
          <ellipse cx="80" cy="126" rx="40" ry="8" fill="rgba(78,184,232,0.18)" />
          <path
            d="M80 118c-28-18-40-36-40-52 0-14 10-24 22-24 8 0 14 4 18 10 4-6 10-10 18-10 12 0 22 10 22 24 0 16-12 34-40 52Z"
            fill="url(#heartG)"
            opacity="0.9"
          />
          <path
            d="M58 72c8-2 14 2 18 8 4 8 10 12 18 10"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="112" cy="48" r="6" fill="#4eb8e8" opacity="0.7" />
          <circle cx="46" cy="54" r="4" fill="#7fd4f0" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-[#050910] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-brand-blue/18 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-brand-sky/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-brand-sky" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-cyan">
              Testimonios
            </p>
            <span className="h-px w-10 bg-brand-sky" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Pacientes que ya transformaron su perfil
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-white/55 md:text-lg">
            Experiencias reales con Rinoplastia Ultrasónica Técnica Turca.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="relative border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-brand-sky/40 hover:bg-white/[0.05]"
            >
              <span className="text-3xl font-light leading-none text-brand-sky/70">
                “
              </span>
              <p className="mt-2 text-base font-light italic leading-relaxed text-white/75">
                {item.quote}
              </p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-white">
                    {item.name}
                  </span>
                  <span className="mt-0.5 block text-xs font-medium tracking-wide text-brand-cyan">
                    {item.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-cyan">
              En 3D
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Lo que sientes, explicado en tres ideas
            </h3>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {concepts3d.map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent px-5 pb-7 pt-4 text-center transition hover:border-brand-sky/40"
              >
                <Visual3D type={item.visual} />
                <h4 className="mt-2 text-lg font-semibold text-white transition group-hover:text-brand-cyan">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/55">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-sky/40 to-transparent" />
    </section>
  );
}
