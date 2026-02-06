import Image from "next/image";

interface SummaryProductItemProps {
  imageUrl?: string;
  title: string;
  quantity: number;
  price: number;
  currency?: string;
}

export default function SummaryProductItem({
  imageUrl,
  title,
  quantity,
  price,
  currency = "",
}: SummaryProductItemProps) {
  const formattedTotal = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN", // <--- Código para Sol Peruano
  }).format(price);

  return (
    <div className="summary-product-item">
      <div className="summary-product-img">
        <Image
          src={imageUrl ?? "/assets/logo2.png"}
          alt={title}
          fill
        />
      </div>

      <div className="summary-product-info">
        <h4>{title}</h4>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <span>Cant: {quantity}</span>
          <span>
            {formattedTotal}
          </span>
        </div>
      </div>
    </div>
  );
}
