import Link from "next/link";
import { Product } from "@/types/product";
import { FeaturedProductCard } from "./FeaturedProductCard";
import { products } from "@/data/products";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts() {
  return (
    <section className="products-section container">
      <div className="section-header">
        <h2>
          PRODUCTOS <span className="text-red">DESTACADOS</span>
        </h2>
        <Link
          className="text-red"
          style={{ fontSize: "0.9rem" }}
          href="/tienda"
        >
          Ver todo el catálogo &#x2197;
        </Link>
      </div>

      <div className="products-grid">
        {products.slice(0, 4).map((product, index) => (
          <FeaturedProductCard product={product} key={index} />
        ))}
      </div>
    </section>
  );
}
