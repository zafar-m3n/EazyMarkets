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
        className={`absolute bottom-[calc(100%+16px)] right-0 w-[320px] origin-bottom-right overflow-hidden rounded-3xl border border-white/10 bg-[#0f1117] shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300 sm:w-90 ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-accent-1 px-5 py-5 text-background">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
              <Icon icon="mdi:whatsapp" width={30} className="text-background" />
            </div>

            <div>
              <h3 className="text-lg font-bold leading-tight">Chat with EazyMarkets</h3>
              <p className="mt-1 text-xs text-background/80">
                Connect with our support team on WhatsApp for fast assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="bg-[#151922] px-5 py-5">
          <p className="mb-4 text-xs text-gray-400">Choose the option that best matches your enquiry.</p>

          <div className="space-y-4">
            {chatOptions.map((item) => (
              <a
                key={item.id}
                href={getWhatsAppLink(item.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 hover:border-accent-1/50 hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full">
                    <Icon
                      icon="mdi:whatsapp"
                      width={40}
                      className="rounded-full bg-accent-1/15 p-2 text-accent-1 ring-1 ring-accent-1/30 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300">{item.subtitle}</p>
                  </div>
                </div>

                <Icon
                  icon="mdi:arrow-top-right"
                  width={22}
                  className="text-accent-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Label Container */}
      <div className="relative mr-3 hidden overflow-hidden sm:block">
        <div
          className={`whitespace-nowrap rounded-full border border-white/10 bg-[#12161f]/95 px-4 py-3 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 ${
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
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent-1 text-background shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:opacity-95"
      >
        <span
          className={`flex items-center justify-center transition-transform duration-300 ${
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
