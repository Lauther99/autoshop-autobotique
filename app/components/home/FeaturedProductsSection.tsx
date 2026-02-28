import Link from "next/link";
import { Product } from "@/types/product";
import { FeaturedProductCard } from "./FeaturedProductCard";
import { products } from "@/data/products";
import Reveal from "@/app/components/ui/Reveal";

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
    <section className="mx-auto w-full max-w-[1200px] px-5 py-20">
      <div className="mb-10 flex flex-col items-start justify-between gap-3 border-b-2 border-[#333] pb-2.5 sm:flex-row sm:items-end">
        <h2 className="text-3xl font-extrabold uppercase">
          PRODUCTOS <span className="text-[var(--primary-red)]">DESTACADOS</span>
        </h2>
        <Link className="text-sm text-[var(--primary-red)] transition-colors hover:text-[#ff4d4d]" href="/tienda">
          Ver todo el catalogo &#8599;
        </Link>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        {products.slice(0, 4).map((product, index) => (
          <Reveal key={product.id} delay={index * 0.1}>
            <Link href={`/tienda/${get_slug(product)}`} className="block">
              <FeaturedProductCard product={product} />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
