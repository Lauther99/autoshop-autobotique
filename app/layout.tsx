import type { Metadata } from "next";
import "./globals.css"


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
        <main>{children}</main>
      </body>
    </html>
  );
}
