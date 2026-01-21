
import { products } from "@/data/products";
import "./producto_modules.css";
import Breadcrumbs from "@/app/components/productDetail/Breadcrumbs";
import ProductGallery from "@/app/components/productDetail/ProductGallery";
import ProductInfo from "@/app/components/productDetail/ProductInfo";
import ProductTabs from "@/app/components/productDetail/ProductTabs";
import RelatedProducts from "@/app/components/productDetail/RelatedProducts";

interface Props {
  params: { slug: string };
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
        <ProductGallery images={product.images ?? []} />
        <ProductInfo product={product} />
      </div>

      <ProductTabs product={product} />
    </div>
  );
}
