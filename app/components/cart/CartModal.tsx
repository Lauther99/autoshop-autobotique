"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import "./cart_modules.css";

// Datos iniciales simulados del carrito
const initialCart = [
  {
    id: 1,
    name: "Faro LED Universal 7 pulgadas - Black Edition",
    sku: "AUTO-78923",
    price: 1200.0,
    image: "https://m.media-amazon.com/images/I/71r+tO0fdyL._AC_SX679_.jpg", // Placeholder faro
    quantity: 1,
  },
  {
    id: 2,
    name: "Aceite Sintético 5W-30 Alto Rendimiento (4L)",
    sku: "LUB-44211",
    price: 850.0,
    image: "https://m.media-amazon.com/images/I/71p0+tB0gZL._AC_SX679_.jpg", // Placeholder aceite
    quantity: 2,
  },
  {
    id: 3,
    name: "Kit de Limpieza Microfibra Premium (5 piezas)",
    sku: "DET-11002",
    price: 350.0,
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=300", // Placeholder toallas
    quantity: 1,
  },
];

export default function CartModal() {
  const { isCartOpen, closeCart } = useCartStore();
  const [cartItems, setCartItems] = useState(initialCart);

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

  if (!isCartOpen) return null;

  // Función para actualizar cantidad
  const updateQuantity = (id: number, change: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + change;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }),
    );
  };

  // Función para eliminar item
  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Cálculos
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  return (
    <div className="cart-page-container">
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
              {cartItems.length} productos
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
              cursor: "pointer"
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
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-card">
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
                <img src={item.image} alt={item.name} />
              </div>

              <div className="cart-item-details">
                <div className="cart-item-title">{item.name}</div>
                <div className="cart-item-sku">SKU: {item.sku}</div>

                <div className="cart-controls-row">
                  <div className="cart-qty-selector">
                    <button
                      className="cart-qty-btn"
                      onClick={() => updateQuantity(item.id, -1)}
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
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="price-block">
                    <div className="unit-price">
                      Precio unitario: ${item.price.toFixed(2)}
                    </div>
                    <div className="total-row-price">
                      ${(item.price * item.quantity).toFixed(2)} MXN
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {cartItems.length === 0 && (
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="cart-trust-text">
                <h5>Garantía Extendida</h5>
                <p>15 años de experiencia</p>
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
                $
                {subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="summary-row">
              <span>Envío (Estimado)</span>
              <span className="text-green">¡Gratis!</span>
            </div>
            <div className="summary-row">
              <span>IVA (16%)</span>
              <span>
                ${iva.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>

            <div className="discount-group">
              <label className="discount-label">Código de descuento</label>
              <div className="input-group">
                <input
                  type="text"
                  className="input-discount"
                  placeholder="AUTO15"
                />
                <button className="btn-apply">Aplicar</button>
              </div>
            </div>

            <div className="total-row">
              <span className="total-label">Total</span>
              <span className="total-amount">
                ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}{" "}
                <small
                  style={{ fontSize: "0.9rem", color: "#888", fontWeight: 400 }}
                >
                  MXN
                </small>
              </span>
            </div>

            <button className="btn-checkout">
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
                Tus datos están protegidos por encriptación SSL de 256 bits.
              </p>
            </div>
          </div>

          <div className="help-box">
            <div className="help-icon">?</div>
            <div>
              <h5 style={{ marginBottom: 5 }}>¿Necesitas ayuda?</h5>
              <p
                style={{ fontSize: "0.8rem", color: "#ccc", lineHeight: "1.4" }}
              >
                Llámanos al (55) 1234-5678 o chatea con un experto ahora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
