import Image from "next/image";
import "./styles.css";
import { PiHandshake } from "react-icons/pi";
import { FiUserCheck } from "react-icons/fi";
import Link from 'next/link'

const numero = "51952295928";

export default function AboutPage() {
  return (
    <>
      {/* --- ABOUT HERO --- */}
      <section className="about-hero">
        {/* <span className="pill-badge">Desde 2008</span> */}
        <h1>
          15 Años de Pasión <br />
          <span style={{ color: "var(--primary-red)" }}>Automotriz</span>
        </h1>
        <p>
          Transformando la experiencia de conducir con precisión técnica,
          materiales de alta gama y un estilo inigualable que define a cada
          conductor.
        </p>
        {/* <button className="btn btn-primary">Nuestra Trayectoria</button> */}
      </section>

      <div className="container">
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

        {/* --- MISSION & VISION --- */}
        <section className="mv-grid">
          <div className="mv-card">
            <div className="mv-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </div>
            <h3>Misión</h3>
            <p>
              Brindar productos automotrices de alta calidad y tecnología, con
              asesoría especializada y atención personalizada, superando las
              expectativas de nuestros clientes y aportando valor real a cada
              vehículo.
            </p>
          </div>
          <div className="mv-card">
            <div className="mv-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3>Visión</h3>
            <p>
              Ser la AutoBoutique líder a nivel nacional, reconocida por su
              innovación, confianza, precios competitivos y excelencia en el
              servicio, consolidándonos como la primera opción en compras
              automotrices tanto físicas como digitales.
            </p>
          </div>
        </section>

        {/* --- VALUES --- */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 className="section-title">
            Nuestros <span className="text-red">Valores</span>
          </h2>
        </div>

        <section className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              {/* Calidad → Shield Check */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h4>Calidad</h4>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "10px" }}>
              Solo trabajamos con productos probados y marcas confiables.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <PiHandshake style={{ width: "40px", height: "40px" }} />
            </div>
            <h4>Confianza</h4>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "10px" }}>
              Transparencia total en cada venta.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              {/* Experiencia → Award */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="m8.21 13.89-1.16 7A1 1 0 0 0 8 22l4-2 4 2a1 1 0 0 0 1-1.11l-1.16-7" />
              </svg>
            </div>
            <h4>Experiencia</h4>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "10px" }}>
              Más de 15 años respaldan nuestro conocimiento.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              {/* Atención personalizada → User Check */}
              <FiUserCheck style={{ width: "40px", height: "40px" }} />
            </div>
            <h4>Atención personalizada</h4>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "10px" }}>
              Cada cliente es único.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              {/* Innovación → Lightbulb */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <circle cx="12" cy="10" r="7" />
              </svg>
            </div>
            <h4>Innovación</h4>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "10px" }}>
              Siempre a la vanguardia del mundo automotriz.
            </p>
          </div>
        </section>

        {/* --- GALLERY SECTION --- */}
        <section className="gallery-section">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                Nuestras <span className="text-red">Instalaciones</span>
              </h2>
              <p style={{ color: "#888", marginTop: "5px" }}>
                Donde la magia sucede cada día.
              </p>
            </div>
            <a href="#" className="text-red" style={{ fontWeight: 600 }}>
              Ver Galería Completa &rarr;
            </a>
          </div>

          <div className="gallery-bento">
            {/* Imagen Grande Izquierda */}
            <div className="gallery-item large">
              <img
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop"
                alt="Taller interior"
              />
              <div className="gallery-caption">Showroom Principal</div>
            </div>
            {/* Imagen Pequeña Arriba Derecha */}
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop"
                alt="Detalle auto"
              />
              <div className="gallery-caption">Área de Detallado</div>
            </div>
            {/* Imagen Pequeña Abajo Derecha */}
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1632823471565-1ec2843eaeb3?q=80&w=800&auto=format&fit=crop"
                alt="Sala de espera"
              />
              <div className="gallery-caption">Sala VIP</div>
            </div>
          </div>
        </section>

        {/* --- CTA BANNER --- */}
        <section className="cta-banner">
          <div className="cta-content">
            <h2>¿Listo para mejorar tu vehículo?</h2>
            <p>
              Sé parte de nuestra historia. Únete a los miles de conductores que
              ya han transformado su experiencia al volante con nosotros.
            </p>
          </div>
          <div className="cta-buttons">
            <Link href="/tienda" className="btn btn-white">Explorar Catálogo</Link>
            <a
              href={`https://wa.me/${numero}?text=Hola%20quiero%20más%20información`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Contactar Asesor
            </a>
          </div>

          {/* Decorative Background Icon */}
          <div className="cta-watermark">
            <svg
              width="250"
              height="250"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm1 4h-2v5.41l4.29 4.29 1.41-1.41-3.7-3.7V8z" />
            </svg>
          </div>
        </section>
      </div>
    </>
  );
}
