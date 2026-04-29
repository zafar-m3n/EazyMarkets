import React, { useRef } from "react";
import { Icon } from "@iconify/react";

import Button from "@/components/ui/Button";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import AnimatedContent from "@/components/ui/AnimatedContent";
import homeCTA from "@/assets/homeCTA.webp";
import ib from "@/assets/ib.webp";
import IBSection from "@/components/ib/IBSection";

const ibHeroImage = ib;
const ibCtaImage = homeCTA;

const partnerStats = [
  { label: "Model", value: "Revenue Share" },
  { label: "Tracking", value: "Real-Time" },
  { label: "Support", value: "Dedicated" },
];

const benefitCards = [
  {
    icon: "solar:wallet-money-bold",
    title: "Earn From Referred Clients",
    description:
      "Grow your income through a partnership model designed around client referrals, trading activity, and long-term network value.",
    className: "lg:col-span-2",
  },
  {
    icon: "solar:chart-2-bold",
    title: "Transparent Performance Tracking",
    description:
      "Monitor referrals, activity, and partner performance through clear reporting built to help you understand growth.",
  },
  {
    icon: "solar:users-group-rounded-bold",
    title: "Built for Network Builders",
    description:
      "Ideal for educators, communities, trading groups, content creators, and businesses with access to an active trader audience.",
  },
  {
    icon: "mdi:megaphone",
    title: "Marketing Support",
    description:
      "Use partner-ready messaging, campaign ideas, and promotional direction to help you communicate the EazyMarkets offer clearly.",
    className: "lg:col-span-2",
  },
];

const steps = [
  {
    number: "01",
    title: "Apply as a Partner",
    description: "Submit your interest and tell us about your audience, community, or business network.",
  },
  {
    number: "02",
    title: "Get Your Partner Setup",
    description: "Receive your referral setup, tracking access, and the guidance needed to begin introducing clients.",
  },
  {
    number: "03",
    title: "Refer Clients",
    description:
      "Share EazyMarkets with traders who are interested in smarter tools, automation, and structured market access.",
  },
  {
    number: "04",
    title: "Track and Grow",
    description: "Monitor activity, improve your campaigns, and build a long-term partner income stream.",
  },
];

const partnerTypes = [
  {
    icon: "solar:teacher-bold",
    title: "Trading Educators",
    description:
      "For mentors, coaches, and educators who guide traders and want to introduce them to a smarter trading ecosystem.",
  },
  {
    icon: "solar:global-bold",
    title: "Online Communities",
    description:
      "For Telegram, Discord, WhatsApp, and social communities built around trading, investing, or financial education.",
  },
  {
    icon: "solar:clapperboard-play-bold",
    title: "Content Creators",
    description:
      "For creators producing market content, tutorials, reviews, strategy discussions, or trading education.",
  },
  {
    icon: "solar:buildings-3-bold",
    title: "Financial Businesses",
    description:
      "For consultants, agencies, and businesses with access to clients interested in trading tools and market opportunities.",
  },
];

