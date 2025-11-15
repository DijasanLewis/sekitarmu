/**
 * UMKMProductList - Komponen untuk menampilkan daftar produk UMKM
 * 
 * Komponen ini menampilkan semua produk yang dijual oleh UMKM dalam format grid.
 * Setiap produk menampilkan:
 * - Nama produk
 * - Gambar produk
 * - Kategori produk
 * - Deskripsi produk
 * - Harga produk
 * 
 * Cara kerja:
 * 1. Menerima props products dengan tipe Product[]
 * 2. Menampilkan produk dalam grid layout yang responsive
 * 3. Setiap produk ditampilkan dalam card yang menarik
 */

import type { Product } from '@/data/umkm';
import Image from 'next/image';

interface Props {
  products: Product[];
}

export default function UMKMProductList({ products }: Props) {
  // Jika tidak ada produk, tampilkan pesan
  if (products.length === 0) {
    return (
      <div className="bg-card rounded-lg border shadow-sm p-12 text-center">
        <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <h3 className="text-xl font-semibold mb-2">Belum Ada Produk</h3>
        <p className="text-muted-foreground">UMKM ini belum menambahkan produk.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Daftar Produk Toko</h2>
        <p className="text-muted-foreground">
          {products.length} {products.length === 1 ? 'produk tersedia' : 'produk tersedia'}
        </p>
      </div>
      
      {/* Grid produk */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          // Mengambil gambar pertama dari array productImage, atau placeholder jika tidak ada
          const productImage = product.productImage && product.productImage.length > 0
            ? product.productImage[0]
            : "https://via.placeholder.com/400x300?text=No+Image";

          return (
            <div
              key={product.productId}
              className="bg-card rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Gambar produk */}
              <div className="relative w-full h-48 bg-muted">
                <Image
                  src={productImage}
                  alt={product.productName}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              {/* Informasi produk */}
              <div className="p-6 space-y-4">
                {/* Badge kategori */}
                <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground">
                  {product.category}
                </span>
                
                {/* Nama produk */}
                <h3 className="text-xl font-bold">{product.productName}</h3>
                
                {/* Deskripsi produk */}
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {product.description}
                </p>
                
                {/* Harga produk */}
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-1">Harga</p>
                  <p className="text-2xl font-bold text-primary">
                    Rp {product.price.toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

