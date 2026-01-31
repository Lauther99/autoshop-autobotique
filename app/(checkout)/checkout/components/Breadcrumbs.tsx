import Link from "next/link";

export default function Breadcrumbs() {
  return (
    <div className="breadcrumbs" style={{ paddingTop: "30px" }}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{ marginRight: "8px" }}
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
      Inicio <span>/</span> Carrito <span>/</span>{" "}
      <span className="active" style={{ color: "var(--primary-red)" }}>
        Finalizar Compra
      </span>
    </div>
  );
}
