"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "@/types/product";

const LIMIT = 8;

function getSlug(product: Product) {
  const brand = product.brand ?? "";
  const slugParts = [];

  if (brand) {
    slugParts.push(
      brand.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
    );
  }

  slugParts.push(
    product.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
  );

  return `${slugParts.join("-")}-${product.id}`;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const offsetRef = useRef(0);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const currentQueryRef = useRef("");

  const fetchResults = useCallback(async (q: string, offset: number, append: boolean) => {
    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}&offset=${offset}&limit=${LIMIT}`);
    const data: Product[] = await res.json();

    // Ignore stale responses if query changed mid-flight
    if (currentQueryRef.current !== q) return;

    if (append) {
      setResults(prev => [...prev, ...data]);
    } else {
      setResults(data);
    }

    setHasMore(data.length === LIMIT);
    offsetRef.current = offset + data.length;
  }, []);

  // Debounce on query change
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setOpen(false);
      setHasMore(false);
      return;
    }

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      currentQueryRef.current = query;
      offsetRef.current = 0;
      setLoading(true);
      try {
        await fetchResults(query, 0, false);
        setOpen(true);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timerRef.current);
  }, [query, fetchResults]);

  // Infinite scroll — detect when near bottom of dropdown
  const handleScroll = useCallback(async () => {
    const list = listRef.current;
    if (!list || loadingMore || !hasMore) return;

    const nearBottom = list.scrollTop + list.clientHeight >= list.scrollHeight - 40;
    if (!nearBottom) return;

    setLoadingMore(true);
    try {
      await fetchResults(currentQueryRef.current, offsetRef.current, true);
    } finally {
      setLoadingMore(false);
    }
  }, [loadingMore, hasMore, fetchResults]);

  // Close on click outside
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (product: Product) => {
    setOpen(false);
    setQuery("");
    router.push(`/tienda/${getSlug(product)}`);
  };

  return (
    <div ref={containerRef} className="relative hidden w-[250px] md:block">
      <div className="flex items-center rounded-[20px] border border-[var(--color-border)] bg-[var(--bg-input)] px-[15px] py-2 text-[var(--text-white)]">
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          className="ml-2.5 w-full border-none bg-transparent text-[var(--text-white)] outline-none placeholder:text-[var(--text-gray)]"
          type="text"
          placeholder="Buscar accesorios..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setOpen(true)}
        />
        {loading && (
          <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        )}
      </div>

      {open && results.length > 0 && (
        <ul
          ref={listRef}
          onScroll={handleScroll}
          className="absolute top-full z-50 mt-2 max-h-[360px] w-full overflow-y-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xl"
        >
          {results.map((product) => (
            <li key={product.id}>
              <button
                type="button"
                onClick={() => handleSelect(product)}
                className="flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors hover:bg-[var(--bg-input)]"
              >
                {product.images?.[0] && (
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={40}
                    height={40}
                    className="h-10 w-10 flex-shrink-0 rounded object-cover"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[var(--text-white)]">{product.title}</p>
                  <p className="text-xs text-[var(--text-gray)]">{product.brand} · S/ {product.price}</p>
                </div>
              </button>
            </li>
          ))}
          {loadingMore && (
            <li className="flex justify-center py-3">
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            </li>
          )}
        </ul>
      )}

      {open && results.length === 0 && !loading && query.trim() && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--text-gray)] shadow-xl">
          Sin resultados para &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
