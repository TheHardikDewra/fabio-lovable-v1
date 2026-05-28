import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star, ShoppingCart, Truck, Leaf, Calendar, Venus, Check, ShieldCheck, Menu, Users, RotateCcw, Trophy, FileText, ChevronDown } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Countdown } from "@/components/pdp/Countdown";
import { Gallery } from "@/components/pdp/Gallery";
import { BundleSelector } from "@/components/pdp/BundleSelector";
import { StickyAtc } from "@/components/pdp/StickyAtc";
import { Accordion } from "@/components/pdp/Accordion";
import { WeightCalculator } from "@/components/pdp/WeightCalculator";
import { FacebookReviews } from "@/components/pdp/FacebookReviews";
import { BRAND, PRODUCT, BENEFIT_ICONS, TESTIMONIALS, INGREDIENTS, REVIEWS } from "@/components/pdp/data";
import logoImg from "@/assets/logo-text.svg";
import gutAbsorptionImg from "@/assets/gut-absorption-diagram.png";
import labTestingImg from "@/assets/lab-testing-reference.png";

export const Route = createFileRoute("/test-2")({
  component: PDP,
  head: () => ({
    meta: [
      { title: `${PRODUCT} — Clear Gut Biofilm, Feel Lighter` },
      { name: "description", content: `${BRAND} Gut Reset Ritual: the only formula designed to clear gut biofilm. Helps your metabolism work like it used to. Join 157,430+ women.` },
    ],
  }),
});

