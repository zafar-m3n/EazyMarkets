import React from "react";
import { Icon } from "@iconify/react";
import AnimatedContent from "@/components/ui/AnimatedContent";

const HowItWorksSection = ({ sectionAnimation }) => {
  const manualTradingCards = [
    {
      number: "01",
      icon: "solar:chart-bold",
      title: "Choose a Market",
      description:
        "Start by selecting the market you want to trade, such as forex, commodities, indices, stocks, or cryptocurrency.",
    },
    {
      number: "02",
      icon: "solar:document-text-bold",
      title: "Analyse the Setup",
      description:
        "Review charts, market structure, news, support and resistance levels, indicators, and the overall direction before making a decision.",
    },
    {
      number: "03",
      icon: "solar:target-bold",
      title: "Plan the Trade",
      description:
        "Decide your entry point, stop-loss, take-profit, position size, and risk level before placing the trade.",
    },
    {
      number: "04",
      icon: "solar:play-circle-bold",
      title: "Execute Manually",
      description:
        "Place the trade yourself through the platform and stay in control of when to enter, adjust, or close the position.",
    },
    {
      number: "05",
      icon: "solar:shield-check-bold",
      title: "Manage Risk",
      description:
        "Monitor the trade carefully and use risk controls to avoid emotional decisions, overexposure, or unnecessary losses.",
    },
    {
      number: "06",
      icon: "solar:graph-up-bold",
      title: "Review Performance",
      description: "After the trade is closed, review what worked, what failed, and how your strategy can be improved.",
    },
  ];

  const aiTradingCards = [
    {
      number: "01",
      icon: "solar:database-bold",
      title: "Market Data Intake",
      description:
        "The platform continuously gathers price action, technical signals, and market behaviour data to build a real-time view of the trading environment.",
      className: "lg:col-span-1",
    },
    {
      number: "02",
      icon: "solar:cpu-bolt-bold",
      title: "AI Pattern Analysis",
      description:
        "Advanced models process incoming data to identify patterns, volatility shifts, and momentum signals faster than manual analysis alone.",
      className: "lg:col-span-2",
    },
    {
      number: "03",
      icon: "solar:chart-square-bold",
      title: "Signal & Strategy Output",
      description:
        "The analysis is translated into clear, structured trade signals and strategy support so traders can act with more confidence.",
      className: "lg:col-span-1",
    },
    {
      number: "04",
      icon: "solar:shield-user-bold",
      title: "Execution With Risk Control",
      description:
        "Trade execution is supported by rules, limits, and monitoring features that help keep decisions aligned with discipline.",
      className: "lg:col-span-2",
    },
  ];

  const transparentConditions = [
    "Swap-free account options for eligible users",
    "No commission or exchange fees on selected account conditions",
    "Secure deposits and withdrawals through preferred payment methods",
  ];

  const renderBentoCard = ({ icon, number, title, description, className = "" }) => (
    <div
      className={`group relative overflow-hidden rounded-[1.9rem] border border-border/90 bg-white/58 p-6 md:p-7 shadow-[0_12px_38px_rgba(31,41,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-1/45 hover:shadow-[0_16px_46px_rgba(126,217,87,0.14)] ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.38))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_28%)] opacity-90" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/30 bg-white/70 text-2xl text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
            <Icon icon={icon} />
          </div>

          <span className="rounded-full border border-accent-1/25 bg-white/75 px-3 py-1 text-xs font-medium tracking-[0.22em] text-accent-2">
            {number}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold leading-tight md:text-[1.35rem]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-text/72 md:text-[15px]">{description}</p>
      </div>
    </div>
  );

  return (
    <>
      {/* MANUAL TRADING FIRST */}
      <section className="relative border-b border-border/70 py-20 lg:py-24">
        <div className="absolute right-[8%] top-[14%] h-48 w-48 rounded-full bg-accent-2/8 blur-[120px]" />
        <div className="absolute bottom-[12%] left-[10%] h-52 w-52 rounded-full bg-accent-1/8 blur-[130px]" />

        <AnimatedContent {...sectionAnimation(3)}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="lg:sticky lg:top-28">
                <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">How Manual Trading Works</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Full control over every trading decision
                </h2>
                <p className="mt-5 text-sm leading-8 text-text/72 md:text-base">
                  Manual trading gives the trader complete control. You analyse the market, choose the setup, place the
                  trade, and manage the outcome directly.
                </p>

                <div className="mt-7 relative overflow-hidden rounded-[1.8rem] border border-accent-1/35 bg-white/62 p-6 shadow-[0_12px_38px_rgba(31,41,55,0.08)] backdrop-blur-xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_32%)]" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-1/25 bg-accent-1/12 text-2xl text-accent-2">
                        <Icon icon="solar:shield-check-bold" />
                      </div>

                      <h3 className="text-xl font-semibold leading-tight">Transparent trading conditions</h3>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {transparentConditions.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-7 text-text/72 md:text-[15px]">
                          <Icon icon="solar:check-circle-bold" className="mt-1 shrink-0 text-lg text-accent-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2">
                {manualTradingCards.map((card) => (
                  <React.Fragment key={card.title}>{renderBentoCard(card)}</React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* AI TRADING SECOND */}
      <section className="relative border-b border-border/70 py-20 lg:py-24">
        <div className="absolute bottom-[10%] left-[6%] h-48 w-48 rounded-full bg-accent-1/8 blur-[120px]" />

        <AnimatedContent {...sectionAnimation(4)}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">How AI Trading Works</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                From live data to disciplined execution
              </h2>
              <p className="mt-5 leading-7 text-text/72">
                Every stage of the trading process is designed to turn complex market movement into smarter action. The
                result is a platform that helps traders stay informed, prepared, and consistent.
              </p>
            </div>

            <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-3">
              {aiTradingCards.map((card) => (
                <React.Fragment key={card.title}>{renderBentoCard(card)}</React.Fragment>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </section>
    </>
  );
};

export default HowItWorksSection;
