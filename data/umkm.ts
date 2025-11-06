// File ini berisi tipe data dan struktur untuk UMKM dan produk yang dijual

// Definisi tipe kategori produk yang dijual oleh UMKM
// Kategori ini mencakup berbagai jenis produk dari UMKM yang umum ditemukan
export type Category = 
    | "Makanan"                // Kategori makanan, termasuk makanan ringan dan berat
    | "Minuman"                // Kategori minuman, seperti kopi, jus, teh
    | "Jasa"                   // Kategori jasa, termasuk layanan kecantikan, pendidikan, dll
    | "Fashion"                // Kategori fashion, termasuk pakaian, aksesoris, sepatu
    | "Elektronik"             // Kategori elektronik, seperti gadget, laptop, dan aksesoris elektronik
    | "Kerajinan Tangan"       // Kategori kerajinan tangan, seperti perhiasan, souvenir, dan hiasan rumah
    | "Kesehatan & Kecantikan" // Kategori produk kesehatan dan kecantikan, termasuk kosmetik dan suplemen
    | "Olahraga"               // Kategori produk olahraga, seperti alat fitness, pakaian olahraga, dll
    | "Kendaraan & Aksesoris"  // Kategori produk kendaraan dan aksesorisnya, seperti sparepart, helm, dll
    | "Perabot Rumah Tangga"   // Kategori produk perabot rumah tangga, seperti furniture, dekorasi, dll
    | "Buku & Alat Tulis"      // Kategori buku dan perlengkapan alat tulis
    | "Hobi & Kerajinan"       // Kategori barang-barang hobi dan kerajinan
    | "Pertanian & Kehutanan"  // Kategori produk pertanian dan kehutanan, seperti bibit, pupuk, alat pertanian
    | "Konstruksi & Bangunan"; // Kategori produk untuk konstruksi dan bahan bangunan

// Definisi tipe data untuk produk
// Setiap produk memiliki ID, nama, harga, kategori, gambar, dan deskripsi
export type Product = {
    productId: string;          // ID unik untuk setiap produk
    productName: string;        // Nama produk
    price: number;              // Harga produk dalam satuan mata uang
    category: Category;         // Kategori produk (makanan, minuman, dll)
    productImage: string[];     // Array URL gambar produk (bisa lebih dari satu gambar)
    description: string;        // Deskripsi produk
    stock: number;              // Jumlah stok produk yang tersedia
    rating?: number;            // Rating produk (opsional), dengan rentang 0-5
};

// Definisi tipe data untuk UMKM
// UMKM memiliki ID, nama, deskripsi, kategori, lokasi, produk, dan informasi kontak
export interface UMKM {
    id: string;                   // ID unik untuk UMKM
    name: string;                 // Nama UMKM
    description: string;          // Deskripsi singkat mengenai UMKM
    category: Category;           // Kategori UMKM (misalnya, Makanan, Jasa, dll)
    googleMapsUrl: string;        // URL ke lokasi UMKM di Google Maps
    imageUrls: string[];           // Array URL gambar UMKM (bisa lebih dari satu gambar)
    address: string;              // Alamat lengkap UMKM
    phone: string;                // Nomor telepon UMKM
    email?: string;               // Email UMKM (opsional)
    website?: string;             // Website UMKM (opsional)
    socialMediaLinks?: string[];  // Link media sosial UMKM (opsional)
    products: Product[];          // Daftar produk yang dijual oleh UMKM
}

