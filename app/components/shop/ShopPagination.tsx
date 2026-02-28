"use client";
import { useProductStore } from "@/store/productStore";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function ShopPagination() {
  const currentPage = useProductStore((s) => s.currentPage);
  const totalPages = useProductStore((s) => s.totalPages);
  const setPage = useProductStore((s) => s.goToPage);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`${pathname}?${params.toString()}`);
    setPage(page);
  };

  const siblingCount = 2;

  const start = Math.max(1, currentPage - siblingCount);
  const end = Math.min(totalPages, currentPage + siblingCount);

  const pages = [];
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="mt-12 flex justify-center gap-2.5">
      {/* Prev */}
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-[#333] text-text transition hover:bg-[#222] hover:text-[#fff] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <svg
          width="16"
          height="16"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Si la ventana no empieza en 1 */}
      {start > 1 && (
        <>
          <button
            onClick={() => goToPage(1)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#333] text-white transition hover:bg-[#222] hover:text-[#fff] "
          >
            1
          </button>

          {start > 2 && (
            <span className="flex items-end px-1 text-[#666]">...</span>
          )}
        </>
      )}

      {/* Páginas visibles */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => goToPage(p)}
          className={`flex h-10 w-10 items-center justify-center rounded-md border transition
        ${
          p === currentPage
            ? "border-[var(--primary-red)] bg-[var(--primary-red)] text-[#fff]"
            : "border-[#333] text-text hover:bg-[#222] hover:text-[#fff] "
        }
      `}
        >
          {p}
        </button>
      ))}

      {/* Si la ventana no termina */}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className="flex items-end px-1 text-[#666]">...</span>
          )}

          <button
            onClick={() => goToPage(totalPages)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#333] text-text transition hover:bg-[#222] hover:text-[#fff] "
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-[#333] text-text transition hover:bg-[#222] hover:text-[#fff]  disabled:cursor-not-allowed disabled:opacity-40"
      >
        <svg
          width="16"
          height="16"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
