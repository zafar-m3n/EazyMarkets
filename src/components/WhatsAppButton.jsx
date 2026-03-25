import React, { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";

const WHATSAPP_NUMBER = "447822016040";

const chatOptions = [
  {
    id: 1,
    title: "New Client Support",
    subtitle: "Accounts, registration, platform guidance",
    message: "Hello EazyMarkets, I would like help with opening an account and getting started.",
  },
  {
    id: 2,
    title: "Existing Client Support",
    subtitle: "Deposits, withdrawals, platform and account help",
    message: "Hello EazyMarkets, I am an existing client and need support with my account.",
  },
];

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closePopup();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") closePopup();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const getWhatsAppLink = (message) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div ref={wrapperRef} className="fixed bottom-5 right-5 z-70 flex items-center md:bottom-10 md:right-10">
      {/* Popup */}
      <div
        className={`absolute bottom-[calc(100%+16px)] right-0 w-[320px] origin-bottom-right overflow-hidden rounded-3xl border border-border/90 bg-white/68 shadow-[0_18px_48px_rgba(31,41,55,0.12)] backdrop-blur-2xl transition-all duration-300 sm:w-90 ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.48))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.12),transparent_26%)] opacity-95" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent-1/18 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-20 w-20 rounded-full bg-accent-2/14 blur-3xl" />

        {/* Header */}
        <div className="relative border-b border-border/80 bg-[linear-gradient(135deg,rgba(126,217,87,0.24),rgba(79,143,47,0.14))] px-5 py-5">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-1/20 bg-white/55 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_20px_rgba(126,217,87,0.16)]">
              <Icon icon="mdi:whatsapp" width={30} className="text-accent-2" />
            </div>

            <div>
              <h3 className="text-lg font-bold leading-tight text-text">Chat with EazyMarkets</h3>
              <p className="mt-1 text-xs text-text/65">
                Connect with our support team on WhatsApp for fast assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="relative px-5 py-5">
          <p className="mb-4 text-xs text-text/55">Choose the option that best matches your enquiry.</p>

          <div className="space-y-4">
            {chatOptions.map((item) => (
              <a
                key={item.id}
                href={getWhatsAppLink(item.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border/90 bg-white/62 px-4 py-4 shadow-[0_8px_24px_rgba(31,41,55,0.04)] transition-all duration-300 hover:border-accent-1/40 hover:bg-white/78 hover:shadow-[0_12px_30px_rgba(126,217,87,0.12)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full">
                    <Icon
                      icon="mdi:whatsapp"
                      width={40}
                      className="rounded-full bg-accent-1/15 p-2 text-accent-2 ring-1 ring-accent-1/30 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(126,217,87,0.18)]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text">{item.title}</p>
                    <p className="text-xs text-text/55 group-hover:text-text/70">{item.subtitle}</p>
                  </div>
                </div>

                <Icon
                  icon="mdi:arrow-top-right"
                  width={22}
                  className="text-accent-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Label Container */}
      <div className="relative mr-3 hidden overflow-hidden sm:block">
        <div
          className={`whitespace-nowrap rounded-full border border-border/90 bg-white/78 px-4 py-3 text-xs font-medium text-text shadow-[0_10px_28px_rgba(31,41,55,0.08)] backdrop-blur-xl transition-all duration-300 ${
            isOpen ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          Need help? Chat with us
        </div>
      </div>

      {/* Floating Button */}
      <button
        type="button"
        aria-label={isOpen ? "Close WhatsApp chat options" : "Open WhatsApp chat options"}
        aria-expanded={isOpen}
        onClick={togglePopup}
        className="relative flex h-16 w-16 items-center justify-center rounded-full border border-accent-1/20 bg-accent-1 text-background shadow-[0_12px_30px_rgba(126,217,87,0.28)] transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_34px_rgba(126,217,87,0.34)]"
      >
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_62%)]" />
        <span
          className={`relative z-10 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <Icon icon={isOpen ? "mdi:close" : "mdi:whatsapp"} width={30} className="text-background" />
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
