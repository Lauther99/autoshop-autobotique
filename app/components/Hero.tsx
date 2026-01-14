

export default function Hero() {
  return (
    <section className="hero-image">
      <div className="hero container">
        <div className="hero-content">
          {/* <span className="badge">15 AÑOS DE EXCELENCIA</span> */}
          <h1>
            Expertos en <br />
            Accesorios para tu <br />
            <span>Vehículo</span>
          </h1>
          <p>
            Transforma tu experiencia de manejo con los mejores accesorios del
            mercado. <br />Calidad premium y asesoría profesional respaldada por más
            de una década en la industria.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Ir a la Tienda &rarr;</button>
            <button className="btn btn-outline">Contáctanos</button>
          </div>
        </div>
      </div>
    </section>
  );
}
