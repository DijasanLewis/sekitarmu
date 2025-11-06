"use client";

/**
 * CategoryFilter - Komponen filter untuk memilih kategori UMKM
 * 
 * Komponen ini menampilkan tombol-tombol filter untuk memilih kategori UMKM.
 * Pengguna dapat memilih kategori tertentu atau "Semua" untuk melihat semua kategori.
 * 
 * Cara kerja:
 * 1. Menampilkan daftar kategori yang tersedia
 * 2. Kategori yang dipilih akan ditandai dengan style berbeda
 * 3. Ketika kategori diklik, memanggil fungsi onChange dengan kategori yang dipilih
 */

import type { Category } from "@/data/umkm";

// Daftar kategori yang tersedia (termasuk opsi "Semua")
const CATEGORIES: (Category | "Semua")[] = [
  "Semua",
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

interface Props {
  value: Category | "Semua";
  onChange: (value: Category | "Semua") => void;
}

export default function CategoryFilter({ value, onChange }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors h-9 px-4 py-2
            ${
              value === category
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}