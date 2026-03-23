import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import botsHero from "@/assets/botsHero.jpg";

import Button from "@/components/ui/Button";
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

const bots = [
  {
    name: "TrialBot",
    tag: "Trial",
    price: "No Days Funded",
    supportedMarkets: "Minor Forex",
    duration: "10 Minutes",
    specifications: ["Scalping", "Low drawdown", "Safe settings"],
    riskManagement: "Stop loss",
    profitOptimization: "Basic AI signals",
    roi: "10% Weekly",
    icon: "solar:cup-hot-bold",
  },
  {
    name: "SwiftAI 1000",
    tag: "Moderate",
    price: "$500",
    oldPrice: "$1000",
    supportedMarkets: "Forex + Commodities",
    duration: "20 Minutes",
    specifications: ["Multi-strategy approach", "High accuracy", "Trend-following", "Countertrend"],
    riskManagement: "Trailing stop locked",
    profitOptimization: "Real-time market scans",
    roi: "7% Weekly",
    icon: "solar:bolt-bold",
  },
  {
    name: "ProfitX 2000",
    tag: "Advanced",
    price: "$2000",
    supportedMarkets: "Forex, Commodities",
    duration: "25 Minutes",
    specifications: ["Auto-adaptive trading", "Customizable risk settings", "Trend-following", "Scalping"],
    riskManagement: "Risk matrix enabled",
    profitOptimization: "AI based entry/exit",
    roi: "10% Weekly",
    icon: "solar:graph-up-bold",
  },
  {
    name: "AlphaBot 3000",
    tag: "Pro Level",
    price: "$3000",
    supportedMarkets: "Stocks + Global Indices",
    duration: "1 Hour",
    specifications: ["Automated trend strategy", "Countertrend strategy", "Trend-following", "Scalping"],
    riskManagement: "Auto hedging enabled",
    profitOptimization: "Deep learning analytics",
    roi: "12% Weekly",
    icon: "solar:shield-check-bold",
  },
  {
    name: "QuantumAI 5000",
    tag: "Premium",
    price: "$5000",
    supportedMarkets: "All Major Markets",
    duration: "5 Hours",
    specifications: ["High-frequency scalping", "Low drawdown", "Scalping", "Advanced filters"],
    riskManagement: "Adaptive risk controls",
    profitOptimization: "Predictive analytics",
    roi: "15% Weekly",
    icon: "solar:stars-bold",
  },
  {
    name: "ZenithPro 7500",
    tag: "Elite AI Suite",
    price: "$7500",
    supportedMarkets: "All Markets + Custom Options",
    duration: "7 Hours",
    specifications: [
      "Low-risk",
      "Steady profit",
      "Adjustable settings",
      "Scalping",
      "Trend-following",
      "Low-risk trades",
    ],
    riskManagement: "Full portfolio automation",
    profitOptimization: "Self-learning algorithms",
    roi: "20% Weekly",
    icon: "solar:medal-star-bold",
  },
  {
    name: "XclusiveAI",
    tag: "Exclusive",
    price: "$25,000",
    supportedMarkets: "All Markets + Custom Options",
    duration: "12 Hours",
    specifications: [
      "Low-risk",
      "Steady profit",
      "Adjustable settings",
      "Scalping",
      "Trend-following",
      "Low-risk trades",
    ],
    riskManagement: "Full portfolio automation",
    profitOptimization: "Self-learning algorithms",
    cashback: "25% Withdrawable",
    roi: "35% Weekly",
    icon: "solar:crown-bold",
  },
  {
    name: "AtomX Ultra",
    tag: "Ultimate Trader",
    price: "$100,000",
    supportedMarkets: "All Markets + Custom Options",
    duration: "24 Hours",
    specifications: [
      "Low-risk",
      "Steady profit",
      "Adjustable settings",
      "Scalping",
      "Trend-following",
      "Low-risk trades",
    ],
    riskManagement: "Full portfolio automation",
    profitOptimization: "Self-learning algorithms",
    cashback: "50% Withdrawable",
    roi: "45% Weekly",
    icon: "solar:atom-bold",
  },
];

