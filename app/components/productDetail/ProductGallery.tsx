"use client";
import { useState } from "react";

interface Props {
  images: string[];
}

export default function ProductGallery({ images }: Props) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="gallery-wrapper">
      <div className="main-image-frame">
        <img src={images[activeImage]} alt="Producto Principal" />
      </div>
      <div className="thumbnail-strip">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumb-btn ${activeImage === index ? "active" : ""}`}
            onClick={() => setActiveImage(index)}
          >
            <img src={img} alt={`Thumb ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}