"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="about-gallery-title">
        <div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Nuestras <span className="text-red">Instalaciones</span>
          </h2>
          <p style={{ color: "#888", marginTop: "5px" }}>
            Donde la magia sucede cada día.
          </p>
        </div>
        <a href="#" className="text-red" style={{ fontWeight: 600 }}>
          Ver Galería Completa &rarr;
        </a>
      </div>

      <div className="gallery-bento">
        {/* Imagen Grande Izquierda */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1 * 0.05 }}
          whileHover={{ scale: 1.03 }}
          className="gallery-item large"
        >
          <Image src={"/lugar1.webp"} alt="Showroom Principal" fill />
          <div className="gallery-caption">Showroom Principal</div>
        </motion.div>
        {/* Imagen Pequeña Arriba Derecha */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1 * 0.05 }}
          whileHover={{ scale: 1.03 }}
          className="gallery-item"
        >
          <Image src={"/lugar2.webp"} alt="Detalle auto" fill />
          {/* <div className="gallery-caption">Área de Detallado</div> */}
        </motion.div>
        {/* Imagen Pequeña Abajo Derecha */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1 * 0.05 }}
          whileHover={{ scale: 1.03 }}
          className="gallery-item"
        >
          
          <Image src={"/lugar3.webp"} alt="Detalle auto" fill />
          {/* <div className="gallery-caption">Sala VIP</div> */}
        </motion.div>
      </div>
    </section>
  );
}
