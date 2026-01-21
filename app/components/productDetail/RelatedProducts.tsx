const RELATED_MOCK = [
  { id: 1, title: "Balatas Brembo", price: "$1,850", cat: "FRENOS" },
  { id: 2, title: "Filtro K&N", price: "$1,200", cat: "FILTROS" },
];


export default function RelatedProducts() {
  return (
    <div className="related-section">
      <div className="related-header">
        <h2 className="section-title">Productos Relacionados</h2>
      </div>
      <div className="related-grid">
        {RELATED_MOCK.map((prod) => (
          <div key={prod.id} className="product-card">
            <div className="product-image" style={{ backgroundColor: '#333', height: '150px' }}></div>
            <div className="card-info">
              <div className="category">{prod.cat}</div>
              <div className="product-title">{prod.title}</div>
              <div className="price">{prod.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}