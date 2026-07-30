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

type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  title: string;
  subtitle: string;
  alt?: string;
};

const items: GalleryItem[] = [
  {
    id: "barbie",
    type: "image",
    src: "/antes-despues-barbie.png",
    title: "Barbie Rinoplastia Ultrasónica",
    subtitle: "Antes · Después",
    alt: "Antes y después — Barbie Rinoplastia Ultrasónica",
  },
  {
    id: "magia",
    type: "image",
    src: "/antes-despues-magia.png",
    title: "La magia de la Barbie",
    subtitle: "Rinoplastia Ultrasónica",
    alt: "Antes y después — La magia de la Barbie Rinoplastia Ultrasónica",
  },
  {
    id: "rino",
    type: "video",
    src: "/rino.mp4",
    title: "Rinoplastia en detalle",
    subtitle: "Resultado y técnica",
  },
  {
    id: "nariz",
    type: "video",
    src: "/galeria-nariz.mp4",
    title: "Rinoplastia Ultrasónica",
    subtitle: "Procedimiento en detalle",
  },
  {
    id: "rinosepto",
    type: "video",
    src: "/galeria-rinoseptoplastia.mp4",
    title: "Rinoseptoplastia Ultrasónica",
    subtitle: "Función y estética nasal",
  },
  {
    id: "ortognatica",
    type: "video",
    src: "/galeria-ortognatica.mp4",
    title: "Cirugía Ortognática + Rinoplastia",
    subtitle: "Armonía facial completa",
  },
];

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
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
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-gallery-card]"));
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
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (!video) return;
      const index = items.findIndex((item) => item.id === id);
      if (index === activeIndex && lightbox === null) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else if (lightbox === null) {
        video.pause();
      }
    });
  }, [activeIndex, lightbox]);

  const scrollToIndex = useCallback((index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelectorAll<HTMLElement>("[data-gallery-card]")[index];
    if (!card) return;
    const left = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    el.scrollTo({ left, behavior: "smooth" });
  }, []);

  const goNext = useEffectEvent(() => {
    if (lightbox !== null || dragging || Date.now() < pauseAutoUntil.current) {
      return;
    }
    const next = (activeIndex + 1) % items.length;
    scrollToIndex(next);
  });

  // Bucle automático: imágenes por tiempo, videos al terminar
  useEffect(() => {
    if (lightbox !== null || dragging) return;

    const current = items[activeIndex];
    if (!current) return;

    if (current.type === "video") {
      const video = videoRefs.current[current.id];
      if (!video) {
        const fallback = window.setTimeout(() => goNext(), 8000);
        return () => window.clearTimeout(fallback);
      }

      let advanced = false;
      const advance = () => {
        if (advanced) return;
        advanced = true;
        goNext();
      };

      video.loop = false;
      video.addEventListener("ended", advance);
      const ms =
        Number.isFinite(video.duration) && video.duration > 0
          ? video.duration * 1000 + 800
          : 15000;
      const fallback = window.setTimeout(advance, ms);
      return () => {
        video.removeEventListener("ended", advance);
        window.clearTimeout(fallback);
      };
    }

    const timer = window.setTimeout(() => goNext(), 4500);
    return () => window.clearTimeout(timer);
  }, [activeIndex, lightbox, dragging]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        setLightbox((i) => (i === null ? i : (i + 1) % items.length));
      }
      if (e.key === "ArrowLeft") {
        setLightbox((i) =>
          i === null ? i : (i - 1 + items.length) % items.length,
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
    // Snap al más cercano
    requestAnimationFrame(() => {
      updateActiveFromScroll();
      const cards = Array.from(
        el.querySelectorAll<HTMLElement>("[data-gallery-card]"),
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

  const activeItem = lightbox !== null ? items[lightbox] : null;

  return (
    <section id="galeria" className="relative overflow-hidden bg-[#050910] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-sky/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-cyan">
            Resultados reales
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Antes / Después
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-white/60 md:text-lg">
            Arrastra para explorar transformaciones y procedimientos. Toca para
            ver en pantalla completa.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Pistas de desvanecido */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#050910] to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#050910] to-transparent md:w-24" />

          <div
            ref={trackRef}
            className={`gallery-track flex snap-x snap-mandatory gap-5 overflow-x-auto px-[12vw] pb-6 pt-4 md:gap-7 md:px-[22vw] ${
              dragging ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <article
                  key={item.id}
                  data-gallery-card
                  className={`gallery-card relative shrink-0 snap-center transition-all duration-500 ease-out ${
                    isActive
                      ? "z-20 scale-100 opacity-100"
                      : "z-10 scale-[0.88] opacity-45"
                  }`}
                  style={{ width: "min(78vw, 340px)" }}
                >
                  <button
                    type="button"
                    onClick={() => openItem(index)}
                    className={`group relative block w-full overflow-hidden rounded-2xl bg-black text-left ring-1 transition duration-500 ${
                      isActive
                        ? "shadow-[0_25px_80px_-20px_rgba(78,184,232,0.45)] ring-brand-sky/50"
                        : "shadow-2xl shadow-black/50 ring-white/10"
                    }`}
                    aria-label={`Ver ${item.title} en detalle`}
                  >
                    <div className="relative aspect-[3/4] w-full">
                      {item.type === "image" ? (
                        <Image
                          src={assetPath(item.src)}
                          alt={item.alt ?? item.title}
                          fill
                          className={`object-cover transition duration-700 ${
                            isActive ? "scale-100" : "scale-105"
                          } group-hover:scale-105`}
                          sizes="340px"
                          quality={95}
                          unoptimized
                          draggable={false}
                        />
                      ) : (
                        <>
                          <video
                            ref={(node) => {
                              videoRefs.current[item.id] = node;
                            }}
                            className="h-full w-full object-cover"
                            src={assetPath(item.src)}
                            muted
                            playsInline
                            preload="metadata"
                            draggable={false}
                          />
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <span
                              className={`flex h-14 w-14 items-center justify-center rounded-full bg-black/45 ring-1 ring-white/30 backdrop-blur-md transition ${
                                isActive ? "opacity-0" : "opacity-100"
                              }`}
                            >
                              <svg
                                viewBox="0 0 24 24"
                                className="ml-0.5 h-6 w-6 fill-white"
                                aria-hidden
                              >
                                <path d="M8 5v14l11-7L8 5Z" />
                              </svg>
                            </span>
                          </div>
                        </>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-cyan">
                          {item.subtitle}
                        </p>
                        <h3 className="mt-1.5 text-lg font-semibold leading-snug text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-xs font-medium text-white/50 transition group-hover:text-brand-cyan">
                          Ver en pantalla completa →
                        </p>
                      </div>

                      {item.type === "image" && (
                        <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 ring-1 ring-white/15 backdrop-blur-sm">
                          Antes / Después
                        </div>
                      )}
                      {item.type === "video" && (
                        <div className="absolute left-4 top-4 rounded-full bg-brand-sky/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-cyan ring-1 ring-brand-sky/40 backdrop-blur-sm">
                          Video
                        </div>
                      )}
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        {/* Dots + nav */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() =>
              scrollToIndex((activeIndex - 1 + items.length) % items.length)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-brand-cyan hover:text-brand-cyan"
            aria-label="Anterior"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-brand-sky"
                    : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Ir a ${item.title}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToIndex((activeIndex + 1) % items.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-brand-cyan hover:text-brand-cyan"
            aria-label="Siguiente"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && activeItem && (
        <div
          className="lightbox-enter fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 md:right-8 md:top-8"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 md:flex"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) =>
                i === null ? i : (i - 1 + items.length) % items.length,
              );
            }}
            aria-label="Anterior"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 md:flex"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? i : (i + 1) % items.length));
            }}
            aria-label="Siguiente"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className="lightbox-media relative flex max-h-[88vh] w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-black ring-1 ring-white/15 shadow-[0_0_80px_-20px_rgba(78,184,232,0.35)]">
              {activeItem.type === "image" ? (
                <div className="relative mx-auto aspect-[3/4] max-h-[75vh] w-full max-w-lg">
                  <Image
                    src={assetPath(activeItem.src)}
                    alt={activeItem.alt ?? activeItem.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 512px"
                    quality={100}
                    unoptimized
                    priority
                  />
                </div>
              ) : (
                <video
                  key={activeItem.id}
                  className="mx-auto max-h-[75vh] w-full bg-black object-contain"
                  src={assetPath(activeItem.src)}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                />
              )}
            </div>
            <div className="mt-5 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-cyan">
                {activeItem.subtitle}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">
                {activeItem.title}
              </h3>
              <p className="mt-2 text-sm text-white/45">
                {lightbox + 1} / {items.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
