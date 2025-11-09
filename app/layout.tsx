import "./globals.css";
import Link from "next/link";
// Hapus Link karena tidak terpakai
// import Link from "next/link"; 
import Header from "@/components/layout/Header";

export default function RootLayout({  children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        
        {/* 2. Gunakan komponen Header baru di sini */}
        <Header />

        {/* 3. Header lama yang ada di sini telah dihapus */}
        
        <div className="flex-grow">
          {children}
        </div>

        <footer className="w-full bg-neutral-700 p-4 text-center text-sm text-neutral-300">
          <p>© SekitarMu. 2025 | All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}