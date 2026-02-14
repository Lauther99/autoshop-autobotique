// app/components/home/HeroBackgroundFramer.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  // Duración de cada imagen en milisegundos
  duration?: number; 
}

export default function HeroBackgroundSlider({ images, duration = 3000 }: Props) {
  const [index, setIndex] = useState(0);

  // Lógica para cambiar la imagen automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [images.length, duration]);

  return (
    <div className="absolute inset-0 z-[-1]">
      <AnimatePresence>
        <motion.div
          // La 'key' es crucial para que AnimatePresence detecte el cambio de elemento
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          exit={{ opacity: 0, transition: { duration: 1.5 } }}
          className="w-full h-full"
        >
          <Image
            src={images[index]}
            alt={`Fondo de héroe ${index + 1}`}
            fill
            className="object-cover" // object-cover es más común que hero-bg-img
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}