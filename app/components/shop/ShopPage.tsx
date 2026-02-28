"use client";

import { products } from "@/data/products";
import ShopBreadcrumbs from "./ShopBreadcrumbs";
import ShopFilters from "./ShopFilters";
import ShopHeader from "./ShopHeader";
import ProductGrid from "./ProductGrid";
import ShopPagination from "./ShopPagination";
import { useEffect } from "react";
import { useProductStore } from "@/store/productStore";
import { useSearchParams } from "next/navigation";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const goToPage = useProductStore((s) => s.goToPage);
  const setProducts = useProductStore((state) => state.setProducts);
  const setFilter = useProductStore((s) => s.setFilter);
  const applyFilters = useProductStore((s) => s.applyFilters);
  const setSortType = useProductStore((s) => s.setSortType);

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
      <div className="relative flex flex-col gap-[30px] py-10 min-[901px]:flex-row">
        <ShopFilters />
        <div className="flex-1">
          <ShopHeader />
          <ProductGrid />
          <ShopPagination />
        </div>
      </div>
    </div>
  );
}
