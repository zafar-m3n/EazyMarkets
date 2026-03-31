import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import AnimatedContent from "@/components/ui/AnimatedContent";
import Button from "@/components/ui/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-figtree text-text flex items-center pt-32">
      {/* BACKGROUND BLOBS */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-32 h-64 w-64 rounded-full bg-accent-1/10 blur-[120px]" />
        <div className="absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-accent-2/10 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[20%] h-80 w-80 rounded-full bg-accent-1/8 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <AnimatedContent direction="vertical" distance={80} threshold={0.2} config={{ tension: 50, friction: 25 }}>
          {/* 404 */}
          <h1 className="text-6xl font-semibold tracking-tight md:text-8xl">
            <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">404</span>
          </h1>
        </AnimatedContent>

        <AnimatedContent
          direction="vertical"
          distance={80}
          delay={120}
          threshold={0.2}
          config={{ tension: 50, friction: 25 }}
        >
          <h2 className="mt-6 text-2xl font-semibold md:text-4xl">Page Not Found</h2>
        </AnimatedContent>

        <AnimatedContent
          direction="vertical"
          distance={80}
          delay={200}
          threshold={0.2}
          config={{ tension: 50, friction: 25 }}
        >
          <p className="mt-5 mx-auto max-w-2xl text-sm leading-8 text-text/70 md:text-base">
            The page you’re looking for doesn’t exist or may have been moved. You can head back to the homepage or
            explore other sections of the platform.
          </p>
        </AnimatedContent>

        {/* ACTION BUTTONS */}
        <AnimatedContent
          direction="vertical"
          distance={80}
          delay={280}
          threshold={0.2}
          config={{ tension: 50, friction: 25 }}
        >
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" icon="mdi:home-outline" onClick={() => navigate("/")}>
              Go Home
            </Button>

            <Button
              variant="secondary"
              icon="mdi:rocket-launch-outline"
              onClick={() => {
                window.open("https://portal.eazymarkets.com/signup", "_blank");
              }}
            >
              Start Trading
            </Button>
          </div>
        </AnimatedContent>

        {/* OPTIONAL CARD */}
        <AnimatedContent
          direction="vertical"
          distance={80}
          delay={360}
          threshold={0.2}
          config={{ tension: 50, friction: 25 }}
        >
          <div className="mt-12 mx-auto max-w-xl rounded-3xl border border-border/90 bg-white/60 p-6 backdrop-blur-md shadow-[0_12px_36px_rgba(31,41,55,0.08)]">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-1/30 bg-white/70 text-accent-2 shadow-[0_0_0_1px_rgba(126,217,87,0.08),0_0_24px_rgba(126,217,87,0.18)]">
                <Icon icon="solar:danger-triangle-bold" width={28} />
              </div>

              <p className="text-sm text-text/70 md:text-base">
                If you believe this is an error, you can contact our support team or navigate using the menu.
              </p>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default NotFound;
