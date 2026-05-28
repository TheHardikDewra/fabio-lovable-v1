import { useState } from "react";

export function WeightCalculator() {
  const [weight, setWeight] = useState(204);
  const [height, setHeight] = useState(65); // inches: 5ft 5in
  const heightM = (height * 0.0254);
  const weightKg = weight * 0.453592;
  const bmi = Math.round(weightKg / (heightM * heightM));
  const loss = Math.max(8, Math.round(weight * 0.12));
  const ft = Math.floor(height / 12);
  const inch = height % 12;
  let cat = "Healthy Range";
  if (bmi >= 30) cat = "Obese Range (Class I)";
  else if (bmi >= 25) cat = "Overweight Range";
  else if (bmi < 18.5) cat = "Underweight Range";

  return (
    <section className="bg-soft-pink/50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl text-center text-foreground mb-2">
          How Much Weight Can You Lose With Gut Capsule?
        </h2>
        <p className="text-center text-muted-foreground mb-10">Based on your input, you could lose up to</p>

        <div className="text-center mb-10">
          <div className="text-6xl md:text-8xl font-bold text-primary font-display">{loss}lbs</div>
          <div className="text-muted-foreground mt-2">in 3 months</div>
        </div>

        <p className="text-center max-w-2xl mx-auto text-sm text-muted-foreground mb-10">
          Gut Capsule can also provide you with steady energy levels, optimized daily caloric burn and craving control, balanced blood sugar & cholesterol levels and improved gut health.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto bg-card p-6 rounded-2xl shadow-sm">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-semibold text-foreground">What's your current weight?</label>
              <span className="text-primary font-bold">{weight} lbs</span>
            </div>
            <input type="range" min="90" max="350" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full accent-primary" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-semibold text-foreground">How tall are you?</label>
              <span className="text-primary font-bold">{ft}ft {inch}in</span>
            </div>
            <input type="range" min="48" max="84" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full accent-primary" />
          </div>
          <div className="md:col-span-2 border-t border-border pt-4">
            <div className="font-semibold text-foreground">Your BMI is {bmi}</div>
            <div className="text-sm text-primary font-medium">{cat}</div>
            <p className="text-xs text-muted-foreground mt-2">
              *The weight loss effects of Gut Capsule's ingredients are based on research studies conducted on populations with a BMI of 25+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
