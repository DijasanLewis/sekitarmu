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
    <section className="w-full py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-3">Di SekitarMu jualan apa aja ya?</h1>
      <p className="text-muted-foreground mb-6">
        Yuk cari yang kamu butuhin siapa tau ada di sekitar sini.
      </p>
      
      {/* Form pencarian */}
      <form 
        onSubmit={handleSearchSubmit} 
        className="max-w-xl mx-auto p-4 rounded-lg bg-card border-4 border-primary shadow-lg"
      >
        <div className="relative flex">
          {/* Input field untuk query pencarian */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari Produk atau Toko..."
            className="flex-grow h-12 px-4 rounded-l-md border border-border bg-input focus:outline-none"
          />
          {/* Tombol submit pencarian */}
          <button
            type="submit"
            className="h-12 px-6 rounded-r-md bg-primary text-primary-foreground font-bold hover:bg-primary/90"
          >
            Cari
          </button>
        </div>
      </form>
    </section>
  );
}

