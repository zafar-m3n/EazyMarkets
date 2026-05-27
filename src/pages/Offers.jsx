import React from "react";
import { Icon } from "@iconify/react";
import useWidth from "@/hooks/useWidth";

import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";
import eidPromo from "@/assets/eidPromo.webp";

const bonusTiers = [
  {
    amount: "$5,000",
    percentage: "30% Bonus",
    bonus: "$1,500",
    icon: "solar:wallet-money-bold",
  },
  {
    amount: "$10,000",
    percentage: "50% Bonus",
    bonus: "$5,000",
    icon: "solar:chart-bold",
  },
  {
    amount: "$20,000",
    percentage: "60% Bonus",
    bonus: "$12,000",
    icon: "solar:graph-up-bold",
  },
];

const benefitCards = [
  {
    icon: "solar:rocket-bold",
    title: "Increased Trading Power",
    description:
      "The bonus adds extra margin to your trading account, allowing you to open larger positions and access more market opportunities.",
    className: "lg:col-span-2",
  },
  {
    icon: "solar:shield-check-bold",
    title: "Better Risk Management",
    description:
      "Additional account balance can help traders manage drawdowns more effectively and maintain healthier margin levels during market fluctuations.",
    className: "lg:col-span-1",
  },
  {
    icon: "solar:dollar-bold",
    title: "Higher Profit Potential",
    description:
      "A larger trading capital base gives you more room to diversify trades and explore stronger opportunities across multiple markets.",
    className: "lg:col-span-1",
  },
  {
    icon: "solar:tuning-2-bold",
    title: "More Trading Flexibility",
    description:
      "Use the bonus to explore short-term and long-term strategies without fully utilizing your personal trading capital.",
    className: "lg:col-span-2",
  },
];

const offerHighlights = [
  "Boost your account equity during the offer period",
  "Strengthen your trading portfolio with additional support",
  "Access exclusive seasonal rewards for a limited time",
  "Trade with greater confidence, flexibility, and capacity",
];

