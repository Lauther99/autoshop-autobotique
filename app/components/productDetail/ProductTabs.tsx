"use client";

import { useState } from "react";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function ProductTabs({ product }: Props) {
  const [isDescOpen, setIsDescOpen] = useState(true);
  const [isSpecsOpen, setIsSpecsOpen] = useState(true);
  const specs = product.specs ?? [];

  return (
    <div className="mt-16">

      {/* Descripción */}
      <div className="mb-7 rounded-xl border border-[#333] p-4 bg-[#111]/90">
        <button
          type="button"
          onClick={() => setIsDescOpen((prev) => !prev)}
          className="flex w-full items-center justify-between text-[0.85rem] font-bold uppercase tracking-[1px] text-white/80 cursor-pointer"
          aria-expanded={isDescOpen}
        >
          <span>Descripción</span>
          <ChevronIcon open={isDescOpen} />
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${isDescOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden">
            <p className="text-white leading-relaxed pb-1 mt-4">
              {product.description || "Descripción no disponible"}
            </p>
          </div>
        </div>
      </div>

      {/* Especificaciones */}
      <div className="mb-7 rounded-xl border border-[#333] p-4 bg-[#111]/90 ">
        <button
          type="button"
          onClick={() => setIsSpecsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between text-[0.85rem] font-bold uppercase tracking-[1px] text-white/80 cursor-pointer"
          aria-expanded={isSpecsOpen}
        >
          <span>Especificaciones</span>
          <ChevronIcon open={isSpecsOpen} />
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${isSpecsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden">
            <div className="p-6 mb-1 mt-4">
              {/* <h4 className="mb-5 text-white font-semibold text-lg">
                Ficha Técnica
              </h4> */}

              {specs.length ? (
                <div>
                  {specs.map((s, index) => (
                    <div
                      key={s.label}
                      className={`
                        flex justify-between py-3 text-sm
                        ${index !== specs.length - 1 ? "border-b border-[gray]/20" : ""}
                      `}
                    >
                      <span className="text-[#e1e1e1]">{s.label}</span>
                      <span className="font-semibold text-white text-right">{s.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#888]">No hay especificaciones disponibles.</p>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
