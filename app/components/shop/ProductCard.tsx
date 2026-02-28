"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { currencies, Product } from "@/types/product";

export default function ProductCard({
  product,
  setOpenToast,
  setToastMessage,
}: {
  product: Product;
  setOpenToast: (value: boolean) => void;
  setToastMessage: (value: string) => void;
}) {
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

  const inStock = product.stock > 0;
  const backorder = product.stock === 0 && product.backorder;

  return (
    <Link
      href={`/tienda/${slug}`}
      className="flex flex-col overflow-hidden rounded-lg bg-[var(--bg-card)] transition border border-black/5"
    >
      <div className="relative flex h-[220px] items-center justify-center bg-[#fff] p-5">
        <Image
          src={product.images?.[0] ?? "/not_found_product.png"}
          alt={product.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs font-bold uppercase text-[var(--primary-red)]">{product.brand}</div>
        <div className="mb-2.5 flex-1 text-base font-semibold leading-[1.4]">{product.title}</div>
        <div className="mb-3.5 text-[1.3rem] font-bold text-[var(--primary-red)]">
          {currencies[product.currency]}
          {product.price.toFixed(2)}
        </div>
        <button
          disabled={!inStock && !backorder}
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

            setOpenToast(true);
            setToastMessage("Producto agregado.");
          }}
          className="w-full rounded border border-[#333] bg-[#202020] px-3 py-2.5 text-xs font-semibold uppercase text-[#ccc] transition hover:border-[var(--primary-red)] hover:bg-[var(--primary-red)] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Anadir al carrito
        </button>
      </div>
    </Link>
  );
}
