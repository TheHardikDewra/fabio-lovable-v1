import { FileText, Search, ShieldCheck } from "lucide-react";

const CERTS = [
  { name: "99.2% Pure Bromelain", code: "BRM-2401" },
  { name: "98.7% Pure Berberine HCl", code: "BER-2401" },
  { name: "99.5% Pure Quercetin", code: "QRC-2401" },
];

export function PurityCertified() {
  return (
    <section className="pdp-section-light">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="rounded-2xl bg-cream ring-1 ring-rose-deep/15 p-6 md:p-10 lg:p-12 shadow-[0_20px_60px_-30px_rgba(190,55,75,0.35)]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT — Copy */}
            <div>
              <h2 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(34px,7vw,56px)]">
                <span className="block text-foreground uppercase">99% Pure.</span>
                <span className="block text-rose-deep uppercase">Certified by Analysis.</span>
              </h2>
              <p className="mt-5 text-[14.5px] md:text-[16px] text-foreground/80 leading-relaxed max-w-xl">
                Most gut supplements can't prove what's actually in their bottle. We publish ours.
                Every active ingredient in <strong className="text-foreground">Nuora™</strong> is documented
                by a Certificate of Analysis confirming <strong className="text-foreground">99%+ purity</strong>,
                verified through HPLC, Mass Spectrometry, and NMR testing.
              </p>
              <p className="mt-4 text-[12.5px] text-foreground/60 italic leading-relaxed max-w-xl">
                Identifying information has been redacted to protect proprietary sourcing.
              </p>

              <div className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-rose-deep">
                <ShieldCheck className="w-4 h-4" strokeWidth={2.4} />
                3rd-Party Tested · FDA-Registered Facility
              </div>
            </div>

            {/* RIGHT — Certificate cards */}
            <div>
              <div className="text-[14px] font-bold text-foreground mb-4">
                Review the certificates:
              </div>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {CERTS.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    className="group relative rounded-lg bg-white ring-1 ring-foreground/10 overflow-hidden hover:ring-rose-deep/40 hover:shadow-[0_10px_30px_-18px_rgba(190,55,75,0.5)] transition-all"
                  >
                    {/* Mock certificate */}
                    <div className="aspect-[3/4] p-2.5 md:p-3 flex flex-col gap-1.5 text-left">
                      <div className="text-[7px] md:text-[8px] font-extrabold uppercase tracking-wider text-foreground/80 leading-tight">
                        Certificate of Analysis
                      </div>
                      <div className="space-y-0.5 text-[5.5px] md:text-[6.5px] text-foreground/55 leading-tight">
                        <div className="flex justify-between gap-1"><span>Product:</span><span className="font-bold text-foreground/70 truncate">{c.code}</span></div>
                        <div className="flex justify-between gap-1"><span>CAS:</span><span className="font-bold text-foreground/70">—</span></div>
                        <div className="flex justify-between gap-1"><span>Batch:</span><span className="font-bold text-foreground/70">TR01</span></div>
                      </div>
                      <div className="my-1 h-px bg-foreground/10" />
                      <div className="space-y-0.5">
                        {["Appearance", "Identification", "Solubility", "Loss on Drying", "HPLC Purity", "Assay"].map((row) => (
                          <div key={row} className="flex justify-between gap-1 text-[5px] md:text-[6px] text-foreground/55 leading-tight">
                            <span className="truncate">{row}</span>
                            <span className="font-bold text-emerald-700">✓</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto pt-1 text-[5px] md:text-[6px] text-foreground/40 leading-tight italic">
                        Store in sealed container
                      </div>
                    </div>

                    {/* Zoom icon */}
                    <div className="absolute top-2 right-2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-foreground/55 group-hover:bg-rose-deep flex items-center justify-center transition-colors">
                      <Search className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" strokeWidth={2.6} />
                    </div>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-4 mt-3">
                {CERTS.map((c) => (
                  <div key={c.code} className="text-[10.5px] md:text-[12px] text-foreground/75 text-center font-semibold leading-tight">
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
