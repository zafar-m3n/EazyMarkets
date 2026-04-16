import React from "react";

import AnimatedContent from "@/components/ui/AnimatedContent";
import BotCard from "@/components/bots/BotCard";

const bots = [
  {
    name: "Trial Bot",
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
    name: "CyberAlpha Bot",
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
    name: "StormTrader Bot",
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
    name: "InfinityCore Bot",
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
    name: "ClearPath Bot",
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
    name: "TechTrend Bot",
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
    name: "ProfitPilot Bot",
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
    name: "RapidGain Bot",
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

const BotsListSection = () => {
  return (
    <section id="bots-list" className="relative py-18 md:py-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 top-[18%] h-36 w-36 rounded-full bg-accent-1/18 blur-3xl md:h-72 md:w-72" />
        <div className="absolute left-[40%] top-[45%] h-32 w-32 rounded-full bg-accent-2/14 blur-3xl md:h-64 md:w-64" />
        <div className="absolute -right-20 top-[35%] h-40 w-40 rounded-full bg-accent-1/14 blur-3xl md:h-80 md:w-80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
        {bots.map((bot, index) => (
          <BotCard key={bot.name} bot={bot} index={index} />
        ))}
      </div>
    </section>
  );
};

export default BotsListSection;
