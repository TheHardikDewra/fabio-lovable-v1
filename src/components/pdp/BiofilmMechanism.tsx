import { AlertTriangle, Sparkles, ShieldCheck, ArrowRight, Microscope, Clock, Flame, Droplets } from "lucide-react";
import { SectionHeader } from "./SectionHeader";


/**
 * BiofilmMechanism — the "how & why it works" masterclass section.
 * Visually explains the gut biofilm problem and the 3-phase solution
 * with hand-drawn-feel SVG diagrams (no images needed).
 */

function GutWallSVG({ stage }: { stage: "clogged" | "clearing" | "clear" }) {
  // Stage-driven visual: villi (finger-like) on the gut wall + biofilm overlay
  const villi = Array.from({ length: 9 });
  return (
    <svg viewBox="0 0 320 200" className="w-full h-auto" role="img" aria-label={`Gut wall — ${stage}`}>
      <defs>
        <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde7ec" />
          <stop offset="100%" stopColor="#f7c9d3" />
        </linearGradient>
        <linearGradient id="biofilmGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a4a35" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3a2e20" stopOpacity="0.95" />
        </linearGradient>
        <pattern id="biofilmTexture" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#2a1f15" opacity="0.5" />
          <circle cx="5" cy="5" r="0.8" fill="#1a1208" opacity="0.7" />
        </pattern>
      </defs>

      {/* Gut tube background */}
      <rect x="0" y="0" width="320" height="200" fill="#fff5f7" />
      <rect x="0" y="140" width="320" height="60" fill="url(#wallGrad)" />

      {/* Villi */}
      {villi.map((_, i) => {
        const x = 20 + i * 33;
        return (
          <g key={i}>
            <path
              d={`M ${x} 140 Q ${x + 8} ${stage === "clogged" ? 115 : 90} ${x + 16} 140 Z`}
              fill="#e8909e"
              opacity={stage === "clogged" ? 0.55 : 1}
            />
          </g>
        );
      })}

      {/* Biofilm layer */}
      {stage === "clogged" && (
        <>
          <path
            d="M 0 138 Q 40 120 80 138 T 160 138 T 240 138 T 320 138 L 320 165 L 0 165 Z"
            fill="url(#biofilmGrad)"
          />
          <path
            d="M 0 138 Q 40 120 80 138 T 160 138 T 240 138 T 320 138 L 320 165 L 0 165 Z"
            fill="url(#biofilmTexture)"
            opacity="0.7"
          />
          {/* Trapped particles */}
          {[40, 110, 180, 250, 290].map((cx, i) => (
            <circle key={i} cx={cx} cy={150} r="3.5" fill="#7a5a3a" opacity="0.8" />
          ))}
          {/* Blocked nutrient arrows */}
          {[60, 140, 220].map((cx, i) => (
            <g key={i}>
              <circle cx={cx} cy={50} r="6" fill="#fbbf24" />
              <text x={cx} y={54} fontSize="9" fontWeight="800" textAnchor="middle" fill="#78350f">N</text>
              <line x1={cx} y1={60} x2={cx} y2={120} stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 3" />
              <g transform={`translate(${cx - 8} 122)`}>
                <line x1="0" y1="0" x2="16" y2="16" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="16" y1="0" x2="0" y2="16" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            </g>
          ))}
        </>
      )}

      {stage === "clearing" && (
        <>
          {/* Bromelain "scrubbers" */}
          <path
            d="M 0 138 Q 40 130 80 138 T 160 138 T 240 138 T 320 138 L 320 155 L 0 155 Z"
            fill="url(#biofilmGrad)"
            opacity="0.5"
          />
          {/* Enzyme bubbles dissolving biofilm */}
          {[
            { x: 50, y: 130 },
            { x: 110, y: 125 },
            { x: 170, y: 132 },
            { x: 230, y: 122 },
            { x: 280, y: 128 },
          ].map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="10" fill="#bef264" opacity="0.9" />
              <circle cx={p.x} cy={p.y} r="14" fill="none" stroke="#84cc16" strokeWidth="1.5" opacity="0.6" />
              <circle cx={p.x} cy={p.y} r="18" fill="none" stroke="#84cc16" strokeWidth="1" opacity="0.3" />
            </g>
          ))}
        </>
      )}

      {stage === "clear" && (
        <>
          {/* Nutrient flow into clean villi */}
          {[40, 90, 140, 190, 240, 290].map((cx, i) => (
            <g key={i}>
              <circle cx={cx} cy={40 + (i % 2) * 12} r="6" fill="#34d399" />
              <text x={cx} y={44 + (i % 2) * 12} fontSize="9" fontWeight="800" textAnchor="middle" fill="#064e3b">N</text>
              <line
                x1={cx}
                y1={48 + (i % 2) * 12}
                x2={cx}
                y2={110}
                stroke="#34d399"
                strokeWidth="2"
              />
              <polygon
                points={`${cx - 4},108 ${cx + 4},108 ${cx},115`}
                fill="#34d399"
              />
            </g>
          ))}
          {/* Sparkle on villi */}
          {[60, 150, 240].map((cx, i) => (
            <text key={i} x={cx} y={130} fontSize="14" textAnchor="middle">✨</text>
          ))}
        </>
      )}
    </svg>
  );
}

