import face1 from "@/assets/face-1.jpg";
import face2 from "@/assets/face-2.jpg";
import face3 from "@/assets/face-3.jpg";
import face4 from "@/assets/face-4.jpg";
import face5 from "@/assets/face-5.jpg";
import face6 from "@/assets/face-6.jpg";
import face7 from "@/assets/face-7.jpg";
import face8 from "@/assets/face-8.jpg";

const FACES = [face1, face2, face3, face4, face5, face6, face7, face8];

export function TrustFaces() {
  const loop = [...FACES, ...FACES];
  return (
    <section className="relative px-2 sm:px-3 py-12 bg-gradient-to-b from-soft-pink/35 via-cream/60 to-soft-pink/35 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-1 sm:px-2 mb-5">
        <div className="border-l-[3px] border-rose-deep pl-4 md:pl-5 max-w-4xl">
          <span className="block text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-rose-deep mb-2">
            Section 11 — Trusted Community
          </span>
          <h2 className="font-display font-extrabold text-foreground leading-[1.05] tracking-tight text-[clamp(24px,5.4vw,42px)]">
            Over <span className="text-rose-deep">3 Million Women</span> Have Started…
          </h2>
        </div>
      </div>


      <div className="relative -mx-2 sm:-mx-3 overflow-hidden">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 z-10 bg-gradient-to-r from-soft-pink/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 z-10 bg-gradient-to-l from-soft-pink/60 to-transparent" />

        <div className="flex gap-1.5 sm:gap-2 w-max animate-marquee-x">
          {loop.map((src, i) => (
            <div
              key={i}
              className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px] flex-shrink-0 rounded-xl overflow-hidden ring-2 ring-white shadow-[0_8px_22px_-8px_rgba(190,55,75,0.35)] p-[3px] bg-gradient-to-br from-rose-deep via-[#d97585] to-amber-300"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                width={512}
                height={512}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
