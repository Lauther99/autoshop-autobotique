"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { STATIC_CATEGORIES } from "@/docs/categories";

export default function CategoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 400 : -400, behavior: "smooth" });
  };

  return (
    <section className="py-[70px]">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="mb-10 flex flex-row items-center justify-between gap-2">
          <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-extrabold uppercase text-[var(--text-white)]">
            EXPLORAR POR{" "}
            <span className="text-[var(--primary-red)]">CATEGORIA</span>
          </h2>
          <Link
            href="/tienda"
            className="text-sm text-[var(--primary-red)] transition-colors hover:text-[#ff4d4d]"
          >
            Ver todo →
          </Link>
        </div>

        <div className="relative">
          {/* flecha izquierda */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary-red)] text-[#ccc] shadow-lg transition-colors hover:bg-[var(--color-bg)]/90 hover:border hover:border-[var(--primary-red)] hover:text-[var(--primary-red)] cursor-pointer"
            aria-label="Scroll izquierda"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* flecha derecha */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary-red)] text-[#ccc] shadow-lg transition-colors hover:bg-[var(--color-bg)]/90 hover:border hover:border-[var(--primary-red)] hover:text-[var(--primary-red)] cursor-pointer"
            aria-label="Scroll derecha"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="grid grid-rows-2 grid-flow-col gap-3 auto-cols-[140px] sm:auto-cols-[160px] md:auto-cols-[180px]">
              {STATIC_CATEGORIES.map((cat, i) => (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <Link
                    href={`/tienda?cat=${encodeURIComponent(cat.slug)}`}
                    className="group flex flex-col items-center gap-2 text-center"
                  >
                    <div className="relative w-full overflow-hidden rounded-2xl aspect-square bg-[#141414]">
                      <Image
                        src={cat.img}
                        alt={cat.tag}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="180px"
                      />
                    </div>
                    <span className="text-[0.78rem] font-bold uppercase tracking-wide text-[var(--text-white)] transition-colors group-hover:text-[var(--primary-red)]">
                      {cat.tag}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
