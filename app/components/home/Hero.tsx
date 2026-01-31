import { numero } from "@/data/information";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-image">
      <div className="hero container">
        <div className="hero-content animate-slide-in-left">
          {/* <span className="badge">15 AÑOS DE EXCELENCIA</span> */}
          <h1>
            Expertos en <br />
            Accesorios para tu <br />
            <span>Vehículo</span>
          </h1>
          <p>
            Transforma tu experiencia de manejo con los mejores accesorios del
            mercado. <br />
            Calidad premium y asesoría profesional respaldada por más de una
            década en la industria.
          </p>
          <div className="hero-buttons">
            <Link href="/tienda" className="btn btn-primary">
              Ir a la Tienda &rarr;
            </Link>

            <a
              href={`https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent("Hola, me gustaría tener más información.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Contáctanos
            </a>
          </div>
        </div>
        <Image
          src="/assets/logo1.png"
          alt=""
          width={450}
          height={370}
          style={{ objectFit: "cover"}}
        />
      </div>
    </section>
  );
}
