import { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function FeaturedProductCard({ product }: ProductCardProps) {
  const {
    id,
    title,
    category,
    price,
    images,
    // badge,
    // badgeColor,
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
          src={product.images?.[0] ?? "/assets/logo1.png"}
          alt={title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="card-info">
        <div className="category">{category}</div>
        <div className="product-title">{title}</div>
      </div>
    </div>
  );
}
