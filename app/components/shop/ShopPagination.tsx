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
    <div className="pagination">
      <button
        className="page-btn"
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        <svg width="16" height="16" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Si la ventana no empieza en 1 */}
      {start > 1 && (
        <>
          <button className="page-btn" onClick={() => goToPage(1)}>
            1
          </button>
          {start > 2 && <span className="dots">...</span>}
        </>
      )}
      {/* Páginas visibles */}
      {pages.map((p) => (
        <button
          key={p}
          className={`page-btn ${p === currentPage ? "active" : ""}`}
          onClick={() => goToPage(p)}
        >
          {p}
        </button>
      ))}
      {/* Si la ventana no termina en totalPages */}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="dots">...</span>}
          <button className="page-btn" onClick={() => goToPage(totalPages)}>
            {totalPages}
          </button>
        </>
      )}

      {/* Next */}
      <button
        className="page-btn"
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
      >
        <svg width="16" height="16" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}