const InfoBlock = ({ label, value, list = false }) => (
  <div className="rounded-2xl border border-accent-1/10 bg-background/35 p-4 backdrop-blur-sm">
    <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">{label}</p>

    {list ? (
      <ul className="mt-3 space-y-2 text-sm text-text/75">
        {value.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 text-accent-2">
              <Icon icon="mdi:chevron-right" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="mt-3 text-sm text-text/75 leading-7">{value}</p>
    )}
  </div>
);

const BotCard = ({ bot }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.08 }}
      variants={fadeUp}
      className="group relative overflow-hidden rounded-[1.9rem] border border-accent-1/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 md:p-7 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-1/25 hover:shadow-[0_24px_90px_rgba(234,179,8,0.12)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,0,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.08),transparent_28%)] opacity-80" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/60 to-transparent" />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/8 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent-2/8 blur-3xl" />

      <div className="relative z-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/10 text-accent-1 text-2xl shadow-[0_0_30px_rgba(255,255,0,0.08)]">
              <Icon icon={bot.icon} />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl md:text-[1.35rem] font-semibold leading-tight">{bot.name}</h3>
                <span className="rounded-full border border-accent-1/15 bg-accent-1/8 px-3 py-1 text-xs font-medium tracking-[0.18em] text-accent-2/85">
                  {bot.tag}
                </span>
              </div>

              <p className="mt-2 text-sm text-text/65 leading-7 max-w-2xl">
                Built for {bot.supportedMarkets.toLowerCase()} with a focus on {bot.profitOptimization.toLowerCase()}.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-accent-1/15 bg-accent-1/8 px-4 py-3 lg:min-w-37.5 lg:text-right">
            {bot.oldPrice ? <p className="text-sm text-text/35 line-through">{bot.oldPrice}</p> : null}
            <p className="text-xl md:text-2xl font-semibold text-accent-2">{bot.price}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <div className="space-y-4">
            <InfoBlock label="Supported Markets" value={bot.supportedMarkets} />
            <InfoBlock label="Duration" value={bot.duration} />
          </div>

          <div className="xl:col-span-2">
            <InfoBlock label="Specifications" value={bot.specifications} list />
          </div>

          <div className="space-y-4">
            <InfoBlock label="Risk Management" value={bot.riskManagement} />
            <InfoBlock label="Profit Optimization" value={bot.profitOptimization} />
          </div>

          <div className="space-y-4">
            {bot.cashback ? <InfoBlock label="Cashback" value={bot.cashback} /> : null}
            <InfoBlock label="ROI" value={bot.roi} />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-accent-1/85 text-sm font-medium">
          <span>Learn more</span>
          <Icon icon="solar:arrow-right-up-bold" className="text-base" />
        </div>
      </div>
    </motion.div>
  );
};

const Bots = () => {
  const scrollToBots = () => {
    const el = document.getElementById("bots-list");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCta = () => {
    const el = document.getElementById("bots-cta");
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
                <span className="text-accent-2">Bots</span>
              </motion.div>

              <motion.p variants={fadeUp} className="mt-6 text-sm text-text/65 uppercase tracking-[0.22em]">
                Automated Trading Bots
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight"
              >
                Find trading{" "}
                <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">bots</span>{" "}
                built for smarter{" "}
                <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                  automation
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-5 text-sm md:text-base text-text/70 leading-8">
                Explore a range of automated bots designed for different strategies, risk profiles, and capital levels.
                From trial access to high-capital AI suites, choose the bot environment that fits your market style.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button variant="primary" icon="mdi:robot-outline" onClick={scrollToBots}>
                  Explore Bots
                </Button>

                <Button variant="secondary" icon="mdi:rocket-launch-outline" onClick={scrollToCta}>
                  Get Started
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-accent-1/10 bg-card/70 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-text/55">Bot Tiers</p>
                  <p className="mt-2 text-lg font-semibold">8 Options</p>
                </div>
                <div className="rounded-2xl border border-accent-1/10 bg-card/70 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-text/55">Markets</p>
                  <p className="mt-2 text-lg font-semibold">Forex to Global</p>
                </div>
                <div className="rounded-2xl border border-accent-1/10 bg-card/70 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-text/55">ROI Range</p>
                  <p className="mt-2 text-lg font-semibold">10% to 45%</p>
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
                <img src={botsHero} alt="Trading bot hero" className="w-full h-90 md:h-115 object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

                <div className="absolute left-5 right-5 bottom-5 rounded-2xl border border-accent-1/10 bg-background/50 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-2">EazyMarkets Bots</p>
                  <p className="mt-2 text-lg font-semibold text-text">
                    Choose automated systems matched to your strategy and account size
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-18 md:py-20 border-b border-border/60 relative">
        <div className="absolute left-[10%] top-[28%] h-40 w-40 rounded-full bg-accent-1/7 blur-[110px]" />
        <div className="absolute right-[12%] bottom-[12%] h-48 w-48 rounded-full bg-accent-2/7 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ bots /</p>
              <h2 className="mt-3 text-2xl md:text-4xl font-semibold leading-tight">Best Robots For Trading</h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <p className="text-text/70 leading-8 text-sm md:text-base">
                EazyMarkets offers trading bots for different market conditions, trading styles, and capital levels.
                Whether you want trial access, structured automation, or advanced AI-driven portfolio support, each bot
                is designed to help you choose a setup that aligns with your strategy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOTS LIST */}
      <section id="bots-list" className="py-18 md:py-20 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-36 h-36 md:w-72 md:h-72 bg-accent-1 opacity-15 blur-3xl rounded-full top-[18%] -left-20" />
          <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-accent-2 opacity-10 blur-3xl rounded-full top-[45%] left-[40%]" />
          <div className="absolute w-40 h-40 md:w-80 md:h-80 bg-accent-1 opacity-10 blur-3xl rounded-full top-[35%] -right-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {bots.map((bot) => (
            <BotCard key={bot.name} bot={bot} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="bots-cta" className="py-18 md:py-20 relative">
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
                <p className="text-sm uppercase tracking-[0.22em] text-accent-2">Ready to Automate Smarter?</p>
                <h2 className="mt-3 text-2xl md:text-4xl font-semibold leading-tight">
                  Choose an AI trading bot aligned with your goals
                </h2>
                <p className="mt-5 text-text/70 leading-8 max-w-2xl text-sm md:text-base">
                  Start with a bot that fits your current level and scale into more advanced automation, deeper
                  analysis, and stronger portfolio support as your trading journey grows.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="primary" icon="mdi:robot-outline">
                    Explore Bots
                  </Button>
                  <Button variant="secondary" icon="mdi:rocket-launch-outline">
                    Open Account
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

export default Bots;
