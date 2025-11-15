/**
 * Halaman Detail UMKM
 * 
 * Halaman ini menampilkan detail lengkap dari sebuah UMKM berdasarkan ID.
 * Menggunakan dynamic route [id] untuk mendapatkan ID UMKM dari URL.
 * 
 * Layout terdiri dari 3 section:
 * 1. Hero section: gambar cover, informasi UMKM, dan Google Maps
 * 2. Daftar produk toko: menampilkan semua produk yang dijual
 * 3. SupportUMKMSection: call-to-action untuk mendukung UMKM
 * 
 * Cara kerja:
 * 1. Mengambil ID UMKM dari parameter URL
 * 2. Mencari UMKM dengan ID tersebut di UMKM_LIST
 * 3. Menampilkan semua informasi UMKM sesuai layout baru
 * 4. Jika UMKM tidak ditemukan, menampilkan pesan error
 */

import { notFound } from 'next/navigation';
import { UMKM_LIST } from '@/data/umkm';
import UMKMDetailHeader from '@/components/umkm/UMKMDetailHeader';
import UMKMProductList from '@/components/umkm/UMKMProductList';
import SupportUMKMSection from '@/components/home/SupportUMKMSection';

interface PageProps {
  params: {
    id: string;
  };
}

export default function UMKMDetailPage({ params }: PageProps) {
  // Mencari UMKM berdasarkan ID dari parameter URL
  const umkm = UMKM_LIST.find(item => item.id === params.id);

  // Jika UMKM tidak ditemukan, tampilkan halaman 404
  if (!umkm) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Section a: Hero dengan gambar cover, informasi UMKM, dan Google Maps */}
      <UMKMDetailHeader umkm={umkm} />
      
      {/* Section b: Daftar produk toko */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <UMKMProductList products={umkm.products} />
      </div>
      
      {/* Section c: SupportUMKMSection */}
      <SupportUMKMSection />
    </main>
  );
}

