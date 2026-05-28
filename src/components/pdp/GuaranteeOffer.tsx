import { ShieldCheck, Truck, RotateCcw, Mail, Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";


export function GuaranteeOffer() {
  const scrollToBundle = () => {
    document.querySelector("[data-bundle-selector]")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-background pt-6 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="60 Days To Try It · Zero Risk On You"
          title={<>Try It For <span className="text-rose-deep">60 Full Days.</span><br />Love It Or It's Free.</>}
          description="If it doesn't work, you don't pay. Even on empty bottles. Zero questions, zero returns required."
        />


        <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-stretch">
          {/* Guarantee badge */}
          <div className="md:col-span-2 relative rounded-lg bg-gradient-to-br from-rose-deep to-[#a8364a] text-white p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-[0_30px_60px_-30px_rgba(190,55,75,0.7)] overflow-hidden">
            <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/8 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-12 w-56 h-56 rounded-full bg-amber-200/15 blur-3xl" />

            {/* Seal */}
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-white/10 ring-4 ring-amber-200/40 flex flex-col items-center justify-center mb-4">
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-amber-200/50" />
              <ShieldCheck className="w-9 h-9 text-amber-200 mb-1" strokeWidth={2.2} />
              <div className="font-display text-[28px] font-extrabold text-white leading-none tabular-nums">60</div>
              <div className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-amber-200 mt-0.5">Day Guarantee</div>
            </div>
            <h3 className="font-display text-[22px] md:text-[26px] font-extrabold leading-tight">
              Your Money Back. <em className="not-italic text-amber-200">Always.</em>
            </h3>
            <p className="text-[13px] md:text-[14px] text-white/85 leading-snug mt-2 max-w-xs">
              If you don't feel lighter, less bloated and more energized in 60 days — we refund every cent. Even on empty bottles.
            </p>
          </div>

          {/* How it works */}
          <div className="md:col-span-3 rounded-lg bg-background ring-1 ring-border p-6 md:p-8 shadow-sm">
            <div className="text-[10.5px] font-extrabold uppercase tracking-[0.22em] text-rose-deep mb-2">
              How It Works
            </div>
            <h3 className="font-display text-[22px] md:text-[26px] font-extrabold text-foreground leading-tight">
              Three steps. Zero risk.
            </h3>

            <ol className="mt-5 space-y-4">
              {[
                { n: "01", t: "Order today", d: "Free U.S. shipping on orders of 2+ bottles. Discreet packaging." },
                { n: "02", t: "Take 2 capsules a day", d: "With breakfast. Most women feel lighter within the first 7 days." },
                { n: "03", t: "Don't love it? Email us.", d: "We refund 100% — including empty bottles. No questions, no return required." },
              ].map((s) => (
                <li key={s.n} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-deep text-white text-[12px] font-extrabold flex items-center justify-center">
                    {s.n}
                  </span>
                  <div className="min-w-0">
                    <div className="font-extrabold text-foreground text-[15px] leading-tight">{s.t}</div>
                    <div className="text-[13.5px] text-foreground/70 leading-snug mt-0.5">{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-border">
              {[
                { i: Truck, t: "Free U.S. Shipping" },
                { i: RotateCcw, t: "Easy Returns" },
                { i: Mail, t: "Real Support" },
              ].map((b) => (
                <div key={b.t} className="flex flex-col items-center text-center gap-1.5">
                  <div className="w-9 h-9 rounded-full bg-soft-pink-2/60 flex items-center justify-center">
                    <b.i className="w-4 h-4 text-rose-deep" strokeWidth={2.2} />
                  </div>
                  <div className="text-[11px] font-bold text-foreground/80 leading-tight">{b.t}</div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToBundle}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-rose-deep hover:bg-rose-deep/90 text-white px-5 py-3.5 text-[13.5px] md:text-[14px] font-extrabold uppercase tracking-[0.14em] shadow-[0_10px_24px_-12px_rgba(190,55,75,0.55)] transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <Check className="w-4 h-4" strokeWidth={3} />
              Claim My Risk-Free Bottles
            </button>
            <p className="text-center text-[11px] text-foreground/55 mt-3">
              60-day money-back guarantee · Cancel anytime · Secure checkout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
