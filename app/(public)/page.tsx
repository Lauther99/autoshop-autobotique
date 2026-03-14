import Hero from "@/app/components/home/Hero";
import FeaturedProductsSection from "@/app/components/home/FeaturedProductsSection";
import AboutSection from "@/app/components/home/AboutSection";
import ContactSection from "@/app/components/home/ContactSection";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import CtaBanner from "@/app/components/nosotros/CtaBanner";
import WhatsAppButton from "@/app/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />

      <RevealOnScroll>
        <FeaturedProductsSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <CtaBanner />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <AboutSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <ContactSection />
      </RevealOnScroll>

      <WhatsAppButton />
    </>
  );
}
