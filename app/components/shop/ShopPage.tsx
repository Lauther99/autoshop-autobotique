"use client";

import "./styles.css";
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
    const min = searchParams.get("price_min")
      ? Number(searchParams.get("price_min"))
      : priceRange.min;
    const max = searchParams.get("price_max")
      ? Number(searchParams.get("price_max"))
      : priceRange.max;

    setFilter("categories", cats);
    setFilter("brands", brands);
    setFilter("minPrice", min);
    setFilter("maxPrice", max);

    applyFilters();
    setSortType(sort);
    goToPage(page);
  }, [searchParams, setProducts]);

  return (
    <div className="container">
      <ShopBreadcrumbs />
      <div className="shop-container">
        <ShopFilters />
        <div className="shop-content">
          <ShopHeader />
          <ProductGrid />
          <ShopPagination />
        </div>
      </div>
    </div>
  );
}
