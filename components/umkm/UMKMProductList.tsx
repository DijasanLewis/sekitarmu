/**
 * UMKMProductList - Komponen untuk menampilkan daftar produk UMKM
 * 
 * Komponen ini menampilkan semua produk yang dijual oleh UMKM dalam format grid.
 * Setiap produk menampilkan:
 * - Gambar produk
 * - Nama produk
 * - Harga
 * - Deskripsi
 * - Stok
 * - Rating (jika tersedia)
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
        <h2 className="text-2xl font-bold mb-2">Produk yang Dijual</h2>
        <p className="text-muted-foreground">
          {products.length} {products.length === 1 ? 'produk tersedia' : 'produk tersedia'}
        </p>
      </div>
      
      {/* Grid produk */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                {/* Header produk */}
                <div>
                  {/* Badge kategori */}
                  <span className="inline-block rounded-full px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground mb-2">
                    {product.category}
                  </span>
                  
                  {/* Nama produk */}
                  <h3 className="text-xl font-bold mb-2">{product.productName}</h3>
                  
                  {/* Deskripsi */}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </div>
                
                {/* Divider */}
                <div className="border-t border-border" />
                
                {/* Informasi harga dan stok */}
                <div className="flex items-center justify-between">
                  {/* Harga */}
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-xs text-muted-foreground">Harga</p>
                      <p className="text-lg font-bold text-foreground">
                        Rp {product.price.toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>
                  
                  {/* Stok */}
                  <div>
                    <p className="text-xs text-muted-foreground">Stok</p>
                    <p className={`text-sm font-semibold ${
                      product.stock > 10 ? 'text-green-600' : 
                      product.stock > 0 ? 'text-yellow-600' : 
                      'text-red-600'
                    }`}>
                      {product.stock > 999 ? 'Tersedia' : product.stock} {product.stock <= 999 && 'unit'}
                    </p>
                  </div>
                </div>
                
                {/* Rating (jika tersedia) */}
                {product.rating !== undefined && (
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
                    <span className="text-xs text-muted-foreground">(rating)</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

