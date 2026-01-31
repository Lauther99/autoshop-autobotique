import { ChangeEvent } from "react";
import StepHeader from "./StepHeader";

interface ShippingFormProps {
  shipping: {
    fullName: string;
    address: string;
    city: string;
    phone: string;
  };
  // onPhoneChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange: (field: keyof ShippingFormProps["shipping"], value: string) => void;
}

export default function ShippingForm({
  shipping,
  // onPhoneChange,
  onChange,
}: ShippingFormProps) {
  const handlePhoneChange = (val: string | undefined | null) => {
    if (val) {
      const onlyNums = val.replace(/[^0-9]/g, "");
      if (onlyNums.length <= 9) {
        return onlyNums;
      } else {
        return onlyNums.slice(0, 9); // solo los primeros 9 dígitos
      }
    }
    return "";
  };

  return (
    <section className="checkout-step">
      <StepHeader number={1} title="Datos de Envío" />

      <div className="checkout-form-grid">
        <div className="form-group full">
          <label className="checkout-label">Nombre Completo</label>
          <input
            className="form-input"
            value={shipping.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="Nombre completo"
          />
        </div>

        <div className="form-group full">
          <label className="checkout-label">Dirección</label>
          <input
            className="form-input"
            value={shipping.address}
            onChange={(e) => onChange("address", e.target.value)}
            placeholder="Dirección"
          />
        </div>

        <div className="form-group">
          <label className="checkout-label">Ciudad</label>
          <input
            value={shipping.city}
            className="form-input"
            onChange={(e) => onChange("city", e.target.value)}
            placeholder="Ciudad"
          />
        </div>

        <div className="form-group">
          <label className="checkout-label">Celular</label>
          <input
            className="form-input"
            value={shipping.phone}
            onChange={(e) =>
              onChange("phone", handlePhoneChange(e.target.value))
            }
            placeholder="Celular"
          />
        </div>
      </div>
    </section>
  );
}
