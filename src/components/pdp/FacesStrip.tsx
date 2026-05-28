import face1 from "@/assets/face-1.jpg";
import face2 from "@/assets/face-2.jpg";
import face3 from "@/assets/face-3.jpg";
import face4 from "@/assets/face-4.jpg";
import face5 from "@/assets/face-5.jpg";
import face6 from "@/assets/face-6.jpg";
import face7 from "@/assets/face-7.jpg";
import face8 from "@/assets/face-8.jpg";

const FACES = [face1, face2, face3, face4, face5, face6, face7, face8];

export function FacesStrip() {
  const loop = [...FACES, ...FACES];
  return (
    <section className="relative px-4 py-6 bg-gradient-to-b from-soft-pink/35 via-cream/60 to-soft-pink/35 overflow-hidden">
      <div className="relative -mx-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10 bg-gradient-to-r from-soft-pink/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-soft-pink/60 to-transparent" />

        <div className="flex gap-3 w-max animate-marquee-x">
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
