import React, { useState } from "react";
import { Icon } from "@iconify/react";

import AnimatedContent from "@/components/ui/AnimatedContent";

import technicalAnalysis from "@/assets/technicalAnalysis.webp";
import doubleTop from "@/assets/doubleTop.png";
import doubleBottom from "@/assets/doubleBottom.png";
import headShoulders1 from "@/assets/headShoulders1.png";
import headShoulders2 from "@/assets/headShoulders2.png";
import risingWedges1 from "@/assets/risingWedges1.png";
import risingWedges2 from "@/assets/risingWedges2.png";
import bullish from "@/assets/bullish.png";
import bullishPenant1 from "@/assets/bullishPenant1.png";
import bullishPenant2 from "@/assets/bullishPenant2.png";
import sma from "@/assets/sma.png";
import ema from "@/assets/ema.png";
import bollingerBands from "@/assets/bollingerBands.png";
import macd from "@/assets/macd.png";
import parabolicSar from "@/assets/parabolicSar.png";
import stochasticOscillator from "@/assets/stochasticOscillator.png";
import rsi from "@/assets/rsi.png";
import supportAndResistance1 from "@/assets/supportAndResistance1.png";
import supportAndResistance2 from "@/assets/supportAndResistance2.png";
import trendLines from "@/assets/trendLines.png";

const imageClass =
  "mx-auto mt-3 w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]";
const headingClass = "text-md font-semibold tracking-tight text-text";
const subHeadingClass = "text-md font-semibold text-accent-2";
const textClass = "text-sm leading-6 text-text/72";

