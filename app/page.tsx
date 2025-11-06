/**
 * Halaman Utama (Home Page)
 * 
 * Halaman ini menampilkan berbagai section untuk membantu pengguna
 * menemukan UMKM di sekitar mereka.
 * 
 * Struktur halaman:
 * 1. SearchHeroSection - Hero section dengan search bar
 * 2. PopularSearchesSection - Pencarian populer
 * 3. BusinessCategorySection - Kategori usaha
 * 4. UMKMListSection - Daftar jenis UMKM
 * 5. SupportUMKMSection - Call-to-action untuk mendukung UMKM
 */

import SearchHeroSection from '@/components/home/SearchHeroSection';
import PopularSearchesSection from '@/components/home/PopularSearchesSection';
import BusinessCategorySection from '@/components/home/BusinessCategorySection';
import UMKMListSection from '@/components/home/UMKMListSection';
import SupportUMKMSection from '@/components/home/SupportUMKMSection';

export default function Home() {
  return (
    <main className="w-full">
      <SearchHeroSection />
      <PopularSearchesSection />
      <BusinessCategorySection />
      <UMKMListSection />
      <SupportUMKMSection />
    </main>
  );
}