const IntroducingBroker = () => {
  const scrollContainerRef = useRef(null);

  const scrollToContent = () => {
    const el = document.getElementById("ib-content");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCta = () => {
    const el = document.getElementById("ib-cta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderBentoCard = ({ icon, title, description, className = "" }) => (
    <div
      className={`group relative overflow-hidden rounded-[1.9rem] border border-border/90 bg-white/58 p-6 md:p-7 shadow-[0_12px_38px_rgba(31,41,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-1/45 hover:shadow-[0_16px_46px_rgba(126,217,87,0.14)] ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.42))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_28%)] opacity-90" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/16 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/25 bg-white/72 text-accent-2 text-2xl shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
          <Icon icon={icon} />
        </div>

        <h3 className="mt-5 text-xl font-semibold leading-tight md:text-[1.35rem]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-text/72 md:text-[15px]">{description}</p>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent-2">
          <span>Partner benefit</span>
          <Icon icon="solar:arrow-right-up-bold" className="text-base" />
        </div>
      </div>
    </div>
  );

  return (
    <div ref={scrollContainerRef} className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fbf4_0%,#eef9e7_50%,#f8fbf4_100%)]" />
          <div className="absolute -left-20 top-12 h-96 w-[24rem] rounded-full bg-accent-1/28 blur-[110px]" />
          <div className="absolute right-[4%] top-[8%] h-104 w-104 rounded-full bg-accent-2/24 blur-[120px]" />
          <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(126,217,87,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(126,217,87,0.10)_1px,transparent_1px)] bg-size-[72px_72px]" />
          <div className="absolute inset-0 bg-white/18" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <AnimatedContent direction="vertical" distance={90} threshold={0.2} config={{ tension: 50, friction: 25 }}>
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-white/62 px-4 py-2 text-xs text-text/70 backdrop-blur-md shadow-[0_8px_24px_rgba(31,41,55,0.05)]">
                  <span>Home</span>
                  <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                  <span className="text-accent-2">Introducing Broker</span>
                </div>

                <p className="mt-6 text-sm uppercase tracking-[0.22em] text-text/65">EazyMarkets Partners</p>

                <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                  Grow your network as an{" "}
                  <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                    Introducing Broker
                  </span>
                </h1>

                <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                  Partner with EazyMarkets and introduce traders to a smarter trading ecosystem built around automation,
                  market insight, and structured execution support.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button variant="primary" icon="mdi:handshake-outline" onClick={scrollToCta}>
                    Become a Partner
                  </Button>

                  <Button variant="secondary" icon="mdi:information-outline" onClick={scrollToContent}>
                    How It Works
                  </Button>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {partnerStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border/90 bg-white/60 p-4 backdrop-blur-md shadow-[0_10px_24px_rgba(31,41,55,0.05)]"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-text/55">{item.label}</p>
                      <p className="mt-2 text-lg font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContent>

            <AnimatedContent
              direction="vertical"
              distance={90}
              delay={150}
              threshold={0.2}
              config={{ tension: 50, friction: 25 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/16 to-accent-2/12 blur-2xl" />
                <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/60 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-md">
                  <img
                    src={ibHeroImage}
                    alt="Introducing Broker partnership"
                    className="h-90 w-full object-cover md:h-115"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/74 via-background/18 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border/90 bg-white/55 p-4 backdrop-blur-md shadow-[0_10px_28px_rgba(31,41,55,0.05)]">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent-2">Partner With EazyMarkets</p>
                    <p className="mt-2 text-lg font-semibold text-text">
                      Introduce clients, track growth, and build long-term partner value
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      <div id="ib-content">
        {/* INTRO */}
        <section className="relative border-b border-border/70 py-18 md:py-20">
          <div className="absolute left-[10%] top-[28%] h-40 w-40 rounded-full bg-accent-1/8 blur-[110px]" />

          <AnimatedContent
            direction="horizontal"
            distance={100}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ introducing broker /</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    A partnership model built for people who can connect traders with better tools
                  </h2>
                </div>

                <div>
                  <p className="text-sm leading-8 text-text/70 md:text-base">
                    The EazyMarkets Introducing Broker program is designed for partners who want to grow a trading
                    network and earn from the clients they refer.
                  </p>

                  <p className="mt-4 text-sm leading-8 text-text/70 md:text-base">
                    Whether you run a trading community, educate beginners, create financial content, or manage a client
                    network, our IB structure gives you a cleaner way to introduce traders and track performance.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* BENEFITS */}
        <section className="relative border-b border-border/70 py-18 md:py-20">
          <div className="absolute right-[8%] top-[20%] h-44 w-44 rounded-full bg-accent-2/8 blur-[110px]" />

          <AnimatedContent
            direction="horizontal"
            reverse
            distance={100}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Partner Benefits</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Everything you need to build, manage, and grow your referral network
                </h2>
                <p className="mt-5 leading-7 text-text/72">
                  Our IB experience focuses on clear tracking, strong communication, and long-term partner support.
                </p>
              </div>

              <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-3">
                {benefitCards.map((card) => (
                  <React.Fragment key={card.title}>{renderBentoCard(card)}</React.Fragment>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* HOW IT WORKS */}
        <section className="relative border-b border-border/70 py-18 md:py-20">
          <AnimatedContent direction="vertical" distance={90} threshold={0.15} config={{ tension: 50, friction: 25 }}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">How It Works</p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                    Start simple. Refer smarter. Grow consistently.
                  </h2>
                  <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                    The process is kept straightforward so partners can focus on building relationships, educating their
                    audience, and growing their network.
                  </p>
                </div>

                <div className="grid gap-4">
                  {steps.map((step) => (
                    <div
                      key={step.number}
                      className="relative overflow-hidden rounded-[1.6rem] border border-border/90 bg-white/58 p-5 shadow-[0_10px_30px_rgba(31,41,55,0.06)] backdrop-blur-xl"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.14),transparent_30%)]" />
                      <div className="relative z-10 flex gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-1/25 bg-accent-1/12 text-sm font-semibold text-accent-2">
                          {step.number}
                        </span>

                        <div>
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-text/70">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>

        <IBSection />

        {/* WHO IT IS FOR */}
        <section className="relative border-b border-border/70 py-18 md:py-20">
          <AnimatedContent
            direction="horizontal"
            distance={100}
            threshold={0.15}
            config={{ tension: 50, friction: 25 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Who Can Join?</p>
                <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Designed for partners with influence, trust, and access to trader audiences
                </h2>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {partnerTypes.map((type) => (
                  <div
                    key={type.title}
                    className="rounded-[1.6rem] border border-border/90 bg-white/58 p-6 shadow-[0_10px_30px_rgba(31,41,55,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-1/25 bg-white/72 text-2xl text-accent-2">
                      <Icon icon={type.icon} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{type.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-text/70">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </section>
      </div>

      {/* CTA */}
      <section id="ib-cta" className="relative py-18 md:py-20">
        <div className="absolute left-[10%] top-[15%] h-48 w-48 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute bottom-[12%] right-[10%] h-56 w-56 rounded-full bg-accent-2/10 blur-[130px]" />

        <AnimatedContent direction="horizontal" distance={100} threshold={0.15} config={{ tension: 50, friction: 25 }}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/58 p-8 shadow-[0_16px_46px_rgba(31,41,55,0.08)] backdrop-blur-xl sm:p-10 lg:p-14">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.80),rgba(255,255,255,0.42))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,217,87,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(79,143,47,0.12),transparent_32%)]" />

              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">Become an EazyMarkets Partner</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Turn your trading network into a structured partner opportunity
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">
                    Apply to become an Introducing Broker and start building a partnership with transparent tracking,
                    clear communication, and support designed around your growth.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button
                      variant="primary"
                      icon="mdi:handshake-outline"
                      onClick={() => {
                        window.open("https://portal.eazymarkets.com/signup", "_blank");
                      }}
                    >
                      Apply Now
                    </Button>

                    <Button
                      variant="secondary"
                      icon="mdi:email-outline"
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
                    src={ibCtaImage}
                    alt="EazyMarkets partner CTA"
                    className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80"
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

export default IntroducingBroker;
