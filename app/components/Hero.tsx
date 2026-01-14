import { numero } from "../../general_information/information";
import Link from 'next/link'


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
            <Link href="/tienda" className="btn btn-primary">Ir a la Tienda &rarr;</Link>
            <a
              href={`https://wa.me/${numero}?text=Hola%20quiero%20más%20información`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
