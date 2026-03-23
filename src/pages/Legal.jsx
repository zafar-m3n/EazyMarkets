import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

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

const termsIntro = [
  "By using EazyMarkets, you agree to the Privacy Policy and Terms of Use outlined below. We proudly operate as a licensed and regulated financial advisory platform, with over 5 years of experience in the trading industry. Our mission is to deliver a fully automated, trustworthy, and results-driven AI bot trading experience for all clients.",
];

const termsSections = [
  {
    title: "Trusted, Regulated, and Results-Guaranteed",
    icon: "mdi:shield-check-outline",
    paragraphs: [
      "EazyMarkets is more than just a platform, it is a promise of accuracy, performance, and reliability. All data provided is sourced from verified and expert-managed systems, monitored by a team of professional traders and analysts who actively oversee client activity and market operations in real time.",
      "We are among the best in the business, offering guaranteed Return on Investment (ROI) based on the AI bot service package you select. If we fail to deliver the guaranteed ROI, you are free to walk away, no strings attached. Our trading bots are designed with advanced AI models to ensure error-free, delay-free, and omission-free execution.",
      "We take full responsibility for any performance or technical issue that occurs from our side and will offer immediate corrective action and compensation where necessary.",
    ],
  },
  {
    title: "Standard Disclaimers & Operational Notes",
    icon: "mdi:file-document-outline",
    paragraphs: [
      "EazyMarkets reserves the right to modify platform terms, tools, or features at any time without prior notice. However, all existing clients will be informed of such updates in a timely manner.",
      "Due to the nature of internet-based systems, temporary delays or technical issues may occur; however, we ensure 24/7 operational monitoring to minimize impact. We maintain the highest standards of uptime, system integrity, and client transparency.",
      "All content on our platform is provided for trading purposes and is strongly recommended to be used only with advice from our in-house trading experts. If content is used independently or misinterpreted, EazyMarkets cannot be held liable.",
    ],
  },
  {
    title: "Withdrawal Policy",
    icon: "mdi:cash-refund",
    paragraphs: [
      "The initial investment amount is subject to a mandatory three-month lock-in period. During this period, the principal amount cannot be withdrawn, either partially or in full.",
      "Trading profits, if any, may be withdrawn in accordance with the company’s profit withdrawal guidelines, where applicable.",
    ],
  },
  {
    title: "Licensed & Professional Guidance",
    icon: "mdi:briefcase-account-outline",
    paragraphs: [
      "EazyMarkets is a fully licensed and regulated financial advisory company.",
      "Unlike other platforms, we do not recommend trading manually or through unauthorized third-party services. Our expert-built AI bots are tailored to eliminate manual risk exposure and simplify your investment journey.",
      "Clients should only purchase and trade through our bot system to enjoy safe, hassle-free, and profitable trading.",
    ],
  },
  {
    title: "Risk, Privacy & Data Protection",
    icon: "mdi:lock-check-outline",
    paragraphs: [
      "While we strive to provide the best possible results, all forms of trading carry inherent risk. Clients are encouraged to consult legal and tax professionals regarding their specific obligations.",
      "We do not use your personal data for any purpose other than storing your preferences. You can request full data deletion by contacting support@eazymarkets.com, and your data will be permanently deleted, highly secured, and guaranteed.",
    ],
  },
  {
    title: "Your Trading Partner for Life",
    icon: "mdi:chart-line",
    paragraphs: [
      "With 5+ years of trading experience, AI-backed precision, real experts on hand, and guaranteed ROI, EazyMarkets is the platform thousands trust. Our service is built for those who want to trade smarter, safer, and more confidently.",
      "Join EazyMarkets today — where reliability meets guaranteed returns.",
    ],
  },
];

const TermsSectionCard = ({ title, paragraphs, icon }) => (
  <motion.div
    variants={fadeUp}
    className="relative overflow-hidden rounded-4xl border border-accent-1/10 bg-card/70 p-6 md:p-8 backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.24)]"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.06),transparent_28%)] opacity-80" />
    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/60 to-transparent" />
    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/8 blur-3xl" />
    <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent-2/8 blur-3xl" />

    <div className="relative z-10">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/10 text-accent-1 text-xl">
          <Icon icon={icon} />
        </div>

        <div className="min-w-0">
          <p className="text-sm uppercase tracking-[0.18em] text-accent-2/80">Terms & Conditions</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">{title}</h2>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {paragraphs.map((paragraph, index) => {
          const email = "support@eazymarkets.com";

          if (paragraph.includes(email)) {
            const parts = paragraph.split(email);

            return (
              <p key={index} className="text-sm md:text-base leading-8 text-text/72">
                {parts[0]}
                <a
                  href={`mailto:${email}`}
                  className="text-accent-2 transition-colors duration-300 hover:text-accent-1"
                >
                  {email}
                </a>
                {parts[1]}
              </p>
            );
          }

          return (
            <p key={index} className="text-sm md:text-base leading-8 text-text/72">
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  </motion.div>
);

const TermsAndConditions = () => {
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
              <span className="text-accent-2">Terms & Conditions</span>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-sm text-text/65 uppercase tracking-[0.22em]">
              Terms & Conditions
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight"
            >
              Terms you can{" "}
              <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">trust</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 text-sm md:text-base text-text/70 leading-8 max-w-2xl">
              Review the terms that govern your use of EazyMarkets, our AI bot services, withdrawal structure, platform
              policies, and data protection practices.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="py-18 md:py-20 relative">
        <div className="absolute left-[10%] top-[22%] h-40 w-40 rounded-full bg-accent-1/7 blur-[110px]" />
        <div className="absolute right-[12%] bottom-[10%] h-48 w-48 rounded-full bg-accent-2/7 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerWrap}
            className="space-y-8"
          >
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-4xl border border-accent-1/10 bg-card/70 p-6 md:p-8 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.20)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.05),transparent_28%)] opacity-80" />

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ overview /</p>
                <h2 className="mt-3 text-2xl md:text-4xl font-semibold leading-tight">
                  Important information before using EazyMarkets
                </h2>

                <div className="mt-6 space-y-5">
                  {termsIntro.map((paragraph, index) => (
                    <p key={index} className="text-sm md:text-base text-text/72 leading-8">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            {termsSections.map((section) => (
              <TermsSectionCard
                key={section.title}
                title={section.title}
                paragraphs={section.paragraphs}
                icon={section.icon}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
