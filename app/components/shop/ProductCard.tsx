"use client";

import Link from "next/link";
import { currencies, Product } from "@/types/product";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore();

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

  const slug = `${slugParts.join("-")}-${product.id}`;

  return (
    <Link href={`/tienda/${slug}`} className="shop-card">
      <div className="shop-image-container">
        <Image
          src={product.images?.[0] ?? "/not_found_product.png"}
          alt={product.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="shop-info">
        <div className="brand-label">{product.brand}</div>
        <div className="shop-title">{product.title}</div>
        <div className="shop-price">
          {currencies[product.currency]}
          {product.price.toFixed(2)}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();

            addItem({
              id: product.id,
              title: product.title,
              price: product.price,
              quantity: 1,
              image: product.images ? product.images[0] : "",
              sku: product.sku ?? "",
              currency: product.currency,
              stock: product.stock,
              isFreeShipping: product.isFreeShipping,
              backorder: product.backorder,
              backorderDays: product.backorderDays,
              backorderQty: 0,
            });
          }}
          className="btn-add-cart"
        >
          Añadir al Carrito
        </button>
      </div>
    </Link>
  );
}
