"use client";
import { useProductStore } from "@/store/productStore";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import PriceRangeSlider from "./ui/PriceRangeSlider";
import { MdCleaningServices } from "react-icons/md";

export default function ShopFilters() {
  const products = useProductStore((state) => state.products);
  const priceRange = useProductStore((state) => state.priceRange);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const categories = [...new Set(products.map((p) => p.category.trim()))];
  const brands = [...new Set(products.map((p) => String(p.brand).trim()))];

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
    sortProducts(searchParams.get("sort") || ("price-desc" as any));
    goToPage(1);
    // luego actualizar URL
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
    <aside className="shop-sidebar">
      <div className="filter-section">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ marginRight: 5 }}
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <h4 className="filter-title" style={{ marginBottom: "0" }}>
              Filtros
            </h4>
          </div>
          <div
            className="filter-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              onClick={handleReset}
              style={{
                fontSize: "12px",
                color: "red",
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
            >
              <MdCleaningServices style={{ width: "18px", height: "18px" }} />
            </button>
          </div>
        </div>
      </div>
      {/* FILTROS CATEGORIAS */}
      <div className="filter-section">
        <div className="filter-title">Categorías</div>
        <ul className="category-list">
          {categories.map((cat) => {
            const selected = filters.categories.includes(cat);

            return (
              <li
                key={cat}
                className={`${selected ? "active" : ""}`}
                onClick={() => toggleFilter("categories", cat)}
              >
                {cat}
              </li>
            );
          })}
        </ul>
      </div>
      {/* SLIDER DE PRECIOS */}
      <PriceRangeSlider
        min={priceRange.min}
        max={priceRange.max}
        valueMin={filters.minPrice} // Bien: le pasas lo que el usuario eligió (o lo que viene de la URL)
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

      {/* FILTROS BRANDS */}
      <div className="filter-section">
        <div className="filter-title">Marcas Populares</div>
        <div className="brand-tags">
          {brands.map((brand) => {
            const selected = filters.brands.includes(String(brand));

            return (
              <span
                key={brand}
                className={`brand-tag ${selected ? "active" : ""}`}
                onClick={() => toggleFilter("brands", String(brand))}
              >
                {brand}
              </span>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
