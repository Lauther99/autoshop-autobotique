"use client";
import { useProductStore } from "@/store/productStore";

export default function ShopHeader() {
  const sortProducts = useProductStore((state) => state.sortProducts);

  return (
    <header className="shop-header">
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: "0.9rem", color: "#888" }}>Ordenar por:</span>
        <select
          onChange={(e) => sortProducts(e.target.value as any)}
          style={{ padding: "8px", borderRadius: "6px" }}
          className="sort-select"
        >
          <option value="price-asc">Menor Precio</option>
          <option value="price-desc">Mayor Precio</option>
        </select>
      </div>
    </header>
  );
}
