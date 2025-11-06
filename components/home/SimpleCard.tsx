/**
 * SimpleCard - Komponen kartu sederhana untuk menampilkan item
 * 
 * Komponen ini menampilkan kartu sederhana dengan:
 * - Background secondary color
 * - Teks di tengah kartu
 * - Hover effect yang mengubah background
 * 
 * Cara kerja:
 * 1. Menerima props: href (link tujuan), title (judul item)
 * 2. Ketika diklik, mengarahkan ke halaman yang ditentukan di href
 * 3. Menggunakan aspect-square untuk menjaga proporsi kartu tetap persegi
 */

import Link from 'next/link';

interface SimpleCardProps {
  href: string;
  title: string;
}

export default function SimpleCard({ href, title }: SimpleCardProps) {
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
      className="block rounded-lg bg-secondary p-4 text-center text-lg font-semibold text-secondary-foreground shadow-sm hover:bg-muted aspect-square flex items-center justify-center"
    >
      <span className="p-2">{title}</span>
    </Link>
  );
}
