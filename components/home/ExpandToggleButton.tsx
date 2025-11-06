/**
 * ExpandToggleButton - Komponen tombol untuk expand/collapse section
 * 
 * Komponen ini menampilkan tombol panah yang dapat diklik untuk
 * memperluas atau menutup section yang berisi daftar item.
 * 
 * Cara kerja:
 * 1. Menampilkan ikon panah ke bawah secara default
 * 2. Ketika diklik, memanggil fungsi onClick yang diberikan
 * 3. Ketika isExpanded = true, panah berputar 180 derajat (menjadi panah ke atas)
 * 4. Hover effect mengubah warna panah
 */

interface ExpandToggleButtonProps {
  onClick: () => void;
  isExpanded: boolean;
}

export default function ExpandToggleButton({ onClick, isExpanded }: ExpandToggleButtonProps) {
  return (
    <button 
      onClick={onClick} 
      className="w-full flex justify-center py-4 cursor-pointer group"
      aria-label={isExpanded ? "Tutup" : "Buka"}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2} 
        stroke="currentColor" 
        className={`w-8 h-8 text-gray-400 transition-transform group-hover:text-gray-600 ${
          isExpanded ? 'rotate-180' : ''
        }`}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="m19.5 8.25-7.5 7.5-7.5-7.5" 
        />
      </svg>
    </button>
  );
}

