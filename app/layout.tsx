import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/main/Header";
import Footer from "@/app/components/main/Footer";

// Puedes usar iconos SVG directos o una librería como Lucide React
// Aquí usaré SVGs simples inline para asegurar que funcione sin instalar nada extra

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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}