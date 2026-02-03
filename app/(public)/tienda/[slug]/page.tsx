
import "./producto_modules.css";
import { products } from "@/data/products";
import Breadcrumbs from "@/app/components/productDetail/Breadcrumbs";
import ProductGallery from "@/app/components/productDetail/ProductGallery";
import ProductInfo from "@/app/components/productDetail/ProductInfo";
import ProductTabs from "@/app/components/productDetail/ProductTabs";
import { Product } from "@/types/product";

interface Props {
  params: { slug: string };
}

function getSlug(product: Product){
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

export function generateStaticParams() {
  return products.map((p) => ({
    slug: getSlug(p),
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;


  const parts = slug.split("-");
  const id = Number(parts.pop());
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container p-detail-container">
      <Breadcrumbs product={product} />

      <div className="p-detail-grid">
        <ProductGallery images={product.images ?? []} productName={product.title}/>
        <ProductInfo product={product} />
      </div>

      <ProductTabs product={product} />
    </div>
  );
}
