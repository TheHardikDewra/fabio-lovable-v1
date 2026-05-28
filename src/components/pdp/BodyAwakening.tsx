import { useState } from "react";
import { Sparkles, Flame, Brain, Heart, Smile } from "lucide-react";

type Spot = {
  id: string;
  label: string;
  // Position over the silhouette (% of container)
  top: string;
  left: string;
  icon: typeof Sparkles;
  stat: string;
  statLabel: string;
  headline: string;
  detail: string;
  accent: string; // tailwind text color class
  glow: string; // rgba glow
};

const SPOTS: Spot[] = [
  {
    id: "mind",
    label: "Mind",
    top: "8%",
    left: "50%",
    icon: Brain,
    stat: "−42%",
    statLabel: "Sugar Cravings",
    headline: "A Quieter Head.",
    detail:
      "Gymnema + Ashwagandha silence the 3pm cravings loop and bring cortisol back to baseline.",
    accent: "text-violet-300",
    glow: "rgba(167,139,250,0.7)",
  },
  {
    id: "skin",
    label: "Skin",
    top: "23%",
    left: "32%",
    icon: Smile,
    stat: "+1 Tone",
    statLabel: "Visible Glow",
    headline: "A Cleaner Mirror.",
    detail:
      "Reduced inflammation + restored gut lining = clearer, brighter skin within 3 weeks.",
    accent: "text-rose-300",
    glow: "rgba(253,164,175,0.7)",
  },
  {
    id: "mood",
    label: "Mood",
    top: "26%",
    left: "68%",
    icon: Heart,
    stat: "+3.4×",
    statLabel: "Calm Hormones",
    headline: "A Lighter Spirit.",
    detail:
      "90% of gut serotonin starts here. Clear the biofilm, restore the mood signal.",
    accent: "text-pink-300",
    glow: "rgba(249,168,212,0.7)",
  },
  {
    id: "gut",
    label: "Gut",
    top: "48%",
    left: "50%",
    icon: Sparkles,
    stat: "−94%",
    statLabel: "Bloat & Puffiness",
    headline: "A Flatter Belly.",
    detail:
      "Bromelain dissolves the biofilm wall. Berberine balances flora. You feel it within 5–7 days.",
    accent: "text-amber-300",
    glow: "rgba(252,211,77,0.85)",
  },
  {
    id: "energy",
    label: "Energy",
    top: "72%",
    left: "36%",
    icon: Flame,
    stat: "+20×",
    statLabel: "Nutrient Uptake",
    headline: "A Body That Burns Again.",
    detail:
      "BioPerine unlocks 20× absorption. Your metabolism stops idling and starts working.",
    accent: "text-orange-300",
    glow: "rgba(253,186,116,0.8)",
  },
];

