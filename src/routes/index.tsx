import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star, ShoppingCart, Menu, Users, RotateCcw, Trophy, FileText, ShieldCheck, Check } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { CartDrawer } from "@/components/pdp/CartDrawer";
import { useCart } from "@/context/CartContext";

import { Gallery } from "@/components/pdp/Gallery";
import { BundleSelector } from "@/components/pdp/BundleSelector";
import { StickyAtc } from "@/components/pdp/StickyAtc";

import { SocialProofSection } from "@/components/pdp/SocialProofSection";

import { SymptomsChecklist } from "@/components/pdp/SymptomsChecklist";
import { UGCReviews } from "@/components/pdp/UGCReviews";
import { IngredientsScience } from "@/components/pdp/IngredientsScience";
import { DataBased } from "@/components/pdp/DataBased";
import { TrustpilotReviews } from "@/components/pdp/TrustpilotReviews";
import { TimelineResults } from "@/components/pdp/TimelineResults";
import { DoctorBoard } from "@/components/pdp/DoctorBoard";
import { GuaranteeOffer } from "@/components/pdp/GuaranteeOffer";
import { FinalFAQ } from "@/components/pdp/FinalFAQ";
import { TrustFaces } from "@/components/pdp/TrustFaces";
import { FacesStrip } from "@/components/pdp/FacesStrip";
import { ProductSpotlight } from "@/components/pdp/ProductSpotlight";
import { BodyAwakening } from "@/components/pdp/BodyAwakening";
import { VersusComparison } from "@/components/pdp/VersusComparison";
import { BeyondBloating } from "@/components/pdp/BeyondBloating";
import { ClogVsClear } from "@/components/pdp/ClogVsClear";
import { PurityCertified } from "@/components/pdp/PurityCertified";
import { SectionDivider } from "@/components/pdp/SectionDivider";
import { BRAND, PRODUCT, BENEFIT_ICONS } from "@/components/pdp/data";
import logoImg from "@/assets/logo-text.svg";
import packagingImg from "@/assets/packaging-bottle.png";


export const Route = createFileRoute("/")({
  component: PDP,
  head: () => ({
    meta: [
      { title: `${PRODUCT} — Clear Gut Biofilm, Feel Lighter` },
      { name: "description", content: `${BRAND} Gut Reset Ritual: the only formula designed to clear gut biofilm. Helps your metabolism work like it used to. Join 157,430+ women.` },
    ],
  }),
});

