import { useEffect, useRef, useState } from "react";
import { Sparkles, Zap, Leaf, ShieldCheck } from "lucide-react";

import bottleImg from "@/assets/bottle-single.png";
import bromelain from "@/assets/ingredient-bromelain-macro.jpg";
import berberine from "@/assets/ingredient-berberine-macro.jpg";
import dandelion from "@/assets/ingredient-dandelion-macro.jpg";
import ashwagandha from "@/assets/ingredient-ashwagandha-macro.jpg";
import gymnema from "@/assets/ingredient-gymnema-macro.jpg";
import quercetin from "@/assets/ingredient-quercetin-macro.jpg";
import bioperine from "@/assets/ingredient-bioperine-macro.jpg";

const ORBIT_INGREDIENTS = [
  { img: bromelain, name: "Bromelain" },
  { img: berberine, name: "Berberine" },
  { img: dandelion, name: "Dandelion" },
  { img: ashwagandha, name: "Ashwagandha" },
  { img: gymnema, name: "Gymnema" },
  { img: quercetin, name: "Quercetin" },
  { img: bioperine, name: "BioPerine" },
];

const STAMPS = [
  { icon: Leaf, label: "100% Natural" },
  { icon: ShieldCheck, label: "3rd-Party Tested" },
  { icon: Zap, label: "20× Absorption" },
  { icon: Sparkles, label: "Clears Biofilm" },
];

export function ProductSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState(0);

  // Scroll-driven subtle 3D tilt
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const progress = (vh / 2 - center) / vh; // -0.5 .. 0.5
      setTilt(Math.max(-1, Math.min(1, progress * 2)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#1a0c12] via-[#2a0f1a] to-[#1a0c12] text-white py-14 px-4"
    >
      {/* Background grid + noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 75%)",
        }}
      />
      {/* Soft rose glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(229,79,109,0.55) 0%, rgba(229,79,109,0) 60%)",
        }}
      />
      {/* Amber accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.5) 0%, rgba(251,191,36,0) 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.32em] text-amber-300">
            <span className="inline-block w-8 h-px bg-amber-300/50" />
            <span>The Ritual</span>
            <span className="inline-block w-8 h-px bg-amber-300/50" />
          </div>
        </div>
        <h2 className="text-center font-display font-extrabold text-[28px] sm:text-[36px] leading-[1.05] tracking-tight">
          One Capsule.
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">
            Seven Powerhouse Ingredients.
          </span>
        </h2>
        <p className="text-center text-white/65 text-[13px] mt-3 max-w-md mx-auto">
          Watch them work together — clinically dosed, perfectly orchestrated.
        </p>

        {/* Stage */}
        <div
          className="relative mx-auto mt-10 w-full max-w-[420px] aspect-square"
          style={{ perspective: "1200px" }}
        >
          {/* Pulsing aura */}
          <div
            aria-hidden
            className="absolute inset-[15%] rounded-full blur-2xl animate-aura"
            style={{
              background:
                "radial-gradient(circle, rgba(255,182,193,0.55) 0%, rgba(229,79,109,0.35) 35%, rgba(229,79,109,0) 70%)",
            }}
          />

          {/* Outer dashed orbit ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-white/15 animate-orbit-reverse" />
          {/* Inner dashed orbit ring */}
          <div className="absolute inset-[14%] rounded-full border border-dashed border-white/10 animate-orbit" />

          {/* Orbiting ingredients */}
          <div className="absolute inset-0 animate-orbit">
            {ORBIT_INGREDIENTS.map((ing, i) => {
              const angle = (i / ORBIT_INGREDIENTS.length) * 360;
              return (
                <div
                  key={ing.name}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translate(190px) rotate(-${angle}deg)`,
                  }}
                >
                  <div className="-translate-x-1/2 -translate-y-1/2 animate-orbit-counter">
                    <div className="group relative">
                      <div className="w-[52px] h-[52px] rounded-full overflow-hidden ring-2 ring-white/90 shadow-[0_8px_22px_-6px_rgba(229,79,109,0.7)] bg-white">
                        <img
                          src={ing.img}
                          alt={ing.name}
                          loading="lazy"
                          width={120}
                          height={120}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-[9.5px] font-bold uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded">
                        {ing.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Particles rising */}
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              aria-hidden
              className="absolute bottom-[20%] w-1.5 h-1.5 rounded-full bg-amber-300 animate-particle"
              style={{
                left: `${20 + i * 8}%`,
                animationDelay: `${i * 0.7}s`,
                boxShadow: "0 0 12px rgba(252,211,77,0.9)",
              }}
            />
          ))}

          {/* Bottle — floating with scroll tilt */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `rotateX(${tilt * 8}deg) rotateY(${tilt * -10}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.2s ease-out",
            }}
          >
            <div className="relative animate-float-y">
              {/* Bottle glow */}
              <div
                aria-hidden
                className="absolute inset-0 -m-6 rounded-full blur-2xl opacity-70"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(229,79,109,0.3) 40%, transparent 70%)",
                }}
              />
              <img
                src={bottleImg}
                alt="Product bottle"
                width={260}
                height={260}
                loading="lazy"
                className="relative w-[220px] h-auto drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
              />
              {/* Sweep light */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
              >
                <span className="absolute -inset-y-4 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-md animate-sweep" />
              </span>

              {/* Floating badge */}
              <div className="absolute -top-2 -right-6 animate-badge-pop">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-amber-300 blur-md opacity-60" />
                  <div className="relative w-[72px] h-[72px] rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-[#1a0c12] flex flex-col items-center justify-center text-center shadow-[0_8px_20px_-4px_rgba(252,211,77,0.7)] ring-2 ring-white/80">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider leading-none">Clears</span>
                    <span className="text-[14px] font-black leading-none mt-0.5">Biofilm</span>
                    <span className="text-[8.5px] font-bold opacity-80 mt-0.5">in 7 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stamps row */}
        <div className="relative mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mx-auto">
          {STAMPS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="group flex items-center gap-2 rounded-lg bg-white/5 backdrop-blur-sm ring-1 ring-white/10 px-3 py-2.5 hover:bg-white/10 hover:ring-amber-300/40 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300/30 to-rose-deep/30 ring-1 ring-amber-300/40 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-amber-300" strokeWidth={2.4} />
                </div>
                <span className="text-[11.5px] font-extrabold uppercase tracking-wide text-white/90 leading-tight">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Caption */}
        <p className="relative text-center text-[11px] text-white/45 mt-6 italic">
          Hover-free, scroll-driven — feel the formula come alive.
        </p>
      </div>
    </section>
  );
}
