"use client";

import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import CartModal from "@/app/components/cart/CartModal";

export default function CartProvider() {
  const setItems = useCartStore((state) => state.setItems);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, [setItems]);

  return <CartModal />;
}
