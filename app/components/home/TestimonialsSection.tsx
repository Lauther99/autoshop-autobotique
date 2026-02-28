"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Cliente — Piura",
    text: "Encontré exactamente lo que necesitaba para mi camioneta. El precio fue justo y el producto llegó en perfectas condiciones. Totalmente recomendado.",
    rating: 5,
  },
  {
    name: "Lucía R.",
    role: "Cliente — Lima",
    text: "Compré los pisos 5D y quedé sorprendida con la calidad. Me asesoraron muy bien antes de elegir. El envío fue rápido y sin problemas.",
    rating: 5,
  },
  {
    name: "Miguel T.",
    role: "Cliente — Chiclayo",
    text: "Llevo años comprando aquí. Siempre tienen lo que busco, a buen precio y con atención personalizada por WhatsApp. No cambio de tienda.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--primary-red)">
          <path d="M12 17.3 6.2 21l1.5-6.4L2 9.8l6.6-.6L12 3l3.4 6.2 6.6.6-5.7 4.8L17.8 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "#0a0a0a",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "var(--primary-red)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "10px",
            }}
          >
            Testimonios
          </span>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 900,
              textTransform: "uppercase",
            }}
          >
            LO QUE DICEN NUESTROS <span className="text-red">CLIENTES</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid #1e1e1e",
                borderRadius: "12px",
                padding: "28px",
                position: "relative",
              }}
            >
              {/* Comillas decorativas */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "22px",
                  fontSize: "4rem",
                  lineHeight: 1,
                  color: "rgba(255,26,26,0.08)",
                  fontFamily: "Georgia, serif",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>

              <StarRating count={t.rating} />

              <p
                style={{
                  color: "#bbb",
                  fontSize: "0.93rem",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                {t.text}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {/* Avatar iniciales */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,26,26,0.12)",
                    border: "1px solid rgba(255,26,26,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    color: "var(--primary-red)",
                    flexShrink: 0,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{t.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#666" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
