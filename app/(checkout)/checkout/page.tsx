"use client";

import "./checkout_modules.css";
import { useState, ChangeEvent, useEffect } from "react";
import Breadcrumbs from "./components/Breadcrumbs";
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);
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

  useEffect(() => {
    setIsClient(true);
    const stored = localStorage.getItem("cart");
    if (stored) {
      try {
        setCartItems(JSON.parse(stored));
      } catch {
        setCartItems([]);
      }
    }
  }, []);

  const handleShippingChange = (field: keyof ShippingData, value: string) => {
    setShipping((prev) => ({ ...prev, [field]: value }));
  };

  const handleSendWhatsapp = () => {
    if (!shipping.fullName || !shipping.phone || cartItems.length === 0) {
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
    <div className="container" suppressHydrationWarning>
      {/* <Breadcrumbs /> */}
      <CheckoutHeader />
      <div className="checkout-container">
        <div className="checkout-main">
          <ShippingForm
            shipping={shipping}
            onChange={handleShippingChange}
            // onPhoneChange={handlePhoneChange}
          />
        </div>
        <aside>
          {isClient ? (
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
