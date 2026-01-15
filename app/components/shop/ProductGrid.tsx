"use client";
import { useProductStore } from "@/store/productStore";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const products = useProductStore(s => s.paginatedProducts)

  return (
    <div className="shop-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
