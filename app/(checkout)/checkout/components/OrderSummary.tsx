import { CartItem } from "@/types/product";
import SummaryProductItem from "./SummaryProductItem";

interface OrderSummaryProps {
  cartItems: CartItem[];
  onConfirm: () => void;
}

export default function OrderSummary({ cartItems, onConfirm }: OrderSummaryProps) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formattedTotal = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(total);

  return (
    <div className="sticky top-[100px] rounded-2xl border border-[#222] bg-[var(--bg-card)] p-7.5 max-[1000px]:static">
      <h3 className="flex items-center gap-2.5 text-xl font-bold text-[var(--text-white)]">Resumen de Orden</h3>

      <div className="my-5 flex max-h-[300px] flex-col gap-4 overflow-y-auto pr-1">
        {cartItems.map((item) => (
          <SummaryProductItem key={item.id} imageUrl={item.image} title={item.title} quantity={item.quantity} price={item.price} />
        ))}
      </div>

      <div className="my-6 text-right">
        <span className="text-sm text-text">Total</span>
        <span className="block text-[2.2rem] font-black leading-none text-[var(--primary-red)]">{formattedTotal}</span>
        <span className="text-[0.7rem] uppercase tracking-[1px] text-[#666]">Soles Peruanos</span>
      </div>

      <button
        className="flex w-full items-center justify-center gap-2.5 rounded-md bg-[var(--primary-red)] px-4 py-3.5 text-base font-extrabold uppercase text-white transition-colors hover:bg-[#d90000]"
        onClick={onConfirm}
      >
        Enviar pedido por WhatsApp
      </button>
    </div>
  );
}
