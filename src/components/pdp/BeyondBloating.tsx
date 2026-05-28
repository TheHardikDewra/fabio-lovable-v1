import { useEffect, useRef, useState } from "react";
import { Moon, Zap, Brain, Sparkles, HeartPulse, Smile, Leaf, Flame, Droplets, Wind, Sun, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const BENEFITS = [
  { icon: Moon, stat: "82%", title: "Deeper Sleep", desc: "Fall asleep faster, stop waking at 3 AM. Cortisol finally calms down.", tint: "from-indigo-100 to-violet-50", iconBg: "bg-indigo-500" },
  { icon: Zap, stat: "76%", title: "All-Day Energy", desc: "No more 3pm crash. Your mitochondria get the nutrients they were missing.", tint: "from-amber-100 to-yellow-50", iconBg: "bg-amber-500" },
  { icon: Brain, stat: "71%", title: "Sharper Focus", desc: "The gut-brain axis clears. Less brain fog, more clarity within 2 weeks.", tint: "from-sky-100 to-cyan-50", iconBg: "bg-sky-500" },
  { icon: Smile, stat: "78%", title: "Glowing Skin", desc: "Reduced inflammation = clearer complexion, fewer breakouts, natural radiance.", tint: "from-rose-100 to-pink-50", iconBg: "bg-rose-500" },
  { icon: HeartPulse, stat: "84%", title: "Calmer Mood", desc: "90% of serotonin lives in the gut. Heal it, and the anxiety quiets too.", tint: "from-emerald-100 to-green-50", iconBg: "bg-emerald-500" },
  { icon: Sparkles, stat: "69%", title: "Fewer Cravings", desc: "Gymnema silences sugar urges. Stop snacking on autopilot.", tint: "from-fuchsia-100 to-pink-50", iconBg: "bg-fuchsia-500" },
  { icon: Leaf, stat: "73%", title: "Less Bloating", desc: "Belly flattens within days as biofilm dissolves and gas escapes.", tint: "from-lime-100 to-green-50", iconBg: "bg-lime-600" },
  { icon: Flame, stat: "68%", title: "Faster Metabolism", desc: "AMPK reactivates so your body burns fuel instead of storing it.", tint: "from-orange-100 to-amber-50", iconBg: "bg-orange-500" },
  { icon: Droplets, stat: "81%", title: "Less Water Retention", desc: "Puffiness fades from face, fingers, and ankles in the first week.", tint: "from-cyan-100 to-sky-50", iconBg: "bg-cyan-500" },
  { icon: Wind, stat: "74%", title: "Better Digestion", desc: "No more heaviness after meals. Food moves through smoothly.", tint: "from-teal-100 to-emerald-50", iconBg: "bg-teal-500" },
  { icon: Sun, stat: "79%", title: "Morning Lightness", desc: "Wake up flat, not bloated. Stomach finally feels empty again.", tint: "from-yellow-100 to-amber-50", iconBg: "bg-yellow-500" },
  { icon: Heart, stat: "86%", title: "More Confidence", desc: "Clothes fit better. Mirror feels kinder. You finally recognize yourself.", tint: "from-pink-100 to-rose-50", iconBg: "bg-pink-500" },
];

export function BeyondBloating() {
  const [i, setI] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx !== i) setI(idx);
  };

  const goTo = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const handler = () => onScroll();
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-14 px-4">
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.32em] text-rose-deep">
            <span className="inline-block w-8 h-px bg-rose-deep/50" />
            <span>Beyond Bloating</span>
            <span className="inline-block w-8 h-px bg-rose-deep/50" />
          </div>
        </div>
        <h2 className="text-center font-display font-extrabold text-foreground text-[26px] sm:text-[34px] leading-[1.05] tracking-tight">
          What Women Didn't Expect.
          <br />
          <span className="text-rose-deep">But Now Can't Live Without.</span>
        </h2>
        <p className="text-center text-foreground/65 text-[13px] mt-3 max-w-md mx-auto">
          When the gut resets, everything else follows. Here's what 3M+ women reported beyond a flatter belly.
        </p>

        {/* Slider */}
        <div className="mt-8 relative">
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4"
          >
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="snap-center flex-shrink-0 w-full px-1">
                  <div className={`group relative rounded-2xl bg-gradient-to-br ${b.tint} ring-1 ring-foreground/8 p-6 overflow-hidden shadow-[0_18px_40px_-20px_rgba(0,0,0,0.18)]`}>
                    <div className="flex items-start justify-between">
                      <div className={`w-14 h-14 rounded-full ${b.iconBg} text-white flex items-center justify-center shadow-[0_8px_20px_-6px_rgba(0,0,0,0.35)] ring-2 ring-white`}>
                        <Icon className="w-6 h-6" strokeWidth={2.4} />
                      </div>
                      <div className="text-right">
                        <div className="font-display text-[36px] font-black text-foreground leading-none tabular-nums">{b.stat}</div>
                        <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-foreground/55 mt-0.5">of women</div>
                      </div>
                    </div>
                    <h3 className="mt-4 font-display text-[20px] font-extrabold text-foreground leading-tight">{b.title}</h3>
                    <p className="mt-2 text-[13.5px] text-foreground/70 leading-relaxed">{b.desc}</p>
                    <div className="mt-4 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                      <div className={`h-full ${b.iconBg} rounded-full`} style={{ width: b.stat }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => goTo(Math.max(0, i - 1))}
            disabled={i === 0}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md ring-1 ring-foreground/10 flex items-center justify-center disabled:opacity-30 hover:scale-105 transition"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            type="button"
            onClick={() => goTo(Math.min(BENEFITS.length - 1, i + 1))}
            disabled={i === BENEFITS.length - 1}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md ring-1 ring-foreground/10 flex items-center justify-center disabled:opacity-30 hover:scale-105 transition"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Pagination */}
        <div className="mt-5 flex flex-col items-center gap-3">
          <div className="text-[12px] font-bold text-foreground/70 tabular-nums">
            <span className="text-rose-deep">{i + 1}</span> / {BENEFITS.length}
          </div>
          <div className="flex gap-1.5">
            {BENEFITS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-rose-deep" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"}`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-[11px] text-foreground/50 mt-6">
          Based on consumer self-reported outcomes, N=2,847 women, 90 days of daily use.
        </p>
      </div>
    </section>
  );
}
