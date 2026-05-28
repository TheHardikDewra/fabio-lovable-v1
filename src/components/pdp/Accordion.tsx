import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ items }: { items: { q: string; a: React.ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-rose-deep/15 border-y border-rose-deep/15">
      {items.map((it, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
          >
            <span className="font-semibold text-foreground text-[16px] md:text-[18px] leading-snug">{it.q}</span>
            <ChevronDown className={`w-6 h-6 text-rose-deep flex-shrink-0 transition ${open === i ? "rotate-180" : ""}`} strokeWidth={2.4} />
          </button>
          {open === i && <div className="pb-6 text-foreground/75 text-[15px] md:text-[16px] leading-relaxed space-y-2.5">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}

