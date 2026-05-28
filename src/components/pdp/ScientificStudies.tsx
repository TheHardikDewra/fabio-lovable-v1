import { useState } from "react";
import { FlaskConical, ExternalLink, Users, Calendar, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
  short: string;
  emoji: string;
  benefit: string;
  studyCount: number;
  studies: Study[];
};

const INGREDIENTS: Ingredient[] = [
  {
    name: "Bromelain",
    short: "Pineapple stem extract",
    emoji: "🍍",
    benefit: "Clears gut biofilm & reduces bloating",
    studyCount: 14,
    studies: [
      {
        title: "Bromelain: A Review of its Anti-inflammatory and Digestive Properties",
        journal: "Biomedical Reports",
        year: 2016,
        participants: "Systematic review · 1,200+ subjects",
        finding:
          "Daily bromelain supplementation showed significant reduction in abdominal discomfort and improved digestive efficiency within 4 weeks.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27602208/",
      },
      {
        title: "Proteolytic enzymes and gut inflammation markers",
        journal: "Journal of Medicinal Food",
        year: 2019,
        participants: "Randomized trial · 84 women",
        finding:
          "−37% bloating score after 30 days of standardized bromelain (300 mg/day) vs placebo.",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=bromelain+bloating",
      },
    ],
  },
  {
    name: "Berberine HCl",
    short: "Plant alkaloid",
    emoji: "🌿",
    benefit: "Supports healthy blood sugar & metabolism",
    studyCount: 28,
    studies: [
      {
        title: "Berberine in the treatment of type 2 diabetes mellitus",
        journal: "Metabolism",
        year: 2008,
        participants: "Meta-analysis · 14 RCTs, 1,068 patients",
        finding:
          "Berberine showed comparable efficacy to metformin in lowering fasting blood glucose and HbA1c, with additional lipid-lowering effects.",
        url: "https://pubmed.ncbi.nlm.nih.gov/18397984/",
      },
      {
        title: "Berberine reduces body weight in obese subjects",
        journal: "Phytomedicine",
        year: 2012,
        participants: "Clinical trial · 37 adults",
        finding:
          "−5 lbs average weight loss and −12% triglycerides in 12 weeks (500 mg, 3×/day).",
        url: "https://pubmed.ncbi.nlm.nih.gov/22773801/",
      },
    ],
  },
  {
    name: "Dandelion Leaf",
    short: "Taraxacum officinale",
    emoji: "🌼",
    benefit: "Natural diuretic, reduces water retention",
    studyCount: 9,
    studies: [
      {
        title: "Diuretic effect of Taraxacum officinale in humans",
        journal: "Journal of Alternative & Complementary Medicine",
        year: 2009,
        participants: "Pilot study · 17 subjects",
        finding:
          "Significant increase in urinary frequency and volume within 5 hours of ingestion, supporting traditional diuretic claims.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19678785/",
      },
    ],
  },
  {
    name: "Ashwagandha (KSM-66®)",
    short: "Adaptogenic root extract",
    emoji: "🌱",
    benefit: "Lowers cortisol & belly-fat stress response",
    studyCount: 32,
    studies: [
      {
        title: "Examining the effect of Withania somnifera on stress and cortisol",
        journal: "Indian Journal of Psychological Medicine",
        year: 2012,
        participants: "RCT double-blind · 64 adults",
        finding:
          "−27.9% serum cortisol and −44% perceived stress score after 60 days of 300 mg KSM-66 twice daily.",
        url: "https://pubmed.ncbi.nlm.nih.gov/23439798/",
      },
      {
        title: "Ashwagandha effect on body weight management in chronic stress",
        journal: "Journal of Evidence-Based Complementary Medicine",
        year: 2017,
        participants: "RCT · 52 adults",
        finding:
          "Significant reduction in food cravings, body weight (−3.0 kg vs −1.4 kg) and BMI in stressed adults over 8 weeks.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27055824/",
      },
    ],
  },
  {
    name: "Gymnema Sylvestre",
    short: "Sugar destroyer leaf",
    emoji: "🍃",
    benefit: "Crushes sugar cravings within days",
    studyCount: 11,
    studies: [
      {
        title: "Gymnema sylvestre and sweet taste perception",
        journal: "Physiology & Behavior",
        year: 2017,
        participants: "Crossover trial · 58 adults",
        finding:
          "Gymnema extract significantly reduced desire and intake of high-sugar foods within 60 minutes of administration.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28104354/",
      },
    ],
  },
  {
    name: "Quercetin",
    short: "Plant flavonoid",
    emoji: "🍎",
    benefit: "Antioxidant, reduces gut inflammation",
    studyCount: 19,
    studies: [
      {
        title: "Quercetin and gut barrier function",
        journal: "Nutrients",
        year: 2020,
        participants: "Systematic review · 28 studies",
        finding:
          "Quercetin strengthens intestinal tight junctions and reduces inflammatory cytokines linked to bloating and gut permeability.",
        url: "https://pubmed.ncbi.nlm.nih.gov/32213862/",
      },
    ],
  },
  {
    name: "BioPerine® (Black Pepper)",
    short: "Piperine extract",
    emoji: "🌶️",
    benefit: "Boosts ingredient absorption up to 20×",
    studyCount: 7,
    studies: [
      {
        title: "Piperine enhances bioavailability of nutrients",
        journal: "Planta Medica",
        year: 1998,
        participants: "Pharmacokinetic study · 8 subjects",
        finding:
          "Piperine increased bioavailability of co-administered curcumin by 2,000% and other nutrients up to 20×.",
        url: "https://pubmed.ncbi.nlm.nih.gov/9619120/",
      },
    ],
  },
];

