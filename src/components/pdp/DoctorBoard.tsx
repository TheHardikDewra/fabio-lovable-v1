import { ShieldCheck, Stethoscope, GraduationCap, BadgeCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import doc4 from "@/assets/doctor-4.jpg";
import doc5 from "@/assets/doctor-5.jpg";
import doc6 from "@/assets/doctor-6.jpg";

type Doctor = {
  name: string;
  title: string;
  credentials: string;
  institution: string;
  specialty: string;
  yearsExp: number;
  photo: string;
  quote: string;
};

const DOCTORS: Doctor[] = [
  {
    name: "Dr. Sarah Whitfield",
    title: "MD, Gastroenterologist",
    credentials: "MD, FACG",
    institution: "Cleveland Clinic alumna",
    specialty: "Gut Microbiome",
    yearsExp: 18,
    photo: doc1,
    quote:
      "The biofilm mechanism is one of the most overlooked causes of stalled metabolism in women over 40. Targeting it directly is the right call.",
  },
  {
    name: "Dr. Michael Hartmann",
    title: "MD, Internal Medicine",
    credentials: "MD, MPH",
    institution: "Johns Hopkins trained",
    specialty: "Metabolic Health",
    yearsExp: 22,
    photo: doc2,
    quote:
      "I've reviewed the formula and the dosages are clinically meaningful — not pixie dust. Bromelain at 350mg is the real deal.",
  },
  {
    name: "Dr. Mei Tanaka",
    title: "PhD, Clinical Nutritionist",
    credentials: "PhD, RDN, CNS",
    institution: "Stanford Medicine",
    specialty: "Functional Nutrition",
    yearsExp: 14,
    photo: doc3,
    quote:
      "What sets this protocol apart is the sequencing — dissolve, restore, protect. That's how the gut actually heals.",
  },
  {
    name: "Dr. Marcus Adeyemi",
    title: "MD, Gastroenterologist",
    credentials: "MD, FACP",
    institution: "Mayo Clinic alumnus",
    specialty: "Digestive Disorders",
    yearsExp: 16,
    photo: doc4,
    quote:
      "Most of my patients with chronic bloat aren't sick — their absorption is blocked. Clearing biofilm changes the entire picture.",
  },
  {
    name: "Dr. Elena Vasquez",
    title: "MD, OB-GYN",
    credentials: "MD, FACOG",
    institution: "Mount Sinai trained",
    specialty: "Women's Hormonal Health",
    yearsExp: 25,
    photo: doc5,
    quote:
      "Perimenopausal weight gain is rarely about willpower. Addressing gut absorption and cortisol together is the protocol I've been waiting for.",
  },
  {
    name: "Dr. James Calloway",
    title: "MD, Functional Medicine",
    credentials: "MD, IFMCP",
    institution: "Institute for Functional Medicine",
    specialty: "Integrative Wellness",
    yearsExp: 19,
    photo: doc6,
    quote:
      "Clean formulation, third-party tested, no fillers. This is what I want to see when a patient brings a supplement to my desk.",
  },
];

function DoctorCard({ d }: { d: Doctor }) {
  return (
    <article className="w-[280px] md:w-[320px] flex-shrink-0 bg-white rounded-lg border border-[#e8e8ed] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)] overflow-hidden">
      <div className="relative aspect-[5/4] overflow-hidden bg-muted">
        <img
          src={d.photo}
          alt={`Portrait of ${d.name}`}
          loading="lazy"
          width={512}
          height={512}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 bg-white/95 backdrop-blur px-2 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-[0.1em] text-rose-deep shadow-sm">
          <BadgeCheck className="w-3 h-3" strokeWidth={2.6} />
          Verified MD
        </div>
        <div className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 bg-foreground/85 backdrop-blur text-white px-2 py-1 rounded-full text-[10px] font-bold">
          {d.yearsExp}+ yrs
        </div>
      </div>
      <div className="p-3.5">
        <div className="font-display font-extrabold text-[15px] text-foreground leading-tight">
          {d.name}
        </div>
        <div className="text-[11.5px] text-rose-deep font-bold mt-0.5">
          {d.title}
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1">
          <span className="inline-flex items-center gap-1 bg-soft-pink/50 text-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-lg">
            <GraduationCap className="w-2.5 h-2.5" strokeWidth={2.6} />
            {d.credentials}
          </span>
          <span className="inline-flex items-center gap-1 bg-cream text-foreground/80 text-[10px] font-semibold px-1.5 py-0.5 rounded-lg border border-border">
            {d.specialty}
          </span>
        </div>
        <div className="text-[10.5px] text-muted-foreground mt-1.5 truncate">
          {d.institution}
        </div>
        <blockquote className="mt-2.5 pt-2.5 border-t border-border text-[12px] leading-[1.5] text-foreground/85 italic">
          &ldquo;{d.quote}&rdquo;
        </blockquote>
      </div>
    </article>
  );
}

export function DoctorBoard() {
  const loop = [...DOCTORS, ...DOCTORS];

  return (
    <section className="relative pdp-section-dark pt-6 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          eyebrow="Vetted By The Doctors We Trust Most"
          title={<>Reviewed &amp; Approved by <span className="text-rose-deep">37 Independent Doctors</span></>}
          description="Our formula is vetted by board-certified MDs, gastroenterologists, and clinical nutritionists — not influencers."
        />

        <div className="mb-5 flex justify-center">
          {/* Trust stats row — single horizontal row, balanced spacing */}
          <div className="mt-5 inline-flex flex-row items-stretch rounded-xl border border-white/25 bg-white shadow-[0_10px_28px_-12px_rgba(0,0,0,0.45)] divide-x divide-foreground/10 overflow-hidden">
            {[
              { n: "37", l: "MDs on board" },
              { n: "12+", l: "Specialties" },
              { n: "100%", l: "Disclosed" },
            ].map((s) => (
              <div key={s.l} className="px-5 sm:px-7 py-3 flex flex-row items-baseline gap-2 whitespace-nowrap">
                <div className="font-display font-extrabold text-[20px] text-rose-deep leading-none">
                  {s.n}
                </div>
                <div className="text-[10.5px] uppercase tracking-[0.12em] text-foreground/70 font-bold">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee row — no edge fades */}
      <div className="relative mt-4">
        <div className="flex gap-3 md:gap-4 w-max animate-marquee-x py-2 px-4">
          {loop.map((d, i) => (
            <DoctorCard key={`${d.name}-${i}`} d={d} />
          ))}
        </div>
      </div>

    </section>
  );
}
