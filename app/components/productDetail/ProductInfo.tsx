"use client";

import { useState } from "react";
import { Product } from "@/types/product";

type CurrencyCode = "SOL" | "MXN" | "USD" | any;

const currencies: Record<CurrencyCode, string> = {
  SOL: "S/",
  MXN: "$",
  USD: "$",
};

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  const [quantity, setQuantity] = useState(1);

  const inStock = product.stock > 0;
  const backorder = product.stock === 0 && product.backorder;

  return (
    <div className="product-info-col">
      {product.brand && (
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
        >
          <span className="badge-sold">{product.brand}</span>
        </div>
      )}
      <h1 className="p-title">{product.title}</h1>

      <div className="p-price">
        {currencies[product.currency]}
        {product.price}
      </div>

      {inStock && <div className="shipping-promo">Disponible</div>}
      {backorder && (
        <div className="shipping-promo">
          Disponible bajo pedido (Entrega en {product.backorderDays} días)
        </div>
      )}
      {!inStock && !backorder && (
        <div className="shipping-promo">No disponible</div>
      )}

      <p className="p-description-short">{product.description}</p>

      <div className="purchase-controls">
        <div className="qty-selector">
          <button
            className="qty-btn"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <input type="text" className="qty-input" value={quantity} readOnly />
          <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
        </div>
        <button className="btn-add" disabled={!inStock && !backorder}>
          Añadir al Carrito
        </button>
      </div>

      <button className="btn-buy-now" disabled={!inStock && !backorder}>
        Comprar Ahora
      </button>
    </div>
  );
}
