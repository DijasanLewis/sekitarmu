"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; // Kita akan menggunakan Image untuk ikon

// --- DATA UNTUK KARTU DI HALAMAN UTAMA ---
// (Anda bisa pindahkan ini ke file data/ baru jika mau)

const section1Data = [
  { title: "Bubur ayam", href: "/listumkm?q=Bubur ayam" },
  { title: "Fotocopy", href: "/listumkm?q=Fotocopy" },
  { title: "Service Laptop", href: "/listumkm?q=Service Laptop" },
  { title: "Jahit Seragam", href: "/listumkm?q=Jahit Seragam" },
  { title: "Laundry", href: "/listumkm?q=Laundry" },
  { title: "Servis AC", href: "/listumkm?q=Servis AC" },
  { title: "Pijat", href: "/listumkm?q=Pijat" },
  { title: "Katering", href: "/listumkm?q=Katering" },
];

const section2Data = [
  { title: "Kuliner", href: "/listumkm?category=Kuliner", iconUrl: "https://via.placeholder.com/100/3B82F6/FFFFFF?text=ICON" },
  { title: "Jasa", href: "/listumkm?category=Jasa", iconUrl: "https://via.placeholder.com/100/F97316/FFFFFF?text=ICON" },
  { title: "Fashion", href: "/listumkm?category=Fashion", iconUrl: "https://via.placeholder.com/100/10B981/FFFFFF?text=ICON" },
  { title: "Komputer", href: "/listumkm?category=Komputer", iconUrl: "https://via.placeholder.com/100/6366F1/FFFFFF?text=ICON" },
  { title: "Kesehatan", href: "/listumkm?category=Kesehatan", iconUrl: "https://via.placeholder.com/100/EC4899/FFFFFF?text=ICON" },
  { title: "Otomotif", href: "/listumkm?category=Otomotif", iconUrl: "https://via.placeholder.com/100/8B5CF6/FFFFFF?text=ICON" },
];

const section3Data = [
  { title: "Warteg", href: "/listumkm?q=Warteg" },
  { title: "Barbershop", href: "/listumkm?q=Barbershop" },
  { title: "Taylor", href: "/listumkm?q=Taylor" },
  { title: "Warung", href: "/listumkm?q=Warung" },
  { title: "Toko Kelontong", href: "/listumkm?q=Toko Kelontong" },
  { title: "Rumah Makan Padang", href: "/listumkm?q=Rumah Makan Padang" },
];

// --- KOMPONEN KARTU & PANAH ---

// Komponen Panah Bawah (Sekarang fungsional)
function DownArrow({ onClick, isExpanded }: { onClick: () => void; isExpanded: boolean }) {
  return (
    <button onClick={onClick} className="w-full flex justify-center py-4 cursor-pointer group">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
           className={`w-8 h-8 text-gray-400 transition-transform group-hover:text-gray-600 ${isExpanded ? 'rotate-180' : ''}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  );
}

// Komponen Kartu Kategori (Sesuai gambar baru)
function CategoryCard({ href, title, iconUrl }: { href: string; title: string; iconUrl: string }) {
  return (
    <Link href={href} className="relative block rounded-lg bg-card p-4 text-left shadow-sm hover:bg-muted aspect-square overflow-hidden">
      {/* Konten Teks */}
      <div className="z-10">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      {/* Ikon di Kanan Bawah */}
      <div className="absolute -bottom-4 -right-4 h-24 w-24 z-0 opacity-80"> 
        <Image src={iconUrl} alt={title} fill style={{ objectFit: 'contain' }} />
      </div>
    </Link>
  );
}

// Komponen Kartu Simpel (Untuk bagian 1 & 3)
function SimpleCard({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href} className="block rounded-lg bg-secondary p-4 text-center text-lg font-semibold text-secondary-foreground shadow-sm hover:bg-muted aspect-square flex items-center justify-center">
      <span className="p-2">{title}</span>
    </Link>
  );
}


// --- KOMPONEN HALAMAN UTAMA ---

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  
  // State untuk "Show More"
  const [section1Expanded, setSection1Expanded] = useState(false);
  const [section2Expanded, setSection2Expanded] = useState(false);
  const [section3Expanded, setSection3Expanded] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/listumkm?q=${query}`);
    }
  };

  // Tentukan jumlah item yang ditampilkan
  const section1Items = section1Expanded ? section1Data : section1Data.slice(0, 4);
  const section2Items = section2Expanded ? section2Data : section2Data.slice(0, 4);
  const section3Items = section3Expanded ? section3Data : section3Data.slice(0, 4);

  return (
    <main className="w-full">
      {/* Bagian 1: Hero/Search */}
      <section className="w-full py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">Di SekitarMu jualan apa aja ya?</h1>
        <p className="text-muted-foreground mb-6">
          Yuk cari yang kamu butuhin siapa tau ada di sekitar sini.
        </p>
        <form 
          onSubmit={handleSearchSubmit} 
          className="max-w-xl mx-auto p-4 rounded-lg bg-card border-4 border-primary shadow-lg"
        >
          <div className="relative flex">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari Produk atau Toko..."
              className="flex-grow h-12 px-4 rounded-l-md border border-border bg-input focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-r-md bg-primary text-primary-foreground font-bold hover:bg-primary/90"
            >
              Cari
            </button>
          </div>
        </form>
      </section>

      {/* Bagian 2: Yuk dicek... */}
      <section className="w-full py-12 px-4 text-center bg-muted">
        <h2 className="text-2xl font-bold mb-6">Yuk dicek ada nggak yang kamu cari?</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {section1Items.map(item => (
            <SimpleCard key={item.href} title={item.title} href={item.href} />
          ))}
        </div>
        <DownArrow onClick={() => setSection1Expanded(!section1Expanded)} isExpanded={section1Expanded} />
      </section>

      {/* Bagian 3: Mau nyari usaha... (Kartu baru) */}
      <section className="w-full py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Mau nyari usaha terkait apa?</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {section2Items.map(item => (
            <CategoryCard 
              key={item.href} 
              title={item.title}
              href={item.href} 
              iconUrl={item.iconUrl}
            />
          ))}
        </div>
        <DownArrow onClick={() => setSection2Expanded(!section2Expanded)} isExpanded={section2Expanded} />
      </section>
      
      {/* Bagian 4: Link ke Daftar UMKM */}
      <section className="w-full py-12 px-4 text-center bg-muted">
        <h2 className="text-2xl font-bold mb-6">Mau tau daftar UMKM yang ada di sekitar sini?</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {section3Items.map(item => (
            <SimpleCard key={item.href} title={item.title} href={item.href} />
          ))}
        </div>
        <DownArrow onClick={() => setSection3Expanded(!section3Expanded)} isExpanded={section3Expanded} />
        <div className="mt-8">
          <Link href="/listumkm" className="text-lg font-semibold text-primary hover:underline">
            Lihat Semua Daftar UMKM &rarr;
          </Link>
        </div>
      </section>

      {/* Bagian 5: Footer CTA */}
      <section className="w-full py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <h2 className="text-4xl font-bold text-center md:text-left">
            Yuk bantu UMKM di Sekitar Mu
          </h2>
          <div className="h-48 rounded-lg bg-muted border border-border flex items-center justify-center">
            <p className="text-muted-foreground">(Konten/Gambar Tambahan)</p>
          </div>
        </div>
      </section>
    </main>
  );
}