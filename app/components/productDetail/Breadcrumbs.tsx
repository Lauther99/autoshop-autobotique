import Link from "next/link";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function Breadcrumbs({ product }: Props) {
  const brand = product.brand ?? "";

  const slugParts = [];

  if (brand) {
    slugParts.push(brand.toUpperCase());
  }

  slugParts.push(product.title);

  const slug = ` ${slugParts.join(" - ")}`;

  return (
    <div className="breadcrumbs" style={{ marginBottom: 30 }}>
      <Link href="/tienda">Tienda</Link> <span>&gt;</span> {product.category}{" "}
      <span>&gt;</span>
      <span className="active" style={{ color: "white" }}>
        {slug}
      </span>
    </div>
  );
}
