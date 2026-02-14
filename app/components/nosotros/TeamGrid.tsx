"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./team-grid.css"; // Importa el CSS de arriba

const teamMembers = [
  { img: "/assets/team/1.JPG" },
  { img: "/assets/team/2.JPG" },
  { img: "/assets/team/3.JPG" },
  { img: "/assets/team/4.JPG" },
  { img: "/assets/team/5.JPG" },
  { img: "/assets/team/6.JPG" },
  { img: "/assets/team/7.JPG" },
  { img: "/assets/team/8.JPG" },
];

export default function TeamGrid() {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div key={i} className="team-card">
              {/* Wrapper con aspect-ratio y relative */}
              <div className="team-image-wrapper">
                <Image
                  src={member.img}
                  alt="Equipo Autoshop Autoboutique"
                  fill
                  className="object-cover" // Clase de Tailwind o CSS estándar
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}