// export const dynamic = "force-dynamic";

import { Suspense } from "react";
import ShopPage from "@/app/components/shop/ShopPage";
import WhatsAppButton from "@/app/components/ui/WhatsAppButton";

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ShopPage />
      <WhatsAppButton />
    </Suspense>
  );
}
