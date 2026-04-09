import React from "react";
import { Icon } from "@iconify/react";

import AnimatedContent from "@/components/ui/AnimatedContent";

const forexBasicsSections = [
  {
    step: "01",
    title: "What is the Forex market?",
    body: [
      "The Forex market is where currencies are bought and sold. It is the largest financial market in the world, with trillions traded every day, and it operates 24 hours a day during the trading week.",
      "Unlike stock markets, Forex does not have one central exchange. Trading happens electronically through a global network of banks, brokers, institutions, and traders.",
      "People trade currencies for many reasons. Some do it to profit from price movements, while others use it for international business, investment activity, or currency exchange needs.",
    ],
  },
  {
    step: "02",
    title: "How does Forex trading take place?",
    body: [
      "In Forex, currencies are traded in pairs. This means one currency is always compared against another, such as EUR/USD or GBP/USD.",
      "When you trade a currency pair, you are predicting whether the first currency in the pair will strengthen or weaken against the second one.",
      "Most Forex trading takes place through brokers, who provide access to the market and let traders buy or sell currency pairs from anywhere online.",
    ],
  },
  {
    step: "03",
    title: "What drives the Forex market?",
    body: [
      "Currency prices move because of supply and demand, but many global factors influence that demand. These include interest rates, inflation, employment data, economic growth, political developments, and central bank decisions.",
      "Because many countries, institutions, and traders are involved, the Forex market is highly dynamic and constantly reacting to new information.",
    ],
  },
];

const forexDrivers = [
  {
    step: "01",
    title: "Central banks",
    text: "Central banks have a major influence on currency prices. Their decisions on interest rates, monetary policy, and public announcements can quickly change how traders view a country’s currency.",
  },
  {
    step: "02",
    title: "News reports",
    text: "Economic and political news can affect confidence in a country’s economy. Strong news may increase demand for a currency, while uncertainty or weak reports may reduce it.",
  },
  {
    step: "03",
    title: "Market sentiment",
    text: "Trader confidence and overall market mood also matter. If traders expect a currency to rise or fall, their actions can strengthen that move even more.",
  },
  {
    step: "04",
    title: "Economic data",
    text: "Reports such as inflation, GDP, employment, and retail sales help traders understand how an economy is performing and what a central bank may do next.",
  },
  {
    step: "05",
    title: "Credit ratings",
    text: "A country with a stronger credit rating is often seen as more stable and reliable. That can make its currency more attractive compared with one from a country with weaker financial standing.",
  },
];

const ForexBasics = () => {
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
                <span className="text-accent-2">Forex Basics</span>
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
              <p className="mt-6 text-sm uppercase tracking-[0.22em] text-text/65">
                Education / Beginner Trading Guide
              </p>
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
                Start learning with{" "}
                <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                  Forex Basics
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
                Build a strong foundation by understanding what the Forex market is, how currency trading works, and
                which factors influence price movements every day.
              </p>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* INTRO SECTIONS */}
      <section className="relative py-18 md:py-20">
        <div className="absolute left-[10%] top-[22%] h-40 w-40 rounded-full bg-accent-1/8 blur-[110px]" />
        <div className="absolute bottom-[10%] right-[12%] h-48 w-48 rounded-full bg-accent-2/8 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-10">
            {forexBasicsSections.map((section, index) => (
              <AnimatedContent
                key={section.step}
                direction="vertical"
                reverse={false}
                distance={70}
                delay={index * 80}
                threshold={0.12}
                config={{ tension: 50, friction: 25 }}
              >
                <div
                  className={`grid items-start gap-5 lg:gap-8 ${
                    index === 1 ? "lg:grid-cols-[1fr_130px]" : "lg:grid-cols-[130px_1fr]"
                  }`}
                >
                  {index !== 1 && (
                    <div className="flex justify-start lg:justify-center">
                      <div className="text-6xl font-semibold leading-none tracking-tight text-accent-1 md:text-7xl">
                        {section.step}
                      </div>
                    </div>
                  )}

                  <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/62 p-6 shadow-[0_12px_34px_rgba(31,41,55,0.08)] backdrop-blur-xl md:p-8 lg:p-10">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.46))]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/60 to-transparent" />

                    <div className={`relative z-10 ${index === 1 ? "text-center" : ""}`}>
                      <h2 className="text-2xl font-semibold leading-tight md:text-3xl">{section.title}</h2>

                      <div className="mt-5 space-y-4">
                        {section.body.map((paragraph, paragraphIndex) => (
                          <p key={paragraphIndex} className="text-sm leading-8 text-text/75 md:text-base">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {index === 1 && (
                    <div className="flex justify-start lg:justify-center">
                      <div className="text-6xl font-semibold leading-none tracking-tight text-accent-1 md:text-7xl">
                        {section.step}
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET DRIVERS */}
      <section className="relative pb-18 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent
            direction="vertical"
            reverse={false}
            distance={60}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mb-10 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.22em] text-accent-2">What influences price movement</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                Key forces that shape the Forex market
              </h2>
              <p className="mt-4 text-sm leading-8 text-text/70 md:text-base">
                The Forex market reacts to a wide mix of economic information, policy decisions, and trader behavior.
                These are some of the main forces that can move currencies.
              </p>
            </div>
          </AnimatedContent>

          <div className="space-y-6">
            {forexDrivers.map((item, index) => (
              <AnimatedContent
                key={item.step}
                direction="vertical"
                reverse={false}
                distance={60}
                delay={index * 70}
                threshold={0.12}
                config={{ tension: 50, friction: 25 }}
              >
                <div className="relative">
                  {index < forexDrivers.length - 1 && (
                    <div className="absolute left-6 top-16 hidden h-[calc(100%+1.5rem)] border-l border-dashed border-border/80 md:block" />
                  )}

                  <div className="relative flex flex-col gap-4 rounded-4xl border border-border/90 bg-white/58 p-5 shadow-[0_12px_34px_rgba(31,41,55,0.08)] backdrop-blur-xl md:flex-row md:items-start md:gap-6 md:p-7">
                    <div className="flex shrink-0 items-center gap-4 md:w-45 md:flex-col md:items-start md:gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-1 text-lg font-semibold text-white shadow-[0_10px_24px_rgba(126,217,87,0.28)]">
                        {item.step}
                      </div>

                      <h3 className="text-xl font-semibold leading-tight md:text-2xl">{item.title}</h3>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm leading-8 text-text/72 md:text-base">{item.text}</p>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForexBasics;
