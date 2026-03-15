import { Suspense } from "react";
import ShopPage from "@/app/components/shop/ShopPage";
import WhatsAppButton from "@/app/components/ui/WhatsAppButton";
import { getProducts } from "@/lib/products";

export default async function Page() {
  const products = await getProducts();

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ShopPage products={products} />
      <WhatsAppButton />
    </Suspense>
  );
}
