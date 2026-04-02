import React, { lazy, Suspense } from "react";
import BotsHeroSection from "@/components/bots/BotsHeroSection";
import BotTradingAccountsSection from "@/components/bots/BotTradingAccountSection";
const BotsIntroSection = lazy(() => import("@/components/bots/BotsIntroSection"));
const BotsListSection = lazy(() => import("@/components/bots/BotsListSection"));
const BotsCtaSection = lazy(() => import("@/components/bots/BotsCtaSection"));

const Bots = () => {
  const scrollToBots = () => {
    const el = document.getElementById("bots-list");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
        <div className="absolute bottom-[8%] left-[18%] h-80 w-80 rounded-full bg-accent-1/8 blur-[150px]" />
      </div>

      <BotsHeroSection scrollToBots={scrollToBots} />
      <BotTradingAccountsSection />

      <Suspense fallback={<div className="py-18 md:py-20" />}>
        <BotsIntroSection />
      </Suspense>

      <Suspense fallback={<div className="py-18 md:py-20" />}>
        <BotsListSection />
      </Suspense>

      <Suspense fallback={<div className="py-18 md:py-20" />}>
        <BotsCtaSection scrollToBots={scrollToBots} />
      </Suspense>
    </div>
  );
};

export default Bots;
