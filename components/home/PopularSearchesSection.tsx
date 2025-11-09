"use client";

/**
 * PopularSearchesSection - Komponen untuk menampilkan pencarian populer
 * 
 * Komponen ini menampilkan daftar produk yang ada di UMKM_LIST.
 * Data produk diambil langsung dari data UMKM yang tersedia.
 * Pengguna dapat mengklik kartu untuk langsung mencari UMKM yang menjual produk tersebut.
 * 
 * Cara kerja:
 * 1. Mengambil semua produk dari semua UMKM di UMKM_LIST
 * 2. Menampilkan 3 produk pertama secara default
 * 3. Ketika tombol expand diklik, menampilkan semua produk
 * 4. Setiap kartu menampilkan produk yang dapat diklik untuk melihat detail (jika diperlukan)
 */

import { useState, useMemo } from 'react';
import HomeProductCard from './HomeProductCard';
import ExpandToggleButton from './ExpandToggleButton';
import { UMKM_LIST } from '@/data/umkm';

export default function PopularSearchesSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const products = useMemo(() => {
    const allProducts = UMKM_LIST.flatMap(umkm => umkm.products);
    const uniqueProducts = Array.from(
      new Map(allProducts.map(product => [product.productName, product])).values()
    );
    return uniqueProducts;
  }, []);
  
  // 2. Ubah slice(0, 4) menjadi (0, 3) untuk default 3 item
  const items = isExpanded ? products : products.slice(0, 3);

  return (
    <section id="popular-searches" className="w-full py-12 px-4 text-center bg-muted">
      <h2 className="text-2xl font-bold mb-6">Yuk dicek ada nggak yang kamu cari?</h2>
      
      {/* 3. Ubah grid-cols-4 menjadi grid-cols-3 dan max-w-4xl menjadi 7xl */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(product => {
          // Cari UMKM yang memiliki produk ini
          const umkmWithProduct = UMKM_LIST.find(umkm => 
            umkm.products.some(p => p.productId === product.productId)
          );
          
          // 4. Ganti <SimpleCard> dengan <HomeProductCard>
          // Kirim prop 'product' dan 'umkm' ke kartu
          return (
            <HomeProductCard 
              key={product.productId} 
              product={product}
              umkm={umkmWithProduct}
            />
          );
        })}
      </div>
      
      {/* 5. Ubah kondisi > 4 menjadi > 3 */}
      {products.length > 3 && (
        <ExpandToggleButton 
          onClick={() => setIsExpanded(!isExpanded)} 
          isExpanded={isExpanded} 
        />
      )}
    </section>
  );
}
