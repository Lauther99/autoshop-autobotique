import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import CartProvider from "@/app/components/cart/CartProvider";


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
        <CartProvider />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
