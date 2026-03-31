import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import accountsHero from "@/assets/accountsHero.webp";
import AnimatedContent from "@/components/ui/AnimatedContent";
import Button from "@/components/ui/Button";
import useWdith from "@/hooks/useWidth";
import homeCTA from "@/assets/homeCTA.webp";

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

const AccountPlanCard = ({ account }) => {
  return (
    <div className="group relative flex min-h-145 w-full flex-col overflow-hidden rounded-2xl border border-border/90 border-t-4 border-t-accent-1/80 bg-white/58 p-6 shadow-[0_12px_34px_rgba(31,41,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/40 hover:shadow-[0_16px_42px_rgba(126,217,87,0.14)]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.42))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.12),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-1/16 blur-3xl" />
      <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-accent-2/14 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-1/25 bg-white/72 text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_22px_rgba(126,217,87,0.18)]">
              <Icon icon={account.icon} width={26} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-text">{account.title}</h3>

              <div className="mt-1 flex flex-wrap items-center gap-2">
                {account.originalDeposit ? (
                  <span className="text-xs font-medium text-text/45 line-through">{account.originalDeposit}</span>
                ) : null}

                <span className="inline-block rounded-full border border-accent-1/20 bg-accent-1/14 px-3 py-1 text-xs font-medium text-accent-2">
                  {account.minimumDeposit} Minimum Deposit
                </span>
              </div>
            </div>
          </div>

          {account.badge ? (
            <span className="shrink-0 rounded-full border border-accent-1/20 bg-accent-1/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-2">
              {account.badge}
            </span>
          ) : null}
        </div>

        <div className="w-full space-y-2 text-sm text-text/75">
          <div className="flex items-center justify-between gap-3">
            <span className="font-medium text-text">Leverage:</span>
            <span className="rounded border border-accent-1/18 bg-accent-1/10 px-2 py-1 text-xs text-accent-2">
              {account.leverage}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="font-medium text-text">Minimum Withdrawal:</span>
            <span className="text-right text-xs">{account.minimumWithdrawal}</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="font-medium text-text">Processing:</span>
            <span className="text-right text-xs">{account.timeFrame}</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="font-medium text-text">AI Access:</span>
            <span className={`text-xs font-bold ${account.aiAccess === "No" ? "text-text/45" : "text-accent-2"}`}>
              {account.aiAccess}
            </span>
          </div>
        </div>

        <hr className="my-4 w-full border-dashed border-accent-1/12" />

        <div className="w-full text-sm text-text/75">
          <p className="mb-2 font-semibold text-text">Access:</p>
          <p className="leading-7">{account.access}</p>

          <p className="mb-1 mt-4 font-semibold text-text">Support:</p>
          <ul className="list-inside list-disc space-y-1 marker:text-accent-2">
            {account.support.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p className="mb-1 mt-4 font-semibold text-text">Extras:</p>
          <ul className="list-inside list-disc space-y-1 marker:text-accent-2">
            {account.extras.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mt-auto flex justify-center pt-6">
        <button
          className="rounded-lg border border-accent-1/20 bg-white/72 px-4 py-2 text-center text-sm text-text backdrop-blur-lg transition-all duration-300 hover:border-accent-1/55 hover:bg-accent-1/12 hover:shadow-[0_0_18px_rgba(126,217,87,0.22)] md:text-base"
          onClick={() => window.open("https://portal.eazymarkets.com/signup", "_blank")}
        >
          Open This Account
        </button>
      </div>
    </div>
  );
};

const DesktopAccountTabs = ({ plans, activeIndex, setActiveIndex }) => {
  const activePlan = plans[activeIndex];

  return (
    <div className="relative z-10">
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {plans.map((plan, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={plan.title}
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-2xl border px-4 py-3 text-left backdrop-blur-md transition-all duration-300 ${
                isActive
                  ? "scale-[1.03] border-accent-1/45 bg-linear-to-br from-white via-accent-1/8 to-white shadow-[0_0_0_1px_rgba(126,217,87,0.22),0_18px_40px_rgba(126,217,87,0.16)]"
                  : "border-border/90 bg-white/52 hover:border-accent-1/25 hover:bg-white/70"
              }`}
            >
              {isActive ? (
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent-1 via-accent-2 to-accent-1" />
              ) : null}

              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "border-accent-1/30 bg-accent-1/14 text-accent-2 shadow-[0_0_20px_rgba(126,217,87,0.18)]"
                      : "border-border/80 bg-white/70 text-text/65"
                  }`}
                >
                  <Icon icon={plan.icon} width={20} />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-semibold ${isActive ? "text-accent-2" : "text-text"}`}>{plan.title}</p>
                    {plan.badge ? (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                          isActive
                            ? "border border-accent-1/25 bg-accent-1/14 text-accent-2"
                            : "border border-accent-1/20 bg-accent-1/12 text-accent-2"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    {plan.originalDeposit ? (
                      <span className="text-[11px] text-text/40 line-through">{plan.originalDeposit}</span>
                    ) : null}
                    <p className={`text-xs ${isActive ? "text-text/85 font-medium" : "text-text/60"}`}>
                      {plan.minimumDeposit} deposit
                    </p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-4xl border border-accent-1/20 bg-white/58 p-6 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-xl md:p-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.44))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.12),transparent_24%)]" />
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-1/16 blur-3xl" />
        <div className="absolute -left-12 bottom-0 h-28 w-28 rounded-full bg-accent-2/14 blur-3xl" />

        <div className="relative z-10 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/25 bg-white/72 text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
                <Icon icon={activePlan.icon} width={28} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold text-text md:text-3xl">{activePlan.title}</h3>
                  {activePlan.badge ? (
                    <span className="rounded-full border border-accent-1/20 bg-accent-1/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-2">
                      {activePlan.badge}
                    </span>
                  ) : null}
                </div>

                <p className="mt-2 text-sm leading-7 text-text/65">
                  Designed for traders who want {activePlan.access.toLowerCase()}.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/90 bg-white/62 p-4 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Minimum Deposit</p>
                <div className="mt-3 flex flex-wrap items-end gap-2">
                  {activePlan.originalDeposit ? (
                    <span className="text-sm text-text/40 line-through">{activePlan.originalDeposit}</span>
                  ) : null}
                  <p className="text-lg font-semibold text-text">{activePlan.minimumDeposit}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/90 bg-white/62 p-4 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Minimum Withdrawal</p>
                <p className="mt-3 text-lg font-semibold text-text">{activePlan.minimumWithdrawal}</p>
              </div>

              <div className="rounded-2xl border border-border/90 bg-white/62 p-4 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Withdrawal Time</p>
                <p className="mt-3 text-lg font-semibold text-text">{activePlan.timeFrame}</p>
              </div>

              <div className="rounded-2xl border border-border/90 bg-white/62 p-4 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Leverage</p>
                <p className="mt-3 text-lg font-semibold text-text">{activePlan.leverage}</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border/90 bg-white/62 p-5 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Account Access</p>
              <p className="mt-3 text-sm leading-8 text-text/75">{activePlan.access}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border/90 bg-white/62 p-5 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">AI Access</p>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    activePlan.aiAccess === "No"
                      ? "border border-border/80 bg-white/70 text-text/50"
                      : "border border-accent-1/20 bg-accent-1/12 text-accent-2"
                  }`}
                >
                  {activePlan.aiAccess}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border/90 bg-white/62 p-5 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Support</p>
              <ul className="mt-3 space-y-2 text-sm text-text/75">
                {activePlan.support.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-accent-2">
                      <Icon icon="mdi:chevron-right" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/90 bg-white/62 p-5 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Extras</p>
              <ul className="mt-3 space-y-2 text-sm text-text/75">
                {activePlan.extras.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-accent-2">
                      <Icon icon="mdi:chevron-right" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                icon="mdi:wallet-outline"
                onClick={() => window.open("https://portal.eazymarkets.com/signup", "_blank")}
              >
                Open Account
              </Button>

              <Button
                variant="secondary"
                icon="mdi:chart-line"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                Talk to Advisor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Accounts = () => {
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

      {/* HERO */}
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
                    designed to give you the balance of access, support, and AI-backed tools that fits your trading
                    level.
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

      {/* INTRO */}
      <section className="relative border-b border-border/70 py-18 md:py-20">
        <div className="absolute left-[10%] top-[28%] h-40 w-40 rounded-full bg-accent-1/8 blur-[110px]" />
        <div className="absolute bottom-[12%] right-[12%] h-48 w-48 rounded-full bg-accent-2/8 blur-[120px]" />

        <AnimatedContent
          direction="horizontal"
          reverse={true}
          distance={100}
          threshold={0.15}
          config={{ tension: 50, friction: 25 }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ account-types /</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                  Choose the plan that fits your needs
                </h2>
              </div>

              <div>
                <p className="text-sm leading-8 text-text/70 md:text-base">
                  EazyMarkets offers account types tailored to different trading goals, from first-time users to more
                  advanced and high-volume traders. Each tier is structured to provide a different balance of support,
                  leverage, AI-backed tools, signal access, and account flexibility so you can choose conditions that
                  match the way you trade.
                </p>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* ACCOUNT PLANS */}
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
                  From beginners to professionals, choose an account that aligns with your capital, trading style, and
                  the level of support you need to move with more confidence.
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

      {/* CTA */}
      <section id="accounts-cta" className="relative py-18 md:py-20">
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
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">Ready to Trade Smarter?</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Open an account built around your trading journey
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">
                    Start with a plan that fits your level today and move into stronger trading conditions as your
                    strategy, confidence, and account size continue to grow.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button
                        variant="primary"
                        icon="mdi:rocket-launch-outline"
                        onClick={() => {
                          window.open("https://portal.eazymarkets.com/signup", "_blank");
                        }}
                      >
                        Get Started
                      </Button>

                      <Button variant="secondary" icon="mdi:chart-line" onClick={scrollToPlans}>
                        Compare Plans
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.75rem] border border-border/90 bg-white/72 shadow-[0_12px_36px_rgba(31,41,55,0.08)]">
                  <img
                    src={homeCTA}
                    alt="Smart trading technology"
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

export default Accounts;
