import { useState, useMemo, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, Check, Sparkles, TrendingUp, BadgeCheck } from "lucide-react";
import expertSofia from "@/assets/expert-sofia.jpg";

type Question = {
  key: string;
  label: string;
  type: "choice" | "number";
  unit?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  options?: { v: string; label: string }[];
};

const QUESTIONS: Question[] = [
  {
    key: "age", label: "What's your age range?", type: "choice",
    options: [
      { v: "u35", label: "Under 35" },
      { v: "35_45", label: "35 – 45" },
      { v: "45_55", label: "45 – 55" },
      { v: "55p", label: "55+" },
    ],
  },
  { key: "weight", label: "Your current weight?", type: "number", unit: "lbs", min: 80, max: 400, placeholder: "e.g. 165" },
  { key: "height", label: "Your height?", type: "number", unit: "in", min: 48, max: 84, placeholder: "e.g. 65" },
  {
    key: "goal", label: "How much do you want to lose?", type: "choice",
    options: [
      { v: "lt10", label: "Less than 10 lbs" },
      { v: "10_20", label: "10 – 20 lbs" },
      { v: "20_30", label: "20 – 30 lbs" },
      { v: "gt30", label: "30+ lbs" },
    ],
  },
  {
    key: "problem", label: "What's your main concern?", type: "choice",
    options: [
      { v: "bloat", label: "Bloating & digestion" },
      { v: "weight", label: "Stubborn belly fat" },
      { v: "energy", label: "Low energy & cravings" },
      { v: "all", label: "All of the above" },
    ],
  },
  {
    key: "activity", label: "How active are you?", type: "choice",
    options: [
      { v: "low", label: "Mostly sedentary" },
      { v: "mid", label: "Light activity 1–2x/week" },
      { v: "high", label: "Active 3+ times/week" },
    ],
  },
  {
    key: "tried", label: "Have you tried other supplements?", type: "choice",
    options: [
      { v: "no", label: "No, this is my first" },
      { v: "few", label: "Yes, a few" },
      { v: "many", label: "Many — nothing worked" },
    ],
  },
];

function recommend(answers: Record<string, string>): { qty: 3 | 4; months: number; lossLbs: number } {
  let s = 0;
  if (["45_55", "55p"].includes(answers.age)) s += 2;
  else if (answers.age === "35_45") s += 1;
  if (["all", "weight"].includes(answers.problem)) s += 2;
  else if (answers.problem === "bloat") s += 1;
  if (answers.goal === "gt30") s += 3;
  else if (answers.goal === "20_30") s += 2;
  else if (answers.goal === "10_20") s += 1;
  if (answers.tried === "many") s += 2;
  else if (answers.tried === "few") s += 1;
  if (answers.activity === "low") s += 1;

  const qty: 3 | 4 = s >= 5 ? 4 : 3;
  const goalLbs = answers.goal === "gt30" ? 35 : answers.goal === "20_30" ? 25 : answers.goal === "10_20" ? 15 : 8;
  const months = qty;
  // realistic projected loss: ~60-80% of goal across the supply window
  const lossLbs = Math.round(goalLbs * (qty === 4 ? 0.8 : 0.65));
  return { qty, months, lossLbs };
}

function buildTimeline(qty: 3 | 4, lossLbs: number) {
  // milestones: week 1, week 2-4, month 2, month 3 (+ month 4 if 4-pack)
  const base = [
    { when: "Week 1", pct: 8, label: "Less bloating, lighter feel" },
    { when: "Week 2–4", pct: 30, label: "Belly flattens, energy up" },
    { when: "Month 2", pct: 60, label: "Visible inches off waist" },
    { when: "Month 3", pct: 85, label: "Clothes fit better, momentum" },
  ];
  if (qty === 4) base.push({ when: "Month 4", pct: 100, label: "Lasting results, locked in" });
  return base.map((m) => ({ ...m, lbs: Math.round((lossLbs * m.pct) / 100) }));
}

