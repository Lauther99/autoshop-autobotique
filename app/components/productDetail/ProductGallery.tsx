"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: Props) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
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
              src={img ?? "/assets/logo1.png"}
              alt={`Thumb ${productName}`}
              fill
              style={{ objectFit: "contain" }}
              className="rounded-md bg-white p-1"
            />
          </button>
        ))}
      </div>

      <div className="order-1 relative flex h-[500px] flex-1 rounded-xl border border-[#333] bg-white md:order-2">
        <Image
          src={images[activeImage] ?? "/assets/logo1.png"}
          alt={productName}
          fill
          style={{ objectFit: "contain" }}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
