"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroBackgroundSlider from "@/app/components/home/HeroBackgroundSlider";
import { numero } from "@/data/information";

const trustItems = [
  { label: "+15 años de experiencia" },
  { label: "+100 productos disponibles" },
  { label: "Envíos a todo el país" },
];

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden" style={{ height: "90vh", minHeight: "560px" }}>
      {/* Fondo con slider de imágenes */}
      <HeroBackgroundSlider />

      {/* Overlay degradado: oscuro a la izquierda, semi a la derecha */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Línea decorativa roja vertical */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{ width: "4px", background: "var(--primary-red)" }}
      />

      {/* Contenido */}
      <div
        className="container relative z-10 h-full flex flex-col justify-center"
        style={{ paddingTop: "20px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ maxWidth: "640px" }}
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="badge"
          >
            Accesorios Automotrices · Piura, Perú
          </motion.span>

          {/* Titular principal */}
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              marginTop: "14px",
              marginBottom: "18px",
              letterSpacing: "-0.5px",
            }}
          >
            Todo lo que tu auto{" "}
            <span style={{ color: "var(--primary-red)", fontStyle: "italic" }}>
              necesita.
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              color: "#c0c0c0",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: "36px",
              maxWidth: "500px",
            }}
          >
            Accesorios, repuestos y equipos de calidad para tu vehículo.
            Más de 100 productos con atención personalizada y envíos a todo el país.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/tienda" className="btn btn-primary" style={{ fontSize: "0.95rem", padding: "14px 28px" }}>
              Ver productos &rarr;
            </Link>
            <a
              href={`https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
                "Hola, quisiera información sobre sus productos."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ fontSize: "0.95rem", padding: "14px 28px" }}
            >
              Consultar por WhatsApp
            </a>
          </div>

          {/* Trust mini-pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ display: "flex", gap: "20px", marginTop: "32px", flexWrap: "wrap" }}
          >
            {trustItems.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  fontSize: "0.82rem",
                  color: "#aaa",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "rgba(255,26,26,0.15)",
                    border: "1px solid rgba(255,26,26,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="9" height="9" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.8 7L9 1" stroke="#ff1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item.label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
