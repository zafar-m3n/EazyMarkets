import React, { lazy, Suspense } from "react";

import AccountsHeroSection from "@/components/accounts/AccountsHeroSection";
import AccountsIntroSection from "@/components/accounts/AccountsIntroSection";
const AccountPlansSection = lazy(() => import("@/components/accounts/AccountPlanSection"));
const AccountsCtaSection = lazy(() => import("@/components/accounts/AccountsCtaSection"));

const Accounts = () => {
  const scrollToPlans = () => {
    const el = document.getElementById("account-plans");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCta = () => {
    const el = document.getElementById("accounts-cta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
        <div className="absolute bottom-[8%] left-[18%] h-80 w-80 rounded-full bg-accent-1/8 blur-[150px]" />
      </div>

      <AccountsHeroSection scrollToPlans={scrollToPlans} />

      <AccountsIntroSection />

      <Suspense fallback={<div className="py-18 md:py-20" />}>
        <AccountPlansSection />
      </Suspense>

      <Suspense fallback={<div className="py-18 md:py-20" />}>
        <AccountsCtaSection scrollToPlans={scrollToPlans} />
      </Suspense>
    </div>
  );
};

export default Accounts;
