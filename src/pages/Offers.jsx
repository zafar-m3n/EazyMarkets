import React from "react";
import { Icon } from "@iconify/react";
import useWidth from "@/hooks/useWidth";

import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";
import midYear from "@/assets/midYear.png";

const promotionEndDate = "30 June 2026";

const bonusTiers = [
  {
    amount: "$5,000",
    percentage: "40% Bonus",
    bonus: "$2,000",
    icon: "solar:wallet-money-bold",
  },
  {
    amount: "$10,000",
    percentage: "60% Bonus",
    bonus: "$6,000",
    icon: "solar:chart-bold",
  },
  {
    amount: "$20,000+",
    percentage: "80% Bonus",
    bonus: "From $16,000",
    icon: "solar:graph-up-bold",
  },
];

const benefitCards = [
  {
    icon: "solar:gift-bold",
    title: "Exclusive Mid-Year Bonuses",
    description: "Access promotional bonus rates created specifically for the Mid-Year Special Offer campaign.",
    className: "lg:col-span-2",
  },
  {
    icon: "solar:graph-up-bold",
    title: "Greater Reward Potential",
    description:
      "Higher investment tiers unlock stronger promotional benefits, helping eligible clients maximize their investment value.",
    className: "lg:col-span-1",
  },
  {
    icon: "solar:rocket-bold",
    title: "Simple Enrollment",
    description:
      "Choose your preferred tier, complete your qualifying investment, and receive the promotional bonus according to your eligible amount.",
    className: "lg:col-span-1",
  },
  {
    icon: "solar:calendar-bold",
    title: "Limited-Time Campaign",
    description:
      "This offer is only available until the end of the month, making it a timely opportunity for qualifying investors.",
    className: "lg:col-span-2",
  },
];

const offerHighlights = [
  "Exclusive mid-year promotional bonuses for qualifying investors",
  "Opportunity to maximize your investment value during the campaign",
  "Fast and simple enrollment process",
  "Higher investment tiers unlock greater promotional benefits",
];

const gettingStartedSteps = [
  "Choose your preferred investment tier.",
  "Complete your investment before the promotion expires.",
  "Receive your eligible promotional bonus according to the qualifying investment amount.",
  "Make the most of your investment with exclusive mid-year benefits.",
];

