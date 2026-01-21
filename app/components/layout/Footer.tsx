"use client";

import { useProductStore } from "@/store/productStore";
import Image from "next/image";
import logo from "@/public/assets/logo1.png";
import Link from "next/link";

export default function Footer() {
  const products = useProductStore((state) => state.products);
  const categories = [...new Set(products.map((p) => p.category.trim()))];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div
            className=""
            style={{
              marginBottom: "15px",
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={logo}
              alt="Logo Autoshop Autoboutique"
              width={180}
              height={160}
            />
          </div>

          <div>
            <h3>NAVEGACIÓN</h3>
            <ul>
              <Link href="/">Inicio</Link>
              <Link href="/tienda">Catálogo de Tienda</Link>
              <Link href="/nosotros">Nosotros</Link>
              {/* 
              <li>Galería de Proyectos</li>
              <li>Servicios de Taller</li> */}
            </ul>
          </div>

          <div>
            <h3>CATEGORÍAS</h3>
            <ul>
              {categories.map((cat) => {
                return (
                  <Link
                    key={cat}
                    href={{
                      pathname: "/tienda",
                      query: { cat: cat },
                    }}
                  >
                    {cat}
                  </Link>
                );
              })}
            </ul>
          </div>

          {/* <div>
            <h3>NEWSLETTER</h3>
            <p
              style={{
                color: "#777",
                fontSize: "0.9rem",
                marginBottom: "10px",
              }}
            >
              Suscríbete para recibir promociones y lanzamientos exclusivos.
            </p>
            <div className="newsletter-input">
              <input type="email" placeholder="Tu correo" />
              <button className="newsletter-btn">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </div>
          </div> */}

          <div>
            {/* <div className="logo" style={{ marginBottom: "15px" }}>
              <Image
                src={logo}
                alt="Logo Autoshop Autoboutique"
                width={80}
                height={60}
              />
            </div> */}
            <p style={{ color: "#777", fontSize: "0.9rem", lineHeight: "1.5" }}>
              Líderes en personalización y equipamiento automotriz. 15 años
              transformando autos comunes en vehículos extraordinarios.
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              {/* Instagram */}
              <a
                className="social-icon"
                href="https://www.instagram.com/autoboutiqueautoshop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                </svg>
              </a>

              {/* Tiktok */}
              {/* <a className="social-icon" href="#" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M12.71 2H16c.09.74.31 1.41.66 2.01.36.61.83 1.1 1.41 1.47.58.38 1.21.61 1.89.7v3.37c-.91-.09-1.76-.32-2.54-.68a7.07 7.07 0 01-1.89-1.35v7.46a6.51 6.51 0 01-.5 2.61c-.34.79-.82 1.46-1.45 2.01-.63.56-1.38.99-2.26 1.27-.88.29-1.82.39-2.82.31A6.7 6.7 0 014 18.44c-.73-.87-1.17-1.95-1.31-3.24-.14-1.29.03-2.43.52-3.44.5-1 1.25-1.8 2.25-2.38 1-.58 2.17-.83 3.5-.75v3.47a2.9 2.9 0 00-1.52.55c-.46.33-.8.79-.99 1.38-.2.59-.22 1.2-.06 1.83.16.64.46 1.16.91 1.56.45.4 1 .64 1.66.71.66.07 1.26-.03 1.8-.3.54-.28.95-.67 1.22-1.18.28-.51.41-1.1.41-1.75V2z" />
                </svg>
              </a> */}

              {/* Facebook */}
              <a
                className="social-icon"
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

        <div className="copyright">
          © 2026 Autoshop Autoboutique. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
