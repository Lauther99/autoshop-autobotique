import type { Metadata } from "next";
import "./globals.css"
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
