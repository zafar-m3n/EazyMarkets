import React from "react";
import { Icon } from "@iconify/react";

import AnimatedContent from "@/components/ui/AnimatedContent";
import fundamentalAnalysis from "@/assets/fundamentalAnalysis.webp";

const FundamentalAnalysis = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
        <div className="absolute bottom-[8%] left-[18%] h-80 w-80 rounded-full bg-accent-1/8 blur-[150px]" />
      </div>

      {/* HERO */}
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
                <span>Education</span>
                <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                <span className="text-accent-2">Fundamental Analysis</span>
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
              <p className="mt-6 text-sm uppercase tracking-[0.22em] text-text/65">Education / Trading Knowledge</p>
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
                Understand the market through{" "}
                <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                  Fundamental Analysis
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
                Learn how major economic events, reports, and policy decisions shape market sentiment and influence
                price direction across forex and global financial markets.
              </p>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative py-18 md:py-20">
        <div className="absolute left-[10%] top-[22%] h-40 w-40 rounded-full bg-accent-1/8 blur-[110px]" />
        <div className="absolute bottom-[10%] right-[12%] h-48 w-48 rounded-full bg-accent-2/8 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={60}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <p className="max-w-360 text-lg leading-[1.6] text-text/90 md:text-[1.05rem]">
                When individuals talk about fundamentals, they are referring to the economic fundamentals of the
                currency&apos;s host nation. Economic fundamentals refer to a wide range of facts, reports,
                announcements, and events, whether they are economic, political, or environmental in nature. It&apos;s
                the study of what&apos;s going on in the world and around us in terms of economics and finance, with an
                emphasis on how macroeconomic factors (such as economic growth, inflation, and unemployment) impact
                whatever we&apos;re trading.
              </p>
            </AnimatedContent>

            <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
              <AnimatedContent
                direction="horizontal"
                reverse={true}
                distance={80}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <div className="space-y-6">
                  <div className="bg-[#d9d9d9] px-8 py-10 md:px-12 md:py-11">
                    <p className="text-[1.05rem] leading-[1.8] text-[#111111] md:text-[1.08rem]">
                      Fundamental analysis gives insight into how price action &quot;should&quot; or may react to a
                      specific economic event when new data is published. Fundamental information can take many distinct
                      forms. It might be a Fed report on existing house sales in the United States. It may also be
                      possible that the European Central Bank will alter its monetary policy.
                    </p>
                  </div>

                  <p className="text-[1.8rem] font-semibold leading-[1.35] tracking-tight text-text md:text-[2rem]">
                    The public publication of this data frequently alters the economic landscape (or, better yet, the
                    economic psyche), causing investors and speculators to respond.
                  </p>
                </div>
              </AnimatedContent>

              <AnimatedContent
                direction="horizontal"
                reverse={false}
                distance={80}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <div className="overflow-hidden rounded-md">
                  <img src={fundamentalAnalysis} alt="Fundamental Analysis" className="h-full w-full object-cover" />
                </div>
              </AnimatedContent>
            </div>

            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={60}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <p className="max-w-225 text-[1.05rem] leading-[1.75] text-text/90 md:text-[1.08rem]">
                Pure fundamental traders, on the other hand, miss out on the short-term chances that pattern formations
                and technical levels provide. All viewpoints are covered with a mix of technical and fundamental
                analysis. You&apos;re aware of upcoming economic events and releases, but you can also recognize and
                apply the different technical tools and patterns that market participants pay attention to.
              </p>
            </AnimatedContent>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FundamentalAnalysis;
