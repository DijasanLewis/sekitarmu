/**
 * SupportUMKMSection - Komponen call-to-action untuk mendukung UMKM
 * 
 * Komponen ini menampilkan section di bagian bawah halaman yang mengajak
 * pengguna untuk membantu UMKM di sekitar mereka.
 * 
 * Cara kerja:
 * - Menampilkan pesan ajakan dan placeholder untuk konten/gambar tambahan
 * - Layout responsive dengan grid 2 kolom di desktop, 1 kolom di mobile
 */

export default function SupportUMKMSection() {
  return (
    <section className="w-full py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Judul ajakan */}
        <h2 className="text-4xl font-bold text-center md:text-left">
          Yuk bantu UMKM di Sekitar Mu
        </h2>
        
        {/* Placeholder untuk konten/gambar tambahan */}
        <div className="h-48 rounded-lg bg-muted border border-border flex items-center justify-center">
          <p className="text-muted-foreground">(Konten/Gambar Tambahan)</p>
        </div>
      </div>
    </section>
  );
}

