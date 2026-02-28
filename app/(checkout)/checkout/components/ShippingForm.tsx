import StepHeader from "./StepHeader";

interface ShippingFormProps {
  shipping: {
    fullName: string;
    address: string;
    city: string;
    phone: string;
  };
  onChange: (field: keyof ShippingFormProps["shipping"], value: string) => void;
}

export default function ShippingForm({ shipping, onChange }: ShippingFormProps) {
  const handlePhoneChange = (val: string | undefined | null) => {
    if (!val) return "";
    const onlyNums = val.replace(/[^0-9]/g, "");
    return onlyNums.length <= 9 ? onlyNums : onlyNums.slice(0, 9);
  };

  return (
    <section className="mb-11">
      <StepHeader number={1} title="Datos de Envio" />

      <div className="grid grid-cols-1 gap-5 min-[600px]:grid-cols-2">
        <div className="min-[600px]:col-span-2">
          <label className="mb-2.5 block text-[0.85rem] font-medium text-text">Nombre Completo</label>
          <input
            className="w-full rounded-md border border-[#333] bg-[var(--bg-input)] p-3 text-[var(--text-white)] outline-none placeholder:text-[#777] focus:border-[var(--primary-red)]"
            value={shipping.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="Nombre completo"
          />
        </div>

        <div className="min-[600px]:col-span-2">
          <label className="mb-2.5 block text-[0.85rem] font-medium text-text">Direccion</label>
          <input
            className="w-full rounded-md border border-[#333] bg-[var(--bg-input)] p-3 text-[var(--text-white)] outline-none placeholder:text-[#777] focus:border-[var(--primary-red)]"
            value={shipping.address}
            onChange={(e) => onChange("address", e.target.value)}
            placeholder="Direccion"
          />
        </div>

        <div>
          <label className="mb-2.5 block text-[0.85rem] font-medium text-text">Ciudad</label>
          <input
            value={shipping.city}
            className="w-full rounded-md border border-[#333] bg-[var(--bg-input)] p-3 text-[var(--text-white)] outline-none placeholder:text-[#777] focus:border-[var(--primary-red)]"
            onChange={(e) => onChange("city", e.target.value)}
            placeholder="Ciudad"
          />
        </div>

        <div>
          <label className="mb-2.5 block text-[0.85rem] font-medium text-text">Celular</label>
          <input
            className="w-full rounded-md border border-[#333] bg-[var(--bg-input)] p-3 text-[var(--text-white)] outline-none placeholder:text-[#777] focus:border-[var(--primary-red)]"
            value={shipping.phone}
            onChange={(e) => onChange("phone", handlePhoneChange(e.target.value))}
            placeholder="Celular"
          />
        </div>
      </div>
    </section>
  );
}
