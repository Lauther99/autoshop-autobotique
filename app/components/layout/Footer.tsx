import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo1.png";
import { products } from "@/data/products";

export default function Footer() {
  const categories = [...new Set(products.map((p) => p.category.trim()))];

  return (
    <footer className="bg-[var(--color-surface)]">
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-5 pt-14">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr]">
          <div className="mb-4 flex items-center justify-center">
            <Image src={logo} alt="Logo Autoshop Autoboutique" width={180} height={160} />
          </div>

          <div>
            <h3 className="mb-5 text-sm tracking-[1px] text-text">NAVEGACION</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[var(--text-gray)]">
              <li>
                <Link className="transition-colors duration-200 hover:text-white" href="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="transition-colors duration-200 hover:text-white" href="/tienda">
                  Catalogo de Tienda
                </Link>
              </li>
              <li>
                <Link className="transition-colors duration-200 hover:text-white" href="/nosotros">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm tracking-[1px] text-text">CATEGORIAS</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[var(--text-gray)]">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    className="transition-colors duration-200 hover:text-white"
                    href={{ pathname: "/tienda", query: { cat } }}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm leading-6 text-[#777]">
              Lideres en personalizacion y equipamiento automotriz. 15 anos transformando autos comunes en vehiculos
              extraordinarios.
            </p>
            <div className="mt-4 flex gap-2.5">
              <a
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#333] transition-colors duration-200 hover:bg-[var(--primary-red)]"
                href="https://www.instagram.com/autoboutiqueautoshop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                </svg>
              </a>

              <a
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#333] transition-colors duration-200 hover:bg-[var(--primary-red)]"
                href="https://www.facebook.com/profile.php?id=100083540434022"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 3h-2.1v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#222] pt-5 text-center text-xs text-[#555]">
          © 2026 Autoshop Autoboutique. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
