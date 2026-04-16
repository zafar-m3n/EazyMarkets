import React from "react";

import MarketHero from "@/components/markets/MarketHero";
import MarketIntro from "@/components/markets/MarketIntro";
import MarketWidgetSection from "@/components/markets/MarketWidgetSection";
import MarketCTA from "@/components/markets/MarketCTA";

import forexHero from "@/assets/forexHero.jpg";
import forexCTA from "@/assets/homeCTA.webp";

const Forex = () => {
  const scrollToIntro = () => {
    const el = document.getElementById("market-intro");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
        <div className="absolute bottom-[8%] left-[18%] h-80 w-80 rounded-full bg-accent-1/8 blur-[150px]" />
      </div>

      <MarketHero
        breadcrumbLabel="Markets"
        pageName="Forex"
        eyebrow="Markets"
        title="Trade Forex markets with precision"
        highlightedText="precision"
        description="Access the world’s most liquid market with flexible trading opportunities, real-time execution, and intelligent tools built for active traders."
        image={forexHero}
        imageAlt="Forex trading market"
        imageBadgeLabel="Forex Market"
        imageBadgeText="Global currency pairs, live opportunity, and smarter execution"
        primaryButtonText="Start Trading"
        secondaryButtonText="Learn More"
        primaryButtonIcon="mdi:rocket-launch-outline"
        secondaryButtonIcon="mdi:chart-line"
        stats={["24/5 Market", "High Liquidity", "Major Pairs", "Fast Execution"]}
        onPrimaryClick={() => {
          window.open("https://portal.eazymarkets.com/signup", "_blank");
        }}
        onSecondaryClick={scrollToIntro}
      />

      <MarketIntro
        sectionId="market-intro"
        eyebrow="/ forex market /"
        title="What is Forex and why trade it?"
        description={[
          "Forex is the global market where currencies are bought and sold. It is one of the most actively traded financial markets in the world, known for its liquidity, accessibility, and continuous movement throughout the trading week.",
          "For traders, forex offers flexibility, access to major and minor pairs, and frequent opportunities shaped by macroeconomic releases, central bank decisions, and shifting market sentiment.",
        ]}
        whyTitle="Why trade Forex?"
        highlights={["Major Pairs", "Minor Pairs", "High Liquidity", "24/5 Access"]}
        benefits={[
          {
            icon: "solar:graph-up-bold",
            title: "High Liquidity",
            description:
              "Deep market participation can support smoother execution and tighter pricing on widely traded currency pairs.",
          },
          {
            icon: "solar:clock-circle-bold",
            title: "24/5 Market Access",
            description:
              "Forex trading runs across major global sessions, creating opportunities throughout the business week.",
          },
          {
            icon: "solar:bolt-bold",
            title: "Fast-Moving Opportunities",
            description:
              "Currencies respond quickly to data releases, interest rate decisions, and macroeconomic developments.",
          },
          {
            icon: "solar:shield-check-bold",
            title: "Strategy-Friendly Market",
            description:
              "Forex works well with disciplined analysis, structured execution, and risk-managed trading approaches.",
          },
        ]}
      />

      <MarketWidgetSection
        title="Live Forex market overview"
        description="Monitor major currency pairs and real-time forex price movement."
        symbolsGroups={[
          {
            name: "Forex",
            symbols: [
              { name: "FX:EURUSD", displayName: "EUR/USD" },
              { name: "FX:GBPUSD", displayName: "GBP/USD" },
              { name: "FX:USDJPY", displayName: "USD/JPY" },
              { name: "FX:USDCHF", displayName: "USD/CHF" },
              { name: "FX:AUDUSD", displayName: "AUD/USD" },
              { name: "FX:USDCAD", displayName: "USD/CAD" },
            ],
          },
        ]}
      />

      <MarketCTA
        sectionId="market-cta"
        eyebrow="Start Trading Forex Today"
        title="Trade global currency markets with a platform built for speed and consistency"
        description="Open your account and access a forex trading environment designed for fast execution, intelligent tools, and more structured market participation."
        image={forexCTA}
        imageAlt="Forex trading call to action"
        primaryButtonText="Open Account"
        secondaryButtonText="Explore Bots"
        primaryButtonIcon="mdi:rocket-launch-outline"
        secondaryButtonIcon="mdi:robot-outline"
        onPrimaryClick={() => {
          window.open("https://portal.eazymarkets.com/signup", "_blank");
        }}
        onSecondaryClick={() => {
          window.location.href = "/bots";
        }}
      />
    </div>
  );
};

export default Forex;
