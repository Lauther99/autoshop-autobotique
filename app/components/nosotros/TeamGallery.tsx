"use client";

import Image from "next/image";

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
    <section
      className="
    group
    my-[60px]
    flex h-[530px] w-full overflow-hidden
    bg-black
  "
    >
      {teamMembers.map((member, i) => (
        <div
          key={i}
          className="
        relative flex-1 overflow-hidden
        transition-all duration-500 ease-in-out
        cursor-crosshair
        grayscale
        hover:flex-[4] hover:grayscale-0 hover:contrast-125
        group-hover:opacity-70 hover:!opacity-100
        max-[768px]:hover:flex-none
        max-[768px]:hover:w-[60%]
      "
        >
          <Image
            src={member.img}
            alt="Equipo Autoshop"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </section>
  );
}
