import React from "react";

import MarketHero from "@/components/markets/MarketHero";
import MarketIntro from "@/components/markets/MarketIntro";
import MarketWidgetSection from "@/components/markets/MarketWidgetSection";
import MarketCTA from "@/components/markets/MarketCTA";

import heroImage from "@/assets/commoditiesHero.jpg";
import ctaImage from "@/assets/homeCTA.webp";

const Commodities = () => {
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
        pageName="Commodities"
        eyebrow="Markets"
        title="Trade Commodities with more control"
        highlightedText="control"
        description="Access key raw material markets such as gold, oil, and more with flexible opportunities and a trading environment built for responsive execution."
        image={heroImage}
        imageAlt="Commodities trading market"
        imageBadgeLabel="Commodities Market"
        imageBadgeText="Essential assets, global demand, and smarter execution"
        primaryButtonText="Start Trading"
        secondaryButtonText="Learn More"
        primaryButtonIcon="mdi:rocket-launch-outline"
        secondaryButtonIcon="mdi:chart-line"
        stats={["Gold", "Oil", "Global Demand", "Active Markets"]}
        onPrimaryClick={() => {
          window.open("https://portal.eazymarkets.com/signup", "_blank");
        }}
        onSecondaryClick={scrollToIntro}
      />

      <MarketIntro
        sectionId="market-intro"
        eyebrow="/ commodities market /"
        title="What are Commodities and why trade them?"
        description={[
          "Commodities are raw materials and natural resources such as gold, silver, crude oil, and agricultural products that play a key role in the global economy.",
          "For traders, commodities offer price movement influenced by supply and demand, geopolitical developments, inflation expectations, and broader economic trends.",
        ]}
        whyTitle="Why trade Commodities?"
        highlights={["Gold", "Oil", "Inflation Themes", "Global Demand"]}
        benefits={[
          {
            icon: "solar:medal-star-bold",
            title: "Access to Key Assets",
            description:
              "Trade widely followed instruments like gold and oil that are central to global economic activity.",
          },
          {
            icon: "solar:global-bold",
            title: "Macro-Driven Movement",
            description:
              "Commodity prices often respond to geopolitical events, supply changes, and shifts in global demand.",
          },
          {
            icon: "solar:wallet-money-bold",
            title: "Inflation Sensitivity",
            description:
              "Some commodities are closely watched during inflationary periods and changing economic expectations.",
          },
          {
            icon: "solar:shield-check-bold",
            title: "Diversified Opportunities",
            description:
              "Commodities can add broader market exposure and support varied trading strategies across asset themes.",
          },
        ]}
      />

      <MarketWidgetSection
        title="Live Commodities market overview"
        description="Track gold, oil, and other key commodities in real time."
        symbolsGroups={[
          {
            name: "Commodities",
            symbols: [
              { name: "TVC:GOLD", displayName: "Gold" },
              { name: "TVC:SILVER", displayName: "Silver" },
              { name: "TVC:USOIL", displayName: "Crude Oil (WTI)" },
              { name: "TVC:UKOIL", displayName: "Brent Crude Oil" },
              { name: "FXOPEN:XNGUSD", displayName: "US Natural Gas" },
              { name: "CAPITALCOM:COPPER", displayName: "Copper" },
            ],
          },
        ]}
      />

      <MarketCTA
        sectionId="market-cta"
        eyebrow="Start Trading Commodities Today"
        title="Explore essential global asset markets with tools built for structured execution and active analysis"
        description="Open your account and trade commodities with a platform designed for clarity, responsive decision-making, and smarter market participation."
        image={ctaImage}
        imageAlt="Commodities trading call to action"
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

export default Commodities;
