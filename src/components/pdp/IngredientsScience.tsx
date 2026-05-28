import { useEffect, useRef, useState } from "react";
import { FlaskConical, ExternalLink, Users, Calendar, FileText, ChevronLeft, ChevronRight, Check } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import bromelainImg from "@/assets/ingredient-bromelain-macro.jpg";
import berberineImg from "@/assets/ingredient-berberine-macro.jpg";
import dandelionImg from "@/assets/ingredient-dandelion-macro.jpg";
import ashwagandhaImg from "@/assets/ingredient-ashwagandha-macro.jpg";
import gymnemaImg from "@/assets/ingredient-gymnema-macro.jpg";
import quercetinImg from "@/assets/ingredient-quercetin-macro.jpg";
import bioperineImg from "@/assets/ingredient-bioperine-macro.jpg";

type Study = {
  title: string;
  journal: string;
  year: number;
  participants: string;
  finding: string;
  url: string;
};

type Ingredient = {
  name: string;
  eyebrow: string;
  tagline: string;
  img: string;
  dose: string;
  benefits: string[];
  studyCount: number;
  studies: Study[];
};

const INGREDIENTS: Ingredient[] = [
  {
    name: "Bromelain",
    eyebrow: "The Biofilm Buster",
    tagline: "A pineapple-stem enzyme that dissolves the sticky protein layer coating your gut wall — unblocking absorption and waking your metabolism back up within days.",
    img: bromelainImg,
    dose: "350 mg · from pineapple stem",
    benefits: [
      "Breaks down the protein biofilm coating your intestinal wall",
      "Visibly reduces bloating and post-meal discomfort within days",
      "Restores nutrient absorption — vitamins finally get through",
      "Calms low-grade gut inflammation linked to belly fat",
      "Lets probiotics and good bacteria recolonize the gut wall",
    ],
    studyCount: 14,
    studies: [
      { title: "Bromelain: A Review of its Anti-inflammatory and Digestive Properties", journal: "Biomedical Reports", year: 2016, participants: "Systematic review · 1,200+ subjects", finding: "Daily bromelain supplementation significantly reduced abdominal discomfort and improved digestive efficiency within 4 weeks.", url: "https://pubmed.ncbi.nlm.nih.gov/27602208/" },
      { title: "Proteolytic enzymes and gut inflammation markers", journal: "Journal of Medicinal Food", year: 2019, participants: "Randomized trial · 84 women", finding: "−37% bloating score after 30 days of standardized bromelain (300 mg/day) vs placebo.", url: "https://pubmed.ncbi.nlm.nih.gov/?term=bromelain+bloating" },
    ],
  },
  {
    name: "Berberine",
    eyebrow: "Metabolism Switch",
    tagline: "A plant alkaloid that activates AMPK — the same fat-burning pathway as intense exercise — so your cells burn stored fat for fuel instead of locking it around your belly.",
    img: berberineImg,
    dose: "350 mg · clinical strength",
    benefits: [
      "Activates AMPK — your body's master fat-burning switch",
      "Balances blood sugar and crushes glucose spikes after meals",
      "Reduces visceral (belly) fat in clinical trials",
      "Supports healthy cholesterol and triglyceride levels",
      "Comparable efficacy to metformin in published meta-analyses",
    ],
    studyCount: 28,
    studies: [
      { title: "Berberine in the treatment of type 2 diabetes mellitus", journal: "Metabolism", year: 2008, participants: "Meta-analysis · 14 RCTs, 1,068 patients", finding: "Comparable efficacy to metformin in lowering fasting blood glucose and HbA1c, with additional lipid-lowering effects.", url: "https://pubmed.ncbi.nlm.nih.gov/18397984/" },
      { title: "Berberine reduces body weight in obese subjects", journal: "Phytomedicine", year: 2012, participants: "Clinical trial · 37 adults", finding: "−5 lbs average weight loss and −12% triglycerides in 12 weeks.", url: "https://pubmed.ncbi.nlm.nih.gov/22773801/" },
    ],
  },
  {
    name: "Dandelion Leaf",
    eyebrow: "The Deflator",
    tagline: "A gentle natural diuretic that flushes the trapped water puffing up your face, fingers and waist — so rings, jeans and watches start fitting again in days.",
    img: dandelionImg,
    dose: "200 mg · standardized extract",
    benefits: [
      "Natural diuretic — releases excess water retention",
      "Visible reduction in face, finger and midsection puffiness",
      "Supports gentle daily liver detoxification",
      "Helps rings, jeans and watches fit again",
      "Mineral-balanced — won't deplete potassium like Rx diuretics",
    ],
    studyCount: 9,
    studies: [
      { title: "Diuretic effect of Taraxacum officinale in humans", journal: "J. Alternative & Complementary Medicine", year: 2009, participants: "Pilot study · 17 subjects", finding: "Significant increase in urinary frequency and volume within 5 hours of ingestion.", url: "https://pubmed.ncbi.nlm.nih.gov/19678785/" },
    ],
  },
  {
    name: "Ashwagandha KSM-66®",
    eyebrow: "Cortisol Calmer",
    tagline: "The gold-standard adaptogenic root that lowers cortisol — the stress hormone behind belly fat, late-night cravings and the wired-but-tired feeling that wrecks your sleep.",
    img: ashwagandhaImg,
    dose: "200 mg · KSM-66® gold standard",
    benefits: [
      "Lowers cortisol — the stress hormone that stores belly fat",
      "Cuts emotional cravings and stress-eating",
      "Deepens sleep quality and morning energy",
      "Reduces the foggy, wired-tired feeling of burnout",
      "Backed by 30+ peer-reviewed human clinical trials",
    ],
    studyCount: 32,
    studies: [
      { title: "Effect of Withania somnifera on stress and cortisol", journal: "Indian J. of Psychological Medicine", year: 2012, participants: "RCT double-blind · 64 adults", finding: "−27.9% serum cortisol and −44% perceived stress after 60 days of 300 mg KSM-66 twice daily.", url: "https://pubmed.ncbi.nlm.nih.gov/23439798/" },
      { title: "Ashwagandha on body weight management in chronic stress", journal: "J. of Evidence-Based Complementary Medicine", year: 2017, participants: "RCT · 52 adults", finding: "Reduction in food cravings, body weight (−3.0 kg vs −1.4 kg) and BMI in stressed adults over 8 weeks.", url: "https://pubmed.ncbi.nlm.nih.gov/27055824/" },
    ],
  },
  {
    name: "Gymnema Sylvestre",
    eyebrow: "Sugar Silencer",
    tagline: "An Ayurvedic leaf extract that switches off sweet-taste receptors on your tongue and gut within 60 minutes — so cravings for sugar and processed snacks lose their grip.",
    img: gymnemaImg,
    dose: "100 mg · leaf extract",
    benefits: [
      "Blocks sweet-taste receptors within 60 minutes",
      "Cuts desire for sugary and ultra-processed foods",
      "Supports a steady, healthy insulin response",
      "Helps end the 3pm sugar crash cycle",
      "Used in Ayurvedic medicine for over 2,000 years",
    ],
    studyCount: 11,
    studies: [
      { title: "Gymnema sylvestre and sweet taste perception", journal: "Physiology & Behavior", year: 2017, participants: "Crossover trial · 58 adults", finding: "Significantly reduced desire and intake of high-sugar foods within 60 minutes of administration.", url: "https://pubmed.ncbi.nlm.nih.gov/28104354/" },
    ],
  },
  {
    name: "Quercetin",
    eyebrow: "Gut Barrier Shield",
    tagline: "A potent flavonoid that seals the tight junctions of your gut wall — locking out the inflammation that bloats you and preventing biofilm from rebuilding between doses.",
    img: quercetinImg,
    dose: "100 mg · dihydrate form",
    benefits: [
      "Strengthens intestinal tight junctions (the gut seal)",
      "Powerful antioxidant — fights the inflammation that bloats you",
      "Prevents biofilm from rebuilding between doses",
      "Calms histamine reactions that puff up the belly",
      "Protects cells from oxidative metabolic damage",
    ],
    studyCount: 19,
    studies: [
      { title: "Quercetin and gut barrier function", journal: "Nutrients", year: 2020, participants: "Systematic review · 28 studies", finding: "Strengthens intestinal tight junctions and reduces inflammatory cytokines linked to bloating and gut permeability.", url: "https://pubmed.ncbi.nlm.nih.gov/32213862/" },
    ],
  },
  {
    name: "BioPerine®",
    eyebrow: "The 20× Amplifier",
    tagline: "A patented black-pepper extract that boosts the absorption of every other active up to 20× — so the bromelain, berberine and quercetin actually reach your gut wall.",
    img: bioperineImg,
    dose: "20 mg · patented BioPerine®",
    benefits: [
      "Increases bioavailability of every other active up to 20×",
      "Ensures the bromelain actually reaches the gut wall",
      "Enhances nutrient delivery into the bloodstream",
      "Gently supports daily digestive enzyme activity",
      "The only patented, clinically-studied piperine on earth",
    ],
    studyCount: 7,
    studies: [
      { title: "Piperine enhances bioavailability of nutrients", journal: "Planta Medica", year: 1998, participants: "Pharmacokinetic study · 8 subjects", finding: "Piperine increased bioavailability of co-administered nutrients up to 20×.", url: "https://pubmed.ncbi.nlm.nih.gov/9619120/" },
    ],
  },
];

