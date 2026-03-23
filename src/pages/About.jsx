import React, { useRef } from "react";
import { Icon } from "@iconify/react";

import Button from "@/components/ui/Button";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import AnimatedContent from "@/components/ui/AnimatedContent";
import homeCTA from "@/assets/homeCTA.jpg";
import aboutHero from "@/assets/aboutHero.jpg";

const tickerTexts = [
  "AI AUTOMATION • SMART EXECUTION • DATA-DRIVEN TRADING • REAL-TIME ANALYSIS • DISCIPLINED STRATEGY •",
  "INTELLIGENT SYSTEMS • MARKET INSIGHT • RISK-AWARE EXECUTION • TRADER-FOCUSED INNOVATION •",
];

const aboutBentoCards = [
  {
    icon: "solar:target-bold",
    title: "Our Mission",
    description:
      "To help traders operate with more structure, stronger analysis, and smarter execution through practical AI tools.",
    className: "lg:col-span-2",
    stat: "Mission",
  },
  {
    icon: "solar:eye-bold",
    title: "Our Vision",
    description:
      "To make intelligent trading systems more accessible for traders navigating fast-moving global markets.",
    className: "lg:col-span-1",
    stat: "Vision",
  },
  {
    icon: "solar:shield-check-bold",
    title: "Our Edge",
    description: "We focus on clarity, discipline, and real-time support instead of unnecessary complexity.",
    className: "lg:col-span-1",
    stat: "Advantage",
  },
  {
    icon: "solar:graph-up-bold",
    title: "How We Build",
    description:
      "Every layer is designed to improve decision-making, execution quality, and confidence in changing market conditions.",
    className: "lg:col-span-2",
    stat: "Approach",
  },
];

