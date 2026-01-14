

export default function FeaturedProducts() {
  return (
    <section className="products-section container">
      <div className="section-header">
        <h2>PRODUCTOS <span className="text-red">DESTACADOS</span></h2>
        <a href="#" className="text-red" style={{fontSize: '0.9rem'}}>Ver todo el catálogo &#x2197;</a>
      </div>

      <div className="products-grid">
        <div className="product-card">
          <span className="card-badge">NUEVO</span>
          <div className="product-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1622185124119-9f7983694002?q=80&w=400&auto=format&fit=crop')"}} />
          <div className="card-info">
            <div className="category">Iluminación</div>
            <div className="product-title">Faros LED Pro Ultra</div>
            <div className="price">$1,200 <small>MXN</small></div>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=400&auto=format&fit=crop')"}} />
          <div className="card-info">
            <div className="category">Interior</div>
            <div className="product-title">Fundas Premium Sport</div>
            <div className="price">$2,500 <small>MXN</small></div>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image" style={{backgroundImage: "url('https://m.media-amazon.com/images/I/71wLpWJtY5L._AC_SL1500_.jpg')"}} />
          <div className="card-info">
            <div className="category">Protección</div>
            <div className="product-title">Tapetes de Uso Rudo 4D</div>
            <div className="price">$850 <small>MXN</small></div>
          </div>
        </div>

        <div className="product-card">
          <span className="card-badge" style={{background: '#444'}}>OFERTA</span>
          <div className="product-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=400&auto=format&fit=crop')"}} />
          <div className="card-info">
            <div className="category">Limpieza</div>
            <div className="product-title">Kit de Limpieza Pro Master</div>
            <div className="price">$450 <small>MXN</small> <span>$600</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}


