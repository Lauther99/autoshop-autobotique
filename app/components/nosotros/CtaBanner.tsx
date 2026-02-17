"use client";

import { numero } from "@/data/information";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="cta-banner"
    >
      <div className="cta-content">
        <h2>¿Listo para mejorar tu vehículo?</h2>
        <p>
          Sé parte de nuestra historia. Únete a los miles de conductores que ya
          han transformado su experiencia al volante con nosotros.
        </p>
      </div>

      <div className="cta-buttons">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link href="/tienda" className="btn btn-white">
            Explorar Catálogo
          </Link>
        </motion.div>
        <a
          href={`https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
            "Hola, me gustaría tener más información.",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
        >
          Contactar Asesor
        </a>
      </div>

      {/* Decorative Background Icon */}
      <div className="cta-watermark">
        <svg width="250" height="250" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm1 4h-2v5.41l4.29 4.29 1.41-1.41-3.7-3.7V8z" />
        </svg>
      </div>
    </motion.div>
  );
}
