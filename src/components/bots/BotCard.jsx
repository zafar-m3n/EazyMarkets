import React from "react";
import { Icon } from "@iconify/react";

import AnimatedContent from "@/components/ui/AnimatedContent";
import BotInfoBlock from "@/components/bots/BotInfoBlock";

const BotCard = ({ bot, index }) => {
  const isEven = index % 2 === 0;

  return (
    <AnimatedContent
      direction="horizontal"
      reverse={isEven}
      distance={90}
      delay={index * 70}
      threshold={0.08}
      config={{ tension: 50, friction: 25 }}
    >
      <div className="group relative overflow-hidden rounded-[1.9rem] border border-border/90 bg-white/58 p-6 shadow-[0_12px_38px_rgba(31,41,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-1/45 hover:shadow-[0_16px_46px_rgba(126,217,87,0.14)] md:p-7">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.42))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_28%)] opacity-90" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/16 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent-2/14 blur-3xl" />

        <div className="relative z-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent-1/25 bg-white/72 text-2xl text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
                <Icon icon={bot.icon} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold leading-tight md:text-[1.35rem]">{bot.name}</h3>
                  <span className="rounded-full border border-accent-1/20 bg-accent-1/12 px-3 py-1 text-xs font-medium tracking-[0.18em] text-accent-2/90">
                    {bot.tag}
                  </span>
                </div>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-text/65">
                  Built for {bot.supportedMarkets.toLowerCase()} with a focus on {bot.profitOptimization.toLowerCase()}.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-accent-1/20 bg-white/72 px-4 py-3 shadow-[0_8px_24px_rgba(31,41,55,0.04)] lg:min-w-37.5 lg:text-right">
              {bot.oldPrice ? <p className="text-sm text-text/35 line-through">{bot.oldPrice}</p> : null}
              <p className="text-xl font-semibold text-accent-2 md:text-2xl">{bot.price}</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
            <div className="space-y-4">
              <BotInfoBlock label="Supported Markets" value={bot.supportedMarkets} />
              <BotInfoBlock label="Duration" value={bot.duration} />
            </div>

            <div className="xl:col-span-2">
              <BotInfoBlock label="Specifications" value={bot.specifications} list />
            </div>

            <div className="space-y-4">
              <BotInfoBlock label="Risk Management" value={bot.riskManagement} />
              <BotInfoBlock label="Profit Optimization" value={bot.profitOptimization} />
            </div>

            <div className="space-y-4">
              {bot.cashback ? <BotInfoBlock label="Cashback" value={bot.cashback} /> : null}
              <BotInfoBlock label="ROI" value={bot.roi} />
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default BotCard;
