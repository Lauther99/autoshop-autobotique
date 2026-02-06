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
    <div className="gallery-wrapper">
      <div className="main-image-frame">
        <Image
          src={images[activeImage] ?? "/assets/logo1.png"}
          alt={productName}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="thumbnail-strip">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumb-btn ${activeImage === index ? "active" : ""}`}
            onClick={() => setActiveImage(index)}
          >
            <Image
              src={img ?? "/assets/logo1.png"}
              alt={`Thumb ${productName}`}
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
