import React from "react";

import AnimatedContent from "@/components/ui/AnimatedContent";
import Button from "@/components/ui/Button";
import useWidth from "@/hooks/useWidth";

import xauusd from "@/assets/xauusd.webp";
import wti from "@/assets/wti.webp";
import tsla from "@/assets/tsla.webp";
import meta from "@/assets/meta.webp";
import btc from "@/assets/btc.webp";
import amzn from "@/assets/amzn.webp";

const Welcome = () => {
  const { width, breakpoints } = useWidth();
  const isLargeDevice = width >= Number(breakpoints.md);

  const stocks = [
    {
      id: 1,
      name: "XAUUSD",
      logo: xauusd,
      background: "bg-yellow-200/70",
      border: "border-yellow-300/70",
      text: "text-yellow-800",
      position: "top-[20%] left-0 md:left-[20%]",
      value: 250,
    },
    {
      id: 2,
      name: "WTI",
      logo: wti,
      background: "bg-neutral-200/70",
      border: "border-neutral-300/80",
      text: "text-neutral-800",
      position: "top-[70%] left-[5%] md:left-[25%]",
      value: 150,
    },
    {
      id: 3,
      name: "TSLA",
      logo: tsla,
      background: "bg-red-200/65",
      border: "border-red-300/70",
      text: "text-red-800",
      position: "top-[10%] left-[20%] md:left-[40%]",
      value: 400,
    },
    {
      id: 4,
      name: "META",
      logo: meta,
      background: "bg-blue-200/65",
      border: "border-blue-300/70",
      text: "text-blue-800",
      position: "top-[60%] left-[25%] md:left-[35%]",
      value: 350,
    },
    {
      id: 5,
      name: "BTC",
      logo: btc,
      background: "bg-orange-200/70",
      border: "border-orange-300/70",
      text: "text-orange-800",
      position: "top-[30%] left-[55%] md:left-[65%]",
      value: 250,
    },
    {
      id: 6,
      name: "AMZN",
      logo: amzn,
      background: "bg-neutral-200/70",
      border: "border-neutral-300/80",
      text: "text-neutral-800",
      position: "top-[65%] left-[68%] md:left-[58%]",
      value: 200,
    },
  ];

  const maxValue = Math.max(...stocks.map((stock) => stock.value));

  const handleGetStarted = () => {
    window.open("https://portal.eazymarkets.com/signup", "_blank");
  };

  return (
    <AnimatedContent
      distance={100}
      direction="horizontal"
      reverse={false}
      config={{ tension: 50, friction: 25 }}
      initialOpacity={0.0}
      animateOpacity
      scale={1.0}
      threshold={0.1}
    >
      <section className="container mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-8 sm:px-6 lg:flex-row lg:space-x-6 lg:px-8">
        <div className="space-y-6 text-center lg:w-1/2 lg:text-left">
          <h2 className="text-[2rem] font-bold text-secondary">
            Trading Dreams Powered by&nbsp;
            <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">EazyMarkets</span>
          </h2>

          <div className="relative overflow-hidden rounded-2xl py-4">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="text-center text-[4.5rem] font-bold uppercase leading-none tracking-tight text-accent-2/20 md:text-[5.5rem] lg:text-[6.5rem]">
                6+
              </div>
            </div>

            <div className="relative z-10 space-y-6">
              <p className="text-sm text-justify md:text-base">
                Venture into a realm of endless financial potential with EazyMarkets. Backed by over{" "}
                <span className="text-lg font-bold text-accent-1 md:text-xl">6+</span> years of experience in the
                trading space, our platform is crafted for both newcomers and seasoned traders who want access to global
                markets with greater confidence. From stocks to crypto, EazyMarkets combines modern tools, live
                analytics, and a streamlined trading experience designed to support every step of your journey.
              </p>

              <p className="text-sm text-justify md:text-base">
                Since the beginning, EazyMarkets has stood for more than access to the markets. We are here to empower
                traders with the technology, insight, and support they need to move with clarity in a fast-changing
                financial world.
              </p>
            </div>
          </div>

          {isLargeDevice && (
            <Button variant="secondary" icon="mdi:flash" onClick={handleGetStarted}>
              Get Started
            </Button>
          )}
        </div>

        <div className="relative mt-10 flex w-full justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
          <div className="relative flex h-100 w-full items-center justify-center">
            {stocks.map((stock, index) => {
              const size = `${(stock.value / maxValue) * 150 + 50}px`;

              return (
                <div
                  key={stock.id}
                  className={`absolute flex animate-float flex-col justify-between rounded-lg border p-4 shadow-lg backdrop-blur-md ${stock.background} ${stock.border} ${stock.position}`}
                  style={{
                    width: size,
                    height: size,
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  <img src={stock.logo} alt={stock.name} className="h-12 w-12 rounded-full object-contain" />

                  <p className={`font-bold uppercase ${stock.text}`}>{stock.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
};

export default Welcome;
