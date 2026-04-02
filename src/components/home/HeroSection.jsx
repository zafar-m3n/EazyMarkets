import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";
import useWidth from "@/hooks/useWidth";

import hero1 from "@/assets/hero1.webp";
import hero2 from "@/assets/hero2.webp";
import hero3 from "@/assets/hero3.webp";
import hero1Mobile from "@/assets/hero1Mobile.webp";
import hero2Mobile from "@/assets/hero2Mobile.webp";
import hero3Mobile from "@/assets/hero3Mobile.webp";

const HeroSection = ({ scrollToFeatures }) => {
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

  return (
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
                              scrollToFeatures?.();
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
  );
};

export default HeroSection;
