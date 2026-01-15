import Link from "next/link";

export default function ShopBreadcrumbs() {
  return (
    <div className="breadcrumbs">
      <Link href="/">Inicio</Link><span>&gt;</span> <span className="active">Tienda</span>
    </div>
  );
}
