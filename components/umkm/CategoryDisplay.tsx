/**
 * CategoryDisplay - Komponen untuk menampilkan kategori UMKM
 * 
 * Komponen ini menampilkan kategori dengan aturan:
 * - Menampilkan maksimal 2 kategori pertama
 * - Jika ada lebih dari 2 kategori, menampilkan 2 kategori + badge "+X" (X = jumlah kategori lainnya)
 * 
 * Cara kerja:
 * 1. Menerima array kategori
 * 2. Menampilkan 2 kategori pertama sebagai badge
 * 3. Jika ada lebih dari 2, menampilkan badge "+X" dengan jumlah kategori lainnya
 */

import type { Category } from "@/data/umkm";

interface Props {
  categories: Category[];
  className?: string;
  badgeClassName?: string;
}

export default function CategoryDisplay({ categories, className = "", badgeClassName = "" }: Props) {
  if (categories.length === 0) {
    return null;
  }

  const displayCategories = categories.slice(0, 2);
  const remainingCount = categories.length - 2;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {displayCategories.map((category, index) => (
        <span
          key={index}
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground ${badgeClassName}`}
        >
          {category}
        </span>
      ))}
      {remainingCount > 0 && (
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold bg-secondary text-secondary-foreground ${badgeClassName}`}
        >
          +{remainingCount}
        </span>
      )}
    </div>
  );
}



