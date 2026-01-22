"use client";

import "./checkout_modules.css";
import { ChangeEvent, useState } from "react";

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState("estandar");
  const [paymentMethod, setPaymentMethod] = useState("tarjeta");
  const [phone, setPhone] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Reemplaza cualquier cosa que NO sea un número (0-9) con un string vacío
    const onlyNums = value.replace(/[^0-9]/g, "");

    // Opcional: limitar a 9 caracteres (típico de celular)
    if (onlyNums.length <= 9) {
      setPhone(onlyNums);
    }
  };

  return (
    <div className="container">
      {/* Breadcrumbs */}
      <div className="breadcrumbs" style={{ paddingTop: "30px" }}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ marginRight: "8px" }}
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        Inicio <span>/</span> Carrito <span>/</span>{" "}
        <span className="active" style={{ color: "var(--primary-red)" }}>
          Finalizar Compra
        </span>
      </div>

      <header style={{ margin: "30px 0 40px" }}>
        <h1
          style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "10px" }}
        >
          Finalizar Compra
        </h1>
        <p style={{ color: "#888" }}>
          Completa los detalles para recibir tu pedido automotriz.
        </p>
      </header>

      <div className="checkout-container">
        {/* --- COLUMNA IZQUIERDA: PASOS --- */}
        <div className="checkout-main">
          {/* PASO 1: DATOS DE ENVÍO */}
          <section className="checkout-step">
            <div className="step-header">
              <span className="step-number">1</span>
              <h2>Datos de Envío</h2>
            </div>

            <div className="checkout-form-grid">
              <div className="form-group full">
                <label className="checkout-label">Nombre Completo</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ej: Juan Pérez"
                />
              </div>
              <div className="form-group full">
                <label className="checkout-label">Dirección</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Calle, número, colonia"
                />
              </div>
              <div className="form-group">
                <label className="checkout-label">Ciudad</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ej: Ciudad de México"
                />
              </div>
              <div className="form-group">
                <label className="checkout-label">Celular</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="912345678"
                  value={phone} // El valor viene de nuestro estado
                  onChange={handleChange} // Escuchamos el cambio
                  inputMode="numeric" // Esto abre el teclado numérico en móviles
                />
              </div>
            </div>
          </section>

          {/* PASO 2: MÉTODO DE ENVÍO */}
          {/* <section className="checkout-step">
            <div className="step-header">
              <span className="step-number">2</span>
              <h2>Método de Envío</h2>
            </div>

            <div className="shipping-methods-grid">
              <div 
                className={`shipping-card ${shippingMethod === 'estandar' ? 'selected' : ''}`}
                onClick={() => setShippingMethod('estandar')}
              >
                <div className="shipping-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                </div>
                <div className="shipping-info">
                  <span className="shipping-name">Estándar</span>
                  <span className="shipping-time">3-5 días hábiles</span>
                </div>
                <div className="shipping-price">$150.00</div>
              </div>

              <div 
                className={`shipping-card ${shippingMethod === 'express' ? 'selected' : ''}`}
                onClick={() => setShippingMethod('express')}
              >
                <div className="shipping-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div className="shipping-info">
                  <span className="shipping-name">Express</span>
                  <span className="shipping-time">24 horas</span>
                </div>
                <div className="shipping-price">$350.00</div>
              </div>
            </div>
          </section> */}

          {/* PASO 3: MÉTODO DE PAGO */}
          {/* <section className="checkout-step">
            <div className="step-header">
              <span className="step-number">3</span>
              <h2>Método de Pago</h2>
            </div>

            <div className="payment-options-list">
              <div className="payment-option-card">
                <div className="payment-option-header" onClick={() => setPaymentMethod('tarjeta')}>
                  <div className="payment-option-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                    Tarjeta de Crédito / Débito
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                
                {paymentMethod === 'tarjeta' && (
                  <div className="payment-option-content">
                    <div className="form-group full" style={{marginTop: '20px'}}>
                      <label className="checkout-label">Número de Tarjeta</label>
                      <div style={{position: 'relative'}}>
                        <input type="text" className="form-input" placeholder="0000 0000 0000 0000" />
                        <div className="card-icons-placeholder" style={{position:'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)'}}>
                           <div className="card-dot"></div>
                           <div className="card-dot"></div>
                        </div>
                      </div>
                    </div>
                    <div className="checkout-form-grid" style={{marginTop: '20px'}}>
                      <div className="form-group">
                        <label className="checkout-label">Vencimiento</label>
                        <input type="text" className="form-input" placeholder="MM/AA" />
                      </div>
                      <div className="form-group">
                        <label className="checkout-label">CVV</label>
                        <input type="text" className="form-input" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="payment-option-card">
                <div className="payment-option-header" onClick={() => setPaymentMethod('paypal')}>
                  <div className="payment-option-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2997ff" strokeWidth="2"><path d="M7 18V5c0-1.1.9-2 2-2h5a5 5 0 0 1 0 10H9a2 2 0 0 0-2 2v3"/><path d="M11 21v-7c0-1.1.9-2 2-2h4a5 5 0 0 1 0 10h-4a2 2 0 0 0-2 2v3"/></svg>
                    PayPal
                  </div>
                  <div style={{width: '18px', height: '18px', border: '2px solid #333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {paymentMethod === 'paypal' && <div style={{width: '10px', height: '10px', background: 'white', borderRadius: '50%'}}></div>}
                  </div>
                </div>
              </div>

              <div className="payment-option-card">
                <div className="payment-option-header" onClick={() => setPaymentMethod('transferencia')}>
                  <div className="payment-option-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                    Transferencia Bancaria
                  </div>
                  <div style={{width: '18px', height: '18px', border: '2px solid #333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                     {paymentMethod === 'transferencia' && <div style={{width: '10px', height: '10px', background: 'white', borderRadius: '50%'}}></div>}
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>

        {/* --- COLUMNA DERECHA: RESUMEN --- */}
        <aside>
          <div className="order-summary-box">
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "1.2rem",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Resumen de Orden
            </h3>

            <div className="summary-products-list">
              <div className="summary-product-item">
                <div className="summary-product-img">
                  <img
                    src="https://m.media-amazon.com/images/I/71p0+tB0gZL._AC_SX679_.jpg"
                    alt="Filtro Aceite"
                  />
                </div>
                <div className="summary-product-info">
                  <h4>Filtro de Aceite K&N High Performance</h4>
                  <span className="summary-product-qty">Cant: 1</span>
                  <span className="summary-product-price">$489.00</span>
                </div>
              </div>
              <div className="summary-product-item">
                <div className="summary-product-img">
                  <img
                    src="https://m.media-amazon.com/images/I/71wLpWJtY5L._AC_SL1500_.jpg"
                    alt="Balatas"
                  />
                </div>
                <div className="summary-product-info">
                  <h4>Balatas Cerámicas Brembo Delanteras</h4>
                  <span className="summary-product-qty">Cant: 1</span>
                  <span className="summary-product-price">$1,250.00</span>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #222", paddingTop: "15px" }}>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>$1,739.00</span>
              </div>
              <div className="summary-row">
                <span>IVA (16%)</span>
                <span>$278.24</span>
              </div>
              <div className="summary-row">
                <span>Envío</span>
                <span style={{ color: "#2ecc71" }}>$150.00</span>
              </div>
            </div>

            <div className="summary-total-big">
              <span style={{ fontSize: "1rem", fontWeight: 700 }}>Total</span>
              <span className="total-value-red">$2,167.24</span>
              <span className="total-currency-label">Pesos Mexicanos</span>
            </div>

            <button className="btn-checkout">
              Confirmar y Pagar
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ marginLeft: "10px" }}
              >
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="2" />
                <path d="M6 12h.01M18 12h.01" />
              </svg>
            </button>

            <div className="trust-badges-checkout">
              <div style={{ color: "#2ecc71" }}>
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div className="badge-mini"></div>
              <div className="badge-mini"></div>
              <div className="badge-mini"></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
