// src/pages/Home.jsx
import React, { useRef } from "react";
import Prism from "@/components/ui/Prism";
import MagicBento from "@/components/ui/MagicBento";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import Button from "@/components/ui/Button";

const Home = () => {
  const scrollContainerRef = useRef(null);

  const cards = [
    {
      color: "var(--color-card)",
      title: "AI Signals",
      description: "Model-driven entries, exits, and confidence scoring.",
      label: "Signals",
    },
    {
      color: "var(--color-card)",
      title: "Risk Controls",
      description: "Position sizing, limits, and automatic safeguards.",
      label: "Risk",
    },
    {
      color: "var(--color-card)",
      title: "Smart Analytics",
      description: "Performance breakdowns by market, strategy, and time.",
      label: "Analytics",
    },
    {
      color: "var(--color-card)",
      title: "Bot Automation",
      description: "Deploy strategies that execute without emotion.",
      label: "Bots",
    },
    {
      color: "var(--color-card)",
      title: "Fast Execution",
      description: "Low-latency actions with real-time monitoring.",
      label: "Execution",
    },
    {
      color: "var(--color-card)",
      title: "Secure Platform",
      description: "Protect accounts with modern security controls.",
      label: "Security",
    },
  ];

  const tickerTexts = [
    "AI SIGNALS • RISK CONTROLS • BACKTESTED STRATEGIES • REAL-TIME ALERTS • LOW-LATENCY EXECUTION •",
    "NO EMOTION • DISCIPLINED TRADING • PORTFOLIO MONITORING • SMART AUTOMATION •",
  ];

  const scrollToFeatures = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={scrollContainerRef} className="min-h-screen bg-background text-text">
      {/* =========================
          HERO (full screen on desktop)
      ========================== */}
      <section className="relative overflow-hidden min-h-[72vh] lg:min-h-screen">
        {/* Prism background (only inside hero) */}
        <div className="absolute inset-0 pointer-events-none">
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
            colorStrength={0.55}
            detailStrength={0.1}
          />
          {/* fade at bottom so it ends cleanly */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-b from-transparent to-background" />
        </div>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 lg:pb-0 lg:min-h-screen">
          <div className="mx-auto max-w-3xl text-center lg:flex lg:flex-col lg:justify-center lg:min-h-[calc(100vh-7rem)]">
            <p className="text-sm md:text-base text-text/70">
              AI-powered trading built for speed, discipline, and risk control.
            </p>

            <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight">
              Trade smarter with{" "}
              <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                AI execution
              </span>
            </h1>

            <p className="mt-5 text-sm md:text-lg text-text/70 leading-relaxed">
              Signals, automation, and analytics designed to help you act with confidence — without emotion.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="primary" icon="mdi:flash" iconPosition="left">
                Open Account
              </Button>

              <Button variant="secondary" icon="mdi:chart-line" iconPosition="left" onClick={scrollToFeatures}>
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          TICKER
      ========================== */}
      <section className="overflow-hidden">
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
              textShadow: "0 0 18px rgba(163,230,53,0.22)",
            }}
          />
        </div>
      </section>

      {/* =========================
          BENTO GRID
      ========================== */}
      <section id="features" className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <MagicBento
              cards={cards}
              glowColor="163, 230, 53"
              enableSpotlight
              enableBorderGlow
              enableStars
              clickEffect
              enableMagnetism
              enableTilt={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
