"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import './PriceRangeSlider_module.css'
interface Props {
  min: number;
  max: number;
  valueMin: number;
  valueMax: number;
  onChange: (min: number, max: number) => void;
}

export default function PriceRangeSlider({
  min,
  max,
  valueMin,
  valueMax,
  onChange,
}: Props) {
  const [minVal, setMinVal] = useState(valueMin);
  const [maxVal, setMaxVal] = useState(valueMax);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  const range = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setMinVal(valueMin);
    setMaxVal(valueMax);
  }, [valueMin, valueMax]);

  useEffect(() => {
    if (range.current) {
      const minPercent = ((minVal - min) / (max - min)) * 100;
      const maxPercent = ((maxVal - min) / (max - min)) * 100;

      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, min, max]);

  useEffect(() => {
    onChange(minVal, maxVal);
  }, [minVal, maxVal]);

  return (
    <div className="filter-section price-slider-container">
      <h4 className="filter-title">Rango de Precio</h4>

      <div className="slider-wrapper">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(e) =>
            setMinVal(Math.min(Number(e.target.value), maxVal - 1))
          }
          className="thumb thumb-left"
          style={{ zIndex: minVal > max - 100 ? "5" : undefined }} 
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(e) =>
            setMaxVal(Math.max(Number(e.target.value), minVal + 1))
          }
          className="thumb thumb-right"
        />


        <div className="slider-track" />
        <div
          className="slider-range"
          style={{
            left: `${getPercent(minVal)}%`,
            width: `${getPercent(maxVal) - getPercent(minVal)}%`,
          }}
        />
      </div>
      <div className="price-inputs">
      <span className="price-tag">S/{minVal}</span>
      <span className="dash">—</span>
      <span className="price-tag">S/{maxVal}</span>
    </div>
    </div>
  );
}
