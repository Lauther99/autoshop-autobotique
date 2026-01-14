import Image from "next/image";
import Hero from "@/app/components/Hero";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";

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
