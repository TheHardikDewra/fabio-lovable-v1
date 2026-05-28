import { useEffect, useState } from "react";
import { BadgeCheck, Check, ShieldCheck, Star, Truck } from "lucide-react";

import { CartDrawer } from "./CartDrawer";
import { HelpMeChoose } from "./HelpMeChoose";
import { useCart } from "@/context/CartContext";

import bottleSingleImg from "@/assets/bottle-single.png";
import bottleDoubleImg from "@/assets/bottle-double.png";
import bottleTripleImg from "@/assets/bottle-triple.png";
import expertImg from "@/assets/expert-gut-health.jpg";


type Bundle = {
  id: string;
  qty: number;
  perPrice: number;       // price per bottle
  comparePer: number;     // original price per bottle (crossed)
  totalCompare: number;   // original total (crossed)
  total: number;          // final total
  daily: number;          // cost per day (30 days per bottle)
  tag?: "BEST DEAL" | "MOST POPULAR";
  saveAmount: number;
  unlocks: number;
};

const COMPARE_PER = 59.99;

const BUNDLES: Bundle[] = [
  { id: "3", qty: 3, perPrice: 23.32, comparePer: COMPARE_PER, totalCompare: 179.97, total: 69.95, daily: 0.78, tag: "BEST DEAL", saveAmount: 110, unlocks: 3 },
  { id: "2", qty: 2, perPrice: 30.00, comparePer: COMPARE_PER, totalCompare: 119.98, total: 59.99, daily: 1.00, tag: "MOST POPULAR", saveAmount: 60, unlocks: 2 },
  { id: "1", qty: 1, perPrice: 49.99, comparePer: COMPARE_PER, totalCompare: 59.99, total: 49.99, daily: 1.67, saveAmount: 10, unlocks: 1 },
];


const FAQ = [
  { q: "How fast will I see results?", a: "Most women feel less bloated within 5–7 days. Bigger shifts happen between weeks 2 and 4.", emoji: "⚡" },
  { q: "Is it safe to take daily?", a: "Yes. 100% natural, vegan, gluten-free, 3rd-party tested in an FDA-registered facility.", emoji: "🛡️" },
  { q: "What if it doesn't work for me?", a: "60-day money-back guarantee. Email us and we refund you — no need to send anything back.", emoji: "💸" },
  { q: "Can I cancel anytime?", a: "Absolutely. Skip, pause or cancel from your account in 1 click. No phone calls.", emoji: "🔄" },
];

const FAQ_EXTRA = [
  { q: "How do I take it?", a: "Take 2 capsules in the morning with a glass of water, with or without food.", emoji: "💊" },
  { q: "Will it interfere with my medication?", a: "Always check with your doctor first if you're on prescription meds. Most women take it without issues.", emoji: "👩‍⚕️" },
  { q: "Is it pregnancy/breastfeeding safe?", a: "We don't recommend use during pregnancy or breastfeeding. Please consult your doctor.", emoji: "🤱" },
  { q: "Is it vegan and gluten-free?", a: "Yes — 100% vegan, gluten-free, non-GMO, and free from artificial fillers.", emoji: "🌱" },
  { q: "Where is it made?", a: "Made in the USA in an FDA-registered, GMP-certified facility.", emoji: "🇺🇸" },
  { q: "Do I need to take it forever?", a: "No. Most women see lasting results within 60–90 days and switch to a maintenance routine after.", emoji: "🔁" },
  { q: "Are the capsules easy to swallow or are they big?", a: "They're small, smooth and easy to swallow — even if you usually struggle with pills. No aftertaste, no chalky feel.", emoji: "💧" },
];