const accordionItems = [
  {
    title: "Chart Patterns",
    content: (
      <div className="space-y-5">
        <p className="mx-auto max-w-3xl text-center text-sm leading-6 text-text/72">
          There are multiple chart patterns traders use to identify possible trend direction, reversals, and breakout
          opportunities in the market.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="text-center">
            <h4 className={subHeadingClass}>Double Top</h4>
            <img className={imageClass} alt="Double Top" src={doubleTop} />
            <p className={`mt-3 ${textClass}`}>
              A double top is a reversal pattern that forms after an extended move upward. It often suggests that buying
              momentum is weakening and a downside move may follow.
            </p>
          </div>

          <div className="text-center">
            <h4 className={subHeadingClass}>Double Bottom</h4>
            <img className={imageClass} alt="Double Bottom" src={doubleBottom} />
            <p className={`mt-3 ${textClass}`}>
              A double bottom is a reversal formation that appears after a decline. It often signals that sellers are
              losing control and the market may begin moving upward.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Head and Shoulders",
    content: (
      <div className="space-y-5">
        <p className="mx-auto max-w-3xl text-center text-sm leading-6 text-text/72">
          Head and shoulders formations are widely used reversal patterns that help traders spot a possible shift in
          trend.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="text-center">
            <p className={`${textClass} mb-3`}>
              The head and shoulders pattern is most often seen in an uptrend. It forms with a left shoulder, a higher
              peak called the head, and then a right shoulder.
            </p>
            <img
              className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              alt="Head and Shoulders"
              src={headShoulders1}
            />
          </div>

          <div className="text-center">
            <p className={`${textClass} mb-3`}>
              The inverse head and shoulders is the opposite version and appears after a decline. It often suggests that
              downward pressure is fading and the market may turn upward.
            </p>
            <img
              className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              alt="Inverse Head and Shoulders"
              src={headShoulders2}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Rising and Falling Wedges",
    content: (
      <div className="space-y-5">
        <div className="mx-auto max-w-4xl space-y-2 text-center">
          <h4 className={headingClass}>Wedge patterns show tightening price movement</h4>
          <p className={textClass}>
            A wedge forms when two trend lines converge. This usually shows that price swings are narrowing and the
            current trend may be slowing down or preparing for a breakout.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="text-center">
            <p className={`${textClass} mb-3`}>
              A falling wedge can act as a bullish signal. It often appears when sellers are losing strength and price
              is preparing to move upward.
            </p>
            <img
              className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              alt="Falling Wedge"
              src={risingWedges1}
            />
          </div>

          <div className="text-center">
            <p className={`${textClass} mb-3`}>
              A rising wedge is commonly viewed as a bearish pattern. It can suggest that upward momentum is fading and
              a downward move may follow.
            </p>
            <img
              className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              alt="Rising Wedge"
              src={risingWedges2}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Bullish and Bearish Rectangles",
    content: (
      <div className="grid items-center gap-5 md:grid-cols-2">
        <div className="space-y-3">
          <h4 className={headingClass}>Rectangle patterns reflect consolidation</h4>
          <p className={textClass}>
            A rectangle forms when price moves between parallel support and resistance levels. This usually shows a
            period of hesitation where buyers and sellers are temporarily balanced.
          </p>
          <p className={textClass}>
            Price may test the top and bottom boundaries several times before eventually breaking out. The breakout
            direction often provides the next trading clue.
          </p>
          <p className={textClass}>
            When this happens after a decline, it may be described as a bearish rectangle. When it appears during an
            upward trend, it can behave as a bullish continuation area.
          </p>
        </div>

        <div className="text-center">
          <img
            className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            alt="Bullish and Bearish Rectangles"
            src={bullish}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Bearish and Bullish Pennants",
    content: (
      <div className="space-y-5">
        <div className="mx-auto max-w-4xl text-center">
          <h4 className={headingClass}>Pennants appear after strong price movement</h4>
          <p className={`mt-2 ${textClass}`}>
            Pennants usually form after a sharp move, followed by a short period of consolidation. They often suggest
            that the earlier trend may continue once the market breaks out.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="text-center">
            <p className={`${textClass} mb-3`}>
              A bearish pennant forms after a strong drop. The pause that follows can lead to another move downward if
              sellers remain in control.
            </p>
            <img
              className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              alt="Bearish Pennant"
              src={bullishPenant1}
            />
          </div>

          <div className="text-center">
            <p className={`${textClass} mb-3`}>
              A bullish pennant forms after a strong upward move. It can signal that buyers are regrouping before the
              price continues higher.
            </p>
            <img
              className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              alt="Bullish Pennant"
              src={bullishPenant2}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Moving Averages",
    content: (
      <div className="space-y-6">
        <div className="grid items-center gap-5 md:grid-cols-2">
          <div className="space-y-3">
            <h4 className={headingClass}>SMA (Simple Moving Average)</h4>
            <p className={textClass}>
              The simple moving average is one of the most basic indicators in technical analysis. It is calculated by
              taking the closing prices over a chosen period and dividing the total by that number of periods.
            </p>
            <p className={textClass}>
              Traders use the SMA to smooth out price action and better understand the broader direction of the market.
            </p>
          </div>

          <div className="text-center">
            <img
              className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              src={sma}
              alt="SMA"
            />
          </div>
        </div>

        <div className="grid items-center gap-5 md:grid-cols-2">
          <div className="text-center md:order-2">
            <img
              className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              src={ema}
              alt="EMA"
            />
          </div>

          <div className="space-y-3 md:order-1">
            <h4 className={headingClass}>EMA (Exponential Moving Average)</h4>
            <p className={textClass}>
              The EMA gives more weight to recent price data, which makes it more responsive than the SMA. Because of
              that, many traders use it when they want quicker signals in changing market conditions.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Popular Indicators",
    content: (
      <div className="space-y-5">
        <div className="text-center">
          <h4 className={headingClass}>Bollinger Bands</h4>
          <p className={`mx-auto mt-2 max-w-3xl ${textClass}`}>
            Bollinger Bands are commonly displayed as three lines: an upper band, a middle moving average, and a lower
            band. They help traders understand volatility and possible breakout conditions.
          </p>
        </div>

        <div className="grid items-center gap-5 md:grid-cols-2">
          <div className="space-y-3">
            <p className={textClass}>
              The middle line is usually a simple moving average. The upper and lower bands expand and contract
              depending on volatility, which helps traders judge whether the market is quiet or active.
            </p>
            <p className={textClass}>
              A Bollinger squeeze happens when the bands narrow. Traders often watch for a stronger move after that
              compression ends.
            </p>
          </div>

          <div className="text-center">
            <img
              className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              alt="Bollinger Bands"
              src={bollingerBands}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "MACD",
    content: (
      <div className="grid items-center gap-5 md:grid-cols-2">
        <div className="text-center">
          <img
            className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            alt="MACD"
            src={macd}
          />
        </div>

        <div className="space-y-3">
          <h4 className={headingClass}>Moving Average Convergence Divergence</h4>
          <p className={textClass}>
            MACD helps traders identify momentum and possible trend changes by comparing moving averages. It is often
            used to spot shifts between bullish and bearish conditions.
          </p>
          <p className={textClass}>
            Many traders watch MACD crossovers and histogram changes to better understand market strength and direction.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Parabolic SAR",
    content: (
      <div className="grid items-center gap-5 md:grid-cols-2">
        <div className="space-y-3">
          <h4 className={headingClass}>Stop and Reversal</h4>
          <p className={textClass}>
            Parabolic SAR is designed to help identify the point where a trend may be ending. It appears as dots placed
            above or below price candles.
          </p>
          <p className={textClass}>
            When the dots are below the candles, it usually suggests upward momentum. When the dots move above the
            candles, it may indicate bearish pressure.
          </p>
        </div>

        <div className="text-center">
          <img
            className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            alt="Parabolic SAR"
            src={parabolicSar}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Stochastic Oscillator",
    content: (
      <div className="space-y-5">
        <div className="mx-auto max-w-4xl text-center">
          <h4 className={headingClass}>A momentum indicator for overbought and oversold zones</h4>
          <p className={`mt-2 ${textClass}`}>
            The stochastic oscillator compares closing price position within a recent trading range. It is often used to
            identify potential reversals and momentum exhaustion.
          </p>
        </div>

        <div className="grid items-center gap-5 md:grid-cols-2">
          <div className="text-center">
            <img
              className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              alt="Stochastic Oscillator"
              src={stochasticOscillator}
            />
          </div>

          <div className="space-y-3">
            <p className={textClass}>
              Readings above 80 are often considered overbought, while readings below 20 are often considered oversold.
            </p>
            <p className={textClass}>
              Traders use these zones to judge whether price may be stretched and ready for a pause or reversal.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "RSI (Relative Strength Index)",
    content: (
      <div className="grid items-center gap-5 md:grid-cols-2">
        <div className="space-y-3">
          <h4 className={headingClass}>Relative Strength Index</h4>
          <p className={textClass}>
            RSI is a popular momentum indicator that helps traders detect overbought and oversold conditions using a
            scale from 0 to 100.
          </p>
          <p className={textClass}>
            Readings near 30 or lower can suggest oversold conditions, while readings near 70 or higher may suggest the
            market is overbought.
          </p>
        </div>

        <div className="text-center">
          <img
            className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            alt="RSI"
            src={rsi}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Support and Resistance",
    content: (
      <div className="space-y-5">
        <div className="mx-auto max-w-4xl text-center">
          <h4 className={headingClass}>Core levels traders watch closely</h4>
          <p className={`mt-2 ${textClass}`}>
            Support and resistance are among the most common ideas in technical analysis. These are price areas where
            the market has previously reacted strongly.
          </p>
        </div>

        <div className="text-center">
          <img
            className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            alt="Support and Resistance Chart 1"
            src={supportAndResistance1}
          />
        </div>

        <p className={`mx-auto max-w-4xl text-center ${textClass}`}>
          When price breaks through resistance, that same area can later act as support. The more often a level is
          tested without breaking, the more significant traders usually consider it.
        </p>

        <div className="text-center">
          <img
            className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            alt="Support and Resistance Chart 2"
            src={supportAndResistance2}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Trend Lines",
    content: (
      <div className="grid items-center gap-5 md:grid-cols-2">
        <div className="text-center">
          <img
            className="mx-auto w-full max-w-68 rounded-2xl border border-border/70 bg-white/85 p-2 object-contain shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            alt="Trend Lines"
            src={trendLines}
          />
        </div>

        <div className="space-y-3">
          <h4 className={headingClass}>Simple but powerful market structure guides</h4>
          <p className={textClass}>
            Trend lines are one of the most used tools in technical analysis. They help traders visualize the overall
            direction of price movement.
          </p>
          <p className={textClass}>
            In an uptrend, a line is drawn along rising support areas. In a downtrend, a line is drawn across falling
            resistance areas. When drawn properly, trend lines can help reveal structure, momentum, and possible
            reversal zones.
          </p>
        </div>
      </div>
    ),
  },
];

const TechnicalAnalysis = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const scrollToContent = () => {
    const el = document.getElementById("technical-analysis-body");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
        <div className="absolute bottom-[8%] left-[18%] h-80 w-80 rounded-full bg-accent-1/8 blur-[150px]" />
      </div>

      <section className="relative overflow-hidden border-b border-border/70">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fbf4_0%,#eef9e7_50%,#f8fbf4_100%)]" />
          <div className="absolute -left-20 top-12 h-96 w-[24rem] rounded-full bg-accent-1/28 blur-[110px]" />
          <div className="absolute right-[4%] top-[8%] h-104 w-104 rounded-full bg-accent-2/24 blur-[120px]" />
          <div className="absolute -bottom-10 left-[40%] h-72 w-[18rem] rounded-full bg-accent-1/22 blur-[100px]" />
          <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(126,217,87,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(126,217,87,0.10)_1px,transparent_1px)] bg-size-[72px_72px]" />
          <div className="absolute inset-0 bg-white/18" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pb-16 lg:pt-28">
          <div className="grid items-center gap-7 lg:grid-cols-2">
            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={90}
              delay={0}
              threshold={0.2}
              config={{ tension: 50, friction: 25 }}
            >
              <div className="max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-white/62 px-4 py-2 text-xs text-text/70 backdrop-blur-md shadow-[0_8px_24px_rgba(31,41,55,0.05)]">
                  <span>Home</span>
                  <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                  <span>Education</span>
                  <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                  <span className="text-accent-2">Technical Analysis</span>
                </div>

                <p className="mt-5 text-sm uppercase tracking-[0.22em] text-text/65">Education / Chart Analysis</p>

                <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                  What is{" "}
                  <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                    Technical Analysis?
                  </span>
                </h1>

                <div className="mt-5 space-y-4">
                  <div className="rounded-4xl bg-[#d9d9d9] px-5 py-5 md:px-6 md:py-6">
                    <p className="text-sm leading-7 text-[#111111] italic">
                      The framework through which traders evaluate price movement is known as technical analysis. A
                      person may identify present trading circumstances and prospective price movement by looking at
                      prior price movements. The fact that all current market information is theoretically represented
                      in the price is the most compelling argument for utilizing technical analysis.
                    </p>
                  </div>

                  <p className={textClass}>
                    Technical analysis examines the price action&apos;s rhythm, flow, and trends. Have you ever heard
                    the saying, &quot;History tends to repeat itself?&quot; If a given price has previously served as a
                    key support or resistance level, traders will keep an eye on it and often use it to guide their
                    decisions.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={scrollToContent}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-1 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(126,217,87,0.28)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon icon="mdi:chart-line" className="text-lg" />
                    Explore Technical Analysis
                  </button>
                </div>
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
              <img
                src={technicalAnalysis}
                alt="Technical Analysis"
                className="mx-auto w-full max-w-104 rounded-[1.8rem] border border-border/90 bg-white/60 object-contain shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md md:max-w-120"
              />
            </AnimatedContent>
          </div>
        </div>
      </section>

      <section id="technical-analysis-body" className="relative py-14 md:py-16">
        <div className="absolute left-[10%] top-[22%] h-40 w-40 rounded-full bg-accent-1/8 blur-[110px]" />
        <div className="absolute bottom-[10%] right-[12%] h-48 w-48 rounded-full bg-accent-2/8 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent
            direction="vertical"
            reverse={false}
            distance={60}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mb-7 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.22em] text-accent-2">Technical Analysis Topics</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-4xl">
                Explore patterns, indicators, and trading tools
              </h2>
              <p className="mt-3 text-sm leading-7 text-text/70">
                Open each section below to learn about chart formations, indicators, and technical concepts commonly
                used by traders.
              </p>
            </div>
          </AnimatedContent>

          <div className="mx-auto max-w-4xl space-y-3">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <AnimatedContent
                  key={item.title}
                  direction="vertical"
                  reverse={false}
                  distance={50}
                  delay={index * 40}
                  threshold={0.1}
                  config={{ tension: 50, friction: 25 }}
                >
                  <div className="overflow-hidden rounded-3xl border border-border/90 bg-white/60 shadow-[0_10px_28px_rgba(31,41,55,0.07)] backdrop-blur-xl">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-all duration-300 hover:bg-white/50 md:px-5 md:py-4"
                    >
                      <h3 className="text-md font-semibold leading-snug text-text">{item.title}</h3>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent-1/20 bg-white/75 text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_18px_rgba(126,217,87,0.14)]">
                        <Icon icon={isOpen ? "mdi:minus" : "mdi:plus"} className="text-lg" />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-border/70 px-4 py-4 md:px-5 md:py-5">{item.content}</div>
                      </div>
                    </div>
                  </div>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalAnalysis;
