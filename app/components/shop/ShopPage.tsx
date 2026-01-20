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
  const sortProducts = useProductStore((s) => s.sortProducts);
  const priceRange = useProductStore((state) => state.priceRange);

  useEffect(() => {
    setProducts(products);

    const sort = searchParams.get("sort") || "price-asc";
    const page = Number(searchParams.get("page")) || 1;
    const cats = searchParams.get("cat")?.split(",") || [];
    const brands = searchParams.get("brand")?.split(",") || [];
    const min = Number(searchParams.get("price_min")) || priceRange.min;
    const max = Number(searchParams.get("price_max")) || priceRange.max;

    setFilter("categories", cats);
    setFilter("brands", brands);
    setFilter("minPrice", min);
    setFilter("maxPrice", max);

    applyFilters();
    sortProducts(sort as any);
    goToPage(page);
  }, [products, searchParams, setProducts, sortProducts, goToPage]);

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