const BENEFITS = [
  { title: "Deep Gut Cleanse", subtitle: "+89% than others", iconIndex: 0 },
  { title: "Wake Up Metabolism", subtitle: "Burn calories again", iconIndex: 2 },
  { title: "Clears Biofilm", subtitle: "Root cause, cleared", iconIndex: 1 },
  { title: "Feel Yourself Again", subtitle: "Like it used to be", iconIndex: 4 },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

function PDP() {
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <main className="min-h-screen bg-background text-foreground pb-24">
      {/* Top trust bar — single-line on mobile, branded rose gradient */}
      <div className="bg-gradient-to-r from-rose-deep via-[#a8364a] to-rose-deep text-white">
        <div className="max-w-7xl mx-auto px-2 py-2.5 grid grid-cols-3 gap-0.5 divide-x divide-white/20">
          <div className="flex items-center justify-center gap-1 px-1 min-w-0">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300 flex-shrink-0" />
            <span className="text-[11px] sm:text-[13px] font-bold whitespace-nowrap leading-none">
              <strong className="font-extrabold">4.7</strong>/5 Rated
            </span>
          </div>
          <div className="flex items-center justify-center gap-1 px-1 min-w-0">
            <Users className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2.4} />
            <span className="text-[11px] sm:text-[13px] font-bold whitespace-nowrap leading-none">
              <strong className="font-extrabold">3M+</strong> Sold in USA
            </span>
          </div>
          <div className="flex items-center justify-center gap-1 px-1 min-w-0">
            <RotateCcw className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2.4} />
            <span className="text-[11px] sm:text-[13px] font-bold whitespace-nowrap leading-none">
              Easy Returns
            </span>
          </div>
        </div>
      </div>









      {/* Nav */}
      <header className="border-b border-border bg-background sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3.5 grid grid-cols-3 items-center">
          <div className="flex items-center">
            <button aria-label="Menu" className="md:hidden text-foreground"><Menu className="w-6 h-6" /></button>
            <nav className="hidden md:flex gap-5 text-xs text-foreground/80">
              <a href="#" className="hover:text-primary">Shop All</a>
              <a href="#" className="hover:text-primary">Affiliate Program</a>
              <a href="#" className="hover:text-primary">Track my order</a>
            </nav>
          </div>
          <div className="flex items-center justify-center">
            <img src={logoImg} alt={BRAND} className="h-[17px] md:h-[19px] w-auto object-contain select-none" draggable={false} />
          </div>
          <div className="flex items-center justify-end gap-4 text-xs text-foreground/80">
            <a href="#" className="hidden md:inline hover:text-primary">Contact</a>
            <a href="#" className="hidden md:inline hover:text-primary">About us</a>
            <button onClick={() => setCartOpen(true)} className="relative" aria-label="Open cart">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-deep text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero — gallery flush to top bar */}
      <section className="max-w-7xl mx-auto px-4 pt-0 pb-6 grid lg:grid-cols-2 gap-y-2 lg:gap-10">
        <div className="min-w-0">
          <Gallery />
        </div>
        <div className="space-y-4 min-w-0 -mt-2 lg:mt-0 pt-2">
          {/* View Label Ingredients — centered, full width */}
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-[12px] font-extrabold uppercase tracking-[0.14em] border border-foreground/25 bg-background text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <FileText className="w-4 h-4" strokeWidth={2.2} />
                View Label Ingredients
              </button>
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-1.5rem)] max-w-[calc(100vw-1.5rem)] sm:w-auto sm:max-w-3xl md:max-w-4xl max-h-[92vh] sm:max-h-[92vh] overflow-y-auto rounded-2xl p-4 sm:p-7 md:p-8 bg-background [&>button.opacity-70]:hidden">
              {/* Prominent close X — top-right */}
              <DialogClose
                aria-label="Close"
                className="absolute right-3 top-3 z-20 w-9 h-9 rounded-full bg-rose-deep text-white grid place-items-center shadow-lg ring-2 ring-white hover:bg-foreground transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </DialogClose>

              <DialogHeader className="px-1 pr-10">
                <DialogTitle className="text-[17px] sm:text-[22px] font-extrabold text-left sm:text-center">Supplement Facts</DialogTitle>
                <DialogDescription className="text-left sm:text-center text-[11.5px] sm:text-[12.5px]">
                  Serving Size: 2 capsules · 30 servings
                </DialogDescription>
              </DialogHeader>

              <div className="mt-2.5 grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-3 md:gap-5 items-stretch">
                {/* LEFT — Supplement label */}
                <div className="rounded-xl border-2 border-foreground/80 overflow-hidden bg-white">
                  <div className="bg-foreground text-background px-3 py-1.5 sm:py-2.5 text-[11.5px] sm:text-[13px] font-extrabold uppercase tracking-wide text-center">
                    Supplement Facts
                  </div>
                  <ul className="divide-y divide-foreground/15">
                    {[
                      { n: "Bromelain", a: "350 mg" },
                      { n: "Berberine HCl", a: "350 mg" },
                      { n: "Dandelion Leaf", a: "200 mg" },
                      { n: "Ashwagandha KSM-66®", a: "200 mg" },
                      { n: "Gymnema Sylvestre", a: "100 mg" },
                      { n: "Quercetin Dihydrate", a: "100 mg" },
                      { n: "BioPerine®", a: "20 mg" },
                    ].map((i) => (
                      <li key={i.n} className="px-3 py-[7px] sm:py-3 flex items-center justify-between gap-3">
                        <span className="text-[12px] sm:text-[15px] font-bold text-foreground leading-tight">{i.n}</span>
                        <span className="text-[12px] sm:text-[15px] font-extrabold text-rose-deep whitespace-nowrap tabular-nums">{i.a}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="px-3 py-2 border-t border-foreground/15 text-[10.5px] sm:text-[11.5px] text-foreground/75 leading-snug">
                    <strong className="text-foreground">Free from:</strong> Gluten · Soy · Dairy · GMO
                  </div>
                </div>

                {/* RIGHT — Packaging photo, hidden on mobile to keep dialog one-screen */}
                <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-soft-pink/40 via-cream to-soft-pink-2/30 rounded-xl p-4 min-h-[260px]">
                  <img
                    src={packagingImg}
                    alt="Nuora packaging bottle"
                    loading="lazy"
                    className="max-w-full max-h-[420px] object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.2)]"
                  />
                </div>
              </div>

              {/* 3rd party tested strip */}
              <div className="mt-2 rounded-lg bg-soft-pink/45 border border-rose-deep/25 px-3 py-1.5 sm:py-2 flex items-center gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-rose-deep flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" strokeWidth={2.4} />
                </div>
                <div className="text-[11.5px] sm:text-[13px] text-foreground leading-snug">
                  <strong className="text-rose-deep">3rd-party tested</strong> · FDA-registered facility
                </div>
              </div>

              <DialogClose asChild>
                <button
                  type="button"
                  className="mt-2 w-full rounded-lg bg-foreground text-background py-2.5 sm:py-3 text-[12px] sm:text-[12.5px] font-extrabold uppercase tracking-[0.18em] hover:bg-rose-deep transition-colors"
                >
                  Close Nutrition Label
                </button>
              </DialogClose>
            </DialogContent>
          </Dialog>

          {/* Reviews — single line: stars · +247k Reviews | 3M+ Sold in USA */}
          <div className="flex items-center gap-x-2 whitespace-nowrap text-[12.5px]">
            <Stars />
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("reviews");
                if (!el) return;
                const startY = window.scrollY;
                const targetY = el.getBoundingClientRect().top + window.scrollY - 72;
                const distance = targetY - startY;
                const duration = Math.min(1400, Math.max(700, Math.abs(distance) * 0.6));
                const startTime = performance.now();
                const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
                const step = (now: number) => {
                  const p = Math.min(1, (now - startTime) / duration);
                  window.scrollTo(0, startY + distance * ease(p));
                  if (p < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
              }}
              className="group flex items-baseline gap-1 cursor-pointer underline decoration-rose-deep/40 decoration-dotted underline-offset-[3px] hover:decoration-rose-deep hover:decoration-solid transition-all"
              aria-label="Read 247k reviews"
            >
              <span className="font-extrabold text-rose-deep tabular-nums">+247k</span>
              <span className="font-semibold text-foreground/75 uppercase tracking-wide text-[10.5px]">Reviews</span>
              <span aria-hidden className="ml-0.5 inline-block text-rose-deep animate-nudge-x group-hover:translate-x-0.5 transition-transform">›</span>
            </a>
            <span className="inline-block w-px h-4 bg-rose-deep/50 flex-shrink-0" aria-hidden />
            <div className="flex items-baseline gap-1">
              <span className="font-extrabold text-rose-deep tabular-nums">3M+</span>
              <span className="font-semibold text-foreground/75 uppercase tracking-wide text-[10.5px]">Sold in USA</span>
              <span aria-hidden>🇺🇸</span>
            </div>
          </div>




          <h1 className="font-display font-extrabold text-foreground leading-[1.05] tracking-tight whitespace-nowrap text-[clamp(20px,5.8vw,40px)] mb-1.5">
            {PRODUCT}
          </h1>
          <p className="text-[13.5px] md:text-[14.5px] text-foreground/70 leading-snug max-w-md">
            The daily ritual that clears gut biofilm, debloats, and makes you feel like yourself again.
          </p>

          {/* Best Seller + Sold this month */}
          <div className="flex items-center flex-wrap gap-x-2 gap-y-1.5 -mt-1">
            <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 border border-amber-300 px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide">
              <Trophy className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
              #1 Best Seller
            </span>
            <span className="relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide text-white bg-gradient-to-r from-rose-deep to-[#a8364a] border border-rose-deep/60 shadow-[0_4px_12px_-4px_rgba(190,55,75,0.55)] overflow-hidden">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-200" />
              </span>
              <span className="text-amber-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">+59k</span>
              <span>Sold This Month</span>
            </span>
          </div>


          {/* Benefits — vertical stack, larger type for optimal readability (50+ target) */}
          <div className="flex flex-col gap-2 -mt-1">
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5 hover:bg-muted/40 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-rose-deep/10 flex items-center justify-center flex-shrink-0 ring-1 ring-rose-deep/20">
                  <Check className="w-4 h-4 text-rose-deep" strokeWidth={3.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[15px] md:text-[16px] font-extrabold text-foreground leading-[1.2] tracking-tight">
                    {b.title}
                  </div>
                  <div className="text-[13px] md:text-[13.5px] text-muted-foreground leading-[1.3] mt-0.5">
                    {b.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div data-bundle-selector>
            <BundleSelector />
          </div>
        </div>
      </section>

      {/* SECTION 2 — Community + FB Comments */}
      <FacesStrip />
      <SocialProofSection />

      <SectionDivider from="white" to="cream" variant="tide" />


      {/* SECTION 5 — Symptoms checklist */}
      <SymptomsChecklist />

      <SectionDivider from="cream" to="pink" variant="cloud" accent />

      {/* SECTION 6 — Real Women, Real Stories (UGC) */}
      <UGCReviews />

      <SectionDivider from="pink" to="rose-dark" variant="silk" />

      {/* SECTION 7 — Specific Ingredients + Scientific Studies */}
      <IngredientsScience />

      <SectionDivider from="rose-dark" to="white" variant="dune" accent />

      {/* SECTION 9 — Other proven benefits (What Women Didn't Expect) */}
      <BeyondBloating />

      <SectionDivider from="white" to="cream" variant="tide" />

      {/* SECTION 10 — What Women Actually Experience */}
      <DataBased />

      <SectionDivider from="cream" to="white" variant="cloud" />

      {/* SECTION 11 — Why Nothing Else Has Ever Worked */}
      <VersusComparison />

      <SectionDivider from="white" to="cream" variant="silk" accent />

      {/* SECTION 12 — See Why 247,000+ Women Trust This Ritual */}
      <TrustpilotReviews />

      <SectionDivider from="cream" to="white" variant="tide" />

      {/* SECTION 13 — What Happens, Week By Week */}
      <TimelineResults />

      <SectionDivider from="white" to="cream" variant="dune" accent />




      {/* SECTION 16 — 60-Day Guarantee + Offer */}
      <GuaranteeOffer />

      {/* SECTION 17 — Final FAQ */}
      <FinalFAQ />

      {/* SECTION 18 — Over 3 Million Women Have Started… */}
      <TrustFaces />







      {/* Footer */}
      <footer className="bg-gradient-to-br from-rose-deep via-[#a8364a] to-rose-deep text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <img src={logoImg} alt={BRAND} className="h-6 w-auto object-contain mb-3 brightness-0 invert" />
            <p className="text-xs opacity-80">Note: All content provided on our website is not medical advice. For medical concerns consult your healthcare provider.</p>
          </div>
          <div>
            <div className="font-semibold mb-3 text-amber-200 uppercase tracking-wider text-[11px]">Product Info</div>
            <ul className="space-y-2 opacity-90">
              <li>Track My Order</li><li>Features</li><li>Pricing</li><li>Testimonials</li><li>Before & After {BRAND}</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-amber-200 uppercase tracking-wider text-[11px]">Company</div>
            <ul className="space-y-2 opacity-90">
              <li>About us</li><li>Contact Us</li><li>Manage Subscription</li><li>Join Affiliate Program</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-amber-200 uppercase tracking-wider text-[11px]">Legal</div>
            <ul className="space-y-2 opacity-90">
              <li>Privacy Policy</li><li>Refund Policy</li><li>Shipping Policy</li><li>Terms of service</li><li>Subscription Policy</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Moved below footer — Doctor Advisory Board */}
      <DoctorBoard />

      {/* Moved below footer — 99% Pure. Certified by Analysis. */}
      <PurityCertified />



      {/* Post-footer — When biofilm builds up, your whole body feels it */}
      <ClogVsClear />

      {/* Post-footer — Refund guarantee notice (moved out of bundle area) */}
      <section className="bg-background py-8 px-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3 rounded-xl border border-rose-deep/30 bg-gradient-to-r from-soft-pink/55 via-soft-pink/40 to-soft-pink/55 px-4 sm:px-6 py-4 sm:py-5 shadow-[0_8px_24px_-12px_rgba(190,55,75,0.35)]">
          <div className="relative w-14 h-14 flex-shrink-0 rounded-full bg-gradient-to-br from-rose-deep to-[#a8364a] flex items-center justify-center text-white shadow-[0_6px_14px_-4px_rgba(190,55,75,0.65)] ring-2 ring-amber-300/70">
            <ShieldCheck className="w-7 h-7" strokeWidth={2.6} />
          </div>
          <span className="flex-1 text-left text-[14px] sm:text-[15px] text-foreground leading-snug">
            Only <strong className="text-rose-deep font-extrabold text-[17px]">0.3% of customers</strong> requested a refund using our <strong className="text-foreground font-extrabold">60-day guarantee</strong>.
          </span>
        </div>
      </section>


      {/* Post-footer parking — kept for now, will be removed later */}
      <ProductSpotlight />
      <BodyAwakening />

      <StickyAtc />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </main>
  );
}
