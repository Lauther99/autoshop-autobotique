import { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function FeaturedProductCard({ product }: ProductCardProps) {
  const { title, category } = product;

  return (
    <div className="group overflow-hidden rounded-lg border border-[#222] bg-[var(--bg-card)] transition-all duration-300 hover:-translate-y-1 hover:border-[#333]">
      <div className="relative h-[200px] w-full bg-white">
        <Image
          src={product.images?.[0] ?? "/assets/logo1.png"}
          alt={title}
          fill
          style={{ objectFit: "contain" }}
          className="p-3"
        />
      </div>

      <div className="p-4">
        <div className="mb-1 text-[0.7rem] uppercase tracking-wide text-[var(--text-gray)]">{category}</div>
        <div className="line-clamp-2 min-h-[48px] text-base font-bold text-[var(--text-white)]">{title}</div>
      </div>
    </div>
  );
}
