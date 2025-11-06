/**
 * UMKMContactSection - Komponen untuk menampilkan informasi kontak UMKM
 * 
 * Komponen ini menampilkan berbagai cara untuk menghubungi UMKM:
 * - Nomor telepon
 * - Email (jika tersedia)
 * - Media sosial (jika tersedia)
 * 
 * Cara kerja:
 * 1. Menerima props umkm dengan tipe UMKM
 * 2. Menampilkan informasi kontak dalam format card
 * 3. Menyediakan link yang dapat diklik untuk menghubungi UMKM
 */

import type { UMKM } from '@/data/umkm';
import Link from 'next/link';

interface Props {
  umkm: UMKM;
}

export default function UMKMContactSection({ umkm }: Props) {
  return (
    <div className="bg-card rounded-lg border shadow-sm p-6 space-y-4">
      <h2 className="text-2xl font-bold">Kontak</h2>
      
      {/* Nomor telepon */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-muted-foreground mb-1">Telepon</h3>
            <Link
              href={`tel:${umkm.phone}`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {umkm.phone}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Email (jika tersedia) */}
      {umkm.email && (
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-muted-foreground mb-1">Email</h3>
              <Link
                href={`mailto:${umkm.email}`}
                className="text-foreground hover:text-primary transition-colors"
              >
                {umkm.email}
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Media sosial (jika tersedia) */}
      {umkm.socialMediaLinks && umkm.socialMediaLinks.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">Media Sosial</h3>
              <div className="flex flex-wrap gap-2">
                {umkm.socialMediaLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm transition-colors"
                  >
                    <span>Link {index + 1}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

