"use client";

import ShopBreadcrumbs from "./ShopBreadcrumbs";
import ShopFilters from "./ShopFilters";
import ShopHeader from "./ShopHeader";
import ProductGrid from "./ProductGrid";
import ShopPagination from "./ShopPagination";
import PriceRangeSlider from "./ui/PriceRangeSlider";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/productStore";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Product } from "@/types/product";
import SearchBar from "@/app/components/layout/SearchBar";
import { motion, AnimatePresence } from "framer-motion";
import { STATIC_BRANDS, STATIC_CATEGORIES } from "@/docs/categories";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

interface Props {
  products: Product[];
}

const SORT_OPTIONS = [
  { value: "price-asc", label: "Menor precio", icon: FaArrowTrendDown },
  { value: "price-desc", label: "Mayor precio", icon: FaArrowTrendUp },
] as const;

type SortValue = (typeof SORT_OPTIONS)[number]["value"];

export default function ShopPage({ products }: Props) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [pendingSort, setPendingSort] = useState<SortValue>("price-desc");
  const [pendingCats, setPendingCats] = useState<string[]>([]);
  const [pendingBrands, setPendingBrands] = useState<string[]>([]);
  const [pendingMin, setPendingMin] = useState<number | null>(null);
  const [pendingMax, setPendingMax] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const goToPage = useProductStore((s) => s.goToPage);
  const setProducts = useProductStore((state) => state.setProducts);
  const setFilter = useProductStore((s) => s.setFilter);
  const applyFilters = useProductStore((s) => s.applyFilters);
  const setSortType = useProductStore((s) => s.setSortType);
  const priceRange = useProductStore((s) => s.priceRange);
  const filters = useProductStore((s) => s.filters);

  const openFilters = () => {
    setPendingCats(filters.categories);
    setPendingBrands(filters.brands);
    setPendingMin(filters.minPrice);
    setPendingMax(filters.maxPrice);
    setFiltersOpen(true);
  };

  const applyMobileFilters = () => {
    setFilter("categories", pendingCats);
    setFilter("brands", pendingBrands);
    setFilter("minPrice", pendingMin ?? priceRange.min);
    setFilter("maxPrice", pendingMax ?? priceRange.max);
    applyFilters();
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", "1");
    if (pendingCats.length > 0) params.set("cat", pendingCats.join(",")); else params.delete("cat");
    if (pendingBrands.length > 0) params.set("brand", pendingBrands.join(",")); else params.delete("brand");
    if (pendingMin) params.set("price_min", String(pendingMin)); else params.delete("price_min");
    if (pendingMax) params.set("price_max", String(pendingMax)); else params.delete("price_max");
    router.replace(`${pathname}?${params.toString()}`);
    setFiltersOpen(false);
  };

  const togglePending = (key: "cats" | "brands", value: string) => {
    const setter = key === "cats" ? setPendingCats : setPendingBrands;
    const current = key === "cats" ? pendingCats : pendingBrands;
    setter(current.includes(value) ? current.filter((v) => v !== value) : [...current, value]);
  };

  useEffect(() => {
    setProducts(products);

    const sort = searchParams.get("sort") || "price-desc";
    const page = Number(searchParams.get("page")) || 1;
    const cats = searchParams.get("cat")?.split(",").filter(Boolean) || [];
    const brands = searchParams.get("brand")?.split(",").filter(Boolean) || [];

    const { priceRange } = useProductStore.getState();
    const urlMin = searchParams.get("price_min");
    const urlMax = searchParams.get("price_max");

    let finalMin = urlMin ? Number(urlMin) : priceRange.min;
    let finalMax = urlMax ? Number(urlMax) : priceRange.max;

    if (finalMin < priceRange.min) finalMin = priceRange.min;
    if (finalMax > priceRange.max) finalMax = priceRange.max;

    if (finalMin > finalMax) finalMin = priceRange.min;

    setFilter("minPrice", finalMin);
    setFilter("maxPrice", finalMax);
    setFilter("categories", cats);
    setFilter("brands", brands);

    applyFilters();
    setSortType(sort);
    goToPage(page);
  }, [searchParams, setProducts, applyFilters, goToPage, setFilter, setSortType]);

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5">
      <ShopBreadcrumbs />

      {/* Mobile header */}
      <div className="mb-4 min-[901px]:hidden">
        <h2 className="mb-3 text-[1.8rem]">Tienda</h2>
        <SearchBar className="relative w-full mb-3" />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={openFilters}
            className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#333] bg-[#1f1f1f] px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="4" x2="20" y1="6" y2="6" /><line x1="8" x2="16" y1="12" y2="12" /><line x1="11" x2="13" y1="18" y2="18" />
            </svg>
            Filtros
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setSortOpen(true)}
            className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#333] bg-[#1f1f1f] px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white"
          >
            Ordenar por
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative flex flex-col pb-5 min-[901px]:flex-row min-[901px]:gap-15">
        <ShopFilters />
        <div className="flex-1">
          <ShopHeader />
          <ProductGrid />
          <ShopPagination />
        </div>
      </div>

      {/* Modal filtros */}
      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col justify-end min-[901px]:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFiltersOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[10px]" />
            <motion.div
              className="relative flex max-h-[80%] w-full flex-col rounded-t-2xl bg-[#161616]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-1 shrink-0">
                <div className="h-1 w-10 rounded-full bg-white/20" />
              </div>

              {/* Header */}
              <div className="flex shrink-0 items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" fill="none" stroke="var(--primary-red)" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="4" x2="20" y1="6" y2="6" /><line x1="8" x2="16" y1="12" y2="12" /><line x1="11" x2="13" y1="18" y2="18" />
                  </svg>
                  <span className="text-base font-black uppercase tracking-widest text-white">Filtros</span>
                </div>
                <button type="button" onClick={() => setFiltersOpen(false)} className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto px-6 pb-4">

                {/* Categorías */}
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--primary-red)]">Categorías</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {STATIC_CATEGORIES.map((cat) => {
                    const selected = pendingCats.includes(cat.value);
                    return (
                      <button
                        key={cat.value}
                        type="button"
                        onClick={() => togglePending("cats", cat.value)}
                        className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                          selected
                            ? "bg-[var(--primary-red)] text-white"
                            : "bg-[#2a2a2a] text-white/70"
                        }`}
                      >
                        {cat.tag}
                      </button>
                    );
                  })}
                </div>

                {/* Rango de precio */}
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--primary-red)]">Rango de precio</p>
                <div className="mb-6">
                  <PriceRangeSlider
                    min={priceRange.min}
                    max={priceRange.max}
                    valueMin={pendingMin ?? priceRange.min}
                    valueMax={pendingMax ?? priceRange.max}
                    onChange={(min, max) => { setPendingMin(min); setPendingMax(max); }}
                    onMouseUp={() => {}}
                  />
                </div>

                {/* Marcas */}
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--primary-red)]">Marcas populares</p>
                <div className="flex flex-wrap gap-2">
                  {STATIC_BRANDS.map((brand) => {
                    const selected = pendingBrands.includes(brand.value);
                    return (
                      <button
                        key={brand.value}
                        type="button"
                        onClick={() => togglePending("brands", brand.value)}
                        className={`rounded-xl border px-3 py-2 text-sm transition-colors ${
                          selected
                            ? "border-[var(--primary-red)] bg-[rgba(255,26,26,0.1)] text-[var(--primary-red)]"
                            : "border-[#333] bg-[#2a2a2a] text-white/70"
                        }`}
                      >
                        {brand.tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Footer buttons */}
              <div className="flex shrink-0 gap-3 border-t border-white/10 px-6 py-5">
                <button
                  type="button"
                  onClick={() => {
                    setPendingCats([]);
                    setPendingBrands([]);
                    setPendingMin(priceRange.min);
                    setPendingMax(priceRange.max);
                  }}
                  className="flex-1 rounded-full border border-white/20 py-4 text-sm font-black uppercase tracking-widest text-white"
                >
                  Limpiar
                </button>
                <button
                  type="button"
                  onClick={applyMobileFilters}
                  className="flex-[2] rounded-full bg-[var(--primary-red)] py-4 text-sm font-black uppercase tracking-widest text-white"
                >
                  Aplicar filtros
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal ordenar */}
      <AnimatePresence>
        {sortOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col justify-end min-[901px]:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSortOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[10px]" />
            <motion.div
              className="relative w-full rounded-t-2xl bg-[#161616] pb-8"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="h-1 w-10 rounded-full bg-white/20" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4">
                <span className="text-base font-black uppercase tracking-widest text-white">Ordenar por</span>
                <button
                  type="button"
                  onClick={() => setSortOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white"
                >
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Options */}
              <ul className="px-4">
                {SORT_OPTIONS.map((opt) => (
                  <li key={opt.value}>
                    <button
                      type="button"
                      onClick={() => setPendingSort(opt.value)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-4 transition-colors hover:bg-white/5"
                    >
                      <span className="flex items-center gap-2.5 text-[0.95rem] text-white">
                        <opt.icon style={{ color: "rgb(255, 0, 0)" }} />
                        {opt.label}
                      </span>
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                        pendingSort === opt.value ? "border-[var(--primary-red)]" : "border-white/30"
                      }`}>
                        {pendingSort === opt.value && (
                          <span className="h-2.5 w-2.5 rounded-full bg-[var(--primary-red)]" />
                        )}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Apply button */}
              <div className="mt-4 px-4">
                <button
                  type="button"
                  onClick={() => {
                    setSortType(pendingSort);
                    const params = new URLSearchParams(searchParams.toString());
                    params.set("sort", pendingSort);
                    params.set("page", "1");
                    router.replace(`${pathname}?${params.toString()}`);
                    setSortOpen(false);
                  }}
                  className="w-full rounded-full bg-[var(--primary-red)] py-4 text-sm font-black uppercase tracking-widest text-white"
                >
                  Aplicar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
