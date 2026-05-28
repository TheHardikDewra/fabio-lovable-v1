import { Check, X, Sparkles } from "lucide-react";

import bottleImg from "@/assets/bottle-single.png";

type Row = {
  feature: string;
  ours: string;
  others: string;
  highlight?: boolean;
};

const ROWS: Row[] = [
  { feature: "Clears Gut Biofilm", ours: "Yes — the only formula that does", others: "Never addressed", highlight: true },
  { feature: "Clinically-Dosed Bromelain", ours: "350mg per serving", others: "Not included" },
  { feature: "BioPerine® Absorption Boost", ours: "20× nutrient uptake", others: "Wasted on bad gut lining" },
  { feature: "Cortisol & Cravings Balance", ours: "KSM-66® + Gymnema", others: "1 ingredient at best" },
  { feature: "Results Timeline", ours: "Visible in 5–7 days", others: "Weeks of nothing" },
  { feature: "Capsules per Day", ours: "Just 2", others: "4–6 pills" },
  { feature: "3rd-Party Tested", ours: "Every batch", others: "Rarely disclosed" },
  { feature: "Money-Back Guarantee", ours: "60 days, no questions", others: "14–30 days, conditions" },
];

const COMPETITORS = [
  "Ashwagandha brands",
  "Premium probiotics",
  "Apple cider vinegar",
  "Greens powders",
  "Fiber blends",
];

export function VersusComparison() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-soft-pink/35 to-cream py-14 px-4">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, rgba(229,79,109,0.45), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, rgba(252,211,77,0.45), transparent 60%)" }}
      />


      <div className="relative max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.32em] text-rose-deep">
            <span className="inline-block w-8 h-px bg-rose-deep/50" />
            <span>The Comparison</span>
            <span className="inline-block w-8 h-px bg-rose-deep/50" />
          </div>
        </div>
        <h2 className="text-center font-display font-extrabold text-foreground text-[28px] sm:text-[36px] leading-[1.05] tracking-tight">
          Why Nothing Else
          <br />
          <span className="text-rose-deep">Has Ever Worked.</span>
        </h2>
        <p className="text-center text-foreground/65 text-[13px] mt-3 max-w-md mx-auto">
          They treat symptoms. We clear the biofilm. See the difference, side by side.
        </p>

        {/* Competitor chips */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-5">
          {COMPETITORS.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1 rounded-full bg-foreground/5 border border-foreground/10 px-2.5 py-1 text-[10.5px] font-bold text-foreground/55 line-through decoration-rose-deep/60"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Comparison stage */}
        <div className="mt-8 rounded-2xl overflow-hidden ring-1 ring-rose-deep/15 bg-white shadow-[0_30px_60px_-30px_rgba(190,55,75,0.35)]">
          {/* Header row */}
          <div className="grid grid-cols-[1.1fr_1fr_1.2fr] sm:grid-cols-[1.4fr_1fr_1.2fr] items-stretch">
            {/* Feature column header */}
            <div className="bg-foreground/[0.03] px-3 sm:px-5 py-4 flex items-center">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-foreground/55">
                Feature
              </span>
            </div>

            {/* Others header */}
            <div className="bg-foreground/[0.04] px-2 sm:px-4 py-4 text-center border-l border-foreground/10">
              <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-foreground/50">
                Others
              </div>
              <div className="mt-1 font-display text-[13px] sm:text-[15px] font-extrabold text-foreground/60">
                Generic Supplements
              </div>
            </div>

            {/* Ours header — premium gradient */}
            <div className="relative px-2 sm:px-4 py-4 text-center bg-gradient-to-br from-rose-deep via-[#a8364a] to-rose-deep text-white overflow-hidden">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/15 blur-md animate-shimmer-loop" />
              <span className="relative inline-flex items-center gap-1 text-[9.5px] font-extrabold uppercase tracking-[0.18em] text-amber-200">
                <Sparkles className="w-3 h-3" /> The Ritual
              </span>
              <div className="relative mt-1 flex items-center justify-center gap-1.5">
                <img src={bottleImg} alt="" className="h-8 w-auto drop-shadow-md" />
                <span className="font-display text-[13px] sm:text-[15px] font-extrabold">
                  Nuora
                </span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1.1fr_1fr_1.2fr] sm:grid-cols-[1.4fr_1fr_1.2fr] items-stretch border-t border-foreground/8 ${
                row.highlight ? "bg-gradient-to-r from-soft-pink/40 via-amber-50/40 to-soft-pink/40" : ""
              }`}
            >
              {/* Feature */}
              <div className="px-3 sm:px-5 py-3.5 flex items-center">
                <span className="text-[12px] sm:text-[13.5px] font-extrabold text-foreground leading-tight">
                  {row.feature}
                  {row.highlight && (
                    <span className="ml-1.5 inline-block align-middle rounded-full bg-rose-deep text-white text-[8.5px] font-extrabold uppercase tracking-wider px-1.5 py-0.5">
                      Unique
                    </span>
                  )}
                </span>
              </div>

              {/* Others */}
              <div className="px-2 sm:px-4 py-3.5 border-l border-foreground/8 flex flex-col items-center justify-center text-center gap-1">
                <span className="w-6 h-6 rounded-full bg-foreground/8 flex items-center justify-center flex-shrink-0">
                  <X className="w-3.5 h-3.5 text-foreground/45" strokeWidth={3} />
                </span>
                <span className="text-[10.5px] sm:text-[11.5px] text-foreground/55 leading-tight">
                  {row.others}
                </span>
              </div>

              {/* Ours */}
              <div className="px-2 sm:px-4 py-3.5 border-l border-rose-deep/10 bg-gradient-to-b from-soft-pink/20 to-transparent flex flex-col items-center justify-center text-center gap-1">
                <span className="w-6 h-6 rounded-full bg-rose-deep flex items-center justify-center flex-shrink-0 shadow-[0_4px_10px_-2px_rgba(190,55,75,0.5)]">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3.5} />
                </span>
                <span className="text-[10.5px] sm:text-[11.5px] font-bold text-foreground leading-tight">
                  {row.ours}
                </span>
              </div>
            </div>
          ))}

        </div>


        {/* Bottom callout */}
        <div className="mt-6 max-w-2xl mx-auto rounded-xl border border-rose-deep/25 bg-white px-4 py-3.5 flex items-start gap-3 shadow-[0_10px_24px_-12px_rgba(190,55,75,0.35)]">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-deep to-[#a8364a] text-white flex items-center justify-center flex-shrink-0 shadow-md ring-2 ring-amber-300/70">
            <Sparkles className="w-4.5 h-4.5" strokeWidth={2.4} />
          </div>
          <p className="text-[13px] text-foreground/85 leading-relaxed">
            <strong className="text-foreground font-extrabold">That's why nothing else worked.</strong>{" "}
            Without clearing the biofilm first, every other supplement gets blocked at the gut wall — wasted before it reaches your bloodstream.
          </p>
        </div>
      </div>
    </section>
  );
}
