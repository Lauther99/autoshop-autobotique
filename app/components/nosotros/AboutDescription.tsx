export default function AboutDescription() {
  return (
    <div style={{ textAlign: "center", marginBottom: "80px" }}>
      {/* --- TIMELINE --- */}
      {/* <section className="timeline-section">
          <div className="timeline-header">
            <h2>Nuestra Evolución</h2>
            <p style={{color: '#888'}}>Un recorrido marcado por la innovación y el compromiso.</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              </div>
              <div className="timeline-content">
                <h3>2008</h3>
                <h4>El Comienzo</h4>
                <p>Nacimos en un pequeño garaje local, impulsados por la visión de personalizar vehículos con un nivel de detalle que el mercado convencional no ofrecía.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M8 17V7"/><path d="M12 17V7"/><path d="M16 17V7"/><path d="M8 7h8"/><path d="M8 17h8"/></svg>
              </div>
              <div className="timeline-content">
                <h3>2015</h3>
                <h4>Expansión Boutique</h4>
                <p>Inauguramos nuestro showroom principal. Dejamos de ser solo un taller para convertirnos en una "Autoboutique" especializada en accesorios de marcas premium internacionales.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon" style={{background: 'var(--primary-red)', color: 'white'}}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              </div>
              <div className="timeline-content">
                <h3>Hoy</h3>
                <h4>Líderes en el Mercado</h4>
                <p>Con más de 15,000 clientes satisfechos y una red de distribución nacional, somos el referente en tecnología automotriz, iluminación LED y audio de alta fidelidad.</p>
              </div>
            </div>
          </div>
        </section> */}

      <h2 className="section-title mt-10">
        Quienes <span className="text-red">Somos</span>
      </h2>

      <p
        className="
    mx-auto max-w-[850px] px-2.5
    text-justify text-[1.05rem] leading-[1.9]
    tracking-[0.3px] text-gray
  "
      >
        <span className="font-semibold text-[var(--primary-red)]">
          AutoShop Autoboutique
        </span>{" "}
        es una tienda especializada en productos exclusivos para autos,
        camionetas y camiones. Contamos con más de 15 años de experiencia en el
        sector automotriz, ofreciendo soluciones de alta calidad en accesorios,
        iluminación, audio, seguridad y personalización vehicular.
        <br />
        <br />
        Nos diferenciamos por trabajar con marcas reconocidas, precios
        competitivos por debajo del mercado y una atención personalizada 1 a 1,
        respaldada por un equipo técnico especializado que asesora al cliente
        antes, durante y después de cada compra.
        <br />
        <br />
        Nuestra tienda virtual nace para acercar lo mejor del mundo automotriz a
        todo el Perú, de forma rápida, segura y confiable.
      </p>
    </div>
  );
}
