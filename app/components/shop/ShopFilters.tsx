"use client";

import { useState } from "react";
// import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { MdCleaningServices } from "react-icons/md";
import PriceRangeSlider from "./ui/PriceRangeSlider";
import { useProductStore } from "@/store/productStore";
import { STATIC_BRANDS, STATIC_CATEGORIES } from "@/docs/categories";

type SortType = "price-asc" | "price-desc";

export default function ShopFilters() {
  const priceRange = useProductStore((state) => state.priceRange);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const filters = useProductStore((s) => s.filters);
  const setFilter = useProductStore((s) => s.setFilter);
  const applyFilters = useProductStore((s) => s.applyFilters);
  const sortProducts = useProductStore((s) => s.sortProducts);
  const goToPage = useProductStore((s) => s.goToPage);

  const handleReset = () => {
    router.push(pathname);
  };

  const toggleFilter = (key: "categories" | "brands", value: string) => {
    let arr = [...filters[key]];

    if (arr.includes(value)) {
      arr = arr.filter((v) => v !== value);
    } else {
      arr.push(value);
    }

    setFilter(key, arr);
    applyFilters();
    const sort = (searchParams.get("sort") as SortType) || "price-desc";
    sortProducts(sort);
    goToPage(1);
    updateURL();
  };

  const updateURL = () => {
    const { filters } = useProductStore.getState();
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", "1");

    if (filters.categories.length > 0) {
      params.set("cat", filters.categories.join(","));
    } else {
      params.delete("cat");
    }

    if (filters.brands.length > 0) {
      params.set("brand", filters.brands.join(","));
    } else {
      params.delete("brand");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const updateURLWithPriceRange = (min: number, max: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", "1");

    if (min) {
      params.set("price_min", String(min));
    } else {
      params.delete("price_min");
    }

    if (max) {
      params.set("price_max", String(max));
    } else {
      params.delete("price_max");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <aside className="w-full shrink-0 min-[901px]:w-[280px]">
      <div className="mb-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="mr-1"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <h4 className="mb-0 text-[0.85rem] font-bold uppercase tracking-[1px] text-text">Filtros</h4>
          </div>
          <button
            onClick={handleReset}
            className="cursor-pointer border-none bg-transparent text-xs text-red-500 transition-colors hover:text-red-400"
            aria-label="Limpiar filtros"
          >
            <MdCleaningServices className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>

      {/* CATEGORIAS */}
      <div className="mb-7">
        <button
          type="button"
          onClick={() => setIsCategoriesOpen((prev) => !prev)}
          className="mb-4 flex w-full items-center justify-between text-[0.85rem] font-bold uppercase tracking-[1px] text-text"
          aria-expanded={isCategoriesOpen}
        >
          <span>Categorias</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {isCategoriesOpen && (
          <ul className="space-y-1">
            {STATIC_CATEGORIES.map((cat) => {
              const selected = filters.categories.includes(cat.value);

              return (
                <li
                  key={cat.value}
                  className={`flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2.5 text-[0.9rem] transition-colors ${
                    selected
                      ? "border-l-[3px] border-[var(--primary-red)] bg-[rgba(255,26,26,0.1)] text-[var(--primary-red)]"
                      : "text-gray hover:bg-[#1a1a1a] hover:text-white"
                  }`}
                  onClick={() => toggleFilter("categories", cat.value)}
                >
                  {/* <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-sm">
                    <Image
                      src={cat.img}
                      alt={cat.tag}
                      fill
                      className="object-contain"
                    />
                  </div> */}
                  <span>{cat.tag}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* RANGO DE PRECIO */}
      <div className="mb-7">
        <button
          type="button"
          onClick={() => setIsPriceOpen((prev) => !prev)}
          className="mb-4 flex w-full items-center justify-between text-[0.85rem] font-bold uppercase tracking-[1px] text-text"
          aria-expanded={isPriceOpen}
        >
          <span>Rango de Precio</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform ${isPriceOpen ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {isPriceOpen && (
          <PriceRangeSlider
            min={priceRange.min}
            max={priceRange.max}
            valueMin={filters.minPrice}
            valueMax={filters.maxPrice}
            onChange={(min, max) => {
              setFilter("minPrice", min);
              setFilter("maxPrice", max);
              applyFilters();
            }}
            onMouseUp={(min, max) => {
              updateURLWithPriceRange(min, max);
            }}
          />
        )}
      </div>

      {/* MARCAS */}
      <div className="mb-7">
        <button
          type="button"
          onClick={() => setIsBrandsOpen((prev) => !prev)}
          className="mb-4 flex w-full items-center justify-between text-[0.85rem] font-bold uppercase tracking-[1px] text-text"
          aria-expanded={isBrandsOpen}
        >
          <span>Marcas Populares</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform ${isBrandsOpen ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {isBrandsOpen && (
          <div className="flex flex-wrap gap-2">
            {STATIC_BRANDS.map((brand) => {
              const selected = filters.brands.includes(brand.value);

              return (
                <button
                  key={brand.value}
                  type="button"
                  onClick={() => toggleFilter("brands", brand.value)}
                  className={`flex cursor-pointer items-center gap-1.5 rounded border px-2.5 py-1.5 text-[0.8rem] transition-colors ${
                    selected
                      ? "border-[var(--primary-red)] bg-[rgba(255,26,26,0.1)] text-[var(--primary-red)]"
                      : "border-[#333] bg-[#1f1f1f] text-[#ccc] hover:border-[var(--primary-red)] hover:text-white"
                  }`}
                >
                  {/* <div className="relative h-5 w-5 shrink-0 overflow-hidden rounded-sm">
                    <Image
                      src={brand.img}
                      alt={brand.tag}
                      fill
                      className="object-contain"
                    />
                  </div> */}
                  {brand.tag}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
