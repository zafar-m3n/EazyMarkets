import React from "react";

import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";

const MarketCTA = ({
  sectionId = "market-cta",
  eyebrow = "Start Trading Today",
  title = "Trade Forex with smarter execution and a platform built for consistency",
  description = "Open your account and access a trading environment designed for speed, clarity, and disciplined market participation.",
  image,
  imageAlt = "Market call to action",
  primaryButtonText = "Open Account",
  secondaryButtonText = "Explore Bots",
  primaryButtonIcon = "mdi:rocket-launch-outline",
  secondaryButtonIcon = "mdi:robot-outline",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <section id={sectionId} className="relative py-18 md:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] h-48 w-48 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute bottom-[12%] right-[10%] h-56 w-56 rounded-full bg-accent-2/10 blur-[130px]" />
      </div>

      <AnimatedContent
        direction="horizontal"
        reverse={false}
        distance={100}
        threshold={0.15}
        config={{ tension: 50, friction: 25 }}
      >
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/58 p-8 shadow-[0_16px_46px_rgba(31,41,55,0.08)] backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.80),rgba(255,255,255,0.42))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,217,87,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(79,143,47,0.12),transparent_32%)]" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-accent-2">{eyebrow}</p>

                <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">{title}</h2>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">{description}</p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button variant="primary" icon={primaryButtonIcon} onClick={onPrimaryClick}>
                    {primaryButtonText}
                  </Button>

                  <Button variant="secondary" icon={secondaryButtonIcon} onClick={onSecondaryClick}>
                    {secondaryButtonText}
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-border/90 bg-white/72 shadow-[0_12px_36px_rgba(31,41,55,0.08)]">
                {image ? (
                  <img
                    src={image}
                    alt={imageAlt}
                    className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80"
                  />
                ) : (
                  <div className="flex h-64 w-full items-center justify-center bg-[linear-gradient(135deg,rgba(126,217,87,0.12),rgba(79,143,47,0.08))] sm:h-80" />
                )}

                <div className="absolute inset-0 bg-linear-to-t from-background/75 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default MarketCTA;
