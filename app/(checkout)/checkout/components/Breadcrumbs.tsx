import Link from "next/link";

export default function Breadcrumbs() {
  return (
    <div className="flex items-center gap-2 pt-7.5 text-sm text-[var(--text-gray)]">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
      <Link href="/">Inicio</Link>
      <span>/</span>
      <span>Carrito</span>
      <span>/</span>
      <span className="text-[var(--primary-red)]">Finalizar Compra</span>
    </div>
  );
}
