import React from "react";
import { Icon } from "@iconify/react";

import AnimatedContent from "@/components/ui/AnimatedContent";
import education2 from "@/assets/education2.webp";

const EducationHowAiWorksSection = () => {
  return (
    <section className="relative border-b border-border/70 py-18 md:py-20">
      <div className="absolute bottom-[18%] left-[8%] h-40 w-40 rounded-full bg-accent-1/8 blur-[110px]" />
      <div className="absolute right-[8%] top-[18%] h-48 w-48 rounded-full bg-accent-2/8 blur-[120px]" />

      <AnimatedContent
        direction="horizontal"
        reverse={false}
        distance={100}
        threshold={0.15}
        config={{ tension: 50, friction: 25 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="text-2xl font-semibold leading-tight md:text-4xl">
                How Our AI Works: Data-Driven Precision
              </h2>

              <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                Our AI is trained to analyse changing market conditions with consistency and speed. It studies behaviour
                across price action, volatility, and structure to support better timing and stronger decision-making.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Processes millions of data points per second",
                  "Identifies high-probability trade opportunities with greater speed",
                  "Adapts to market movement faster than manual decision-making",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border/90 bg-white/60 px-4 py-4 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]"
                  >
                    <span className="mt-1 text-accent-2">
                      <Icon icon="mdi:chevron-right" />
                    </span>
                    <p className="text-sm leading-7 text-text/75 md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/16 to-accent-2/12 blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/60 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md">
                <img src={education2} alt="AI globe" className="h-85 w-full object-cover sm:h-107.5" />
                <div className="absolute inset-0 bg-linear-to-t from-background/74 via-background/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default EducationHowAiWorksSection;