const terms = [
  `Offer is valid only until 11:59 PM on ${promotionEndDate}.`,
  "Applicable to qualifying investments made during the promotional period.",
  "Promotional bonuses are subject to the company's eligibility requirements and terms and conditions.",
  "The company reserves the right to modify or withdraw this promotion without prior notice where permitted.",
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
                Mid-Year Special{" "}
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
                Unlock bigger rewards with our exclusive Mid-Year Investment Campaign. For a limited time only, eligible
                investors can access promotional bonuses designed to help maximize investment value and growth
                potential.
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
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ limited-time opportunity /</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Unlock bigger rewards this mid-year season
                  </h2>

                  <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                    Whether you are looking to grow your portfolio or maximize your investment potential, this exclusive
                    Mid-Year Special Offer gives qualifying investors access to some of our most rewarding promotional
                    bonus rates of the season.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-accent-1/25 bg-white/68 px-4 py-2 text-sm text-text/75 shadow-[0_10px_26px_rgba(31,41,55,0.06)] backdrop-blur-md">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-1/15 text-lg text-accent-2">
                      <Icon icon="solar:calendar-bold" />
                    </span>
                    <span>
                      Promotion valid until <span className="font-semibold text-accent-2">{promotionEndDate}</span>
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/16 to-accent-2/12 blur-2xl" />
                  <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/60 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md">
                    <img
                      src={midYear}
                      alt="Mid-Year Special investment bonus offer"
                      className="h-80 w-full object-cover md:h-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/74 via-background/10 to-transparent" />

                    {!isMobile && (
                      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border/90 bg-white/58 p-4 shadow-[0_10px_28px_rgba(31,41,55,0.05)] backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.2em] text-accent-2">Mid-Year Special</p>
                        <p className="mt-2 text-lg font-semibold text-text">
                          Exclusive promotional bonuses for qualifying investments
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
                <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Promotional Investment Tiers</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Choose your investment tier and unlock a bigger promotional bonus
                </h2>
                <p className="mt-5 leading-7 text-text/72">
                  The bigger your investment, the greater your promotional bonus. Select the tier that matches your
                  investment goals and activate your eligible mid-year reward.
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
                            <p className="text-xs uppercase tracking-[0.16em] text-text/50">Promotional Bonus</p>
                            <p className="mt-2 text-lg font-semibold text-accent-2">{tier.percentage}</p>
                          </div>

                          <div className="rounded-2xl border border-border/80 bg-white/58 p-4">
                            <p className="text-xs uppercase tracking-[0.16em] text-text/50">Estimated Bonus Value</p>
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
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ why participate /</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Designed to reward qualifying investors with more value
                  </h2>
                  <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                    This campaign gives eligible investors a limited-time opportunity to increase their promotional
                    bonus value based on their selected investment tier.
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

        {/* HOW TO GET STARTED */}
        <section className="relative border-b border-border/70 py-18 md:py-20">
          <div className="absolute right-[10%] top-[16%] h-44 w-44 rounded-full bg-accent-1/8 blur-[110px]" />
          <div className="absolute bottom-[14%] left-[8%] h-52 w-52 rounded-full bg-accent-2/8 blur-[120px]" />

          <AnimatedContent
            direction="horizontal"
            reverse={true}
            distance={100}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ how to get started /</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Activate your Mid-Year Special Offer in a few simple steps
                  </h2>
                  <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                    Complete your qualifying investment before the promotion expires and receive your eligible
                    promotional bonus according to your selected tier.
                  </p>
                </div>

                <div className="grid gap-4">
                  {gettingStartedSteps.map((step, index) => (
                    <AnimatedContent
                      key={step}
                      direction="vertical"
                      reverse={false}
                      distance={50}
                      delay={index * 80}
                      threshold={0.12}
                      config={{ tension: 50, friction: 25 }}
                    >
                      <div className="relative overflow-hidden rounded-2xl border border-border/90 bg-white/58 p-5 shadow-[0_10px_24px_rgba(31,41,55,0.05)] backdrop-blur-md">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.14),transparent_32%)]" />
                        <div className="relative z-10 flex items-start gap-4">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-1/25 bg-accent-1/12 text-sm font-semibold text-accent-2">
                            0{index + 1}
                          </span>
                          <p className="pt-2 text-sm leading-7 text-text/75 md:text-base">{step}</p>
                        </div>
                      </div>
                    </AnimatedContent>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* TERMS */}
        <section className="relative border-b border-border/70 py-18 md:py-20">
          <div className="absolute left-[10%] top-[18%] h-44 w-44 rounded-full bg-accent-1/8 blur-[110px]" />
          <div className="absolute bottom-[10%] right-[10%] h-52 w-52 rounded-full bg-accent-2/8 blur-[120px]" />

          <AnimatedContent
            direction="horizontal"
            reverse={false}
            distance={100}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/58 p-8 shadow-[0_16px_46px_rgba(31,41,55,0.08)] backdrop-blur-xl sm:p-10">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.80),rgba(255,255,255,0.42))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,217,87,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(79,143,47,0.10),transparent_32%)]" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/25 bg-white/72 text-2xl text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
                    <Icon icon="solar:shield-warning-bold" />
                  </div>

                  <p className="mt-7 text-sm uppercase tracking-[0.22em] text-accent-2">Terms & Conditions</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">Important campaign details</h2>

                  <div className="mt-8 grid gap-3">
                    {terms.map((term) => (
                      <div
                        key={term}
                        className="flex items-start gap-3 rounded-2xl border border-border/80 bg-white/58 p-4"
                      >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-1/15 text-accent-2">
                          <Icon icon="solar:check-circle-bold" />
                        </span>
                        <p className="text-sm leading-7 text-text/75">{term}</p>
                      </div>
                    ))}
                  </div>
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
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">Activate Your Mid-Year Bonus</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Don’t miss this limited-time opportunity to unlock bigger rewards
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">
                    The bigger your investment, the greater your promotional bonus. Activate your Mid-Year Special Offer
                    before the campaign ends and make the most of one of our best offers of the year.
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

                    <p className="mt-7 text-sm uppercase tracking-[0.18em] text-text/55">Limited-Time Campaign</p>
                    <h3 className="mt-2 text-3xl font-semibold leading-tight">
                      Bigger investments unlock greater rewards
                    </h3>
                    <p className="mt-4 text-sm leading-8 text-text/72">
                      Complete your qualifying investment before the promotion expires and receive your eligible
                      promotional bonus based on your selected investment tier.
                    </p>

                    <div className="mt-6 rounded-2xl border border-accent-1/20 bg-accent-1/10 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-accent-2">Valid Until</p>
                      <p className="mt-2 text-xl font-semibold">{promotionEndDate}</p>
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