// Daftar UMKM dengan struktur data baru
// Data ini menggunakan struktur baru yang lebih lengkap dengan informasi kontak dan produk
export const UMKM_LIST: UMKM[] = [
  {
    id: "1",
    name: "Bakso Legendaris Pak Kumis",
    description: "Bakso urat sapi asli.",
    category: "Makanan",
    googleMapsUrl: "https://maps.google.com/?q=Bakso+Legendaris+Pak+Kumis",
    imageUrls: ["https://via.placeholder.com/300x200?text=Bakso"],
    address: "Jl. Raya Contoh No. 123, Jakarta",
    phone: "+6281234567890",
    email: "bakso@example.com",
    products: [
      {
        productId: "p1",
        productName: "Bakso Urat Sapi",
        price: 15000,
        category: "Makanan",
        productImage: ["https://via.placeholder.com/200x200?text=Bakso+Urat"],
        description: "Bakso urat sapi dengan kuah kaldu spesial",
        stock: 50,
        rating: 4.5
      }
    ]
  },
  {
    id: "2",
    name: "Kopi Senja",
    description: "Warung kopi modern.",
    category: "Minuman",
    googleMapsUrl: "https://maps.google.com/?q=Kopi+Senja",
    imageUrls: ["https://via.placeholder.com/300x200?text=Kopi"],
    address: "Jl. Raya Contoh No. 456, Jakarta",
    phone: "+6281234567891",
    products: [
      {
        productId: "p2",
        productName: "Kopi Hitam",
        price: 8000,
        category: "Minuman",
        productImage: ["https://via.placeholder.com/200x200?text=Kopi+Hitam"],
        description: "Kopi hitam nikmat dengan aroma yang menggoda",
        stock: 100,
        rating: 4.8
      }
    ]
  },
  {
    id: "3",
    name: "Cukur Rambut 'Rapih'",
    description: "Jasa pangkas rambut pria.",
    category: "Jasa",
    googleMapsUrl: "https://maps.google.com/?q=Cukur+Rambut+Rapih",
    imageUrls: ["https://via.placeholder.com/300x200?text=Barber"],
    address: "Jl. Raya Contoh No. 789, Jakarta",
    phone: "+6281234567892",
    products: [
      {
        productId: "p3",
        productName: "Pangkas Rambut",
        price: 25000,
        category: "Jasa",
        productImage: ["https://via.placeholder.com/200x200?text=Pangkas"],
        description: "Jasa pangkas rambut dengan hasil rapi dan modern",
        stock: 999, // Jasa tidak terbatas
        rating: 4.7
      }
    ]
  },
  {
    id: "4",
    name: "Service Laptop Cepat",
    description: "Perbaikan laptop dan PC.",
    category: "Jasa",
    googleMapsUrl: "https://maps.google.com/?q=Service+Laptop+Cepat",
    imageUrls: ["https://via.placeholder.com/300x200?text=Servis+Laptop"],
    address: "Jl. Raya Contoh No. 321, Jakarta",
    phone: "+6281234567893",
    products: [
      {
        productId: "p4",
        productName: "Service Laptop",
        price: 100000,
        category: "Jasa",
        productImage: ["https://via.placeholder.com/200x200?text=Service"],
        description: "Jasa perbaikan laptop dan PC dengan garansi",
        stock: 999,
        rating: 4.6
      }
    ]
  },
  {
    id: "5",
    name: "Jahit Seragam Rapi",
    description: "Jasa jahit dan taylor.",
    category: "Jasa",
    googleMapsUrl: "https://maps.google.com/?q=Jahit+Seragam+Rapi",
    imageUrls: ["https://via.placeholder.com/300x200?text=Jahit"],
    address: "Jl. Raya Contoh No. 654, Jakarta",
    phone: "+6281234567894",
    products: [
      {
        productId: "p5",
        productName: "Jahit Seragam",
        price: 50000,
        category: "Jasa",
        productImage: ["https://via.placeholder.com/200x200?text=Jahit"],
        description: "Jasa jahit seragam dengan kualitas terjamin",
        stock: 999,
        rating: 4.9
      }
    ]
  },
  {
    id: "6",
    name: "Bubur Ayam Enak",
    description: "Bubur ayam spesial.",
    category: "Makanan",
    googleMapsUrl: "https://maps.google.com/?q=Bubur+Ayam+Enak",
    imageUrls: ["https://via.placeholder.com/300x200?text=Bubur+Ayam"],
    address: "Jl. Raya Contoh No. 987, Jakarta",
    phone: "+6281234567895",
    products: [
      {
        productId: "p6",
        productName: "Bubur Ayam Spesial",
        price: 12000,
        category: "Makanan",
        productImage: ["https://via.placeholder.com/200x200?text=Bubur"],
        description: "Bubur ayam dengan bumbu spesial dan topping lengkap",
        stock: 80,
        rating: 4.4
      }
    ]
  },
  {
    id: "7",
    name: "Fotocopy Murah",
    description: "Jasa fotocopy dan ATK.",
    category: "Jasa",
    googleMapsUrl: "https://maps.google.com/?q=Fotocopy+Murah",
    imageUrls: ["https://via.placeholder.com/300x200?text=Fotocopy"],
    address: "Jl. Raya Contoh No. 147, Jakarta",
    phone: "+6281234567896",
    products: [
      {
        productId: "p7",
        productName: "Fotocopy",
        price: 500,
        category: "Jasa",
        productImage: ["https://via.placeholder.com/200x200?text=Fotocopy"],
        description: "Jasa fotocopy dengan harga murah dan kualitas baik",
        stock: 999,
        rating: 4.3
      }
    ]
  }
];

/**
 * Fungsi untuk mencari UMKM berdasarkan query dan kategori
 * 
 * Cara kerja:
 * 1. Filter berdasarkan kategori jika kategori bukan "Semua"
 * 2. Filter berdasarkan query (mencari di nama, deskripsi, dan nama produk)
 * 3. Mengembalikan array UMKM yang sesuai dengan kriteria
 * 
 * @param query - Kata kunci pencarian (nama UMKM, deskripsi, atau produk)
 * @param category - Kategori UMKM yang ingin dicari, atau "Semua" untuk semua kategori
 * @returns Array UMKM yang sesuai dengan kriteria pencarian
 */
export function searchUMKM(query: string, category: Category | "Semua"): UMKM[] {
  let results = [...UMKM_LIST];
  
  // Filter berdasarkan kategori
  if (category !== "Semua") {
    results = results.filter((item) => item.category === category);
  }
  
  // Filter berdasarkan query
  if (query.trim() !== "") {
    const lowerCaseQuery = query.toLowerCase();
    results = results.filter((item) => {
      // Cari di nama UMKM
      const nameMatch = item.name.toLowerCase().includes(lowerCaseQuery);
      // Cari di deskripsi UMKM
      const descMatch = item.description.toLowerCase().includes(lowerCaseQuery);
      // Cari di nama produk
      const productMatch = item.products.some(product => 
        product.productName.toLowerCase().includes(lowerCaseQuery)
      );
      
      return nameMatch || descMatch || productMatch;
    });
  }
  
  return results;
}
