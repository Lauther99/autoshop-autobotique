"use client";

import Image from "next/image";
import "./team-gallery.css";

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

export default function TeamGallery() {
  return (
    <section className="team-gallery-section">
      {teamMembers.map((member, i) => (
        <div key={i} className="gallery-team-item">
          <Image
            src={member.img}
            alt="Equipo Autoshop"
            fill
            className="gallery-team-img"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </section>
  );
}