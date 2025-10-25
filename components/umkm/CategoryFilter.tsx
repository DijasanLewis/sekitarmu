// components/umkm/CategoryFilter.tsx

"use client";
import type { Category } from "@/data/umkm";

// GANTI DAFTAR KATEGORI INI
const CATEGORIES: (Category | "Semua")[] = ["Semua", "Makanan", "Minuman", "Jasa"];

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
          // Ganti style <Button> dengan <button> biasa
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2
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