import React, { lazy, Suspense, useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import TickerSection from "@/components/home/TickerSection";

const Welcome = lazy(() => import("@/components/home/Welcome"));
const LiquidityProvidersSection = lazy(() => import("@/components/home/LiquidityProvidersSection"));
const MissionVisionSection = lazy(() => import("@/components/home/MissionVisionSection"));
const HowItWorksSection = lazy(() => import("@/components/home/HowItWorksSection"));
const AwardsSection = lazy(() => import("@/components/home/AwardsSection"));
const FeaturesSection = lazy(() => import("@/components/home/FeaturesSection"));
const AboutAISection = lazy(() => import("@/components/home/AboutAISection"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

import AnniversaryOfferPopup from "@/components/AnniversaryOfferPopup";

const Home = () => {
  const scrollContainerRef = useRef(null);

  const scrollToFeatures = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sectionAnimation = (index, delay = 0) => ({
    direction: "horizontal",
    reverse: index % 2 === 0,
    distance: 120,
    delay,
    threshold: 0.12,
    config: { tension: 52, friction: 24 },
  });

  return (
    <div ref={scrollContainerRef} className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <AnniversaryOfferPopup />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-32 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute -right-24 top-112 h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[18%] h-80 w-80 rounded-full bg-accent-1/8 blur-[150px]" />
      </div>

      <HeroSection scrollToFeatures={scrollToFeatures} />

      <TickerSection scrollContainerRef={scrollContainerRef} sectionAnimation={sectionAnimation} />

      <Suspense fallback={<div className="py-16" />}>
        <Welcome />
      </Suspense>

      <Suspense fallback={<div className="py-20" />}>
        <LiquidityProvidersSection sectionAnimation={sectionAnimation} />
      </Suspense>

      <Suspense fallback={<div className="py-20" />}>
        <MissionVisionSection sectionAnimation={sectionAnimation} />
      </Suspense>

      <Suspense fallback={<div className="py-20" />}>
        <HowItWorksSection sectionAnimation={sectionAnimation} />
      </Suspense>

      <Suspense fallback={<div className="py-20" />}>
        <AwardsSection sectionAnimation={sectionAnimation} />
      </Suspense>

      <Suspense fallback={<div className="py-20" />}>
        <FeaturesSection sectionAnimation={sectionAnimation} />
      </Suspense>

      <Suspense fallback={<div className="py-20" />}>
        <AboutAISection sectionAnimation={sectionAnimation} />
      </Suspense>

      <Suspense fallback={<div className="py-20" />}>
        <FAQSection sectionAnimation={sectionAnimation} />
      </Suspense>

      <Suspense fallback={<div className="py-20" />}>
        <CTASection sectionAnimation={sectionAnimation} />
      </Suspense>
    </div>
  );
};

export default Home;
