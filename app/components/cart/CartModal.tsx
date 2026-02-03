"use client";

import "./cart_modules.css";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { numero } from "@/data/information";
import Link from "next/link";
import { currencies } from "@/types/product";
import { CartItemComponent } from "./CartItem";
import Toast from "@/app/components/ui/Toast";
import { useRouter } from "next/navigation";

export default function CartModal() {
  const isCartOpen = useCartStore((s) => s.isCartOpen);
  const closeCart = useCartStore((s) => s.closeCart);
  const items = useCartStore((s) => s.items);
  const [deleteToast, setDeleteToast] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  useEffect(() => {
      if (!deleteToast) return;
      const timer = setTimeout(() => {
        setDeleteToast(false);
      }, 2000);
      return () => clearTimeout(timer);
    }, [deleteToast]);

  if (!isCartOpen) return null;

  // Cálculos
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const iva = subtotal * 0.16 * 0;
  const total = subtotal + iva;

  return (
    <div className="cart-page-container">
      <div className="container">
        <header className="cart-header">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Tu Carrito</h1>
            <button className="btn-close-cart" onClick={closeCart}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>
              Tienes{" "}
              <strong style={{ color: "white" }}>
                {items.length} productos
              </strong>{" "}
              listos para el envío
            </p>

            <div
              className="text-red"
              onClick={closeCart}
              style={{
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 5,
                cursor: "pointer",
              }}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              Seguir comprando
            </div>
          </div>
        </header>

        <div className="cart-layout">
          {/* --- COLUMNA IZQUIERDA: ITEMS --- */}
          <div className="cart-items-column">
            {items.map((item) => (
              <CartItemComponent key={item.id} item={item} setDeleteToast={setDeleteToast} />
            ))}

            {items.length === 0 && (
              <div
                style={{
                  padding: 40,
                  textAlign: "center",
                  border: "1px dashed #333",
                  borderRadius: 8,
                }}
              >
                <p>Tu carrito está vacío.</p>
              </div>
            )}

            {/* Footer de confianza */}
            <div className="cart-trust-footer">
              <div className="cart-trust-item">
                <div className="cart-trust-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <div className="cart-trust-text">
                  <h5>Envío Seguro</h5>
                  <p>Rastreo en tiempo real</p>
                </div>
              </div>
              <div className="cart-trust-item">
                <div className="cart-trust-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
                <div className="cart-trust-text">
                  <h5>Soporte Técnico</h5>
                  <p>Asesoría especializada</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- COLUMNA DERECHA: RESUMEN --- */}
          <div>
            <div className="order-summary-card">
              <h3 className="summary-title">Resumen del Pedido</h3>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>
                  {currencies["SOL"]}
                  {subtotal.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="summary-row">
                <span>Envío (Estimado)</span>
                <span className="text-green">¡Gratis!</span>
              </div>
              <div className="total-row">
                <span className="total-label">Total</span>
                <span className="total-amount">
                  {currencies["SOL"]}
                  {total.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}{" "}
                  <small
                    style={{
                      fontSize: "0.9rem",
                      color: "#888",
                      fontWeight: 400,
                    }}
                  ></small>
                </span>
              </div>

              <Link href="/checkout">
                <button
                  className="btn-checkout"
                  disabled={items.length < 1}
                  onClick={() => {
                    if (items.length < 1) return;
                    router.push("/checkout");
                  }}
                >
                  Finalizar Compra
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </Link>

              <div className="payment-methods">
                <span className="payment-label">Métodos de pago seguros</span>
                <div className="payment-icons">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 21h18" />
                    <path d="M5 21v-7" />
                    <path d="M19 21v-7" />
                    <path d="M2 10l10-7 10 7v4H2v-4z" />
                  </svg>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <p className="ssl-note">
                  Tus datos están protegidos por encriptación.
                </p>
              </div>
            </div>

            <div className="help-box">
              <div className="help-icon">?</div>
              <div>
                <h5 style={{ marginBottom: 5 }}>¿Necesitas ayuda?</h5>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#ccc",
                    lineHeight: "1.4",
                  }}
                >
                  Llámanos al +{numero} o chatea con un experto ahora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`toast-wrapper ${deleteToast ? "active" : ""}`}>
        <Toast
          title="Atención"
          message="Item borrado!"
          type="success"
          onClose={() => setDeleteToast(false)}
        />
      </div>
    </div>
  );
}
