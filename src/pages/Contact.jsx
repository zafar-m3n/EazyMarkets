import React from "react";
import { Icon } from "@iconify/react";

import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";

const contactCards = [
  {
    icon: "mdi:map-marker-outline",
    title: "Address",
    value: "640 Morrison Street, Edinburgh, EH3 8BL, United Kingdom",
  },
  {
    icon: "mdi:phone-outline",
    title: "Phone",
    value: "+44 7700 900123",
  },
  {
    icon: "mdi:email-outline",
    title: "Email",
    value: "support@eazymarkets.com",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/8 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/8 blur-[140px]" />
        <div className="absolute bottom-[8%] left-[18%] h-80 w-80 rounded-full bg-accent-1/6 blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
          <div className="absolute right-[10%] top-[10%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
          <div className="absolute -bottom-10 left-[40%] h-48 w-48 rounded-full bg-accent-1/8 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02),transparent_20%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <div className="max-w-3xl">
            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={90}
              delay={0}
              threshold={0.2}
              config={{ tension: 50, friction: 25 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-1/10 bg-card/70 px-4 py-2 text-xs text-text/70 backdrop-blur-md">
                <span>Home</span>
                <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                <span className="text-accent-2">Contact Us</span>
              </div>
            </AnimatedContent>

            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={70}
              delay={100}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <p className="mt-6 text-sm uppercase tracking-[0.22em] text-text/65">Contact EazyMarkets</p>
            </AnimatedContent>

            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={70}
              delay={180}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Let’s start a{" "}
                <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                  conversation
                </span>
              </h1>
            </AnimatedContent>

            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={70}
              delay={260}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <p className="mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">
                Reach out with your questions, partnership inquiries, or support needs. We’re here to help you explore a
                smarter trading experience.
              </p>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-18 md:py-20">
        <div className="absolute left-[10%] top-[22%] h-40 w-40 rounded-full bg-accent-1/7 blur-[110px]" />
        <div className="absolute bottom-[10%] right-[12%] h-48 w-48 rounded-full bg-accent-2/7 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            {/* LEFT SIDE */}
            <AnimatedContent
              direction="horizontal"
              reverse={true}
              distance={100}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <div>
                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={60}
                  delay={0}
                  threshold={0.1}
                  config={{ tension: 50, friction: 25 }}
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ get in touch /</p>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                      We’d love to hear from you
                    </h2>
                    <p className="mt-5 max-w-xl text-sm leading-8 text-text/70 md:text-base">
                      Whether you need help getting started or want to learn more about EazyMarkets, send us a message
                      and our team will get back to you.
                    </p>
                  </div>
                </AnimatedContent>

                <div className="mt-8 grid gap-4">
                  {contactCards.map((card, index) => (
                    <AnimatedContent
                      key={card.title}
                      direction="vertical"
                      reverse={false}
                      distance={60}
                      delay={index * 80}
                      threshold={0.1}
                      config={{ tension: 50, friction: 25 }}
                    >
                      <div className="rounded-3xl border border-accent-1/10 bg-card/70 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.20)] backdrop-blur-md">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/10 text-xl text-accent-1">
                            <Icon icon={card.icon} />
                          </div>

                          <div>
                            <p className="text-sm uppercase tracking-[0.16em] text-text/55">{card.title}</p>
                            <p className="mt-2 text-sm leading-7 text-text/85 md:text-base">{card.value}</p>
                          </div>
                        </div>
                      </div>
                    </AnimatedContent>
                  ))}
                </div>
              </div>
            </AnimatedContent>

            {/* FORM */}
            <AnimatedContent
              direction="horizontal"
              reverse={false}
              distance={100}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/10 to-accent-2/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-4xl border border-accent-1/10 bg-card/80 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,0,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.08),transparent_24%)]" />

                  <div className="relative z-10">
                    <AnimatedContent
                      direction="vertical"
                      reverse={false}
                      distance={60}
                      delay={0}
                      threshold={0.1}
                      config={{ tension: 50, friction: 25 }}
                    >
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-accent-2">Contact Form</p>
                        <h3 className="mt-3 text-2xl font-semibold md:text-3xl">Send us a message</h3>
                        <p className="mt-3 text-sm leading-8 text-text/70 md:text-base">
                          Fill out the form below and we’ll respond as soon as possible.
                        </p>
                      </div>
                    </AnimatedContent>

                    <AnimatedContent
                      direction="vertical"
                      reverse={false}
                      distance={60}
                      delay={120}
                      threshold={0.1}
                      config={{ tension: 50, friction: 25 }}
                    >
                      <form className="mt-8 space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="mb-2 block text-sm text-text/75">Full Name</label>
                            <input
                              type="text"
                              placeholder="Your full name"
                              className="w-full rounded-2xl border border-accent-1/10 bg-background/70 px-4 py-3 text-sm text-text outline-none transition-all duration-300 placeholder:text-text/35 focus:border-accent-1/30 focus:shadow-[0_0_0_3px_rgba(255,255,0,0.06)]"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-sm text-text/75">Email</label>
                            <input
                              type="email"
                              placeholder="you@example.com"
                              className="w-full rounded-2xl border border-accent-1/10 bg-background/70 px-4 py-3 text-sm text-text outline-none transition-all duration-300 placeholder:text-text/35 focus:border-accent-1/30 focus:shadow-[0_0_0_3px_rgba(255,255,0,0.06)]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="mb-2 block text-sm text-text/75">Subject</label>
                          <input
                            type="text"
                            placeholder="How can we help?"
                            className="w-full rounded-2xl border border-accent-1/10 bg-background/70 px-4 py-3 text-sm text-text outline-none transition-all duration-300 placeholder:text-text/35 focus:border-accent-1/30 focus:shadow-[0_0_0_3px_rgba(255,255,0,0.06)]"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm text-text/75">Message</label>
                          <textarea
                            rows="6"
                            placeholder="Write your message here..."
                            className="w-full resize-none rounded-2xl border border-accent-1/10 bg-background/70 px-4 py-3 text-sm text-text outline-none transition-all duration-300 placeholder:text-text/35 focus:border-accent-1/30 focus:shadow-[0_0_0_3px_rgba(255,255,0,0.06)]"
                          />
                        </div>

                        <div className="pt-2">
                          <Button variant="primary" icon="mdi:send-outline">
                            Send Message
                          </Button>
                        </div>
                      </form>
                    </AnimatedContent>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
