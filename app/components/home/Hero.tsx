"use client";

import { numero } from "@/data/information";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/app/components/ui/Reveal";

export default function Hero() {
  const { scrollY } = useScroll();

  const yBg = useTransform(scrollY, [0, 400], [0, 80]);

  const yContent = useTransform(scrollY, [0, 400], [0, 140]);

  return (
    <section className="hero-image relative overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10" />

      <motion.div style={{ y: yContent }} className="hero container">

        <Reveal direction="right">
          <div className="hero-content">
            <h1>
              Expertos en <br />
              Accesorios para tu <br />
              <span>Vehículo</span>
            </h1>
            <p>
              Transforma tu experiencia de manejo con los mejores accesorios del
              mercado. <br />
              Calidad premium y asesoría profesional respaldada por más de una
              década en la industria.
            </p>
            <div className="hero-buttons">
              <Link href="/tienda" className="btn btn-primary">
                Ir a la Tienda &rarr;
              </Link>

              <a
                href={`https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent("Hola, me gustaría tener más información.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={.4}>
          <Image
            src="/assets/logo1.png"
            alt="Logo"
            width={450}
            height={370}
            style={{ objectFit: "cover" }}
            priority
          />
        </Reveal>

      </motion.div>
    </section>
  );
}
