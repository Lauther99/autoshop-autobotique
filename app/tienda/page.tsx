// export const dynamic = "force-dynamic";

import { Suspense } from "react";
import ShopPage from "../components/shop/ShopPage";
import './tienda_modules.css'

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ShopPage />
    </Suspense>
  );
}
