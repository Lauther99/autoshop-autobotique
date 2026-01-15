import { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const {
    id,
    title,
    category,
    price,
    image,
    // badge,
    // badgeColor,
    oldPrice,
  } = product;

  return (
    <div className="product-card">
      {/* {badge && (
        <span className="card-badge" style={{ background: badgeColor }}>
          {badge}
        </span>
      )} */}

      <div className="product-image">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="card-info">
        <div className="category">{category}</div>
        <div className="product-title">{title}</div>
        <div className="price">
          {price} <small>MXN</small>
          {oldPrice && <span>{oldPrice}</span>}
        </div>
      </div>
    </div>
  );
}
