import React from "react";
import { Icon } from "@iconify/react";
import AnimatedContent from "@/components/ui/AnimatedContent";

const FeaturesSection = ({ sectionAnimation }) => {
  const featureCards = [
    {
      icon: "solar:bolt-bold",
      title: "AI-Powered Trade Signals",
      stat: "Core Engine",
      description:
        "Get high-speed market intelligence backed by pattern detection, momentum analysis, and structured signal logic designed to help traders identify opportunities with greater clarity and timing. Includes real-time analysis, faster market reaction, and decision support with less guesswork.",
      className: "lg:col-span-2",
    },
    {
      icon: "solar:danger-triangle-bold",
      title: "Integrated Risk Controls",
      stat: "Risk Layer",
      description:
        "Execute with stronger discipline using tools for exposure control, position awareness, and trade protection that help keep every move aligned with your risk framework. Built around position discipline, exposure awareness, and protective monitoring.",
      className: "lg:col-span-1",
    },
    {
      icon: "solar:chart-2-bold",
      title: "Performance Analytics",
      description:
        "Review strategy outcomes, timing, and behaviour through clearer performance insight so traders can understand what is working and where refinement is needed.",
      className: "lg:col-span-1",
    },
    {
      icon: "solar:cursor-bold",
      title: "Smart Automation",
      description:
        "Reduce hesitation with automated support that keeps execution closer to your intended trading logic and helps traders stay more consistent in fast markets.",
      className: "lg:col-span-1",
    },
    {
      icon: "solar:bell-bold",
      title: "Instant Market Alerts",
      description:
        "Stay ready with alerting systems that highlight emerging setups, changes in momentum, and key market shifts as they happen.",
      className: "lg:col-span-1",
    },
    {
      icon: "solar:lock-keyhole-bold",
      title: "Secure Trading Environment",
      stat: "Reliability Layer",
      description:
        "Trade on infrastructure built for reliability, access protection, and a more dependable experience across live market activity, including protected sessions, stable infrastructure, and reliable access.",
      className: "lg:col-span-2",
    },
    {
      icon: "solar:cpu-bolt-bold",
      title: "Adaptive Strategy Intelligence",
      stat: "AI Layer",
      description:
        "Continuously refine trading behaviour with adaptive models that respond to changing market conditions, helping traders stay aligned with evolving trends, volatility shifts, and momentum patterns without relying on static strategies.",
      className: "lg:col-span-1",
    },
  ];

  const renderBentoCard = ({ icon, number, title, description, className = "", stat }) => (
    <div
      className={`group relative overflow-hidden rounded-[1.9rem] border border-border/90 bg-white/58 p-6 md:p-7 shadow-[0_12px_38px_rgba(31,41,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-1/45 hover:shadow-[0_16px_46px_rgba(126,217,87,0.14)] ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.38))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_28%)] opacity-90" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/18 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent-2/14 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/30 bg-white/70 text-accent-2 text-2xl shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
            <Icon icon={icon} />
          </div>

          {number ? (
            <span className="rounded-full border border-accent-1/25 bg-white/75 px-3 py-1 text-xs font-medium tracking-[0.22em] text-accent-2">
              {number}
            </span>
          ) : null}
        </div>

        {stat ? (
          <div className="mt-6 inline-flex w-fit items-center rounded-full border border-border/90 bg-white/75 px-3 py-1.5 text-xs text-text/65">
            {stat}
          </div>
        ) : null}

        <h3 className="mt-4 text-xl font-semibold leading-tight md:text-[1.35rem]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-text/72 md:text-[15px]">{description}</p>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent-2">
          <span>Learn more</span>
          <Icon icon="solar:arrow-right-up-bold" className="text-base" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="features" className="relative border-b border-border/70 py-20 lg:py-24">
      <div className="absolute left-[8%] top-[20%] h-40 w-40 rounded-full bg-accent-2/10 blur-[110px]" />
      <div className="absolute bottom-[12%] right-[12%] h-52 w-52 rounded-full bg-accent-1/8 blur-[120px]" />

      <AnimatedContent {...sectionAnimation(5)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Powerful Features</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              A smarter trading stack built for speed, structure, and control
            </h2>
            <p className="mt-5 leading-7 text-text/72">
              Every feature is designed to help traders move faster, reduce noise, and stay disciplined when markets are
              moving quickly.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-3">
            {featureCards.map((card) => (
              <React.Fragment key={card.title}>{renderBentoCard(card)}</React.Fragment>
            ))}
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default FeaturesSection;
