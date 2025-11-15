# Pesan Commit

## Feat: Support multiple categories per UMKM dan refactor layout detail page

### Ringkasan
Menambahkan dukungan untuk multiple categories per UMKM (dari single category menjadi array), membuat komponen CategoryDisplay untuk menampilkan kategori dengan limit 2 + badge "+X", dan melakukan refactor besar pada layout halaman detail UMKM menjadi hero section dengan Google Maps embed.

### Perubahan Utama

#### 1. Perubahan Struktur Data Category
- **Mengubah tipe `category` di `data/umkm.ts`**:
  - Dari `category: Category` menjadi `category: Category[]` (array)
  - Satu UMKM sekarang bisa memiliki multiple categories
  - Update semua UMKM_LIST untuk menggunakan array kategori
  - Menambahkan UMKM baru "Toko Serba Ada" dengan 4 kategori sebagai contoh
  - Update fungsi `searchUMKM` untuk menggunakan `includes()` instead of exact match

#### 2. Komponen CategoryDisplay Baru
- **Membuat `components/umkm/CategoryDisplay.tsx`**:
  - Komponen reusable untuk menampilkan kategori UMKM
  - Menampilkan maksimal 2 kategori pertama sebagai badge
  - Jika ada lebih dari 2 kategori, menampilkan badge "+X" (X = jumlah kategori lainnya)
  - Support custom className dan badgeClassName untuk styling fleksibel
  - Menggunakan primary color untuk kategori, secondary untuk badge "+X"

#### 3. Refactor Layout Halaman Detail UMKM
- **Mengubah `app/umkm/[id]/page.tsx`**:
  - Layout baru dengan 3 section:
    1. Hero section: gambar cover, informasi UMKM, dan Google Maps
    2. Daftar produk toko: menampilkan semua produk
    3. SupportUMKMSection: call-to-action untuk mendukung UMKM
  - Menghapus layout 2 kolom (info di kiri, produk di kanan)
  - Menghapus UMKMDetailInfo dan UMKMContactSection dari layout utama

- **Mengubah `components/umkm/UMKMDetailHeader.tsx`**:
  - Dari header sederhana menjadi hero section full-width
  - Layout 2 kolom: informasi UMKM di kiri, Google Maps embed di kanan
  - Gambar cover sebagai background dengan overlay gradient
  - Menambahkan fungsi `getGoogleMapsEmbedUrl` untuk convert URL ke format embed
  - Menggunakan CategoryDisplay untuk menampilkan kategori
  - Menghapus breadcrumb navigation

#### 4. Update Komponen yang Menggunakan Category
- **`components/home/BusinessCategorySection.tsx`**:
  - Mengubah pencarian kategori dari `umkm.category === category` menjadi `umkm.category.includes(category)`
  - Support untuk multiple categories per UMKM

- **`components/home/HomeUMKMCard.tsx`**:
  - Mengganti single badge kategori dengan komponen CategoryDisplay
  - Support untuk menampilkan multiple categories

- **`components/umkm/UMKMDetailInfo.tsx`**:
  - Mengganti single badge kategori dengan komponen CategoryDisplay
  - Support untuk menampilkan multiple categories

#### 5. Refactor UMKMProductList
- **Mengubah `components/umkm/UMKMProductList.tsx`**:
  - Menyederhanakan layout produk
  - Menghapus informasi stok dan rating
  - Mengubah grid dari 2 kolom menjadi 3 kolom di breakpoint lg
  - Layout lebih clean: kategori, nama, deskripsi, dan harga
  - Menghapus divider dan informasi tambahan yang tidak perlu

### File yang Ditambahkan
- `components/umkm/CategoryDisplay.tsx` - Komponen untuk menampilkan kategori dengan limit 2 + badge "+X"

### File yang Dimodifikasi
- `data/umkm.ts` - Mengubah category dari string menjadi array, update semua data UMKM, update fungsi search
- `app/umkm/[id]/page.tsx` - Refactor layout menjadi 3 section (hero, produk, support)
- `components/umkm/UMKMDetailHeader.tsx` - Refactor menjadi hero section dengan Google Maps embed
- `components/umkm/UMKMProductList.tsx` - Menyederhanakan layout produk
- `components/umkm/UMKMDetailInfo.tsx` - Menggunakan CategoryDisplay
- `components/home/BusinessCategorySection.tsx` - Update pencarian kategori untuk support array
- `components/home/HomeUMKMCard.tsx` - Menggunakan CategoryDisplay

### Breaking Changes
- Tipe data `UMKM.category` berubah dari `Category` menjadi `Category[]`
- Semua komponen yang menggunakan `umkm.category` harus diupdate untuk handle array
- Layout halaman detail UMKM berubah secara signifikan (dari 2 kolom menjadi 3 section vertikal)

### Perbaikan Teknis
- Menggunakan `includes()` untuk pencarian kategori yang lebih fleksibel
- Google Maps embed dengan proper URL conversion
- Komponen CategoryDisplay yang reusable dan fleksibel dengan custom styling
- Layout hero section yang lebih modern dengan overlay gradient

### Catatan
- UMKM "Kopi Senja" sekarang memiliki 4 kategori sebagai contoh: ["Minuman", "Makanan", "Jasa", "Fashion"]
- UMKM baru "Toko Serba Ada" ditambahkan dengan 4 kategori untuk demonstrasi
- CategoryDisplay menampilkan maksimal 2 kategori untuk menjaga UI tetap clean
