"use client";

import { useState } from "react";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductTabs({ product }: Props) {
  const [activeTab, setActiveTab] = useState("descripcion");

  return (
    <div className="tabs-section">
      <div className="tabs-header">
        {["descripcion", "especificaciones"].map((tab) => (
          <button
            key={tab}
            className={`tab-link ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="details-grid">
        <div className="detail-content">
          {activeTab === "descripcion" && (
            <div>
              <p>{product.description ?? "Descripción no disponible"}</p>
            </div>
          )}
          {activeTab === "especificaciones" && (
            <div className="quick-specs-box">
              <h4>Ficha Técnica</h4>
              {product.specs?.length ? (
                product.specs.map((s) => (
                  <div key={s.label} className="spec-row">
                    <span>{s.label}</span>
                    <span>{s.value}</span>
                  </div>
                ))
              ) : (
                <p>No hay especificaciones disponibles.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
