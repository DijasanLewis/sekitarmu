import type { UMKM } from "@/data/umkm";
import Image from "next/image"; 

interface Props {
  item: UMKM;
}

export default function UMKMCard({ item }: Props) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="relative w-full h-40">
        <Image
          src={item.image}
          alt={item.name}
          fill // Ganti layout="fill"
          style={{ objectFit: "cover" }} // Ganti objectFit="cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-secondary text-secondary-foreground">
          {item.category}
        </span>
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
    </div>
  );
}