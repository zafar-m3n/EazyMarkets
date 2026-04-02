import React from "react";
import { Icon } from "@iconify/react";

import accountsHero from "@/assets/accountsHero.webp";
import AnimatedContent from "@/components/ui/AnimatedContent";
import Button from "@/components/ui/Button";

const AccountsHeroSection = ({ scrollToPlans }) => {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fbf4_0%,#eef9e7_50%,#f8fbf4_100%)]" />

        <div className="absolute -left-20 top-12 h-96 w-[24rem] rounded-full bg-accent-1/28 blur-[110px]" />
        <div className="absolute right-[4%] top-[8%] h-104 w-104 rounded-full bg-accent-2/24 blur-[120px]" />
        <div className="absolute -bottom-10 left-[40%] h-72 w-[18rem] rounded-full bg-accent-1/22 blur-[100px]" />

        <div className="absolute left-[8%] top-[12%] h-32 w-32 rounded-full bg-accent-1/36 blur-[48px]" />
        <div className="absolute right-[16%] top-[18%] h-36 w-36 rounded-full bg-accent-2/30 blur-[54px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,217,87,0.20),transparent_20%),radial-gradient(circle_at_80%_24%,rgba(79,143,47,0.18),transparent_22%),radial-gradient(circle_at_48%_78%,rgba(126,217,87,0.14),transparent_20%)]" />
        <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(126,217,87,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(126,217,87,0.10)_1px,transparent_1px)] bg-size-[72px_72px]" />
        <div className="absolute inset-0 bg-white/18" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <AnimatedContent
            direction="vertical"
            distance={90}
            reverse={false}
            delay={0}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="max-w-2xl">
              <AnimatedContent
                direction="vertical"
                distance={70}
                reverse={false}
                delay={100}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-white/62 px-4 py-2 text-xs text-text/70 backdrop-blur-md shadow-[0_8px_24px_rgba(31,41,55,0.05)]">
                  <span>Home</span>
                  <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                  <span className="text-accent-2">Accounts</span>
                </div>
              </AnimatedContent>

              <AnimatedContent
                direction="vertical"
                distance={70}
                reverse={false}
                delay={180}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <p className="mt-6 text-sm uppercase tracking-[0.22em] text-text/65">Account Types</p>
              </AnimatedContent>

              <AnimatedContent
                direction="vertical"
                distance={70}
                reverse={false}
                delay={260}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                  Find the right trading account for the way you want to grow
                </h1>
              </AnimatedContent>

              <AnimatedContent
                direction="vertical"
                distance={70}
                reverse={false}
                delay={340}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                  Explore account options built for beginners, active traders, and high-volume investors. Each tier is
                  designed to give you the balance of access, support, and AI-backed tools that fits your trading level.
                </p>
              </AnimatedContent>

              <AnimatedContent
                direction="vertical"
                distance={70}
                reverse={false}
                delay={420}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button variant="primary" icon="mdi:wallet-outline" onClick={scrollToPlans}>
                    Explore Accounts
                  </Button>

                  <Button
                    variant="secondary"
                    icon="mdi:rocket-launch-outline"
                    onClick={() => {
                      window.open("https://portal.eazymarkets.com/signup", "_blank");
                    }}
                  >
                    Open Account
                  </Button>
                </div>
              </AnimatedContent>

              <AnimatedContent
                direction="vertical"
                distance={70}
                reverse={false}
                delay={500}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border/90 bg-white/60 p-4 backdrop-blur-md shadow-[0_10px_24px_rgba(31,41,55,0.05)]">
                    <p className="text-xs uppercase tracking-[0.18em] text-text/55">Plans</p>
                    <p className="mt-2 text-lg font-semibold">6 Tiers</p>
                  </div>
                  <div className="rounded-2xl border border-border/90 bg-white/60 p-4 backdrop-blur-md shadow-[0_10px_24px_rgba(31,41,55,0.05)]">
                    <p className="text-xs uppercase tracking-[0.18em] text-text/55">Leverage</p>
                    <p className="mt-2 text-lg font-semibold">Up to 1:1000</p>
                  </div>
                  <div className="rounded-2xl border border-border/90 bg-white/60 p-4 backdrop-blur-md shadow-[0_10px_24px_rgba(31,41,55,0.05)]">
                    <p className="text-xs uppercase tracking-[0.18em] text-text/55">Processing</p>
                    <p className="mt-2 text-lg font-semibold">96h to Instant</p>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </AnimatedContent>

          <AnimatedContent
            direction="vertical"
            distance={90}
            reverse={false}
            delay={150}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/16 to-accent-2/12 blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/60 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md">
                <img src={accountsHero} alt="Trading account hero" className="h-90 w-full object-cover md:h-115" />
                <div className="absolute inset-0 bg-linear-to-t from-background/74 via-background/18 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border/90 bg-white/55 p-4 backdrop-blur-md shadow-[0_10px_28px_rgba(31,41,55,0.05)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-2">EazyMarkets Accounts</p>
                  <p className="mt-2 text-lg font-semibold text-text">
                    Choose a tier aligned with your strategy and capital level
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default AccountsHeroSection;
