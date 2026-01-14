import Image from "next/image";
import "./styles.css";

// Datos simulados basados en la imagen
const products = [
  {
    id: 1,
    brand: "BREMBO",
    title: "Kit de Frenos Deportivos High-Performance",
    price: 1250.00,
    oldPrice: 1450.00,
    image: "https://m.media-amazon.com/images/I/71wLpWJtY5L._AC_SL1500_.jpg", // Placeholder freno
    tag: "HOT",
    tagType: "hot"
  },
  {
    id: 2,
    brand: "MICHELIN",
    title: "Llantas All-Terrain Defender LTX M/S",
    price: 340.00,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1578844251758-2f71da645217?q=80&w=400&auto=format&fit=crop", // Placeholder llanta
    tag: null,
    tagType: null
  },
  {
    id: 3,
    brand: "PHILIPS",
    title: "Kit Iluminación LED CrystalVision H7 Ultra",
    price: 89.50,
    oldPrice: null,
    image: "https://m.media-amazon.com/images/I/71r+tO0fdyL._AC_SX679_.jpg", // Placeholder luces
    tag: "NEW",
    tagType: "new"
  },
  {
    id: 4,
    brand: "CASTROL",
    title: "Aceite Sintético EDGE 5W-30 Full Synthetic",
    price: 45.00,
    oldPrice: null,
    image: "https://m.media-amazon.com/images/I/71p0+tB0gZL._AC_SX679_.jpg", // Placeholder aceite
    tag: null,
    tagType: null
  },
  {
    id: 5,
    brand: "SPARCO",
    title: "Rines de Aleación Racing 18\" Negro Mate",
    price: 890.00,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1611821064430-0d410294c25c?q=80&w=400&auto=format&fit=crop", // Placeholder rin
    tag: null,
    tagType: null
  },
  {
    id: 6,
    brand: "BOSCH",
    title: "Pack Bujías de Iridio Platinum Plus x4",
    price: 58.00,
    oldPrice: null,
    image: "https://m.media-amazon.com/images/I/71nI6q+zD2L._AC_SX679_.jpg", // Placeholder bujías/zapatilla (la imagen original parece un zapato Sparco, pondré zapato)
    tag: null,
    tagType: null
  },
  {
    id: 7,
    brand: "K&N",
    title: "Filtro de Aire de Alto Flujo Lavable",
    price: 72.00,
    oldPrice: null,
    image: "https://m.media-amazon.com/images/I/81+p-rL0l-L._AC_SX679_.jpg", // Placeholder filtro
    tag: null,
    tagType: null
  },
  {
    id: 8,
    brand: "BILSTEIN",
    title: "Kit de Amortiguadores B8 Performance Plus",
    price: 560.00,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1626074125864-42cb91b8d2b7?q=80&w=400&auto=format&fit=crop", // Placeholder auto
    tag: null,
    tagType: null
  },
];

export default function ShopPage() {
  return (
    <div className="container">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        Inicio <span>&gt;</span> <span className="active">Catálogo de Productos</span>
      </div>

      <div className="shop-container">
        {/* --- SIDEBAR --- */}
        <aside className="shop-sidebar">
          
          <div className="filter-section">
            <div className="filter-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: 5}}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              Filtros
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-title">Categorías</div>
            <ul className="category-list">
              <li className="active">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
                Automóviles
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                Camionetas
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                SUVs & Off-road
              </li>
            </ul>
          </div>

          <div className="filter-section">
            <div className="filter-title">Rango de Precio</div>
            <div className="price-slider-visual">
               <div className="price-slider-bar"></div>
               <div className="price-slider-thumb" style={{left: '20%'}}></div>
               <div className="price-slider-thumb" style={{right: '20%', left: 'auto'}}></div>
            </div>
            <div className="price-inputs">
              <span className="price-tag">$50</span>
              <span style={{color: '#555'}}>—</span>
              <span className="price-tag">$1500</span>
            </div>
          </div>

          <div className="filter-section">
             <div className="filter-title">Marcas Populares</div>
             <div className="brand-tags">
               <span className="brand-tag active">Bosch</span>
               <span className="brand-tag">Brembo</span>
               <span className="brand-tag">Michelin</span>
               <span className="brand-tag">Castrol</span>
               <span className="brand-tag">Mobil1</span>
             </div>
          </div>

          <div className="trust-banner">
             <div style={{color: 'var(--primary-red)', marginBottom: 10}}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/></svg>
             </div>
             <h4 style={{marginBottom: 5}}>15 Años de Experiencia</h4>
             <p style={{fontSize: '0.8rem', color: '#ccc', lineHeight: '1.4'}}>
               Garantía y confianza en cada pieza automotriz que vendemos.
             </p>
          </div>

        </aside>

        {/* --- MAIN CONTENT --- */}
        <div className="shop-content">
          <header className="shop-header">
            <div>
              <h2>Mostrando 124 productos</h2>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <span style={{fontSize: '0.9rem', color: '#888'}}>Ordenar por:</span>
              <select className="sort-select">
                <option>Más relevantes</option>
                <option>Menor Precio</option>
                <option>Mayor Precio</option>
              </select>
            </div>
          </header>

          <div className="active-filters-bar">
             <div className="filter-pill">
               BOSCH <span style={{cursor:'pointer', marginLeft: 5}}>&times;</span>
             </div>
             <div className="filter-pill">
               AUTOMÓVILES <span style={{cursor:'pointer', marginLeft: 5}}>&times;</span>
             </div>
          </div>

          <div className="shop-grid">
            {products.map((product) => (
              <div key={product.id} className="shop-card">
                <div className="shop-image-container">
                  {product.tag && (
                    <span className={`badge-float ${product.tagType === 'hot' ? 'badge-hot' : 'badge-new'}`}>
                      {product.tag}
                    </span>
                  )}
                  {/* Nota: En producción usar next/image con width/height */}
                  <img src={product.image} alt={product.title} />
                </div>
                
                <div className="shop-info">
                  <div className="brand-label">{product.brand}</div>
                  <div className="shop-title">{product.title}</div>
                  <div className="shop-price">
                    ${product.price.toFixed(2)}
                    {product.oldPrice && <span>${product.oldPrice.toFixed(2)}</span>}
                  </div>
                  <button className="btn-add-cart">
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="page-btn">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span style={{display: 'flex', alignItems: 'end', color: '#666'}}>...</span>
            <button className="page-btn">8</button>
            <button className="page-btn">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}