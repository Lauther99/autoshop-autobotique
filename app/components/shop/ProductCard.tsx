import { Product } from "@/types/product";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="shop-card">
      <div className="shop-image-container">
        {product.tag && (
          <span
            className={`badge-float ${
              product.tagType === "hot" ? "badge-hot" : "badge-new"
            }`}
          >
            {product.tag}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="shop-info">
        <div className="brand-label">{product.brand}</div>
        <div className="shop-title">{product.title}</div>
        <div className="shop-price">
          ${product.price.toFixed(2)}
          {product.oldPrice && <span>${product.oldPrice.toFixed(2)}</span>}
        </div>
        <button className="btn-add-cart">Añadir al Carrito</button>
      </div>
    </div>
  );
}
