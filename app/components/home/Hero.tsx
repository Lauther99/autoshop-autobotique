"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { numero } from "@/data/information";
import Reveal from "@/app/components/ui/Reveal";
import HeroBackgroundSlider from "@/app/components/home/HeroBackgroundSlider";

export default function Hero() {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 400], [0, 140]);
  const [logoRef, animateLogo] = useAnimate();

  useEffect(() => {
    async function sequence() {
      await animateLogo(
        logoRef.current,
        { x: 0, opacity: 1 },
        { type: "spring", stiffness: 180, damping: 10, delay: 0.1 },
      );
      await new Promise((r) => setTimeout(r, 300));
      await animateLogo(
        logoRef.current,
        { x: -600, opacity: 0 },
        { duration: 0.2, ease: "easeIn" },
      );
    }
    sequence();
  }, [animateLogo, logoRef]);

  return (
    <section className="relative isolate h-[85vh] overflow-hidden bg-[var(--color-bg)]">
      <HeroBackgroundSlider />

      <motion.div
        style={{ y: yContent }}
        className="container relative z-[1] flex h-[85vh] flex-row items-center justify-between"
      >
        <Reveal direction="right">
          <div className="flex max-w-[720px] flex-col">
            <h1 className="mb-6 text-[clamp(2.4rem,6vw,2rem)] font-black uppercase italic leading-[1.3] tracking-[-1.5px] text-[#fff]">
              Expertos en accesorios <br />
              para tu auto de <br />
              <span className="text-[var(--primary-red)]">
                alto rendimiento
              </span>
            </h1>

            <p className="mb-8 max-w-[560px] text-[1.05rem] leading-[1.55] text-[#fff]">
              Transforma tu experiencia de manejo con los mejores accesorios del
              mercado.
            </p>

            <div className="flex gap-4">
              <Link
                href="/tienda"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--primary-red)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d10000]"
              >
                Ir a la Tienda &rarr;
              </Link>

              <a
                href={`https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
                  "Hola, me gustaria tener mas informacion.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#fff] bg-transparent px-6 py-3 text-sm font-semibold text-[#fff] transition-colors hover:bg-white/10"
              >
                Contactanos
              </a>
            </div>
          </div>
        </Reveal>

        <motion.div ref={logoRef} initial={{ x: 600, opacity: 0 }}>
          <Image
            src="/assets/logo1.png"
            alt="Logo"
            width={450}
            height={370}
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
