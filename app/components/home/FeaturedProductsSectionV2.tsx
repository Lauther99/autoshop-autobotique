"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/app/components/shop/ProductCard";
import Toast from "@/app/components/ui/Toast";
import Reveal from "@/app/components/ui/Reveal";
import { useProductStore } from "@/store/productStore";



export default function FeaturedProductsSectionV2() {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const setProducts = useProductStore((state) => state.setProducts);

  const featuredProducts = products
  .filter((p) => p.images && p.images.length > 0)
  .slice(0, 8);

  useEffect(() => {
      setProducts(products);
    }, [setProducts]);

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>
            PRODUCTOS <span className="text-red">DESTACADOS</span>
          </h2>
          <Link
            href="/tienda"
            className="text-red"
            style={{ fontSize: "0.9rem", fontWeight: 600 }}
          >
            Ver catálogo completo &#x2197;
          </Link>
        </div>

        {/* Grid de productos */}
        <div className="shop-grid">
          {featuredProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.06}>
              <ProductCard
                product={product}
                setOpenToast={setToastOpen}
                setToastMessage={setToastMessage}
              />
            </Reveal>
          ))}
        </div>

        {/* CTA secundario */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/tienda" className="btn btn-outline">
            Ver todos los productos &rarr;
          </Link>
        </div>
      </div>

      {/* Toast de carrito */}
      {toastOpen && (
        <div
          style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999 }}
        >
          <Toast
            title="Carrito"
            message={toastMessage}
            type="success"
            onClose={() => setToastOpen(false)}
          />
        </div>
      )}
    </section>
  );
}
