"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

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
  const { items, addItem, updateQuantity } = useCartStore();

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

      <div>
        <div className="purchase-controls">
          {/* <div className="qty-selector">
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
        </div> */}
          <button
            style={{}}
            className="btn-add"
            disabled={!inStock && !backorder}
            onClick={() => {
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
          >
            Añadir al Carrito
          </button>
        </div>
        {!inStock && !backorder && (
          <button className="btn-buy-now" disabled={!inStock && !backorder}>
            Consultar con un vendedor
          </button>
        )}
      </div>
    </div>
  );
}
