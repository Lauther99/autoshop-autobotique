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
    <div style={{ marginBottom: 30 }}>
      <Link href="/tienda" className="text-gray">
        Tienda
      </Link>{" "}
      <span>&gt;</span> <span className="text-gray">{product.category}</span><span> &gt;</span>
      <span className="active text-text">{slug}</span>
    </div>
  );
}
