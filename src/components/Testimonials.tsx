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

export function Testimonials() {
  return (
    <section id="testimonios" className="relative overflow-hidden py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(78,184,232,0.2), transparent 70%), linear-gradient(180deg, #f5f9fc, #eaf5fb)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Testimonios
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
            Pacientes que ya transformaron su perfil
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-brand-navy/65">
            Experiencias reales con Rinoplastia Ultrasónica Técnica Turca.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <blockquote
              key={item.name}
              className="relative border-t-2 border-brand-sky/60 pt-6"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <p className="text-base font-light italic leading-relaxed text-brand-navy/80">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-brand-navy">
                    {item.name}
                  </span>
                  <span className="mt-0.5 block text-xs font-medium tracking-wide text-brand-blue">
                    {item.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
