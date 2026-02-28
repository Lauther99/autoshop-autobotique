"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

type ThemeMode = "dark" | "light";

export default function Header() {
  const { items } = useCartStore();
  const toggleCart = useCartStore((state) => state.toggleCart);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "dark";
    const persisted = localStorage.getItem("theme");
    const rootTheme = document.documentElement.getAttribute("data-theme");
    return rootTheme === "light" || persisted === "light" ? "light" : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-4">
        <div className="inline-block skew-x-[-15deg] py-2.5 text-left">
          <h1 className="m-0 p-0 text-[2rem] font-black leading-none tracking-[-1px] tracking-[-2px]">
            <span className="text-[var(--primary-red)]">AUTO</span>
            <span className="text-[var(--text-white)]">SHOP</span>
          </h1>
          <span className="mt-0.5 block text-base font-black text-[var(--primary-red)] tracking-[4px]">
            AUTOBOUTIQUE
          </span>
        </div>

        <nav className="flex items-center">
          <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
            <li>
              <Link className="transition-colors duration-300 hover:text-[var(--primary-red)]" href="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="transition-colors duration-300 hover:text-[var(--primary-red)]" href="/tienda">
                Tienda
              </Link>
            </li>
            <li>
              <Link className="transition-colors duration-300 hover:text-[var(--primary-red)]" href="/nosotros">
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden w-[250px] items-center rounded-[20px] border border-[var(--color-border)] bg-[var(--bg-input)] px-[15px] py-2 text-[var(--text-white)] md:flex">
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              className="ml-2.5 w-full border-none bg-transparent text-[var(--text-white)] outline-none placeholder:text-[var(--text-gray)]"
              type="text"
              placeholder="Buscar accesorios..."
            />
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--bg-input)] text-[var(--text-white)] transition-colors hover:border-[var(--primary-red)]"
            aria-label="Cambiar tema"
            title="Cambiar tema"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </button>

          <button
            type="button"
            onClick={toggleCart}
            className="relative cursor-pointer"
            aria-label="Abrir carrito"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--primary-red)] text-[10px] leading-none text-white">
              {items.length}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
