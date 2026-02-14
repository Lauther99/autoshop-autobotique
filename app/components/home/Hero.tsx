"use client";

import { numero } from "@/data/information";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/app/components/ui/Reveal";
import HeroBackgroundSlider from "@/app/components/home/HeroBackgroundSlider";
import "./hero.css"

export default function Hero() {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 400], [0, 140]);


  return (
    <section className="hero-image relative overflow-hidden">
      <HeroBackgroundSlider />
      {/* <HeroBackgroundSlider images={backgroundSlides} /> */}

      <motion.div style={{ y: yContent }} className="hero container relative z-10">
        <Reveal direction="right">
          <div className="hero-content">
            <h1>
              Expertos en <br />
              Accesorios para tu <br />
              <span>Vehículo</span>
            </h1>
            <p>
              Transforma tu experiencia de manejo con los mejores accesorios del
              mercado.
            </p>

            <div className="hero-buttons">
              <Link href="/tienda" className="btn btn-primary">
                Ir a la Tienda &rarr;
              </Link>

              <a
                href={`https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
                  "Hola, me gustaría tener más información."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.4}>
          <Image
            src="/assets/logo1.png"
            alt="Logo"
            width={450}
            height={370}
            priority
          />
        </Reveal>
      </motion.div>
    </section>
  );
}
