import React from "react";
import { Icon } from "@iconify/react";
import AnimatedContent from "@/components/ui/AnimatedContent";
import homeAbout from "@/assets/homeAbout.webp";

const AboutAISection = ({ sectionAnimation }) => {
  return (
    <section className="relative border-b border-border/70 py-20 lg:py-24">
      <div className="absolute left-[7%] top-[20%] h-44 w-44 rounded-full bg-accent-1/8 blur-[110px]" />

      <AnimatedContent {...sectionAnimation(6)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/14 to-accent-2/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl border border-border bg-card shadow-[0_14px_42px_rgba(31,41,55,0.08)]">
                <img
                  src={homeAbout}
                  alt="AI intelligence trading visual"
                  className="h-105 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-130"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/72 via-background/10 to-transparent" />
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">About AI Intelligence</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Intelligence that strengthens the trader instead of replacing them
              </h2>

              <p className="mt-5 leading-7 text-text/72">
                AI intelligence is most powerful when it turns complexity into clarity. Our platform uses advanced
                analysis to uncover patterns, support timing, and surface opportunities that may be easy to miss during
                manual decision-making.
              </p>

              <p className="mt-4 leading-7 text-text/72">
                The goal is not to remove human judgement. It is to give traders stronger tools, better visibility, and
                a more structured way to respond to live markets with confidence.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-border/90 bg-white/58 p-5 shadow-[0_10px_30px_rgba(31,41,55,0.07)] backdrop-blur-xl">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.40))]" />
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent-1/14 blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-lg font-medium text-accent-2">
                      <Icon icon="solar:chart-bold" />
                      Better Market Clarity
                    </div>
                    <p className="mt-3 text-sm leading-7 text-text/72">
                      Understand movement, momentum, and opportunity through faster and more structured analysis.
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.6rem] border border-border/90 bg-white/58 p-5 shadow-[0_10px_30px_rgba(31,41,55,0.07)] backdrop-blur-xl">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.40))]" />
                  <div className="absolute -left-8 -bottom-8 h-20 w-20 rounded-full bg-accent-2/14 blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-lg font-medium text-accent-2">
                      <Icon icon="solar:shield-star-bold" />
                      Stronger Execution Discipline
                    </div>
                    <p className="mt-3 text-sm leading-7 text-text/72">
                      Stay aligned with strategy by reducing hesitation, noise, and emotional decision-making.
                    </p>
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

export default AboutAISection;
