import { Check, FileText, Microscope, ImageIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function MechanismSections() {
  return (
    <section className="pdp-section-dark">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">

        {/* WHY IT WORKS — subheadline → headline → paragraph → image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="The Root Cause Nobody Talks About"
              title={<>Your gut isn't broken.<br />It's just <span className="text-rose-deep">covered.</span></>}
              description={<>
                Every diet, probiotic and detox you've tried failed for the same reason: a sticky protein layer called <strong className="text-foreground">biofilm</strong> coats your gut wall — blocking absorption, slowing metabolism, and locking water and fat around your midsection.
              </>}
              className="mb-0"
            />
            <p className="text-foreground/75 text-[14px] md:text-[15.5px] leading-relaxed mt-3 max-w-3xl pl-4 md:pl-5 border-l-[3px] border-transparent">
              Clear the layer and your body finally starts working with you again. That's why women feel lighter in days, not months.
            </p>

            {/* Scientific study — biofilm mechanism popup */}
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group mt-4 w-full md:max-w-md flex items-center gap-3 rounded-lg border border-foreground/15 bg-white px-3 py-2.5 text-left transition-all hover:border-rose-deep/40 hover:shadow-[0_4px_14px_-8px_rgba(190,55,75,0.35)]"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-gradient-to-br from-rose-deep/10 to-soft-pink flex items-center justify-center ring-1 ring-rose-deep/15">
                    <Microscope className="w-5 h-5 text-rose-deep" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-rose-deep">Peer-Reviewed Study</span>
                      <span className="inline-flex items-center gap-0.5 rounded-sm bg-emerald-50 px-1 py-px text-[9px] font-extrabold text-emerald-700 ring-1 ring-emerald-600/20">
                        <Check className="w-2 h-2" strokeWidth={4} />
                        PubMed
                      </span>
                    </div>
                    <div className="text-[13px] font-bold text-foreground leading-snug mt-0.5">
                      How gut biofilm blocks your metabolism
                    </div>
                  </div>
                  <span className="flex-shrink-0 text-[11px] font-extrabold uppercase tracking-wider text-rose-deep underline-offset-2 group-hover:underline">
                    Read →
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[92vw] sm:max-w-md rounded-xl p-0 overflow-hidden">
                <div className="bg-gradient-to-br from-rose-deep to-[#a8364a] px-5 pt-5 pb-4 text-white">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2 py-0.5 text-[9.5px] font-extrabold uppercase tracking-[0.16em] ring-1 ring-white/25 backdrop-blur">
                    <FileText className="w-3 h-3" strokeWidth={3} />
                    Clinical Research
                  </div>
                  <DialogHeader className="mt-2 space-y-1 text-left">
                    <DialogTitle className="text-[18px] font-extrabold leading-tight text-white">
                      The Biofilm Mechanism
                    </DialogTitle>
                    <DialogDescription className="text-[12px] text-white/85 leading-snug">
                      Why diets, probiotics & cleanses fail — and what dissolves the layer underneath.
                    </DialogDescription>
                  </DialogHeader>
                </div>

                <div className="px-5 py-4 space-y-3 max-h-[60vh] overflow-y-auto">
                  <p className="text-[13px] leading-relaxed text-foreground/85">
                    In a <strong>2021 peer-reviewed study</strong> (<em>Microorganisms, NIH/PubMed</em>), researchers confirmed that over <strong className="text-rose-deep">80% of chronic gut issues</strong> are linked to a sticky protein layer — <strong>biofilm</strong> — that bacteria build along the intestinal wall.
                  </p>

                  <div className="rounded-lg bg-soft-pink/40 border border-rose-deep/15 p-3">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-rose-deep mb-1.5">How It Works</div>
                    <ol className="space-y-1.5 text-[12.5px] text-foreground/85 leading-snug">
                      <li className="flex gap-2">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-rose-deep text-white text-[9px] font-extrabold flex items-center justify-center mt-0.5">1</span>
                        <span><strong>Biofilm forms</strong> — bacteria seal themselves behind a protein shield, blocking nutrient absorption.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-rose-deep text-white text-[9px] font-extrabold flex items-center justify-center mt-0.5">2</span>
                        <span><strong>Metabolism slows</strong> — water and waste stay trapped, causing bloating, puffiness & stubborn weight.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-rose-deep text-white text-[9px] font-extrabold flex items-center justify-center mt-0.5">3</span>
                        <span><strong>Bromelain dissolves it</strong> — the enzyme breaks the protein matrix so your gut can finally reset.</span>
                      </li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-md bg-cream border border-border p-2 text-center">
                      <div className="text-[16px] font-extrabold text-rose-deep tabular-nums leading-none">80%</div>
                      <div className="text-[9px] text-foreground/65 mt-0.5 leading-tight">Of gut issues biofilm-linked</div>
                    </div>
                    <div className="rounded-md bg-cream border border-border p-2 text-center">
                      <div className="text-[16px] font-extrabold text-rose-deep tabular-nums leading-none">350mg</div>
                      <div className="text-[9px] text-foreground/65 mt-0.5 leading-tight">Clinical bromelain dose</div>
                    </div>
                    <div className="rounded-md bg-cream border border-border p-2 text-center">
                      <div className="text-[16px] font-extrabold text-rose-deep tabular-nums leading-none">2-4w</div>
                      <div className="text-[9px] text-foreground/65 mt-0.5 leading-tight">Avg. dissolution window</div>
                    </div>
                  </div>

                  <p className="text-[10.5px] text-foreground/55 italic leading-snug">
                    Source: Microorganisms, MDPI/NIH (2021) — "Bacterial Biofilms in the Human Gastrointestinal Tract". Results vary by individual.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div>
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-soft-pink/60 via-cream to-soft-pink-2/40 aspect-square flex items-center justify-center ring-1 ring-rose-deep/10">
              <div className="flex flex-col items-center gap-2 text-foreground/40">
                <ImageIcon className="w-10 h-10" strokeWidth={1.5} />
                <span className="text-[11px] font-bold uppercase tracking-wider">Image Placeholder</span>
              </div>
            </div>
          </div>

        </div>

        {/* HOW IT WORKS — subheadline → headline → paragraph → image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="How Nuora Resets Your Gut In 3 Steps"
              title={<>One ritual.<br /><span className="text-rose-deep">Three phases.</span></>}
              description={<>Our patented blend works in a way no other supplement does — it doesn't just feed your gut, it <strong className="text-foreground">resets it.</strong></>}
              className="mb-0"
            />
            <ol className="mt-5 space-y-3 pl-4 md:pl-5 border-l-[3px] border-transparent">
              {[
                { n: "01", t: "Clear", d: "Bromelain breaks down the biofilm coating your gut wall." },
                { n: "02", t: "Restore", d: "Berberine + Ashwagandha wake up metabolism and calm cortisol." },
                { n: "03", t: "Protect", d: "Quercetin + BioPerine® seal the gut barrier so it stays clean." },
              ].map((s) => (
                <li key={s.n} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-deep text-white text-[12px] font-extrabold flex items-center justify-center">
                    {s.n}
                  </span>
                  <div className="min-w-0">
                    <div className="font-extrabold text-foreground text-[15px] leading-tight">{s.t}</div>
                    <div className="text-[14px] text-foreground/70 leading-snug mt-0.5">{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-soft-pink-2/40 via-cream to-soft-pink/60 aspect-square flex items-center justify-center ring-1 ring-rose-deep/10">
              <div className="flex flex-col items-center gap-2 text-foreground/40">
                <ImageIcon className="w-10 h-10" strokeWidth={1.5} />
                <span className="text-[11px] font-bold uppercase tracking-wider">Image Placeholder</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
