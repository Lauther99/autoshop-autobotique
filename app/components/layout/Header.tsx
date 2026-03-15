"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import SearchBar from "@/app/components/layout/SearchBar";

type ThemeMode = "dark" | "light";

const NAV_LINKS = [
  {
    href: "/",
    label: "Inicio",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    href: "/tienda",
    label: "Tienda",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    href: "/nosotros",
    label: "Sobre Nosotros",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
];

const linkClass =
  "relative pb-0.5 transition-colors duration-300 hover:text-[var(--primary-red)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--primary-red)] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100";

function ThemeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" /><path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" /><path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export default function Header() {
  const { items } = useCartStore();
  const toggleCart = useCartStore((state) => state.toggleCart);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-surface)]/10 backdrop-blur-[10px]">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-4">
          {/* Logo */}
          <div className="inline-block skew-x-[-15deg] py-2.5 text-left">
            <h1 className="m-0 p-0 text-[2rem] font-black leading-none tracking-[-2px]">
              <span className="text-[var(--primary-red)]">AUTO</span>
              <span className="text-[var(--text-white)]">SHOP</span>
            </h1>
            <span className="mt-0.5 block text-base font-black text-[var(--primary-red)] tracking-[4px]">
              AUTOBOUTIQUE
            </span>
          </div>

          {/* Desktop nav */}
          <nav>
            <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link className={linkClass} href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop right actions */}
          <div className="hidden items-center gap-4 md:flex">
            <SearchBar />
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--bg-input)] text-[var(--text-white)] transition-colors hover:border-[var(--primary-red)]"
              aria-label="Cambiar tema"
            >
              <ThemeIcon />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className="relative cursor-pointer"
              aria-label="Abrir carrito"
            >
              <CartIcon />
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--primary-red)] text-[10px] leading-none text-white">
                {items.length}
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--bg-input)] text-[var(--text-white)] md:hidden"
            aria-label="Abrir menú"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-[70] flex h-full bg-[var(--color-bg)] w-[85%] flex-col bg-[#120808] transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header del drawer */}
        <div className="flex items-center justify-between px-6 py-5">
          <span className="text-2xl font-black text-text">MENÚ</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary-red)] text-white"
            aria-label="Cerrar menú"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="px-4 pb-4">
          <SearchBar className="relative w-full" />
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ href, label, icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[var(--primary-red)] text-text"
                        : "text-text hover:bg-[var(--primary-red)]/5"
                    }`}
                  >
                    <span className="flex-shrink-0">{icon}</span>
                    <span className="flex-1">{label}</span>
                    {!isActive && (
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Divider */}
        <div className="mx-4 border-t border-white/10" />

        {/* Theme toggle */}
        <div className="flex items-center justify-between px-7 py-4">
          <div className="flex items-center gap-3 text-text">
            <ThemeIcon />
            <span className="text-sm font-medium">Modo oscuro</span>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            suppressHydrationWarning
            className={`relative h-6 w-11 rounded-full transition-colors duration-200 ${
              theme === "dark" ? "bg-[var(--primary-red)]" : "bg-gray-600"
            }`}
          >
            <span
              suppressHydrationWarning
              className={`absolute left-0 top-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 ${
                theme === "dark" ? "translate-x-1" : "translate-x-6"
              }`}
            />
          </button>
        </div>

        {/* Cart */}
        <div className="px-4 pb-6">
          <button
            type="button"
            onClick={() => { setMenuOpen(false); toggleCart(); }}
            className="flex w-full items-center gap-3 rounded-xl bg-white px-4 py-3 text-gray-900"
            aria-label="Abrir carrito"
          >
            <CartIcon />
            <span className="flex-1 text-left text-sm font-semibold">Carrito</span>
            {items.length > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary-red)] text-[11px] font-bold leading-none text-white">
                {items.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
