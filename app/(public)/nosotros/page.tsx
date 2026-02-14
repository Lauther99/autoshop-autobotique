import "./nosotros_module.css";

import AboutHero from "@/app/components/nosotros/AboutHero";
import AboutDescription from "@/app/components/nosotros/AboutDescription";
import MissionVision from "@/app/components/nosotros/MissionVision";
import ValuesGrid from "@/app/components/nosotros/ValuesGrid";
import GallerySection from "@/app/components/nosotros/GallerySection";
import CtaBanner from "@/app/components/nosotros/CtaBanner";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import TeamGrid from "@/app/components/nosotros/TeamGrid";
import TeamEditorial from "@/app/components/nosotros/TeamEditorial";
import TeamGallery from "@/app/components/nosotros/TeamGallery";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <div className="container">
        <RevealOnScroll>
          <AboutDescription />
        </RevealOnScroll>

        <RevealOnScroll>
          <MissionVision />
        </RevealOnScroll>

        <RevealOnScroll>
          {/* <TeamEditorial /> */}
          {/* <TeamGrid /> */}
          <TeamGallery />
        </RevealOnScroll>

        {/* <RevealOnScroll> */}
        <ValuesGrid />
        {/* </RevealOnScroll> */}

        <GallerySection />

        <CtaBanner />
      </div>
    </>
  );
}