export function HelpMeChoose({ onPick, hideTrigger = false }: { onPick: (id: string) => void; hideTrigger?: boolean }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [numDraft, setNumDraft] = useState("");

  // Open via global event (used by sticky ATC Sofia avatar)
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("help:open", handler);
    return () => window.removeEventListener("help:open", handler);
  }, []);

  const reset = () => {
    setStep(0);
    setAnswers({});
    setNumDraft("");
  };

  const total = QUESTIONS.length;
  const current = QUESTIONS[step];

  const advance = (key: string, v: string) => {
    const next = { ...answers, [key]: v };
    setAnswers(next);
    setNumDraft("");
    if (step < total - 1) setStep((s) => s + 1);
    else setStep(total);
  };

  const result = useMemo(() => (step === total ? recommend(answers) : null), [step, total, answers]);
  const timeline = useMemo(() => (result ? buildTimeline(result.qty, result.lossLbs) : []), [result]);

  const applyRecommendation = () => {
    if (result) onPick(String(result.qty));
    setOpen(false);
    setTimeout(reset, 300);
  };

  return (
    <>
      {!hideTrigger && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full flex items-center gap-3 rounded-xl border border-rose-deep/15 bg-gradient-to-r from-soft-pink/40 via-cream/60 to-soft-pink/40 hover:from-soft-pink/60 hover:to-soft-pink/60 px-3 py-2.5 transition-colors text-left"
        >
          <div className="relative flex-shrink-0">
            <img
              src={expertSofia}
              alt="Dr. Sophia Bennett, Gut Balance Expert"
              width={48}
              height={48}
              loading="lazy"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <BadgeCheck
              className="absolute -bottom-0.5 -right-0.5 w-4 h-4 text-white fill-[#1877F2]"
              strokeWidth={2.5}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-[12.5px] font-extrabold text-foreground truncate">
                Dr. Sophia Bennett
              </span>
              <span className="text-[9.5px] font-bold uppercase tracking-wider text-rose-deep/80">
                · Gut Expert
              </span>
            </div>
            <span className="block text-[11.5px] text-foreground/70 leading-snug">
              Not sure? <span className="font-bold text-rose-deep">Ask me</span> — 7 questions, tailored solution.
            </span>
          </div>
          <ArrowRight className="w-4 h-4 flex-shrink-0 text-rose-deep" strokeWidth={2.5} />
        </button>
      )}

      <Dialog
        open={open}
        onOpenChange={(o) => {
          setOpen(o);
          if (!o) setTimeout(reset, 300);
        }}
      >
        <DialogContent className="max-w-md p-0 overflow-hidden rounded-2xl max-h-[92vh] overflow-y-auto">
          <div className="bg-gradient-to-br from-rose-deep to-amber-500 px-5 py-4 text-white sticky top-0 z-10">
            <DialogHeader>
              <DialogTitle className="text-white flex items-center gap-2 text-[16px] font-extrabold">
                <Sparkles className="w-4 h-4" /> Find Your Perfect Bundle
              </DialogTitle>
              <DialogDescription className="text-white/85 text-[12px]">
                7 quick questions — we'll build your personal plan.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-3 flex gap-1">
              {QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i <= Math.min(step, total - 1) ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="px-5 py-5 bg-background">
            {step < total ? (
              <div>
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  Question {step + 1} of {total}
                </div>
                <h3 className="text-[16px] font-extrabold text-foreground mb-3 leading-tight">
                  {current.label}
                </h3>

                {step === 0 && (
                  <div className="mb-3 flex items-start gap-2.5 rounded-2xl border border-rose-deep/15 bg-gradient-to-r from-soft-pink/40 to-cream/60 p-2.5 animate-fade-in">
                    <div className="relative flex-shrink-0">
                      <img
                        src={expertSofia}
                        alt="Dr. Sophia Bennett"
                        width={44}
                        height={44}
                        loading="lazy"
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-sm"
                      />
                      <BadgeCheck
                        className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 text-white fill-[#1877F2]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-0.5">
                        <span className="text-[11.5px] font-extrabold text-foreground">Dr. Sophia Bennett</span>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-rose-deep/80">· Gut Expert</span>
                      </div>
                      <p className="text-[11px] text-foreground/75 leading-snug italic">
                        "Pick the answer that fits you best — I'll build your plan from here."
                      </p>
                    </div>
                  </div>
                )}

                {current.type === "choice" && current.options && (
                  <div className="space-y-2">
                    {current.options.map((o) => (
                      <button
                        key={o.v}
                        type="button"
                        onClick={() => advance(current.key, o.v)}
                        className="w-full text-left rounded-xl border-2 border-border hover:border-rose-deep hover:bg-rose-deep/5 px-4 py-3 text-[13.5px] font-semibold text-foreground transition-all flex items-center justify-between group"
                      >
                        <span>{o.label}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-rose-deep group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                )}

                {current.type === "number" && (
                  <div>
                    <div className="relative">
                      <input
                        type="number"
                        inputMode="numeric"
                        value={numDraft}
                        onChange={(e) => setNumDraft(e.target.value)}
                        placeholder={current.placeholder}
                        min={current.min}
                        max={current.max}
                        autoFocus
                        className="w-full rounded-xl border-2 border-border focus:border-rose-deep focus:outline-none px-4 py-3 pr-14 text-[15px] font-bold text-foreground"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-bold uppercase text-muted-foreground">
                        {current.unit}
                      </span>
                    </div>
                    <button
                      type="button"
                      disabled={!numDraft || Number(numDraft) < (current.min ?? 0) || Number(numDraft) > (current.max ?? 9999)}
                      onClick={() => advance(current.key, numDraft)}
                      className="mt-3 w-full rounded-xl bg-foreground text-background py-3 px-4 font-extrabold uppercase tracking-[0.14em] text-[13px] flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
                    >
                      Continue <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                    </button>
                  </div>
                )}

                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => { setStep((s) => s - 1); setNumDraft(""); }}
                    className="mt-4 text-[12px] text-muted-foreground hover:text-foreground underline"
                  >
                    ← Back
                  </button>
                )}
              </div>
            ) : result ? (
              <div>
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                    <Check className="w-6 h-6 text-emerald-700" strokeWidth={3} />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-rose-deep mb-1">
                    Your personalized plan
                  </div>
                  <h3 className="text-[22px] font-extrabold text-foreground leading-tight">
                    {result.qty}-Bottle Reset Protocol
                  </h3>
                  <p className="text-[12.5px] text-muted-foreground mt-1.5 leading-snug px-2">
                    Based on your profile, a <strong className="text-foreground">{result.months}-month supply</strong> gives your gut the time to fully reset — projected{" "}
                    <strong className="text-rose-deep">~{result.lossLbs} lbs</strong> off.
                  </p>
                </div>

                {/* Chart */}
                <div className="mt-4 rounded-xl bg-gradient-to-b from-soft-pink/40 to-cream border border-rose-deep/15 p-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <TrendingUp className="w-3.5 h-3.5 text-rose-deep" strokeWidth={2.8} />
                    <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-foreground">
                      Your projected results
                    </span>
                  </div>

                  {/* You are here progress bar */}
                  <div className="mb-3">
                    <div className="relative h-2 rounded-full bg-foreground/10 overflow-hidden">
                      <div className="absolute inset-y-0 left-0 w-[6%] bg-gradient-to-r from-rose-deep to-amber-400 rounded-full" />
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-background" />
                    </div>
                    <div className="mt-1.5 flex justify-between items-start text-[10px] font-bold">
                      <div className="flex flex-col items-start">
                        <span className="text-rose-deep uppercase tracking-wider">You are here</span>
                        <span className="text-foreground/60 font-semibold">Today · Day 0</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-emerald-700 uppercase tracking-wider">You'll be here</span>
                        <span className="text-foreground/60 font-semibold">
                          In {result.months} months · −{result.lossLbs} lbs
                        </span>
                      </div>
                    </div>
                  </div>


                  {/* Bar chart */}
                  <div className="flex items-end justify-between gap-1.5 h-24 mb-1">
                    {timeline.map((m, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="text-[9.5px] font-extrabold text-rose-deep leading-none">
                          -{m.lbs}lb
                        </div>
                        <div className="w-full rounded-t-md bg-gradient-to-t from-rose-deep to-amber-400 shadow-sm" style={{ height: `${m.pct}%` }} />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between gap-1">
                    {timeline.map((m, i) => (
                      <div key={i} className="flex-1 text-center text-[8.5px] font-bold text-foreground/70 leading-tight">
                        {m.when}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline rows */}
                <div className="mt-3 space-y-1.5">
                  {timeline.map((m, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11.5px]">
                      <div className="w-[68px] flex-shrink-0 font-extrabold text-rose-deep">{m.when}</div>
                      <div className="flex-1 text-foreground/80 leading-snug">{m.label}</div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={applyRecommendation}
                  className="mt-4 w-full rounded-xl bg-foreground text-background py-3 px-4 font-extrabold uppercase tracking-[0.14em] text-[13px] flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform"
                >
                  Select {result.qty} Bottles
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </button>

                <button
                  type="button"
                  onClick={reset}
                  className="mt-2 w-full text-[12px] text-muted-foreground hover:text-foreground underline"
                >
                  Retake quiz
                </button>
              </div>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
