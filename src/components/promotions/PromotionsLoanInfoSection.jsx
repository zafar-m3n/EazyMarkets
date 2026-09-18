import React from "react";
import { Icon } from "@iconify/react";

import AnimatedContent from "@/components/ui/AnimatedContent";

const accountManagerPoints = [
  "To verify your eligibility based on your account type and trading history.",
  "To understand the repayment structure and loan utilization terms.",
  "To learn how this loan can enhance your trading capacity and maximize your returns.",
];

const keyNotes = [
  "Loan availability is subject to approval and account performance review.",
  "Loan funds are provided exclusively for trading activities within your account.",
  "Repayment terms and duration will be discussed upon eligibility confirmation.",
  "Withdrawals will only be permitted once the loan has been fully repaid.",
  "Early repayment or consistent performance may qualify for additional trading benefits or cashback rewards.",
  "This offer is available for a limited time.",
];

const PromotionsLoanInfoSection = () => {
  return (
    <section className="relative py-16 md:py-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-[10%] top-[10%] h-56 w-56 rounded-full bg-accent-1/10 blur-[130px]" />
        <div className="absolute right-[6%] bottom-[10%] h-64 w-64 rounded-full bg-accent-2/10 blur-[145px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContent
          direction="vertical"
          reverse={false}
          distance={90}
          threshold={0.15}
          config={{ tension: 50, friction: 25 }}
        >
          <div className="relative overflow-hidden rounded-4xl border border-border/85 bg-white/44 p-8 shadow-[0_18px_52px_rgba(31,41,55,0.08)] backdrop-blur-md sm:p-10 lg:p-14">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.70),rgba(255,255,255,0.38))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_24%)]" />

            <div className="relative z-10">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.22em] text-accent-2">Loan Assistance Program</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                  Trader Empowerment & Loan Partnership Program
                </h2>
                <p className="mt-5 text-sm leading-8 text-text/70 md:text-base">
                  We're pleased to introduce our Loan Assistance Program, designed to help traders scale up their
                  portfolios and enhance their trading capacity.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
                <div className="relative overflow-hidden rounded-3xl border border-border/85 bg-white/55 p-6 backdrop-blur-md shadow-[0_10px_28px_rgba(31,41,55,0.05)] sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-2/12 text-accent-2">
                      <Icon icon="solar:user-id-bold" className="text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-text">Contact Your Account Manager</h3>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {accountManagerPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm leading-7 text-text/72 md:text-[15px]">
                        <Icon icon="solar:alt-arrow-right-bold" className="mt-1 shrink-0 text-accent-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-border/85 bg-white/55 p-6 backdrop-blur-md shadow-[0_10px_28px_rgba(31,41,55,0.05)] sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-2/12 text-accent-2">
                      <Icon icon="solar:notes-bold" className="text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-text">Key Notes</h3>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {keyNotes.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm leading-7 text-text/72 md:text-[15px]">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-2/12 text-[11px] font-semibold text-accent-2">
                          {idx + 1}
                        </span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default PromotionsLoanInfoSection;
