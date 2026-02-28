"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    slug: "PISO 5D",
    label: "Pisos 5D",
    count: 20,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="13" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="8" y1="14" x2="16" y2="14" />
      </svg>
    ),
  },
  {
    slug: "ESTRIBOS",
    label: "Estribos",
    count: 10,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="10" width="18" height="4" rx="1" />
        <path d="M5 10V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M7 14v3M17 14v3" />
      </svg>
    ),
  },
  {
    slug: "ANTIVUELCO",
    label: "Antivuelco",
    count: 9,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    slug: "PARACHOQUE",
    label: "Parachoques",
    count: 9,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="9" width="20" height="6" rx="2" />
        <path d="M6 9V7M18 9V7M4 15v2M20 15v2" />
      </svg>
    ),
  },
  {
    slug: "PARLANTES",
    label: "Parlantes",
    count: 8,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <circle cx="12" cy="14" r="4" />
        <circle cx="12" cy="14" r="1.5" />
        <rect x="9" y="5" width="6" height="3" rx="1" />
      </svg>
    ),
  },
  {
    slug: "REMOLQUE",
    label: "Remolques",
    count: 8,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    slug: "FARO POSTERIOR",
    label: "Faros",
    count: 6,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 2h6l4 8H5L9 2z" />
        <path d="M5 10h14v4a7 7 0 0 1-14 0v-4z" />
        <line x1="12" y1="14" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    slug: "BARRAS",
    label: "Barras",
    count: 6,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
  },
];

export default function CategoriesSection() {
  return (
    <section
      style={{
        padding: "70px 0",
        background: "#0d0d0d",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              borderBottom: "2px solid #222",
              paddingBottom: "12px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 800,
                textTransform: "uppercase",
              }}
            >
              EXPLORAR POR <span className="text-red">CATEGORÍA</span>
            </h2>
            <Link
              href="/tienda"
              className="text-red"
              style={{ fontSize: "0.9rem", fontWeight: 600 }}
            >
              Ver todo &#x2197;
            </Link>
          </div>
        </div>

        {/* Grid de categorías */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/tienda?cat=${encodeURIComponent(cat.slug)}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "14px",
                  padding: "28px 20px",
                  background: "var(--bg-card)",
                  border: "1px solid #222",
                  borderRadius: "12px",
                  textAlign: "center",
                  transition: "border-color 0.25s, transform 0.25s, background 0.25s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--primary-red)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,26,26,0.04)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#222";
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Ícono */}
                <div
                  style={{
                    color: "var(--primary-red)",
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: "rgba(255,26,26,0.08)",
                    border: "1px solid rgba(255,26,26,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cat.icon}
                </div>

                {/* Nombre */}
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "4px" }}>
                    {cat.label}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#666" }}>
                    {cat.count} productos
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
