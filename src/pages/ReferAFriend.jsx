import React, { useRef } from "react";
import { Icon } from "@iconify/react";

import Button from "@/components/ui/Button";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import AnimatedContent from "@/components/ui/AnimatedContent";
import homeCTA from "@/assets/homeCTA.webp";
import refer from "@/assets/refer.webp";

const referralHeroImage = refer;
const referralCtaImage = homeCTA;

const rewardStats = [
  { label: "Share", value: "Referral Link" },
  { label: "Track", value: "In Portal" },
  { label: "Earn", value: "Rewards" },
];

const benefitCards = [
  {
    icon: "solar:gift-bold",
    title: "Earn Referral Rewards",
    description:
      "Invite friends to EazyMarkets and receive rewards when eligible referred users complete the required steps.",
    className: "lg:col-span-2",
  },
  {
    icon: "solar:link-round-angle-bold",
    title: "Easy to Share",
    description:
      "Use your referral link to invite friends, colleagues, or trading contacts through chat, social media, or direct messages.",
  },
  {
    icon: "solar:chart-2-bold",
    title: "Simple Tracking",
    description:
      "Keep an eye on referral activity and reward progress through a clear, easy-to-follow referral experience.",
  },
  {
    icon: "solar:users-group-rounded-bold",
    title: "Help Friends Start Smarter",
    description:
      "Introduce your friends to a trading ecosystem built around AI-powered tools, automation, education, and market insight.",
    className: "lg:col-span-2",
  },
];

const steps = [
  {
    number: "01",
    title: "Open Your Account",
    description: "Log in to your EazyMarkets account and access your referral area from the client portal.",
  },
  {
    number: "02",
    title: "Copy Your Referral Link",
    description: "Use your unique referral link so referred sign-ups can be connected back to you correctly.",
  },
  {
    number: "03",
    title: "Invite Your Friends",
    description:
      "Share your link with people who may be interested in trading tools, education, automation, or market access.",
  },
  {
    number: "04",
    title: "Track and Earn",
    description: "Follow referral progress and receive rewards once the required referral conditions are completed.",
  },
];

const whyShareCards = [
  {
    icon: "solar:cpu-bolt-bold",
    title: "AI Trading Tools",
    description:
      "Give friends access to a platform focused on smarter trading support and technology-backed decision-making.",
  },
  {
    icon: "solar:shield-check-bold",
    title: "Structured Experience",
    description:
      "Help them start with a cleaner trading journey supported by account options, education, and guidance.",
  },
  {
    icon: "solar:graph-up-bold",
    title: "Market Access",
    description:
      "Let them explore markets such as forex, commodities, indices, stocks, and cryptocurrency from one ecosystem.",
  },
  {
    icon: "solar:medal-ribbons-star-bold",
    title: "Mutual Value",
    description:
      "Referral programs are built to reward existing clients while helping new users discover the platform.",
  },
];

