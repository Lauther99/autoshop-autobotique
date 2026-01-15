export default function ShopFilters() {
  return (
    <aside className="shop-sidebar">
      <div className="filter-section">
        {" "}
        <div className="filter-title">
          {" "}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ marginRight: 5 }}
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>{" "}
          Filtros{" "}
        </div>{" "}
      </div>{" "}
      <div className="filter-section">
        {" "}
        <div className="filter-title">Categorías</div>{" "}
        <ul className="category-list">
          {" "}
          <li className="active">
            {" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>{" "}
            Automóviles{" "}
          </li>{" "}
          <li>
            {" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>{" "}
            Camionetas{" "}
          </li>{" "}
          <li>
            {" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>{" "}
            SUVs & Off-road{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
      <div className="filter-section">
        {" "}
        <div className="filter-title">Rango de Precio</div>{" "}
        <div className="price-slider-visual">
          {" "}
          <div className="price-slider-bar"></div>{" "}
          <div className="price-slider-thumb" style={{ left: "20%" }}></div>{" "}
          <div
            className="price-slider-thumb"
            style={{ right: "20%", left: "auto" }}
          ></div>{" "}
        </div>{" "}
        <div className="price-inputs">
          {" "}
          <span className="price-tag">$50</span>{" "}
          <span style={{ color: "#555" }}>—</span>{" "}
          <span className="price-tag">$1500</span>{" "}
        </div>{" "}
      </div>{" "}
      <div className="filter-section">
        {" "}
        <div className="filter-title">Marcas Populares</div>{" "}
        <div className="brand-tags">
          {" "}
          <span className="brand-tag active">Bosch</span>{" "}
          <span className="brand-tag">Brembo</span>{" "}
          <span className="brand-tag">Michelin</span>{" "}
          <span className="brand-tag">Castrol</span>{" "}
          <span className="brand-tag">Mobil1</span>{" "}
        </div>{" "}
      </div>{" "}
      {/* <div className="trust-banner">
        {" "}
        <div style={{ color: "var(--primary-red)", marginBottom: 10 }}>
          {" "}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z" />
          </svg>{" "}
        </div>{" "}
        <h4 style={{ marginBottom: 5 }}>15 Años de Experiencia</h4>{" "}
        <p style={{ fontSize: "0.8rem", color: "#ccc", lineHeight: "1.4" }}>
          {" "}
          Garantía y confianza en cada pieza automotriz que vendemos.{" "}
        </p>{" "}
      </div>{" "} */}
    </aside>
  );
}
