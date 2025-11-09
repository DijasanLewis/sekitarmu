/**
 * HomeProductCard - Komponen kartu untuk menampilkan Produk di beranda
 * * Disesuaikan dengan desain baru:
 * - Gambar di atas
 * - Judul (Nama Produk) di kiri, Kategori di kanan
 * - Deskripsi (Deskripsi Produk)
 * - Footer dengan Alamat (dari UMKM) di kiri dan Tombol "Lihat" di kanan
 */

// Kita perlu tipe Product dan UMKM karena kartu ini menampilkan
// info produk, tapi link dan alamatnya dari UMKM
import type { Product, UMKM } from "@/data/umkm";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
  umkm?: UMKM; // UMKM yang menjual produk ini (bisa jadi undefined)
}

export default function HomeProductCard({ product, umkm }: Props) {
  // Mengambil gambar pertama dari array productImage, atau placeholder
  const imageUrl = product.productImage && product.productImage.length > 0 
    ? product.productImage[0] 
    : "https://via.placeholder.com/300x200?text=No+Image";
  
  // Tentukan link. Jika UMKM tidak ditemukan, link kembali ke beranda
  const href = umkm ? `/umkm/${umkm.id}` : '#';

  return (
    // Menggunakan flex flex-col agar footer bisa menempel di bawah
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full">
      {/* Gambar Produk */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={product.productName}
          fill
          style={{ objectFit: "cover" }}
          className="bg-muted"
        />
      </div>
      
      {/* Konten Info (flex-grow agar footer menempel di bawah) */}
      <div className="p-4 space-y-3 flex-grow">
        {/* Header: Nama Produk & Kategori */}
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-lg font-bold">{product.productName}</h3>
          <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-secondary text-secondary-foreground whitespace-nowrap">
            {product.category}
          </span>
        </div>

        {/* Deskripsi Produk */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          {product.description}
        </p>
      </div>
      
      {/* Footer: Alamat & Tombol "Lihat" */}
      <div className="p-4 border-t border-border flex justify-between items-center bg-card">
        {/* Alamat UMKM */}
        {umkm?.address ? (
          <p className="text-xs text-muted-foreground truncate" title={umkm.address}>
            📍 {umkm.address}
          </p>
        ) : (
          <p className="text-xs text-muted-foreground">Info Toko</p>
        )}
        
        {/* Tombol Lihat (Link ke Halaman UMKM) */}
        <Link
          href={href}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Lihat
        </Link>
      </div>
    </div>
  );
}