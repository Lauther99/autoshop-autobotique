import Hero from "@/app/components/home/Hero";
import FeaturedProductsSection from "@/app/components/home/FeaturedProductsSection";
import AboutSection from "@/app/components/home/AboutSection";
import ContactSection from "@/app/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProductsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
