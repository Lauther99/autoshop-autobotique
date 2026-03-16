import Link from "next/link";

export default function ShopBreadcrumbs() {
  return (
    <div className="flex py-5 items-center text-[0.9rem]">
      <Link href="/" className="text-gray-400">
        Inicio
      </Link>
      <span className="px-2">&gt;</span>
      <span className="text-text">Tienda</span>
    </div>
  );
}
