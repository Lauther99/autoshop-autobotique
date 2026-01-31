"use client";

import React, { useEffect, useState } from "react";
import { CartItem, currencies } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import Toast from "@/app/components/ui/Toast";
import Image from "next/image";

interface CartItemProps {
  item: CartItem;
}

export const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
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
    <div className="cart-item-card">
      <button
        className="btn-remove"
        onClick={() => removeItem(item.id)}
        title="Eliminar producto"
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

      <div className="cart-item-image">
        <Image
          src={item.image ?? "/assets/logo1.png"}
          alt={item.title}
          width={450}
          height={370}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="cart-item-details">
        <div className="cart-item-title">{item.title}</div>
        <div className="cart-item-sku">SKU: {item.sku}</div>

        <div className="cart-controls-row">
          <div className="cart-qty-selector">
            <button
              className="cart-qty-btn"
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
              className="cart-qty-input"
              value={item.quantity}
              readOnly
            />
            <button
              className="cart-qty-btn"
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

          <div className="price-block">
            <div className="unit-price">
              Precio unitario: {currencies[item.currency]}
              {item.price.toFixed(2)}
            </div>
            <div className="total-row-price">
              {currencies[item.currency]}
              {(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      <div className={`toast-wrapper ${openToast ? "active" : ""}`}>
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
