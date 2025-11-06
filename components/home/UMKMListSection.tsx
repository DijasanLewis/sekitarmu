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
import SimpleCard from './SimpleCard';
import ExpandToggleButton from './ExpandToggleButton';
import { UMKM_LIST } from '@/data/umkm';

export default function UMKMListSection() {
  // State untuk mengontrol apakah section sudah di-expand atau belum
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Menentukan item yang akan ditampilkan: semua UMKM jika expanded, 4 UMKM pertama jika belum
  const items = isExpanded ? UMKM_LIST : UMKM_LIST.slice(0, 4);

  return (
    <section id="umkm-list" className="w-full py-12 px-4 text-center bg-muted">
      <h2 className="text-2xl font-bold mb-6">Mau tau daftar UMKM yang ada di sekitar sini?</h2>
      
      {/* Grid untuk menampilkan kartu nama UMKM */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(umkm => (
          <SimpleCard 
            key={umkm.id} 
            title={umkm.name} 
            href={`/umkm/${umkm.id}`} 
          />
        ))}
      </div>
      
      {/* Tombol untuk expand/collapse section - hanya ditampilkan jika ada lebih dari 4 UMKM */}
      {UMKM_LIST.length > 4 && (
        <ExpandToggleButton 
          onClick={() => setIsExpanded(!isExpanded)} 
          isExpanded={isExpanded} 
        />
      )}
      
    </section>
  );
}

