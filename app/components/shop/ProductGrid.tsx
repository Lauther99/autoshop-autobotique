"use client";

import { useProductStore } from "@/store/productStore";
import ProductCard from "./ProductCard";
import Reveal from "@/app/components/ui/Reveal";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Toast from "@/app/components/ui/Toast";

export default function ProductGrid() {
  const products = useProductStore((s) => s.paginatedProducts);
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!openToast) return;
    const timer = setTimeout(() => {
      setOpenToast(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [openToast]);

  return (
    <div className="shop-grid">
      {products.map((product, index) => (
        <Reveal key={product.id} delay={index * 0.05}>
          <motion.div
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <ProductCard
              product={product}
              setOpenToast={setOpenToast}
              setToastMessage={setToastMessage}
            />
          </motion.div>
        </Reveal>
      ))}
      <div className={`toast-wrapper ${openToast ? "active" : ""}`}>
        <Toast
          title="Bien hecho!"
          message={toastMessage}
          type="success"
          onClose={() => setOpenToast(false)}
        />
      </div>
    </div>
  );
}
