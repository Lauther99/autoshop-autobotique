// app/components/home/HeroBackgroundFramer.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const backgroundSlides = [
  "/assets/photos/8.JPG",
  "/assets/photos/1.JPG",
  "/assets/photos/2.JPG",
  "/assets/photos/3.JPG",
  "/assets/photos/4.JPG",
  "/assets/photos/5.JPG",
  "/assets/photos/6.JPG",
  "/assets/photos/7.JPG",
  "/assets/photos/9.JPG",
  "/assets/photos/10.JPG",
];

export default function HeroBackgroundSlider({ duration = 3000 }) {
  // const images = backgroundSlides;
  const [index, setIndex] = useState(0);

  // Lógica para cambiar la imagen automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % backgroundSlides.length);
    }, duration);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [duration]);

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
            src={backgroundSlides[index]}
            alt={`Fondo de héroe ${index + 1}`}
            fill
            className="hero-bg-img" // object-cover es más común que hero-bg-img
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
