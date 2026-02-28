"use client";

import { useRouter } from "next/navigation";

export default function CheckoutHeader() {
  const router = useRouter();

  return (
    <header className="mt-7.5 flex flex-row justify-between items-center">
      <h1 className="mb-2.5 text-[2.5rem] font-black leading-tight text-[var(--text-white)]">
        Finalizar Compra
      </h1>
      <button
        type="button"
        onClick={() => router.back()}
        className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#333] bg-transparent px-3 py-2 text-sm text-[var(--text-gray)] transition-colors hover:border-[var(--primary-red)] hover:text-[var(--text-white)]"
      >
        <span aria-hidden="true">←</span>
        Volver
      </button>
    </header>
  );
}
