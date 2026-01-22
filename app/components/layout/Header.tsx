"use client";

// import Image from "next/image";
// import logo from "@/public/assets/logo1.png";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function Header() {
  const { items } = useCartStore();
  const toggleCart = useCartStore((state) => state.toggleCart);

  return (
    <header className="header">
      <div className="container nav-container">
        <div className="logo-container">
          <h1 className="main-title">
            <span className="text-red">AUTO</span>
            <span className="text-white">SHOP</span>
          </h1>
          <span className="sub-title">AUTOBOUTIQUE</span>
        </div>
        {/* <div className="logo-racing">
          <div className="line-top"></div>

          <h1 className="main-title">
            <span className="red">AUTO</span>
            <span className="white">SHOP</span>
          </h1>

          <span className="sub-title">AUTOBOUTIQUE</span>
        </div> */}

        {/* <div className="logo">
          <Image
            src={logo}
            alt="Logo Autoshop Autoboutique"
            width={70}
            height={60}
          />
        </div> */}

        {/* <div style={{display: "flex", gap: "16px"}}> */}
        <nav style={{ display: "flex", alignItems: "center" }}>
          <ul className="nav-links">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/tienda">Tienda</Link>
            </li>
            <li>
              <Link href="/nosotros">Sobre Nosotros</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="search-bar">
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input type="text" placeholder="Buscar accesorios..." />
          </div>
          <div
            onClick={toggleCart}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: "var(--primary-red)",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {items.length}
            </span>
          </div>

          {/* <div style={{cursor: 'pointer'}}>
            <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div> */}
        </div>
        {/* </div> */}
      </div>
    </header>
  );
}
