/**
 * Halaman Detail UMKM
 * 
 * Halaman ini menampilkan detail lengkap dari sebuah UMKM berdasarkan ID.
 * Menggunakan dynamic route [id] untuk mendapatkan ID UMKM dari URL.
 * 
 * Cara kerja:
 * 1. Mengambil ID UMKM dari parameter URL
 * 2. Mencari UMKM dengan ID tersebut di UMKM_LIST
 * 3. Menampilkan semua informasi UMKM: nama, deskripsi, kategori, gambar, 
 *    alamat, kontak, produk, dll
 * 4. Jika UMKM tidak ditemukan, menampilkan pesan error
 */

import { notFound } from 'next/navigation';
import { UMKM_LIST } from '@/data/umkm';
import UMKMDetailHeader from '@/components/umkm/UMKMDetailHeader';
import UMKMDetailInfo from '@/components/umkm/UMKMDetailInfo';
import UMKMProductList from '@/components/umkm/UMKMProductList';
import UMKMContactSection from '@/components/umkm/UMKMContactSection';

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
      {/* Header dengan gambar dan informasi utama */}
      <UMKMDetailHeader umkm={umkm} />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom kiri: Informasi detail dan kontak */}
          <div className="lg:col-span-1 space-y-6">
            <UMKMDetailInfo umkm={umkm} />
            <UMKMContactSection umkm={umkm} />
          </div>
          
          {/* Kolom kanan: Daftar produk */}
          <div className="lg:col-span-2">
            <UMKMProductList products={umkm.products} />
          </div>
        </div>
      </div>
    </main>
  );
}

