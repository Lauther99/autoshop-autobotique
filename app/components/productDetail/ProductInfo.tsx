"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import Toast from "@/app/components/ui/Toast";

type CurrencyCode = "SOL" | "MXN" | "USD" | string;

const currencies: Record<CurrencyCode, string> = {
  SOL: "S/",
  MXN: "$",
  USD: "$",
};

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  const { addItem } = useCartStore();

  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!openToast) return;
    const timer = setTimeout(() => {
      setOpenToast(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [openToast]);


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
      <h1 className="p-title font-bold">{product.title}</h1>

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

      <p className="text-gray mb-[30px] border-b border-[#333] pb-[30px] leading-[1.6]">{product.description}</p>

      <div className="mb-[30px] rounded-xl border border-[rgba(255,26,26,0.25)] bg-[rgba(255,26,26,0.06)] p-4">
        <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-[var(--primary-red)]">
          Informacion de entrega
        </h4>
        <ul className="space-y-1.5 text-sm leading-relaxed text-[var(--text-white)]">
          <li>Envio gratis a todo Piura.</li>
          <li>Delivery fuera de Piura: entre 3 y 5 dias habiles.</li>
          <li>Retiro en tienda gratis en horario de atencion.</li>
        </ul>
      </div>

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
              setOpenToast(true)
              setToastMessage("Producto agregado.")
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
      <div className={`toast-wrapper ${openToast ? "active" : ""}`}>
        <Toast
          title="Bien hecho!"
          message={toastMessage}
          type="success"
          onClose={() => setOpenToast(false)}
        />
      </div>
    </div>
  );
}
