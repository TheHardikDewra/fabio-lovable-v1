type Tone = "white" | "pink" | "cream" | "rose-dark" | "cosmic";

type Props = {
  from?: Tone;
  to?: Tone;
  variant?: "cloud" | "silk" | "tide" | "dune";
  accent?: boolean;
};

/**
 * Section divider — no-op.
 * Sections now alternate via background color, so an explicit divider
 * between them would be visual noise. Kept as a component so existing
 * call sites keep compiling without changes.
 */
export function SectionDivider(_props: Props) {
  return null;
}
