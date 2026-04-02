import React from "react";

import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";
import homeCTA from "@/assets/homeCTA.webp";

const PromotionsCtaSection = () => {
  return (
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
                  <Button
                    variant="primary"
                    icon="mdi:gift-outline"
                    onClick={() => window.open("https://portal.eazymarkets.com/login", "_blank")}
                  >
                    Claim Promotion
                  </Button>

                  <Button
                    variant="secondary"
                    icon="mdi:account-plus-outline"
                    onClick={() => (window.location.href = "/accounts")}
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
  );
};

export default PromotionsCtaSection;
