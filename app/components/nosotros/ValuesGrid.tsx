"use client";

import { motion } from "framer-motion";
import { PiHandshake } from "react-icons/pi";
import { FiUserCheck } from "react-icons/fi";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ValuesGrid() {
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 className="section-title">
          Nuestros <span className="text-red">Valores</span>
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[30px]"
      >
        <motion.div
          variants={item}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="rounded-lg border border-[#333] px-5 py-[30px] text-center transition-all duration-300 hover:border-[var(--primary-red)] hover:bg-[rgba(255,26,26,0.05)]"
        >
          <div className="mb-[15px] inline-block text-[var(--primary-red)]">
            {/* Calidad → Shield Check */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <h4 className="font-semibold">Calidad</h4>
          <p className="mt-[10px] text-[0.9rem] text-[#888]">
            Solo trabajamos con productos probados y marcas confiables.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="rounded-lg border border-[#333] px-5 py-[30px] text-center transition-all duration-300 hover:border-[var(--primary-red)] hover:bg-[rgba(255,26,26,0.05)]"
        >
          <div className="mb-[15px] inline-block text-[var(--primary-red)]">
            <PiHandshake style={{ width: "40px", height: "40px" }} />
          </div>
          <h4 className="font-semibold">Confianza</h4>
          <p className="mt-[10px] text-[0.9rem] text-[#888]">
            Transparencia total en cada venta.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="rounded-lg border border-[#333] px-5 py-[30px] text-center transition-all duration-300 hover:border-[var(--primary-red)] hover:bg-[rgba(255,26,26,0.05)]"
        >
          <div className="mb-[15px] inline-block text-[var(--primary-red)]">
            {/* Experiencia → Award */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="6" />
              <path d="m8.21 13.89-1.16 7A1 1 0 0 0 8 22l4-2 4 2a1 1 0 0 0 1-1.11l-1.16-7" />
            </svg>
          </div>
          <h4 className="font-semibold">Experiencia</h4>
          <p className="mt-[10px] text-[0.9rem] text-[#888]">
            Más de 15 años respaldan nuestro conocimiento.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="rounded-lg border border-[#333] px-5 py-[30px] text-center transition-all duration-300 hover:border-[var(--primary-red)] hover:bg-[rgba(255,26,26,0.05)]"
        >
          <div className="mb-[15px] inline-block text-[var(--primary-red)]">
            {/* Atención personalizada → User Check */}
            <FiUserCheck style={{ width: "40px", height: "40px" }} />
          </div>
          <h4 className="font-semibold">Atención personalizada</h4>
          <p className="mt-[10px] text-[0.9rem] text-[#888]">
            Cada cliente es único.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="rounded-lg border border-[#333] px-5 py-[30px] text-center transition-all duration-300 hover:border-[var(--primary-red)] hover:bg-[rgba(255,26,26,0.05)]"
        >
          <div className="mb-[15px] inline-block text-[var(--primary-red)]">
            {/* Innovación → Lightbulb */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <circle cx="12" cy="10" r="7" />
            </svg>
          </div>
          <h4 className="font-semibold">Innovación</h4>
          <p className="mt-[10px] text-[0.9rem] text-[#888]">
            Siempre a la vanguardia del mundo automotriz.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
