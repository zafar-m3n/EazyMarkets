import React from "react";
import { Icon } from "@iconify/react";
import AnimatedContent from "@/components/ui/AnimatedContent";

const AwardsSection = ({ sectionAnimation }) => {
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

  return (
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
              Our progress reflects a commitment to building intelligent trading technology that is practical, reliable,
              and ready for real market demands.
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
  );
};

export default AwardsSection;