const ReferAFriend = () => {
  const scrollContainerRef = useRef(null);

  const scrollToContent = () => {
    const el = document.getElementById("refer-content");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCta = () => {
    const el = document.getElementById("refer-cta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderBentoCard = ({ icon, title, description, className = "" }) => (
    <div
      className={`group relative overflow-hidden rounded-[1.9rem] border border-border/90 bg-white/58 p-6 md:p-7 shadow-[0_12px_38px_rgba(31,41,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-1/45 hover:shadow-[0_16px_46px_rgba(126,217,87,0.14)] ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.42))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_28%)] opacity-90" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/16 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/25 bg-white/72 text-accent-2 text-2xl shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
          <Icon icon={icon} />
        </div>

        <h3 className="mt-5 text-xl font-semibold leading-tight md:text-[1.35rem]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-text/72 md:text-[15px]">{description}</p>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent-2">
          <span>Referral benefit</span>
          <Icon icon="solar:arrow-right-up-bold" className="text-base" />
        </div>
      </div>
    </div>
  );

  return (
    <div ref={scrollContainerRef} className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fbf4_0%,#eef9e7_50%,#f8fbf4_100%)]" />
          <div className="absolute -left-20 top-12 h-96 w-[24rem] rounded-full bg-accent-1/28 blur-[110px]" />
          <div className="absolute right-[4%] top-[8%] h-104 w-104 rounded-full bg-accent-2/24 blur-[120px]" />
          <div className="absolute -bottom-10 left-[40%] h-72 w-[18rem] rounded-full bg-accent-1/22 blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,217,87,0.20),transparent_20%),radial-gradient(circle_at_80%_24%,rgba(79,143,47,0.18),transparent_22%),radial-gradient(circle_at_48%_78%,rgba(126,217,87,0.14),transparent_20%)]" />
          <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(126,217,87,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(126,217,87,0.10)_1px,transparent_1px)] bg-size-[72px_72px]" />
          <div className="absolute inset-0 bg-white/18" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={90}
              delay={0}
              threshold={0.2}
              config={{ tension: 50, friction: 25 }}
            >
              <div className="max-w-2xl">
                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={70}
                  delay={100}
                  threshold={0.15}
                  config={{ tension: 50, friction: 25 }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-white/62 px-4 py-2 text-xs text-text/70 backdrop-blur-md shadow-[0_8px_24px_rgba(31,41,55,0.05)]">
                    <span>Home</span>
                    <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                    <span>Rewards</span>
                    <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                    <span className="text-accent-2">Refer a Friend</span>
                  </div>
                </AnimatedContent>

                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={70}
                  delay={180}
                  threshold={0.15}
                  config={{ tension: 50, friction: 25 }}
                >
                  <p className="mt-6 text-sm uppercase tracking-[0.22em] text-text/65">EazyMarkets Rewards</p>
                </AnimatedContent>

                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={70}
                  delay={260}
                  threshold={0.15}
                  config={{ tension: 50, friction: 25 }}
                >
                  <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                    Refer your friends and{" "}
                    <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                      earn rewards
                    </span>
                  </h1>
                </AnimatedContent>

                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={70}
                  delay={340}
                  threshold={0.15}
                  config={{ tension: 50, friction: 25 }}
                >
                  <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                    Share EazyMarkets with friends who want a smarter trading experience. Invite them using your
                    referral link, help them get started, and earn rewards when eligible conditions are met.
                  </p>
                </AnimatedContent>

                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={70}
                  delay={420}
                  threshold={0.15}
                  config={{ tension: 50, friction: 25 }}
                >
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button variant="primary" icon="mdi:gift-outline" onClick={scrollToCta}>
                      Start Referring
                    </Button>

                    <Button variant="secondary" icon="mdi:information-outline" onClick={scrollToContent}>
                      How It Works
                    </Button>
                  </div>
                </AnimatedContent>

                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={70}
                  delay={500}
                  threshold={0.15}
                  config={{ tension: 50, friction: 25 }}
                >
                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {rewardStats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-border/90 bg-white/60 p-4 backdrop-blur-md shadow-[0_10px_24px_rgba(31,41,55,0.05)]"
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-text/55">{item.label}</p>
                        <p className="mt-2 text-lg font-semibold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedContent>
              </div>
            </AnimatedContent>

            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={90}
              delay={150}
              threshold={0.2}
              config={{ tension: 50, friction: 25 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/16 to-accent-2/12 blur-2xl" />
                <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/60 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md">
                  <img
                    src={referralHeroImage}
                    alt="Refer a friend with EazyMarkets"
                    className="h-90 w-full object-cover md:h-115"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/74 via-background/18 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border/90 bg-white/55 p-4 backdrop-blur-md shadow-[0_10px_28px_rgba(31,41,55,0.05)]">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent-2">Refer & Earn</p>
                    <p className="mt-2 text-lg font-semibold text-text">
                      Invite friends, track referrals, and grow your rewards
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      <div id="refer-content">
        {/* INTRO */}
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
              <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ refer a friend /</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Share a platform you trust and get rewarded for successful referrals
                  </h2>
                </div>

                <div>
                  <p className="text-sm leading-8 text-text/70 md:text-base">
                    The EazyMarkets Refer a Friend program is designed for existing users who want to introduce friends
                    to a smarter trading ecosystem and receive rewards for successful referrals.
                  </p>

                  <p className="mt-4 text-sm leading-8 text-text/70 md:text-base">
                    Instead of complicated partner onboarding, this page is built for everyday users: copy your link,
                    share it, and track your progress through a simple referral journey.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* BENEFITS */}
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
                <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Referral Benefits</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  A simple way to turn your network into rewards
                </h2>
                <p className="mt-5 leading-7 text-text/72">
                  Referral pages from brokers usually focus on easy sharing, reward eligibility, referral tracking, and
                  mutual value. This version keeps it clean and customer-friendly.
                </p>
              </div>

              <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-3">
                {benefitCards.map((card) => (
                  <React.Fragment key={card.title}>{renderBentoCard(card)}</React.Fragment>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* HOW IT WORKS */}
        <section className="relative border-b border-border/70 py-18 md:py-20">
          <AnimatedContent
            direction="vertical"
            reverse={false}
            distance={90}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">How It Works</p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                    Invite, track, and earn in four simple steps
                  </h2>
                  <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                    The referral flow should feel quick and obvious. Your users should understand exactly what they need
                    to do without reading a long policy page first.
                  </p>
                </div>

                <div className="grid gap-4">
                  {steps.map((step) => (
                    <div
                      key={step.number}
                      className="relative overflow-hidden rounded-[1.6rem] border border-border/90 bg-white/58 p-5 shadow-[0_10px_30px_rgba(31,41,55,0.06)] backdrop-blur-xl"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.14),transparent_30%)]" />
                      <div className="relative z-10 flex gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-1/25 bg-accent-1/12 text-sm font-semibold text-accent-2">
                          {step.number}
                        </span>

                        <div>
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-text/70">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* WHY SHARE */}
        <section className="relative border-b border-border/70 py-18 md:py-20">
          <AnimatedContent
            direction="horizontal"
            reverse={false}
            distance={100}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Why Share EazyMarkets?</p>
                <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Give friends a reason to join beyond the reward
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">
                  A strong referral page should not only say “earn rewards”. It should also explain why the referred
                  friend may actually benefit from joining.
                </p>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {whyShareCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.6rem] border border-border/90 bg-white/58 p-6 shadow-[0_10px_30px_rgba(31,41,55,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-1/25 bg-white/72 text-2xl text-accent-2">
                      <Icon icon={card.icon} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-text/70">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </section>
      </div>

      {/* CTA */}
      <section id="refer-cta" className="relative py-18 md:py-20">
        <div className="absolute left-[10%] top-[15%] h-48 w-48 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute bottom-[12%] right-[10%] h-56 w-56 rounded-full bg-accent-2/10 blur-[130px]" />

        <AnimatedContent
          direction="horizontal"
          reverse={false}
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
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">Ready to Refer?</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Share EazyMarkets and start building your referral rewards
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">
                    Invite friends to join a smarter trading experience. Copy your referral link, share it with your
                    network, and track your reward progress from your account.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button
                      variant="primary"
                      icon="mdi:gift-outline"
                      onClick={() => {
                        window.open("https://portal.eazymarkets.com/signup", "_blank");
                      }}
                    >
                      Start Referring
                    </Button>

                    <Button
                      variant="secondary"
                      icon="mdi:login"
                      onClick={() => {
                        window.open("https://portal.eazymarkets.com/login", "_blank");
                      }}
                    >
                      Login to Portal
                    </Button>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.75rem] border border-border/90 bg-white/72 shadow-[0_12px_36px_rgba(31,41,55,0.08)]">
                  <img
                    src={referralCtaImage}
                    alt="Refer a friend CTA"
                    className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/75 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>
    </div>
  );
};

export default ReferAFriend;
