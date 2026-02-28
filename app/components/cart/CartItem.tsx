"use client";

import React, { useEffect, useState } from "react";
import { CartItem, currencies } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import Toast from "@/app/components/ui/Toast";
import Image from "next/image";

interface CartItemProps {
  item: CartItem;
  setDeleteToast: (value: boolean) => void;
}

export const CartItemComponent: React.FC<CartItemProps> = ({
  item,
  setDeleteToast,
}) => {
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  const [openToast, setOpenToast] = useState(false);
  const [newQuantity, setNewQuanitty] = useState(item.quantity);

  function getToastMessage(item: CartItem) {
    const backorderQty = newQuantity - item.stock;
    if (item.backorder) {
      return `${item.stock} en stock, ${backorderQty} en backorder (${item.backorderDays} días)`;
    } else {
      return "Stock insuficiente";
    }
  }

  useEffect(() => {
    if (!openToast) return;
    const timer = setTimeout(() => {
      setOpenToast(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [openToast]);

  return (
    <div
      className="relative flex items-center gap-5 rounded-lg border border-[#222] bg-[var(--bg-card)] p-5 
                max-[900px]:flex-col max-[900px]:items-start"
    >
      {/* Botón eliminar */}
      <button
        onClick={() => {
          removeItem(item.id);
          setDeleteToast(true);
        }}
        title="Eliminar producto"
        className="absolute right-5 top-5 text-[#666] transition hover:text-[var(--primary-red)]"
      >
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>

      {/* Imagen */}
      <div
        className="relative h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-md bg-white 
                  max-[900px]:h-[150px] max-[900px]:w-full"
      >
        <Image
          src={item.image ?? "/assets/logo1.png"}
          alt={item.title}
          fill
          className="rounded-md object-contain p-2"
        />
      </div>

      {/* Detalles */}
      <div className="flex-1 max-[900px]:w-full">
        <div className="mb-1 pr-8 text-[1.1rem] font-bold">{item.title}</div>

        <div className="mb-4 text-[0.8rem] uppercase text-[#666]">
          SKU: {item.sku}
        </div>

        {/* Controles */}
        <div className="flex items-end justify-between max-[900px]:mt-4">
          {/* Quantity selector */}
          <div className="flex h-9 items-center rounded-md bg-[#252525]">
            <button
              className="h-full w-8 text-white transition hover:bg-[#333]"
              onClick={() => {
                if (item.quantity > 1) {
                  setNewQuanitty(newQuantity - 1);
                  updateQuantity(item.id, item.quantity - 1);
                }
              }}
            >
              -
            </button>

            <input
              type="text"
              value={item.quantity}
              readOnly
              className="w-[30px] bg-transparent text-center text-[0.9rem] font-bold text-white outline-none"
            />

            <button
              className="h-full w-8 text-white transition hover:bg-[#333]"
              onClick={() => {
                const nextQty = newQuantity + 1;

                setNewQuanitty(nextQty);
                updateQuantity(item.id, item.quantity + 1);

                if (nextQty > item.stock) {
                  setOpenToast(true);
                } else {
                  setOpenToast(false);
                }
              }}
            >
              +
            </button>
          </div>

          {/* Precio */}
          <div className="text-right">
            <div className="mb-0.5 text-[0.8rem] text-[#888]">
              Precio unitario: {currencies[item.currency]}
              {item.price.toFixed(2)}
            </div>

            <div className="text-[1.2rem] font-extrabold">
              {currencies[item.currency]}
              {(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div
        className={`fixed bottom-5 left-1/2 z-[999999]
    -translate-x-1/2 transform transition-all duration-300
    ${
      openToast
        ? "translate-y-0 opacity-100 pointer-events-auto"
        : "-translate-y-[200%] opacity-0 pointer-events-none"
    }`}
      >
        <Toast
          title="Atención"
          message={getToastMessage(item)}
          type="warning"
          onClose={() => setOpenToast(false)}
        />
      </div>
    </div>
  );
};
