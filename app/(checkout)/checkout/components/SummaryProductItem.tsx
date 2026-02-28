import Image from "next/image";

interface SummaryProductItemProps {
  imageUrl?: string;
  title: string;
  quantity: number;
  price: number;
}

export default function SummaryProductItem({ imageUrl, title, quantity, price }: SummaryProductItemProps) {
  const formattedTotal = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(price);

  return (
    <div className="flex items-center gap-3.5">
      <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-lg bg-white">
        <Image src={imageUrl ?? "/assets/logo2.png"} alt={title} fill style={{ objectFit: "contain", padding: 4 }} />
      </div>

      <div className="w-full">
        <h4 className="mb-1 text-[0.85rem] leading-[1.3] text-[var(--text-white)]">{title}</h4>
        <div className="flex items-center justify-between text-sm">
          <span className="text-text">Cant: {quantity}</span>
          <span className="font-semibold text-[var(--primary-red)]">{formattedTotal}</span>
        </div>
      </div>
    </div>
  );
}
