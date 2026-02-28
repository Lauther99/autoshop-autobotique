"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import { numero } from "@/data/information";
import { currencies } from "@/types/product";
import { CartItemComponent } from "./CartItem";
import Toast from "@/app/components/ui/Toast";

export default function CartModal() {
  const isCartOpen = useCartStore((s) => s.isCartOpen);
  const closeCart = useCartStore((s) => s.closeCart);
  const items = useCartStore((s) => s.items);
  const [deleteToast, setDeleteToast] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  useEffect(() => {
    if (!deleteToast) return;
    const timer = setTimeout(() => {
      setDeleteToast(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [deleteToast]);

  if (!isCartOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const iva = subtotal * 0.16 * 0;
  const total = subtotal + iva;

  return (
    <div className="fixed inset-0 z-[99999] m-auto overflow-y-auto bg-[var(--color-bg)] p-1.5 sm:p-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <header className="mb-8">
          <div className="flex justify-between gap-4">
            <h1 className="mb-2.5 text-3xl font-bold sm:text-[2.5rem]">
              Tu Carrito
            </h1>
            <button
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#1a1a1a] text-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-colors hover:bg-[var(--primary-red)]"
              onClick={closeCart}
              aria-label="Cerrar carrito"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[#888]">
              Tienes{" "}
              <strong className="text-text">{items.length} productos</strong>{" "}
              listos para el envio
            </p>

            <button
              type="button"
              className="flex cursor-pointer items-center gap-1.5 font-semibold text-[var(--primary-red)]"
              onClick={closeCart}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              Seguir comprando
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-10 min-[900px]:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-5">
            {items.map((item) => (
              <CartItemComponent
                key={item.id}
                item={item}
                setDeleteToast={setDeleteToast}
              />
            ))}

            {items.length === 0 && (
              <div className="rounded-lg border border-dashed border-[#333] p-10 text-center">
                <p>Tu carrito esta vacio.</p>
              </div>
            )}

            <div className="mt-2.5 flex flex-wrap justify-evenly gap-5 border-t border-[#222] pt-[30px]">
              <div className="flex items-center gap-3.5">
                <div className="text-[var(--primary-red)]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div>
                  <h5 className="mb-1 text-sm">Envio Seguro</h5>
                  <p className="text-xs text-[#888]">Rastreo en tiempo real</p>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="text-[var(--primary-red)]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
                <div>
                  <h5 className="mb-1 text-sm">Soporte Tecnico</h5>
                  <p className="text-xs text-[#888]">Asesoria especializada</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-fit rounded-xl border border-[#222] bg-[var(--bg-card)] p-[30px]">
              <h3 className="mb-6 text-[1.3rem] font-bold">
                Resumen del Pedido
              </h3>

              <div className="mb-3.5 flex justify-between text-[0.95rem] text-text">
                <span>Subtotal</span>
                <span>
                  {currencies.SOL}
                  {subtotal.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>

              <div className="mb-3.5 flex justify-between text-[0.95rem] text-text">
                <span>Envio (Estimado)</span>
                <span className="font-semibold text-[#2ecc71]">Gratis!</span>
              </div>

              <div className="my-5 flex items-center justify-between border-t border-[#333] pt-5">
                <span className="text-[1.1rem] font-bold">Total</span>
                <span className="text-[1.8rem] font-extrabold text-[var(--primary-red)]">
                  {currencies.SOL}
                  {total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
              </div>

              <Link href="/checkout">
                <button
                  className="flex w-full items-center justify-center gap-2.5 rounded-md bg-[var(--primary-red)] p-4 text-base font-extrabold uppercase text-white transition-colors hover:bg-[#d90000] disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={items.length < 1}
                  onClick={() => {
                    if (items.length < 1) return;
                    router.push("/checkout");
                  }}
                >
                  Finalizar Compra
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </Link>

              <div className="mt-5 text-center">
                <span className="mb-2.5 block text-[0.7rem] font-bold uppercase text-[#666]">
                  Metodos de pago seguros
                </span>
                <div className="flex justify-center gap-3.5 text-[#888]">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 21h18" />
                    <path d="M5 21v-7" />
                    <path d="M19 21v-7" />
                    <path d="M2 10l10-7 10 7v4H2v-4z" />
                  </svg>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <p className="mt-3.5 text-[0.7rem] text-[#555]">
                  Tus datos estan protegidos por encriptacion.
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3.5 rounded-lg border border-[rgba(255,26,26,0.2)] bg-[rgba(255,26,26,0.08)] p-5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-red)] text-xs font-bold text-white">
                ?
              </div>
              <div>
                <h5 className="mb-1 text-sm font-semibold">Necesitas ayuda?</h5>
                <p className="text-xs leading-[1.4] text-text">
                  Llamanos al +{numero} o chatea con un experto ahora.
                </p>
              </div>
            </div>
            <div className="mt-5 mb-[30px] rounded-xl border border-[rgba(255,26,26,0.25)] bg-[rgba(255,26,26,0.06)] p-4">
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-[var(--primary-red)]">
                Informacion de entrega
              </h4>
              <ul className="space-y-1.5 text-sm leading-relaxed text-[var(--text-white)]">
                <li>Envio gratis a todo Piura.</li>
                <li>Delivery fuera de Piura: entre 3 y 5 dias habiles.</li>
                <li>Retiro en tienda gratis en horario de atencion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`toast-wrapper ${deleteToast ? "active" : ""}`}>
        <Toast
          title="Atencion"
          message="Item borrado!"
          type="success"
          onClose={() => setDeleteToast(false)}
        />
      </div>
    </div>
  );
}
