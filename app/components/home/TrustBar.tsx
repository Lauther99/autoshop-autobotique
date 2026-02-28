"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    value: "+15 años",
    label: "De experiencia",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="5" />
        <path d="m8.5 13.5-2.5 7 6-4 6 4-2.5-7" />
      </svg>
    ),
    value: "Calidad",
    label: "Garantizada",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    value: "Asesoría",
    label: "Personalizada",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    value: "Envíos",
    label: "A todo el país",
  },
];

export default function TrustBar() {
  return (
    <div
      style={{
        background: "#111",
        borderTop: "1px solid #1e1e1e",
        borderBottom: "1px solid #1e1e1e",
        padding: "22px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  color: "var(--primary-red)",
                  flexShrink: 0,
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(255,26,26,0.08)",
                  border: "1px solid rgba(255,26,26,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.2 }}>
                  {item.value}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#888", marginTop: "2px" }}>
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Responsive mobile */}
      <style>{`
        @media (max-width: 640px) {
          .trust-bar-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
