import React from "react";
import { Icon } from "@iconify/react";

import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";

const MarketHero = ({
  breadcrumbLabel = "Markets",
  pageName = "Forex",
  eyebrow = "Markets",
  title = "Trade Forex markets with precision",
  highlightedText = "precision",
  description = "Access global currency markets with fast execution, intelligent tools, and a trading environment built for consistency.",
  image,
  imageAlt = "Market hero image",
  imageBadgeLabel = "EazyMarkets",
  imageBadgeText = "Built for fast-moving markets and smarter execution",
  primaryButtonText = "Start Trading",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  primaryButtonIcon = "mdi:rocket-launch-outline",
  secondaryButtonIcon = "mdi:chart-line",
  stats = [],
}) => {
  const titleParts = highlightedText && title.includes(highlightedText) ? title.split(highlightedText) : [title];

  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fbf4_0%,#eef9e7_50%,#f8fbf4_100%)]" />

        <div className="absolute -left-20 top-12 h-96 w-[24rem] rounded-full bg-accent-1/28 blur-[110px]" />
        <div className="absolute right-[4%] top-[8%] h-104 w-104 rounded-full bg-accent-2/24 blur-[120px]" />
        <div className="absolute -bottom-10 left-[40%] h-72 w-[18rem] rounded-full bg-accent-1/22 blur-[100px]" />

        <div className="absolute left-[8%] top-[12%] h-32 w-32 rounded-full bg-accent-1/36 blur-[48px]" />
        <div className="absolute right-[16%] top-[18%] h-36 w-36 rounded-full bg-accent-2/30 blur-[54px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,217,87,0.20),transparent_20%),radial-gradient(circle_at_80%_24%,rgba(79,143,47,0.18),transparent_22%),radial-gradient(circle_at_48%_78%,rgba(126,217,87,0.14),transparent_20%)]" />
        <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(126,217,87,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(126,217,87,0.10)_1px,transparent_1px)] bg-size-[72px_72px]" />
        <div className="absolute inset-0 bg-white/18" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <AnimatedContent
            direction="vertical"
            reverse={false}
            distance={90}
            delay={0}
            threshold={0.2}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="max-w-2xl">
              <AnimatedContent
                direction="vertical"
                reverse={false}
                distance={70}
                delay={100}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-white/62 px-4 py-2 text-xs text-text/70 backdrop-blur-md shadow-[0_8px_24px_rgba(31,41,55,0.05)]">
                  <span>Home</span>
                  <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                  <span>{breadcrumbLabel}</span>
                  <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                  <span className="text-accent-2">{pageName}</span>
                </div>
              </AnimatedContent>

              <AnimatedContent
                direction="vertical"
                reverse={false}
                distance={70}
                delay={180}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <p className="mt-6 text-sm uppercase tracking-[0.22em] text-text/65">{eyebrow}</p>
              </AnimatedContent>

              <AnimatedContent
                direction="vertical"
                reverse={false}
                distance={70}
                delay={260}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                  {titleParts.length > 1 ? (
                    <>
                      {titleParts[0]}
                      <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                        {highlightedText}
                      </span>
                      {titleParts[1]}
                    </>
                  ) : (
                    title
                  )}
                </h1>
              </AnimatedContent>

              <AnimatedContent
                direction="vertical"
                reverse={false}
                distance={70}
                delay={340}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">{description}</p>
              </AnimatedContent>

              {stats?.length > 0 ? (
                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={70}
                  delay={400}
                  threshold={0.15}
                  config={{ tension: 50, friction: 25 }}
                >
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {stats.map((stat) => (
                      <span
                        key={stat}
                        className="inline-flex items-center rounded-full border border-border/90 bg-white/62 px-3.5 py-2 text-xs font-medium text-text/72 backdrop-blur-md shadow-[0_8px_24px_rgba(31,41,55,0.05)]"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </AnimatedContent>
              ) : null}

              <AnimatedContent
                direction="vertical"
                reverse={false}
                distance={70}
                delay={460}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button variant="primary" icon={primaryButtonIcon} onClick={onPrimaryClick}>
                    {primaryButtonText}
                  </Button>

                  <Button variant="secondary" icon={secondaryButtonIcon} onClick={onSecondaryClick}>
                    {secondaryButtonText}
                  </Button>
                </div>
              </AnimatedContent>
            </div>
          </AnimatedContent>

          <AnimatedContent
            direction="vertical"
            reverse={false}
            distance={90}
            delay={150}
            threshold={0.2}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/16 to-accent-2/12 blur-2xl" />

              <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/60 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md">
                {image ? (
                  <img src={image} alt={imageAlt} className="h-90 w-full object-cover md:h-115" />
                ) : (
                  <div className="flex h-90 w-full items-center justify-center bg-[linear-gradient(135deg,rgba(126,217,87,0.10),rgba(79,143,47,0.08))] md:h-115">
                    <div className="flex h-18 w-18 items-center justify-center rounded-3xl border border-accent-1/20 bg-white/70 text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
                      <Icon icon="solar:graph-up-bold" className="text-4xl" />
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-linear-to-t from-background/74 via-background/18 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border/90 bg-white/55 p-4 backdrop-blur-md shadow-[0_10px_28px_rgba(31,41,55,0.05)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-2">{imageBadgeLabel}</p>
                  <p className="mt-2 text-lg font-semibold text-text">{imageBadgeText}</p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default MarketHero;
