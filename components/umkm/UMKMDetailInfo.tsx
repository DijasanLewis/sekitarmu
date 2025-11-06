/**
 * UMKMDetailInfo - Komponen untuk menampilkan informasi detail UMKM
 * 
 * Komponen ini menampilkan informasi lengkap tentang UMKM:
 * - Alamat lengkap
 * - Link ke Google Maps
 * - Informasi tambahan lainnya
 * 
 * Cara kerja:
 * 1. Menerima props umkm dengan tipe UMKM
 * 2. Menampilkan informasi dalam format card yang rapi
 * 3. Menyediakan link ke Google Maps untuk navigasi
 */

import type { UMKM } from '@/data/umkm';
import Link from 'next/link';

interface Props {
  umkm: UMKM;
}

export default function UMKMDetailInfo({ umkm }: Props) {
  return (
    <div className="bg-card rounded-lg border shadow-sm p-6 space-y-6">
      <h2 className="text-2xl font-bold">Informasi Toko</h2>
      
      {/* Alamat */}
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-muted-foreground mb-1">Alamat</h3>
            <p className="text-foreground">{umkm.address}</p>
          </div>
        </div>
        
        {/* Link Google Maps */}
        <Link
          href={umkm.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Buka di Google Maps
        </Link>
      </div>
      
      {/* Divider */}
      <div className="border-t border-border" />
      
      {/* Informasi tambahan */}
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-sm text-muted-foreground mb-1">Kategori</h3>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground">
            {umkm.category}
          </span>
        </div>
        
        {umkm.website && (
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground mb-1">Website</h3>
            <Link
              href={umkm.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm"
            >
              {umkm.website}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

