import Link from "next/link";
import SearchBar from "@/app/components/layout/SearchBar";

export default function ShopBreadcrumbs() {
  return (
    <div className="py-5 flex flex-col gap-5">
      <SearchBar className="relative block w-[250px] md:hidden w-full"/>
      <div className="flex items-center text-[0.9rem]">
        <Link href="/" className="text-gray-400">
          Inicio
        </Link>
        <span className="px-2">&gt;</span>
        <span className="text-text">Tienda</span>
      </div>
    </div>
  );
}
