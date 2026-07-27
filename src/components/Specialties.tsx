const specialties = [
  {
    title: "Resultados naturales",
    description:
      "Armonía facial respetando tu identidad. Una nariz que se ve y se siente tuya.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c-2.5 3.5-6 5.5-6 9a6 6 0 0 0 12 0c0-3.5-3.5-5.5-6-9Z" />
        <path d="M9 14c.5 1.5 1.5 2.5 3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Precisión ultrasónica",
    description:
      "Tecnología de ultrasonido que esculpe el hueso con exactitud milimétrica.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cero dolor",
    description:
      "Procedimiento innovador pensado para tu confort: recuperación más suave y sin dolor.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
    ),
  },
  {
    title: "Resultados permanentes",
    description:
      "Cambios duraderos con técnicas avanzadas de la filosofía Turca.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        <rect x="3" y="3" width="18" height="18" rx="4" />
      </svg>
    ),
  },
  {
    title: "Filosofía Turca",
    description:
      "Enfoque reconocido mundialmente que combina arte quirúrgico y tecnología de punta.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Técnicas avanzadas",
    description:
      "Procedimiento que integra lo mejor de la cirugía nasal moderna en un solo tratamiento.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="section-wave relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            El procedimiento
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
            Rinoplastia Ultrasónica con filosofía Turca
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-brand-navy/65 md:text-lg">
            Un procedimiento innovador que combina técnicas avanzadas para lograr
            resultados naturales, permanentes y precisos. Y lo mejor de todo: cero
            dolor.
          </p>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item) => (
            <article key={item.title} className="group">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-sky/30 to-brand-blue/20 text-brand-blue transition group-hover:from-brand-sky/50 group-hover:to-brand-blue/30">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-brand-navy/65">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
