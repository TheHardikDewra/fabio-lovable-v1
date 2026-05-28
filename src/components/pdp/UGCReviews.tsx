import { useEffect, useRef, useState } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

import face1 from "@/assets/face-1.jpg";
import face2 from "@/assets/face-2.jpg";
import face3 from "@/assets/face-3.jpg";
import face4 from "@/assets/face-4.jpg";
import face5 from "@/assets/face-5.jpg";
import face6 from "@/assets/face-6.jpg";

type Review = {
  photo: string;
  name: string;
  age: number;
  rating: number;
  quote: string;
  tags: string[];
};

const REVIEWS: Review[] = [
  { photo: face1, name: "Amanda R.", age: 47, rating: 5, quote: "I'm not bloated by 3pm anymore. Down 14 lbs in 9 weeks without changing a thing about my diet.", tags: ["Less Bloat", "Weight Loss", "More Energy", "Flat Belly"] },
  { photo: face2, name: "Theresa M.", age: 52, rating: 5, quote: "First thing that worked after menopause hit. Bloating gone in 6 days — I couldn't believe it.", tags: ["Menopause", "Fast Relief", "Better Mood", "Less Bloat"] },
  { photo: face3, name: "Karen S.", age: 44, rating: 5, quote: "Down 9 lbs and the belly is flat. I look in the mirror and I actually smile now.", tags: ["Flat Belly", "Confidence", "Weight Loss", "Glowing Skin"] },
  { photo: face4, name: "Monica L.", age: 39, rating: 5, quote: "I wake up before my alarm. That hasn't happened in years. Worth every penny just for that.", tags: ["More Energy", "Better Sleep", "Sharper Focus", "No Cravings"] },
  { photo: face5, name: "Lisa P.", age: 50, rating: 5, quote: "Down 11 lbs in 8 weeks. My husband noticed before I did — that's how real the change is.", tags: ["Visible Results", "Weight Loss", "Less Bloat", "Confidence"] },
  { photo: face6, name: "Diane W.", age: 56, rating: 4, quote: "I stopped reaching for cookies at night. It's surreal — I don't even think about sweets anymore.", tags: ["No Cravings", "Sugar Free", "Better Mood", "Calm Belly"] },
];

export function UGCReviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("article");
    const step = card ? card.offsetWidth + 14 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Real Stories · Verified Customers"
          title={<>Real Women. <span className="text-rose-deep">Real Stories.</span></>}
          description="Unfiltered words from women who finally found something that worked."
        />

        {/* Horizontal scroll carousel — tight, edge-to-edge on mobile */}
        <div className="relative">
          <div
            ref={scrollerRef}
            className="-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
          >
            <div className="flex gap-3 md:gap-3.5 w-max pb-1 snap-x snap-mandatory">
              {REVIEWS.map((r, i) => (
                <article
                  key={i}
                  className="snap-start flex-shrink-0 w-[270px] sm:w-[290px] bg-white rounded-2xl border border-black/10 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.18)] overflow-hidden flex flex-col"
                >
                  {/* 1:1 image */}
                  <img
                    src={r.photo}
                    alt={`${r.name}'s testimonial`}
                    loading="lazy"
                    width={1080}
                    height={1080}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-3.5 flex flex-col gap-2 flex-1">
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star
                          key={si}
                          className={`w-3.5 h-3.5 ${si < r.rating ? "fill-amber-400 text-amber-400" : "fill-neutral-200 text-neutral-200"}`}
                          strokeWidth={0}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-[13px] leading-snug text-[#1a1a1a]/85">
                      "{r.quote}"
                    </p>

                    {/* Verified row */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1.5 border-t border-black/5">
                      <BadgeCheck className="w-4 h-4 text-sky-500 fill-sky-50" strokeWidth={2.5} />
                      <span className="text-[12.5px] font-extrabold text-[#1a1a1a] leading-none">
                        {r.name}
                      </span>
                      <span className="text-[11.5px] text-[#1a1a1a]/55 font-semibold leading-none">
                        , {r.age}
                      </span>
                      <span className="text-[#1a1a1a]/25 text-[11px] leading-none">|</span>
                      <span className="text-[11px] font-bold text-rose-deep leading-none">
                        Verified Customer
                      </span>
                    </div>

                    {/* Benefit tags */}
                    <div className="flex gap-1.5 flex-wrap">
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full bg-soft-pink/55 text-rose-deep px-2 py-[3px] text-[10.5px] font-bold ring-1 ring-rose-deep/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Arrows + hint */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            aria-label="Previous reviews"
            className="w-10 h-10 rounded-full bg-white border border-black/10 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.18)] flex items-center justify-center disabled:opacity-35 hover:-translate-y-0.5 transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" strokeWidth={2.4} />
          </button>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/55">Swipe stories</span>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            aria-label="Next reviews"
            className="w-10 h-10 rounded-full bg-rose-deep text-white shadow-[0_6px_14px_-6px_rgba(190,55,75,0.55)] flex items-center justify-center disabled:opacity-35 hover:-translate-y-0.5 transition-all"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.4} />
          </button>
        </div>

        <p className="text-center text-[11px] text-foreground/55 mt-4">
          Testimonials featured may include individuals who have received compensation, free product, or other incentives.
        </p>
      </div>
    </section>
  );
}
