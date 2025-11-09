/**
 * HomeUMKMCard - Komponen kartu untuk menampilkan UMKM di beranda
 * * Versi ini diubah agar menyerupai UMKMDetailHeader:
 * - Gambar sebagai background penuh dengan overlay gradient
 * - Konten teks (Kategori, Judul, Deskripsi) di atas overlay
 * - Tombol "Lihat" di bagian bawah
 */

import type { UMKM } from "@/data/umkm";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: UMKM;
}

export default function HomeUMKMCard({ item }: Props) {
  // Mengambil gambar pertama dari array imageUrls, atau placeholder
  const imageUrl = item.imageUrls && item.imageUrls.length > 0 
    ? item.imageUrls[0] 
    : "https://via.placeholder.com/300x200?text=No+Image";

  return (
    // 1. Kontainer kartu: relative, tinggi tetap (h-72), rounded, dan overflow-hidden
    // 'group' digunakan untuk efek hover pada gambar
    <Link
      href={`/umkm/${item.id}`}
      className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg group border border-border"
    >
      
      {/* 2. Gambar Background (Mirip di header) */}
      <Image
        src={imageUrl}
        alt={item.name}
        fill
        style={{ objectFit: "cover" }}
        className="bg-muted brightness-75 transition-transform duration-300 group-hover:scale-105"
      />
      
      {/* 3. Gradient Overlay (Mirip di header) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* 4. Konten Teks (didorong ke bawah menggunakan justify-end) */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
        
        {/* 5. Badge Kategori (Styling dari header) */}
        <span className="inline-block rounded-full px-2 md:px-3 py-1 text-[8px] md:text-xs font-semibold bg-primary text-primary-foreground mb-2 self-start">
          {item.category}
        </span>
        
        {/* 6. Nama UMKM (Styling dari header, dikecilkan) */}
        <h3 className="text-sm md:text-xl font-bold text-white drop-shadow-md truncate">
          {item.name}
        </h3>
        
        {/* 7. Deskripsi (Styling dari header, dikecilkan + line-clamp) */}
        <p className="hidden md:block text-sm text-white/90 line-clamp-2 mt-1 drop-shadow-md truncate">
          {item.description}
        </p>
        
        {/* 8. Tombol "Lihat" (Sesuai permintaan Anda) */}
        <span
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
        >
          Lihat
        </span>
      </div>
    </Link>
  );
}