import React from "react";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import AnimatedContent from "@/components/ui/AnimatedContent";

const TickerSection = ({ scrollContainerRef, sectionAnimation }) => {
  const tickerTexts = [
    "AI SIGNALS • RISK CONTROLS • BACKTESTED STRATEGIES • REAL-TIME ALERTS • LOW-LATENCY EXECUTION •",
    "NO EMOTION • DISCIPLINED TRADING • PORTFOLIO MONITORING • SMART AUTOMATION •",
  ];

  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="absolute left-[12%] top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-accent-1/10 blur-3xl" />

      <AnimatedContent {...sectionAnimation(0)}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <ScrollVelocity
            scrollContainerRef={scrollContainerRef}
            texts={tickerTexts}
            velocity={90}
            numCopies={8}
            damping={45}
            stiffness={350}
            parallaxClassName="py-4"
            scrollerClassName="text-text"
            scrollerStyle={{
              opacity: 0.92,
              textShadow: "0 0 18px rgba(126,217,87,0.22)",
            }}
          />
        </div>
      </AnimatedContent>
    </section>
  );
};

export default TickerSection;
