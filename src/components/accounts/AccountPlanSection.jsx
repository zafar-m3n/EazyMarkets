import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import AnimatedContent from "@/components/ui/AnimatedContent";
import useWdith from "@/hooks/useWidth";
import AccountPlanCard from "@/components/accounts/AccountPlanCard";
import DesktopAccountTabs from "@/components/accounts/DesktopAccountTabs";

const accountPlans = [
  {
    title: "Essential",
    badge: "Limited Offer",
    minimumDeposit: "$100",
    originalDeposit: "$200",
    minimumWithdrawal: "$25",
    timeFrame: "Within 96 hours",
    leverage: "Up to 1:100",
    access: "Beginner trading access, selected instruments, starter education",
    aiAccess: "No",
    support: ["Basic customer support", "Platform walkthrough included"],
    extras: ["Up to 10 open trades", "Good for first-time traders"],
    icon: "solar:shield-user-bold",
  },
  {
    title: "Classic",
    badge: "Most Popular",
    minimumDeposit: "$250",
    minimumWithdrawal: "$50",
    timeFrame: "Within 72 hours",
    leverage: "Up to 1:200",
    access: "Full market access, daily signals, improved execution conditions",
    aiAccess: "Limited",
    support: ["Priority customer support", "Guided onboarding support"],
    extras: ["Up to 20 open trades", "Balanced for active retail traders"],
    icon: "solar:star-bold",
  },
  {
    title: "Advanced",
    minimumDeposit: "$1,000",
    minimumWithdrawal: "$250",
    timeFrame: "Within 48 hours",
    leverage: "Up to 1:300",
    access: "Advanced signals, stronger risk tools, broader strategy access",
    aiAccess: "Yes",
    support: ["Priority support with faster response", "Account optimization guidance"],
    extras: ["Up to 40 open trades", "Access to advanced trading insights"],
    icon: "solar:chart-2-bold",
  },
  {
    title: "Professional",
    minimumDeposit: "$10,000",
    minimumWithdrawal: "$1,000",
    timeFrame: "Within 24 hours",
    leverage: "Up to 1:500",
    access: "Professional conditions, premium analytics, custom trading settings",
    aiAccess: "Yes",
    support: ["Dedicated relationship support", "Risk management assistance"],
    extras: ["Up to 75 open trades", "Priority market updates and insights"],
    icon: "solar:rocket-bold",
  },
  {
    title: "Signature",
    minimumDeposit: "$25,000",
    minimumWithdrawal: "$2,500",
    timeFrame: "Within 12 hours",
    leverage: "Up to 1:800",
    access: "Institutional-style tools, enhanced execution, premium AI models",
    aiAccess: "Yes",
    support: ["Personal account manager", "Faster withdrawal review"],
    extras: ["Up to 120 open trades", "Priority access to new trading features"],
    icon: "solar:crown-star-bold",
  },
  {
    title: "Prestige",
    minimumDeposit: "$100,000",
    minimumWithdrawal: "$10,000",
    timeFrame: "Instant",
    leverage: "Up to 1:1000",
    access: "Top-tier execution, full AI suite, exclusive strategy environment",
    aiAccess: "Full AI Suite",
    support: ["Senior account manager", "VIP processing and premium assistance"],
    extras: ["Unlimited open trades", "Private strategy and portfolio consultation"],
    icon: "solar:stars-bold",
  },
];

const AccountPlansSection = () => {
  const { width, breakpoints } = useWdith();
  const isMobile = width < breakpoints.md;
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section id="account-plans" className="relative overflow-hidden py-18 md:py-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 top-[22%] h-36 w-36 rounded-full bg-accent-1/18 blur-3xl md:h-72 md:w-72" />
        <div className="absolute left-[40%] top-[45%] h-32 w-32 rounded-full bg-accent-2/14 blur-3xl md:h-64 md:w-64" />
        <div className="absolute -right-20 top-[35%] h-40 w-40 rounded-full bg-accent-1/14 blur-3xl md:h-80 md:w-80" />
      </div>

      <AnimatedContent
        direction="horizontal"
        reverse={false}
        distance={100}
        threshold={0.15}
        config={{ tension: 50, friction: 25 }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent
            distance={80}
            direction={isMobile ? "horizontal" : "vertical"}
            reverse={false}
            config={{ tension: 50, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
          >
            <div className="mx-auto mb-14 max-w-4xl px-4 text-center sm:px-6">
              <h2 className="mb-3 text-2xl font-semibold md:text-4xl">Tailored Accounts for Every Trader</h2>
              <p className="text-sm leading-8 text-text/70 md:text-base">
                From beginners to professionals, choose an account that aligns with your capital, trading style, and the
                level of support you need to move with more confidence.
              </p>
            </div>
          </AnimatedContent>

          {isMobile ? (
            <div className="relative z-10 flex items-center justify-center overflow-hidden">
              <button onClick={handlePrev} className="absolute -left-4 z-20 p-2" aria-label="Previous">
                <Icon icon="mdi:chevron-left" width={34} className="text-accent-2" />
              </button>

              <div className="w-full max-w-xs">
                <Swiper
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  spaceBetween={20}
                  slidesPerView={1}
                  initialSlide={0}
                >
                  {accountPlans.map((account, index) => (
                    <SwiperSlide key={index}>
                      <AnimatedContent
                        direction="vertical"
                        reverse={false}
                        distance={70}
                        delay={index * 60}
                        threshold={0.1}
                        config={{ tension: 50, friction: 25 }}
                      >
                        <AccountPlanCard account={account} />
                      </AnimatedContent>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <button onClick={handleNext} className="absolute -right-4 z-20 p-2" aria-label="Next">
                <Icon icon="mdi:chevron-right" width={34} className="text-accent-2" />
              </button>
            </div>
          ) : (
            <DesktopAccountTabs plans={accountPlans} activeIndex={activeTab} setActiveIndex={setActiveTab} />
          )}
        </div>
      </AnimatedContent>
    </section>
  );
};

export default AccountPlansSection;
