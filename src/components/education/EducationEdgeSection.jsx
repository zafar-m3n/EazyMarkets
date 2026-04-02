import React from "react";

import AnimatedContent from "@/components/ui/AnimatedContent";
import education1 from "@/assets/education1.webp";

const EducationEdgeSection = () => {
  return (
    <section className="relative border-b border-border/70 py-18 md:py-20">
      <div className="absolute left-[10%] top-[28%] h-40 w-40 rounded-full bg-accent-1/8 blur-[110px]" />
      <div className="absolute bottom-[12%] right-[12%] h-48 w-48 rounded-full bg-accent-2/8 blur-[120px]" />

      <AnimatedContent
        direction="horizontal"
        reverse={true}
        distance={100}
        threshold={0.15}
        config={{ tension: 50, friction: 25 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative">
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/16 to-accent-2/12 blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/60 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md">
                <img src={education1} alt="AI trading edge" className="h-85 w-full object-cover sm:h-105" />
                <div className="absolute inset-0 bg-linear-to-t from-background/74 via-background/15 to-transparent" />
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ education /</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                The AI Edge: Why Our AI Trading System Stands Out
              </h2>

              <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                In the fast-paced world of trading, speed, accuracy, and data-driven decisions define success. Our AI
                trading system is built on these pillars. It is designed to help traders interpret the market more
                intelligently, identify stronger opportunities, and respond with greater consistency.
              </p>

              <p className="mt-4 text-sm leading-8 text-text/70 md:text-base">
                Unlike conventional strategies that rely on slower human reaction and basic decision-making, our AI
                leverages real-time market analysis and predictive modelling to uncover patterns and surface
                high-probability setups. This creates a more structured approach to trading with less emotional bias and
                more disciplined execution.
              </p>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default EducationEdgeSection;
