import React from "react";

import AnimatedContent from "@/components/ui/AnimatedContent";
import PromotionCard from "@/components/promotions/PromotionCard";

import promotions1 from "@/assets/promotions1.webp";
import promotions2 from "@/assets/promotions2.webp";
import promotions3 from "@/assets/promotions3.webp";
import promotions4 from "@/assets/promotions4.webp";

const promotionsData = [
  {
    id: "01",
    title: "DOUBLE DEPOSIT",
    subheading:
      "Supercharge your trading journey—double your investment instantly and unlock endless profit potential!",
    text: [
      "Ready to transform your trading game? With EazyMarkets Trading’s exclusive offer, unlock a thrilling 100% bonus on your first deposit! Dive in, double your power, and watch your trades soar.",
      "Unleash your trading potential with Double Deposit! It’s more than a boost—it’s your gateway to bigger trades, bolder strategies, and boundless opportunities.",
      "Join us today and double your potential from the very first trade!",
    ],
    image: promotions1,
    badge: "100% Bonus",
    icon: "solar:wallet-money-bold",
    kicker: "Deposit Bonus",
    highlights: ["Boosted opening capital", "Stronger trading start"],
  },
  {
    id: "02",
    title: "CRYPTO BONUS",
    subheading: "Kickstart your crypto journey with a bang—enjoy a 25% bonus on your first deposit!",
    text: [
      "Step into the digital revolution—your investment, now with extra power! Ignite your crypto adventure with a sizzling 25% bonus on your first deposit.",
      "Transform your digital plans into reality as your investment gets an instant boost and every trade carries more potential.",
      "Don’t just join the future; own it today!",
    ],
    image: promotions2,
    badge: "25% Bonus",
    icon: "solar:bitcoin-card-bold",
    kicker: "Crypto Offer",
    highlights: ["Extra first deposit value", "Built for crypto traders"],
  },
  {
    id: "03",
    title: "5 LOSS-FREE TRADES",
    subheading: "Trade like a pro with 5 loss-free trades—your risk-free ticket to success!",
    text: [
      "Step into the world of trading with less fear knowing your first 5 trades are protected. Explore the markets with more confidence.",
      "Test strategies, seize opportunities, and trade smarter with a safety net that supports your first steps.",
      "Your winning streak starts now with a stronger foundation for decision-making.",
    ],
    image: promotions3,
    badge: "5 Protected Trades",
    icon: "solar:shield-check-bold",
    kicker: "Risk-Controlled Start",
    highlights: ["Trade with more confidence", "Explore with reduced pressure"],
  },
  {
    id: "04",
    title: "PREPAID MASTERCARD",
    subheading: "Unlock endless benefits with our all-in-one Prepaid MasterCard—empower your wallet!",
    text: [
      "Introducing the exclusive EazyMarkets Prepaid MasterCard®—crafted for premium account holders who want more convenience and flexibility.",
      "Whether at home or abroad, enjoy seamless access to your funds with a benefit designed to fit your trading lifestyle.",
      "Say goodbye to limits and hello to exclusive perks that elevate your experience.",
    ],
    image: promotions4,
    badge: "Premium Access",
    icon: "solar:card-bold",
    kicker: "Account Benefit",
    highlights: ["Global convenience", "Premium account advantage"],
  },
];

const PromotionsGridSection = () => {
  return (
    <section className="relative py-16 md:py-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-[6%] top-[8%] h-52 w-52 rounded-full bg-accent-1/10 blur-[130px]" />
        <div className="absolute right-[8%] top-[32%] h-60 w-60 rounded-full bg-accent-2/10 blur-[145px]" />
        <div className="absolute left-[22%] bottom-[12%] h-64 w-64 rounded-full bg-accent-1/8 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {promotionsData.map((promotion, index) => (
            <AnimatedContent
              key={promotion.id}
              direction="vertical"
              reverse={false}
              distance={90}
              delay={index * 80}
              threshold={0.1}
              config={{ tension: 50, friction: 25 }}
            >
              <PromotionCard promotion={promotion} />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsGridSection;
