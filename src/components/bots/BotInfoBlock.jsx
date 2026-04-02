import React from "react";
import { Icon } from "@iconify/react";

const BotInfoBlock = ({ label, value, list = false }) => {
  return (
    <div className="rounded-2xl border border-border/90 bg-white/62 p-4 backdrop-blur-md shadow-[0_8px_22px_rgba(31,41,55,0.04)]">
      <p className="text-[11px] uppercase tracking-[0.18em] text-text/45">{label}</p>

      {list ? (
        <ul className="mt-3 space-y-2 text-sm text-text/75">
          {value.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 text-accent-2">
                <Icon icon="mdi:chevron-right" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm leading-7 text-text/75">{value}</p>
      )}
    </div>
  );
};

export default BotInfoBlock;
