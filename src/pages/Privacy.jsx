import React from "react";
import { Icon } from "@iconify/react";
import AnimatedContent from "@/components/ui/AnimatedContent";

const policyIntro = [
  "Your privacy is important. We have created this Privacy Policy so you can understand your rights as a EazyMarkets website user. We may intermittently make changes to the policy. The changes will be included on this page. It is up to you to review this Privacy Policy regularly and stay informed about any changes made to it. We encourage you to visit this page often. By using the website you agree to the terms set forth in this Privacy Policy and terms of use. This is our entire and exclusive Privacy Policy and it supersedes any earlier versions.",
];

const policySections = [
  {
    title: "Collection of your email address",
    paragraphs: [
      "Signing up for the website requires you to supply an email address, or other information needed to contact you online. Any email address supplied may later be accessed, updated, modified and deleted. Please note, we may keep a copy of any previous email addresses for our records.",
      "The email address you provide will be used to send you daily newsletters and market updates and will not be used for commercial purposes or sold to third-parties.",
      "This information is used to aid and improve your use of the website, for communication purposes, and to comply with any requirements of the law. We shall also use this information to respond to any questions you might have. Without your consent, your email address will not be sold or revealed to third parties, other than as specified in this Privacy Policy, unless we are legally obliged to do so (for example, if requested to do so by Court Order or for the purposes of prevention of fraud or any other crime).",
      "If necessary, we may disclose your information to protect our legal rights. For example, if the information relates to actual or threatened harmful actions, or we have good reason to believe that disclosing information is necessary in order to conform to the requirements of the law or comply with governmental orders, court orders, or legal process served on us; or to protect and defend our property or other rights, the users of the website or the public. This includes the exchange of information with other companies and organizations for fraud protection and credit risk protection. If the website ever files for bankruptcy, is part of a reorganization, sells its assets or merges with a separate company, we may sell information provided to us through the website to a third party or share your information with the third party or company we merge with.",
      "Links to third party websites may be present on this website. Even if the websites are accessed via links from our website, we are not responsible for their privacy practices or the content. Use of these third-party websites is done entirely at your own risk. It is recommended that you check the privacy and security policies of every website you visit. Clicking on a third party link essentially takes you to a third party’s website. We make no representation or warranty as to the effectiveness, quality, legitimacy or data protections of any third party website.",
      "If at any time you would like EazyMarkets to delete your personal information from the database, send an email to support@eazymarkets.com and your details will be deleted within 72 hours.",
    ],
  },
];

const PolicySectionCard = ({ title, paragraphs }) => (
  <div className="group relative overflow-hidden rounded-4xl border border-border/90 bg-white/58 p-6 shadow-[0_12px_38px_rgba(31,41,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/40 hover:shadow-[0_16px_42px_rgba(126,217,87,0.14)] md:p-8">
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.44))]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_24%)] opacity-90" />
    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />
    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/16 blur-3xl" />
    <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent-2/14 blur-3xl" />

    <div className="relative z-10">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-1/20 bg-white/75 text-xl text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_20px_rgba(126,217,87,0.16)]">
          <Icon icon="mdi:shield-lock-outline" />
        </div>

        <div className="min-w-0">
          <p className="text-sm uppercase tracking-[0.18em] text-accent-2/85">Privacy Policy</p>
          <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-4xl">{title}</h2>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {paragraphs.map((paragraph, index) => {
          const email = "support@eazymarkets.com";

          if (paragraph.includes(email)) {
            const parts = paragraph.split(email);

            return (
              <p key={index} className="text-sm leading-8 text-text/72 md:text-base">
                {parts[0]}
                <a
                  href={`mailto:${email}`}
                  className="text-accent-2 transition-colors duration-300 hover:text-accent-1"
                >
                  {email}
                </a>
                {parts[1]}
              </p>
            );
          }

          return (
            <p key={index} className="text-sm leading-8 text-text/72 md:text-base">
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-figtree text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
        <div className="absolute bottom-[8%] left-[18%] h-80 w-80 rounded-full bg-accent-1/8 blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fbf4_0%,#eef9e7_50%,#f8fbf4_100%)]" />

          <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-accent-1/26 blur-[120px]" />
          <div className="absolute right-[10%] top-[10%] h-72 w-72 rounded-full bg-accent-2/24 blur-[140px]" />
          <div className="absolute -bottom-10 left-[40%] h-48 w-48 rounded-full bg-accent-1/20 blur-[120px]" />

          <div className="absolute left-[8%] top-[12%] h-32 w-32 rounded-full bg-accent-1/34 blur-[48px]" />
          <div className="absolute right-[16%] top-[18%] h-36 w-36 rounded-full bg-accent-2/28 blur-[54px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,217,87,0.20),transparent_20%),radial-gradient(circle_at_80%_24%,rgba(79,143,47,0.18),transparent_22%),radial-gradient(circle_at_48%_78%,rgba(126,217,87,0.14),transparent_20%)]" />
          <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(126,217,87,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(126,217,87,0.10)_1px,transparent_1px)] bg-size-[72px_72px]" />
          <div className="absolute inset-0 bg-white/18" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <div className="max-w-3xl">
            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={90}
              delay={0}
              threshold={0.2}
              config={{ tension: 50, friction: 25 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-white/62 px-4 py-2 text-xs text-text/70 backdrop-blur-md shadow-[0_8px_24px_rgba(31,41,55,0.05)]">
                <span>Home</span>
                <Icon icon="solar:alt-arrow-right-bold" className="text-text/35" />
                <span className="text-accent-2">Privacy Policy</span>
              </div>
            </AnimatedContent>

            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={70}
              delay={100}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <p className="mt-6 text-sm uppercase tracking-[0.22em] text-text/65">Privacy Policy</p>
            </AnimatedContent>

            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={70}
              delay={180}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Your privacy{" "}
                <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">matters</span>
              </h1>
            </AnimatedContent>

            <AnimatedContent
              direction="vertical"
              reverse={false}
              distance={70}
              delay={260}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <p className="mt-5 max-w-2xl text-sm leading-8 text-text/70 md:text-base">
                Understand how EazyMarkets collects, uses, stores, and protects your information while you use our
                website and services.
              </p>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="relative py-18 md:py-20">
        <div className="absolute left-[10%] top-[22%] h-40 w-40 rounded-full bg-accent-1/8 blur-[110px]" />
        <div className="absolute right-[12%] bottom-[10%] h-48 w-48 rounded-full bg-accent-2/8 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <AnimatedContent
              direction="horizontal"
              reverse={true}
              distance={100}
              threshold={0.15}
              config={{ tension: 50, friction: 25 }}
            >
              <div className="relative overflow-hidden rounded-4xl border border-border/90 bg-white/58 p-6 shadow-[0_12px_38px_rgba(31,41,55,0.08)] backdrop-blur-xl md:p-8">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.44))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,217,87,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(79,143,47,0.10),transparent_24%)] opacity-90" />
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-1/70 to-transparent" />
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-1/16 blur-3xl" />
                <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent-2/14 blur-3xl" />

                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-2">/ overview /</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                    Important information about your privacy
                  </h2>

                  <div className="mt-6 space-y-5">
                    {policyIntro.map((paragraph, index) => (
                      <p key={index} className="text-sm leading-8 text-text/72 md:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedContent>

            {policySections.map((section, index) => (
              <AnimatedContent
                key={section.title}
                direction="horizontal"
                reverse={index % 2 === 0 ? false : true}
                distance={100}
                threshold={0.15}
                config={{ tension: 50, friction: 25 }}
              >
                <PolicySectionCard title={section.title} paragraphs={section.paragraphs} />
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
