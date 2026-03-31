import React, { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";
import Welcome from "@/components/Welcome";
import homeAbout from "@/assets/homeAbout.webp";
import homeCTA from "@/assets/homeCTA.webp";
import hero1 from "@/assets/hero1.webp";
import hero2 from "@/assets/hero2.webp";
import hero3 from "@/assets/hero3.webp";
import hero1Mobile from "@/assets/hero1Mobile.webp";
import hero2Mobile from "@/assets/hero2Mobile.webp";
import hero3Mobile from "@/assets/hero3Mobile.webp";
import AnniversaryOfferPopup from "@/components/AnniversaryOfferPopup";
import useWidth from "@/hooks/useWidth";
import rakbank from "@/assets/banks/rakbank.png";
import bankofamerica from "@/assets/banks/bankofamerica.png";
import hsbc from "@/assets/banks/hsbc.png";
import citibank from "@/assets/banks/citibank.png";
import wellsFargo from "@/assets/banks/wellsfargo.png";
import adcb from "@/assets/banks/adcb.png";
import goldmanSachs from "@/assets/banks/goldmansachs.png";
import fab from "@/assets/banks/fab.png";
import barclays from "@/assets/banks/barclays.png";
import jpmorgan from "@/assets/banks/jpmorgan.png";
import icbc from "@/assets/banks/icbc.png";
import creditsuisse from "@/assets/banks/creditsuisse.png";
import capitalone from "@/assets/banks/capitalone.png";
import adib from "@/assets/banks/adib.png";
import standardChartered from "@/assets/banks/standardchartered.png";
import nbo from "@/assets/banks/nbo.png";
import qnb from "@/assets/banks/qnb.png";
import sabb from "@/assets/banks/sabb.png";
import nbk from "@/assets/banks/nbk.png";
import ubs from "@/assets/banks/ubs.png";
import rbc from "@/assets/banks/rbc.png";
import deutsche from "@/assets/banks/deutsche.png";
import lloyds from "@/assets/banks/lloydsbankinggroup.png";
import anz from "@/assets/banks/anz.png";
import charlesschwab from "@/assets/banks/charlesschwab.png";
import rabo from "@/assets/banks/rabo.png";
import dbs from "@/assets/banks/dbs.png";
import westpac from "@/assets/banks/westpac.png";
import bayerische from "@/assets/banks/bayerische.png";

const Home = () => {
  const scrollContainerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;

  const heroSlides = [
    {
      image: isMobile ? hero1Mobile : hero1,
      eyebrow: "Human Insight",
      title: "Trade with confidence guided by experience",
      description:
        "Combine market expertise with powerful platform tools designed to help traders read momentum, manage timing, and act with greater precision.",
      primaryButton: "Open Account",
      secondaryButton: "Explore Features",
      mobileOverlay: "bg-black/35",
      desktopOverlay: "md:bg-black/40",
    },
    {
      image: isMobile ? hero2Mobile : hero2,
      eyebrow: "AI Intelligence",
      title: "Let AI uncover opportunities in real time",
      description:
        "Advanced trading intelligence scans fast-moving markets, detects patterns, and supports smarter decisions with speed, structure, and clarity.",
      primaryButton: "Get Started",
      secondaryButton: "See How It Works",
      mobileOverlay: "bg-black/45",
      desktopOverlay: "md:bg-black/50",
    },
    {
      image: isMobile ? hero3Mobile : hero3,
      eyebrow: "Global Markets",
      title: "Access modern trading built for active markets",
      description:
        "Trade in a professional environment with live data, intelligent execution support, and risk-aware tools built for serious market participation.",
      primaryButton: "Start Trading",
      secondaryButton: "Contact Us",
      mobileOverlay: "bg-black/45",
      desktopOverlay: "md:bg-black/50",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7500);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

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

  const featureCards = [
    {
      icon: "solar:bolt-bold",
      title: "AI-Powered Trade Signals",
      stat: "Core Engine",
      description:
        "Get high-speed market intelligence backed by pattern detection, momentum analysis, and structured signal logic designed to help traders identify opportunities with greater clarity and timing. Includes real-time analysis, faster market reaction, and decision support with less guesswork.",
      className: "lg:col-span-2",
    },
    {
      icon: "solar:danger-triangle-bold",
      title: "Integrated Risk Controls",
      stat: "Risk Layer",
      description:
        "Execute with stronger discipline using tools for exposure control, position awareness, and trade protection that help keep every move aligned with your risk framework. Built around position discipline, exposure awareness, and protective monitoring.",
      className: "lg:col-span-1",
    },
    {
      icon: "solar:chart-2-bold",
      title: "Performance Analytics",
      description:
        "Review strategy outcomes, timing, and behaviour through clearer performance insight so traders can understand what is working and where refinement is needed.",
      className: "lg:col-span-1",
    },
    {
      icon: "solar:cursor-bold",
      title: "Smart Automation",
      description:
        "Reduce hesitation with automated support that keeps execution closer to your intended trading logic and helps traders stay more consistent in fast markets.",
      className: "lg:col-span-1",
    },
    {
      icon: "solar:bell-bold",
      title: "Instant Market Alerts",
      description:
        "Stay ready with alerting systems that highlight emerging setups, changes in momentum, and key market shifts as they happen.",
      className: "lg:col-span-1",
    },
    {
      icon: "solar:lock-keyhole-bold",
      title: "Secure Trading Environment",
      stat: "Reliability Layer",
      description:
        "Trade on infrastructure built for reliability, access protection, and a more dependable experience across live market activity, including protected sessions, stable infrastructure, and reliable access.",
      className: "lg:col-span-2",
    },
    {
      icon: "solar:cpu-bolt-bold",
      title: "Adaptive Strategy Intelligence",
      stat: "AI Layer",
      description:
        "Continuously refine trading behaviour with adaptive models that respond to changing market conditions, helping traders stay aligned with evolving trends, volatility shifts, and momentum patterns without relying on static strategies.",
      className: "lg:col-span-1",
    },
  ];

  const providerLogos = [
    { name: "RAK Bank", src: rakbank },
    { name: "Bank of America", src: bankofamerica },
    { name: "HSBC", src: hsbc },
    { name: "Citibank", src: citibank },
    { name: "Wells Fargo", src: wellsFargo },
    { name: "Abu Dhabi Commercial Bank", src: adcb },
    { name: "Goldman Sachs", src: goldmanSachs },
    { name: "First Abu Dhabi Bank", src: fab },
    { name: "Barclays", src: barclays },
    { name: "JP Morgan Chase", src: jpmorgan },
    { name: "Industrial and Commercial Bank of China", src: icbc },
    { name: "Credit Suisse", src: creditsuisse },
    { name: "Capital One", src: capitalone },
    { name: "ADIB", src: adib },
    { name: "Standard Chartered", src: standardChartered },
    { name: "National Bank of Oman", src: nbo },
    { name: "Qatar National Bank", src: qnb },
    { name: "Saudi British Bank", src: sabb },
    { name: "National Bank of Kuwait", src: nbk },
    { name: "UBS", src: ubs },
    { name: "Royal Bank of Canada", src: rbc },
    { name: "Deutsche Bank", src: deutsche },
    { name: "Lloyds Banking Group", src: lloyds },
    { name: "ANZ Group", src: anz },
    { name: "Charles Schwab Corporation", src: charlesschwab },
    { name: "Rabo Bank", src: rabo },
    { name: "DBS", src: dbs },
    { name: "Westpac Australia's first bank", src: westpac },
    { name: "Bayerische Landesbank", src: bayerische },
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

  const repeatedProviders = [...providerLogos, ...providerLogos];

  const scrollToFeatures = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("cta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sectionAnimation = (index, delay = 0) => ({
    direction: "horizontal",
    reverse: index % 2 === 0,
    distance: 120,
    delay,
    threshold: 0.12,
    config: { tension: 52, friction: 24 },
  });

  const renderBentoCard = ({ icon, number, title, description, className = "", stat }) => (
    <div
      className={`group relative overflow-hidden rounded-[1.9rem] border border-border/90 bg-white/58 p-6 md:p-7 shadow-[0_12px_38px_rgba(31,41,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-1/45 hover:shadow-[0_16px_46px_rgba(126,217,87,0.14)] ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.38))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_28%)] opacity-90" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/18 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent-2/14 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/30 bg-white/70 text-accent-2 text-2xl shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
            <Icon icon={icon} />
          </div>

          {number ? (
            <span className="rounded-full border border-accent-1/25 bg-white/75 px-3 py-1 text-xs font-medium tracking-[0.22em] text-accent-2">
              {number}
            </span>
          ) : null}
        </div>

        {stat ? (
          <div className="mt-6 inline-flex w-fit items-center rounded-full border border-border/90 bg-white/75 px-3 py-1.5 text-xs text-text/65">
            {stat}
          </div>
        ) : null}

        <h3 className="mt-4 text-xl font-semibold leading-tight md:text-[1.35rem]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-text/72 md:text-[15px]">{description}</p>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent-2">
          <span>Learn more</span>
          <Icon icon="solar:arrow-right-up-bold" className="text-base" />
        </div>
      </div>
    </div>
  );

  return (
    <div ref={scrollContainerRef} className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <AnniversaryOfferPopup />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-32 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute -right-24 top-112 h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[18%] h-80 w-80 rounded-full bg-accent-1/8 blur-[150px]" />
      </div>

      {/* ========================= HERO ========================= */}
      <section className="relative min-h-[72vh] overflow-hidden border-b border-border/70 lg:min-h-screen">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover object-center md:object-top"
              />

              <div className={`absolute inset-0 ${slide.mobileOverlay} ${slide.desktopOverlay}`} />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.34)_42%,rgba(0,0,0,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.28)_42%,rgba(0,0,0,0.10)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_24%)]" />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-b from-transparent to-background" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 lg:min-h-screen lg:px-8 lg:pb-0">
          <div className="grid min-h-[calc(72vh-4rem)] items-center lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1fr_auto] lg:gap-8">
            <div className="max-w-3xl">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`transition-all duration-700 ${
                    activeSlide === index
                      ? "visible translate-y-0 opacity-100"
                      : "invisible absolute translate-y-4 opacity-0"
                  }`}
                >
                  {activeSlide === index && (
                    <>
                      <AnimatedContent
                        direction="vertical"
                        distance={70}
                        delay={0}
                        threshold={0.2}
                        config={{ tension: 52, friction: 24 }}
                      >
                        <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/80 md:text-base">
                          {slide.eyebrow}
                        </p>
                      </AnimatedContent>

                      <AnimatedContent
                        direction="vertical"
                        distance={70}
                        delay={120}
                        threshold={0.2}
                        config={{ tension: 52, friction: 24 }}
                      >
                        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                          {slide.title}
                        </h1>
                      </AnimatedContent>

                      <AnimatedContent
                        direction="vertical"
                        distance={70}
                        delay={220}
                        threshold={0.2}
                        config={{ tension: 52, friction: 24 }}
                      >
                        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85 md:text-lg">
                          {slide.description}
                        </p>
                      </AnimatedContent>

                      <AnimatedContent
                        direction="vertical"
                        distance={70}
                        delay={320}
                        threshold={0.2}
                        config={{ tension: 52, friction: 24 }}
                      >
                        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                          <Button
                            variant="primary"
                            icon="mdi:flash"
                            onClick={() => {
                              window.open("https://portal.eazymarkets.com/signup", "_blank");
                            }}
                          >
                            {slide.primaryButton}
                          </Button>

                          <Button
                            variant="secondary"
                            icon="mdi:chart-line"
                            onClick={() => {
                              if (index === 2) {
                                window.location.href = "/contact";
                              } else {
                                scrollToFeatures();
                              }
                            }}
                          >
                            {slide.secondaryButton}
                          </Button>
                        </div>
                      </AnimatedContent>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 lg:mt-0 lg:flex-col">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    activeSlide === index ? "w-10 bg-white" : "w-3 bg-white/45 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================= TICKER ========================= */}
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute left-[12%] top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-accent-1/10 blur-3xl" />
        <AnimatedContent {...sectionAnimation(0)}>
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
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
                opacity: 0.92,
                textShadow: "0 0 18px rgba(126,217,87,0.22)",
              }}
            />
          </div>
        </AnimatedContent>
      </section>

      <Welcome />

      {/* ========================= LIQUIDITY PROVIDERS ========================= */}
      <section className="relative overflow-hidden border-b border-border/70 py-20">
        <div className="absolute left-[15%] top-[15%] h-40 w-40 rounded-full bg-accent-1/8 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] h-48 w-48 rounded-full bg-accent-2/8 blur-[110px]" />

        <AnimatedContent {...sectionAnimation(1)}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Liquidity Providers</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Connected to leading institutions that support market access
              </h2>
              <p className="mt-5 leading-7 text-text/72">
                Our liquidity network is built to support execution quality, market depth, and a trading experience that
                feels strong even in fast conditions.
              </p>
            </div>

            <div className="relative mt-12 overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent" />

              <div className="animate-providers-marquee flex w-max gap-5 will-change-transform">
                {repeatedProviders.map((provider, index) => (
                  <div
                    key={`${provider.name}-${index}`}
                    className="group relative flex h-24 w-55 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-border/80 bg-white/58 px-5 shadow-[0_10px_30px_rgba(31,41,55,0.07)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/40 hover:bg-white/70 hover:shadow-[0_14px_36px_rgba(126,217,87,0.13)]"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.40))]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/60 to-transparent" />

                    <img
                      src={provider.src}
                      alt={provider.name}
                      className="relative z-10 max-h-10 w-auto object-contain opacity-95 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* ========================= MISSION / VISION / VALUE ========================= */}
      <section className="relative border-b border-border/70 py-20 lg:py-24">
        <div className="absolute right-[8%] top-[20%] h-44 w-44 rounded-full bg-accent-2/8 blur-[110px]" />
        <AnimatedContent {...sectionAnimation(2)}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Mission, Vision & Value</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Built to transform how modern traders read, react, and execute
              </h2>
              <p className="mt-5 leading-7 text-text/72">
                We believe AI should do more than impress. It should make trading more structured, more efficient, and
                more dependable for people who take performance seriously.
              </p>
            </div>

            <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-3">
              {missionVisionCards.map((card) => (
                <React.Fragment key={card.title}>{renderBentoCard(card)}</React.Fragment>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* ========================= HOW IT WORKS ========================= */}
      <section className="relative border-b border-border/70 py-20 lg:py-24">
        <div className="absolute bottom-[10%] left-[6%] h-48 w-48 rounded-full bg-accent-1/8 blur-[120px]" />
        <AnimatedContent {...sectionAnimation(3)}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">How AI Trading Works</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                From live data to disciplined execution
              </h2>
              <p className="mt-5 leading-7 text-text/72">
                Every stage of the trading process is designed to turn complex market movement into smarter action. The
                result is a platform that helps traders stay informed, prepared, and consistent.
              </p>
            </div>

            <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-3">
              {howItWorksCards.map((card) => (
                <React.Fragment key={card.title}>{renderBentoCard(card)}</React.Fragment>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* ========================= AWARDS ========================= */}
      <section className="relative border-b border-border/70 py-20 lg:py-24">
        <div className="absolute right-[10%] top-[18%] h-40 w-40 rounded-full bg-accent-1/8 blur-[100px]" />
        <AnimatedContent {...sectionAnimation(4)}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Awards & Recognition</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Recognition earned through innovation and trader-focused design
              </h2>
              <p className="mt-5 leading-7 text-text/72">
                Our progress reflects a commitment to building intelligent trading technology that is practical,
                reliable, and ready for real market demands.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {awards.map((award) => (
                <div
                  key={award.year + award.title}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-border/90 bg-white/58 p-6 shadow-[0_12px_36px_rgba(31,41,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/45 hover:shadow-[0_16px_44px_rgba(126,217,87,0.14)]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.38))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(126,217,87,0.16),transparent_34%)]" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-1 text-accent-2">
                      <Icon icon="hugeicons:laurel-wreath-left-01" className="text-3xl" />
                      <span className="text-2xl font-semibold">{award.year}</span>
                      <Icon icon="hugeicons:laurel-wreath-right-01" className="text-3xl" />
                    </div>

                    <h3 className="mt-5 text-center text-lg font-semibold leading-6">{award.title}</h3>
                    <p className="mt-3 text-center text-sm leading-7 text-text/72">{award.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* ========================= FEATURES ========================= */}
      <section id="features" className="relative border-b border-border/70 py-20 lg:py-24">
        <div className="absolute left-[8%] top-[20%] h-40 w-40 rounded-full bg-accent-2/10 blur-[110px]" />
        <div className="absolute bottom-[12%] right-[12%] h-52 w-52 rounded-full bg-accent-1/8 blur-[120px]" />

        <AnimatedContent {...sectionAnimation(5)}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Powerful Features</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                A smarter trading stack built for speed, structure, and control
              </h2>
              <p className="mt-5 leading-7 text-text/72">
                Every feature is designed to help traders move faster, reduce noise, and stay disciplined when markets
                are moving quickly.
              </p>
            </div>

            <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-3">
              {featureCards.map((card) => (
                <React.Fragment key={card.title}>{renderBentoCard(card)}</React.Fragment>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* ========================= ABOUT AI INTELLIGENCE ========================= */}
      <section className="relative border-b border-border/70 py-20 lg:py-24">
        <div className="absolute left-[7%] top-[20%] h-44 w-44 rounded-full bg-accent-1/8 blur-[110px]" />
        <AnimatedContent {...sectionAnimation(6)}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="relative">
                <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/14 to-accent-2/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-4xl border border-border bg-card shadow-[0_14px_42px_rgba(31,41,55,0.08)]">
                  <img
                    src={homeAbout}
                    alt="AI intelligence trading visual"
                    className="h-105 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-130"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/72 via-background/10 to-transparent" />
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">About AI Intelligence</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Intelligence that strengthens the trader instead of replacing them
                </h2>

                <p className="mt-5 leading-7 text-text/72">
                  AI intelligence is most powerful when it turns complexity into clarity. Our platform uses advanced
                  analysis to uncover patterns, support timing, and surface opportunities that may be easy to miss
                  during manual decision-making.
                </p>

                <p className="mt-4 leading-7 text-text/72">
                  The goal is not to remove human judgement. It is to give traders stronger tools, better visibility,
                  and a more structured way to respond to live markets with confidence.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="relative overflow-hidden rounded-[1.6rem] border border-border/90 bg-white/58 p-5 shadow-[0_10px_30px_rgba(31,41,55,0.07)] backdrop-blur-xl">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.40))]" />
                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent-1/14 blur-2xl" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-lg font-medium text-accent-2">
                        <Icon icon="solar:chart-bold" />
                        Better Market Clarity
                      </div>
                      <p className="mt-3 text-sm leading-7 text-text/72">
                        Understand movement, momentum, and opportunity through faster and more structured analysis.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[1.6rem] border border-border/90 bg-white/58 p-5 shadow-[0_10px_30px_rgba(31,41,55,0.07)] backdrop-blur-xl">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.40))]" />
                    <div className="absolute -left-8 -bottom-8 h-20 w-20 rounded-full bg-accent-2/14 blur-2xl" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-lg font-medium text-accent-2">
                        <Icon icon="solar:shield-star-bold" />
                        Stronger Execution Discipline
                      </div>
                      <p className="mt-3 text-sm leading-7 text-text/72">
                        Stay aligned with strategy by reducing hesitation, noise, and emotional decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* ========================= FAQ ========================= */}
      <section className="relative border-b border-border/70 py-20 lg:py-24">
        <div className="absolute right-[8%] top-[16%] h-40 w-40 rounded-full bg-accent-1/8 blur-[100px]" />
        <AnimatedContent {...sectionAnimation(7)}>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Frequently Asked Questions</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Everything traders need to know before getting started
              </h2>
              <p className="mt-5 leading-7 text-text/72">
                Here are the answers to the most common questions about how our AI trading platform works and what
                traders can expect from it.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="relative overflow-hidden rounded-[1.6rem] border border-border/90 bg-white/58 shadow-[0_10px_30px_rgba(31,41,55,0.07)] backdrop-blur-xl"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.44))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,rgba(126,217,87,0.12),transparent_30%)]" />

                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="relative z-10 flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-base font-medium sm:text-lg">{faq.question}</span>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-white/80 text-accent-2 shadow-[0_6px_18px_rgba(31,41,55,0.05)] transition-transform duration-300">
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
                        <div className="relative z-10 px-5 pb-5 text-sm leading-7 text-text/72 sm:px-6">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* ========================= CTA ========================= */}
      <section id="cta" className="relative py-20 lg:py-24">
        <div className="absolute left-[10%] top-[15%] h-48 w-48 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute bottom-[12%] right-[10%] h-56 w-56 rounded-full bg-accent-2/10 blur-[130px]" />

        <AnimatedContent {...sectionAnimation(8)}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/58 p-8 shadow-[0_16px_46px_rgba(31,41,55,0.08)] backdrop-blur-xl sm:p-10 lg:p-14">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.42))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,217,87,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(79,143,47,0.12),transparent_32%)]" />

              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Ready to Trade Smarter?</p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                    Join a platform built for intelligent, disciplined trading
                  </h2>
                  <p className="mt-5 max-w-2xl leading-7 text-text/72">
                    Step into a more advanced trading experience with AI-driven signals, execution support, and tools
                    designed to help you act faster and trade with greater confidence.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button
                      variant="primary"
                      icon="mdi:rocket-launch"
                      onClick={() => {
                        window.open("https://portal.eazymarkets.com/signup", "_blank");
                      }}
                    >
                      Get Started Now
                    </Button>
                    <Button
                      variant="secondary"
                      icon="mdi:message-text-outline"
                      onClick={() => {
                        window.location.href = "/contact";
                      }}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.75rem] border border-border/90 bg-white/72 shadow-[0_12px_36px_rgba(31,41,55,0.08)]">
                  <img
                    src={homeCTA}
                    alt="Smart trading technology"
                    className="h-65 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80"
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

export default Home;
