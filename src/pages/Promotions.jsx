import React, { useEffect, lazy, Suspense } from "react";
import PromotionsHeroSection from "@/components/promotions/PromotionsHeroSection";
import PromotionsGridSection from "@/components/promotions/PromotionsGridSection";
const PromotionsCtaSection = lazy(() => import("@/components/promotions/PromotionsCtaSection"));

const Promotions = () => {
  useEffect(() => {
    document.title = "EazyMarkets | Promotions";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
        <div className="absolute bottom-[8%] left-[18%] h-80 w-80 rounded-full bg-accent-1/8 blur-[150px]" />
      </div>

      <PromotionsHeroSection />
      <PromotionsGridSection />

      <Suspense fallback={<div className="py-18 md:py-20" />}>
        <PromotionsCtaSection />
      </Suspense>
    </div>
  );
};

export default Promotions;