const BENEFITS = [
  { title: "157k+ Women", subtitle: "Joined the ritual", iconIndex: 0 },
  { title: "Clears Biofilm", subtitle: "Real root cause", iconIndex: 1 },
  { title: "Revives Metabolism", subtitle: "Burn energy again", iconIndex: 2 },
  { title: "Less Bloat Fast", subtitle: "Visible in days", iconIndex: 4 },
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
  const [showMoreFaq, setShowMoreFaq] = useState(false);
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
        <div className="max-w-7xl mx-auto px-4 py-2.5 grid grid-cols-3 items-center">
          <div className="flex items-center">
            <button aria-label="Menu" className="md:hidden text-foreground"><Menu className="w-6 h-6" /></button>
            <nav className="hidden md:flex gap-5 text-xs text-foreground/80">
              <a href="#" className="hover:text-primary">Shop All</a>
              <a href="#" className="hover:text-primary">Affiliate Program</a>
              <a href="#" className="hover:text-primary">Track my order</a>
            </nav>
          </div>
          <div className="flex items-center justify-center">
            <img src={logoImg} alt={BRAND} className="h-[22px] md:h-6 w-auto object-contain select-none" draggable={false} />
          </div>
          <div className="flex items-center justify-end gap-4 text-xs text-foreground/80">
            <a href="#" className="hidden md:inline hover:text-primary">Contact</a>
            <a href="#" className="hidden md:inline hover:text-primary">About us</a>
            <ShoppingCart className="w-5 h-5" />
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
            <DialogContent className="max-w-md sm:max-w-md w-screen h-[100dvh] sm:h-auto max-h-[100dvh] sm:max-h-[85vh] rounded-none sm:rounded-lg overflow-y-auto p-4 sm:p-6">
              <DialogHeader>
                <DialogTitle className="text-xl font-extrabold">Supplement Facts</DialogTitle>
                <DialogDescription>
                  Serving Size: 2 capsules · Servings per Container: 30
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2 rounded-lg border border-border overflow-hidden">
                <div className="bg-foreground text-background px-4 py-2.5 flex items-center justify-between text-[12px] font-extrabold uppercase tracking-wide">
                  <span>Ingredient</span>
                  <span>Amount per Serving</span>
                </div>
                <ul className="divide-y divide-border">
                  {[
                    { n: "Bromelain (from pineapple stem)", a: "350 mg", note: "Clears gut biofilm" },
                    { n: "Berberine HCl", a: "350 mg", note: "Metabolic support" },
                    { n: "Dandelion Leaf Extract", a: "200 mg", note: "Natural diuretic" },
                    { n: "Ashwagandha Root (KSM-66®)", a: "200 mg", note: "Stress / cortisol balance" },
                    { n: "Gymnema Sylvestre", a: "100 mg", note: "Reduces sugar cravings" },
                    { n: "Quercetin Dihydrate", a: "100 mg", note: "Antioxidant protection" },
                    { n: "BioPerine® Black Pepper Extract", a: "20 mg", note: "Boosts absorption 20×" },
                  ].map((i) => (
                    <li key={i.n} className="px-4 py-2.5 flex items-start justify-between gap-3 bg-card">
                      <div className="min-w-0">
                        <div className="text-[13px] font-bold text-foreground leading-tight">{i.n}</div>
                        <div className="text-[11px] text-muted-foreground mt-0.5">{i.note}</div>
                      </div>
                      <div className="text-[13px] font-extrabold text-rose-deep whitespace-nowrap">{i.a}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-3 rounded-lg bg-soft-pink/40 border border-soft-pink-2/60 p-3 text-[12px] text-foreground/80 leading-relaxed">
                <strong className="text-foreground">Other ingredients:</strong> Vegetable cellulose (capsule), rice flour, magnesium stearate (vegetable source).
                <div className="mt-1.5"><strong className="text-foreground">Free from:</strong> Gluten · Soy · Dairy · GMO · Artificial colors</div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-deep" />
                3rd-party tested · Made in an FDA-registered facility
              </div>
            </DialogContent>
          </Dialog>

          {/* Reviews — forced single row */}
          <div className="flex items-center gap-x-2 sm:gap-x-3 whitespace-nowrap text-[13px]">
            <div className="flex items-center gap-1.5">
              <Stars />
              <span className="font-extrabold text-foreground tabular-nums">4.7/5</span>
            </div>
            <span className="inline-block w-px h-4 bg-rose-deep/50 flex-shrink-0" aria-hidden />
            <div className="flex items-baseline gap-1">
              <span className="font-extrabold text-rose-deep tabular-nums">+247k</span>
              <span className="font-semibold text-foreground/75 uppercase tracking-wide text-[10.5px]">Reviews</span>
            </div>
            <span className="inline-block w-px h-4 bg-rose-deep/50 flex-shrink-0" aria-hidden />
            <div className="flex items-baseline gap-1">
              <span className="font-extrabold text-rose-deep tabular-nums">3M+</span>
              <span className="font-semibold text-foreground/75 uppercase tracking-wide text-[10.5px]">Sold in USA</span>
            </div>
          </div>


          <h1 className="font-display font-extrabold text-foreground leading-[1.05] tracking-tight whitespace-nowrap text-[clamp(20px,5.8vw,40px)]">
            {PRODUCT}
          </h1>

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


          {/* Benefits — compact 2-col grid for less vertical space */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-2 hover:bg-muted/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-deep/10 to-amber-500/10 flex items-center justify-center flex-shrink-0 ring-1 ring-rose-deep/10">
                  <img src={BENEFIT_ICONS[b.iconIndex]} alt="" className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[12.5px] font-extrabold text-foreground leading-tight truncate">
                    {b.title}
                  </div>
                  <div className="text-[11px] text-muted-foreground leading-tight mt-0.5 truncate">
                    {b.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>


          <BundleSelector />
        </div>
      </section>


      {/* Testimonial slider strip */}
      <section className="bg-cream py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <div key={t.name} className="bg-card p-5 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <Stars />
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <WeightCalculator />

      {/* Gold testimonial */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <Stars />
          <div className="my-6 text-5xl font-display text-primary">"Gold"</div>
          <div className="space-y-4 text-foreground/80 italic text-base leading-relaxed">
            <p>I used to stand in front of the mirror every morning, sucking in my stomach, wondering why nothing I did made a difference. I'd skip breakfast, drink the green juice, take the probiotics, and by 2pm I'd look six months pregnant.</p>
            <p>After two weeks on {BRAND}, I woke up and realized my face wasn't puffy. My rings fit. I didn't have to unbutton my jeans after lunch.</p>
            <p>I'm not saying it's magic. But for the first time in years, I feel proud of myself. This company is gold for humanity.</p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <img src="https://assets.replocdn.com/projects/3706c0a8-46ea-4150-ae83-f4d3594c1e3d/26fb90fb-01a5-4eb1-9f57-d9257b0a5723" alt="Jennifer M." className="w-14 h-14 rounded-full object-cover" />
            <div className="text-left">
              <div className="font-semibold text-foreground">Jennifer M. | TX</div>
              <div className="text-xs text-primary flex items-center gap-1"><Check className="w-3 h-3" /> Verified Customer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion: details */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <Accordion items={[
          { q: "What's Inside (And Why It Works)", a: (
            <div className="space-y-2">
              <p><strong>• Bromelain (350mg)</strong> — this is the one that clears the buildup. It's an enzyme that breaks down the protein layer coating your gut wall.</p>
              <p><strong>• Berberine (350mg)</strong> — wakes up your metabolism. Research shows it mimics GLP-1 hormones.</p>
              <p><strong>• Dandelion Leaf (200mg)</strong> — gently flushes the water your body's been holding onto.</p>
              <p><strong>• Ashwagandha (200mg)</strong> — helps calm the cortisol response that stores fat around your belly.</p>
              <p><strong>• Gymnema Sylvestre (100mg)</strong> — quiets sugar cravings at the source.</p>
              <p><strong>• Quercetin (100mg)</strong> — keeps the buildup from coming back.</p>
              <p><strong>• Black Pepper Extract (20mg)</strong> — makes everything else absorb 20x better.</p>
            </div>
          )},
          { q: "How does it work?", a: (
            <div className="space-y-2">
              <p>Over time, your gut wall builds up a protein layer called biofilm. It's like plaque on teeth but inside your digestive system.</p>
              <p>{BRAND} works in 3 phases — clearing the biofilm, restoring absorption, then keeping it from coming back.</p>
            </div>
          )},
          { q: "How long until I see results?", a: <p>Most women notice something in the first week — less puffiness, rings fitting looser. Bigger shifts happen around weeks 2-4. By month 2-3, most women feel great.</p> },
          { q: "Shipping and returns", a: <p>Free shipping on orders of 2+ bottles. 60-day money back guarantee. Email us and we refund you — no need to send anything back.</p> },
          { q: "Is it safe to take with other supplements?", a: <p>Yes, all ingredients are natural and well-researched. If pregnant or nursing, check with your doctor first.</p> },
          ...(showMoreFaq ? [
            { q: "How do I take it?", a: <p>2 capsules daily, with or without food. Most women take them in the morning with breakfast for an easy routine.</p> },
            { q: "Will it interfere with my medications?", a: <p>All ingredients are natural and generally well-tolerated. If you're on prescription medication (especially blood sugar or blood pressure meds), check with your doctor before starting.</p> },
            { q: "Can I take it while pregnant or breastfeeding?", a: <p>We don't recommend it during pregnancy or while breastfeeding. Please wait, or consult your OB/GYN first.</p> },
            { q: "Is it vegan and gluten-free?", a: <p>Yes — 100% vegan, gluten-free, soy-free, dairy-free, sugar-free, and non-GMO. Capsules are plant-based cellulose.</p> },
            { q: "Where is it made?", a: <p>Manufactured in the USA in an FDA-registered, GMP-certified facility. Every batch is third-party tested for purity and potency.</p> },
            { q: "Do I need to take it forever?", a: <p>No. Most women do an initial 2-3 month "reset" to clear the biofilm, then move to a maintenance routine. You decide what works for your body.</p> },
          ] : []),
        ]} />
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setShowMoreFaq((v) => !v)}
            className="inline-flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-[0.16em] text-rose-deep hover:text-rose-deep/80 border-b-2 border-rose-deep/40 hover:border-rose-deep pb-0.5 transition-colors"
          >
            {showMoreFaq ? "Show less" : "Read more"}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showMoreFaq ? "rotate-180" : ""}`} strokeWidth={2.6} />
          </button>
        </div>
      </section>


      {/* What happens when */}
      <section className="bg-soft-pink/40 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
            What Happens When Gut Biofilm Is Finally Taken Care Of?
          </h2>
          <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
            <p>Imagine waking up tomorrow and your stomach is flat.</p>
            <p>You put on the jeans you haven't touched in two years. They zip. Easily.</p>
            <p>You catch your reflection and you love what you see.</p>
            <p>You go to brunch. You enjoy your food. And an hour later you're not unbuttoning your pants under the table.</p>
            <p className="font-semibold text-foreground">This is exactly what happens when your gut biofilm is finally dissolved.</p>
          </div>
          <button className="mt-10 bg-primary text-primary-foreground font-bold uppercase px-8 py-4 rounded-xl hover:opacity-90 transition">
            Try {BRAND} Risk-Free
          </button>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-primary" /> 60-Day Money-Back Guarantee
          </div>
        </div>
      </section>

      {/* Inside Each Capsule */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Inside Each Capsule</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              True research. On our mission to help 100+ million ladies. Every ingredient is dosed based on clinical research.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
              {[
                "Therapeutic doses",
                "3rd party tested",
                "FDA registered facility",
                "Sugar-free, vegan & gluten-free",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1 bg-soft-pink-2 text-rose-deep px-3 py-1.5 rounded-full">
                  <Check className="w-4 h-4" /> {t}
                </span>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {INGREDIENTS.map((ing) => (
              <div key={ing.name} className="flex gap-4 p-5 bg-card rounded-2xl border border-border">
                <img src={ing.img} alt={ing.name} className="w-20 h-20 rounded-full object-cover flex-shrink-0 bg-soft-pink" />
                <div>
                  <div className="font-display text-xl text-primary mb-1">{ing.name}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ing.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-cream py-12 px-4 border-y border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { i: Truck, t: "Free Shipping", s: "on orders of 2+ bottles" },
            { i: Leaf, t: "100% Natural", s: "7 research-backed ingredients" },
            { i: Calendar, t: "60-Day Guarantee", s: "try it risk-free" },
            { i: Venus, t: "Made For Women 35+", s: "formulated for your needs" },
          ].map((x) => (
            <div key={x.t}>
              <x.i className="w-10 h-10 mx-auto text-primary mb-2" />
              <div className="font-display text-lg text-foreground">{x.t}</div>
              <div className="text-xs text-muted-foreground">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Week by week */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl text-center text-foreground mb-3">
            What Most Women Experience (Week By Week)
          </h2>
          <p className="text-center text-muted-foreground mb-12">Everyone's different. But after 157,000+ women, we see a pattern.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "Days 1-7 (Quick Wins)", d: "The water weight starts flushing. You notice it in your face first, then your belly. Your jeans button easier." },
              { t: "Weeks 2-4 (The Shift)", d: "The biofilm is clearing. Your gut is absorbing nutrients again. The afternoon bloat stops. Sugar cravings quiet down." },
              { t: "Months 2-3 (New Normal)", d: "Your metabolism is responding. Energy is stable. You stop thinking about your stomach constantly." },
              { t: "Month 6+ (Why Women Never Stop)", d: "You wake up excited to wear what you want. This is why 83.9% of women reorder." },
            ].map((it) => (
              <div key={it.t} className="p-6 bg-soft-pink/40 rounded-2xl">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-3">
                  <Check className="w-5 h-5" />
                </div>
                <div className="font-display text-2xl text-foreground mb-2">{it.t}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why nothing's working - 3 cards */}
      <section className="bg-soft-pink/40 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl text-center text-foreground mb-3">
            Why Nothing's Been Working (New Studies)
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            It's not that you're doing something wrong. There's something else going on...
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "https://assets.replocdn.com/projects/3706c0a8-46ea-4150-ae83-f4d3594c1e3d/63b82521-a563-4a58-ab79-51a9ac673a83", t: "In Your 20s", d: "Your gut wall is clean. Nutrients absorb easily. Your metabolism hums along without you thinking about it." },
              { img: "https://assets.replocdn.com/projects/3706c0a8-46ea-4150-ae83-f4d3594c1e3d/3c66669c-3e65-442d-b7f0-7de0376f2daf", t: "After 35", d: "Years of microplastics, stress, medications, slower digestion create a protein buildup on your gut wall. Like plaque on teeth." },
              { img: "https://assets.replocdn.com/projects/3706c0a8-46ea-4150-ae83-f4d3594c1e3d/cfcf953b-8fce-4223-8969-39d21770a089", t: "The Result", d: "Supplements slide right past. Your body thinks it's starving. You hold onto weight, water, and fat." },
            ].map((c) => (
              <div key={c.t} className="bg-card rounded-2xl overflow-hidden border border-border">
                <img src={c.img} alt={c.t} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <div className="font-display text-2xl text-primary mb-2">{c.t}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real reviews */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl text-center text-foreground mb-3">
            Real Women. Real Reviews. Unfiltered.
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We don't cherry-pick. We don't edit. These are actual reviews from women who tried {BRAND}.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="p-5 bg-card border border-border rounded-2xl">
                <Stars />
                <div className="font-semibold text-foreground mt-2 flex items-center gap-1">
                  {r.name}
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FacebookReviews />



      {/* Innovative approach + stats */}
      <section className="bg-soft-pink/40 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Our innovative approach to help your body</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            We don't just add more stuff to the pile. We clear the biofilm first. Then everything else can finally work.
          </p>
          <div className="max-w-xl mx-auto space-y-3 mb-12 text-left">
            {[
              "Bromelain breaks down the protein buildup",
              "Dandelion flushes the water you've been holding",
              "Your metabolism can finally respond",
              "NOW berberine can actually reach your bloodstream",
            ].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-foreground">{s}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { n: "157,430+", t: `Women who've tried ${BRAND}` },
              { n: "83.9%", t: "Decided to reorder" },
              { n: "91%", t: "Reported less bloating in first 4 weeks*" },
            ].map((s) => (
              <div key={s.n} className="bg-card p-6 rounded-2xl border border-border">
                <div className="font-display text-4xl text-primary mb-2">{s.n}</div>
                <div className="text-sm text-muted-foreground">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="font-display text-3xl md:text-5xl text-center text-foreground mb-3">Questions We Get A Lot</h2>
        <p className="text-center text-muted-foreground mb-10">Everything you need to know about the product and billing.</p>
        <Accordion items={[
          { q: "How is this different from the probiotics/gut supplements I've already tried?", a: <p>Most gut supplements try to add good bacteria. But if your gut wall has buildup blocking absorption, nothing gets through. {BRAND} clears the path first.</p> },
          { q: "How long until I notice something?", a: <p>Most women feel the water weight flush in the first 3-5 days. Deeper metabolism benefits show up around weeks 2-4.</p> },
          { q: "I've tried berberine before and nothing happened. Why would this be different?", a: <p>Berberine on its own doesn't absorb well. {BRAND} uses bromelain to clear the barrier and black pepper extract to increase absorption by up to 20x.</p> },
          { q: "Is it safe to take with my other supplements?", a: <p>Yes, for most people. All ingredients are natural. If on prescription medication, check with your doctor.</p> },
          { q: "What if it doesn't work for me?", a: <p>You get your money back. Full refund within 60 days, no questions.</p> },
          { q: "How do I take it?", a: <p>2 capsules daily, with or without food. Most women take them in the morning with breakfast.</p> },
        ]} />
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl mb-4">Wake Up Tomorrow Without The Puffy Face.</h2>
          <p className="text-lg opacity-90 mb-2">Zip Your Jeans Without Lying Down. Eat Your Food And Actually Enjoy It.</p>
          <p className="opacity-80 text-sm mb-8">60-day guarantee. If it doesn't work, you don't pay.</p>
          <button className="bg-background text-primary font-bold uppercase px-10 py-4 rounded-xl hover:opacity-90 transition">
            Try {PRODUCT} Risk-Free
          </button>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm opacity-90">
            <ShieldCheck className="w-4 h-4" /> 60-Day Money-Back Guarantee
          </div>
          <p className="mt-8 text-xs opacity-70">
            Dermatologist-Approved | Clinically Tested on 1,076+ Patients · Formulated by Alexandra Pierce, OB/GYN
          </p>
        </div>
      </section>

      {/* Reminder: why nutrients don't reach where they matter */}
      <section className="bg-background py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block text-[11px] font-extrabold uppercase tracking-[0.2em] text-rose-deep mb-3">
            The Hidden Problem
          </div>
          <h2 className="font-display text-2xl md:text-4xl text-foreground mb-3 leading-tight">
            When the gut is blocked, nutrients never reach where they matter.
          </h2>
          <p className="text-sm md:text-base text-foreground/70 mb-6 max-w-xl mx-auto">
            Biofilm buildup creates poor absorption — leaving your body running on empty no matter how clean you eat.
          </p>
          <figure className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src={gutAbsorptionImg}
              alt="Diagram showing poor nutrient absorption due to gut biofilm — nutrients not reaching cells"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* Lab Testing / Quality Obsession */}
      <section className="bg-background py-16 px-4 border-t border-border/60">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-[1.05] mb-5">
              We're obsessed with perfecting every batch.
            </h2>
            <p className="text-base text-foreground/70 max-w-md mb-8">
              Every batch is third-party tested for purity, potency and safety — so what's on the label is exactly what reaches your body.
            </p>
            <div className="rounded-2xl border border-border overflow-hidden divide-y divide-border bg-card">
              {[
                "Microbial Testing",
                "Active Ingredients",
                "Heavy Metal Testing",
                "Pesticide Testing",
              ].map((t) => (
                <details key={t} className="group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                    <span className="text-foreground font-medium">{t}</span>
                    <span className="flex items-center gap-3 text-sm text-foreground/70">
                      Passed
                      <span className="w-5 h-5 grid place-items-center text-lg leading-none transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-foreground/70">
                    Independently verified by an ISO-accredited third-party lab. Certificate of Analysis available on request.
                  </div>
                </details>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 aspect-[4/3] bg-muted">
            <img
              src={labTestingImg}
              alt="Lab technician performing third-party quality testing"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>





      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <img src={logoImg} alt={BRAND} className="h-6 w-auto object-contain mb-3 [filter:invert(1)]" />
            <p className="text-xs opacity-70">Note: All content provided on our website is not medical advice. For medical concerns consult your healthcare provider.</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Product Info</div>
            <ul className="space-y-2 opacity-80">
              <li>Track My Order</li><li>Features</li><li>Pricing</li><li>Testimonials</li><li>Before & After {BRAND}</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Company</div>
            <ul className="space-y-2 opacity-80">
              <li>About us</li><li>Contact Us</li><li>Manage Subscription</li><li>Join Affiliate Program</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Legal</div>
            <ul className="space-y-2 opacity-80">
              <li>Privacy Policy</li><li>Refund Policy</li><li>Shipping Policy</li><li>Terms of service</li><li>Subscription Policy</li>
            </ul>
          </div>
        </div>
      </footer>
      <StickyAtc />
    </main>
  );
}
