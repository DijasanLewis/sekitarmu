/**
 * UMKMCard - Komponen kartu untuk menampilkan informasi UMKM
 * 
 * Komponen ini menampilkan kartu UMKM dengan:
 * - Gambar UMKM (mengambil gambar pertama dari array imageUrls)
 * - Kategori UMKM
 * - Nama UMKM (diambil dari UMKM_LIST di data/umkm.ts)
 * - Deskripsi UMKM
 * - Informasi kontak (telepon dan alamat) jika tersedia
 * 
 * Cara kerja:
 * 1. Menerima props item dengan tipe UMKM dari UMKM_LIST
 * 2. Menampilkan gambar pertama dari array imageUrls
 * 3. Menampilkan nama UMKM, kategori, dan deskripsi
 * 4. Menampilkan informasi kontak tambahan jika tersedia
 */

import type { UMKM } from "@/data/umkm";
import Image from "next/image"; 

interface Props {
  item: UMKM;
}

export default function UMKMCard({ item }: Props) {
  // Mengambil gambar pertama dari array imageUrls, atau placeholder jika tidak ada
  const imageUrl = item.imageUrls && item.imageUrls.length > 0 
    ? item.imageUrls[0] 
    : "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      {/* Gambar UMKM */}
      <div className="relative w-full h-40">
        <Image
          src={imageUrl}
          alt={item.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      
      {/* Informasi UMKM */}
      <div className="p-4 space-y-2">
        {/* Badge kategori */}
        <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-secondary text-secondary-foreground">
          {item.category}
        </span>
        
        {/* Nama UMKM */}
        <h3 className="text-lg font-bold">{item.name}</h3>
        
        {/* Deskripsi UMKM */}
        <p className="text-sm text-muted-foreground">{item.description}</p>
        
        {/* Informasi tambahan jika tersedia */}
        {item.phone && (
          <p className="text-xs text-muted-foreground">📞 {item.phone}</p>
        )}
        {item.address && (
          <p className="text-xs text-muted-foreground">📍 {item.address}</p>
        )}
      </div>
    </div>
  );
}