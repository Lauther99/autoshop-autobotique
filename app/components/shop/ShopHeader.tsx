"use client";
import { useProductStore } from "@/store/productStore";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ShopHeader() {
  const sortProducts = useProductStore((state) => state.sortProducts);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSort = (value: string) => {
    sortProducts(value as any);

    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    params.set("page", "1");

    router.replace(`${pathname}?${params.toString()}`);
  };


  return (
    <header className="shop-header">
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: "0.9rem", color: "#888" }}>Ordenar por:</span>
        <select
          onChange={(e) => handleSort(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px" }}
          className="sort-select"
          defaultValue={searchParams.get("sort") || "price-asc"}
        >
          <option value="price-asc">Menor Precio</option>
          <option value="price-desc">Mayor Precio</option>
        </select>
      </div>
    </header>
  );
}
