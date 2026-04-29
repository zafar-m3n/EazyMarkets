import React from "react";
import { Icon } from "@iconify/react";
import AnimatedContent from "@/components/ui/AnimatedContent";

import hemraj from "@/assets/ib/andra/hemraj.jpg";
import leo from "@/assets/ib/brazil/leo.jpg";
import eddie from "@/assets/ib/china/eddie.jpg";
import ashley from "@/assets/ib/delhi/ashley.jpg";
import narender from "@/assets/ib/delhi/narender.jpg";
import ibrahim from "@/assets/ib/dubai/ibrahim.jpg";
import mahmoud from "@/assets/ib/dubai/mahmoud.jpg";
import pg from "@/assets/ib/dubai/pg.jpg";
import joseph from "@/assets/ib/europe/joseph.jpg";
import vikram from "@/assets/ib/haryana/vikram.jpg";
import ranjith from "@/assets/ib/karnataka/ranjith.jpg";
import walid from "@/assets/ib/lebanon/walid.jpg";
import steven from "@/assets/ib/netherlands/steven.jpg";
import niel from "@/assets/ib/philippines/niel.jpg";
import mohammed from "@/assets/ib/qatar/mohammed.jpg";
import adi from "@/assets/ib/saudi/adi.jpg";
import otara from "@/assets/ib/sl/otara.jpg";
import sathish from "@/assets/ib/tn/sathish.jpg";
import yilmaz from "@/assets/ib/turkey/yilmaz.jpg";

