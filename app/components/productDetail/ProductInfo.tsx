"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import Toast from "@/app/components/ui/Toast";
import { FaStore, FaTruck, FaLocationDot, FaEarthAmericas } from "react-icons/fa6";

type CurrencyCode = "SOL" | "MXN" | "USD" | string;

const currencies: Record<CurrencyCode, string> = {
  SOL: "S/",
  MXN: "$",
  USD: "$",
};

interface Props {
  product: Product;
}


function IconPin() {
  return <FaLocationDot size={18} color="var(--primary-red)" />;
}

function IconTruck() {
  return <FaTruck size={18} color="var(--primary-red)" />;
}

function IconStore() {
  return <FaStore size={18} color="var(--primary-red)" />;
}

function IconGlobe() {
  return <FaEarthAmericas size={18} color="var(--primary-red)" />;
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

      <p className="text-gray mb-[30px] border-b border-[#333] pb-[30px] leading-[1.6]">
        {product.description}
      </p>

      <div className="mb-[30px] rounded-xl border border-[#2a2a2a] bg-[#111]/80 p-4">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#888]">
          ENTREGA EN <b><u>PIURA</u></b>
        </p>

        <div className="space-y-3">
          {/* Envío a Piura */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1a1a1a]">
              <IconPin />
            </div>
            <div className="flex flex-1 items-center justify-between gap-2">
              <span className="text-sm text-[#ccc]">Envío a todo Piura</span>
              <span className="shrink-0 rounded-md bg-[rgba(34,197,94,0.12)] px-2 py-0.5 text-xs font-semibold text-green-400">
                Gratis
              </span>
            </div>
          </div>

          {/* Despacho a domicilio */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1a1a1a]">
              <IconTruck />
            </div>
            <div className="flex flex-1 items-center justify-between gap-2">
              <span className="text-sm text-[#ccc]">Despacho a domicilio</span>
              <div className="flex shrink-0 gap-1.5">
                <span className="rounded-md bg-[rgba(34,197,94,0.12)] px-2 py-0.5 text-xs font-semibold text-green-400">
                  Llega mañana
                </span>
                <span className="rounded-md bg-[rgba(34,197,94,0.12)] px-2 py-0.5 text-xs font-semibold text-green-400">
                  Gratis
                </span>
              </div>
            </div>
          </div>

          {/* Retiro en tienda */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1a1a1a]">
              <IconStore />
            </div>
            <div className="flex flex-1 items-center justify-between gap-2">
              <span className="text-sm text-[#ccc]">Retira en tienda</span>
              <div className="flex shrink-0 gap-1.5">
                <span className="rounded-md bg-[rgba(34,197,94,0.12)] px-2 py-0.5 text-xs font-semibold text-green-400">
                  Retira mañana
                </span>
                <span className="rounded-md bg-[rgba(34,197,94,0.12)] px-2 py-0.5 text-xs font-semibold text-green-400">
                  Gratis
                </span>
              </div>
            </div>
          </div>

          {/* Despacho nacional */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1a1a1a]">
              <IconGlobe />
            </div>
            <div className="flex flex-1 items-center justify-between gap-2">
              <span className="text-sm text-[#ccc]">
                Despacho a todo el Perú
              </span>
              <span className="shrink-0 rounded-md bg-[#1f1f1f] px-2 py-0.5 text-xs font-semibold text-[#aaa]">
                3 a 5 días hábiles
              </span>
            </div>
          </div>
        </div>
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
              setOpenToast(true);
              setToastMessage("Producto agregado.");
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
