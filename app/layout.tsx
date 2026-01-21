import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import CartModal from "@/app/components/cart/CartModal";


export const metadata: Metadata = {
  title: "Autoshop Autoboutique",
  description: "Expertos en accesorios para tu vehículo",
  icons: {
    icon: "/logo1.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <CartModal />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}