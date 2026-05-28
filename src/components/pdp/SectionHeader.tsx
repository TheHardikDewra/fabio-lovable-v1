import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

/**
 * Unified PDP section header.
 * Eyebrow micro-copy on top, left-aligned headline with a vertical
 * rose-deep bar on the left, optional description.
 *
 * Use across every PDP section so type sizes, weights and the
 * eyebrow style stay 1:1 consistent.
 */
export function SectionHeader({ eyebrow, title, description, className = "" }: Props) {
  return (
    <div className={`mb-5 md:mb-6 text-center ${className}`}>
      <div className="max-w-3xl mx-auto">
        <span className="block text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-rose-deep mb-2">
          {eyebrow}
        </span>
        <h2 className="font-display font-extrabold text-foreground leading-[1.05] tracking-tight text-[clamp(24px,5.2vw,38px)]">
          {title}
        </h2>
        {description ? (
          <p className="text-foreground/70 text-[14px] md:text-[15.5px] mt-3 leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
