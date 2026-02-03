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
        className="values-grid"
      >
        <motion.div
          variants={item}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="value-card"
        >
          <div className="value-icon">
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
          <h4>Calidad</h4>
          <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "10px" }}>
            Solo trabajamos con productos probados y marcas confiables.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="value-card"
        >
          <div className="value-icon">
            <PiHandshake style={{ width: "40px", height: "40px" }} />
          </div>
          <h4>Confianza</h4>
          <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "10px" }}>
            Transparencia total en cada venta.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="value-card"
        >
          <div className="value-icon">
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
          <h4>Experiencia</h4>
          <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "10px" }}>
            Más de 15 años respaldan nuestro conocimiento.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="value-card"
        >
          <div className="value-icon">
            {/* Atención personalizada → User Check */}
            <FiUserCheck style={{ width: "40px", height: "40px" }} />
          </div>
          <h4>Atención personalizada</h4>
          <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "10px" }}>
            Cada cliente es único.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="value-card"
        >
          <div className="value-icon">
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
          <h4>Innovación</h4>
          <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "10px" }}>
            Siempre a la vanguardia del mundo automotriz.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
