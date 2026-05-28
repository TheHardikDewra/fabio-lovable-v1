import { useEffect, useState } from "react";

type Props = {
  variant?: "inline" | "banner";
};

export function Countdown({ variant = "inline" }: Props) {
  const [time, setTime] = useState({ h: 9, m: 52, s: 55 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime((p) => {
        let { h, m, s } = p;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  if (variant === "banner") {
    const Cell = ({ v, l }: { v: number; l: string }) => (
      <div className="flex flex-col items-center leading-none">
        <span className="text-lg font-extrabold tabular-nums">{String(v).padStart(2, "0")}</span>
        <span className="text-[9px] mt-0.5 opacity-90 tracking-wider">{l}</span>
      </div>
    );
    return (
      <div className="flex items-center gap-2 text-white">
        <Cell v={time.h} l="HR" />
        <span className="text-base font-bold opacity-80">·</span>
        <Cell v={time.m} l="MIN" />
        <span className="text-base font-bold opacity-80">·</span>
        <Cell v={time.s} l="SEC" />
      </div>
    );
  }

  const Cell = ({ v, l }: { v: number; l: string }) => (
    <div className="flex flex-col items-center bg-foreground text-background rounded px-2 py-1 min-w-[42px]">
      <span className="text-sm font-bold leading-none">{String(v).padStart(2, "0")}</span>
      <span className="text-[9px] mt-0.5 opacity-80">{l}</span>
    </div>
  );
  return (
    <div className="flex items-center gap-1.5">
      <Cell v={time.h} l="HRS" />
      <span className="font-bold">:</span>
      <Cell v={time.m} l="MIN" />
      <span className="font-bold">:</span>
      <Cell v={time.s} l="SEC" />
    </div>
  );
}
