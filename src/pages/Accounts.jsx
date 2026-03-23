import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import AnimatedContent from "@/components/ui/AnimatedContent";
import Button from "@/components/ui/Button";
import useWdith from "@/hooks/useWidth";
import homeCTA from "@/assets/homeCTA.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

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

const AccountPlanCard = ({ account }) => {
  return (
    <div className="relative overflow-hidden bg-card/80 border border-accent-1/15 border-t-4 border-t-accent-1/80 backdrop-blur-lg rounded-2xl shadow-md p-6 flex flex-col min-h-135 transition-all duration-300 w-full hover:-translate-y-1 hover:border-accent-1/35 hover:shadow-[0_18px_50px_rgba(234,179,8,0.12)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,0,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.08),transparent_24%)]" />
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-1/10 blur-3xl" />
      <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-accent-2/10 blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/10 text-accent-1">
            <Icon icon={account.icon} width={26} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-text">{account.title}</h3>
            <span className="bg-accent-1 text-background px-3 py-1 text-xs rounded-full mt-1 inline-block font-medium">
              {account.price} Minimum Deposit
            </span>
          </div>
        </div>

        <div className="w-full text-sm text-text/75 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <span className="font-medium text-text">Account Tier:</span>
            <span className="bg-accent-1/10 text-accent-2 px-2 py-1 rounded text-xs border border-accent-1/15">
              {account.spread}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="font-medium text-text">Access:</span>
            <span className="text-right text-xs">{account.instruments}</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="font-medium text-text">AI Tools:</span>
            <span className={`text-xs font-bold ${account.aiAccess === "Yes" ? "text-accent-1" : "text-text/45"}`}>
              {account.aiAccess}
            </span>
          </div>
        </div>

        <hr className="my-4 w-full border-dashed border-accent-1/10" />

        <div className="w-full text-sm text-text/75">
          <p className="font-semibold mb-1 text-text">Support:</p>
          <ul className="list-disc list-inside space-y-1 marker:text-accent-2">
            {account.support.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p className="font-semibold mt-4 mb-1 text-text">Extras:</p>
          <ul className="list-disc list-inside space-y-1 marker:text-accent-2">
            {account.extras.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mt-auto pt-6 flex justify-center">
        <button
          className="px-4 py-2 rounded-lg text-text border border-accent-1/20 backdrop-blur-lg bg-accent-1/10 transition-all duration-300 hover:bg-accent-1/20 hover:border-accent-1 hover:shadow-[0_0_18px_rgba(255,255,0,0.24)] text-sm md:text-base text-center"
          onClick={() => window.open("/contact", "_blank")}
        >
          Trade Now
        </button>
      </div>
    </div>
  );
};

const Accounts = () => {
  const { width, breakpoints } = useWdith();
  const isMobile = width < breakpoints.md;
  const swiperRef = useRef(null);

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
    <div className="min-h-screen bg-background text-text font-figtree overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/8 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/8 blur-[140px]" />
        <div className="absolute left-[18%] bottom-[8%] h-80 w-80 rounded-full bg-accent-1/6 blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
          <div className="absolute right-[10%] top-[10%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
          <div className="absolute left-[40%] -bottom-10 h-48 w-48 rounded-full bg-accent-1/8 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02),transparent_20%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-18 lg:pt-32 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerWrap}
              className="max-w-2xl"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-accent-1/10 bg-card/70 px-4 py-2 text-xs text-text/70 backdrop-blur-md"
              >
                <span>Home</span>
                <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                <span className="text-accent-2">Accounts</span>
              </motion.div>

              <motion.p variants={fadeUp} className="mt-6 text-sm text-text/65 uppercase tracking-[0.22em]">
                Account Types
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
              >
                Find the right trading account for the way you want to grow
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-5 text-sm md:text-base text-text/70 leading-8">
                Explore account options built for beginners, active traders, and high-volume investors. Each tier is
                designed to give you the balance of access, support, and AI-backed tools that fits your trading level.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button variant="primary" icon="mdi:wallet-outline" onClick={scrollToPlans}>
                  Explore Accounts
                </Button>

                <Button variant="secondary" icon="mdi:rocket-launch-outline" onClick={scrollToCta}>
                  Open Account
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-accent-1/10 bg-card/70 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-text/55">Plans</p>
                  <p className="mt-2 text-lg font-semibold">6 Tiers</p>
                </div>
                <div className="rounded-2xl border border-accent-1/10 bg-card/70 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-text/55">Leverage</p>
                  <p className="mt-2 text-lg font-semibold">Up to 1:1000</p>
                </div>
                <div className="rounded-2xl border border-accent-1/10 bg-card/70 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-text/55">Support</p>
                  <p className="mt-2 text-lg font-semibold">Basic to VIP</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/12 to-accent-2/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl border border-accent-1/10 bg-card/70 backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
                <img
                  src="https://picsum.photos/900/700?random=21"
                  alt="Trading account hero"
                  className="w-full h-90 md:h-115 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

                <div className="absolute left-5 right-5 bottom-5 rounded-2xl border border-accent-1/10 bg-background/50 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-2">EazyMarkets Accounts</p>
                  <p className="mt-2 text-lg font-semibold text-text">
                    Choose a tier aligned with your strategy and capital level
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-18 md:py-20 border-b border-border/60 relative">
        <div className="absolute left-[10%] top-[28%] h-40 w-40 rounded-full bg-accent-1/7 blur-[110px]" />
        <div className="absolute right-[12%] bottom-[12%] h-48 w-48 rounded-full bg-accent-2/7 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ account-types /</p>
              <h2 className="mt-3 text-2xl md:text-4xl font-semibold leading-tight">
                Choose the plan that fits your needs
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <p className="text-text/70 leading-8 text-sm md:text-base">
                EazyMarkets offers account types tailored to different trading goals, from first-time users to more
                advanced and high-volume traders. Each tier is structured to provide a different balance of support,
                leverage, AI-backed tools, signal access, and account flexibility so you can choose conditions that
                match the way you trade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACCOUNT PLANS */}
      <section id="account-plans" className="py-18 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-36 h-36 md:w-72 md:h-72 bg-accent-1 opacity-15 blur-3xl rounded-full top-[22%] -left-20" />
          <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-accent-2 opacity-10 blur-3xl rounded-full top-[45%] left-[40%]" />
          <div className="absolute w-40 h-40 md:w-80 md:h-80 bg-accent-1 opacity-10 blur-3xl rounded-full top-[35%] -right-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedContent
            distance={80}
            direction={isMobile ? "horizontal" : "vertical"}
            reverse={false}
            config={{ tension: 50, friction: 25 }}
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
          >
            <div className="max-w-4xl mx-auto text-center mb-14 px-4 sm:px-6">
              <h2 className="text-2xl md:text-4xl font-semibold mb-3">Tailored Accounts for Every Trader</h2>
              <p className="text-text/70 text-sm md:text-base leading-8">
                From beginners to professionals, choose an account that aligns with your capital, trading style, and the
                level of support you need to move with more confidence.
              </p>
            </div>
          </AnimatedContent>

          {isMobile ? (
            <div className="relative flex items-center justify-center overflow-hidden z-10">
              <button onClick={handlePrev} className="absolute -left-4 z-20 p-2" aria-label="Previous">
                <Icon icon="mdi:chevron-left" width={34} className="text-accent-1" />
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
                      <AccountPlanCard account={account} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <button onClick={handleNext} className="absolute -right-4 z-20 p-2" aria-label="Next">
                <Icon icon="mdi:chevron-right" width={34} className="text-accent-1" />
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 relative z-10">
                {accountPlans.slice(0, 3).map((account, index) => (
                  <AccountPlanCard key={index} account={account} />
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                {accountPlans.slice(3).map((account, index) => (
                  <div key={index} className="w-full">
                    <AccountPlanCard account={account} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section id="accounts-cta" className="py-18 md:py-20 relative">
        <div className="absolute left-[10%] top-[15%] h-48 w-48 rounded-full bg-accent-1/8 blur-[120px]" />
        <div className="absolute right-[10%] bottom-[12%] h-56 w-56 rounded-full bg-accent-2/8 blur-[130px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-4xl border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.018))] p-8 sm:p-10 lg:p-14 shadow-[0_24px_90px_rgba(0,0,0,0.28)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,0,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.10),transparent_32%)]" />

            <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-accent-2">Ready to Trade Smarter?</p>
                <h2 className="mt-3 text-2xl md:text-4xl font-semibold leading-tight">
                  Open an account built around your trading journey
                </h2>
                <p className="mt-5 text-text/70 leading-8 max-w-2xl text-sm md:text-base">
                  Start with a plan that fits your level today and move into stronger trading conditions as your
                  strategy, confidence, and account size continue to grow.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="primary" icon="mdi:rocket-launch">
                    Get Started Now
                  </Button>
                  <Button variant="secondary" icon="mdi:chart-line">
                    Compare Plans
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-background/60 shadow-[0_16px_60px_rgba(0,0,0,0.22)]">
                <img
                  src={homeCTA}
                  alt="Smart trading technology"
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Accounts;
