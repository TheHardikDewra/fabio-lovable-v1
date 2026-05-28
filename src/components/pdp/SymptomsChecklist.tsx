import { AlertCircle } from "lucide-react";

const SYMPTOMS = [
  { emoji: "💍", label: "Rings Won't Fit", desc: "Fingers feel tight & puffy" },
  { emoji: "🎈", label: "Daily Bloating", desc: "Stomach swells after meals" },
  { emoji: "👖", label: "Pants Tighter by Night", desc: "Loose AM, snug by evening" },
  { emoji: "🩲", label: "Stubborn Belly Fat", desc: "Won't budge no matter what" },
  { emoji: "🤰", label: "'6-Months Pregnant' Look", desc: "Belly bulge at any age" },
  { emoji: "🍫", label: "Sugar Cravings", desc: "Constant snacking urges" },
  { emoji: "🦶", label: "Swollen Ankles", desc: "Socks leave deep marks" },
  { emoji: "😴", label: "Afternoon Crash", desc: "No energy by 3 PM" },
  { emoji: "🧠", label: "Brain Fog", desc: "Can't focus or think clearly" },
  { emoji: "⚖️", label: "Slow Metabolism", desc: "Weight loss feels impossible" },
  { emoji: "💊", label: "Supplements Fail", desc: "Premium brands… nothing works" },
  { emoji: "🌙", label: "Restless Sleep", desc: "Wake at 3 AM, can't drift off" },
];

export function SymptomsChecklist() {
  return (
    <section className="pdp-section-dark">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-7">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-deep/10 px-3 py-1 mb-3">
            <AlertCircle className="w-3.5 h-3.5 text-rose-deep" strokeWidth={2.6} />
            <span className="text-[10.5px] font-extrabold uppercase tracking-[0.18em] text-rose-deep">
              Self-Check
            </span>
          </div>
          <h2 className="font-display text-[24px] md:text-[30px] font-extrabold text-foreground leading-[1.1] tracking-tight">
            Do you have any of these symptoms?
          </h2>
          <p className="mt-2 text-[14px] md:text-[15px] text-foreground/70 leading-snug max-w-lg mx-auto">
            If you checked even <strong className="text-rose-deep">one</strong> of these — your gut biofilm is the root cause.
          </p>
        </div>

        {/* Grid of symptoms */}
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {SYMPTOMS.map((s) => (
            <li
              key={s.label}
              className="group relative flex flex-col items-center text-center rounded-lg bg-white border border-border px-2.5 py-3 shadow-[0_2px_8px_-6px_rgba(0,0,0,0.15)] transition-all hover:border-rose-deep/40 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_-10px_rgba(190,55,75,0.35)]"
            >
              <div className="text-[28px] leading-none mb-1.5" aria-hidden>{s.emoji}</div>
              <div className="text-[12.5px] font-extrabold text-foreground leading-tight">
                {s.label}
              </div>
              <div className="mt-0.5 text-[10.5px] text-foreground/60 leading-snug">
                {s.desc}
              </div>
            </li>
          ))}
        </ul>


        {/* Verdict callout */}
        <div className="mt-6 rounded-xl bg-gradient-to-br from-rose-deep to-[#a8364a] p-[1.5px] shadow-[0_12px_30px_-14px_rgba(190,55,75,0.55)]">
          <div className="rounded-[10px] bg-white px-4 py-4 sm:px-5 sm:py-5">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-deep/10 flex items-center justify-center ring-1 ring-rose-deep/20">
                <span className="text-[20px]" aria-hidden>🎯</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-rose-deep mb-1">
                  The Real Problem
                </div>
                <h3 className="font-display text-[16px] sm:text-[18px] font-extrabold text-foreground leading-snug">
                  It's <span className="text-rose-deep">gut biofilm</span> — not your willpower, age, or hormones.
                </h3>
                <p className="mt-1.5 text-[13px] text-foreground/75 leading-snug">
                  A sticky protein layer coats your gut wall, blocking absorption and trapping water, waste & fat around your midsection. <strong className="text-foreground">Dissolve it</strong> and every symptom above starts reversing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