const PHASES = [
  {
    n: "01",
    badge: "Clear",
    icon: Sparkles,
    title: "Dissolve the biofilm.",
    when: "Days 1–7",
    body:
      "Bromelain — a plant enzyme from pineapple stem — gently breaks down the sticky protein layer coating your gut wall. Within days, bloating drops and your stomach feels flatter.",
    you: "You feel: less bloat, pants looser, lighter after meals.",
    color: "from-soft-pink to-cream",
    accent: "text-rose-deep",
    ring: "ring-rose-deep/30",
    dot: "bg-rose-deep",
  },
  {
    n: "02",
    badge: "Restore",
    icon: Flame,
    title: "Wake the metabolism.",
    when: "Weeks 2–4",
    body:
      "With absorption restored, Berberine activates AMPK — your body's natural fat-burning switch — while Ashwagandha lowers cortisol so your body stops storing belly fat from stress.",
    you: "You feel: steady energy, fewer cravings, weight starts moving.",
    color: "from-amber-100 to-rose-50",
    accent: "text-amber-700",
    ring: "ring-amber-300/60",
    dot: "bg-amber-500",
  },
  {
    n: "03",
    badge: "Protect",
    icon: ShieldCheck,
    title: "Seal it. Keep it clean.",
    when: "Month 2+",
    body:
      "Quercetin strengthens the gut barrier and stops the biofilm from rebuilding. BioPerine® boosts every nutrient's absorption up to 20×, so the results compound.",
    you: "You feel: lasting flatness, glowing skin, your body works for you.",
    color: "from-rose-100 to-soft-pink-2/50",
    accent: "text-rose-deep",
    ring: "ring-rose-deep/40",
    dot: "bg-rose-deep",
  },
];

