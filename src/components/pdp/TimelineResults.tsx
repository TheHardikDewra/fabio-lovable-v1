import { Check, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";


type Phase = {
  label: string;
  step: string;
  title: string;
  desc: string;
  benefits: string[];
  metric: { value: string; label: string };
};

const PHASES: Phase[] = [
  {
    label: "1-7 Days",
    step: "01",
    title: "Clearing",
    desc: "Your body begins breaking down the gut biofilm. Bromelain dissolves the sticky protein layer that's been blocking nutrient absorption for years.",
    benefits: [
      "Bloating after meals starts calming down",
      "Lighter feeling first thing in the morning",
      "Subtle drop in face & finger puffiness",
    ],
    metric: { value: "−18%", label: "Bloating perception" },
  },
  {
    label: "Week 2-4",
    step: "02",
    title: "Restoring",
    desc: "Nutrients finally reach your cells. Berberine activates AMPK — your body's natural fat-burning switch — while Ashwagandha calms cortisol.",
    benefits: [
      "Noticeable drop in water retention",
      "Sugar cravings get noticeably quieter",
      "Waistband feels looser by the end of the day",
    ],
    metric: { value: "−4 lbs", label: "Average weight" },
  },
  {
    label: "Month 2-3",
    step: "03",
    title: "Real Transformation",
    desc: "This is when the real change kicks in. Metabolism fully online, hard belly fat finally releases, and clothes fit the way they used to. Most women say month 3 is when friends start noticing.",
    benefits: [
      "Belly visibly flatter — jeans button without effort",
      "−7 to −9 lbs on the scale (average)",
      "Energy lasts past 3pm without coffee",
      "Compliments from people who don't know",
    ],
    metric: { value: "−9 lbs", label: "Average weight" },
  },
  {
    label: "Month 6+",
    step: "04",
    title: "The New You",
    desc: "Full metabolic reset complete. Your body runs the way it was designed to — what you eat works with you, not against you. This stops being a phase and becomes your new baseline.",
    benefits: [
      "Visible waistline definition returns",
      "Stable weight & metabolism long-term",
      "Confident in clothes you'd stopped wearing",
      "Consistent energy — every single day",
    ],
    metric: { value: "−12 lbs", label: "New baseline" },
  },
];

export function TimelineResults() {
  return (
    <section className="bg-background text-foreground pt-6 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="What Happens, Week By Week"
          title={<>What Happens, <span className="text-rose-deep">Week By Week.</span></>}
          description="A clear, week-by-week map of what's happening inside your body — and what you'll feel."
        />

        {/* Vertical timeline */}
        <ol className="relative mt-6 pl-7 md:pl-9 border-l-2 border-rose-deep/20 space-y-5">
          {PHASES.map((p, i) => {
            const isLast = i === PHASES.length - 1;
            return (
              <li key={p.label} className="relative">
                {/* Node on the spine */}
                <span
                  aria-hidden
                  className="absolute -left-[34px] md:-left-[42px] top-3 flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-rose-deep to-[#a8364a] text-white text-[11px] md:text-[12px] font-extrabold tabular-nums shadow-[0_6px_14px_-6px_rgba(190,55,75,0.65)] ring-4 ring-cream"
                >
                  {p.step}
                </span>

                <article
                  className={`relative rounded-xl bg-white ring-1 ring-rose-deep/15 p-4 md:p-5 shadow-[0_14px_36px_-22px_rgba(190,55,75,0.3)] ${
                    isLast ? "bg-gradient-to-br from-white via-soft-pink/30 to-white" : ""
                  }`}
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-rose-deep">
                        {p.label}
                      </div>
                      <h3 className="font-display font-extrabold text-foreground leading-tight text-[20px] md:text-[22px] mt-0.5">
                        {p.title}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <div className="font-display text-[20px] md:text-[22px] font-extrabold text-rose-deep leading-none tabular-nums">
                        {p.metric.value}
                      </div>
                      <div className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-foreground/55 mt-1">
                        {p.metric.label}
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/75 text-[13.5px] md:text-[14px] leading-relaxed mt-2.5">
                    {p.desc}
                  </p>

                  {/* What you'll feel */}
                  <div className="mt-3 rounded-lg bg-soft-pink/40 ring-1 ring-rose-deep/15 p-3">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-rose-deep" strokeWidth={2.5} />
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-rose-deep">
                        What You'll Feel
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {p.benefits.map((b, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-[13px] md:text-[13.5px] text-foreground/90 leading-snug"
                        >
                          <span className="flex-shrink-0 w-4 h-4 rounded-full bg-rose-deep flex items-center justify-center mt-px">
                            <Check className="w-2.5 h-2.5 text-white" strokeWidth={3.5} />
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        <p className="text-[11px] text-foreground/50 leading-snug mt-5 text-center">
          *Results based on customer-reported survey feedback from verified purchasers. Individual results vary.
        </p>
      </div>
    </section>
  );
}
