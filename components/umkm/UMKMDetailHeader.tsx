/**
 * UMKMDetailHeader - Komponen hero untuk halaman detail UMKM
 * 
 * Komponen ini menampilkan hero section dengan:
 * - Gambar cover UMKM yang menutupi seluruh hero
 * - Informasi UMKM (nama, deskripsi, kategori) di sebelah kiri
 * - Kotak Google Maps di sebelah kanan
 * 
 * Cara kerja:
 * 1. Menerima props umkm dengan tipe UMKM
 * 2. Menampilkan gambar pertama dari array imageUrls sebagai background cover
 * 3. Menampilkan informasi UMKM dengan overlay untuk readability
 * 4. Menampilkan Google Maps embed di sebelah kanan
 */

import Image from 'next/image';
import type { UMKM } from '@/data/umkm';
import CategoryDisplay from './CategoryDisplay';

interface Props {
  umkm: UMKM;
}

export default function UMKMDetailHeader({ umkm }: Props) {
  // Mengambil gambar pertama dari array imageUrls, atau placeholder jika tidak ada
  const heroImage = umkm.imageUrls && umkm.imageUrls.length > 0 
    ? umkm.imageUrls[0] 
    : "https://via.placeholder.com/1200x600?text=No+Image";

  // Convert Google Maps URL ke format embed
  // Format: https://maps.google.com/?q=... -> https://www.google.com/maps?q=...&output=embed
  const getGoogleMapsEmbedUrl = (url: string): string => {
    // Jika sudah format embed, return langsung
    if (url.includes('/embed')) {
      return url;
    }
    
    // Convert URL ke format embed
    try {
      const urlObj = new URL(url);
      // Jika ada query parameter 'q', gunakan itu
      if (urlObj.searchParams.has('q')) {
        const query = urlObj.searchParams.get('q');
        return `https://www.google.com/maps?q=${encodeURIComponent(query || '')}&output=embed`;
      }
      // Jika URL adalah format place, extract place ID
      const pathMatch = url.match(/\/place\/([^/]+)/);
      if (pathMatch) {
        return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v0!5m2!1sen!2sus`;
      }
    } catch (e) {
      // Jika parsing gagal, gunakan URL asli
    }
    
    // Fallback: tambahkan output=embed ke URL
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}output=embed`;
  };

  const mapsEmbedUrl = getGoogleMapsEmbedUrl(umkm.googleMapsUrl);

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Gambar hero sebagai background cover */}
      <Image
        src={heroImage}
        alt={umkm.name}
        fill
        style={{ objectFit: "cover" }}
        priority
        className="brightness-75"
      />
      
      {/* Overlay gradient untuk readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      
      {/* Konten hero */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
            {/* Kolom kiri: Informasi UMKM */}
            <div className="space-y-6 text-white">
              {/* Badge kategori */}
              <div>
                <CategoryDisplay 
                  categories={umkm.category} 
                  badgeClassName="px-4 py-2 text-sm"
                />
              </div>
              
              {/* Nama UMKM */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {umkm.name}
              </h1>
              
              {/* Deskripsi UMKM */}
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                {umkm.description}
              </p>
            </div>
            
            {/* Kolom kanan: Google Maps */}
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl border-4 border-white/20">
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
