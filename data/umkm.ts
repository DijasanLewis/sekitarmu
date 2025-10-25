// Ganti Tipe Kategori
export type Category = "Kuliner" | "Jasa" | "Komputer" | "Fasion";

export interface UMKM {
  id: string;
  name: string;
  description: string;
  category: Category;
  image: string;
}

// Ganti Daftar UMKM
export const UMKM_LIST: UMKM[] = [
  {
    id: "1",
    name: "Bakso Legendaris Pak Kumis",
    description: "Bakso urat sapi asli.",
    category: "Kuliner", // Ganti
    image: "https://via.placeholder.com/300x200?text=Bakso",
  },
  {
    id: "2",
    name: "Kopi Senja",
    description: "Warung kopi modern.",
    category: "Kuliner", // Ganti
    image: "https://via.placeholder.com/300x200?text=Kopi",
  },
  {
    id: "3",
    name: "Cukur Rambut 'Rapih'",
    description: "Jasa pangkas rambut pria.",
    category: "Jasa",
    image: "https://via.placeholder.com/300x200?text=Barber",
  },
  // Tambahkan data baru
  {
    id: "4",
    name: "Service Laptop Cepat",
    description: "Perbaikan laptop dan PC.",
    category: "Komputer",
    image: "https://via.placeholder.com/300x200?text=Servis+Laptop",
  },
  {
    id: "5",
    name: "Jahit Seragam Rapi",
    description: "Jasa jahit dan taylor.",
    category: "Fasion",
    image: "https://via.placeholder.com/300x200?text=Jahit",
  },
  {
    id: "6",
    name: "Bubur Ayam Enak",
    description: "Bubur ayam spesial.",
    category: "Kuliner",
    image: "https://via.placeholder.com/300x200?text=Bubur+Ayam",
  },
  {
    id: "7",
    name: "Fotocopy Murah",
    description: "Jasa fotocopy dan ATK.",
    category: "Jasa",
    image: "https://via.placeholder.com/300x200?text=Fotocopy",
  }
];

// Fungsi Pencarian (tetap sama)
export function searchUMKM(query: string, category: Category | "Semua"): UMKM[] {
  let results = [...UMKM_LIST];
  if (category !== "Semua") {
    results = results.filter((item) => item.category === category);
  }
  if (query.trim() !== "") {
    const lowerCaseQuery = query.toLowerCase();
    results = results.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseQuery) ||
      item.description.toLowerCase().includes(lowerCaseQuery)
    );
  }
  return results;
}