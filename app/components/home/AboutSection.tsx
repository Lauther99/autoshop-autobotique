import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="about-section">
      <div className="container about-grid">
        <div>
          {/* <img
            src="/lugar1.webp"
            alt="Autoshop Storefront"
            className="about-image"
          /> */}
          <Image src={"/lugar1.webp"} alt="Autoshop" className="about-image" width={500} height={400}/>
        </div>

        <div>
          <h2 className="section-title">
            SOBRE <span className="text-red">NOSOTROS</span>
          </h2>
          <p style={{ color: "#ccc", lineHeight: "1.6" }}>
            Desde 2009, Autoshop Autoboutique ha sido el referente en accesorios
            automotrices. Nuestra misión es brindar soluciones estéticas y
            funcionales que superen las expectativas de nuestros clientes,
            manteniendo siempre los más altos estándares de calidad.
          </p>

          <div className="features">
            <div className="feature-item">
              <div style={{ color: "var(--primary-red)", marginBottom: "5px" }}>
                {/* Confianza */}
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h4>Confianza</h4>
              <p>Transparencia en cada servicio.</p>
            </div>

            <div className="feature-item">
              <div style={{ color: "var(--primary-red)", marginBottom: "5px" }}>
                {/* Calidad */}
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="m8.5 13.5-2.5 7 6-4 6 4-2.5-7" />
                </svg>
              </div>
              <h4>Calidad</h4>
              <p>Solo trabajamos con lo mejor.</p>
            </div>

            <div className="feature-item">
              <div style={{ color: "var(--primary-red)", marginBottom: "5px" }}>
                {/* Experiencia */}
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.3 6.2 21l1.5-6.4L2 9.8l6.6-.6L12 3l3.4 6.2 6.6.6-5.7 4.8L17.8 21z" />
                </svg>
              </div>
              <h4>Experiencia</h4>
              <p>Especialistas certificados.</p>
            </div>
          </div>
          <Link className="btn btn-outline" style={{ marginTop: "20px" }} href="/nosotros">Conocer nuestra historia &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
