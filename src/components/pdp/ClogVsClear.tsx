import { Check, X } from "lucide-react";
import bodyImg from "@/assets/bloated-vs-flat.jpg";
import { SectionHeader } from "./SectionHeader";

const PAIRS: { before: string; after: string }[] = [
  { before: "Bloating", after: "Flat Belly" },
  { before: "Sluggish Gut", after: "Smooth Digestion" },
  { before: "Water Retention", after: "Drained & Light" },
  { before: "Brain Fog", after: "Clear Focus" },
  { before: "3 PM Crash", after: "All-Day Energy" },
  { before: "Sugar Cravings", after: "Calm Appetite" },
];

export function ClogVsClear() {
  return (
    <section className="bg-background">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <SectionHeader
          eyebrow="Coated vs. Cleared"
          title={<>When biofilm builds up,<br /><span className="text-rose-deep">your whole body feels it.</span></>}
          description={<>You feel the layer in your belly, your energy, your skin. See the difference between a gut stuck in buildup — and one finally able to reset.</>}
        />

        {/* Comparison image */}
        <div className="relative rounded-2xl overflow-hidden ring-1 ring-rose-deep/10 shadow-[0_20px_60px_-30px_rgba(190,55,75,0.45)] bg-gradient-to-br from-soft-pink/40 via-cream to-soft-pink-2/30">
          <img
            src={bodyImg}
            alt="Bloated gut coated in biofilm versus clear, healthy gut after Nuora"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full h-auto block"
          />
          {/* Labels overlay */}
          <div className="absolute inset-x-0 bottom-3 flex justify-between px-3 sm:px-6 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7a1f28] text-white px-3 py-1 text-[11px] sm:text-[12.5px] font-extrabold uppercase tracking-wider shadow-lg ring-2 ring-white/40">
              <X className="w-3 h-3" strokeWidth={3.5} />
              Coated
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-deep text-white px-3 py-1 text-[11px] sm:text-[12.5px] font-extrabold uppercase tracking-wider shadow-lg ring-2 ring-white/40">
              <Check className="w-3 h-3" strokeWidth={3.5} />
              Cleared
            </span>
          </div>
        </div>

        {/* Before → After pairs */}
        <ul className="mt-6 space-y-2.5">
          {PAIRS.map(({ before, after }) => (
            <li key={before} className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
              {/* Before chip */}
              <div className="inline-flex items-center justify-self-end gap-1.5 rounded-full bg-white border border-[#7a1f28]/30 px-3 py-1.5 text-[12.5px] sm:text-[14px] font-bold text-foreground/80 w-full max-w-[180px] sm:max-w-[220px]">
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#7a1f28] text-white flex items-center justify-center">
                  <X className="w-2.5 h-2.5" strokeWidth={4} />
                </span>
                <span className="truncate">{before}</span>
              </div>

              {/* Arrow */}
              <svg width="36" height="22" viewBox="0 0 36 22" fill="none" className="text-rose-deep flex-shrink-0">
                <path d="M2 14 C 10 2, 22 2, 32 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                <path d="M27 8 L 33 12 L 28 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>

              {/* After chip */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-soft-pink/50 border border-rose-deep/30 px-3 py-1.5 text-[12.5px] sm:text-[14px] font-extrabold text-foreground w-full max-w-[180px] sm:max-w-[220px]">
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-rose-deep text-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5" strokeWidth={4} />
                </span>
                <span className="truncate">{after}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