const ibs = [
  {
    name: "Ibrahim Abdul Salam",
    region: "Dubai",
    image: ibrahim,
    clients: "150+",
    role: "High-intent referral lead",
    quote:
      "Ibrahim has played a key role in Dubai, bringing high-intent clients and strengthening our visibility within professional trading circles.",
    featured: true,
  },
  {
    name: "Mahmoud Hakim",
    region: "Sharjah",
    image: mahmoud,
    clients: "117",
    role: "Relationship-led growth",
    quote:
      "Mahmoud has helped us grow through relationship-led referrals, connecting EazyMarkets with clients who need reliable market access.",
  },
  {
    name: "Hemraj Yadav",
    region: "Andra",
    image: hemraj,
    clients: "108",
    role: "Regional trust builder",
    quote:
      "Hemraj has helped us build strong regional trust, bringing in consistent client introductions through his local trading network.",
  },
  {
    name: "Otara G",
    region: "Sri Lanka",
    image: otara,
    clients: "96",
    role: "Local credibility partner",
    quote:
      "Otara has played an important role in Sri Lanka, helping us reach local traders through credibility, trust, and consistent referrals.",
  },
  {
    name: "PG Faisal",
    region: "Dubai",
    image: pg,
    clients: "91",
    role: "Partner network builder",
    quote:
      "Faisal has contributed strongly to our Dubai partner network by consistently introducing quality clients and maintaining strong follow-up.",
  },
  {
    name: "Ashley Karu",
    region: "Delhi",
    image: ashley,
    clients: "87",
    role: "Delhi network lead",
    quote:
      "Ashley has been a strong IB for Delhi, helping us reach active traders through trusted personal referrals and market conversations.",
  },
  {
    name: "Niel Bolzs",
    region: "Philippines",
    image: niel,
    clients: "82",
    role: "Community onboarding partner",
    quote:
      "Niel has helped us grow in the Philippines by introducing active communities to EazyMarkets and supporting client onboarding.",
  },
  {
    name: "Adi Al-Hashimi",
    region: "Saudi",
    image: adi,
    clients: "78",
    role: "GCC growth partner",
    quote:
      "Adi has helped us connect with Saudi-based traders who value structured market access, communication, and partner-led guidance.",
  },
  {
    name: "Eddie Chow",
    region: "China",
    image: eddie,
    clients: "73",
    role: "Market access partner",
    quote:
      "Eddie has supported our growth in China by connecting us with serious traders looking for structured tools and reliable support.",
  },
  {
    name: "Vikram Jain",
    region: "Haryana",
    image: vikram,
    clients: "69",
    role: "Local growth partner",
    quote:
      "Vikram has supported our Haryana growth by building trust with traders and helping them understand the EazyMarkets ecosystem.",
  },
  {
    name: "Mohammed Al Thani",
    region: "Qatar",
    image: mohammed,
    clients: "64",
    role: "Regional credibility partner",
    quote:
      "Mohammed has strengthened our Qatar presence by bringing in high-quality client introductions through a trusted regional network.",
  },
  {
    name: "Leo Flores",
    region: "Brazil",
    image: leo,
    clients: "59",
    role: "Community connector",
    quote:
      "Leo has opened a valuable connection into Brazil, helping traders discover EazyMarkets through clear communication and community reach.",
  },
  {
    name: "Joseph Bittala",
    region: "Europe",
    image: joseph,
    clients: "54",
    role: "European presence partner",
    quote:
      "Joseph has helped us establish a European presence by introducing traders who value automation, market insight, and structured execution.",
  },
  {
    name: "Ranjith Hassan",
    region: "Karnataka",
    image: ranjith,
    clients: "49",
    role: "Education-first partner",
    quote:
      "Ranjith has helped us reach Karnataka-based traders through strong local relationships and consistent client education.",
  },
  {
    name: "Sathish C",
    region: "Tamil Nadu",
    image: sathish,
    clients: "43",
    role: "Tamil Nadu network partner",
    quote:
      "Sathish has supported our Tamil Nadu network by introducing traders through strong local connections and practical client guidance.",
  },
  {
    name: "Narender Rohilla",
    region: "Delhi",
    image: narender,
    clients: "39",
    role: "Client relationship partner",
    quote:
      "Narender has helped expand our Delhi network by introducing clients who value trading support, transparency, and long-term guidance.",
  },
  {
    name: "Walid Daher",
    region: "Lebanon",
    image: walid,
    clients: "34",
    role: "Direct engagement partner",
    quote:
      "Walid has helped introduce EazyMarkets to serious traders in Lebanon, supporting growth through trust and direct client engagement.",
  },
  {
    name: "Yilmaz Surgut",
    region: "Turkey",
    image: yilmaz,
    clients: "29",
    role: "Turkey market partner",
    quote:
      "Yilmaz has helped expand our Turkey presence by connecting us with traders interested in a more guided trading experience.",
  },
  {
    name: "Steven Williams",
    region: "Netherlands",
    image: steven,
    clients: "26",
    role: "Netherlands reach partner",
    quote:
      "Steven has supported our Netherlands reach by connecting us with traders looking for smarter tools and dependable trading support.",
  },
];
const featuredIb = ibs.find((ib) => ib.featured);
const networkIbs = ibs.filter((ib) => !ib.featured);

function IBSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/70 py-18 md:py-20">
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-accent-1/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent-2/10 blur-[160px]" />

      <AnimatedContent direction="vertical" distance={90} threshold={0.15} config={{ tension: 50, friction: 25 }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-accent-2/85">Our IB Network</p>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                The people introducing EazyMarkets to active trading communities
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-8 text-text/70 md:text-base lg:ml-auto">
              Each Introducing Broker supports a different market, audience, or client network — helping traders
              discover EazyMarkets through trust, education, and direct relationship-led introductions.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="group relative min-h-155 overflow-hidden rounded-[2.3rem] border border-border/90 bg-white/58 shadow-[0_18px_50px_rgba(31,41,55,0.08)] backdrop-blur-xl">
              <img
                src={featuredIb.image}
                alt={`${featuredIb.name} - EazyMarkets Introducing Broker`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-linear-to-t from-text/86 via-text/36 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.24),transparent_34%)]" />

              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/16 px-4 py-2 text-xs font-medium text-white shadow-[0_10px_28px_rgba(0,0,0,0.16)] backdrop-blur-md">
                <Icon icon="solar:map-point-bold" className="text-base" />
                {featuredIb.region}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="rounded-[1.8rem] border border-white/18 bg-white/14 p-5 text-white shadow-[0_18px_46px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/62">Featured IB Partner</p>
                      <h3 className="mt-2 text-3xl font-semibold leading-tight">{featuredIb.name}</h3>
                      <p className="mt-1 text-sm text-white/72">{featuredIb.role}</p>
                    </div>

                    <div className="shrink-0 rounded-2xl border border-white/18 bg-white/14 px-4 py-3 text-center">
                      <p className="text-2xl font-semibold">{featuredIb.clients}</p>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">Clients</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-white/78">“{featuredIb.quote}”</p>
                </div>
              </div>
            </article>

            <div className="grid gap-6">
              <div className="relative overflow-hidden rounded-[2.3rem] border border-border/90 bg-white/58 p-5 shadow-[0_18px_50px_rgba(31,41,55,0.08)] backdrop-blur-xl sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,217,87,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(79,143,47,0.10),transparent_34%)]" />

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-accent-2">Regional Partners</p>
                    <h3 className="mt-2 text-2xl font-semibold leading-tight">A spread of local market builders</h3>
                  </div>

                  <div className="hidden h-13 w-13 items-center justify-center rounded-2xl border border-accent-1/25 bg-accent-1/12 text-2xl text-accent-2 sm:flex">
                    <Icon icon="solar:global-bold" />
                  </div>
                </div>

                <div className="relative z-10 mt-7 grid gap-3 sm:grid-cols-2">
                  {networkIbs.slice(0, 8).map((ib, index) => (
                    <div
                      key={ib.name}
                      className={`group flex items-center gap-3 rounded-[1.35rem] border border-border/80 bg-white/62 p-3 shadow-[0_10px_26px_rgba(31,41,55,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/45 ${
                        index % 2 === 0 ? "sm:translate-y-3" : ""
                      }`}
                    >
                      <img
                        src={ib.image}
                        alt={ib.name}
                        className="h-15 w-15 rounded-2xl object-cover ring-2 ring-white transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="truncate text-sm font-semibold">{ib.name}</h4>
                          <span className="rounded-full bg-accent-1/12 px-2 py-1 text-xs font-semibold text-accent-2">
                            {ib.clients}
                          </span>
                        </div>

                        <p className="mt-1 truncate text-xs text-text/52">{ib.region}</p>
                        <p className="mt-1 truncate text-xs text-text/42">{ib.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {networkIbs.slice(8, 12).map((ib) => (
                  <article
                    key={`${ib.name}-mini-feature`}
                    className="relative overflow-hidden rounded-[1.7rem] border border-border/90 bg-white/58 p-4 shadow-[0_12px_34px_rgba(31,41,55,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/45"
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-accent-1/10 blur-2xl" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3">
                        <img
                          src={ib.image}
                          alt={ib.name}
                          className="h-12 w-12 rounded-2xl object-cover ring-2 ring-white"
                          loading="lazy"
                        />
                        <div className="min-w-0">
                          <h4 className="truncate text-sm font-semibold">{ib.name}</h4>
                          <p className="text-xs text-accent-2">{ib.region}</p>
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-text/66">“{ib.quote}”</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-4xl border border-border/90 bg-white/54 p-4 shadow-[0_14px_42px_rgba(31,41,55,0.07)] backdrop-blur-xl">
            <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {networkIbs.slice(12).map((ib) => (
                <article
                  key={`${ib.name}-rail`}
                  className="group relative min-w-70 overflow-hidden rounded-3xl border border-border/80 bg-white/66 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/45"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={ib.image}
                      alt={ib.name}
                      className="h-14 w-14 rounded-2xl object-cover ring-2 ring-white"
                      loading="lazy"
                    />

                    <div className="min-w-0">
                      <h4 className="truncate text-sm font-semibold">{ib.name}</h4>
                      <p className="text-xs text-text/50">{ib.region}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border/70 pt-3">
                    <span className="text-xs text-text/45">{ib.role}</span>
                    <span className="rounded-full border border-accent-1/25 bg-accent-1/12 px-2.5 py-1 text-xs font-semibold text-accent-2">
                      {ib.clients}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}

export default IBSection;
