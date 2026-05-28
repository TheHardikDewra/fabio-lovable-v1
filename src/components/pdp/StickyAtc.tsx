import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { BOTTLE_IMG, PRODUCT } from "./data";


type Price = { total: number; compare: number };

export function StickyAtc() {
  const [visible, setVisible] = useState(false);
  const [price, setPrice] = useState<Price>({ total: 139.96, compare: 239.96 });

  useEffect(() => {
    const trigger = document.getElementById("faq-end");
    if (!trigger) return;
    const onScroll = () => {
      const rect = trigger.getBoundingClientRect();
      setVisible(rect.top < 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPrice = (e: Event) => {
      const detail = (e as CustomEvent<Price>).detail;
      if (detail) setPrice(detail);
    };
    window.addEventListener("bundle:price", onPrice as EventListener);
    return () => window.removeEventListener("bundle:price", onPrice as EventListener);
  }, []);

  const handleClick = () => {
    const el = document.getElementById("bundle-cta");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-4", "ring-rose-deep/40");
      setTimeout(() => el.classList.remove("ring-4", "ring-rose-deep/40"), 1200);
    }
  };


  return (
    <>


      {/* Sticky ATC bar — visible after FAQ */}
      <div
        className={`fixed bottom-0 inset-x-0 z-50 transition-all duration-300 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
        aria-hidden={!visible}
      >
        <div className="bg-background border-t border-border shadow-[0_-12px_30px_-8px_rgba(0,0,0,0.18)]">
          <div className="mx-auto max-w-7xl px-3 py-2.5 flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-soft-pink/60 flex items-center justify-center flex-shrink-0">
              <img src={BOTTLE_IMG} alt="" className="w-10 h-10 object-contain" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[12.5px] font-extrabold text-foreground leading-tight truncate">
                {PRODUCT}
              </div>
              <div className="flex items-center gap-1.5 mt-0.5 leading-none">
                <span className="text-[10.5px] text-muted-foreground line-through font-semibold">
                  ${price.compare.toFixed(2)}
                </span>
                <span className="text-[13px] text-rose-deep font-extrabold">
                  ${price.total.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClick}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-rose-deep to-[#a8364a] text-white px-4 py-3 shadow-md ring-1 ring-rose-deep/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span className="flex items-center gap-1.5">
                <span className="text-[13px] font-extrabold tracking-[0.14em] uppercase leading-none">
                  Start Now
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
