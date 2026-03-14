
import AboutHero from "@/app/components/nosotros/AboutHero";
import AboutDescription from "@/app/components/nosotros/AboutDescription";
import MissionVision from "@/app/components/nosotros/MissionVision";
import ValuesGrid from "@/app/components/nosotros/ValuesGrid";
import GallerySection from "@/app/components/nosotros/GallerySection";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import TeamGallery from "@/app/components/nosotros/TeamGallery";
import CategoriesSection from "@/app/components/home/CategoriesSection";
import WhatsAppButton from "@/app/components/ui/WhatsAppButton";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <div className="container">
        <RevealOnScroll>
          <AboutDescription />
        </RevealOnScroll>

         <RevealOnScroll>
          {/* <TeamEditorial /> */}
          {/* <TeamGrid /> */}
          <TeamGallery />
        </RevealOnScroll>

        <RevealOnScroll>
          <MissionVision />
        </RevealOnScroll>

        <RevealOnScroll>
        <ValuesGrid />
       </RevealOnScroll>

        <CategoriesSection />

        <GallerySection />

        <WhatsAppButton />
      </div>
    </>
  );
}
