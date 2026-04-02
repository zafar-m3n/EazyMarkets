import React from "react";

import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";
import homeCTA from "@/assets/homeCTA.webp";

const EducationCtaSection = () => {
  return (
    <section id="education-cta" className="relative py-18 md:py-20">
      <div className="absolute left-[10%] top-[15%] h-48 w-48 rounded-full bg-accent-1/10 blur-[120px]" />
      <div className="absolute bottom-[12%] right-[10%] h-56 w-56 rounded-full bg-accent-2/10 blur-[130px]" />

      <AnimatedContent
        direction="horizontal"
        reverse={true}
        distance={100}
        threshold={0.15}
        config={{ tension: 50, friction: 25 }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/58 p-8 shadow-[0_16px_46px_rgba(31,41,55,0.08)] backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.80),rgba(255,255,255,0.42))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,217,87,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(79,143,47,0.12),transparent_32%)]" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-accent-2">Ready to Trade Smarter?</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                  Turn education into action with AI-backed trading support
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">
                  Build a stronger understanding of how automated trading works, then step into a more structured
                  trading experience with tools designed for clarity, speed, and consistency.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    variant="primary"
                    icon="mdi:rocket-launch-outline"
                    onClick={() => {
                      window.open("https://portal.eazymarkets.com/signup", "_blank");
                    }}
                  >
                    Get Started
                  </Button>

                  <Button
                    variant="secondary"
                    icon="mdi:book-open-page-variant-outline"
                    onClick={() => {
                      window.location.href = "/education";
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-border/90 bg-white/72 shadow-[0_12px_36px_rgba(31,41,55,0.08)]">
                <img
                  src={homeCTA}
                  alt="Smart trading technology"
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/75 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default EducationCtaSection;
