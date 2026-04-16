import React from "react";
import { Icon } from "@iconify/react";

import AnimatedContent from "@/components/ui/AnimatedContent";

const MarketIntro = ({
  sectionId = "market-intro",
  eyebrow = "/ market overview /",
  title = "What is Forex and why trade it?",
  description = [
    "Forex is the global market where currencies are bought and sold. It is one of the most actively traded financial markets in the world, known for its liquidity, accessibility, and continuous movement throughout the trading week.",
    "For traders, forex offers flexibility, a wide range of major and minor pairs, and frequent opportunities driven by macroeconomic events, interest rate decisions, and changing market sentiment.",
  ],
  whyTitle = "Why trade this market?",
  benefits = [
    {
      icon: "solar:graph-up-bold",
      title: "High Liquidity",
      description:
        "Large trading volume can support smoother execution and tighter pricing across major currency pairs.",
    },
    {
      icon: "solar:clock-circle-bold",
      title: "24/5 Access",
      description: "Trade across major global sessions with opportunities that continue throughout the business week.",
    },
    {
      icon: "solar:bolt-bold",
      title: "Fast-Moving Opportunities",
      description: "Currency markets react quickly to news, economic releases, and central bank decisions.",
    },
    {
      icon: "solar:shield-check-bold",
      title: "Structured Trading Environment",
      description: "Forex works well with disciplined strategies, technical analysis, and risk-managed execution.",
    },
  ],
  highlights = ["Major Pairs", "Minor Pairs", "High Liquidity", "24/5 Market"],
}) => {
  return (
    <section id={sectionId} className="relative border-b border-border/70 py-18 md:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[22%] h-40 w-40 rounded-full bg-accent-1/8 blur-[110px]" />
        <div className="absolute right-[10%] bottom-[14%] h-48 w-48 rounded-full bg-accent-2/8 blur-[120px]" />
      </div>

      <AnimatedContent
        direction="horizontal"
        reverse={false}
        distance={100}
        threshold={0.15}
        config={{ tension: 50, friction: 25 }}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-accent-2">{eyebrow}</p>

              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">{title}</h2>

              <div className="mt-5 space-y-4">
                {description.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-8 text-text/70 md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {highlights?.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-border/90 bg-white/62 px-3.5 py-2 text-xs font-medium text-text/72 backdrop-blur-md shadow-[0_8px_24px_rgba(31,41,55,0.05)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <div className="relative overflow-hidden rounded-[1.9rem] border border-border/90 bg-white/58 p-5 shadow-[0_12px_38px_rgba(31,41,55,0.08)] backdrop-blur-xl md:p-6">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.42))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_28%)] opacity-90" />
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/16 blur-3xl" />
                <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent-2/14 blur-3xl" />

                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2/85">{whyTitle}</p>

                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {benefits.map((benefit) => (
                      <div
                        key={benefit.title}
                        className="rounded-2xl border border-border/90 bg-white/62 p-4 backdrop-blur-md shadow-[0_10px_24px_rgba(31,41,55,0.05)]"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-1/20 bg-white/75 text-xl text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_20px_rgba(126,217,87,0.16)]">
                          <Icon icon={benefit.icon} />
                        </div>

                        <h3 className="mt-4 text-lg font-semibold leading-tight">{benefit.title}</h3>

                        <p className="mt-2 text-sm leading-7 text-text/72">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default MarketIntro;
