import Image from "next/image";
import Hero from "@/app/components/main/Hero";
import FeaturedProducts from "@/app/components/main/FeaturedProducts";
import About from "@/app/components/main/About";
import Contact from "@/app/components/main/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <About />
      <Contact />
    </>
  );
}
