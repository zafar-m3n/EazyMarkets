import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import Button from "@/components/ui/Button";
import { LampContainer } from "@/components/ui/Lamp";
import educationHero from "@/assets/educationHero.jpg";
import education1 from "@/assets/education1.jpg";
import education2 from "@/assets/education2.jpg";
import education3 from "@/assets/education3.jpg";
import homeCTA from "@/assets/homeCTA.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

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
    <div className="min-h-screen bg-background text-text font-figtree overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/8 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/8 blur-[140px]" />
        <div className="absolute left-[18%] bottom-[8%] h-80 w-80 rounded-full bg-accent-1/6 blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
          <div className="absolute right-[10%] top-[10%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
          <div className="absolute left-[40%] -bottom-10 h-48 w-48 rounded-full bg-accent-1/8 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02),transparent_20%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-18 lg:pt-32 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerWrap}
              className="max-w-2xl"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-accent-1/10 bg-card/70 px-4 py-2 text-xs text-text/70 backdrop-blur-md"
              >
                <span>Home</span>
                <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                <span className="text-accent-2">Education</span>
              </motion.div>

              <motion.p variants={fadeUp} className="mt-6 text-sm text-text/65 uppercase tracking-[0.22em]">
                AI Trading Education
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight"
              >
                Learn how{" "}
                <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                  AI trading
                </span>{" "}
                turns data into smarter{" "}
                <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                  execution
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-5 text-sm md:text-base text-text/70 leading-8">
                Explore how intelligent automation, live market analysis, and disciplined execution work together to
                help traders respond faster, reduce emotional bias, and operate with stronger structure.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button variant="primary" icon="mdi:school-outline" onClick={scrollToContent}>
                  Learn More
                </Button>

                <Button variant="secondary" icon="mdi:rocket-launch-outline" onClick={scrollToCta}>
                  Get Started
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-accent-1/10 bg-card/70 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-text/55">Focus</p>
                  <p className="mt-2 text-lg font-semibold">AI Strategy</p>
                </div>
                <div className="rounded-2xl border border-accent-1/10 bg-card/70 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-text/55">Approach</p>
                  <p className="mt-2 text-lg font-semibold">Data-Driven</p>
                </div>
                <div className="rounded-2xl border border-accent-1/10 bg-card/70 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-text/55">Outcome</p>
                  <p className="mt-2 text-lg font-semibold">Smarter Trading</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/12 to-accent-2/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl border border-accent-1/10 bg-card/70 backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
                <img
                  src={educationHero}
                  alt="AI trading education hero"
                  className="w-full h-90 sm:h-115 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

                <div className="absolute left-5 right-5 bottom-5 rounded-2xl border border-accent-1/10 bg-background/50 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-2">EazyMarkets Education</p>
                  <p className="mt-2 text-lg font-semibold text-text">
                    Understand the principles behind intelligent, automated market decisions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="education-content">
        {/* SECTION 1 */}
        <section className="py-18 md:py-20 border-b border-border/60 relative">
          <div className="absolute left-[10%] top-[28%] h-40 w-40 rounded-full bg-accent-1/7 blur-[110px]" />
          <div className="absolute right-[12%] bottom-[12%] h-48 w-48 rounded-full bg-accent-2/7 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/12 to-accent-2/10 blur-2xl" />
                  <div className="relative overflow-hidden rounded-4xl border border-accent-1/10 bg-card/70 backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
                    <img src={education1} alt="AI trading edge" className="w-full h-85 sm:h-105 object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/15 to-transparent" />
                  </div>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
                <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ education /</p>
                <h2 className="mt-3 text-2xl md:text-4xl font-semibold leading-tight">
                  The AI Edge: Why Our AI Trading System Stands Out
                </h2>

                <p className="mt-5 text-text/70 leading-8 text-sm md:text-base">
                  In the fast-paced world of trading, speed, accuracy, and data-driven decisions define success. Our AI
                  trading system is built on these pillars. It is designed to help traders interpret the market more
                  intelligently, identify stronger opportunities, and respond with greater consistency.
                </p>

                <p className="mt-4 text-text/70 leading-8 text-sm md:text-base">
                  Unlike conventional strategies that rely on slower human reaction and basic decision-making, our AI
                  leverages real-time market analysis and predictive modelling to uncover patterns and surface
                  high-probability setups. This creates a more structured approach to trading with less emotional bias
                  and more disciplined execution.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="py-18 md:py-20 border-b border-border/60 relative">
          <div className="absolute left-[8%] bottom-[18%] h-40 w-40 rounded-full bg-accent-1/7 blur-[110px]" />
          <div className="absolute right-[8%] top-[18%] h-48 w-48 rounded-full bg-accent-2/7 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
                <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
                  How Our AI Works: Data-Driven Precision
                </h2>

                <p className="mt-5 text-text/70 leading-8 text-sm md:text-base">
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
                      className="flex items-start gap-3 rounded-2xl border border-accent-1/10 bg-card/60 px-4 py-4"
                    >
                      <span className="mt-1 text-accent-2">
                        <Icon icon="mdi:chevron-right" />
                      </span>
                      <p className="text-sm md:text-base text-text/75 leading-7">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/12 to-accent-2/10 blur-2xl" />
                  <div className="relative overflow-hidden rounded-4xl border border-accent-1/10 bg-card/70 backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
                    <img src={education2} alt="AI globe" className="w-full h-85 sm:h-107.5 object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-18 md:py-20 border-b border-border/60 relative">
          <div className="absolute left-[16%] top-[22%] h-36 w-36 rounded-full bg-accent-1/6 blur-[100px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop / Tablet */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="hidden md:block"
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-accent-1/15 bg-card/70 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-accent-1/15 bg-[linear-gradient(90deg,rgba(255,255,0,0.08),rgba(234,179,8,0.05))]">
                      <th className="px-5 py-4 text-left text-sm font-semibold text-accent-1">Feature</th>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-accent-2">AI Trading System</th>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-accent-2">Manual Trading</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr
                        key={row.feature}
                        className={`${index !== comparisonRows.length - 1 ? "border-b border-accent-1/10" : ""}`}
                      >
                        <td className="px-5 py-4 text-sm text-text font-medium">{row.feature}</td>
                        <td className="px-5 py-4 text-sm text-text/75">{row.ai}</td>
                        <td className="px-5 py-4 text-sm text-text/75">{row.manual}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Mobile */}
            <div className="md:hidden space-y-4">
              {comparisonRows.map((row) => (
                <motion.div
                  key={row.feature}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  className="overflow-hidden rounded-3xl border border-accent-1/15 bg-card/70 backdrop-blur-md shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                >
                  <div className="border-b border-accent-1/15 bg-[linear-gradient(90deg,rgba(255,255,0,0.08),rgba(234,179,8,0.05))] px-4 py-3">
                    <p className="text-sm font-semibold text-accent-1">{row.feature}</p>
                  </div>

                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-accent-1/10">
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS + LAMP */}
        <section className="py-18 md:py-20 border-b border-border/60 relative overflow-hidden">
          <div className="absolute right-[8%] top-[18%] h-48 w-48 rounded-full bg-accent-2/7 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LampContainer>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="relative z-10 text-center max-w-3xl mx-auto"
              >
                <p className="text-sm uppercase tracking-[0.22em] text-accent-2">AI Results</p>
                <h2 className="mt-3 text-2xl md:text-4xl font-semibold leading-tight">Proven Results: AI in Action</h2>
              </motion.div>
            </LampContainer>

            <div className="-mt-36 md:-mt-44 grid lg:grid-cols-[1fr_0.85fr] gap-10 items-start relative z-10">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
                <p className="text-text/70 leading-8 text-sm md:text-base">
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
                      <p className="text-sm md:text-base text-text/75 leading-7">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="relative overflow-hidden rounded-4xl border border-accent-1/10 bg-card/70 backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.24)]">
                    <img src={education3} alt="AI finance result visual" className="w-full h-70 sm:h-90 object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={fadeUp}
                    className="rounded-[1.75rem] border border-accent-1/10 bg-card/75 backdrop-blur-md p-8 shadow-[0_20px_70px_rgba(0,0,0,0.22)]"
                  >
                    <p className={`text-5xl md:text-6xl font-semibold ${stat.color}`}>
                      <CountUp
                        end={stat.value}
                        duration={2.2 + index * 0.2}
                        enableScrollSpy
                        scrollSpyOnce
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="mt-3 text-base md:text-lg text-text/85">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section id="education-cta" className="py-18 md:py-20 relative">
        <div className="absolute left-[10%] top-[15%] h-48 w-48 rounded-full bg-accent-1/8 blur-[120px]" />
        <div className="absolute right-[10%] bottom-[12%] h-56 w-56 rounded-full bg-accent-2/8 blur-[130px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-4xl border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.018))] p-8 sm:p-10 lg:p-14 shadow-[0_24px_90px_rgba(0,0,0,0.28)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,0,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.10),transparent_32%)]" />

            <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-accent-2">Ready to Trade Smarter?</p>
                <h2 className="mt-3 text-2xl md:text-4xl font-semibold leading-tight">
                  Turn education into action with AI-backed trading support
                </h2>
                <p className="mt-5 text-text/70 leading-8 max-w-2xl text-sm md:text-base">
                  Build a stronger understanding of how automated trading works, then step into a more structured
                  trading experience with tools designed for clarity, speed, and consistency.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="primary" icon="mdi:rocket-launch-outline">
                    Get Started
                  </Button>
                  <Button variant="secondary" icon="mdi:book-open-page-variant-outline">
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-background/60 shadow-[0_16px_60px_rgba(0,0,0,0.22)]">
                <img
                  src={homeCTA}
                  alt="Smart trading technology"
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Education;
