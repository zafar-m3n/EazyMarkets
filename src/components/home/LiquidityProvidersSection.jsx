import React from "react";
import AnimatedContent from "@/components/ui/AnimatedContent";
import Button from "@/components/ui/Button";
import useWidth from "@/hooks/useWidth";

import rakbank from "@/assets/banks/rakbank.webp";
import bankofamerica from "@/assets/banks/bankofamerica.webp";
import hsbc from "@/assets/banks/hsbc.webp";
import citibank from "@/assets/banks/citibank.webp";
import wellsFargo from "@/assets/banks/wellsfargo.webp";
import adcb from "@/assets/banks/adcb.webp";
import goldmanSachs from "@/assets/banks/goldmansachs.webp";
import fab from "@/assets/banks/fab.webp";
import barclays from "@/assets/banks/barclays.webp";
import jpmorgan from "@/assets/banks/jpmorgan.webp";
import icbc from "@/assets/banks/icbc.webp";
import creditsuisse from "@/assets/banks/creditsuisse.webp";
import capitalone from "@/assets/banks/capitalone.webp";
import adib from "@/assets/banks/adib.webp";
import standardChartered from "@/assets/banks/standardchartered.webp";
import nbo from "@/assets/banks/nbo.webp";
import qnb from "@/assets/banks/qnb.webp";
import sabb from "@/assets/banks/sabb.webp";
import nbk from "@/assets/banks/nbk.webp";
import ubs from "@/assets/banks/ubs.webp";
import rbc from "@/assets/banks/rbc.webp";
import deutsche from "@/assets/banks/deutsche.webp";
import lloyds from "@/assets/banks/lloydsbankinggroup.webp";
import anz from "@/assets/banks/anz.webp";
import charlesschwab from "@/assets/banks/charlesschwab.webp";
import rabo from "@/assets/banks/rabo.webp";
import dbs from "@/assets/banks/dbs.webp";
import westpac from "@/assets/banks/westpac.webp";
import bayerische from "@/assets/banks/bayerische.webp";

const LiquidityProvidersSection = ({ sectionAnimation }) => {
  const { width, breakpoints } = useWidth();
  const isMobileDevice = width < Number(breakpoints.lg);

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

  const repeatedProviders = [...providerLogos, ...providerLogos];

  const handleGetStarted = () => {
    window.open("https://portal.eazymarkets.com/signup", "_blank");
  };

  return (
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

          {isMobileDevice && (
            <div className="mt-10 flex justify-center">
              <Button variant="secondary" icon="mdi:flash" onClick={handleGetStarted}>
                Get Started
              </Button>
            </div>
          )}
        </div>
      </AnimatedContent>
    </section>
  );
};

export default LiquidityProvidersSection;
