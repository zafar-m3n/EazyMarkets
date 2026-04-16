import React from "react";

import MarketHero from "@/components/markets/MarketHero";
import MarketIntro from "@/components/markets/MarketIntro";
import MarketWidgetSection from "@/components/markets/MarketWidgetSection";
import MarketCTA from "@/components/markets/MarketCTA";

import heroImage from "@/assets/cryptoHero.webp";
import ctaImage from "@/assets/homeCTA.webp";

const Crypto = () => {
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
        pageName="Crypto"
        eyebrow="Markets"
        title="Trade Crypto markets with confidence"
        highlightedText="confidence"
        description="Access dynamic digital asset markets with real-time movement, flexible opportunities, and trading tools built for fast-changing conditions."
        image={heroImage}
        imageAlt="Crypto trading market"
        imageBadgeLabel="Crypto Market"
        imageBadgeText="Digital assets, continuous movement, and smarter execution"
        primaryButtonText="Start Trading"
        secondaryButtonText="Learn More"
        primaryButtonIcon="mdi:rocket-launch-outline"
        secondaryButtonIcon="mdi:chart-line"
        stats={["High Volatility", "Digital Assets", "Major Coins", "Fast Markets"]}
        onPrimaryClick={() => {
          window.open("https://portal.eazymarkets.com/signup", "_blank");
        }}
        onSecondaryClick={scrollToIntro}
      />

      <MarketIntro
        sectionId="market-intro"
        eyebrow="/ crypto market /"
        title="What is Crypto and why trade it?"
        description={[
          "Crypto markets give traders access to digital assets such as Bitcoin and Ethereum, with price movement driven by adoption trends, sentiment, regulation, and broader market momentum.",
          "For active traders, crypto offers volatility, round-the-clock price action, and the ability to participate in one of the most closely watched emerging asset classes in global markets.",
        ]}
        whyTitle="Why trade Crypto?"
        highlights={["Digital Assets", "Strong Momentum", "High Volatility", "Popular Pairs"]}
        benefits={[
          {
            icon: "solar:bolt-bold",
            title: "High Volatility",
            description:
              "Crypto markets often move quickly, creating short-term trading opportunities for active market participants.",
          },
          {
            icon: "solar:clock-circle-bold",
            title: "Continuous Activity",
            description:
              "Digital asset markets remain active beyond traditional exchange hours, supporting more flexible participation.",
          },
          {
            icon: "solar:graph-up-bold",
            title: "Strong Market Interest",
            description:
              "Major cryptocurrencies attract significant global attention, liquidity, and frequent price movement.",
          },
          {
            icon: "solar:shield-check-bold",
            title: "Strategy Potential",
            description: "Crypto can suit momentum-based, breakout, and disciplined risk-managed trading strategies.",
          },
        ]}
      />

      <MarketWidgetSection
        title="Live Crypto market overview"
        description="Track major cryptocurrencies and real-time digital asset price movement."
        symbolsGroups={[
          {
            name: "Crypto",
            symbols: [
              { name: "BINANCE:BTCUSDT", displayName: "Bitcoin" },
              { name: "BINANCE:ETHUSDT", displayName: "Ethereum" },
              { name: "BINANCE:BNBUSDT", displayName: "BNB" },
              { name: "BINANCE:SOLUSDT", displayName: "Solana" },
              { name: "BINANCE:XRPUSDT", displayName: "XRP" },
              { name: "BINANCE:ADAUSDT", displayName: "Cardano" },
            ],
          },
        ]}
      />

      <MarketCTA
        sectionId="market-cta"
        eyebrow="Start Trading Crypto Today"
        title="Access digital asset markets with tools built for speed, structure, and active decision-making"
        description="Open your account and explore crypto trading with a platform designed for real-time market participation and smarter execution."
        image={ctaImage}
        imageAlt="Crypto trading call to action"
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

export default Crypto;
