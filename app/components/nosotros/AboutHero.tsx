export default function AboutHero() {
  return (
    <section
      className="
    flex h-[70vh] flex-col items-center justify-center
    bg-[linear-gradient(to_bottom,rgba(10,10,10,0.6),rgba(10,10,10,1)),url('/assets/equipo.jpg')]
    bg-cover bg-center
    px-5 text-center
  "
    >
      <h1 className="my-[15px] font-black uppercase leading-[1.3] tracking-[-2px] max-w-[800px] text-[3.5rem] leading-[1.1] text-[#fff] text-[clamp(2.4rem,6vw,2rem)]">
        15 Años de Pasión <br />
        <span className="text-[var(--primary-red)]">Automotriz</span>
      </h1>

      <p className="mb-[30px] max-w-[600px] text-[1.1rem] text-[#ccc]">
        Transformando la experiencia de conducir con precisión técnica,
        materiales de alta gama y un estilo inigualable que define a cada
        conductor.
      </p>
    </section>
  );
}
