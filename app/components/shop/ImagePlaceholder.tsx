import React from 'react';

const ImagePlaceholder = () => {
  return (
    <div className="relative w-full max-w-md aspect-[10/9] overflow-hidden bg-[#121212] font-sans shadow-2xl border border-gray-800 group">
      
      {/* --- FONDO GEOMÉTRICO --- */}
      <div className="absolute inset-0 z-0">
        {/* Triángulo superior izquierdo */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[#1a1a1a]" 
          style={{ clipPath: 'polygon(0 0, 60% 0, 0 80%)' }}
        />
        {/* Forma geométrica central oscura */}
        <div 
          className="absolute inset-0 bg-[#0d0d0d]" 
          style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 20% 100%)' }}
        />
        {/* Líneas de brillo rojo (bordes de las formas) */}
        <div 
          className="absolute inset-0 opacity-40 shadow-[inset_0_0_20px_rgba(255,0,0,0.3)]"
          style={{ 
            clipPath: 'polygon(40% 0, 41% 0, 21% 100%, 20% 100%)',
            backgroundColor: '#ff0000' 
          }}
        />
      </div>

      {/* --- ICONO CENTRAL --- */}
      <div className="absolute inset-0 flex items-center justify-center pb-16 z-10">
        <div className="relative transform group-hover:scale-110 transition-transform duration-500">
          {/* Brillo exterior del icono */}
          <div className="absolute inset-0 bg-red-600 blur-[40px] opacity-20"></div>
          
          {/* SVG de Caja Estilizada */}
          <svg 
            width="120" 
            height="120" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#ff0000" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]"
          >
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
            {/* Signo de interrogación */}
            <text 
              x="12" 
              y="14" 
              fill="#ff0000" 
              fontSize="8" 
              textAnchor="middle" 
              className="font-bold"
              style={{ filter: 'drop-shadow(0 0 2px red)' }}
            >
              ?
            </text>
          </svg>
        </div>
      </div>

      {/* --- BANNER INFERIOR --- */}
      <div className="absolute bottom-0 w-full z-20">
        {/* Parte Roja */}
        <div className="bg-[#cc0000] py-2 px-4 text-center">
          <h2 className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase leading-none">
            IMAGEN NO DISPONIBLE
          </h2>
        </div>
        {/* Parte Negra */}
        <div className="bg-black py-1 px-4 text-center">
          <p className="text-white text-xs md:text-sm font-medium tracking-widest uppercase opacity-90">
            PRODUCTO SIN FOTOGRAFÍAS
          </p>
        </div>
      </div>

      {/* Overlay de textura sutil (puntos/ruido) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </div>
  );
};

export default ImagePlaceholder;