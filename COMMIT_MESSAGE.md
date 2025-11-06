# Pesan Commit

## Refactor: Restrukturisasi aplikasi dan penghapusan halaman listumkm

### Ringkasan
Melakukan refactoring besar-besaran pada aplikasi SekitarMu dengan memisahkan komponen-komponen menjadi file terpisah, menghapus halaman listumkm yang tidak diperlukan, membuat halaman detail UMKM, dan memperbaiki navigasi aplikasi.

### Perubahan Utama

#### 1. Restrukturisasi Komponen Halaman Utama
- **Memisahkan komponen dari `app/page.tsx`** menjadi file-file terpisah di `components/home/`:
  - `SearchHeroSection.tsx` - Hero section dengan search bar
  - `PopularSearchesSection.tsx` - Section pencarian populer (menampilkan produk dari UMKM_LIST)
  - `BusinessCategorySection.tsx` - Section kategori usaha (menampilkan kategori dari Category type)
  - `UMKMListSection.tsx` - Section daftar UMKM (menampilkan nama UMKM dari UMKM_LIST)
  - `SupportUMKMSection.tsx` - Section call-to-action untuk mendukung UMKM
  - `ExpandToggleButton.tsx` - Komponen tombol expand/collapse (sebelumnya DownArrow)
  - `SimpleCard.tsx` - Komponen kartu sederhana
  - `CategoryCard.tsx` - Komponen kartu kategori

#### 2. Perubahan Struktur Data
- **Mengubah definisi tipe data di `data/umkm.ts`**:
  - Menambahkan tipe `Category` dengan 14 kategori lengkap
  - Menambahkan tipe `Product` dengan field lengkap (productId, productName, price, category, productImage, description, stock, rating)
  - Memperbarui interface `UMKM` dengan field baru (googleMapsUrl, imageUrls[], address, phone, email, website, socialMediaLinks, products[])
  - Memperbarui `UMKM_LIST` dengan struktur data baru yang lebih lengkap
  - Memperbarui fungsi `searchUMKM` untuk mencari di nama produk juga

#### 3. Penghapusan Halaman listumkm
- **Menghapus folder `app/listumkm/`** dan file `page.tsx` di dalamnya
- **Menghapus semua referensi ke `/listumkm`** di seluruh aplikasi:
  - `SearchHeroSection.tsx` - Mengubah dari redirect ke scroll ke section PopularSearchesSection
  - `PopularSearchesSection.tsx` - Mengubah link produk untuk mengarah ke detail UMKM
  - `BusinessCategorySection.tsx` - Mengubah link kategori untuk mengarah ke detail UMKM pertama dengan kategori tersebut
  - `UMKMListSection.tsx` - Menghapus link "Lihat Semua Daftar UMKM"
  - `UMKMDetailHeader.tsx` - Menghapus breadcrumb "Daftar UMKM"
  - `app/layout.tsx` - Mengubah link "List UMKM" menjadi "Beranda"
  - `data/home.ts` - Memperbarui komentar (data mungkin tidak digunakan lagi)

#### 4. Pembuatan Halaman Detail UMKM
- **Membuat halaman detail di `app/umkm/[id]/page.tsx`**:
  - Menggunakan dynamic route `[id]` untuk mendapatkan ID UMKM
  - Menampilkan 404 jika UMKM tidak ditemukan
  - Layout 2 kolom: informasi di kiri, produk di kanan

- **Membuat komponen-komponen detail UMKM di `components/umkm/`**:
  - `UMKMDetailHeader.tsx` - Header dengan hero image, breadcrumb, nama, kategori, dan deskripsi
  - `UMKMDetailInfo.tsx` - Informasi toko (alamat, Google Maps link, kategori, website)
  - `UMKMContactSection.tsx` - Informasi kontak (telepon, email, media sosial)
  - `UMKMProductList.tsx` - Daftar produk dengan grid layout yang menampilkan gambar, nama, harga, stok, dan rating

#### 5. Perbaikan Navigasi
- **Memperbaiki navigasi back dari detail UMKM ke home**:
  - Menggunakan Next.js Link dengan client-side navigation (tidak perlu reload)
  - Menambahkan support untuk anchor links dengan smooth scroll di `SimpleCard` dan `CategoryCard`
  - Menambahkan ID untuk scroll target (`popular-searches`, `umkm-list`)

#### 6. Update Komponen yang Menggunakan Data
- **`PopularSearchesSection.tsx`**:
  - Mengambil produk langsung dari `UMKM_LIST`
  - Menghilangkan duplikat produk berdasarkan nama
  - Mengarahkan ke detail UMKM yang menjual produk tersebut

- **`BusinessCategorySection.tsx`**:
  - Menggunakan semua 14 kategori dari definisi `Category` type
  - Mengarahkan ke detail UMKM pertama dengan kategori tersebut

- **`UMKMListSection.tsx`**:
  - Mengambil nama UMKM langsung dari `UMKM_LIST`
  - Mengarahkan ke halaman detail UMKM dengan ID

- **`UMKMCard.tsx`**:
  - Mengubah dari `item.image` menjadi `item.imageUrls[0]`
  - Menambahkan tampilan phone dan address

- **`CategoryFilter.tsx`**:
  - Memperbarui daftar kategori sesuai definisi baru

#### 7. Dokumentasi dan Komentar
- Menambahkan komentar JSDoc lengkap di semua komponen baru
- Menambahkan inline comments yang menjelaskan cara kerja komponen
- Memperbarui komentar di file-file yang diubah

### File yang Ditambahkan
- `components/home/SearchHeroSection.tsx`
- `components/home/PopularSearchesSection.tsx`
- `components/home/BusinessCategorySection.tsx`
- `components/home/UMKMListSection.tsx`
- `components/home/SupportUMKMSection.tsx`
- `components/home/ExpandToggleButton.tsx`
- `app/umkm/[id]/page.tsx`
- `components/umkm/UMKMDetailHeader.tsx`
- `components/umkm/UMKMDetailInfo.tsx`
- `components/umkm/UMKMContactSection.tsx`
- `components/umkm/UMKMProductList.tsx`

### File yang Dihapus
- `app/listumkm/page.tsx`

### File yang Dimodifikasi
- `app/page.tsx` - Disederhanakan menjadi hanya import dan render komponen
- `app/layout.tsx` - Mengubah link navigasi
- `data/umkm.ts` - Perubahan besar pada struktur data
- `components/umkm/UMKMCard.tsx` - Update untuk struktur data baru
- `components/umkm/CategoryFilter.tsx` - Update kategori
- `data/home.ts` - Update komentar (data mungkin tidak digunakan lagi)

### Breaking Changes
- Halaman `/listumkm` tidak lagi tersedia
- Semua link yang mengarah ke `/listumkm` telah diubah atau dihapus
- Struktur data `UMKM` dan `Product` telah berubah secara signifikan

### Perbaikan Teknis
- Menggunakan Next.js client-side navigation untuk menghindari reload
- Menambahkan support untuk smooth scroll ke anchor links
- Optimasi performa dengan `useMemo` untuk data yang dihitung
- Menggunakan SVG inline untuk icon (tidak perlu dependency tambahan)

### Catatan
- Data di `data/home.ts` mungkin tidak digunakan lagi karena komponen sudah mengambil data langsung dari `umkm.ts`
- Semua komponen sekarang menggunakan data langsung dari `UMKM_LIST` dan akan otomatis terupdate jika data berubah

