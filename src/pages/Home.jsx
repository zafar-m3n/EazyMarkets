import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Galaxy from "@/components/ui/Galaxy";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import Button from "@/components/ui/Button";
import homeAbout from "@/assets/homeAbout.jpg";
import homeCTA from "@/assets/homeCTA.jpg";
import barclays from "@/assets/barclays.webp";
import hsbc from "@/assets/hsbc.png";
import jpmorgan from "@/assets/jpmorgan.png";
import bankofamerica from "@/assets/bankofamerica.png";
import citibank from "@/assets/citibank.png";
import ubs from "@/assets/ubs.png";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
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

const marqueeTrack = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      duration: 24,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Home = () => {
  const scrollContainerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

  const tickerTexts = [
    "AI SIGNALS • RISK CONTROLS • BACKTESTED STRATEGIES • REAL-TIME ALERTS • LOW-LATENCY EXECUTION •",
    "NO EMOTION • DISCIPLINED TRADING • PORTFOLIO MONITORING • SMART AUTOMATION •",
  ];

  const missionVisionCards = [
    {
      icon: "solar:target-bold",
      title: "Mission",
      description:
        "To deliver a smarter trading experience through AI-driven analysis, automation, and risk-aware execution that helps traders act with greater clarity and consistency.",
      className: "lg:col-span-2 lg:row-span-1",
    },
    {
      icon: "solar:eye-bold",
      title: "Vision",
      description:
        "To become a trusted AI trading ecosystem where intelligent systems and disciplined strategy work together to unlock better market decisions.",
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      icon: "solar:shield-check-bold",
      title: "Value Proposition",
      description:
        "One platform for signal intelligence, execution support, risk controls, and performance insight—built for traders who want speed without losing structure.",
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      icon: "solar:graph-up-bold",
      title: "Built for Real Trading Conditions",
      description:
        "Designed to support fast-moving markets with live analytics, timely alerts, and technology that helps reduce hesitation and emotional decision-making.",
      className: "lg:col-span-2 lg:row-span-1",
    },
  ];

  const howItWorksCards = [
    {
      number: "01",
      icon: "solar:database-bold",
      title: "Market Data Intake",
      description:
        "The platform continuously gathers price action, technical signals, and market behaviour data to build a real-time view of the trading environment.",
      className: "lg:col-span-1",
    },
    {
      number: "02",
      icon: "solar:cpu-bolt-bold",
      title: "AI Pattern Analysis",
      description:
        "Advanced models process the incoming data to identify patterns, volatility shifts, and momentum signals faster than manual analysis alone.",
      className: "lg:col-span-2",
    },
    {
      number: "03",
      icon: "solar:chart-square-bold",
      title: "Signal & Strategy Output",
      description:
        "The analysis is translated into clear, structured trade signals and strategy support so traders can act with more confidence and less guesswork.",
      className: "lg:col-span-1",
    },
    {
      number: "04",
      icon: "solar:shield-user-bold",
      title: "Execution With Risk Control",
      description:
        "Trade execution is supported by rules, limits, and monitoring features that help keep decisions aligned with discipline and risk tolerance.",
      className: "lg:col-span-2",
    },
  ];

  const awards = [
    {
      year: "2023",
      title: "Emerging AI Trading Innovation",
      subtitle: "Recognised for advancing intelligent market analysis.",
    },
    {
      year: "2024",
      title: "Best Automated Trading Experience",
      subtitle: "Awarded for usability, speed, and execution support.",
    },
    {
      year: "2024",
      title: "Excellence in Fintech Intelligence",
      subtitle: "Acknowledged for combining analytics with applied AI.",
    },
    {
      year: "2025",
      title: "Trusted Platform for Smart Trading",
      subtitle: "Recognised for reliability, structure, and trader focus.",
    },
  ];

  const features = [
    {
      icon: "solar:flash-circle-bold",
      title: "AI-Powered Trade Signals",
      description:
        "Receive intelligent market signals backed by real-time analysis, momentum detection, and structured decision logic for faster entries and exits.",
      className: "lg:col-span-2 lg:row-span-1",
      stat: "Live AI Signals",
    },
    {
      icon: "solar:danger-triangle-bold",
      title: "Integrated Risk Controls",
      description:
        "Apply disciplined execution with stop logic, exposure control, and trade monitoring features that support more confident capital management.",
      className: "lg:col-span-1 lg:row-span-1",
      stat: "Risk Managed",
    },
    {
      icon: "solar:chart-2-bold",
      title: "Performance Analytics",
      description:
        "Track outcomes by strategy, market conditions, and timing to understand what is working and where your edge is strongest.",
      className: "lg:col-span-1 lg:row-span-1",
      stat: "Performance Insights",
    },
    {
      icon: "solar:cursor-bold",
      title: "Smart Automation",
      description:
        "Reduce hesitation and repetitive decision-making with systems that help execute trading logic more consistently across sessions.",
      className: "lg:col-span-1 lg:row-span-1",
      stat: "Execution Support",
    },
    {
      icon: "solar:bell-bold",
      title: "Instant Market Alerts",
      description:
        "Stay ready with responsive alerts that surface setups, momentum shifts, and real-time trading opportunities as they develop.",
      className: "lg:col-span-1 lg:row-span-1",
      stat: "Real-Time Alerts",
    },
    {
      icon: "solar:lock-keyhole-bold",
      title: "Secure Trading Environment",
      description:
        "Built with platform reliability, session protection, and dependable infrastructure to support a stronger trader experience.",
      className: "lg:col-span-2 lg:row-span-1",
      stat: "Secure Access",
    },
  ];

  const providerLogos = [
    {
      name: "JP Morgan",
      src: jpmorgan,
    },
    {
      name: "HSBC",
      src: hsbc,
    },
    {
      name: "Bank of America",
      src: bankofamerica,
    },
    {
      name: "Barclays",
      src: barclays,
    },
    {
      name: "Citi",
      src: citibank,
    },
    {
      name: "UBS",
      src: ubs,
    },
  ];

  const faqs = [
    {
      question: "What is AI trading?",
      answer:
        "AI trading uses intelligent models and data-driven systems to analyse market conditions, identify patterns, and support trade execution with greater speed and consistency.",
    },
    {
      question: "How does AI improve trading performance?",
      answer:
        "AI improves trading by processing large volumes of market data quickly, highlighting opportunities, supporting structured decision-making, and helping traders reduce emotional reactions.",
    },
    {
      question: "Is this platform suitable for new traders?",
      answer:
        "Yes. The platform is designed to present insights clearly, making it easier for newer traders to understand signals, manage risk, and build a more disciplined approach.",
    },
    {
      question: "Why use automation in trading?",
      answer:
        "Automation helps traders apply strategy rules more consistently, respond faster to changing markets, and reduce hesitation during execution.",
    },
    {
      question: "Does AI remove trading risk?",
      answer:
        "No trading system removes risk completely. What AI can do is improve structure, provide stronger analysis, and support better execution when paired with good risk management.",
    },
  ];

  const scrollToFeatures = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("cta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderBentoCard = ({ icon, number, title, description, className = "", stat }) => (
    <motion.div
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-[1.9rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 md:p-7 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-1/35 hover:shadow-[0_24px_90px_rgba(234,179,8,0.12)] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,0,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.08),transparent_28%)] opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/60 to-transparent" />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/8 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent-2/8 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/10 text-accent-1 text-2xl shadow-[0_0_30px_rgba(255,255,0,0.08)]">
            <Icon icon={icon} />
          </div>

          {number ? (
            <span className="rounded-full border border-accent-1/15 bg-accent-1/8 px-3 py-1 text-xs font-medium tracking-[0.22em] text-accent-2/85">
              {number}
            </span>
          ) : null}
        </div>

        {stat ? (
          <div className="mt-6 inline-flex w-fit items-center rounded-full border border-border/80 bg-background/50 px-3 py-1.5 text-xs text-text/65">
            {stat}
          </div>
        ) : null}

        <h3 className="mt-4 text-xl md:text-[1.35rem] font-semibold leading-tight">{title}</h3>

        <p className="mt-3 text-sm md:text-[15px] leading-7 text-text/70">{description}</p>

        <div className="mt-6 flex items-center gap-2 text-accent-1/85 text-sm font-medium">
          <span>Learn more</span>
          <Icon icon="solar:arrow-right-up-bold" className="text-base" />
        </div>
      </div>
    </motion.div>
  );

  const repeatedProviders = [...providerLogos, ...providerLogos];

  return (
    <div ref={scrollContainerRef} className="min-h-screen bg-background text-text font-figtree overflow-x-hidden">
      {/* Global background glow accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-32 h-64 w-64 rounded-full bg-accent-1/8 blur-[120px]" />
        <div className="absolute -right-24 top-112 h-72 w-72 rounded-full bg-accent-2/8 blur-[140px]" />
        <div className="absolute left-[18%] bottom-[10%] h-80 w-80 rounded-full bg-accent-1/6 blur-[150px]" />
      </div>

      {/* ========================= HERO ========================= */}
      <section className="relative overflow-hidden min-h-[72vh] lg:min-h-screen border-b border-border/60">
        <div className="absolute inset-0 pointer-events-none opacity-90">
          <Galaxy
            density={0.5}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.6}
            speed={1}
            glowIntensity={0.45}
            twinkleIntensity={0.15}
            hueShift={0}
            saturation={40}
          />

          <div className="absolute left-[10%] top-[18%] h-44 w-44 rounded-full bg-accent-1/8 blur-[90px]" />
          <div className="absolute right-[8%] top-[32%] h-52 w-52 rounded-full bg-accent-2/8 blur-[110px]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-b from-transparent to-background" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 lg:pb-0 lg:min-h-screen">
          <div className="mx-auto max-w-3xl text-center lg:flex lg:flex-col lg:justify-center lg:min-h-[calc(100vh-7rem)]">
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="text-sm md:text-base text-text/70"
            >
              AI-powered trading built for clarity, speed, and disciplined execution.
            </motion.p>

            <motion.h1
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight leading-tight"
            >
              Trade with{" "}
              <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                intelligence
              </span>{" "}
              backed by AI
            </motion.h1>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-5 text-sm md:text-lg text-text/70 leading-relaxed"
            >
              Our platform combines real-time analysis, smart automation, and risk-aware tools to help traders move with
              greater confidence in fast-changing markets.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Button variant="primary" icon="mdi:flash">
                Open Account
              </Button>

              <Button variant="secondary" icon="mdi:chart-line" onClick={scrollToFeatures}>
                Explore Features
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================= TICKER ========================= */}
      <section className="overflow-hidden border-b border-border/60 relative">
        <div className="absolute left-[12%] top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-accent-1/8 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <ScrollVelocity
            scrollContainerRef={scrollContainerRef}
            texts={tickerTexts}
            velocity={90}
            numCopies={8}
            damping={45}
            stiffness={350}
            parallaxClassName="py-4"
            scrollerClassName="text-text"
            scrollerStyle={{
              opacity: 0.9,
              textShadow: "0 0 20px rgba(250,204,21,0.35)",
            }}
          />
        </div>
      </section>

      {/* ========================= MISSION / VISION / VALUE ========================= */}
      <section className="py-20 lg:py-24 border-b border-border/60 relative">
        <div className="absolute right-[8%] top-[20%] h-44 w-44 rounded-full bg-accent-2/7 blur-[110px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-accent-2/80">Mission, Vision & Value</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Built to transform how modern traders read, react, and execute
            </h2>
            <p className="mt-5 text-text/70 leading-7">
              We believe AI should do more than impress. It should make trading more structured, more efficient, and
              more dependable for people who take performance seriously.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerWrap}
            className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {missionVisionCards.map((card) => (
              <React.Fragment key={card.title}>{renderBentoCard(card)}</React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================= HOW IT WORKS ========================= */}
      <section className="py-20 lg:py-24 border-b border-border/60 relative">
        <div className="absolute left-[6%] bottom-[10%] h-48 w-48 rounded-full bg-accent-1/7 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-accent-2/80">How AI Trading Works</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              From live data to disciplined execution
            </h2>
            <p className="mt-5 text-text/70 leading-7">
              Every stage of the trading process is designed to turn complex market movement into smarter action. The
              result is a platform that helps traders stay informed, prepared, and consistent.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerWrap}
            className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {howItWorksCards.map((card) => (
              <React.Fragment key={card.title}>{renderBentoCard(card)}</React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================= AWARDS ========================= */}
      <section className="py-20 lg:py-24 border-b border-border/60 relative">
        <div className="absolute right-[10%] top-[18%] h-40 w-40 rounded-full bg-accent-1/7 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-accent-2/80">Awards & Recognition</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Recognition earned through innovation and trader-focused design
            </h2>
            <p className="mt-5 text-text/70 leading-7">
              Our progress reflects a commitment to building intelligent trading technology that is practical, reliable,
              and ready for real market demands.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerWrap}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
          >
            {awards.map((award) => (
              <motion.div
                key={award.year + award.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.20)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/35 hover:shadow-[0_20px_70px_rgba(234,179,8,0.10)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,0,0.08),transparent_32%)]" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-1 text-accent-1/85">
                    <Icon icon="hugeicons:laurel-wreath-left-01" className="text-3xl" />
                    <span className="text-2xl font-semibold">{award.year}</span>
                    <Icon icon="hugeicons:laurel-wreath-right-01" className="text-3xl" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold leading-6 text-center">{award.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-text/70 text-center">{award.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================= FEATURES ========================= */}
      <section id="features" className="py-20 lg:py-24 border-b border-border/60 relative">
        <div className="absolute left-[8%] top-[20%] h-40 w-40 rounded-full bg-accent-2/8 blur-[110px]" />
        <div className="absolute right-[12%] bottom-[12%] h-52 w-52 rounded-full bg-accent-1/7 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-accent-2/80">Powerful Features</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              A smarter trading stack built for speed, structure, and control
            </h2>
            <p className="mt-5 text-text/70 leading-7">
              Every feature is designed to help traders move faster, reduce noise, and stay disciplined when markets are
              moving quickly.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            variants={staggerWrap}
            className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(220px,1fr)]"
          >
            {/* Large flagship card */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-4xl border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-7 lg:p-8 lg:col-span-7 lg:row-span-2 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-1/35 hover:shadow-[0_24px_100px_rgba(234,179,8,0.12)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,0,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.08),transparent_32%)]" />
              <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-accent-1/10 blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/60 to-transparent" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/10 text-accent-1 text-3xl shadow-[0_0_30px_rgba(255,255,0,0.08)]">
                    <Icon icon="solar:bolt-bold" />
                  </div>

                  <div className="rounded-full border border-accent-1/15 bg-accent-1/8 px-3 py-1.5 text-xs font-medium tracking-[0.22em] text-accent-2/85">
                    CORE ENGINE
                  </div>
                </div>

                <div className="mt-8 max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-semibold leading-tight">AI-Powered Trade Signals</h3>
                  <p className="mt-4 text-sm md:text-base leading-8 text-text/72">
                    Get high-speed market intelligence backed by pattern detection, momentum analysis, and structured
                    signal logic designed to help traders identify opportunities with greater clarity and timing.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-background/45 p-4 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.18em] text-accent-2/80">Signal Quality</p>
                    <p className="mt-2 text-lg font-semibold">Real-time analysis</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-background/45 p-4 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.18em] text-accent-2/80">Timing</p>
                    <p className="mt-2 text-lg font-semibold">Faster market reaction</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-background/45 p-4 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.18em] text-accent-2/80">Decision Support</p>
                    <p className="mt-2 text-lg font-semibold">Less guesswork</p>
                  </div>
                </div>

                <div className="mt-auto pt-8 flex items-center gap-2 text-accent-1/85 text-sm font-medium">
                  <span>Built for active execution</span>
                  <Icon icon="solar:arrow-right-up-bold" className="text-base" />
                </div>
              </div>
            </motion.div>

            {/* Tall side card */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-4xl border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 lg:p-7 lg:col-span-5 lg:row-span-2 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-1/35 hover:shadow-[0_22px_90px_rgba(234,179,8,0.10)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,0,0.10),transparent_30%)]" />
              <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-accent-2/10 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/10 text-accent-1 text-2xl shadow-[0_0_30px_rgba(255,255,0,0.08)]">
                  <Icon icon="solar:danger-triangle-bold" />
                </div>

                <div className="mt-6 inline-flex w-fit items-center rounded-full border border-border/80 bg-background/50 px-3 py-1.5 text-xs text-text/65">
                  Risk Layer
                </div>

                <h3 className="mt-4 text-2xl font-semibold leading-tight">Integrated Risk Controls</h3>

                <p className="mt-4 text-sm md:text-base leading-8 text-text/72">
                  Execute with stronger discipline using tools for exposure control, position awareness, and trade
                  protection that help keep every move aligned with your risk framework.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-background/40 px-4 py-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-text/90">
                      <Icon icon="solar:shield-check-bold" className="text-accent-1" />
                      Position discipline
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-background/40 px-4 py-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-text/90">
                      <Icon icon="solar:graph-down-bold" className="text-accent-1" />
                      Exposure awareness
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-background/40 px-4 py-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-text/90">
                      <Icon icon="solar:alarm-bold" className="text-accent-1" />
                      Protective monitoring
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8 flex items-center gap-2 text-accent-1/85 text-sm font-medium">
                  <span>Designed for consistency</span>
                  <Icon icon="solar:arrow-right-up-bold" className="text-base" />
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 lg:col-span-4 shadow-[0_16px_55px_rgba(0,0,0,0.20)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/35"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-1/10 blur-3xl" />
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/10 text-accent-1 text-xl">
                  <Icon icon="solar:chart-2-bold" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">Performance Analytics</h3>
                <p className="mt-3 text-sm leading-7 text-text/70">
                  Review strategy outcomes, timing, and behaviour through clearer performance insight.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 lg:col-span-4 shadow-[0_16px_55px_rgba(0,0,0,0.20)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/35"
            >
              <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-accent-2/10 blur-3xl" />
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/10 text-accent-1 text-xl">
                  <Icon icon="solar:cursor-bold" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">Smart Automation</h3>
                <p className="mt-3 text-sm leading-7 text-text/70">
                  Reduce hesitation with automated support that keeps execution closer to your intended trading logic.
                </p>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 lg:col-span-4 shadow-[0_16px_55px_rgba(0,0,0,0.20)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/35"
            >
              <div className="absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-accent-1/10 blur-3xl" />
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/10 text-accent-1 text-xl">
                  <Icon icon="solar:bell-bold" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">Instant Market Alerts</h3>
                <p className="mt-3 text-sm leading-7 text-text/70">
                  Stay ready with alerting systems that highlight emerging setups and momentum shifts as they happen.
                </p>
              </div>
            </motion.div>

            {/* Wide bottom card */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[1.9rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 lg:p-7 lg:col-span-12 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/35"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(255,255,0,0.08),transparent_22%),radial-gradient(circle_at_right_center,rgba(234,179,8,0.08),transparent_22%)]" />

              <div className="relative z-10 grid lg:grid-cols-[auto_1fr_auto] gap-6 items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/10 text-accent-1 text-2xl shadow-[0_0_30px_rgba(255,255,0,0.08)]">
                  <Icon icon="solar:lock-keyhole-bold" />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">Secure Trading Environment</h3>
                  <p className="mt-3 text-sm md:text-base leading-7 text-text/70 max-w-3xl">
                    Trade on infrastructure built for reliability, access protection, and a more dependable experience
                    across live market activity.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="rounded-full border border-white/10 bg-background/40 px-4 py-2 text-sm text-text/75">
                    Protected sessions
                  </div>
                  <div className="rounded-full border border-white/10 bg-background/40 px-4 py-2 text-sm text-text/75">
                    Stable infrastructure
                  </div>
                  <div className="rounded-full border border-white/10 bg-background/40 px-4 py-2 text-sm text-text/75">
                    Reliable access
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================= LIQUIDITY PROVIDERS ========================= */}
      <section className="py-20 border-b border-border/60 relative overflow-hidden">
        <div className="absolute left-[15%] top-[15%] h-40 w-40 rounded-full bg-accent-1/7 blur-[100px]" />
        <div className="absolute right-[10%] bottom-[10%] h-48 w-48 rounded-full bg-accent-2/7 blur-[110px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-accent-2/80">Liquidity Providers</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Connected to leading institutions that support market access
            </h2>
            <p className="mt-5 text-text/70 leading-7">
              Our liquidity network is built to support execution quality, market depth, and a trading experience that
              feels strong even in fast conditions.
            </p>
          </motion.div>

          <div className="mt-12 relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent" />

            <motion.div variants={marqueeTrack} animate="animate" className="flex w-max gap-5">
              {repeatedProviders.map((provider, index) => (
                <div
                  key={`${provider.name}-${index}`}
                  className="group relative flex h-24 w-55 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-white/40 bg-white/20 px-5 shadow-[0_12px_35px_rgba(255,255,255,0.08)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/30 hover:border-white/50"
                >
                  {/* glass highlight */}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.45),rgba(255,255,255,0.15))]" />

                  {/* subtle reflection */}
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/80 to-transparent" />

                  <img
                    src={provider.src}
                    alt={provider.name}
                    className="relative z-10 max-h-10 w-auto object-contain opacity-95 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================= ABOUT AI INTELLIGENCE ========================= */}
      <section className="py-20 lg:py-24 border-b border-border/60 relative">
        <div className="absolute left-[7%] top-[20%] h-44 w-44 rounded-full bg-accent-1/7 blur-[110px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/10 to-accent-2/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl border border-border bg-card shadow-[0_18px_70px_rgba(0,0,0,0.22)]">
                <img
                  src={homeAbout}
                  alt="AI intelligence trading visual"
                  className="w-full h-105 sm:h-130 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/15 to-transparent" />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <p className="text-sm uppercase tracking-[0.24em] text-accent-2/80">About AI Intelligence</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                Intelligence that strengthens the trader instead of replacing them
              </h2>

              <p className="mt-5 text-text/70 leading-7">
                AI intelligence is most powerful when it turns complexity into clarity. Our platform uses advanced
                analysis to uncover patterns, support timing, and surface opportunities that may be easy to miss during
                manual decision-making.
              </p>

              <p className="mt-4 text-text/70 leading-7">
                The goal is not to remove human judgement. It is to give traders stronger tools, better visibility, and
                a more structured way to respond to live markets with confidence.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 shadow-[0_14px_50px_rgba(0,0,0,0.18)]">
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent-1/10 blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-accent-1 text-lg font-medium">
                      <Icon icon="solar:chart-bold" />
                      Better Market Clarity
                    </div>
                    <p className="mt-3 text-sm text-text/70 leading-7">
                      Understand movement, momentum, and opportunity through faster and more structured analysis.
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.6rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 shadow-[0_14px_50px_rgba(0,0,0,0.18)]">
                  <div className="absolute -left-8 -bottom-8 h-20 w-20 rounded-full bg-accent-2/10 blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-accent-1 text-lg font-medium">
                      <Icon icon="solar:shield-star-bold" />
                      Stronger Execution Discipline
                    </div>
                    <p className="mt-3 text-sm text-text/70 leading-7">
                      Stay aligned with strategy by reducing hesitation, noise, and emotional decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================= FAQ ========================= */}
      <section className="py-20 lg:py-24 border-b border-border/60 relative">
        <div className="absolute right-[8%] top-[16%] h-40 w-40 rounded-full bg-accent-1/7 blur-[100px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-accent-2/80">Frequently Asked Questions</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Everything traders need to know before getting started
            </h2>
            <p className="mt-5 text-text/70 leading-7">
              Here are the answers to the most common questions about how our AI trading platform works and what traders
              can expect from it.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            variants={staggerWrap}
            className="mt-12 space-y-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={faq.question}
                  variants={fadeUp}
                  className="relative overflow-hidden rounded-[1.6rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] shadow-[0_14px_50px_rgba(0,0,0,0.18)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,rgba(255,255,0,0.06),transparent_30%)]" />
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="relative z-10 w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5"
                  >
                    <span className="text-base sm:text-lg font-medium">{faq.question}</span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-accent-1 shrink-0 transition-transform duration-300">
                      <Icon
                        icon={isOpen ? "mdi:minus" : "mdi:plus"}
                        className={`text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="relative z-10 px-5 sm:px-6 pb-5 text-sm text-text/70 leading-7">{faq.answer}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================= CTA ========================= */}
      <section id="cta" className="py-20 lg:py-24 relative">
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

            <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accent-2/80">Ready to Trade Smarter?</p>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                  Join a platform built for intelligent, disciplined trading
                </h2>
                <p className="mt-5 text-text/70 leading-7 max-w-2xl">
                  Step into a more advanced trading experience with AI-driven signals, execution support, and tools
                  designed to help you act faster and trade with greater confidence.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="primary" icon="mdi:rocket-launch">
                    Get Started Now
                  </Button>
                  <Button variant="secondary" icon="mdi:message-text-outline">
                    Contact Us
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-background/60 shadow-[0_16px_60px_rgba(0,0,0,0.22)]">
                <img
                  src={homeCTA}
                  alt="Smart trading technology"
                  className="w-full h-65 sm:h-80 object-cover transition-transform duration-700 hover:scale-105"
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

export default Home;
