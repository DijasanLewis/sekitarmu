/**
 * Header - Komponen navigasi utama untuk aplikasi SekitarMu
 * * Menampilkan logo (favicon) dan nama aplikasi di sebelah kiri,
 * serta link navigasi (Beranda) di sebelah kanan.
 */

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    // Menggunakan warna background dan border dari app/globals.css
    <header className="w-full bg-background border-b border-border shadow-sm sticky top-0 z-50">
      {/* Menggunakan max-w-7xl dan px-4 agar konsisten dengan layout 
        halaman lain (seperti di app/umkm/[id]/page.tsx) 
      */}
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Kiri: Logo + Nama Aplikasi */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/favicon.ico" // Mengambil dari app/favicon.ico
            alt="SekitarMu Logo"
            width={32}
            height={32}
            className="h-8 w-8" // Ukuran logo
          />
          <span className="text-xl font-bold text-primary group-hover:text-primary/90 transition-colors">
            SEKITARMU
          </span>
        </Link>
        
        {/* Kanan: Menu Navigasi */}
        <nav>
          <ul>
            <li>
              {/* Menggunakan text-foreground dan hover:text-primary 
                  sesuai styling di globals.css 
              */}
              <Link 
                href="/" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                BERANDA
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}