const About = () => {
  const scrollContainerRef = useRef(null);

  const scrollToContent = () => {
    const el = document.getElementById("about-content");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCta = () => {
    const el = document.getElementById("about-cta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderBentoCard = ({ icon, title, description, className = "", stat }) => (
    <div
      className={`group relative overflow-hidden rounded-[1.9rem] border border-accent-1/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-1/25 hover:shadow-[0_24px_90px_rgba(234,179,8,0.12)] md:p-7 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,0,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.08),transparent_28%)] opacity-80" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/60 to-transparent" />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/8 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent-2/8 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/10 text-2xl text-accent-1 shadow-[0_0_30px_rgba(255,255,0,0.08)]">
            <Icon icon={icon} />
          </div>

          {stat ? (
            <span className="rounded-full border border-accent-1/15 bg-accent-1/8 px-3 py-1 text-xs font-medium tracking-[0.18em] text-accent-2/85">
              {stat}
            </span>
          ) : null}
        </div>

        <h3 className="mt-5 text-xl font-semibold leading-tight md:text-[1.35rem]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-text/72 md:text-[15px]">{description}</p>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent-1/85">
          <span>Learn more</span>
          <Icon icon="solar:arrow-right-up-bold" className="text-base" />
        </div>
      </div>
    </div>
  );

  return (
    <div ref={scrollContainerRef} className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/8 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/8 blur-[140px]" />
        <div className="absolute bottom-[8%] left-[18%] h-80 w-80 rounded-full bg-accent-1/6 blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
          <div className="absolute right-[10%] top-[10%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
          <div className="absolute -bottom-10 left-[40%] h-48 w-48 rounded-full bg-accent-1/8 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02),transparent_20%)]" />
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
                  <div className="inline-flex items-center gap-2 rounded-full border border-accent-1/10 bg-card/70 px-4 py-2 text-xs text-text/70 backdrop-blur-md">
                    <span>Home</span>
                    <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                    <span className="text-accent-2">About Us</span>
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
                  <p className="mt-6 text-sm uppercase tracking-[0.22em] text-text/65">About EazyMarkets</p>
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
                    Smarter trading powered by{" "}
                    <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                      intelligent systems
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
                    EazyMarkets combines AI, automation, and real-time market analysis to help traders act with more
                    clarity, speed, and consistency.
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
                    <Button variant="primary" icon="mdi:information-outline" onClick={scrollToContent}>
                      Learn About Us
                    </Button>

                    <Button variant="secondary" icon="mdi:rocket-launch-outline" onClick={scrollToCta}>
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
                    <div className="rounded-2xl border border-accent-1/10 bg-card/70 p-4 backdrop-blur-md">
                      <p className="text-xs uppercase tracking-[0.18em] text-text/55">Focus</p>
                      <p className="mt-2 text-lg font-semibold">AI Trading</p>
                    </div>
                    <div className="rounded-2xl border border-accent-1/10 bg-card/70 p-4 backdrop-blur-md">
                      <p className="text-xs uppercase tracking-[0.18em] text-text/55">Approach</p>
                      <p className="mt-2 text-lg font-semibold">Automation</p>
                    </div>
                    <div className="rounded-2xl border border-accent-1/10 bg-card/70 p-4 backdrop-blur-md">
                      <p className="text-xs uppercase tracking-[0.18em] text-text/55">Goal</p>
                      <p className="mt-2 text-lg font-semibold">Better Decisions</p>
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
                <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/12 to-accent-2/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-4xl border border-accent-1/10 bg-card/70 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-md">
                  <img src={aboutHero} alt="About EazyMarkets" className="h-90 w-full object-cover md:h-115" />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-accent-1/10 bg-background/50 p-4 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent-2">EazyMarkets</p>
                    <p className="mt-2 text-lg font-semibold text-text">
                      AI-powered tools built for more disciplined trading
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* SCROLL VELOCITY */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute left-[12%] top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-accent-1/8 blur-3xl" />

        <AnimatedContent
          direction="horizontal"
          reverse={true}
          distance={100}
          threshold={0.12}
          config={{ tension: 50, friction: 25 }}
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <ScrollVelocity
              scrollContainerRef={scrollContainerRef}
              texts={tickerTexts}
              velocity={90}
              numCopies={8}
              damping={45}
              stiffness={350}
              parallaxClassName="py-4"
              scrollerClassName="text-text"
              scrollerStyle={{
                opacity: 0.9,
                textShadow: "0 0 20px rgba(250,204,21,0.35)",
              }}
            />
          </div>
        </AnimatedContent>
      </section>

      <div id="about-content">
        {/* COMPACT INTRO */}
        <section className="relative border-b border-border/60 py-18 md:py-20">
          <div className="absolute left-[10%] top-[28%] h-40 w-40 rounded-full bg-accent-1/7 blur-[110px]" />
          <div className="absolute bottom-[12%] right-[12%] h-48 w-48 rounded-full bg-accent-2/7 blur-[120px]" />

          <AnimatedContent
            direction="horizontal"
            reverse={false}
            distance={100}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ about /</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Transforming trading with practical AI
                  </h2>
                </div>

                <div>
                  <p className="text-sm leading-8 text-text/70 md:text-base">
                    We build systems that help traders interpret live market data, reduce noise, and make more confident
                    decisions.
                  </p>

                  <p className="mt-4 text-sm leading-8 text-text/70 md:text-base">
                    Instead of adding complexity, our focus is on intelligent automation, structured execution, and
                    tools that support consistency in fast-moving conditions.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* BENTO GRID */}
        <section className="relative border-b border-border/60 py-18 md:py-20">
          <div className="absolute right-[8%] top-[20%] h-44 w-44 rounded-full bg-accent-2/7 blur-[110px]" />
          <div className="absolute bottom-[10%] left-[6%] h-48 w-48 rounded-full bg-accent-1/7 blur-[120px]" />

          <AnimatedContent
            direction="horizontal"
            reverse={true}
            distance={100}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.24em] text-accent-2/80">Mission, Vision & Value</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Built for traders who want more than instinct
                </h2>
                <p className="mt-5 leading-7 text-text/70">
                  Our goal is to give traders a more structured and intelligent way to read markets and act with
                  confidence.
                </p>
              </div>

              <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-3">
                {aboutBentoCards.map((card, index) => (
                  <AnimatedContent
                    key={card.title}
                    direction="vertical"
                    reverse={false}
                    distance={70}
                    delay={index * 80}
                    threshold={0.1}
                    config={{ tension: 50, friction: 25 }}
                  >
                    {renderBentoCard(card)}
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </section>
      </div>

      {/* CTA */}
      <section id="about-cta" className="relative py-18 md:py-20">
        <div className="absolute left-[10%] top-[15%] h-48 w-48 rounded-full bg-accent-1/8 blur-[120px]" />
        <div className="absolute bottom-[12%] right-[10%] h-56 w-56 rounded-full bg-accent-2/8 blur-[130px]" />

        <AnimatedContent
          direction="horizontal"
          reverse={false}
          distance={100}
          threshold={0.15}
          config={{ tension: 50, friction: 25 }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-4xl border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.018))] p-8 shadow-[0_24px_90px_rgba(0,0,0,0.28)] sm:p-10 lg:p-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,0,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.10),transparent_32%)]" />

              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">Ready to Trade Smarter?</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Join a platform built for intelligent strategy and real-time execution
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">
                    Discover a more structured trading experience with AI-backed systems designed to help you analyse
                    faster, execute clearly, and trade with stronger consistency.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button variant="primary" icon="mdi:rocket-launch-outline">
                      Get Started
                    </Button>
                    <Button variant="secondary" icon="mdi:chart-line">
                      Learn More
                    </Button>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-background/60 shadow-[0_16px_60px_rgba(0,0,0,0.22)]">
                  <img
                    src={homeCTA}
                    alt="Smart trading technology"
                    className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>
    </div>
  );
};

export default About;
