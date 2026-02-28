"use client";

import { useState } from "react";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductTabs({ product }: Props) {
  const [activeTab, setActiveTab] = useState("descripcion");
  const specs = product.specs ?? [];

  return (
    <div className="mt-16">

      {/* Tabs Header */}
      <div className="flex gap-10 border-b border-[#333] mb-8">
        {["descripcion", "especificaciones"].map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative pb-4 text-base font-semibold transition-colors duration-300
                ${isActive 
                  ? "text-[var(--primary-red)]" 
                  : "text-gray hover:text-[var(--color-text)]"}
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}

              {isActive && (
                <span className="absolute bottom-[-1px] left-0 h-[3px] w-full bg-[var(--primary-red)]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-[2fr_1fr] gap-12 max-[900px]:grid-cols-1">

        {/* Main Content */}
        <div>
          {activeTab === "descripcion" && (
            <div className="space-y-4">
              <p className="text-gray leading-relaxed">
                {product.description ?? "Descripción no disponible"}
              </p>
            </div>
          )}

          {activeTab === "especificaciones" && (
            <div className="bg-[#111] border border-[#222] rounded-lg p-6">
              <h4 className="mb-5 text-white font-semibold text-lg">
                Ficha Técnica
              </h4>

              {specs.length ? (
                <div>
                  {specs.map((s, index) => (
                    <div
                      key={s.label}
                      className={`
                        flex justify-between py-3 text-sm
                        ${index !== specs.length - 1
                          ? "border-b border-[#222]"
                          : ""}
                      `}
                    >
                      <span className="text-[#888]">
                        {s.label}
                      </span>

                      <span className="font-semibold text-white text-right">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#888]">
                  No hay especificaciones disponibles.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Espacio reservado si luego quieres sidebar */}
        <div className="hidden max-[900px]:block"></div>

      </div>
    </div>
  );
}