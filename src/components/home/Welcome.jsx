import React from "react";
import { Icon } from "@iconify/react";

import AnimatedContent from "@/components/ui/AnimatedContent";
import Button from "@/components/ui/Button";

import xauusd from "@/assets/xauusd.webp";
import wti from "@/assets/wti.webp";
import tsla from "@/assets/tsla.webp";
import meta from "@/assets/meta.webp";
import btc from "@/assets/btc.webp";
import amzn from "@/assets/amzn.webp";

const Welcome = () => {
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
      <section className="container mx-auto flex flex-col items-center justify-between p-8 lg:flex-row lg:space-x-6 lg:p-16 animate-appear-left animation-range-entryCover animation-timeline-view">
        <div className="space-y-6 text-center lg:w-1/2 lg:text-left">
          <h2 className="text-[2rem] font-bold text-secondary">
            Trading Dreams Powered by&nbsp;
            <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">EazyMarkets</span>
          </h2>

          <p className="text-sm text-justify md:text-base">
            Venture into a realm of endless financial potential with EazyMarkets. Crafted for both newcomers and
            seasoned traders, our platform offers an unmatched trading journey. Dive into a variety of markets, from
            stocks to crypto, with cutting-edge tools and live analytics designed to guide you toward success.
          </p>

          <p className="text-sm text-justify md:text-base">
            At EazyMarkets, we don’t just connect traders; We empower them to conquer the globe.
          </p>

          <Button
            variant="secondary"
            icon="mdi:flash"
            onClick={() => {
              window.open("https://portal.eazymarkets.com/signup", "_blank");
            }}
          >
            Get Started
          </Button>
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