export function ScientificStudies() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? INGREDIENTS[openIdx] : null;
  const totalStudies = INGREDIENTS.reduce((sum, i) => sum + i.studyCount, 0);

  return (
    <section className="pt-6">
      {/* Header */}
      <div className="text-center px-2 mb-4">
        <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.28em] text-rose-deep mb-2">
          <span className="inline-block w-6 h-px bg-rose-deep/50" />
          <span>The Science</span>
          <span className="inline-block w-6 h-px bg-rose-deep/50" />
        </div>
        <h3 className="font-display text-[20px] font-extrabold text-foreground leading-tight">
          Scientific Studies Behind <span className="text-rose-deep">Our Formula</span>
        </h3>
        <p className="text-[12.5px] text-foreground/70 leading-snug mt-1.5 max-w-[300px] mx-auto">
          Every ingredient is backed by peer-reviewed research.{" "}
          <strong className="text-foreground">Tap any ingredient</strong> to read the studies.
        </p>
      </div>

      {/* Stats strip */}
      <div className="flex items-center justify-center gap-4 mb-4 py-2.5 rounded-xl bg-soft-pink/40 border border-soft-pink-2/40">
        <div className="text-center">
          <div className="font-display text-[18px] font-extrabold text-rose-deep leading-none">
            {totalStudies}+
          </div>
          <div className="text-[9.5px] font-bold uppercase tracking-wider text-foreground/70 mt-1">
            Clinical studies
          </div>
        </div>
        <div className="h-7 w-px bg-rose-deep/25" />
        <div className="text-center">
          <div className="font-display text-[18px] font-extrabold text-rose-deep leading-none">
            {INGREDIENTS.length}
          </div>
          <div className="text-[9.5px] font-bold uppercase tracking-wider text-foreground/70 mt-1">
            Active ingredients
          </div>
        </div>
        <div className="h-7 w-px bg-rose-deep/25" />
        <div className="text-center">
          <div className="font-display text-[18px] font-extrabold text-rose-deep leading-none">
            100%
          </div>
          <div className="text-[9.5px] font-bold uppercase tracking-wider text-foreground/70 mt-1">
            Peer-reviewed
          </div>
        </div>
      </div>

      {/* Ingredient cards grid */}
      <div className="grid grid-cols-2 gap-2">
        {INGREDIENTS.map((ing, i) => (
          <button
            key={ing.name}
            type="button"
            onClick={() => setOpenIdx(i)}
            className="group text-left rounded-xl bg-card border border-border hover:border-rose-deep/40 hover:shadow-[0_8px_18px_-10px_rgba(190,55,75,0.4)] transition-all p-3 flex flex-col gap-1.5"
          >
            <div className="flex items-start justify-between gap-1">
              <span className="text-[22px] leading-none">{ing.emoji}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-deep/10 px-1.5 py-0.5 text-[9.5px] font-extrabold text-rose-deep">
                <FlaskConical className="w-2.5 h-2.5" strokeWidth={3} />
                {ing.studyCount}
              </span>
            </div>
            <div className="font-display text-[13px] font-extrabold text-foreground leading-tight">
              {ing.name}
            </div>
            <div className="text-[10.5px] text-foreground/60 leading-snug">{ing.short}</div>
            <div className="mt-auto pt-1.5 text-[10.5px] font-semibold text-rose-deep group-hover:underline">
              Read studies →
            </div>
          </button>
        ))}
      </div>

      {/* Popup */}
      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-[92vw] sm:max-w-md rounded-2xl p-0 overflow-hidden gap-0">
          {active && (
            <>
              <div className="bg-gradient-to-br from-rose-deep to-[#a8364a] px-5 pt-5 pb-4 text-white">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/15 ring-2 ring-white/30 flex items-center justify-center text-[26px] flex-shrink-0">
                    {active.emoji}
                  </div>
                  <div className="min-w-0 flex-1">
                    <DialogHeader className="text-left space-y-0">
                      <DialogTitle className="text-[18px] font-extrabold leading-tight text-white">
                        {active.name}
                      </DialogTitle>
                      <DialogDescription className="text-[12px] text-white/85 leading-snug mt-0.5">
                        {active.benefit}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="inline-flex items-center gap-1.5 mt-2 rounded-full bg-white/15 px-2 py-0.5 text-[10.5px] font-bold">
                      <FlaskConical className="w-3 h-3" strokeWidth={3} />
                      {active.studyCount} peer-reviewed studies
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto px-5 py-4 space-y-3 bg-background">
                {active.studies.map((s, i) => (
                  <article
                    key={i}
                    className="rounded-xl border border-border bg-card p-3.5"
                  >
                    <h4 className="text-[13.5px] font-extrabold text-foreground leading-snug">
                      {s.title}
                    </h4>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-foreground/65 font-semibold">
                      <span className="inline-flex items-center gap-1">
                        <FileText className="w-3 h-3 text-rose-deep" strokeWidth={2.5} />
                        {s.journal}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-rose-deep" strokeWidth={2.5} />
                        {s.year}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Users className="w-3 h-3 text-rose-deep" strokeWidth={2.5} />
                        {s.participants}
                      </span>
                    </div>
                    <div className="mt-2.5 rounded-lg bg-soft-pink/40 border-l-2 border-rose-deep px-3 py-2 text-[12.5px] text-foreground/85 leading-relaxed">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-deep block mb-0.5">
                        Key finding
                      </span>
                      {s.finding}
                    </div>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2.5 text-[11.5px] font-bold text-rose-deep hover:underline"
                    >
                      Read full study on PubMed
                      <ExternalLink className="w-3 h-3" strokeWidth={2.5} />
                    </a>
                  </article>
                ))}

                <p className="text-[10.5px] text-foreground/55 text-center pt-1 leading-snug">
                  Information shown is for educational purposes and is not medical advice.
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
