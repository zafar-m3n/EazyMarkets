import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";
import homeCTA from "@/assets/homeCTA.jpg";
import promotions1 from "@/assets/promotions1.png";
import promotions2 from "@/assets/promotions2.png";
import promotions3 from "@/assets/promotions3.png";
import promotions4 from "@/assets/promotions4.png";

const Promotions = () => {
  useEffect(() => {
    document.title = "EazyMarkets | Promotions";
  }, []);

  const promotionsData = [
    {
      id: "01",
      title: "DOUBLE DEPOSIT",
      subheading:
        "Supercharge your trading journey—double your investment instantly and unlock endless profit potential!",
      text: [
        "Ready to transform your trading game? With Zipphy Trading’s exclusive offer, unlock a thrilling 100% bonus on your first deposit! Dive in, double your power, and watch your trades soar.",
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
        "Introducing the exclusive Zipphy Prepaid MasterCard®—crafted for premium account holders who want more convenience and flexibility.",
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

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
        <div className="absolute bottom-[8%] left-[18%] h-80 w-80 rounded-full bg-accent-1/8 blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fbf4_0%,#eef9e7_50%,#f8fbf4_100%)]" />

          <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-accent-1/26 blur-[120px]" />
          <div className="absolute right-[10%] top-[10%] h-72 w-72 rounded-full bg-accent-2/24 blur-[140px]" />
          <div className="absolute -bottom-10 left-[40%] h-48 w-48 rounded-full bg-accent-1/20 blur-[120px]" />

          <div className="absolute left-[8%] top-[12%] h-32 w-32 rounded-full bg-accent-1/34 blur-[48px]" />
          <div className="absolute right-[16%] top-[18%] h-36 w-36 rounded-full bg-accent-2/28 blur-[54px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,217,87,0.20),transparent_20%),radial-gradient(circle_at_80%_24%,rgba(79,143,47,0.18),transparent_22%),radial-gradient(circle_at_48%_78%,rgba(126,217,87,0.14),transparent_20%)]" />
          <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(126,217,87,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(126,217,87,0.10)_1px,transparent_1px)] bg-size-[72px_72px]" />
          <div className="absolute inset-0 bg-white/18" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <div className="max-w-3xl">
            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={90}
              delay={0}
              threshold={0.2}
              config={{ tension: 50, friction: 25 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-white/62 px-4 py-2 text-xs text-text/70 backdrop-blur-md shadow-[0_8px_24px_rgba(31,41,55,0.05)]">
                <span>Home</span>
                <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                <span className="text-accent-2">Promotions</span>
              </div>
            </AnimatedContent>

            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={70}
              delay={100}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <p className="mt-6 text-sm uppercase tracking-[0.22em] text-text/65">Promotions & Special Offers</p>
            </AnimatedContent>

            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={70}
              delay={180}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Exclusive Offers for{" "}
                <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                  Smarter Trading
                </span>
              </h1>
            </AnimatedContent>

            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={70}
              delay={260}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <p className="mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">
                Explore special offers and account benefits designed to help you start stronger, trade with more
                flexibility, and unlock more value across your journey.
              </p>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* 2x2 GRID */}
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
                <article className="relative h-full">
                  <div className="relative overflow-hidden rounded-4xl border border-border/85 bg-white/44 shadow-[0_18px_52px_rgba(31,41,55,0.08)] backdrop-blur-md">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.70),rgba(255,255,255,0.38))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_24%)]" />

                    <div className="relative">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={promotion.image}
                          alt={promotion.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background/72 via-background/14 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,217,87,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(79,143,47,0.14),transparent_24%)]" />

                        <div className="absolute left-4 top-4 md:left-6 md:top-6">
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/76 px-4 py-2 text-xs font-medium tracking-[0.18em] text-accent-2 shadow-[0_8px_24px_rgba(31,41,55,0.08)] backdrop-blur-md">
                            <Icon icon={promotion.icon} className="text-base" />
                            <span>{promotion.badge}</span>
                          </div>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                          <div className="max-w-lg">
                            <p className="text-[11px] uppercase tracking-[0.22em] text-white/72">{promotion.kicker}</p>
                            <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
                              {promotion.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="px-5 py-6 md:px-7 md:py-7">
                        <p className="text-base font-semibold leading-8 text-accent-2 md:text-lg">
                          {promotion.subheading}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                          {promotion.highlights.map((item) => (
                            <div key={item} className="inline-flex items-center gap-2 text-sm text-text/72">
                              <span className="h-2 w-2 rounded-full bg-accent-2" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 space-y-4">
                          {promotion.text.map((paragraph, idx) => (
                            <p key={idx} className="text-sm leading-8 text-text/72 md:text-[15px]">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="promotions-cta" className="relative py-18 md:py-20">
        <div className="absolute left-[10%] top-[15%] h-48 w-48 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute bottom-[12%] right-[10%] h-56 w-56 rounded-full bg-accent-2/10 blur-[130px]" />

        <AnimatedContent
          direction="horizontal"
          reverse={true}
          distance={100}
          threshold={0.15}
          config={{ tension: 50, friction: 25 }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/58 p-8 shadow-[0_16px_46px_rgba(31,41,55,0.08)] backdrop-blur-xl sm:p-10 lg:p-14">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.80),rgba(255,255,255,0.42))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,217,87,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(79,143,47,0.12),transparent_32%)]" />

              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">Ready to Unlock Your Offer?</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Start with a promotion that adds more value to your trading journey
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">
                    Explore eligible offers, connect with our team, and choose the promotion that best matches your
                    account goals, strategy, and next step in the market.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button variant="primary" icon="mdi:gift-outline" onClick={() => window.open("/contact", "_blank")}>
                      Claim Promotion
                    </Button>

                    <Button
                      variant="secondary"
                      icon="mdi:account-plus-outline"
                      onClick={() => window.open("/accounts", "_blank")}
                    >
                      View Accounts
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/16 to-accent-2/12 blur-2xl" />
                  <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/60 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md">
                    <img src={homeCTA} alt="EazyMarkets promotions CTA" className="h-90 w-full object-cover md:h-96" />
                    <div className="absolute inset-0 bg-linear-to-t from-background/74 via-background/18 to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border/90 bg-white/55 p-4 backdrop-blur-md shadow-[0_10px_28px_rgba(31,41,55,0.05)]">
                      <p className="text-xs uppercase tracking-[0.2em] text-accent-2">EazyMarkets Promotions</p>
                      <p className="mt-2 text-lg font-semibold text-text">
                        More value, more flexibility, and a stronger way to get started
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>
    </div>
  );
};

export default Promotions;
