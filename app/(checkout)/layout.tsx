import './globals.css'

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      {/* Contenido de las páginas de dashboard */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
