// data/umkm.ts

// Tipe Kategori (GANTI INI)
export type Category = "Makanan" | "Minuman" | "Jasa";

// Tipe Data UMKM
export interface UMKM {
  id: string;
  name: string;
  description: string;
  category: Category;
  image: string; // URL ke gambar
}

// Daftar UMKM (GANTI INI)
export const UMKM_LIST: UMKM[] = [
  {
    id: "1",
    name: "Bakso Legendaris Pak Kumis",
    description: "Bakso urat sapi asli dengan kuah kaldu yang kaya rasa.",
    category: "Makanan", // Ganti dari Kuliner
    image: "https://via.placeholder.com/300x200?text=Bakso",
  },
  {
    id: "2",
    name: "Kopi Senja",
    description: "Warung kopi modern dengan biji kopi pilihan nusantara.",
    category: "Minuman", // Ganti dari Kuliner
    image: "https://via.placeholder.com/300x200?text=Kopi",
  },
  {
    id: "3",
    name: "Cukur Rambut 'Rapih'",
    description: "Jasa pangkas rambut pria dengan gaya terbaru.",
    category: "Jasa",
    image: "https://via.placeholder.com/300x200?text=Barber",
  },
  // Hapus/ganti data fashion dan laundry agar sesuai
];

// Fungsi Pencarian
export function searchUMKM(query: string, category: Category | "Semua"): UMKM[] {
  let results = [...UMKM_LIST];

  // Filter berdasarkan kategori
  if (category !== "Semua") {
    results = results.filter((item) => item.category === category);
  }

  // Filter berdasarkan query pencarian
  if (query.trim() !== "") {
    const lowerCaseQuery = query.toLowerCase();
    results = results.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseQuery) ||
      item.description.toLowerCase().includes(lowerCaseQuery)
    );
  }

  return results;
}