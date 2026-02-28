import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[var(--color-surface)] py-20">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <Image
            src="/assets/photos/8.JPG"
            alt="Autoshop"
            className="h-[400px] w-full rounded-lg border-l-[5px] border-[var(--primary-red)] object-cover"
            width={500}
            height={400}
          />
        </div>

        <div>
          <h2 className="mb-4 text-[2rem] font-extrabold uppercase">
            SOBRE <span className="text-[var(--primary-red)]">NOSOTROS</span>
          </h2>
          <p className="leading-relaxed text-text">
            Desde 2009, Autoshop Autoboutique ha sido el referente en accesorios automotrices. Nuestra mision es
            brindar soluciones esteticas y funcionales que superen las expectativas de nuestros clientes, manteniendo
            siempre los mas altos estandares de calidad.
          </p>

          <div className="my-7 flex flex-wrap gap-7">
            <div>
              <div className="mb-1 text-[var(--primary-red)]">
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
              <h4 className="mb-1 text-text">Confianza</h4>
              <p className="text-sm text-[var(--text-gray)]">Transparencia en cada servicio.</p>
            </div>

            <div>
              <div className="mb-1 text-[var(--primary-red)]">
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
              <h4 className="mb-1 text-text">Calidad</h4>
              <p className="text-sm text-[var(--text-gray)]">Solo trabajamos con lo mejor.</p>
            </div>

            <div>
              <div className="mb-1 text-[var(--primary-red)]">
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
              <h4 className="mb-1 text-text">Experiencia</h4>
              <p className="text-sm text-[var(--text-gray)]">Especialistas certificados.</p>
            </div>
          </div>

          <Link
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-md border border-[var(--text-white)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--text-white)] transition-colors hover:bg-white/10"
            href="/nosotros"
          >
            Conocer nuestra historia &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
