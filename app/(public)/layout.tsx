// import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import CartProvider from "@/app/components/cart/CartProvider";
import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <HexagonBackground className="min-h-screen w-full">
        <CartProvider />
        <main>{children}</main>
        <Footer />
      </HexagonBackground>
    </>
  );
}