export function BiofilmMechanism() {
  return (
    <section className="bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="The Hidden Layer Slowing Your Metabolism"
          title={<>Why your body's been <span className="text-rose-deep italic">stuck.</span><br />And how we <span className="text-rose-deep">unstick it.</span></>}
          description="Diets, probiotics, detoxes — they all fail for the same reason. There's a sticky layer inside your gut blocking everything. Here's exactly what it is and how we clear it."
        />



        {/* THE PROBLEM — big illustrated before/after */}
        <div className="rounded-lg bg-gradient-to-br from-soft-pink/60 via-cream to-soft-pink-2/40 ring-1 ring-rose-deep/15 p-5 md:p-10 shadow-[0_25px_70px_-35px_rgba(190,55,75,0.45)]">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            {/* BEFORE */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-foreground/5 border border-foreground/20 text-foreground/70 text-[10.5px] font-extrabold uppercase tracking-wider">
                  <AlertTriangle className="w-3 h-3" strokeWidth={3} />
                  Before
                </span>
                <span className="text-[11px] text-foreground/60 font-semibold uppercase tracking-wide">
                  Gut covered in biofilm
                </span>
              </div>
              <div className="rounded-lg overflow-hidden ring-1 ring-rose-deep/10 bg-white shadow-md">
                <GutWallSVG stage="clogged" />
              </div>
              <ul className="mt-4 space-y-2 text-[13px] text-foreground/80">
                <li className="flex gap-2"><span className="text-foreground/40 font-extrabold">✗</span><span>Nutrients <strong>can't pass through</strong> — your body stays hungry & stores fat.</span></li>
                <li className="flex gap-2"><span className="text-foreground/40 font-extrabold">✗</span><span>Bacteria + water <strong>trapped</strong> behind the layer → bloat & puffiness.</span></li>
                <li className="flex gap-2"><span className="text-foreground/40 font-extrabold">✗</span><span>Metabolism <strong>slows down</strong>. Cravings spike. Energy crashes.</span></li>
              </ul>
            </div>

            {/* AFTER */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-soft-pink/60 border border-rose-deep/30 text-rose-deep text-[10.5px] font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" strokeWidth={3} />
                  After
                </span>
                <span className="text-[11px] text-foreground/60 font-semibold uppercase tracking-wide">
                  Gut wall clean & absorbing
                </span>
              </div>
              <div className="rounded-lg overflow-hidden ring-1 ring-rose-deep/20 bg-white shadow-md">
                <GutWallSVG stage="clear" />
              </div>
              <ul className="mt-4 space-y-2 text-[13px] text-foreground/80">
                <li className="flex gap-2"><span className="text-rose-deep font-extrabold">✓</span><span>Nutrients <strong>flow into your body</strong> — energy returns naturally.</span></li>
                <li className="flex gap-2"><span className="text-rose-deep font-extrabold">✓</span><span>Trapped water <strong>flushes out</strong> — flat stomach, slim fingers.</span></li>
                <li className="flex gap-2"><span className="text-rose-deep font-extrabold">✓</span><span>Metabolism <strong>switches back on</strong>. Cravings quiet. Mood lifts.</span></li>
              </ul>
            </div>
          </div>

          {/* Plain-language definition */}
          <div className="mt-6 md:mt-8 rounded-lg bg-white ring-1 ring-rose-deep/15 p-5 md:p-6 flex gap-4 items-start">
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-rose-deep text-white flex items-center justify-center shadow-md">
              <Microscope className="w-5 h-5" strokeWidth={2.4} />
            </div>
            <div>
              <div className="text-[10.5px] font-extrabold uppercase tracking-[0.22em] text-rose-deep mb-1">
                What is biofilm, simply?
              </div>
              <p className="text-foreground/85 text-[14px] md:text-[15.5px] leading-relaxed">
                Think of <strong>plaque on your teeth</strong> — that sticky film you brush off every
                morning. The same thing forms <strong>inside your gut</strong>, except no toothbrush
                can reach it. It thickens for years from processed food, stress and antibiotics, until
                your gut is sealed shut from the inside.
              </p>
            </div>
          </div>
        </div>

        {/* THE 3 PHASES — visual timeline */}
        <div className="mt-10 md:mt-12">
          <div className="text-center mb-6 md:mb-8">
            <span className="inline-block text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-rose-deep mb-2">
              The 3-Phase Reset
            </span>
            <h3 className="font-display font-extrabold text-foreground text-[clamp(24px,5vw,38px)] leading-tight">
              One capsule. <span className="text-rose-deep">Three things at once.</span>
            </h3>
          </div>

          {/* Phase cards */}
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 relative">
            {/* connecting line on desktop */}
            <div className="hidden md:block absolute top-[120px] left-[12%] right-[12%] h-px bg-gradient-to-r from-amber-300 via-rose-deep/60 to-rose-deep opacity-50" />
            {PHASES.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.n}
                  className={`relative rounded-lg bg-gradient-to-br ${p.color} ring-1 ${p.ring} p-6 md:p-7 shadow-[0_15px_45px_-25px_rgba(0,0,0,0.25)] flex flex-col`}
                >
                  {/* Big number */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`font-display font-extrabold text-[58px] leading-none ${p.accent} opacity-25`}>
                      {p.n}
                    </div>
                    <div className={`w-12 h-12 rounded-full bg-white ring-2 ${p.ring} flex items-center justify-center shadow-sm relative z-10`}>
                      <Icon className={`w-6 h-6 ${p.accent}`} strokeWidth={2.4} />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/80 ring-1 ${p.ring} text-[10.5px] font-extrabold uppercase tracking-wider ${p.accent}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                      {p.badge}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-wider text-foreground/55">
                      <Clock className="w-3 h-3" strokeWidth={2.6} /> {p.when}
                    </span>
                  </div>

                  <h4 className="font-display font-extrabold text-foreground text-[22px] md:text-[24px] leading-tight mb-2">
                    {p.title}
                  </h4>
                  <p className="text-foreground/75 text-[13.5px] leading-relaxed">
                    {p.body}
                  </p>

                  <div className={`mt-4 rounded-lg bg-white/75 backdrop-blur-sm ring-1 ${p.ring} px-3.5 py-2.5 text-[12.5px] font-semibold text-foreground/85 leading-snug mt-auto`}>
                    {p.you}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WHY IT WORKS WHEN OTHER THINGS DON'T */}
        <div className="mt-10 md:mt-12 rounded-lg overflow-hidden ring-1 ring-rose-deep/15 bg-white shadow-[0_20px_60px_-30px_rgba(190,55,75,0.35)]">
          <div className="grid grid-cols-2">
            {/* Other stuff */}
            <div className="bg-foreground/[0.03] p-5 md:p-8 border-r border-rose-deep/10">
              <div className="text-[10.5px] font-extrabold uppercase tracking-[0.22em] text-foreground/50 mb-3">
                Everything else
              </div>
              <h4 className="font-display font-extrabold text-foreground/70 text-[18px] md:text-[22px] mb-4 leading-tight">
                Treats the symptom.
              </h4>
              <ul className="space-y-2.5 text-[13px] text-foreground/65">
                {[
                  "Probiotics → die before reaching gut wall",
                  "Detox teas → flush water, weight returns",
                  "Cut calories → metabolism slows further",
                  "Fiber → can't pass biofilm barrier",
                ].map((t) => (
                  <li key={t} className="flex gap-2 line-through decoration-foreground/30">
                    <span className="text-foreground/40 font-extrabold no-underline">✗</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Us */}
            <div className="bg-gradient-to-br from-rose-deep to-[#7a1f2c] text-white p-5 md:p-8 relative overflow-hidden">
              <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
              <div className="text-[10.5px] font-extrabold uppercase tracking-[0.22em] text-white/70 mb-3">
                Our ritual
              </div>
              <h4 className="font-display font-extrabold text-[18px] md:text-[22px] mb-4 leading-tight">
                Treats the <span className="italic">cause.</span>
              </h4>
              <ul className="space-y-2.5 text-[13px] text-white/95 relative">
                {[
                  "Dissolves the biofilm itself",
                  "Restores nutrient absorption",
                  "Reactivates fat-burning AMPK",
                  "Seals the gut barrier long-term",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-amber-200 font-extrabold">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Trust caption */}
        <p className="text-center text-[11.5px] text-foreground/55 mt-6 max-w-2xl mx-auto leading-relaxed">
          <ShieldCheck className="inline w-3.5 h-3.5 text-rose-deep mr-1 -mt-0.5" strokeWidth={2.4} />
          Mechanism backed by peer-reviewed research on enzymatic biofilm disruption, AMPK activation, and gut barrier function.
        </p>
      </div>
    </section>
  );
}
