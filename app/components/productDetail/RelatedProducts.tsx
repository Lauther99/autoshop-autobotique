"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { products as fallbackProducts } from "@/data/products";
import { useProductStore } from "@/store/productStore";
import { currencies, Product } from "@/types/product";

interface Props {
  currentProduct: Product;
}

function getSlug(product: Product) {
  const brand = product.brand ?? "";
  const slugParts = [];

  if (brand) {
    slugParts.push(
      brand
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""),
    );
  }

  slugParts.push(
    product.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
  );

  return `${slugParts.join("-")}-${product.id}`;
}

export default function RelatedProducts({ currentProduct }: Props) {
  const storeProducts = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);

  useEffect(() => {
    if (!storeProducts.length) {
      setProducts(fallbackProducts);
    }
  }, [storeProducts.length, setProducts]);

  const productsSource = storeProducts.length
    ? storeProducts
    : fallbackProducts;

  const related = useMemo(() => {
    const sameCategory = productsSource.filter(
      (p) =>
        p.id !== currentProduct.id && p.category === currentProduct.category,
    );
    return sameCategory;
  }, [productsSource, currentProduct.id, currentProduct.category]);

  if (related.length === 0) return null;

  return (
    <section className="mt-20 border-t border-[#222] pt-12">
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-[2rem] font-extrabold uppercase text-[var(--text-white)]">
          Productos <span className="text-[var(--primary-red)]">Similares</span>
        </h2>
      </div>

      <div
        className="
    flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory
    scrollbar-thin
    scrollbar-track-transparent
    scrollbar-thumb-neutral-700
    hover:scrollbar-thumb-[var(--primary-red)]
  "
      >
        {related.map((product) => (
          <Link
            key={product.id}
            href={`/tienda/${getSlug(product)}`}
            className="min-w-[220px] max-w-[220px] snap-start overflow-hidden rounded-lg border border-[#222] bg-[var(--bg-card)] transition hover:border-[#333]"
          >
            <div className="relative h-[170px] bg-[#414141]">
              <Image
                src={product.images?.[0] ?? "/not_found_product.png"}
                alt={product.title}
                fill
                style={{ objectFit: "contain" }}
                className="p-3"
              />
            </div>
            <div className="p-3.5">
              <div className="mb-1 text-xs font-bold uppercase text-[var(--primary-red)]">
                {product.category}
              </div>
              <div className="mb-2 line-clamp-2 min-h-[40px] text-sm font-semibold text-[var(--text-white)]">
                {product.title}
              </div>
              <div className="text-lg font-bold text-[var(--primary-red)]">
                {currencies[product.currency]}
                {product.price.toFixed(2)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
