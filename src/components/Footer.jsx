import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Footer() {
  const year = new Date().getFullYear();

  const launchDate = new Date(2020, 3, 25);
  const diffMs = Date.now() - launchDate.getTime();
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  const yearsActive = Math.floor(diffYears);

  return (
    <footer className="w-full bg-background border-t border-accent-1/20 shadow-[0_-6px_28px_rgba(250,204,21,0.22)]">
      <div className="max-w-7xl mx-auto px-6 md:px-0 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-xl text-text mb-4">
              <span className="text-text">Eazy</span>
              <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">Markets</span>
            </h3>

            <p className="text-sm md:text-base text-text/70 leading-relaxed mb-4">
              Premium forex and CFD brokerage with institutional-grade execution, competitive spreads, and modern
              trading technology.
            </p>

            <div className="flex items-center gap-3">
              {/* Social icons */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/80 border border-accent-1/30 flex items-center justify-center shadow-[0_0_14px_rgba(250,204,21,0.25)] transition-transform duration-200 hover:scale-110"
              >
                <Icon icon="mdi:twitter" className="w-5 h-5 text-accent-1" />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/80 border border-accent-1/30 flex items-center justify-center shadow-[0_0_14px_rgba(250,204,21,0.25)] transition-transform duration-200 hover:scale-110"
              >
                <Icon icon="mdi:linkedin" className="w-5 h-5 text-accent-1" />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/80 border border-accent-1/30 flex items-center justify-center shadow-[0_0_14px_rgba(250,204,21,0.25)] transition-transform duration-200 hover:scale-110"
              >
                <Icon icon="mdi:instagram" className="w-5 h-5 text-accent-1" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-3">
            {/* Trading */}
            <div>
              <h4 className="font-semibold text-text mb-4">Trading</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/accounts"
                    className="text-sm md:text-base text-text/70 hover:text-accent-1 transition-colors"
                  >
                    Account Types
                  </Link>
                </li>
                <li>
                  <Link to="/bots" className="text-sm md:text-base text-text/70 hover:text-accent-1 transition-colors">
                    Trading Bots
                  </Link>
                </li>
                <li>
                  <Link
                    to="/platforms"
                    className="text-sm md:text-base text-text/70 hover:text-accent-1 transition-colors"
                  >
                    Platforms
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-text mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm md:text-base text-text/70 hover:text-accent-1 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/education"
                    className="text-sm md:text-base text-text/70 hover:text-accent-1 transition-colors"
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm md:text-base text-text/70 hover:text-accent-1 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-text mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/legal" className="text-sm md:text-base text-text/70 hover:text-accent-1 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm md:text-base text-text/70 hover:text-accent-1 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm md:text-base text-text/70 hover:text-accent-1 transition-colors">
                    Risk Disclosure
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk text */}
        <div className="mt-6 space-y-4 text-sm md:text-base leading-relaxed text-justify text-text/70">
          <p>
            <span className="font-semibold">Risk Management &amp; Confidence in Every Trade with EazyMarkets.</span> At
            EazyMarkets, we focus on disciplined execution and risk-aware trading. Our technology and strategies are
            engineered to help identify opportunities while managing risk with precision and consistency.
          </p>

          <p>
            Using advanced algorithms, clearly defined methodologies, and zero emotional bias, our systems are designed
            to avoid common pitfalls of manual trading such as panic decisions, over-leveraging, and operational errors.
            Every trade is supported by data, logic, and real-time market analysis.
          </p>

          <p>
            Smart use of leverage is central to our approach. Leverage, when applied correctly, can amplify both gains
            and losses. EazyMarkets focuses on responsible leverage management and built-in risk tools so clients can
            trade in a way that aligns with their risk profile.
          </p>

          <p>
            Our technology doesn&apos;t just execute trades – it monitors market conditions, reacts to volatility, and
            supports risk management with tools such as stop-loss functionality, risk limits, and monitoring dashboards
            designed to help protect your capital.
          </p>

          <p>
            EazyMarkets operates with a strong commitment to transparency, financial integrity, and regulatory
            standards. Clients should ensure they understand how our products work and whether they are suitable for
            their individual circumstances.
          </p>

          <p>
            Trading forex and CFDs is complex and carries a high risk of rapid loss due to leverage. You should
            carefully consider whether you understand how these products work and whether you can afford to take the
            high risk of losing your money.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 border-t border-accent-1/15">
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm md:text-base text-text/60 text-center md:text-left">
              <span className="text-2xl font-semibold bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                {yearsActive}&nbsp;
              </span>
              years active
            </p>

            <p className="text-sm md:text-base text-text/60 text-center md:text-right">
              © {year} EazyMarkets. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