export function BodyAwakening() {
  const [activeId, setActiveId] = useState<string>("gut");
  const active = SPOTS.find((s) => s.id === activeId)!;
  const Icon = active.icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0d0710] via-[#1a0b18] to-[#0d0710] text-white py-14 px-4">
      {/* Cosmic backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(167,139,250,0.45), transparent 45%), radial-gradient(circle at 80% 80%, rgba(252,211,77,0.35), transparent 50%), radial-gradient(circle at 50% 50%, rgba(229,79,109,0.3), transparent 60%)",
        }}
      />
      {/* Starfield */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 10% 20%, white, transparent), radial-gradient(1px 1px at 30% 70%, white, transparent), radial-gradient(1px 1px at 50% 40%, white, transparent), radial-gradient(1.5px 1.5px at 70% 80%, white, transparent), radial-gradient(1px 1px at 85% 30%, white, transparent), radial-gradient(1px 1px at 15% 90%, white, transparent), radial-gradient(1.5px 1.5px at 90% 60%, white, transparent), radial-gradient(1px 1px at 40% 10%, white, transparent)",
          backgroundSize: "100% 100%",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.32em] text-amber-300">
            <span className="inline-block w-8 h-px bg-amber-300/50" />
            <span>The Awakening</span>
            <span className="inline-block w-8 h-px bg-amber-300/50" />
          </div>
        </div>
        <h2 className="text-center font-display font-extrabold text-[28px] sm:text-[36px] leading-[1.05] tracking-tight">
          One Capsule.
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-violet-300 bg-clip-text text-transparent">
            Five Systems Reset.
          </span>
        </h2>
        <p className="text-center text-white/65 text-[13px] mt-3 max-w-md mx-auto">
          Tap a glowing point on her body — see exactly what shifts inside you.
        </p>

        {/* Stage */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-6 mt-10 items-center">
          {/* Silhouette canvas */}
          <div className="relative mx-auto w-full max-w-[340px] aspect-[1/1.5]">
            {/* Aura */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-full blur-3xl opacity-60 animate-aura"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${active.glow} 0%, transparent 60%)`,
              }}
            />

            {/* Silhouette SVG */}
            <svg
              viewBox="0 0 200 300"
              className="relative w-full h-full drop-shadow-[0_20px_40px_rgba(229,79,109,0.35)]"
              aria-hidden
            >
              <defs>
                <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                </linearGradient>
                <linearGradient id="bodyStroke" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
                  <stop offset="100%" stopColor="rgba(229,79,109,0.55)" />
                </linearGradient>
              </defs>
              {/* Stylized female silhouette — single path */}
              <path
                d="M100 12
                   c10 0 18 8 18 18
                   c0 6 -2 11 -5 15
                   c5 3 8 7 8 13
                   c0 5 -2 9 -5 11
                   l8 22
                   c2 5 0 9 -4 11
                   l-4 2
                   l3 38
                   c1 8 -2 14 -7 18
                   l4 50
                   c1 8 -1 14 -5 18
                   l5 38
                   c1 8 -3 12 -10 12
                   c-5 0 -8 -3 -9 -8
                   l-3 -34
                   l-3 34
                   c-1 5 -4 8 -9 8
                   c-7 0 -11 -4 -10 -12
                   l5 -38
                   c-4 -4 -6 -10 -5 -18
                   l4 -50
                   c-5 -4 -8 -10 -7 -18
                   l3 -38
                   l-4 -2
                   c-4 -2 -6 -6 -4 -11
                   l8 -22
                   c-3 -2 -5 -6 -5 -11
                   c0 -6 3 -10 8 -13
                   c-3 -4 -5 -9 -5 -15
                   c0 -10 8 -18 18 -18z"
                fill="url(#bodyGrad)"
                stroke="url(#bodyStroke)"
                strokeWidth="1"
              />
            </svg>

            {/* Hotspots */}
            {SPOTS.map((s) => {
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveId(s.id)}
                  aria-label={s.label}
                  aria-pressed={isActive}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ top: s.top, left: s.left }}
                >
                  {/* Outer ripple */}
                  <span
                    aria-hidden
                    className={`absolute inset-0 rounded-full ${isActive ? "animate-ping" : ""}`}
                    style={{
                      background: s.glow,
                      width: 28,
                      height: 28,
                      transform: "translate(-50%, -50%)",
                      left: "50%",
                      top: "50%",
                      opacity: isActive ? 0.6 : 0,
                    }}
                  />
                  {/* Dot */}
                  <span
                    className={`relative inline-flex items-center justify-center w-5 h-5 rounded-full ring-2 transition-all duration-300 ${
                      isActive
                        ? "ring-white scale-125"
                        : "ring-white/60 hover:scale-110"
                    }`}
                    style={{
                      background: isActive
                        ? `radial-gradient(circle, white 0%, ${s.glow} 70%)`
                        : "rgba(255,255,255,0.15)",
                      boxShadow: isActive
                        ? `0 0 24px ${s.glow}, 0 0 8px ${s.glow}`
                        : `0 0 10px ${s.glow}`,
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-white" />
                  </span>
                  {/* Label tag — only when not active */}
                  {!isActive && (
                    <span className="absolute left-1/2 -translate-x-1/2 mt-1.5 top-full whitespace-nowrap text-[9px] font-bold uppercase tracking-wider text-white/70">
                      {s.label}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Connecting lines from active hotspot to corners — animated */}
            <svg
              aria-hidden
              viewBox="0 0 200 300"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              {SPOTS.filter((s) => s.id === activeId).map((s) => {
                const x = parseFloat(s.left);
                const y = parseFloat(s.top);
                return (
                  <g key={s.id}>
                    <line
                      x1={x * 2}
                      y1={y * 3}
                      x2="180"
                      y2={y * 3}
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="0.5"
                      strokeDasharray="2 3"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Reveal card */}
          <div
            key={active.id}
            className="relative rounded-2xl overflow-hidden p-5 ring-1 ring-white/15 bg-white/[0.04] backdrop-blur-md animate-fade-in"
            style={{
              boxShadow: `0 30px 60px -20px ${active.glow}, inset 0 1px 0 rgba(255,255,255,0.08)`,
            }}
          >
            {/* Card glow */}
            <div
              aria-hidden
              className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-40"
              style={{ background: active.glow }}
            />

            <div className="relative">
              <div className="flex items-center gap-2">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center ring-1 ring-white/20"
                  style={{ background: `${active.glow}` }}
                >
                  <Icon className="w-4.5 h-4.5 text-white" strokeWidth={2.4} />
                </div>
                <span className="text-[10.5px] font-extrabold uppercase tracking-[0.22em] text-white/70">
                  {active.label}
                </span>
              </div>

              <div className="mt-4 flex items-baseline gap-2 tabular-nums">
                <span
                  className={`font-display text-[44px] sm:text-[52px] font-black leading-none ${active.accent}`}
                  style={{
                    textShadow: `0 0 30px ${active.glow}`,
                  }}
                >
                  {active.stat}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/55">
                  {active.statLabel}
                </span>
              </div>

              <h3 className="mt-3 font-display text-[20px] font-extrabold leading-tight text-white">
                {active.headline}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                {active.detail}
              </p>

              {/* Progress dots — which spot of 5 */}
              <div className="mt-5 flex items-center gap-1.5">
                {SPOTS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveId(s.id)}
                    aria-label={`Show ${s.label}`}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      s.id === activeId ? "w-8 bg-white" : "w-3 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="relative text-center text-[11px] text-white/45 mt-8 italic">
          Five system reset. One ritual. Tap any glowing point to explore.
        </p>
      </div>
    </section>
  );
}
