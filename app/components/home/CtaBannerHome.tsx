"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { numero } from "@/data/information";

export default function CtaBannerHome() {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "#0d0d0d",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{
            background: "linear-gradient(135deg, rgba(255,26,26,0.1) 0%, rgba(30,0,0,0.5) 100%)",
            border: "1px solid rgba(255,26,26,0.2)",
            borderRadius: "16px",
            padding: "60px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Watermark decorativo */}
          <div
            style={{
              position: "absolute",
              right: "-30px",
              bottom: "-40px",
              opacity: 0.04,
              pointerEvents: "none",
            }}
          >
            <svg width="280" height="280" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
          </div>

          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "var(--primary-red)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "14px",
            }}
          >
            ¿Listo para equipar tu vehículo?
          </span>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            Encuentra el accesorio <span className="text-red">perfecto</span>
          </h2>

          <p
            style={{
              color: "#999",
              fontSize: "1rem",
              maxWidth: "480px",
              margin: "0 auto 36px",
              lineHeight: 1.65,
            }}
          >
            Explora más de 100 productos o consúltanos directamente por WhatsApp.
            Te respondemos al instante.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/tienda"
                className="btn btn-primary"
                style={{ padding: "14px 32px", fontSize: "0.95rem" }}
              >
                Ver catálogo completo &rarr;
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href={`https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
                  "Hola, quisiera cotizar un producto."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: "14px 32px", fontSize: "0.95rem" }}
              >
                Cotizar por WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
