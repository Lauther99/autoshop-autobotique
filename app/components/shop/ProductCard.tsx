import { Product } from "@/types/product";
import Image from "next/image";

type CurrencyCode = "SOL" | "MXN" | "USD" | any;

const currencies: Record<CurrencyCode, string> = {
  SOL: "S/",
  MXN: "$",
  USD: "$"
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="shop-card">
      <div className="shop-image-container">
        <Image
          src={product.images?.[0] ?? "/not_found_product.png"}
          alt={product.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="shop-info">
        <div className="brand-label">{product.brand}</div>
        <div className="shop-title">{product.title}</div>
        <div className="shop-price">{currencies[product.currency]}{product.price.toFixed(2)}</div>
        <button className="btn-add-cart">Añadir al Carrito</button>
      </div>
    </div>
  );
}
