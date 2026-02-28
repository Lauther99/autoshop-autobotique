"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="py-[60px]">
      <div className="flex items-end justify-between max-[768px]:flex-col max-[768px]:gap-3">
        <div>
          <h2 className="section-title mb-0">
            Nuestras{" "}
            <span className="text-[var(--primary-red)]">Instalaciones</span>
          </h2>

          <p className="mt-[5px] text-[#888]">
            Donde la magia sucede cada día.
          </p>
        </div>

        <a href="#" className="font-semibold text-[var(--primary-red)]">
          Ver Galería Completa →
        </a>
      </div>

      <div
        className="
      mt-[30px]
      grid grid-cols-[1.5fr_1fr]
      grid-rows-[250px_250px]
      gap-5
      max-[768px]:flex
      max-[768px]:flex-wrap
      max-[768px]:justify-center
    "
      >
        {/* Imagen grande */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.03 }}
          className="group relative row-span-2 overflow-hidden rounded-xl max-[768px]:h-[300px] max-[768px]:w-full"
        >
          <Image
            src="/assets/gallery_section/lugar1.jpg"
            alt="Showroom Principal"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* Imagen pequeña 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.03 }}
          className="group relative overflow-hidden rounded-xl max-[768px]:h-[300px] max-[768px]:w-full"
        >
          <Image
            src="/assets/gallery_section/lugar2.jpg"
            alt="Detalle auto"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* Imagen pequeña 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.03 }}
          className="group relative overflow-hidden rounded-xl max-[768px]:h-[300px] max-[768px]:w-full"
        >
          <Image
            src="/assets/gallery_section/lugar3.jpg"
            alt="Sala VIP"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}
