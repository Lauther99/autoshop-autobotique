"use client";

import { useCallback } from "react";

interface Props {
  min: number;
  max: number;
  valueMin: number;
  valueMax: number;
  onChange: (min: number, max: number) => void;
  onMouseUp?: (min: number, max: number) => void;
}

export default function PriceRangeSlider({
  min,
  max,
  valueMin,
  valueMax,
  onChange,
  onMouseUp,
}: Props) {
  const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

  const handleRangeCommit = () => {
    onMouseUp?.(valueMin, valueMax);
  };

  return (
    <div className="mb-7 w-full text-text">
      <h4 className="mb-4 text-[0.85rem] font-bold uppercase tracking-[1px] text-text">Rango de Precio</h4>

      <div className="relative flex h-[25px] w-full items-center">
        <input
          type="range"
          min={min}
          max={max}
          value={valueMin}
          onChange={(e) => {
            const nextMin = Math.min(Number(e.target.value), valueMax - 1);
            onChange(nextMin, valueMax);
          }}
          onMouseUp={handleRangeCommit}
          onTouchEnd={handleRangeCommit}
          className="thumb thumb-left"
          style={{ zIndex: valueMin > max - 100 ? "5" : undefined }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={valueMax}
          onChange={(e) => {
            const nextMax = Math.max(Number(e.target.value), valueMin + 1);
            onChange(valueMin, nextMax);
          }}
          onMouseUp={handleRangeCommit}
          onTouchEnd={handleRangeCommit}
          className="thumb thumb-right"
        />

        <div className="slider-track" />
        <div
          className="slider-range"
          style={{
            left: `${getPercent(valueMin)}%`,
            width: `${getPercent(valueMax) - getPercent(valueMin)}%`,
          }}
        />
      </div>

      <div className="mt-5 flex items-center justify-between gap-2.5">
        <span className="rounded bg-[#1f1f1f] px-2.5 py-1 text-sm font-bold text-[#fff]">S/{valueMin}</span>
        <span className="text-[#888]">-</span>
        <span className="rounded bg-[#1f1f1f] px-2.5 py-1 text-sm font-bold text-[#fff]">S/{valueMax}</span>
      </div>
    </div>
  );
}
