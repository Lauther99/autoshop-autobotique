"use client";
import { useProductStore } from "@/store/productStore";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

type SortType = "price-asc" | "price-desc";

export default function ShopHeader() {
  const setSortType = useProductStore((state) => state.setSortType);
  const type = useProductStore((state) => state.sortType); // Valor del store
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Leemos el valor de la URL o usamos el del Store como respaldo
  const currentSort = searchParams.get("sort") || type;

  const handleSort = (value: SortType) => {
    setSortType(value);

    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    params.set("page", "1");

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <header className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
      <h2 className="text-[1.8rem]">Tienda</h2>

      <div className="flex w-full items-center gap-2.5 sm:w-auto">
        <span className="text-[0.9rem] text-gray-500">Ordenar por:</span>

        <select
          onChange={(e) => handleSort(e.target.value as SortType)}
          value={currentSort}
          className="w-full rounded-md border border-[#333] bg-[#1f1f1f] px-[15px] py-2 text-white outline-none sm:w-auto"
        >
          <option value="price-asc">Menor Precio</option>
          <option value="price-desc">Mayor Precio</option>
        </select>
      </div>
    </header>
  );
}
