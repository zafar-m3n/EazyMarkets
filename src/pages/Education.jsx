import React from "react";
import { Icon } from "@iconify/react";
import CountUp from "react-countup";

import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";
import { LampContainer } from "@/components/ui/Lamp";
import CalculatorWidget from "@/components/CalculatorWidget";
import educationHero from "@/assets/educationHero.webp";
import education1 from "@/assets/education1.webp";
import education2 from "@/assets/education2.webp";
import education3 from "@/assets/education3.webp";
import homeCTA from "@/assets/homeCTA.webp";

const comparisonRows = [
  {
    feature: "Speed",
    ai: "Executes trades instantly",
    manual: "Delayed reaction time",
  },
  {
    feature: "Emotion-Free",
    ai: "No emotional decisions",
    manual: "Prone to fear and greed",
  },
  {
    feature: "Data Analysis",
    ai: "Processes vast market data in seconds",
    manual: "Limited to human capacity",
  },
  {
    feature: "24/7 Monitoring",
    ai: "Never sleeps, always analysing",
    manual: "Traders need breaks",
  },
];

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

const Education = () => {
  const scrollToContent = () => {
    const el = document.getElementById("education-content");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCta = () => {
    const el = document.getElementById("education-cta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
                    <span className="text-accent-2">Education</span>
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
                  <p className="mt-6 text-sm uppercase tracking-[0.22em] text-text/65">AI Trading Education</p>
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
                    Learn how{" "}
                    <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                      AI trading
                    </span>{" "}
                    turns data into smarter{" "}
                    <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                      execution
                    </span>
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
                  <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                    Explore how intelligent automation, live market analysis, and disciplined execution work together to
                    help traders respond faster, reduce emotional bias, and operate with stronger structure.
                  </p>
                </AnimatedContent>

                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={70}
                  delay={420}
                  threshold={0.15}
                  config={{ tension: 50, friction: 25 }}
                >
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button variant="primary" icon="mdi:school-outline" onClick={scrollToContent}>
                      Learn More
                    </Button>

                    <Button
                      variant="secondary"
                      icon="mdi:rocket-launch-outline"
                      onClick={() => {
                        window.open("https://portal.eazymarkets.com/signup", "_blank");
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </AnimatedContent>

                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={70}
                  delay={500}
                  threshold={0.15}
                  config={{ tension: 50, friction: 25 }}
                >
                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-border/90 bg-white/60 p-4 backdrop-blur-md shadow-[0_10px_24px_rgba(31,41,55,0.05)]">
                      <p className="text-xs uppercase tracking-[0.18em] text-text/55">Focus</p>
                      <p className="mt-2 text-lg font-semibold">AI Strategy</p>
                    </div>
                    <div className="rounded-2xl border border-border/90 bg-white/60 p-4 backdrop-blur-md shadow-[0_10px_24px_rgba(31,41,55,0.05)]">
                      <p className="text-xs uppercase tracking-[0.18em] text-text/55">Approach</p>
                      <p className="mt-2 text-lg font-semibold">Data-Driven</p>
                    </div>
                    <div className="rounded-2xl border border-border/90 bg-white/60 p-4 backdrop-blur-md shadow-[0_10px_24px_rgba(31,41,55,0.05)]">
                      <p className="text-xs uppercase tracking-[0.18em] text-text/55">Outcome</p>
                      <p className="mt-2 text-lg font-semibold">Smarter Trading</p>
                    </div>
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
                  <img
                    src={educationHero}
                    alt="AI trading education hero"
                    className="h-90 w-full object-cover sm:h-115"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/74 via-background/18 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border/90 bg-white/55 p-4 backdrop-blur-md shadow-[0_10px_28px_rgba(31,41,55,0.05)]">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent-2">EazyMarkets Education</p>
                    <p className="mt-2 text-lg font-semibold text-text">
                      Understand the principles behind intelligent, automated market decisions
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      <div id="education-content">
        {/* SECTION 1 */}
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
              <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/16 to-accent-2/12 blur-2xl" />
                  <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/60 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md">
                    <img src={education1} alt="AI trading edge" className="h-85 w-full object-cover sm:h-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-background/74 via-background/15 to-transparent" />
                  </div>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ education /</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    The AI Edge: Why Our AI Trading System Stands Out
                  </h2>

                  <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                    In the fast-paced world of trading, speed, accuracy, and data-driven decisions define success. Our
                    AI trading system is built on these pillars. It is designed to help traders interpret the market
                    more intelligently, identify stronger opportunities, and respond with greater consistency.
                  </p>

                  <p className="mt-4 text-sm leading-8 text-text/70 md:text-base">
                    Unlike conventional strategies that rely on slower human reaction and basic decision-making, our AI
                    leverages real-time market analysis and predictive modelling to uncover patterns and surface
                    high-probability setups. This creates a more structured approach to trading with less emotional bias
                    and more disciplined execution.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* SECTION 2 */}
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
                    Our AI is trained to analyse changing market conditions with consistency and speed. It studies
                    behaviour across price action, volatility, and structure to support better timing and stronger
                    decision-making.
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

        {/* COMPARISON TABLE */}
        <section className="relative border-b border-border/70 py-18 md:py-20">
          <div className="absolute left-[16%] top-[22%] h-36 w-36 rounded-full bg-accent-1/8 blur-[100px]" />

          <AnimatedContent
            direction="horizontal"
            reverse={true}
            distance={100}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Desktop / Tablet */}
              <div className="hidden md:block">
                <div className="overflow-hidden rounded-[1.75rem] border border-border/90 bg-white/60 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border/90 bg-[linear-gradient(90deg,rgba(126,217,87,0.10),rgba(79,143,47,0.06))]">
                        <th className="px-5 py-4 text-left text-sm font-semibold text-accent-2">Feature</th>
                        <th className="px-5 py-4 text-left text-sm font-semibold text-accent-2">AI Trading System</th>
                        <th className="px-5 py-4 text-left text-sm font-semibold text-accent-2">Manual Trading</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, index) => (
                        <tr
                          key={row.feature}
                          className={index !== comparisonRows.length - 1 ? "border-b border-border/80" : ""}
                        >
                          <td className="px-5 py-4 text-sm font-medium text-text">{row.feature}</td>
                          <td className="px-5 py-4 text-sm text-text/75">{row.ai}</td>
                          <td className="px-5 py-4 text-sm text-text/75">{row.manual}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile */}
              <div className="space-y-4 md:hidden">
                {comparisonRows.map((row, index) => (
                  <AnimatedContent
                    key={row.feature}
                    direction="vertical"
                    reverse={false}
                    distance={60}
                    delay={index * 70}
                    threshold={0.1}
                    config={{ tension: 50, friction: 25 }}
                  >
                    <div className="overflow-hidden rounded-3xl border border-border/90 bg-white/60 shadow-[0_14px_36px_rgba(31,41,55,0.08)] backdrop-blur-md">
                      <div className="border-b border-border/90 bg-[linear-gradient(90deg,rgba(126,217,87,0.10),rgba(79,143,47,0.06))] px-4 py-3">
                        <p className="text-sm font-semibold text-accent-2">{row.feature}</p>
                      </div>

                      <table className="w-full border-collapse">
                        <tbody>
                          <tr className="border-b border-border/80">
                            <td className="w-[38%] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-2">
                              AI Trading
                            </td>
                            <td className="px-4 py-3 text-sm text-text/75">{row.ai}</td>
                          </tr>
                          <tr>
                            <td className="w-[38%] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-2">
                              Manual
                            </td>
                            <td className="px-4 py-3 text-sm text-text/75">{row.manual}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </section>

        <section className="relative border-b border-border/70 py-20 lg:py-24">
          {/* Background glow */}
          <div className="absolute left-[10%] top-[20%] h-44 w-44 rounded-full bg-accent-1/8 blur-[110px]" />
          <div className="absolute right-[10%] bottom-[15%] h-52 w-52 rounded-full bg-accent-2/8 blur-[120px]" />

          <AnimatedContent
            direction="vertical"
            reverse={false}
            distance={80}
            threshold={0.12}
            config={{ tension: 52, friction: 24 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Trading Tools</p>

                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Calculate your trade outcomes with precision
                </h2>

                <p className="mt-5 leading-7 text-text/72">
                  Use our profit calculator to estimate potential gains and losses before entering a trade. Understand
                  position sizing, price movement impact, and risk exposure with a clearer, more structured approach.
                </p>
              </div>

              {/* Widget Card */}
              <div className="mt-12">
                  <CalculatorWidget />
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* RESULTS + LAMP */}
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
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Proven Results: AI in Action
                  </h2>
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
                      <img
                        src={education3}
                        alt="AI finance result visual"
                        className="h-70 w-full object-cover sm:h-90"
                      />
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
      </div>

      {/* CTA */}
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
    </div>
  );
};

export default Education;
