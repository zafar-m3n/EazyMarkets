import React from "react";
import { Icon } from "@iconify/react";

const AccountPlanCard = ({ account }) => {
  return (
    <div className="group relative flex min-h-145 w-full flex-col overflow-hidden rounded-2xl border border-border/90 border-t-4 border-t-accent-1/80 bg-white/58 p-6 shadow-[0_12px_34px_rgba(31,41,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/40 hover:shadow-[0_16px_42px_rgba(126,217,87,0.14)]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.42))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.12),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-1/16 blur-3xl" />
      <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-accent-2/14 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-1/25 bg-white/72 text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_22px_rgba(126,217,87,0.18)]">
              <Icon icon={account.icon} width={26} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-text">{account.title}</h3>

              <div className="mt-1 flex flex-wrap items-center gap-2">
                {account.originalDeposit ? (
                  <span className="text-xs font-medium text-text/45 line-through">{account.originalDeposit}</span>
                ) : null}

                <span className="inline-block rounded-full border border-accent-1/20 bg-accent-1/14 px-3 py-1 text-xs font-medium text-accent-2">
                  {account.minimumDeposit} Minimum Deposit
                </span>
              </div>
            </div>
          </div>

          {account.badge ? (
            <span className="shrink-0 rounded-full border border-accent-1/20 bg-accent-1/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-2">
              {account.badge}
            </span>
          ) : null}
        </div>

        <div className="w-full space-y-2 text-sm text-text/75">
          <div className="flex items-center justify-between gap-3">
            <span className="font-medium text-text">Leverage:</span>
            <span className="rounded border border-accent-1/18 bg-accent-1/10 px-2 py-1 text-xs text-accent-2">
              {account.leverage}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="font-medium text-text">Minimum Withdrawal:</span>
            <span className="text-right text-xs">{account.minimumWithdrawal}</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="font-medium text-text">Processing:</span>
            <span className="text-right text-xs">{account.timeFrame}</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="font-medium text-text">AI Access:</span>
            <span className={`text-xs font-bold ${account.aiAccess === "No" ? "text-text/45" : "text-accent-2"}`}>
              {account.aiAccess}
            </span>
          </div>
        </div>

        <hr className="my-4 w-full border-dashed border-accent-1/12" />

        <div className="w-full text-sm text-text/75">
          <p className="mb-2 font-semibold text-text">Access:</p>
          <p className="leading-7">{account.access}</p>

          <p className="mb-1 mt-4 font-semibold text-text">Support:</p>
          <ul className="list-inside list-disc space-y-1 marker:text-accent-2">
            {account.support.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p className="mb-1 mt-4 font-semibold text-text">Extras:</p>
          <ul className="list-inside list-disc space-y-1 marker:text-accent-2">
            {account.extras.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mt-auto flex justify-center pt-6">
        <button
          className="rounded-lg border border-accent-1/20 bg-white/72 px-4 py-2 text-center text-sm text-text backdrop-blur-lg transition-all duration-300 hover:border-accent-1/55 hover:bg-accent-1/12 hover:shadow-[0_0_18px_rgba(126,217,87,0.22)] md:text-base"
          onClick={() => window.open("https://portal.eazymarkets.com/signup", "_blank")}
        >
          Open This Account
        </button>
      </div>
    </div>
  );
};

export default AccountPlanCard;
