import React, { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

const AnniversaryOfferPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMounted]);

  const handleClose = () => {
    setIsVisible(false);

    setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = "";
    }, 250);
  };

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-999 flex items-center justify-center px-4 transition-all duration-300 sm:px-6 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-white/35 backdrop-blur-md" onClick={handleClose} />

      <div
        className={`relative w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-4xl border border-border bg-card shadow-[0_25px_80px_rgba(31,41,55,0.14)] transition-all duration-300 ${
          isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.96] opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-accent-1/18 blur-3xl" />
          <div className="absolute -right-12 top-8 h-40 w-40 rounded-full bg-accent-2/14 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-32 w-56 -translate-x-1/2 rounded-full bg-accent-1/10 blur-3xl" />
        </div>

        <button
          type="button"
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/85 text-text transition hover:scale-105 hover:bg-white"
        >
          <Icon icon="mdi:close" className="text-xl" />
        </button>

        <div className="relative z-10 grid min-h-105 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center p-6 pr-5 sm:p-8 sm:pr-6 lg:p-9">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent-1/20 bg-accent-1/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-2">
              <Icon icon="solar:gift-bold-duotone" className="text-base" />6 Year Anniversary
            </div>

            <h2 className="max-w-lg text-3xl font-bold leading-tight text-text sm:text-[2.1rem]">
              100% Cashback
              <span className="block bg-linear-to-r from-accent-2 to-accent-1 bg-clip-text text-transparent">
                Anniversary Offer
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-text/75 sm:text-base">
              We’re celebrating our upcoming 6 year anniversary with a limited-time 100% cashback offer for clients.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-rows-2">
              <div className="rounded-3xl border border-border bg-background px-4 py-4 shadow-[0_10px_30px_rgba(126,217,87,0.08)]">
                <div className="flex justify-center items-center space-x-3">
                  <Icon icon="solar:wallet-money-bold-duotone" className="text-xl text-accent-2" width={48} />
                  <div>
                    <h3 className="text-lg font-semibold text-text">100% Cashback</h3>
                    <p className="mt-1 text-xs text-text/70">
                      A special anniversary reward created for this milestone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-background px-4 py-4 shadow-[0_10px_30px_rgba(79,143,47,0.08)]">
                <div className="flex justify-center items-center space-x-3">
                  <Icon icon="solar:calendar-mark-bold-duotone" className="text-xl text-accent-2" width={48} />
                  <div>
                    <h3 className="text-lg font-semibold text-text">Limited Time</h3>
                    <p className="mt-1 text-xs text-text/70">Available as part of our upcoming 6 year celebration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden items-center justify-center overflow-hidden border-t border-border bg-linear-to-br from-accent-1/10 via-white to-accent-2/10 p-6 lg:flex lg:border-l lg:border-t-0">
            <div className="absolute h-56 w-56 rounded-full bg-accent-1/20 blur-3xl" />
            <div className="absolute right-8 top-10 h-24 w-24 rounded-full bg-accent-2/20 blur-2xl" />
            <div className="absolute bottom-8 left-8 h-20 w-20 rounded-full bg-accent-1/20 blur-2xl" />

            <div className="relative w-full max-w-72.5 rounded-4xl border border-white/60 bg-white/75 p-5 shadow-[0_20px_60px_rgba(31,41,55,0.12)] backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-2/80">Exclusive</p>
                  <h3 className="mt-2 text-2xl font-bold text-text">100% Cashback</h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-accent-2 to-accent-1 text-white shadow-[0_16px_35px_rgba(79,143,47,0.25)]">
                  <Icon icon="solar:star-fall-bold-duotone" className="text-2xl" />
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-background/90 p-4">
                <p className="text-sm font-semibold text-text">Upcoming 6 Year Anniversary</p>
                <p className="mt-1 text-xs leading-5 text-text/65">
                  A milestone celebration with a premium client offer.
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl bg-linear-to-r from-accent-2 to-accent-1 px-4 py-3.5 text-white">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/80">Offer</p>
                  <p className="mt-1 text-base font-bold">Anniversary Reward</p>
                </div>
                <Icon icon="solar:gift-bold-duotone" className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryOfferPopup;
