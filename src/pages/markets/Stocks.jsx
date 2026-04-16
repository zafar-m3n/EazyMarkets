import React from "react";

import MarketHero from "@/components/markets/MarketHero";
import MarketIntro from "@/components/markets/MarketIntro";
import MarketWidgetSection from "@/components/markets/MarketWidgetSection";
import MarketCTA from "@/components/markets/MarketCTA";

import heroImage from "@/assets/stocksHero.webp";
import ctaImage from "@/assets/homeCTA.webp";

const Stocks = () => {
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
        pageName="Stocks"
        eyebrow="Markets"
        title="Trade Stocks with greater clarity"
        highlightedText="clarity"
        description="Access leading company shares with market-driven opportunities, structured execution, and tools built for informed trading decisions."
        image={heroImage}
        imageAlt="Stocks trading market"
        imageBadgeLabel="Stock Market"
        imageBadgeText="Company shares, market insight, and smarter execution"
        primaryButtonText="Start Trading"
        secondaryButtonText="Learn More"
        primaryButtonIcon="mdi:rocket-launch-outline"
        secondaryButtonIcon="mdi:chart-line"
        stats={["Global Shares", "Company Exposure", "Sector Variety", "Market Insight"]}
        onPrimaryClick={() => {
          window.open("https://portal.eazymarkets.com/signup", "_blank");
        }}
        onSecondaryClick={scrollToIntro}
      />

      <MarketIntro
        sectionId="market-intro"
        eyebrow="/ stock market /"
        title="What are Stocks and why trade them?"
        description={[
          "Stocks represent ownership in publicly listed companies and are among the most widely followed financial instruments in global markets.",
          "For traders, stocks provide access to company-driven price movement, earnings-related opportunities, and sector-based trends that can support both short-term and medium-term strategies.",
        ]}
        whyTitle="Why trade Stocks?"
        highlights={["Global Companies", "Sector Exposure", "Earnings Moves", "Wide Choice"]}
        benefits={[
          {
            icon: "solar:buildings-bold",
            title: "Exposure to Major Companies",
            description:
              "Trade price movement in globally recognized businesses across technology, finance, energy, and more.",
          },
          {
            icon: "solar:chart-bold",
            title: "Earnings-Driven Opportunities",
            description:
              "Company reports, guidance updates, and market expectations can create notable price movement.",
          },
          {
            icon: "solar:pie-chart-2-bold",
            title: "Sector Diversity",
            description:
              "Stock markets provide access to a broad mix of industries and themes across global economies.",
          },
          {
            icon: "solar:shield-check-bold",
            title: "Structured Analysis",
            description:
              "Stocks work well with technical analysis, market sentiment tracking, and disciplined trade planning.",
          },
        ]}
      />

      <MarketWidgetSection
        title="Live Stocks market overview"
        description="Follow major global stocks and real-time equity price movement."
        symbolsGroups={[
          {
            name: "Stocks",
            symbols: [
              { name: "NASDAQ:AAPL", displayName: "Apple" },
              { name: "NASDAQ:MSFT", displayName: "Microsoft" },
              { name: "NASDAQ:GOOGL", displayName: "Alphabet" },
              { name: "NASDAQ:AMZN", displayName: "Amazon" },
              { name: "NASDAQ:TSLA", displayName: "Tesla" },
              { name: "NASDAQ:NVDA", displayName: "Nvidia" },
            ],
          },
        ]}
      />

      <MarketCTA
        sectionId="market-cta"
        eyebrow="Start Trading Stocks Today"
        title="Access company-driven market opportunities with a platform built for consistency and smarter execution"
        description="Open your account and explore stock trading with tools designed to support clear decision-making and structured market participation."
        image={ctaImage}
        imageAlt="Stocks trading call to action"
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

export default Stocks;
