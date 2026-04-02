import React, { lazy, Suspense } from "react";

import EducationHeroSection from "@/components/education/EducationHeroSection";

const EducationEdgeSection = lazy(() => import("@/components/education/EducationEdgeSection"));
const EducationHowAiWorksSection = lazy(() => import("@/components/education/EducationHowAiWorksSection"));
const EducationComparisonSection = lazy(() => import("@/components/education/EducationComparisonSection"));
const EducationCalculatorSection = lazy(() => import("@/components/education/EducationCalculatorSection"));
const EducationResultsSection = lazy(() => import("@/components/education/EducationResultsSection"));
const EducationCtaSection = lazy(() => import("@/components/education/EducationCtaSection"));

const Education = () => {
  const scrollToContent = () => {
    const el = document.getElementById("education-content");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
        <div className="absolute bottom-[8%] left-[18%] h-80 w-80 rounded-full bg-accent-1/8 blur-[150px]" />
      </div>

      <EducationHeroSection scrollToContent={scrollToContent} />

      <div id="education-content">
        <Suspense fallback={<div className="py-18 md:py-20" />}>
          <EducationEdgeSection />
        </Suspense>

        <Suspense fallback={<div className="py-18 md:py-20" />}>
          <EducationHowAiWorksSection />
        </Suspense>

        <Suspense fallback={<div className="py-18 md:py-20" />}>
          <EducationComparisonSection />
        </Suspense>

        <Suspense fallback={<div className="py-20 lg:py-24" />}>
          <EducationCalculatorSection />
        </Suspense>

        <Suspense fallback={<div className="py-18 md:py-20" />}>
          <EducationResultsSection />
        </Suspense>
      </div>

      <Suspense fallback={<div className="py-18 md:py-20" />}>
        <EducationCtaSection />
      </Suspense>
    </div>
  );
};

export default Education;
