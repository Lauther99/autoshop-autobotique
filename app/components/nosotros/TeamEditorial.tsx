"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./team-editorial.css";

const teamMembers = [
  { 
    name: "Carlos Ruiz", 
    role: "Master Detailer", 
    desc: "Experto en cerámica y corrección de pintura con 10 años de experiencia.",
    img: "/assets/team/1.JPG" 
  },
  { 
    name: "Laura G.", 
    role: "Gerente General", 
    desc: "La encargada de que tu auto esté listo a tiempo, siempre.",
    img: "/assets/team/2.JPG" 
  },
];

export default function TeamEditorial() {
  return (
    <section className="editorial-section">
      <div className="team-container"> {/* Reusa el container del ejemplo anterior */}
        {teamMembers.map((member, i) => (
          <div key={i} className="editorial-row">
            
            {/* Caja de Imagen */}
            <div className="editorial-img-box">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover" // Importante: object-fit: cover
              />
            </div>

            {/* Texto */}
            <div className="editorial-content">
              <h3 className="editorial-name">{member.name}</h3>
              <span className="editorial-role">{member.role}</span>
              <p className="editorial-desc">{member.desc}</p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}