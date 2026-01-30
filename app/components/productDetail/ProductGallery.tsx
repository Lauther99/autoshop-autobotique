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
        {/* <img src={images[activeImage]} alt="Producto Principal" /> */}
        <Image
          src={images[0] ?? "/assets/logo1.png"}
          alt={productName}
          width={450}
          height={370}
          style={{ objectFit: "cover" }}
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
              width={30}
              height={30}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
