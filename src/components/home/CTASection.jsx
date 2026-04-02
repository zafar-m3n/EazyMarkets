import React from "react";
import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";
import homeCTA from "@/assets/homeCTA.webp";

const CTASection = ({ sectionAnimation }) => {
  return (
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
  );
};

export default CTASection;
