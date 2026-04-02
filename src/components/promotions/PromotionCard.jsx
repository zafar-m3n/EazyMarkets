import React from "react";
import { Icon } from "@iconify/react";

const PromotionCard = ({ promotion }) => {
  return (
    <article className="relative h-full">
      <div className="relative overflow-hidden rounded-4xl border border-border/85 bg-white/44 shadow-[0_18px_52px_rgba(31,41,55,0.08)] backdrop-blur-md">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.70),rgba(255,255,255,0.38))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_24%)]" />

        <div className="relative">
          <div className="relative aspect-video overflow-hidden">
            <img src={promotion.image} alt={promotion.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-background/72 via-background/14 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,217,87,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(79,143,47,0.14),transparent_24%)]" />

            <div className="absolute left-4 top-4 md:left-6 md:top-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/76 px-4 py-2 text-xs font-medium tracking-[0.18em] text-accent-2 shadow-[0_8px_24px_rgba(31,41,55,0.08)] backdrop-blur-md">
                <Icon icon={promotion.icon} className="text-base" />
                <span>{promotion.badge}</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
              <div className="max-w-lg">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/72">{promotion.kicker}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">{promotion.title}</h3>
              </div>
            </div>
          </div>

          <div className="px-5 py-6 md:px-7 md:py-7">
            <p className="text-base font-semibold leading-8 text-accent-2 md:text-lg">{promotion.subheading}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              {promotion.highlights.map((item) => (
                <div key={item} className="inline-flex items-center gap-2 text-sm text-text/72">
                  <span className="h-2 w-2 rounded-full bg-accent-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              {promotion.text.map((paragraph, idx) => (
                <p key={idx} className="text-sm leading-8 text-text/72 md:text-[15px]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PromotionCard;
