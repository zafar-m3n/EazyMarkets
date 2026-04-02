import React from "react";
import { Icon } from "@iconify/react";

import Button from "@/components/ui/Button";

const DesktopAccountTabs = ({ plans, activeIndex, setActiveIndex }) => {
  const activePlan = plans[activeIndex];

  return (
    <div className="relative z-10">
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {plans.map((plan, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={plan.title}
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-2xl border px-4 py-3 text-left backdrop-blur-md transition-all duration-300 ${
                isActive
                  ? "scale-[1.03] border-accent-1/45 bg-linear-to-br from-white via-accent-1/8 to-white shadow-[0_0_0_1px_rgba(126,217,87,0.22),0_18px_40px_rgba(126,217,87,0.16)]"
                  : "border-border/90 bg-white/52 hover:border-accent-1/25 hover:bg-white/70"
              }`}
            >
              {isActive ? (
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent-1 via-accent-2 to-accent-1" />
              ) : null}

              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "border-accent-1/30 bg-accent-1/14 text-accent-2 shadow-[0_0_20px_rgba(126,217,87,0.18)]"
                      : "border-border/80 bg-white/70 text-text/65"
                  }`}
                >
                  <Icon icon={plan.icon} width={20} />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-semibold ${isActive ? "text-accent-2" : "text-text"}`}>{plan.title}</p>
                    {plan.badge ? (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                          isActive
                            ? "border border-accent-1/25 bg-accent-1/14 text-accent-2"
                            : "border border-accent-1/20 bg-accent-1/12 text-accent-2"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    {plan.originalDeposit ? (
                      <span className="text-[11px] text-text/40 line-through">{plan.originalDeposit}</span>
                    ) : null}
                    <p className={`text-xs ${isActive ? "text-text/85 font-medium" : "text-text/60"}`}>
                      {plan.minimumDeposit} deposit
                    </p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-4xl border border-accent-1/20 bg-white/58 p-6 shadow-[0_16px_44px_rgba(31,41,55,0.08)] backdrop-blur-xl md:p-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.44))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.12),transparent_24%)]" />
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-1/16 blur-3xl" />
        <div className="absolute -left-12 bottom-0 h-28 w-28 rounded-full bg-accent-2/14 blur-3xl" />

        <div className="relative z-10 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/25 bg-white/72 text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
                <Icon icon={activePlan.icon} width={28} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold text-text md:text-3xl">{activePlan.title}</h3>
                  {activePlan.badge ? (
                    <span className="rounded-full border border-accent-1/20 bg-accent-1/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-2">
                      {activePlan.badge}
                    </span>
                  ) : null}
                </div>

                <p className="mt-2 text-sm leading-7 text-text/65">
                  Designed for traders who want {activePlan.access.toLowerCase()}.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/90 bg-white/62 p-4 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Minimum Deposit</p>
                <div className="mt-3 flex flex-wrap items-end gap-2">
                  {activePlan.originalDeposit ? (
                    <span className="text-sm text-text/40 line-through">{activePlan.originalDeposit}</span>
                  ) : null}
                  <p className="text-lg font-semibold text-text">{activePlan.minimumDeposit}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/90 bg-white/62 p-4 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Minimum Withdrawal</p>
                <p className="mt-3 text-lg font-semibold text-text">{activePlan.minimumWithdrawal}</p>
              </div>

              <div className="rounded-2xl border border-border/90 bg-white/62 p-4 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Withdrawal Time</p>
                <p className="mt-3 text-lg font-semibold text-text">{activePlan.timeFrame}</p>
              </div>

              <div className="rounded-2xl border border-border/90 bg-white/62 p-4 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Leverage</p>
                <p className="mt-3 text-lg font-semibold text-text">{activePlan.leverage}</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border/90 bg-white/62 p-5 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Account Access</p>
              <p className="mt-3 text-sm leading-8 text-text/75">{activePlan.access}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border/90 bg-white/62 p-5 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">AI Access</p>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    activePlan.aiAccess === "No"
                      ? "border border-border/80 bg-white/70 text-text/50"
                      : "border border-accent-1/20 bg-accent-1/12 text-accent-2"
                  }`}
                >
                  {activePlan.aiAccess}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border/90 bg-white/62 p-5 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Support</p>
              <ul className="mt-3 space-y-2 text-sm text-text/75">
                {activePlan.support.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-accent-2">
                      <Icon icon="mdi:chevron-right" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/90 bg-white/62 p-5 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">Extras</p>
              <ul className="mt-3 space-y-2 text-sm text-text/75">
                {activePlan.extras.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-accent-2">
                      <Icon icon="mdi:chevron-right" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                icon="mdi:wallet-outline"
                onClick={() => window.open("https://portal.eazymarkets.com/signup", "_blank")}
              >
                Open Account
              </Button>

              <Button
                variant="secondary"
                icon="mdi:chart-line"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                Talk to Advisor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopAccountTabs;
