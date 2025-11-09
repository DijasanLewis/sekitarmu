/**
 * HomeProductCard - Komponen kartu untuk menampilkan Produk di beranda
 * * PERBAIKAN: Mengubah layout header kartu.
 * * Kategori (span) sekarang berada di atas Nama Produk (h3).
 */

import type { Product, UMKM } from "@/data/umkm";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
  umkm?: UMKM; 
}

export default function HomeProductCard({ product, umkm }: Props) {
  const imageUrl = product.productImage && product.productImage.length > 0 
    ? product.productImage[0] 
    : "https://via.placeholder.com/300x200?text=No+Image";
  
  const href = umkm ? `/umkm/${umkm.id}` : '#';

  return (
    <Link
      href={href}
      className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full"
    >
      
      <div>
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
        
        {/* Konten Info */}
        {/* * === INI PERUBAHANNYA ===
          * Div 'flex' yang sebelumnya membungkus Kategori dan Nama Produk
          * telah dihapus. Sekarang Kategori dan Nama Produk
          * adalah elemen terpisah di dalam div 'space-y-3' ini.
          */}
        <div className="p-2 space-y-1 text-left">
          
          {/* 1. Kategori (sebagai badge di atas) */}
          <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground mb-2">
            {product.category}
          </span>

          {/* 2. Nama Produk (sekarang di bawah kategori) */}
          <h3 className="text-lg font-bold truncate">{product.productName}</h3>

          {/* Deskripsi Produk (Sembunyi di mobile, tampil di desktop) */}
          <p className="hidden md:block text-sm text-muted-foreground line-clamp-3 truncate">
            {product.description}
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-auto p-2 border-t border-border flex justify-between items-center bg-card">
        {/* Alamat UMKM */}
        {umkm?.address ? (
          <p className="text-xs text-muted-foreground truncate" title={umkm.address}>
            📍 {umkm.address}
          </p>
        ) : (
          <p className="text-xs text-muted-foreground">Info Toko</p>
        )}
        
        {/* Tombol Lihat */}
        <span
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Lihat
        </span>
      </div>
    </Link>
  );
}