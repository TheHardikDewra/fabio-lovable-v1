import { FacebookReviews } from "./FacebookReviews";
import { SectionHeader } from "./SectionHeader";

export function SocialProofSection() {
  return (
    <section className="bg-background pt-1 pb-3 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Real Women · Unedited Receipts"
          title={
            <>
              Over <span className="text-rose-deep tabular-nums">3 Million</span> Women
              <br />
              Already Ordered Across the USA <span aria-hidden>🇺🇸</span>
            </>
          }
          description="Unfiltered comments pulled straight from our private Facebook community."
          className="mb-3"
        />
      </div>
      <FacebookReviews />
    </section>
  );
}
