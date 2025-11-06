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
 * 2. Menampilkan 4 produk pertama secara default
 * 3. Ketika tombol expand diklik, menampilkan semua produk
 * 4. Setiap kartu menampilkan produk yang dapat diklik untuk melihat detail (jika diperlukan)
 */

import { useState, useMemo } from 'react';
import SimpleCard from './SimpleCard';
import ExpandToggleButton from './ExpandToggleButton';
import { UMKM_LIST } from '@/data/umkm';

export default function PopularSearchesSection() {
  // State untuk mengontrol apakah section sudah di-expand atau belum
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Mengambil semua produk dari semua UMKM dan membuat daftar unik berdasarkan nama produk
  const products = useMemo(() => {
    const allProducts = UMKM_LIST.flatMap(umkm => umkm.products);
    // Menghilangkan duplikat berdasarkan nama produk
    const uniqueProducts = Array.from(
      new Map(allProducts.map(product => [product.productName, product])).values()
    );
    return uniqueProducts;
  }, []);
  
  // Menentukan item yang akan ditampilkan: semua produk jika expanded, 4 produk pertama jika belum
  const items = isExpanded ? products : products.slice(0, 4);

  return (
    <section id="popular-searches" className="w-full py-12 px-4 text-center bg-muted">
      <h2 className="text-2xl font-bold mb-6">Yuk dicek ada nggak yang kamu cari?</h2>
      
      {/* Grid untuk menampilkan kartu pencarian populer */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(product => {
          // Cari UMKM yang memiliki produk ini
          const umkmWithProduct = UMKM_LIST.find(umkm => 
            umkm.products.some(p => p.productId === product.productId)
          );
          
          // Jika ditemukan UMKM, arahkan ke detail UMKM, jika tidak, tidak ada link
          const href = umkmWithProduct ? `/umkm/${umkmWithProduct.id}` : '#';
          
          return (
            <SimpleCard 
              key={product.productId} 
              title={product.productName} 
              href={href}
            />
          );
        })}
      </div>
      
      {/* Tombol untuk expand/collapse section - hanya ditampilkan jika ada lebih dari 4 produk */}
      {products.length > 4 && (
        <ExpandToggleButton 
          onClick={() => setIsExpanded(!isExpanded)} 
          isExpanded={isExpanded} 
        />
      )}
    </section>
  );
}
