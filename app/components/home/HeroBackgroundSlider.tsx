// app/components/home/HeroBackgroundFramer.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function HeroBackgroundSlider({ duration = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundSlides.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="absolute inset-0 z-[-1]">
      {backgroundSlides.map((img, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Imagen borrosa full-width de fondo */}
          <div className="absolute inset-0">
            <Image
              src={img}
              alt=""
              fill
              className="object-cover scale-110"
              style={{ filter: "blur(18px)", transform: "scale(1.1)" }}
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Imagen nítida centrada */}
          <div className="absolute inset-0 flex justify-center">
            <div className="relative w-full max-w-[1200px]">
              <Image
                src={img}
                alt={`Fondo de héroe ${i + 1}`}
                fill
                className="hero-bg-img"
                priority={i === 0}
              />
            </div>
          </div>

          {/* Overlay oscuro sobre imagen nítida */}
          <div className="absolute inset-0 bg-black/60 w-full max-w-[1200px] m-auto" />
        </motion.div>
      ))}
    </div>
  );
}