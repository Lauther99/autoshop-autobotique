// app/components/home/HeroBackgroundFramer.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Props {
  images: string[];
  duration?: number;
}

// Definimos las variantes de animación de forma más clara
const wipeVariants: Variants = {
  // Estado inicial: La imagen está oculta a la derecha
  initial: {
    clipPath: "inset(0 0 0 100%)",
  },
  // Estado animado: La imagen se vuelve 100% visible
  animate: {
    clipPath: "inset(0 0 0 0%)",
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
  },
  // Estado de salida: La imagen se va por la izquierda
  exit: {
    clipPath: "inset(0 100% 0 0)",
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function HeroBackgroundFramer({ images, duration = 5000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(timer);
  }, [images.length, duration]);

  // Si no hay imágenes, no renderizar nada para evitar errores
  if (!images || images.length === 0) {
    return null;
  }

  return (
    // Contenedor principal. Añadimos un fondo negro como fallback
    // y overflow-hidden es CRUCIAL.
    <div className="absolute inset-0 z-[-1] overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          // 'key' es lo que le dice a AnimatePresence que el elemento ha cambiado
          key={index}
          // Asignamos las variantes
          variants={wipeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          // El div animado debe ser absoluto para que las imágenes se apilen
          // correctamente durante la transición.
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={images[index]}
            alt="Fondo de la tienda de accesorios para autos"
            fill
            className="object-cover"
            priority // Ayuda a que la primera imagen cargue más rápido
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}