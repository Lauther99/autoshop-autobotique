"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface Props {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) < 50) return;
    if (delta > 0) {
      setActiveImage((prev) => (prev + 1) % images.length);
    } else {
      setActiveImage((prev) => (prev - 1 + images.length) % images.length);
    }
    touchStartX.current = null;
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:gap-4">

      {/* Thumbnails — ocultos en mobile, columna en desktop */}
      <div className="hidden md:flex md:flex-col md:gap-3">
        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveImage(index)}
            className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border bg-[#141414] p-1 transition-colors ${
              activeImage === index
                ? "border-[var(--primary-red)] shadow-[0_0_10px_rgba(255,26,26,0.2)]"
                : "border-[#333] hover:border-[#666]"
            }`}
            aria-label={`Seleccionar imagen ${index + 1} de ${productName}`}
          >
            <Image
              src={img ?? "/assets/logo2.png"}
              alt={`Thumb ${productName}`}
              fill
              style={{ objectFit: "contain" }}
              className="rounded-md bg-white p-1"
            />
          </button>
        ))}
      </div>

      {/* Imagen principal */}
      <div
        className="relative min-h-[300px] flex-1 rounded-xl border border-[#333] bg-white sm:min-h-[360px] md:h-[440px] lg:h-[500px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[activeImage] ?? "/assets/logo2.png"}
          alt={productName}
          fill
          style={{ objectFit: "contain" }}
          className="rounded-xl"
        />
      </div>

      {/* Dots — solo en mobile, ocultos en desktop */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 md:hidden">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Imagen ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeImage === index
                  ? "w-6 bg-[var(--primary-red)]"
                  : "w-2 bg-[#555] hover:bg-[#888]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
