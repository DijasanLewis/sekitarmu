/**
 * CategoryCard - Komponen kartu untuk menampilkan kategori usaha
 * 
 * Komponen ini menampilkan kartu kategori dengan:
 * - Judul kategori di kiri atas
 * - Ikon kategori di kanan bawah dengan efek opacity
 * 
 * Cara kerja:
 * 1. Menerima props: href (link tujuan), title (judul kategori), iconUrl (URL ikon)
 * 2. Ketika diklik, mengarahkan ke halaman yang ditentukan di href
 * 3. Menggunakan Next.js Image untuk optimasi gambar ikon
 */

import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  href: string;
  title: string;
  iconUrl: string;
}

export default function CategoryCard({ href, title, iconUrl }: CategoryCardProps) {
  // Jika href adalah anchor link (#), gunakan onClick untuk scroll
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <Link 
      href={href}
      onClick={handleClick}
      scroll={!href.startsWith('#')}
      className="relative block rounded-lg bg-card p-4 text-left shadow-sm hover:bg-muted aspect-square overflow-hidden"
    >
      {/* Konten Teks - Judul kategori */}
      <div className="z-10">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      {/* Ikon di Kanan Bawah dengan efek opacity */}
      <div className="absolute -bottom-4 -right-4 h-24 w-24 z-0 opacity-80"> 
        <Image 
          src={iconUrl} 
          alt={title} 
          fill 
          style={{ objectFit: 'contain' }} 
        />
      </div>
    </Link>
  );
}
