import React from "react";
import { Icon } from "@iconify/react";

import AnimatedContent from "@/components/ui/AnimatedContent";

const PromotionsHeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fbf4_0%,#eef9e7_50%,#f8fbf4_100%)]" />

        <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-accent-1/26 blur-[120px]" />
        <div className="absolute right-[10%] top-[10%] h-72 w-72 rounded-full bg-accent-2/24 blur-[140px]" />
        <div className="absolute -bottom-10 left-[40%] h-48 w-48 rounded-full bg-accent-1/20 blur-[120px]" />

        <div className="absolute left-[8%] top-[12%] h-32 w-32 rounded-full bg-accent-1/34 blur-[48px]" />
        <div className="absolute right-[16%] top-[18%] h-36 w-36 rounded-full bg-accent-2/28 blur-[54px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,217,87,0.20),transparent_20%),radial-gradient(circle_at_80%_24%,rgba(79,143,47,0.18),transparent_22%),radial-gradient(circle_at_48%_78%,rgba(126,217,87,0.14),transparent_20%)]" />
        <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(126,217,87,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(126,217,87,0.10)_1px,transparent_1px)] bg-size-[72px_72px]" />
        <div className="absolute inset-0 bg-white/18" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="max-w-3xl">
          <AnimatedContent
            direction="vertical"
            reverse={false}
            distance={90}
            delay={0}
            threshold={0.2}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-white/62 px-4 py-2 text-xs text-text/70 backdrop-blur-md shadow-[0_8px_24px_rgba(31,41,55,0.05)]">
              <span>Home</span>
              <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
              <span className="text-accent-2">Promotions</span>
            </div>
          </AnimatedContent>

          <AnimatedContent
            direction="vertical"
            reverse={false}
            distance={70}
            delay={100}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-text/65">Promotions & Special Offers</p>
          </AnimatedContent>

          <AnimatedContent
            direction="vertical"
            reverse={false}
            distance={70}
            delay={180}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Exclusive Offers for{" "}
              <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                Smarter Trading
              </span>
            </h1>
          </AnimatedContent>

          <AnimatedContent
            direction="vertical"
            reverse={false}
            distance={70}
            delay={260}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <p className="mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">
              Explore special offers and account benefits designed to help you start stronger, trade with more
              flexibility, and unlock more value across your journey.
            </p>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default PromotionsHeroSection;
