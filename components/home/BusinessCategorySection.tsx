"use client";

/**
 * BusinessCategorySection - Komponen untuk menampilkan kategori usaha
 * 
 * Komponen ini menampilkan semua kategori yang didefinisikan di type Category dari data/umkm.ts.
 * Setiap kategori memiliki ikon dan dapat diklik untuk melihat UMKM dengan kategori tersebut.
 * 
 * Cara kerja:
 * 1. Mengambil semua kategori dari definisi Category type
 * 2. Menampilkan 4 kategori pertama secara default
 * 3. Ketika tombol expand diklik, menampilkan semua kategori
 * 4. Setiap kartu kategori menampilkan kategori yang dapat diklik untuk melihat UMKM dengan kategori tersebut
 */

import { useState } from 'react';
import CategoryCard from './CategoryCard';
import ExpandToggleButton from './ExpandToggleButton';
import { UMKM_LIST } from '@/data/umkm';
import type { Category } from '@/data/umkm';

// Daftar semua kategori yang tersedia (sesuai dengan definisi Category type)
const ALL_CATEGORIES: Category[] = [
  "Makanan",
  "Minuman",
  "Jasa",
  "Fashion",
  "Elektronik",
  "Kerajinan Tangan",
  "Kesehatan & Kecantikan",
  "Olahraga",
  "Kendaraan & Aksesoris",
  "Perabot Rumah Tangga",
  "Buku & Alat Tulis",
  "Hobi & Kerajinan",
  "Pertanian & Kehutanan",
  "Konstruksi & Bangunan"
];

// Fungsi untuk mendapatkan URL ikon placeholder berdasarkan kategori
const getCategoryIcon = (category: Category): string => {
  const iconColors: Record<Category, string> = {
    "Makanan": "3B82F6",
    "Minuman": "F97316",
    "Jasa": "10B981",
    "Fashion": "6366F1",
    "Elektronik": "EC4899",
    "Kerajinan Tangan": "8B5CF6",
    "Kesehatan & Kecantikan": "EF4444",
    "Olahraga": "14B8A6",
    "Kendaraan & Aksesoris": "F59E0B",
    "Perabot Rumah Tangga": "06B6D4",
    "Buku & Alat Tulis": "84CC16",
    "Hobi & Kerajinan": "A855F7",
    "Pertanian & Kehutanan": "22C55E",
    "Konstruksi & Bangunan": "64748B"
  };
  const color = iconColors[category] || "6B7280";
  return `https://via.placeholder.com/100/${color}/FFFFFF?text=${encodeURIComponent(category)}`;
};

export default function BusinessCategorySection() {
  // State untuk mengontrol apakah section sudah di-expand atau belum
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Menentukan item yang akan ditampilkan: semua kategori jika expanded, 4 kategori pertama jika belum
  const items = isExpanded ? ALL_CATEGORIES : ALL_CATEGORIES.slice(0, 4);

  return (
    <section className="w-full py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Mau nyari usaha terkait apa?</h2>
      
      {/* Grid untuk menampilkan kartu kategori usaha */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(category => {
          // Cari UMKM pertama dengan kategori ini
          const umkmWithCategory = UMKM_LIST.find(umkm => umkm.category.includes(category));
          // Jika ditemukan, arahkan ke detail UMKM, jika tidak, scroll ke UMKMListSection
          const href = umkmWithCategory ? `/umkm/${umkmWithCategory.id}` : '#umkm-list';
          
          return (
            <CategoryCard 
              key={category} 
              title={category}
              href={href}
              iconUrl={getCategoryIcon(category)}
            />
          );
        })}
      </div>
      
      {/* Tombol untuk expand/collapse section - hanya ditampilkan jika ada lebih dari 4 kategori */}
      {ALL_CATEGORIES.length > 4 && (
        <ExpandToggleButton 
          onClick={() => setIsExpanded(!isExpanded)} 
          isExpanded={isExpanded} 
        />
      )}
    </section>
  );
}
