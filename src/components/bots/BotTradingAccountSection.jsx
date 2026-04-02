import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import AnimatedContent from "@/components/ui/AnimatedContent";
import useWdith from "@/hooks/useWidth";
import BotAccountPlanCard from "@/components/bots/BotAccountPlanCard";

const accountPlans = [
  {
    title: "Basic",
    price: "$300",
    spread: "1:25 Leverage",
    instruments: "Trial Bot, Entry Trading Access",
    aiAccess: "No",
    support: ["Basic customer support", "Minimum withdrawal: $10"],
    extras: ["Maximum functional period: 14 days", "Max open trades: 15"],
    icon: "solar:shield-user-bold",
  },
  {
    title: "Amateur",
    price: "$500",
    spread: "1:50 Leverage",
    instruments: "Basic Strategies, Limited Daily Signals",
    aiAccess: "No",
    support: ["Standard customer support", "Minimum withdrawal: $100"],
    extras: ["Max open trades: 20", "Beginner & low-risk friendly"],
    icon: "solar:chart-2-bold",
  },
  {
    title: "Advanced",
    price: "$1000",
    spread: "1:100 Leverage",
    instruments: "Advanced Signals, Custom Risk Settings",
    aiAccess: "Yes",
    support: ["Priority customer support", "Minimum withdrawal: $500"],
    extras: ["Max open trades: 50", "Cashback rewards available"],
    icon: "solar:rocket-bold",
  },
  {
    title: "Pro",
    price: "$5000",
    spread: "1:200 Leverage",
    instruments: "Smart Trend Analysis, Unlimited Signals",
    aiAccess: "Yes",
    support: ["VIP support 24/7", "Minimum withdrawal: $500"],
    extras: ["Max open trades: 60", "Free risk management consultation"],
    icon: "solar:graph-up-bold",
  },
  {
    title: "Expert",
    price: "$15,000",
    spread: "1:500 Leverage",
    instruments: "High-Frequency Tools, AI Predictions",
    aiAccess: "Yes",
    support: ["Personal Account Manager", "Minimum withdrawal: $1,000"],
    extras: ["Max open trades: 80", "Priority access to new AI features"],
    icon: "solar:crown-star-bold",
  },
  {
    title: "VIP Elite",
    price: "$50,000",
    spread: "1:1000 Leverage",
    instruments: "Ultra-Fast Execution, Predictive Analytics",
    aiAccess: "Yes",
    support: ["Senior Account Manager", "Priority withdrawal processing"],
    extras: ["Unlimited open trades", "Private one-on-one mentorship"],
    icon: "solar:stars-bold",
  },
];

const BotTradingAccountsSection = () => {
  const { width, breakpoints } = useWdith();
  const isMobile = width < breakpoints.md;
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section id="bot-trading-accounts" className="relative overflow-hidden border-b border-border/70 py-18 md:py-20">
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
              <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ bot trading accounts /</p>
              <h2 className="mt-3 mb-3 text-2xl font-semibold md:text-4xl">Bot Trading Accounts</h2>
              <p className="text-sm leading-8 text-text/70 md:text-base">
                Choose an account type that matches the way you want to access automated trading, leverage, support, and
                AI-powered tools alongside your selected bot setup.
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
                        <BotAccountPlanCard account={account} />
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
            <>
              <div className="relative z-10 mb-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {accountPlans.slice(0, 3).map((account, index) => (
                  <AnimatedContent
                    key={index}
                    direction="vertical"
                    reverse={false}
                    distance={70}
                    delay={index * 80}
                    threshold={0.1}
                    config={{ tension: 50, friction: 25 }}
                  >
                    <BotAccountPlanCard account={account} />
                  </AnimatedContent>
                ))}
              </div>

              <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-3">
                {accountPlans.slice(3).map((account, index) => (
                  <AnimatedContent
                    key={index}
                    direction="vertical"
                    reverse={false}
                    distance={70}
                    delay={index * 80}
                    threshold={0.1}
                    config={{ tension: 50, friction: 25 }}
                  >
                    <div className="w-full">
                      <BotAccountPlanCard account={account} />
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </>
          )}
        </div>
      </AnimatedContent>
    </section>
  );
};

export default BotTradingAccountsSection;
