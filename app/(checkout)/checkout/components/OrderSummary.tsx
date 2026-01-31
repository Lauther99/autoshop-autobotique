import { CartItem } from "@/types/product";
import SummaryProductItem from "./SummaryProductItem";

interface OrderSummaryProps {
  cartItems: CartItem[];
  onConfirm: () => void;
}

export default function OrderSummary({
  cartItems,
  onConfirm,
}: OrderSummaryProps) {
  // El cálculo del total sigue siendo exactamente el mismo
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // Cambiamos los parámetros para formatear a Soles Peruanos (PEN)
  const formattedTotal = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN", // <--- Código para Sol Peruano
  }).format(total);

  return (
    <div className="order-summary-box">
      <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        Resumen de Orden
      </h3>

      {/* Productos */}
      <div className="summary-products-list">
        {cartItems.map((item) => (
          <SummaryProductItem
            key={item.id}
            imageUrl={item.image}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </div>

      <div className="summary-total-big">
        <span>Total</span>
        {/* El resultado ahora se mostrará con el formato de Soles, ej: "S/ 2,167.24" */}
        <span className="total-value-red">{formattedTotal}</span>
        <span className="total-currency-label">Soles Peruanos</span>{" "}
        {/* <-- También actualizamos esta etiqueta */}
      </div>

      <button className="btn-checkout" onClick={onConfirm}>
        Enviar pedido por WhatsApp
      </button>
    </div>
  );
}
