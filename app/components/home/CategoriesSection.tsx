"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useProductStore } from "@/store/productStore";
import { products as fallbackProducts } from "@/data/products";

function pickIcon(index: number) {
  const icons = [
    <svg key="i1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="7" width="20" height="13" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>,
    <svg key="i2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="10" width="18" height="4" rx="1" />
      <path d="M5 10V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
    </svg>,
    <svg key="i3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
    </svg>,
    <svg key="i4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="9" width="20" height="6" rx="2" />
      <path d="M6 9V7M18 9V7M4 15v2M20 15v2" />
    </svg>,
  ];

  return icons[index % icons.length];
}

export default function CategoriesSection() {
  const storeProducts = useProductStore((state) => state.products);
  const source = storeProducts.length ? storeProducts : fallbackProducts;

  const categories = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of source) {
      const key = p.category?.trim();
      if (!key) continue;
      map.set(key, (map.get(key) ?? 0) + 1);
    }

    return Array.from(map.entries())
      .map(([slug, count]) => ({ slug, label: slug, count }))
      .sort((a, b) => b.count - a.count);
  }, [source]);

  if (!categories.length) return null;

  return (
    <section className="py-[70px]">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="mb-10 flex flex-col items-start justify-between gap-3 border-b-2 border-[#222] pb-3 sm:flex-row sm:items-end">
          <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-extrabold uppercase text-[var(--text-white)]">
            EXPLORAR POR <span className="text-[var(--primary-red)]">CATEGORIA</span>
          </h2>
          <Link
            href="/tienda"
            className="text-sm font-semibold text-[var(--primary-red)] transition-colors hover:text-[#ff4d4d]"
          >
            Ver todo &#8599;
          </Link>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                href={`/tienda?cat=${encodeURIComponent(cat.slug)}`}
                className="group flex h-full flex-col items-center gap-3.5 rounded-xl border border-[#222] bg-[var(--bg-card)] px-5 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-red)] hover:bg-[rgba(255,26,26,0.04)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[14px] border border-[rgba(255,26,26,0.15)] bg-[rgba(255,26,26,0.08)] text-[var(--primary-red)]">
                  {pickIcon(i)}
                </div>

                <div>
                  <div className="mb-1 text-[0.95rem] font-bold text-[var(--text-white)]">{cat.label}</div>
                  <div className="text-xs text-[#666]">{cat.count} productos</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
