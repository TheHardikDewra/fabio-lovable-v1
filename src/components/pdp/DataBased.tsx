import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import happyWoman from "@/assets/happy-woman.jpg";

const STATS = [
  { value: 93, label: "woke up with less puffiness and swelling" },
  { value: 87, label: "reported a flatter, lighter belly within 3 weeks" },
  { value: 78, label: "stopped reaching for afternoon sugar fixes" },
  { value: 82, label: "fell asleep faster and slept deeper through the night" },
];

function CountUp({ to, duration = 1400 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{val}%</span>;
}

export function DataBased() {
  return (
    <section className="py-14 px-4 bg-gradient-to-b from-soft-pink/40 via-cream to-soft-pink-2/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="The Clinical Numbers Behind The Ritual"
          title={<>What Women Actually <span className="text-rose-deep">Experience.</span></>}
          description="Real numbers from a 12-week consumer study on our exact formula."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-5 mt-8">
          {STATS.map((s) => (
            <article
              key={s.value}
              className="relative rounded-2xl bg-white ring-2 ring-rose-deep/25 px-4 pt-4 pb-4 sm:px-6 sm:pt-6 sm:pb-5 shadow-[0_8px_24px_-16px_rgba(190,55,75,0.25)] flex flex-col"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="font-display text-[36px] sm:text-[52px] font-extrabold text-rose-deep leading-none tabular-nums">
                  <CountUp to={s.value} />
                </div>
                <div className="flex-shrink-0 w-8 h-8 sm:w-11 sm:h-11 rounded-full ring-2 ring-rose-deep/40 grid place-items-center text-rose-deep">
                  <ArrowUpRight className="w-4 h-4 sm:w-[22px] sm:h-[22px]" strokeWidth={2.4} />
                </div>
              </div>
              <p className="mt-2 sm:mt-3 text-[12.5px] sm:text-[16px] text-foreground/85 leading-snug font-medium">
                {s.label}
              </p>
            </article>
          ))}
        </div>

        <p className="text-center text-[11px] text-foreground/55 mt-10">
          Based on independent consumer perception studies on N=312 women, 12 weeks of daily use.
        </p>
      </div>
    </section>
  );
}
