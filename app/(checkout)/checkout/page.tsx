"use client";

import { useState, useEffect } from "react";
import CheckoutHeader from "./components/CheckoutHeader";
import ShippingForm from "./components/ShippingForm";
import OrderSummary from "./components/OrderSummary";
import { CartItem } from "@/types/product";
import Toast from "@/app/components/ui/Toast";
import { numero } from "@/data/information";

interface ShippingData {
  fullName: string;
  address: string;
  city: string;
  phone: string;
}

export default function CheckoutPage() {
  const [cartItems] = useState<CartItem[] | null>(() => {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("cart");
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  });
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [shipping, setShipping] = useState<ShippingData>({
    fullName: "",
    address: "",
    city: "",
    phone: "",
  });

  useEffect(() => {
    if (!openToast) return;
    const timer = setTimeout(() => {
      setOpenToast(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [openToast]);

  const handleShippingChange = (field: keyof ShippingData, value: string) => {
    setShipping((prev) => ({ ...prev, [field]: value }));
  };

  const handleSendWhatsapp = () => {
    if (!shipping.fullName || !shipping.phone || !cartItems || cartItems.length === 0) {
      setToastMessage("Completa tus datos.");
      setOpenToast(true);
      return;
    }

    const productsText = cartItems
      .map(
        (item) =>
          `• ${item.title} x${item.quantity} - $${item.price.toFixed(2)}`,
      )
      .join("\n");

    const message = `🛒 *Nuevo Pedido*

👤 Nombre: ${shipping.fullName}
📍 Dirección: ${shipping.address}, ${shipping.city}
📞 Teléfono: ${shipping.phone}

📦 Productos:
${productsText}
  `;

    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5" suppressHydrationWarning>
      <CheckoutHeader />
      <div className="grid grid-cols-1 items-start gap-10 py-10 min-[1000px]:grid-cols-[1fr_380px] min-[1000px]:gap-[50px]">
        <div>
          <ShippingForm
            shipping={shipping}
            onChange={handleShippingChange}
          />
        </div>
        <aside>
          {cartItems ? (
            <OrderSummary
              cartItems={cartItems}
              onConfirm={handleSendWhatsapp}
            />
          ) : (
            <div>Cargando resumen...</div>
          )}
        </aside>
      </div>
      <div className={`toast-wrapper ${openToast ? "active" : ""}`}>
        <Toast
          title="Atención"
          message={toastMessage}
          type="warning"
          onClose={() => setOpenToast(false)}
        />
      </div>
    </div>
  );
}
