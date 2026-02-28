"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { numero } from "@/data/information";

export default function CtaBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative my-20 flex flex-col items-center justify-between gap-7 overflow-hidden rounded-2xl bg-[var(--primary-red)] px-6 py-12 text-center md:flex-row md:px-10 md:py-14 md:text-left"
    >
      <div className="z-[2] max-w-[600px]">
        <h2 className="mb-2.5 text-[2rem] font-extrabold leading-tight text-[var(--text-white)]">
          Listo para mejorar tu vehiculo?
        </h2>
        <p className="text-[rgba(255,255,255,0.9)]">
          Se parte de nuestra historia. Unete a los miles de conductores que ya
          han transformado su experiencia al volante con nosotros.
        </p>
      </div>

      <div className="z-[2] flex flex-wrap justify-center gap-4 md:justify-end">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/tienda"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[var(--primary-red)] transition-colors hover:bg-[#f0f0f0]"
          >
            Explorar Catalogo
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <a
            href={`https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
              "Hola, me gustaria tener mas informacion.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#111] px-6 py-3 text-sm font-semibold text-[#fff] transition-colors hover:bg-black"
          >
            Contactar Asesor
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -bottom-12 -right-12 rotate-[-15deg] text-[#800000] opacity-20">
        <svg width="250" height="250" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm1 4h-2v5.41l4.29 4.29 1.41-1.41-3.7-3.7V8z" />
        </svg>
      </div>
    </motion.div>
  );
}