function Offers() {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;
  function scrollToOffer() {
    const el = document.getElementById("offer-details");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openSignup() {
    window.open("https://portal.eazymarkets.com/signup", "_blank");
  }

  function renderBenefitCard({ icon, title, description, className = "" }) {
    return (
      <div
        className={`group relative overflow-hidden rounded-[1.9rem] border border-border/90 bg-white/58 p-6 shadow-[0_12px_38px_rgba(31,41,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-1/45 hover:shadow-[0_16px_46px_rgba(126,217,87,0.14)] md:p-7 ${className}`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.42))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_28%)] opacity-90" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/16 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent-2/14 blur-3xl" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/25 bg-white/72 text-2xl text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
            <Icon icon={icon} />
          </div>

          <h3 className="mt-5 text-xl font-semibold leading-tight md:text-[1.35rem]">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-text/72 md:text-[15px]">{description}</p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent-2">
            <span>Offer benefit</span>
            <Icon icon="solar:arrow-right-up-bold" className="text-base" />
          </div>
        </div>
      </div>
    );
  }

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
              <div className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-white/62 px-4 py-2 text-xs text-text/70 shadow-[0_8px_24px_rgba(31,41,55,0.05)] backdrop-blur-md">
                <span>Home</span>
                <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                <span className="text-accent-2">Offers</span>
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
              <p className="mt-6 text-sm uppercase tracking-[0.22em] text-text/65">EazyMarkets Promotions</p>
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
                Eid al-Adha{" "}
                <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                  investment bonus offer
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
                Celebrate Eid al-Adha with a limited-time investment bonus designed to strengthen your trading account,
                increase your market capacity, and help you trade with greater flexibility.
              </p>
            </AnimatedContent>

            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={70}
              delay={340}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="primary" icon="mdi:gift-outline" onClick={scrollToOffer}>
                  View Offer
                </Button>

                <Button variant="secondary" icon="mdi:rocket-launch-outline" onClick={openSignup}>
                  Activate Bonus
                </Button>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      <div id="offer-details">
        {/* OFFER INTRO */}
        <section className="relative border-b border-border/70 py-18 md:py-20">
          <div className="absolute left-[10%] top-[28%] h-40 w-40 rounded-full bg-accent-1/8 blur-[110px]" />
          <div className="absolute bottom-[12%] right-[12%] h-48 w-48 rounded-full bg-accent-2/8 blur-[120px]" />

          <AnimatedContent
            direction="horizontal"
            reverse={false}
            distance={100}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ limited-time offer /</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Boost your trading account this Eid season
                  </h2>

                  <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                    In celebration of Eid al-Adha, EazyMarkets is introducing a special investment bonus promotion to
                    help clients enhance their trading potential and access more opportunities in the market.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-accent-1/25 bg-white/68 px-4 py-2 text-sm text-text/75 shadow-[0_10px_26px_rgba(31,41,55,0.06)] backdrop-blur-md">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-1/15 text-lg text-accent-2">
                      <Icon icon="solar:calendar-bold" />
                    </span>
                    <span>
                      Promotion valid until <span className="font-semibold text-accent-2">31 May 2026</span>
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/16 to-accent-2/12 blur-2xl" />
                  <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/60 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md">
                    <img
                      src={eidPromo}
                      alt="Eid al-Adha investment bonus offer"
                      className="h-80 w-full object-cover md:h-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/74 via-background/10 to-transparent" />

                    {!isMobile && (
                      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border/90 bg-white/58 p-4 shadow-[0_10px_28px_rgba(31,41,55,0.05)] backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.2em] text-accent-2">Eid Mubarak</p>
                        <p className="mt-2 text-lg font-semibold text-text">
                          Exclusive seasonal bonus for eligible investments
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* BONUS STRUCTURE */}
        <section className="relative border-b border-border/70 py-18 md:py-20">
          <div className="absolute right-[8%] top-[20%] h-44 w-44 rounded-full bg-accent-2/8 blur-[110px]" />
          <div className="absolute bottom-[10%] left-[6%] h-48 w-48 rounded-full bg-accent-1/8 blur-[120px]" />

          <AnimatedContent
            direction="horizontal"
            reverse={true}
            distance={100}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Bonus Structure</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Choose your investment tier and unlock extra trading capital
                </h2>
                <p className="mt-5 leading-7 text-text/72">
                  The Eid al-Adha bonus gives eligible clients additional account support based on their selected
                  investment amount.
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {bonusTiers.map((tier, index) => (
                  <AnimatedContent
                    key={tier.amount}
                    direction="vertical"
                    reverse={false}
                    distance={70}
                    delay={index * 100}
                    threshold={0.12}
                    config={{ tension: 50, friction: 25 }}
                  >
                    <div className="group relative overflow-hidden rounded-[1.9rem] border border-border/90 bg-white/58 p-6 shadow-[0_12px_38px_rgba(31,41,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-1/45 hover:shadow-[0_16px_46px_rgba(126,217,87,0.14)] md:p-7">
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.42))]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_28%)] opacity-90" />
                      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/25 bg-white/72 text-2xl text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
                            <Icon icon={tier.icon} />
                          </div>

                          <span className="rounded-full border border-accent-1/20 bg-accent-1/12 px-3 py-1 text-xs font-medium tracking-[0.18em] text-accent-2/90">
                            Tier 0{index + 1}
                          </span>
                        </div>

                        <p className="mt-7 text-sm uppercase tracking-[0.18em] text-text/55">Investment Amount</p>
                        <h3 className="mt-2 text-3xl font-semibold leading-tight">{tier.amount}</h3>

                        <div className="mt-6 grid gap-3">
                          <div className="rounded-2xl border border-border/80 bg-white/58 p-4">
                            <p className="text-xs uppercase tracking-[0.16em] text-text/50">Bonus Percentage</p>
                            <p className="mt-2 text-lg font-semibold text-accent-2">{tier.percentage}</p>
                          </div>

                          <div className="rounded-2xl border border-border/80 bg-white/58 p-4">
                            <p className="text-xs uppercase tracking-[0.16em] text-text/50">Bonus Amount</p>
                            <p className="mt-2 text-lg font-semibold">{tier.bonus}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* BENEFITS */}
        <section className="relative border-b border-border/70 py-18 md:py-20">
          <div className="absolute left-[8%] top-[16%] h-44 w-44 rounded-full bg-accent-1/8 blur-[110px]" />
          <div className="absolute bottom-[12%] right-[8%] h-52 w-52 rounded-full bg-accent-2/8 blur-[120px]" />

          <AnimatedContent
            direction="horizontal"
            reverse={false}
            distance={100}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ bonus benefits /</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Designed to give traders more room to act
                  </h2>
                  <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                    The trading bonus is built to support stronger account capacity, improved flexibility, and wider
                    market access during the promotional period.
                  </p>

                  <div className="mt-8 space-y-3">
                    {offerHighlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 rounded-2xl border border-border/90 bg-white/58 p-4 shadow-[0_10px_24px_rgba(31,41,55,0.05)] backdrop-blur-md"
                      >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-1/15 text-accent-2">
                          <Icon icon="solar:check-circle-bold" />
                        </span>
                        <p className="text-sm leading-7 text-text/75">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-3">
                  {benefitCards.map((card) => (
                    <React.Fragment key={card.title}>{renderBenefitCard(card)}</React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>
      </div>

      {/* CTA */}
      <section className="relative py-18 md:py-20">
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
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">Activate Your Eid Bonus</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Don’t miss this limited-time opportunity to elevate your trading experience
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">
                    Contact our support or account management team to learn more about eligibility, activation, and how
                    to make the most of the Eid al-Adha investment bonus.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button variant="primary" icon="mdi:gift-outline" onClick={openSignup}>
                      Activate Bonus
                    </Button>

                    <Button
                      variant="secondary"
                      icon="mdi:email-outline"
                      onClick={() => {
                        window.location.href = "/contact";
                      }}
                    >
                      Contact Support
                    </Button>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.75rem] border border-border/90 bg-white/72 p-6 shadow-[0_12px_36px_rgba(31,41,55,0.08)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.12),transparent_30%)]" />

                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/25 bg-white/72 text-2xl text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
                      <Icon icon="solar:gift-bold" />
                    </div>

                    <p className="mt-7 text-sm uppercase tracking-[0.18em] text-text/55">Seasonal Offer</p>
                    <h3 className="mt-2 text-3xl font-semibold leading-tight">Eid Mubarak & Happy Trading</h3>
                    <p className="mt-4 text-sm leading-8 text-text/72">
                      Strengthen your account with bonus capital and take advantage of boosted trading opportunities
                      before the offer period ends.
                    </p>

                    <div className="mt-6 rounded-2xl border border-accent-1/20 bg-accent-1/10 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-accent-2">Valid Until</p>
                      <p className="mt-2 text-xl font-semibold">31 May 2026</p>
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
}

export default Offers;
