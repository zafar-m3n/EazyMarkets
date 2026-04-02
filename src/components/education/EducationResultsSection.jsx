import React from "react";
import { Icon } from "@iconify/react";
import CountUp from "react-countup";

import AnimatedContent from "@/components/ui/AnimatedContent";
import { LampContainer } from "@/components/ui/Lamp";
import education3 from "@/assets/education3.webp";

const resultPoints = [
  "Consistent profit AI favours various market conditions",
  "Higher accuracy rates compared to human traders",
  "A fully automated, stress-free trading experience",
];

const stats = [
  {
    value: 98,
    suffix: "%",
    label: "Trade Accuracy",
    color: "text-accent-1",
  },
  {
    value: 5,
    suffix: "m+",
    label: "AI-Driven Trading Interactions",
    color: "text-accent-2",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Continuous Market Monitoring",
    color: "text-accent-1",
  },
];

const EducationResultsSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-border/70 py-18 md:py-20">
      <div className="absolute right-[8%] top-[18%] h-48 w-48 rounded-full bg-accent-2/8 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <LampContainer>
          <AnimatedContent
            direction="vertical"
            reverse={false}
            distance={70}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.22em] text-accent-2">AI Results</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">Proven Results: AI in Action</h2>
            </div>
          </AnimatedContent>
        </LampContainer>

        <AnimatedContent
          direction="horizontal"
          reverse={false}
          distance={100}
          threshold={0.15}
          config={{ tension: 50, friction: 25 }}
        >
          <div className="relative z-10 -mt-36 grid items-start gap-10 md:-mt-44 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-sm leading-8 text-text/70 md:text-base">
                Real-world results speak for themselves. Our AI-driven trading system has consistently outperformed
                traditional, emotion-led approaches by identifying higher-probability opportunities, adapting to
                changing market conditions, and supporting more disciplined execution.
              </p>

              <div className="mt-6 space-y-4">
                {resultPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-1 text-accent-2">
                      <Icon icon="mdi:chevron-right" />
                    </span>
                    <p className="text-sm leading-7 text-text/75 md:text-base">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/60 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md">
                  <img src={education3} alt="AI finance result visual" className="h-70 w-full object-cover sm:h-90" />
                  <div className="absolute inset-0 bg-linear-to-t from-background/74 via-background/20 to-transparent" />
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <AnimatedContent
                  key={stat.label}
                  direction="vertical"
                  reverse={false}
                  distance={60}
                  delay={index * 90}
                  threshold={0.1}
                  config={{ tension: 50, friction: 25 }}
                >
                  <div className="rounded-[1.75rem] border border-border/90 bg-white/68 p-8 shadow-[0_16px_42px_rgba(31,41,55,0.08)] backdrop-blur-md">
                    <p className={`text-5xl font-semibold md:text-6xl ${stat.color}`}>
                      <CountUp
                        end={stat.value}
                        duration={2.2 + index * 0.2}
                        enableScrollSpy
                        scrollSpyOnce
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="mt-3 text-base text-text/85 md:text-lg">{stat.label}</p>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default EducationResultsSection;
