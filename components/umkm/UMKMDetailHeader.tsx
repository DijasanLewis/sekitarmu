/**
 * UMKMDetailHeader - Komponen header untuk halaman detail UMKM
 * 
 * Komponen ini menampilkan header dengan:
 * - Gambar utama UMKM (gambar pertama dari imageUrls)
 * - Nama UMKM
 * - Kategori UMKM
 * - Deskripsi singkat
 * 
 * Cara kerja:
 * 1. Menerima props umkm dengan tipe UMKM
 * 2. Menampilkan gambar pertama dari array imageUrls sebagai hero image
 * 3. Menampilkan informasi utama UMKM di overlay
 */

import Image from 'next/image';
import type { UMKM } from '@/data/umkm';
import Link from 'next/link';

interface Props {
  umkm: UMKM;
}

export default function UMKMDetailHeader({ umkm }: Props) {
  // Mengambil gambar pertama dari array imageUrls, atau placeholder jika tidak ada
  const heroImage = umkm.imageUrls && umkm.imageUrls.length > 0 
    ? umkm.imageUrls[0] 
    : "https://via.placeholder.com/1200x400?text=No+Image";

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      {/* Gambar hero dengan overlay gradient */}
      <Image
        src={heroImage}
        alt={umkm.name}
        fill
        style={{ objectFit: "cover" }}
        priority
        className="brightness-75"
      />
      
      {/* Overlay gradient untuk readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Konten header */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-7xl mx-auto w-full px-4 pb-8">
          {/* Breadcrumb */}
          <nav className="mb-4 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Beranda</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{umkm.name}</span>
          </nav>
          
          {/* Badge kategori */}
          <div className="mb-3">
            <span className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold bg-primary text-primary-foreground">
              {umkm.category}
            </span>
          </div>
          
          {/* Nama UMKM */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            {umkm.name}
          </h1>
          
          {/* Deskripsi */}
          <p className="text-lg text-white/90 max-w-3xl">
            {umkm.description}
          </p>
        </div>
      </div>
    </div>
  );
}

