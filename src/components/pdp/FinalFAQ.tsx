import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";


const FAQS = [
  {
    q: "How fast will I see results?",
    a: "Most women feel lighter and less bloated within the first 5-7 days as the biofilm starts clearing. Visible changes in waistline and weight typically show up between week 3 and week 6. For full metabolic reset, we recommend a 90-day ritual.",
  },
  {
    q: "How is this different from probiotics or detox teas?",
    a: "Probiotics add bacteria — but if your gut wall is coated in biofilm, they can't attach and do their job. Detox teas just dehydrate you. Nuora™ is the only formula built around bromelain at therapeutic dose, the enzyme proven to break down gut biofilm so everything else (nutrients, probiotics, even your own digestion) starts working again.",
  },
  {
    q: "Is it safe? Are there side effects?",
    a: "Yes. Every ingredient is plant-based, third-party tested, and dosed within clinically researched ranges. Manufactured in an FDA-registered facility in the U.S. The most common 'side effect' women report is regular bowel movements and more energy. If you're pregnant, nursing, or on medication, consult your doctor first.",
  },
  {
    q: "Do I have to change my diet or exercise?",
    a: "No. The ritual works on its own by restoring metabolic function and nutrient absorption. That said, women who already eat reasonably well tend to see faster visible results. You don't need a strict diet or a gym membership.",
  },
  {
    q: "How do I take it?",
    a: "Two capsules in the morning, ideally with breakfast and a glass of water. That's it. No special timing, no powders to mix, no protocols to follow.",
  },
  {
    q: "What happens if it doesn't work for me?",
    a: "Email us within 60 days for a full refund — even on empty bottles. No return required, no questions asked. We can offer this because over 91% of women who try Nuora™ stay on it.",
  },
  {
    q: "How does shipping work?",
    a: "Orders ship within 24 hours from our U.S. warehouse. Free U.S. shipping on orders of 2+ bottles. Discreet packaging. You'll receive tracking the moment it leaves us.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes. You can pause, change, or cancel anytime from your account — no calls, no emails, no fees. We never lock you in.",
  },
];

export function FinalFAQ() {
  return (
    <section className="bg-gradient-to-b from-cream via-background to-cream pt-10 pb-14 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="Everything You Wanted To Ask"
          title={<>Frequently Asked <span className="text-rose-deep">Questions.</span></>}
          description="Real answers from our team. If you have something else on your mind, just write us."
        />


        <Accordion type="single" collapsible className="space-y-2">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`q-${i}`}
              className="rounded-lg border border-rose-deep/15 bg-white px-4 md:px-5 data-[state=open]:bg-soft-pink/40 data-[state=open]:border-rose-deep/40 shadow-[0_4px_14px_-10px_rgba(190,55,75,0.35)] transition-colors"
            >
              <AccordionTrigger className="text-[14.5px] md:text-[16px] font-extrabold text-[#1a1a1a] text-left hover:no-underline py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[13.5px] md:text-[14.5px] text-[#1a1a1a]/80 leading-relaxed pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-center text-[12px] text-foreground/60 mt-8">
          Still have questions? Email us at{" "}
          <a href="mailto:hello@mynuora.com" className="text-rose-deep font-bold hover:underline">
            hello@mynuora.com
          </a>
        </p>
      </div>
    </section>
  );
}
