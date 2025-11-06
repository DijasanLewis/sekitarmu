import "./globals.css";
import Link from "next/link";
// Hapus Link karena tidak terpakai
// import Link from "next/link"; 

export default function RootLayout({  children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Tambahkan kelas flex untuk footer menempel di bawah */}
      <body className="flex min-h-screen flex-col">
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Beranda</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        {/* Tambahkan flex-grow agar konten mengisi ruang */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Tambahkan Footer Hak Cipta */}
        <footer className="w-full bg-neutral-700 p-4 text-center text-sm text-neutral-300">
          <p>© SekitarMu. 2025 | All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}