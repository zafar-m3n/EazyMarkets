import React from "react";

import MarketHero from "@/components/markets/MarketHero";
import MarketIntro from "@/components/markets/MarketIntro";
import MarketWidgetSection from "@/components/markets/MarketWidgetSection";
import MarketCTA from "@/components/markets/MarketCTA";

import heroImage from "@/assets/indicesHero.jpg";
import ctaImage from "@/assets/homeCTA.webp";

const Indices = () => {
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
        pageName="Indices"
        eyebrow="Markets"
        title="Trade Indices with broader market insight"
        highlightedText="insight"
        description="Access major market benchmarks and trade the performance of broader economies, sectors, and investor sentiment through leading indices."
        image={heroImage}
        imageAlt="Indices trading market"
        imageBadgeLabel="Indices Market"
        imageBadgeText="Market benchmarks, broader trends, and smarter execution"
        primaryButtonText="Start Trading"
        secondaryButtonText="Learn More"
        primaryButtonIcon="mdi:rocket-launch-outline"
        secondaryButtonIcon="mdi:chart-line"
        stats={["Global Indices", "Macro Themes", "Market Benchmarks", "Broad Exposure"]}
        onPrimaryClick={() => {
          window.open("https://portal.eazymarkets.com/signup", "_blank");
        }}
        onSecondaryClick={scrollToIntro}
      />

      <MarketIntro
        sectionId="market-intro"
        eyebrow="/ indices market /"
        title="What are Indices and why trade them?"
        description={[
          "Indices track the performance of a group of stocks and are often used as benchmarks for broader market conditions in major economies.",
          "For traders, indices offer a way to participate in wider market sentiment, economic direction, and sector-weighted movement without focusing on a single company.",
        ]}
        whyTitle="Why trade Indices?"
        highlights={["Market Benchmarks", "Broader Exposure", "Global Economies", "Macro Trends"]}
        benefits={[
          {
            icon: "solar:chart-square-bold",
            title: "Broader Market Exposure",
            description:
              "Indices reflect the performance of multiple companies, giving traders access to wider market movement.",
          },
          {
            icon: "solar:global-bold",
            title: "Macro-Focused Trading",
            description:
              "They are strongly influenced by economic data, central bank policy, and overall investor sentiment.",
          },
          {
            icon: "solar:graph-new-up-bold",
            title: "Clear Trend Potential",
            description:
              "Indices can offer strong directional setups during broader market momentum and thematic shifts.",
          },
          {
            icon: "solar:shield-check-bold",
            title: "Efficient Market Access",
            description:
              "Trading indices can simplify exposure to major economies without selecting individual stocks.",
          },
        ]}
      />

      <MarketWidgetSection
        title="Live Indices market overview"
        description="Monitor major global indices and overall market direction."
        symbolsGroups={[
          {
            name: "Indices",
            symbols: [
              { name: "FOREXCOM:SPXUSD", displayName: "S&P 500" },
              { name: "FOREXCOM:NSXUSD", displayName: "Nasdaq 100" },
              { name: "FOREXCOM:DJI", displayName: "Dow Jones" },
              { name: "INDEX:DEU40", displayName: "DAX 40" },
              { name: "FOREXCOM:UKXGBP", displayName: "FTSE 100" },
              { name: "INDEX:NKY", displayName: "Nikkei 225" },
            ],
          },
        ]}
      />

      <MarketCTA
        sectionId="market-cta"
        eyebrow="Start Trading Indices Today"
        title="Access broader market trends with a platform built for fast execution and structured decision-making"
        description="Open your account and explore index trading with tools designed to support clearer analysis and smarter market participation."
        image={ctaImage}
        imageAlt="Indices trading call to action"
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

export default Indices;
