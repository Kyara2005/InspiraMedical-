"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { assetPath } from "@/lib/paths";

const certificates = [
  {
    id: "cordero",
    src: "/cert-cordero.png",
    title: "Fellow Dr. Cristian Cordero 2024",
  },
  {
    id: "ultrasonica",
    src: "/cert-ultrasonica-usa.png",
    title: "Fellow con inventor de la Rinoplastia Ultrasónica en Estados Unidos",
  },
  {
    id: "hibrida",
    src: "/cert-hibrida-miami.png",
    title: "Fellow Rinoplastia Híbrida en Miami, Estados Unidos",
  },
  {
    id: "ahmet",
    src: "/cert-ahmet-alp.png",
    title: "Fellow Dr. Ahmet Alp — Turquía",
  },
  {
    id: "teo",
    src: "/cert-teorhinoplasty.png",
    title: "Fellow Teorhinoplasty — Turquía",
  },
  {
    id: "facial",
    src: "/cert-facial-turquia.png",
    title: "Fellow Cirugía Plástica Facial — Turquía",
  },
  {
    id: "peru",
    src: "/cert-peru.png",
    title: "Fellow Formación Superior en Rinoplastia en Perú",
  },
];

export function Certificates() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const pauseAutoUntil = useRef(0);

  const updateActiveFromScroll = useEffectEvent(() => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(
      el.querySelectorAll<HTMLElement>("[data-cert-card]"),
    );
    if (!cards.length) return;

    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActiveIndex(best);
  });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateActiveFromScroll();
    el.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveFromScroll);
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        setLightbox((i) =>
          i === null ? i : (i + 1) % certificates.length,
        );
      }
      if (e.key === "ArrowLeft") {
        setLightbox((i) =>
          i === null ? i : (i - 1 + certificates.length) % certificates.length,
        );
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const scrollToIndex = useCallback((index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelectorAll<HTMLElement>("[data-cert-card]")[index];
    if (!card) return;
    const left = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    el.scrollTo({ left, behavior: "smooth" });
  }, []);

  const goNext = useEffectEvent(() => {
    if (lightbox !== null || dragging || Date.now() < pauseAutoUntil.current) {
      return;
    }
    scrollToIndex((activeIndex + 1) % certificates.length);
  });

  useEffect(() => {
    if (lightbox !== null || dragging) return;
    const timer = window.setTimeout(() => goNext(), 4500);
    return () => window.clearTimeout(timer);
  }, [activeIndex, lightbox, dragging]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    pauseAutoUntil.current = Date.now() + 8000;
    dragState.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
      moved: false,
    };
    setDragging(true);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !dragState.current.active) return;
    const dx = e.clientX - dragState.current.startX;
    if (Math.abs(dx) > 6) dragState.current.moved = true;
    el.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !dragState.current.active) return;
    dragState.current.active = false;
    setDragging(false);
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
    requestAnimationFrame(() => {
      updateActiveFromScroll();
      const cards = Array.from(
        el.querySelectorAll<HTMLElement>("[data-cert-card]"),
      );
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      scrollToIndex(best);
    });
  };

  const openItem = (index: number) => {
    if (dragState.current.moved) return;
    setLightbox(index);
  };

  const activeCert = lightbox !== null ? certificates[lightbox] : null;

  return (
    <section
      id="certificados"
      className="relative overflow-hidden bg-[#050910] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[380px] w-[520px] rounded-full bg-brand-blue/18 blur-[110px]" />
        <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-brand-sky/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-brand-sky" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-cyan">
              Credenciales
            </p>
            <span className="h-px w-10 bg-brand-sky" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Certificados y fellowships
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-white/55 md:text-lg">
            Formación internacional en rinoplastia ultrasónica, cirugía facial y
            técnicas de referencia mundial.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#050910] to-transparent md:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#050910] to-transparent md:w-20" />

          <div
            ref={trackRef}
            className={`gallery-track flex snap-x snap-mandatory gap-5 overflow-x-auto px-[10vw] pb-6 pt-4 md:gap-6 md:px-[18vw] ${
              dragging ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            {certificates.map((cert, index) => {
              const isActive = index === activeIndex;
              return (
                <article
                  key={cert.id}
                  data-cert-card
                  className={`relative shrink-0 snap-center transition-all duration-500 ease-out ${
                    isActive
                      ? "z-20 scale-100 opacity-100"
                      : "z-10 scale-[0.9] opacity-45"
                  }`}
                  style={{ width: "min(82vw, 420px)" }}
                >
                  <button
                    type="button"
                    onClick={() => openItem(index)}
                    className={`group block w-full overflow-hidden rounded-2xl bg-[#0b1524] text-left ring-1 transition duration-500 ${
                      isActive
                        ? "shadow-[0_25px_70px_-22px_rgba(78,184,232,0.4)] ring-brand-sky/45"
                        : "shadow-2xl shadow-black/40 ring-white/10"
                    }`}
                    aria-label={`Ver certificado: ${cert.title}`}
                  >
                    <div className="relative aspect-[4/3] w-full bg-black">
                      <Image
                        src={assetPath(cert.src)}
                        alt={cert.title}
                        fill
                        className={`object-contain p-3 transition duration-700 ${
                          isActive ? "scale-100" : "scale-[1.03]"
                        } group-hover:scale-[1.02]`}
                        sizes="420px"
                        quality={95}
                        unoptimized
                        draggable={false}
                      />
                    </div>
                    <div className="border-t border-white/10 px-5 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-cyan">
                        Fellowship
                      </p>
                      <h3 className="mt-1.5 text-sm font-semibold leading-snug text-white md:text-base">
                        {cert.title}
                      </h3>
                      <p className="mt-2 text-xs font-medium text-white/40 transition group-hover:text-brand-cyan">
                        Ampliar certificado →
                      </p>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() =>
              scrollToIndex(
                (activeIndex - 1 + certificates.length) % certificates.length,
              )
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-brand-cyan hover:text-brand-cyan"
            aria-label="Anterior"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex max-w-[60vw] flex-wrap items-center justify-center gap-2">
            {certificates.map((cert, index) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-brand-sky"
                    : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Ir a ${cert.title}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              scrollToIndex((activeIndex + 1) % certificates.length)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-brand-cyan hover:text-brand-cyan"
            aria-label="Siguiente"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M9 18l6-6-6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {lightbox !== null && activeCert && (
        <div
          className="lightbox-enter fixed inset-0 z-[100] flex items-center justify-center bg-black/93 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 md:right-8 md:top-8"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 md:flex"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) =>
                i === null
                  ? i
                  : (i - 1 + certificates.length) % certificates.length,
              );
            }}
            aria-label="Anterior"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 md:flex"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) =>
                i === null ? i : (i + 1) % certificates.length,
              );
            }}
            aria-label="Siguiente"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M9 18l6-6-6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className="lightbox-media relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-[#0b1524] ring-1 ring-white/15 shadow-[0_0_80px_-20px_rgba(78,184,232,0.35)]">
              <div className="relative mx-auto aspect-[4/3] max-h-[72vh] w-full">
                <Image
                  src={assetPath(activeCert.src)}
                  alt={activeCert.title}
                  fill
                  className="object-contain p-4 md:p-6"
                  sizes="(max-width: 768px) 100vw, 960px"
                  quality={100}
                  unoptimized
                  priority
                />
              </div>
            </div>
            <div className="mt-5 max-w-2xl px-2 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-cyan">
                Fellowship
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white md:text-2xl">
                {activeCert.title}
              </h3>
              <p className="mt-2 text-sm text-white/45">
                {lightbox + 1} / {certificates.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
