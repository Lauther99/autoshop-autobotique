"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const milestones = [
  { year: "2009", text: "Apertura de Autoshop Autoboutique en Piura." },
  { year: "2015", text: "Ampliamos nuestro catálogo a más de 50 productos." },
  { year: "2020", text: "Lanzamos nuestra tienda online para todo el país." },
  { year: "Hoy", text: "Más de 100 productos y miles de clientes satisfechos." },
];

const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Confianza",
    desc: "Transparencia en cada operación.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="5" />
        <path d="m8.5 13.5-2.5 7 6-4 6 4-2.5-7" />
      </svg>
    ),
    title: "Calidad",
    desc: "Solo productos que superan el estándar.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Asesoría",
    desc: "Te guiamos hasta encontrar lo ideal.",
  },
];

export default function AboutSectionV2() {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "#0f0f0f",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Columna izquierda: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "var(--primary-red)",
                textTransform: "uppercase",
              }}
            >
              Nuestra historia
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                marginTop: "10px",
                marginBottom: "36px",
                lineHeight: 1.1,
              }}
            >
              SOBRE <span className="text-red">NOSOTROS</span>
            </h2>

            {/* Timeline */}
            <div style={{ position: "relative", paddingLeft: "28px" }}>
              {/* Línea vertical */}
              <div
                style={{
                  position: "absolute",
                  left: "7px",
                  top: "6px",
                  bottom: "6px",
                  width: "2px",
                  background: "#222",
                }}
              />

              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{
                    position: "relative",
                    marginBottom: "24px",
                    paddingLeft: "8px",
                  }}
                >
                  {/* Punto */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-25px",
                      top: "4px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "var(--primary-red)",
                      border: "2px solid #0f0f0f",
                      boxShadow: "0 0 0 2px var(--primary-red)",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      color: "var(--primary-red)",
                      marginBottom: "3px",
                      letterSpacing: "1px",
                    }}
                  >
                    {m.year}
                  </div>
                  <div style={{ fontSize: "0.92rem", color: "#bbb", lineHeight: 1.5 }}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/nosotros"
              className="btn btn-outline"
              style={{ marginTop: "12px", display: "inline-flex" }}
            >
              Conocer nuestra historia &rarr;
            </Link>
          </motion.div>

          {/* Columna derecha: Valores */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                color: "#999",
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "36px",
              }}
            >
              Desde 2009, Autoshop Autoboutique es el referente en accesorios
              automotrices en Piura. Trabajamos con marcas seleccionadas para
              garantizar que cada producto cumpla — y supere — lo que esperás.
            </p>

            {/* Cards de valores */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "18px 20px",
                    background: "var(--bg-card)",
                    border: "1px solid #1e1e1e",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      color: "var(--primary-red)",
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      background: "rgba(255,26,26,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: "4px" }}>{v.title}</div>
                    <div style={{ fontSize: "0.85rem", color: "#888" }}>{v.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .about-v2-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
