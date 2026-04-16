import React from "react";

import AnimatedContent from "@/components/ui/AnimatedContent";
import TradingViewWidget from "@/components/TradingViewWidget";

const MarketWidgetSection = ({
  sectionId = "market-widget",
  eyebrow = "/ live market /",
  title = "Live market overview",
  description = "Track real-time price movement and market activity.",
  symbolsGroups = [],
}) => {
  return (
    <section id={sectionId} className="relative border-b border-border/70 py-18 md:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[20%] h-40 w-40 rounded-full bg-accent-1/8 blur-[110px]" />
        <div className="absolute right-[10%] bottom-[14%] h-48 w-48 rounded-full bg-accent-2/8 blur-[120px]" />
      </div>

      <AnimatedContent
        direction="horizontal"
        reverse={true}
        distance={100}
        threshold={0.15}
        config={{ tension: 50, friction: 25 }}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-accent-2">{eyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">{title}</h2>
            <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">{description}</p>
          </div>

          <div className="mt-8 relative overflow-hidden rounded-[1.9rem] border border-border/90 bg-white/58 shadow-[0_12px_38px_rgba(31,41,55,0.08)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.42))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_28%)] opacity-90" />
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/16 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent-2/14 blur-3xl" />

            <div className="relative z-10">
              <div className="rounded-3xl overflow-hidden">
                <TradingViewWidget symbolsGroups={symbolsGroups} />
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default MarketWidgetSection;
