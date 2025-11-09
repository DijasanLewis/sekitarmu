"use client";

/**
 * SearchHeroSection - Komponen hero section dengan search bar
 * 
 * Komponen ini menampilkan hero section di bagian atas halaman dengan:
 * - Judul dan deskripsi
 * - Form pencarian untuk mencari produk atau toko
 * 
 * Cara kerja:
 * 1. Pengguna mengetik query di input field
 * 2. Ketika form di-submit, akan scroll ke section PopularSearchesSection
 * 3. Query akan digunakan untuk highlight atau filter (jika diperlukan di masa depan)
 */

import { useState, FormEvent } from 'react';

export default function SearchHeroSection() {
  // State untuk menyimpan query pencarian
  const [query, setQuery] = useState('');

  /**
   * Handler untuk submit form pencarian
   * Scroll ke section PopularSearchesSection untuk melihat hasil pencarian
   */
  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Jika query tidak kosong, scroll ke section PopularSearchesSection
    if (query.trim()) {
      const section = document.getElementById('popular-searches');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    // 1. Tambahkan 'relative' dan class untuk background image
    <section 
      className="relative w-full py-16 px-4 text-center bg-cover bg-center"
      // 2. Path ke gambar Anda (harus ada di public/home/img/Ornamen.png)
      style={{ backgroundImage: "url('/home/img/Ornamen.png')" }}
    >
      {/* 3. Tambahkan overlay gelap di belakang konten */}
      <div className="absolute inset-0 bg-black/10 z-0" />
      
      {/* 4. Buat konten memiliki 'relative z-10' agar di atas overlay */}
      <div className="relative z-10">
        
        {/* 5. Ubah warna teks menjadi putih dan tambahkan drop-shadow */}
        <h1 className="text-4xl font-bold mb-3 text-white drop-shadow-md">
          Di SekitarMu jualan apa aja ya?
        </h1>
        <p className="text-white/90 mb-6 drop-shadow-md">
          Yuk cari yang kamu butuhin siapa tau ada di sekitar sini.
        </p>
        
        {/* Form pencarian tidak perlu diubah, 'bg-card' sudah bagus */}
        <form 
          onSubmit={handleSearchSubmit} 
          className="max-w-xl mx-auto p-4 rounded-lg bg-card border-4 border-primary shadow-lg"
        >
          <div className="relative flex">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari Produk atau Toko..."
              className="flex-grow h-12 px-4 rounded-l-md border border-border bg-input focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-r-md bg-primary text-primary-foreground font-bold hover:bg-primary/90"
            >
              Cari
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

