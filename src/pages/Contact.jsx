import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

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
    <div className="min-h-screen bg-background text-text font-figtree overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/8 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/8 blur-[140px]" />
        <div className="absolute left-[18%] bottom-[8%] h-80 w-80 rounded-full bg-accent-1/6 blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
          <div className="absolute right-[10%] top-[10%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
          <div className="absolute left-[40%] -bottom-10 h-48 w-48 rounded-full bg-accent-1/8 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02),transparent_20%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-18 lg:pt-32 lg:pb-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerWrap}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-accent-1/10 bg-card/70 px-4 py-2 text-xs text-text/70 backdrop-blur-md"
            >
              <span>Home</span>
              <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
              <span className="text-accent-2">Contact Us</span>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-sm text-text/65 uppercase tracking-[0.22em]">
              Contact EazyMarkets
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight"
            >
              Let’s start a{" "}
              <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                conversation
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 text-sm md:text-base text-text/70 leading-8 max-w-2xl">
              Reach out with your questions, partnership inquiries, or support needs. We’re here to help you explore a
              smarter trading experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-18 md:py-20 relative">
        <div className="absolute left-[10%] top-[22%] h-40 w-40 rounded-full bg-accent-1/7 blur-[110px]" />
        <div className="absolute right-[12%] bottom-[10%] h-48 w-48 rounded-full bg-accent-2/7 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-start">
            {/* LEFT SIDE */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerWrap}
            >
              <motion.div variants={fadeUp}>
                <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ get in touch /</p>
                <h2 className="mt-3 text-2xl md:text-4xl font-semibold leading-tight">We’d love to hear from you</h2>
                <p className="mt-5 text-text/70 leading-8 text-sm md:text-base max-w-xl">
                  Whether you need help getting started or want to learn more about EazyMarkets, send us a message and
                  our team will get back to you.
                </p>
              </motion.div>

              <div className="mt-8 grid gap-4">
                {contactCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    variants={fadeUp}
                    className="rounded-3xl border border-accent-1/10 bg-card/70 backdrop-blur-md p-5 shadow-[0_16px_50px_rgba(0,0,0,0.20)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/10 text-accent-1 text-xl">
                        <Icon icon={card.icon} />
                      </div>

                      <div>
                        <p className="text-sm uppercase tracking-[0.16em] text-text/55">{card.title}</p>
                        <p className="mt-2 text-sm md:text-base text-text/85 leading-7">{card.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-1/10 to-accent-2/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl border border-accent-1/10 bg-card/80 backdrop-blur-md p-6 sm:p-8 shadow-[0_22px_70px_rgba(0,0,0,0.24)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,0,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.08),transparent_24%)]" />

                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.18em] text-accent-2">Contact Form</p>
                  <h3 className="mt-3 text-2xl md:text-3xl font-semibold">Send us a message</h3>
                  <p className="mt-3 text-sm md:text-base text-text/70 leading-8">
                    Fill out the form below and we’ll respond as soon as possible.
                  </p>

                  <form className="mt-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
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
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
