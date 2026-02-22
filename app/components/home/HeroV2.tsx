"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroBackgroundSlider from "@/app/components/home/HeroBackgroundSlider";
import { numero } from "@/data/information";

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden" style={{ height: "85vh" }}>
      {/* Fondo con slider de imágenes */}
      <HeroBackgroundSlider />

      {/* Overlay oscuro degradado */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,.88) 40%, rgba(0,0,0,.4) 100%)",
        }}
      />

      {/* Contenido centrado verticalmente */}
      <div className="container relative z-10 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{ maxWidth: "600px" }}
        >
          {/* Badge */}
          <span className="badge">Accesorios Automotrices</span>

          {/* Titular principal */}
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginTop: "12px",
              marginBottom: "16px",
            }}
          >
            Todo lo que tu auto{" "}
            <span
              style={{ color: "var(--primary-red)", fontStyle: "italic" }}
            >
              necesita.
            </span>
          </h1>

          {/* Subtítulo corto con propuesta de valor */}
          <p
            style={{
              color: "#ccc",
              fontSize: "1.05rem",
              lineHeight: 1.65,
              marginBottom: "32px",
              maxWidth: "460px",
            }}
          >
            Encuentra accesorios, repuestos y equipos de calidad para tu
            vehículo. Envíos a todo el país.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/tienda" className="btn btn-primary">
              Explorar productos &rarr;
            </Link>

            <a
              href={`https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
                "Hola, me gustaría tener más información sobre sus productos."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Contáctanos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
