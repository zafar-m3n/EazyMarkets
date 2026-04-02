import React from "react";

import AnimatedContent from "@/components/ui/AnimatedContent";
import CalculatorWidget from "@/components/education/CalculatorWidget";

const EducationCalculatorSection = () => {
  return (
    <section className="relative border-b border-border/70 py-20 lg:py-24">
      <div className="absolute left-[10%] top-[20%] h-44 w-44 rounded-full bg-accent-1/8 blur-[110px]" />
      <div className="absolute right-[10%] bottom-[15%] h-52 w-52 rounded-full bg-accent-2/8 blur-[120px]" />

      <AnimatedContent
        direction="vertical"
        reverse={false}
        distance={80}
        threshold={0.12}
        config={{ tension: 52, friction: 24 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Trading Tools</p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Calculate your trade outcomes with precision
            </h2>

            <p className="mt-5 leading-7 text-text/72">
              Use our profit calculator to estimate potential gains and losses before entering a trade. Understand
              position sizing, price movement impact, and risk exposure with a clearer, more structured approach.
            </p>
          </div>

          <div className="mt-12">
            <CalculatorWidget />
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default EducationCalculatorSection;