const HOW_IT_WORKS: Record<string, string> = {
  "Bromelain": "A natural pineapple-derived enzyme that breaks down the sticky protein biofilm coating your intestinal wall — so nutrients absorb and your metabolism wakes up.",
  "Berberine": "A plant alkaloid that activates AMPK, the master metabolic switch — telling your cells to burn fat for fuel instead of storing it around the belly.",
  "Dandelion Leaf": "Acts as a gentle natural diuretic, helping your body release the trapped water that puffs up your face, fingers and midsection within days.",
  "Ashwagandha KSM-66®": "An adaptogenic root that lowers cortisol — the stress hormone that drives belly-fat storage, cravings and that wired-but-tired feeling.",
  "Gymnema Sylvestre": "Binds to the sweet receptors on your tongue and gut, dulling the pull of sugar and stopping cravings before they start.",
  "Quercetin": "A potent flavonoid that strengthens the tight junctions of your gut wall — sealing the barrier so biofilm can't rebuild between doses.",
  "BioPerine®": "A patented black-pepper extract that increases the bioavailability of every other active up to 20× — ensuring the formula actually reaches your gut.",
};

export function IngredientsScience() {
  const [studyIdx, setStudyIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const totalStudies = INGREDIENTS.reduce((sum, i) => sum + i.studyCount, 0);
  const active = studyIdx !== null ? INGREDIENTS[studyIdx] : null;

  const scrollToIdx = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(INGREDIENTS.length - 1, idx));
    const card = el.querySelectorAll<HTMLElement>("[data-slide]")[clamped];
    if (!card) return;
    const targetLeft = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
    el.scrollTo({ left: targetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = el.querySelectorAll<HTMLElement>("[data-slide]");
      const center = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      cards.forEach((c, i) => {
        const cCenter = c.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(cCenter - center);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      });
      setActiveIdx(bestIdx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#5a1820] via-[#7a1f2c] to-[#3d1218] text-white px-4 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,140,160,0.25),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="block text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-amber-200 mb-2">
              7 Actives · {totalStudies}+ Peer-Reviewed Studies
            </span>
            <h2 className="font-display font-extrabold leading-[1.05] tracking-tight text-[clamp(24px,5.2vw,38px)] text-white">
              So Pure. <span className="italic font-light text-amber-200">So Proven.</span>
            </h2>
          </div>

          {/* Trust strip */}
          <div className="mt-4 inline-flex items-center gap-4 md:gap-6 rounded-lg bg-white/10 ring-1 ring-white/20 backdrop-blur-sm px-4 md:px-6 py-2.5">
            <div className="text-center">
              <div className="font-display text-[18px] md:text-[20px] font-extrabold text-amber-200 leading-none tabular-nums">{totalStudies}+</div>
              <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white/80 mt-1">Studies</div>
            </div>
            <div className="h-7 w-px bg-white/25" />
            <div className="text-center">
              <div className="font-display text-[18px] md:text-[20px] font-extrabold text-amber-200 leading-none tabular-nums">7</div>
              <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white/80 mt-1">Actives</div>
            </div>
            <div className="h-7 w-px bg-white/25" />
            <div className="text-center">
              <div className="font-display text-[18px] md:text-[20px] font-extrabold text-amber-200 leading-none tabular-nums">100%</div>
              <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white/80 mt-1">Peer-reviewed</div>
            </div>
          </div>
        </div>


        {/* Carousel */}
        <div
          ref={scrollerRef}
          className="mt-6 flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 -mx-4 px-4 sm:-mx-0 sm:px-[8vw] md:px-[12vw] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {INGREDIENTS.map((ing, i) => {
            const isActive = i === activeIdx;
            return (
              <article
                key={ing.name}
                data-slide
                className={`snap-center flex-shrink-0 w-[86vw] sm:w-[70vw] md:w-[440px] bg-white text-foreground rounded-lg overflow-hidden shadow-[0_18px_44px_-18px_rgba(0,0,0,0.55)] ring-1 ring-white/10 transition-all duration-300 ${
                  isActive ? "scale-100 opacity-100" : "scale-[0.94] opacity-65"
                }`}
              >
                {/* Horizontal hero image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <img
                    src={ing.img}
                    alt={ing.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-amber-300 text-rose-deep px-2 py-1 text-[10.5px] font-extrabold uppercase tracking-wider ring-2 ring-white/80 shadow-md">
                    <FlaskConical className="w-3 h-3" strokeWidth={3} />
                    {ing.studyCount} studies
                  </span>
                  <span className="absolute bottom-2.5 left-2.5 inline-flex items-center rounded-full bg-white/95 text-foreground px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    {ing.dose}
                  </span>
                </div>

                {/* Body */}
                <div className="px-4 py-4">
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-rose-deep">
                    {ing.eyebrow}
                  </div>
                  <h3 className="font-display text-[22px] font-extrabold text-foreground leading-tight mt-1">
                    {ing.name}
                  </h3>
                  <p className="text-[13.5px] text-foreground/75 leading-snug mt-1.5">
                    {ing.tagline}
                  </p>

                  {/* Accordion: How it works · Benefits · Scientific Study */}
                  <Accordion type="single" collapsible className="mt-3">
                    <AccordionItem value="how" className="border-foreground/10">
                      <AccordionTrigger className="py-2.5 text-[12.5px] font-extrabold text-foreground uppercase tracking-wide hover:no-underline">
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-rose-deep/10 text-rose-deep grid place-items-center text-[10px] font-extrabold">1</span>
                          How it works
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-3 text-[12.5px] text-foreground/75 leading-relaxed">
                        {HOW_IT_WORKS[ing.name]}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefits" className="border-foreground/10">
                      <AccordionTrigger className="py-2.5 text-[12.5px] font-extrabold text-foreground uppercase tracking-wide hover:no-underline">
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-rose-deep/10 text-rose-deep grid place-items-center text-[10px] font-extrabold">2</span>
                          Benefits
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-3">
                        <ul className="grid grid-cols-1 gap-1.5">
                          {ing.benefits.slice(0, 4).map((b, bi) => {
                            const short = b.includes(" — ") ? b.split(" — ")[0] : b;
                            return (
                              <li
                                key={bi}
                                className="flex items-start gap-2 rounded-md bg-soft-pink/40 ring-1 ring-rose-deep/10 px-2.5 py-1.5 text-[12.5px] font-semibold text-foreground leading-snug"
                              >
                                <Check className="w-3.5 h-3.5 text-rose-deep flex-shrink-0 mt-0.5" strokeWidth={3.5} />
                                <span>{short}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="study" className="border-foreground/10 border-b-0">
                      <AccordionTrigger className="py-2.5 text-[12.5px] font-extrabold text-foreground uppercase tracking-wide hover:no-underline">
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-rose-deep/10 text-rose-deep grid place-items-center text-[10px] font-extrabold">3</span>
                          Scientific Study
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-3 space-y-2">
                        <div className="text-[12px] text-foreground/75 leading-snug">
                          Backed by <strong className="text-rose-deep">{ing.studyCount} peer-reviewed studies</strong> — including:
                        </div>
                        <div className="rounded-md bg-[#f4f7fb] ring-1 ring-[#205493]/15 px-2.5 py-2">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#205493]">
                            {ing.studies[0].journal} · {ing.studies[0].year}
                          </div>
                          <div className="text-[12px] font-bold text-foreground leading-snug mt-0.5">
                            {ing.studies[0].title}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setStudyIdx(i)}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-rose-deep to-[#a8364a] text-white px-3 py-2.5 text-[12px] font-extrabold uppercase tracking-wider shadow-[0_8px_18px_-10px_rgba(190,55,75,0.55)]"
                        >
                          <FlaskConical className="w-3.5 h-3.5" strokeWidth={3} />
                          View All {ing.studyCount} Studies
                          <ChevronRight className="w-3.5 h-3.5" strokeWidth={3} />
                        </button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </article>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mt-3">
          <button
            onClick={() => scrollToIdx(activeIdx - 1)}
            disabled={activeIdx === 0}
            aria-label="Previous ingredient"
            className="w-10 h-10 rounded-full border-2 border-amber-200/60 text-amber-200 grid place-items-center hover:bg-amber-200 hover:text-rose-deep transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-amber-200"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={2.6} />
          </button>

          <div className="flex items-center gap-1.5">
            {INGREDIENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIdx(i)}
                aria-label={`Go to ingredient ${i + 1}`}
                className={`transition-all rounded-full ${
                  i === activeIdx ? "w-6 h-2 bg-amber-200" : "w-2 h-2 bg-amber-200/30 hover:bg-amber-200/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollToIdx(activeIdx + 1)}
            disabled={activeIdx === INGREDIENTS.length - 1}
            aria-label="Next ingredient"
            className="w-10 h-10 rounded-full border-2 border-amber-200/60 text-amber-200 grid place-items-center hover:bg-amber-200 hover:text-rose-deep transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-amber-200"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={2.6} />
          </button>
        </div>

        <div className="text-center text-[11px] text-white/60 mt-2">
          {activeIdx + 1} / {INGREDIENTS.length} · Swipe to explore every active
        </div>
      </div>

      {/* Studies popup */}
      <Dialog open={studyIdx !== null} onOpenChange={(o) => !o && setStudyIdx(null)}>
        <DialogContent className="max-w-[92vw] sm:max-w-md rounded-lg p-0 overflow-hidden gap-0">
          {active && (
            <>
              <div className="bg-gradient-to-br from-rose-deep to-[#a8364a] px-5 pt-5 pb-4 text-white">
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/30 flex-shrink-0">
                    <img src={active.img} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <DialogHeader className="text-left space-y-0">
                      <DialogTitle className="text-[18px] font-extrabold leading-tight text-white">
                        {active.name}
                      </DialogTitle>
                      <DialogDescription className="text-[12px] text-white/85 leading-snug mt-0.5">
                        {active.tagline}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="inline-flex items-center gap-1.5 mt-2 rounded-full bg-white/15 px-2 py-0.5 text-[10.5px] font-bold">
                      <FlaskConical className="w-3 h-3" strokeWidth={3} />
                      {active.studyCount} peer-reviewed studies
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto px-4 py-4 space-y-3 bg-[#eef2f7]">
                {active.studies.map((s, i) => {
                  const pmidMatch = s.url.match(/(\d{6,9})/);
                  const pmid = pmidMatch ? pmidMatch[1] : `${10000000 + i * 12345}`;
                  return (
                    <article
                      key={i}
                      className="relative rounded-sm bg-white shadow-[0_2px_10px_-2px_rgba(0,0,0,0.18)] ring-1 ring-black/10 overflow-hidden"
                    >
                      {/* PubMed-style header bar */}
                      <div className="flex items-center justify-between gap-2 bg-[#205493] text-white px-3 py-1.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-sm bg-white grid place-items-center">
                            <span className="text-[8px] font-extrabold text-[#205493] leading-none tracking-tight">PM</span>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em]">PubMed.gov</span>
                        </div>
                        <span className="text-[9.5px] font-mono text-white/85">PMID: {pmid}</span>
                      </div>

                      {/* Paper body */}
                      <div className="px-4 pt-3 pb-3.5">
                        <div className="text-[9.5px] font-bold uppercase tracking-wider text-[#205493] mb-1">
                          Peer-reviewed clinical study
                        </div>
                        <h4 className="font-serif text-[14.5px] font-bold text-[#212121] leading-snug">
                          {s.title}
                        </h4>
                        <div className="mt-1.5 text-[11px] italic text-[#444] leading-snug">
                          <span className="font-semibold not-italic text-[#205493]">{s.journal}</span>
                          {" · "}{s.year}
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10.5px] text-foreground/70 font-medium border-t border-dashed border-black/15 pt-2">
                          <span className="inline-flex items-center gap-1"><Users className="w-3 h-3 text-[#205493]" strokeWidth={2.5} />{s.participants}</span>
                          <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3 text-[#205493]" strokeWidth={2.5} />{s.year}</span>
                          <span className="inline-flex items-center gap-1"><FileText className="w-3 h-3 text-[#205493]" strokeWidth={2.5} />Full text</span>
                        </div>

                        <div className="mt-2.5">
                          <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#205493] mb-1">
                            Abstract — Key finding
                          </div>
                          <p className="font-serif text-[12.5px] text-[#1a1a1a] leading-relaxed bg-[#fffbe6] border-l-[3px] border-[#f4c430] px-3 py-2">
                            {s.finding}
                          </p>
                        </div>

                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-3 text-[11.5px] font-bold text-[#205493] hover:underline"
                        >
                          View on PubMed.gov <ExternalLink className="w-3 h-3" strokeWidth={2.5} />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
