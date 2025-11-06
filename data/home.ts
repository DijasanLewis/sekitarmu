/**
 * Data untuk halaman home
 * 
 * File ini berisi data-data yang digunakan di halaman utama:
 * - section1Data: Data pencarian populer (PopularSearchesSection)
 * - section2Data: Data kategori usaha (BusinessCategorySection)
 * - section3Data: Data jenis UMKM (UMKMListSection)
 */

// Interface untuk kartu sederhana (digunakan di section1 dan section3)
export interface SimpleCardData {
  title: string;
  href: string;
}

// Interface untuk kartu kategori (digunakan di section2)
export interface CategoryCardData {
  title: string;
  href: string;
  iconUrl: string;
}

/**
 * Data pencarian populer
 * Menampilkan berbagai pencarian populer seperti makanan, jasa, dll.
 * 
 * Catatan: Data ini mungkin tidak digunakan lagi karena komponen PopularSearchesSection
 * sudah mengambil data langsung dari UMKM_LIST di data/umkm.ts
 */
export const section1Data: SimpleCardData[] = [
  { title: "Bubur ayam", href: "/listumkm?q=Bubur ayam" },
  { title: "Fotocopy", href: "/listumkm?q=Fotocopy" },
  { title: "Service Laptop", href: "/listumkm?q=Service Laptop" },
  { title: "Jahit Seragam", href: "/listumkm?q=Jahit Seragam" },
  { title: "Laundry", href: "/listumkm?q=Laundry" },
  { title: "Servis AC", href: "/listumkm?q=Servis AC" },
  { title: "Pijat", href: "/listumkm?q=Pijat" },
  { title: "Katering", href: "/listumkm?q=Katering" },
];

/**
 * Data kategori usaha
 * Menampilkan berbagai kategori usaha dengan ikon.
 * 
 * Catatan: Data ini mungkin tidak digunakan lagi karena komponen BusinessCategorySection
 * sudah mengambil data langsung dari definisi Category type di data/umkm.ts
 */
export const section2Data: CategoryCardData[] = [
  { title: "Makanan", href: "/listumkm?category=Makanan", iconUrl: "https://via.placeholder.com/100/3B82F6/FFFFFF?text=ICON" },
  { title: "Minuman", href: "/listumkm?category=Minuman", iconUrl: "https://via.placeholder.com/100/F97316/FFFFFF?text=ICON" },
  { title: "Jasa", href: "/listumkm?category=Jasa", iconUrl: "https://via.placeholder.com/100/10B981/FFFFFF?text=ICON" },
  { title: "Fashion", href: "/listumkm?category=Fashion", iconUrl: "https://via.placeholder.com/100/6366F1/FFFFFF?text=ICON" },
  { title: "Elektronik", href: "/listumkm?category=Elektronik", iconUrl: "https://via.placeholder.com/100/EC4899/FFFFFF?text=ICON" },
  { title: "Kesehatan & Kecantikan", href: "/listumkm?category=Kesehatan & Kecantikan", iconUrl: "https://via.placeholder.com/100/8B5CF6/FFFFFF?text=ICON" },
];

/**
 * Data jenis UMKM
 * Menampilkan berbagai jenis UMKM yang ada.
 * 
 * Catatan: Data ini mungkin tidak digunakan lagi karena komponen UMKMListSection
 * sudah mengambil data langsung dari UMKM_LIST di data/umkm.ts
 */
export const section3Data: SimpleCardData[] = [
  { title: "Warteg", href: "/listumkm?q=Warteg" },
  { title: "Barbershop", href: "/listumkm?q=Barbershop" },
  { title: "Taylor", href: "/listumkm?q=Taylor" },
  { title: "Warung", href: "/listumkm?q=Warung" },
  { title: "Toko Kelontong", href: "/listumkm?q=Toko Kelontong" },
  { title: "Rumah Makan Padang", href: "/listumkm?q=Rumah Makan Padang" },
];
