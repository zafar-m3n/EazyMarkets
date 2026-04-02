import React from "react";

import AnimatedContent from "@/components/ui/AnimatedContent";

const comparisonRows = [
  {
    feature: "Speed",
    ai: "Executes trades instantly",
    manual: "Delayed reaction time",
  },
  {
    feature: "Emotion-Free",
    ai: "No emotional decisions",
    manual: "Prone to fear and greed",
  },
  {
    feature: "Data Analysis",
    ai: "Processes vast market data in seconds",
    manual: "Limited to human capacity",
  },
  {
    feature: "24/7 Monitoring",
    ai: "Never sleeps, always analysing",
    manual: "Traders need breaks",
  },
];

const EducationComparisonSection = () => {
  return (
    <section className="relative border-b border-border/70 py-18 md:py-20">
      <div className="absolute left-[16%] top-[22%] h-36 w-36 rounded-full bg-accent-1/8 blur-[100px]" />

      <AnimatedContent
        direction="horizontal"
        reverse={true}
        distance={100}
        threshold={0.15}
        config={{ tension: 50, friction: 25 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Desktop / Tablet */}
          <div className="hidden md:block">
            <div className="overflow-hidden rounded-[1.75rem] border border-border/90 bg-white/60 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border/90 bg-[linear-gradient(90deg,rgba(126,217,87,0.10),rgba(79,143,47,0.06))]">
                    <th className="px-5 py-4 text-left text-sm font-semibold text-accent-2">Feature</th>
                    <th className="px-5 py-4 text-left text-sm font-semibold text-accent-2">AI Trading System</th>
                    <th className="px-5 py-4 text-left text-sm font-semibold text-accent-2">Manual Trading</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={index !== comparisonRows.length - 1 ? "border-b border-border/80" : ""}
                    >
                      <td className="px-5 py-4 text-sm font-medium text-text">{row.feature}</td>
                      <td className="px-5 py-4 text-sm text-text/75">{row.ai}</td>
                      <td className="px-5 py-4 text-sm text-text/75">{row.manual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile */}
          <div className="space-y-4 md:hidden">
            {comparisonRows.map((row, index) => (
              <AnimatedContent
                key={row.feature}
                direction="vertical"
                reverse={false}
                distance={60}
                delay={index * 70}
                threshold={0.1}
                config={{ tension: 50, friction: 25 }}
              >
                <div className="overflow-hidden rounded-3xl border border-border/90 bg-white/60 shadow-[0_14px_36px_rgba(31,41,55,0.08)] backdrop-blur-md">
                  <div className="border-b border-border/90 bg-[linear-gradient(90deg,rgba(126,217,87,0.10),rgba(79,143,47,0.06))] px-4 py-3">
                    <p className="text-sm font-semibold text-accent-2">{row.feature}</p>
                  </div>

                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-border/80">
                        <td className="w-[38%] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-2">
                          AI Trading
                        </td>
                        <td className="px-4 py-3 text-sm text-text/75">{row.ai}</td>
                      </tr>
                      <tr>
                        <td className="w-[38%] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-2">
                          Manual
                        </td>
                        <td className="px-4 py-3 text-sm text-text/75">{row.manual}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default EducationComparisonSection;
