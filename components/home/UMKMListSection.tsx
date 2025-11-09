"use client";

/**
 * UMKMListSection - Komponen untuk menampilkan daftar nama UMKM
 * 
 * Komponen ini menampilkan nama-nama UMKM yang ada di UMKM_LIST dari data/umkm.ts.
 * Data UMKM diambil langsung dari UMKM_LIST yang tersedia.
 * Pengguna dapat mengklik kartu untuk mencari UMKM dengan nama tertentu.
 * 
 * Cara kerja:
 * 1. Mengambil semua UMKM dari UMKM_LIST di data/umkm.ts
 * 2. Menampilkan 4 nama UMKM pertama secara default
 * 3. Ketika tombol expand diklik, menampilkan semua nama UMKM
 * 4. Setiap kartu mengarah ke halaman detail UMKM dengan ID UMKM
 */

import { useState } from 'react';
import HomeUMKMCard from './HomeUMKMCard';
import ExpandToggleButton from './ExpandToggleButton';
import { UMKM_LIST } from '@/data/umkm';

export default function UMKMListSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Ubah slice(0, 4) menjadi (0, 3) untuk default 3 item
  const items = isExpanded ? UMKM_LIST : UMKM_LIST.slice(0, 3);

  return (
    <section id="umkm-list" className="w-full py-12 px-4 text-center bg-muted">
      <h2 className="text-2xl font-bold mb-6">Mau tau daftar UMKM yang ada di sekitar sini?</h2>
      
      {/* Ubah grid-cols-4 menjadi grid-cols-3 dan max-w-4xl menjadi 7xl */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(umkm => (
          // 2. Ganti menjadi HomeUMKMCard
          <HomeUMKMCard 
            key={umkm.id} 
            item={umkm} 
          />
        ))}
      </div>
      
      {/* Ubah kondisi > 4 menjadi > 3 */}
      {UMKM_LIST.length > 3 && (
        <ExpandToggleButton 
          onClick={() => setIsExpanded(!isExpanded)} 
          isExpanded={isExpanded} 
        />
      )}
      
    </section>
  );
}

