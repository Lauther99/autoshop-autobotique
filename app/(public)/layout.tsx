import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import CartProvider from "@/app/components/cart/CartProvider";


export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <Header />
        <CartProvider />
        <main>{children}</main>
        <Footer />
      </div>
  );
}