export function BundleSelector() {
  const [sel, setSel] = useState("3");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showMoreFaq, setShowMoreFaq] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [subscribe, setSubscribe] = useState(true);
  const { addItem } = useCart();
  const baseSelected = BUNDLES.find((b) => b.id === sel)!;
  const adjust = (b: Bundle): Bundle => {
    if (subscribe) return b;
    const total = b.total + 10;
    return {
      ...b,
      total,
      perPrice: total / b.qty,
      daily: total / (b.qty * 30),
    };
  };
  const selected = adjust(baseSelected);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("bundle:price", {
        detail: { total: selected.total, compare: selected.totalCompare },
      })
    );
  }, [selected.total, selected.totalCompare]);

  const handleAddToCart = () => {
    addItem({
      id: selected.id,
      name: `Gut Biofilm Ritual · ${selected.qty} bottle${selected.qty > 1 ? "s" : ""}`,
      qty: selected.qty,
      perPrice: selected.perPrice,
      totalCompare: selected.totalCompare,
      total: selected.total,
    });
    setCartOpen(true);
  };

  return (
    <div className="space-y-4">
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />








      {/* Luxury header — refined, editorial feel */}
      <div className="text-center -mt-2 mb-3">
        <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.28em] text-rose-deep">
          <span className="inline-block w-6 h-px bg-rose-deep/50" />
          <span>Choose Your Ritual</span>
          <span className="inline-block w-6 h-px bg-rose-deep/50" />
        </div>
      </div>

      {/* Bundle bars — horizontal layout, image on left, content on right. Same style as before. */}
      <div className="flex flex-col gap-2.5 pt-1">

        {BUNDLES.map((rawB) => {
          const b = adjust(rawB);
          const active = sel === b.id;
          const isBest = b.tag === "BEST DEAL";
          const save = b.totalCompare - b.total;
          const customImg =
            b.qty === 1 ? bottleSingleImg
            : b.qty === 2 ? bottleDoubleImg
            : bottleTripleImg;
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => setSel(b.id)}
              aria-pressed={active}
              className={`group relative w-full text-left rounded-lg overflow-hidden transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep/50 ${
                isBest
                  ? "bg-gradient-to-r from-[#f4ece8] to-[#ead7d2]"
                  : "bg-cream"
              } ${
                active
                  ? isBest
                    ? "ring-2 ring-rose-deep shadow-[0_22px_50px_-18px_rgba(190,55,75,0.55)]"
                    : "ring-2 ring-foreground shadow-[0_18px_38px_-16px_rgba(0,0,0,0.35)]"
                  : "ring-1 ring-border hover:ring-foreground/30"
              }`}
            >
              {/* Top ribbon */}
              {b.tag && (
                <div
                  className={`flex items-center justify-center py-1 text-[8.5px] font-extrabold uppercase tracking-[0.14em] ${
                    isBest
                      ? "bg-gradient-to-r from-rose-deep via-[#a8364a] to-rose-deep text-white"
                      : "bg-foreground text-background"
                  }`}
                >
                  {isBest ? "★ Best Results" : b.tag}
                </div>
              )}

              <div className="relative flex items-end gap-2 pr-3 pl-0 py-0 overflow-hidden">
                {/* Selection radio */}
                <div
                  className={`absolute top-2 right-2 z-20 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-200 ${
                    active
                      ? isBest
                        ? "bg-rose-deep ring-2 ring-rose-deep/15"
                        : "bg-foreground ring-2 ring-foreground/15"
                      : "bg-background ring-[1.5px] ring-foreground/25"
                  }`}
                >
                  {active && <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />}
                </div>

                {/* Packaging image — left side, flush to bottom */}
                <div className="relative w-[88px] h-[82px] flex-shrink-0">
                  <img
                    src={customImg}
                    alt=""
                    loading="lazy"
                    className="absolute left-1/2 bottom-0 -translate-x-1/2 h-full w-auto object-contain object-bottom drop-shadow-[0_-4px_10px_rgba(0,0,0,0.12)]"
                  />
                </div>

                {/* Content — right side */}
                <div className="flex-1 flex flex-col justify-center py-2.5 pr-3 min-w-0">
                  {/* Headline + SAVE pill inline */}
                  <div className="flex items-center gap-1.5 flex-nowrap pr-7 min-w-0">
                    <div className="font-display text-[15.5px] font-extrabold text-foreground leading-[1.1] tracking-tight whitespace-nowrap">
                      {b.qty} {b.qty === 1 ? "Month" : "Months"} Supply
                    </div>
                    {subscribe && (
                      <span className="inline-flex items-center gap-0.5 rounded-md bg-[#e8efe6] text-[#2f5d3a] px-1.5 py-[2px] tabular-nums ring-1 ring-[#2f5d3a]/15 flex-shrink-0">
                        <span className="text-[9px] font-extrabold uppercase tracking-[0.12em] opacity-80">Save</span>
                        <span className="text-[11.5px] font-black leading-none">${save.toFixed(0)}</span>
                      </span>
                    )}
                  </div>

                  {/* Thin divider */}
                  <div className="mt-1.5 h-px w-7 bg-foreground/15" aria-hidden />

                  {/* Per-each price — primary */}
                  <div className="mt-1.5 flex items-baseline gap-1 tabular-nums leading-none">
                    <span className="font-display text-[21px] font-extrabold text-foreground">
                      ${b.perPrice.toFixed(2)}
                    </span>
                    <span className="text-[11px] text-foreground/70 font-bold lowercase tracking-wide">
                      /each
                    </span>
                  </div>

                  {/* Daily + Free shipping */}
                  <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
                    <span className="inline-flex items-baseline gap-0.5 tabular-nums leading-none rounded-full bg-rose-deep/10 px-2 py-[3px]">
                      <span className="text-[11.5px] font-extrabold text-rose-deep">
                        ${b.daily.toFixed(2)}
                      </span>
                      <span className="text-[9.5px] font-bold text-rose-deep/85 tracking-wide">
                        /day
                      </span>
                    </span>
                    {b.qty >= 2 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-rose-deep px-2 py-[3px] text-[9px] font-extrabold uppercase tracking-wider text-white">
                        <Truck className="w-2.5 h-2.5" strokeWidth={3} />
                        Free Shipping
                      </span>
                    )}
                  </div>
                </div>
              </div>

            </button>
          );
        })}
      </div>



      {/* Help me choose — minimal trigger */}
      <HelpMeChoose onPick={setSel} hideTrigger />

      {/* Subscribe & Save toggle — compact */}
      <button
        type="button"
        onClick={() => setSubscribe((v) => !v)}
        aria-pressed={subscribe}
        className={`group relative w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-left transition-all duration-200 ${
          subscribe
            ? "bg-soft-pink/50 border-2 border-dashed border-rose-deep"
            : "bg-background border-2 border-dashed border-foreground/20 hover:border-rose-deep/50"
        }`}
      >
        <div
          className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
            subscribe ? "border-rose-deep bg-background" : "border-foreground/30 bg-background"
          }`}
        >
          {subscribe && <Check className="w-3 h-3 text-rose-deep" strokeWidth={3.5} />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-display text-[13.5px] font-extrabold text-foreground leading-tight">
            Save More With Automatic Refills
          </div>
          <div className="text-[11px] text-foreground/65 leading-snug mt-0.5">
            Zero Commitment <span className="text-foreground/40">|</span> Cancel Anytime
          </div>
        </div>
      </button>




      {/* Main CTA — Bold primary with auto-shimmer */}
      <button
        id="bundle-cta"
        type="button"
        onClick={handleAddToCart}
        className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-b from-rose-deep to-[#a8364a] text-white py-4 px-4 shadow-[0_8px_18px_-10px_rgba(190,55,75,0.55)] ring-1 ring-rose-deep/60 hover:-translate-y-0.5 hover:shadow-[0_12px_22px_-10px_rgba(190,55,75,0.7)] active:translate-y-0 transition-all duration-200"
      >
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
        <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/15" />
        <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/25 blur-md animate-shimmer-loop" />
        <span className="relative flex items-center justify-center gap-2 whitespace-nowrap">
          <span className="text-[16px] font-extrabold tracking-[0.16em] uppercase leading-none">
            Start Now
          </span>
          <span className="text-[16px] font-extrabold leading-none text-amber-300">
            ${selected.total.toFixed(2)}
          </span>
          <span className="text-[12px] text-white/55 line-through font-semibold leading-none">
            ${selected.totalCompare.toFixed(2)}
          </span>
        </span>
      </button>

      {/* Social proof + Shipping — pill row, lifted above CTA shadow */}
      <div className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap -mt-1">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-deep/30 bg-background px-3 py-1.5 text-[12px] font-extrabold text-foreground/90 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.12)]">
          <ShieldCheck className="w-3.5 h-3.5 text-rose-deep" strokeWidth={2.6} />
          <span>60 Days Guarantee</span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/35 bg-background px-3 py-1.5 text-[12px] font-extrabold text-emerald-800 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.12)]">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>Ship By 24 Hour</span>
        </span>
      </div>


      {/* Expert quote — image left, name/role/stars + quote on right */}
      <figure className="rounded-xl border border-rose-deep/20 bg-gradient-to-br from-soft-pink/45 via-cream to-soft-pink/30 p-3 sm:p-3.5 shadow-[0_6px_18px_-10px_rgba(190,55,75,0.35)]">
        <div className="flex items-start gap-3">
          <div className="relative flex-shrink-0">
            <img
              src={expertImg}
              alt="Dr. Sarah Mitchell, Gut Health Expert"
              loading="lazy"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <BadgeCheck className="absolute -bottom-0.5 -right-0.5 w-4 h-4 text-sky-500 fill-white" strokeWidth={2.5} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap leading-none">
              <span className="text-[12.5px] font-extrabold text-foreground leading-none">Dr. Sarah Mitchell</span>
              <span className="inline-flex items-center gap-px">
                {[0,1,2,3,4].map((i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" strokeWidth={0} />
                ))}
              </span>
            </div>
            <div className="text-[10.5px] font-semibold text-foreground/65 leading-none mt-1">Gut Health Expert</div>
            <blockquote className="mt-2 text-[12.5px] leading-snug text-foreground/85">
              <span className="text-rose-deep font-bold">"</span>The cleanest gut-balancing formula I've recommended in years. Most patients see real results after <strong className="text-rose-deep font-extrabold">3+ weeks</strong> — consistency is key.<span className="text-rose-deep font-bold">"</span>
            </blockquote>
          </div>
        </div>
      </figure>



      {/* FAQ — compact, ultra-tight, single hairline between rows */}
      <div className="pt-2">
        <div className="flex items-end justify-between mb-3">
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-rose-deep">
              Quick Answers
            </div>
            <h4 className="text-[19px] md:text-[20px] font-extrabold text-foreground leading-tight mt-1">
              Frequently Asked <span className="text-rose-deep">Questions</span>
            </h4>
          </div>
          <span className="text-[11px] text-muted-foreground font-semibold whitespace-nowrap pb-1">
            {FAQ.length + (showMoreFaq ? FAQ_EXTRA.length : 0)} Q&amp;A
          </span>
        </div>
        <div className="border-t border-border">
          {[...FAQ, ...(showMoreFaq ? FAQ_EXTRA : [])].map((f, i) => {
            const open = openFaq === i;
            return (
              <div
                key={f.q}
                className={`border-b border-border ${open ? "bg-soft-pink/25" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-2 px-1 py-3.5 text-left"
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    <span className="text-[18px] leading-none flex-shrink-0">{f.emoji}</span>
                    <span className="text-[15px] md:text-[15.5px] font-bold text-foreground leading-snug">
                      {f.q}
                    </span>
                  </span>
                  <span
                    className={`text-rose-deep text-[18px] leading-none font-bold transition-transform duration-200 flex-shrink-0 ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pl-[30px] pr-2 pb-3.5 text-[14px] text-foreground/75 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={() => setShowMoreFaq((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-full border border-rose-deep/30 bg-soft-pink/40 hover:bg-soft-pink/60 px-5 py-2.5 text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-rose-deep shadow-[0_2px_8px_-4px_rgba(190,55,75,0.35)] transition-colors"
          >
            {showMoreFaq ? "Show less" : "Read more FAQ →"}
          </button>
        </div>
      </div>






      {/* FAQ end sentinel for sticky ATC */}
      <div id="faq-end" aria-hidden="true" />

    </div>
  );
}
