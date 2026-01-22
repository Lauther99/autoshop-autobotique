import Link from "next/link";
import { Product } from "@/types/product";
import { FeaturedProductCard } from "./FeaturedProductCard";
import { products } from "@/data/products";

interface FeaturedProductsProps {
  products: Product[];
}

function get_slug(product: Product) {
  const brand = product.brand ?? "";

  const slugParts = [];

  if (brand) {
    slugParts.push(
      brand
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""),
    );
  }

  slugParts.push(
    product.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
  );

  return `${slugParts.join("-")}-${product.id}`;
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
          <Link href={`/tienda/${get_slug(product)}`} className="shop-card" key={index} >
            <FeaturedProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
}
