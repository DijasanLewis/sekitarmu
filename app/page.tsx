"use client"; 
import { useMemo, useState } from "react";
import { searchUMKM, type Category } from "@/data/umkm";
import UMKMCard from "@/components/umkm/UMKMCard";
import CategoryFilter from "@/components/umkm/CategoryFilter";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "Semua">("Semua");

  const results = useMemo(() => searchUMKM(query, category), [query, category]);

  return (
    <main className="p-4 sm:p-8 md:p-12">
      <div className="space-y-10">
        {/* GANTI className di bawah. 
          Hapus: bg-gradient-to-br from-primary/10 via-accent/10 to-transparent
          Tambah: bg-card
        */}
        <section className="relative overflow-hidden rounded-xl bg-card p-8 sm:p-12 ring-1 ring-border">
          <div className="mx-auto max-w-3xl text-center">
            {/* Teks ini sekarang akan berwarna oranye karena text-primary */}
            <p className="mb-2 text-xs font-semibold tracking-wider text-primary">Studi Kasus: Web in Action</p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Direktori UMKM Lingkunganmu</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              Temukan warung kopi, bakso legendaris, jasa barber, hingga laundry terbaik di sekitarmu. Cari, jelajahi, dan dukung UMKM lokal.
            </p>
            <div className="mx-auto mt-6 flex flex-col items-stretch gap-3 sm:max-w-xl sm:flex-row">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari berdasarkan nama UMKM..."
                aria-label="Pencarian UMKM"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              {/* Tombol ini sekarang akan berwarna oranye karena bg-primary */}
              <button
                onClick={() => setQuery(query.trim())}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Cari
              </button>
            </div>
            <div className="mx-auto mt-4 sm:max-w-xl">
              <CategoryFilter value={category} onChange={setCategory} />
            </div>
          </div>
        </section>

        {/* Bagian sisa dari halaman... */}
        <section id="direktori" className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-bold">Semua UMKM</h2>
            <p className="text-sm text-muted-foreground">{results.length} hasil</p>
          </div>
          {results.length === 0 ? (
            <div className="rounded-lg border bg-card p-10 text-center text-sm text-muted-foreground">Tidak ada hasil untuk pencarianmu.</div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {results.map((item) => (
                <UMKMCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </section>

        <section className="rounded-xl bg-secondary p-6 ring-1 ring-border">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-lg font-semibold">Ayo dukung ekonomi sekitar!</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Prototipe ini berfokus pada front-end. Kamu bisa menambahkan data UMKM lingkunganmu agar direktori ini lebih lengkap.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}