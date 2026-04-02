import React, { useState } from "react";
import { Icon } from "@iconify/react";
import AnimatedContent from "@/components/ui/AnimatedContent";

const FAQSection = ({ sectionAnimation }) => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "What is AI trading?",
      answer:
        "AI trading uses intelligent models and data-driven systems to analyse market conditions, identify patterns, and support trade execution with greater speed and consistency.",
    },
    {
      question: "How does AI improve trading performance?",
      answer:
        "AI improves trading by processing large volumes of market data quickly, highlighting opportunities, supporting structured decision-making, and helping traders reduce emotional reactions.",
    },
    {
      question: "Is this platform suitable for new traders?",
      answer:
        "Yes. The platform is designed to present insights clearly, making it easier for newer traders to understand signals, manage risk, and build a more disciplined approach.",
    },
    {
      question: "Why use automation in trading?",
      answer:
        "Automation helps traders apply strategy rules more consistently, respond faster to changing markets, and reduce hesitation during execution.",
    },
    {
      question: "Does AI remove trading risk?",
      answer:
        "No trading system removes risk completely. What AI can do is improve structure, provide stronger analysis, and support better execution when paired with good risk management.",
    },
  ];

  return (
    <section className="relative border-b border-border/70 py-20 lg:py-24">
      <div className="absolute right-[8%] top-[16%] h-40 w-40 rounded-full bg-accent-1/8 blur-[100px]" />

      <AnimatedContent {...sectionAnimation(7)}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Frequently Asked Questions</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Everything traders need to know before getting started
            </h2>
            <p className="mt-5 leading-7 text-text/72">
              Here are the answers to the most common questions about how our AI trading platform works and what traders
              can expect from it.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="relative overflow-hidden rounded-[1.6rem] border border-border/90 bg-white/58 shadow-[0_10px_30px_rgba(31,41,55,0.07)] backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.44))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,rgba(126,217,87,0.12),transparent_30%)]" />

                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="relative z-10 flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-base font-medium sm:text-lg">{faq.question}</span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-white/80 text-accent-2 shadow-[0_6px_18px_rgba(31,41,55,0.05)] transition-transform duration-300">
                      <Icon
                        icon={isOpen ? "mdi:minus" : "mdi:plus"}
                        className={`text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="relative z-10 px-5 pb-5 text-sm leading-7 text-text/72 sm:px-6">{faq.answer}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default FAQSection;
