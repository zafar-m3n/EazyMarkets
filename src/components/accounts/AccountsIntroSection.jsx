import React from "react";
import AnimatedContent from "@/components/ui/AnimatedContent";

const AccountsIntroSection = () => {
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
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ account-types /</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                Choose the plan that fits your needs
              </h2>
            </div>

            <div>
              <p className="text-sm leading-8 text-text/70 md:text-base">
                EazyMarkets offers account types tailored to different trading goals, from first-time users to more
                advanced and high-volume traders. Each tier is structured to provide a different balance of support,
                leverage, AI-backed tools, signal access, and account flexibility so you can choose conditions that
                match the way you trade.
              </p>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default AccountsIntroSection;
