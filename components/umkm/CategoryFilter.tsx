"use client";
import type { Category } from "@/data/umkm";

// GANTI DAFTAR KATEGORI INI
const CATEGORIES: (Category | "Semua")[] = ["Semua", "Kuliner", "Jasa", "Komputer", "Fasion"];

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