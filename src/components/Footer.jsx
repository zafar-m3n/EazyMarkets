import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logoDark from "@/assets/logoDark.webp";

function Footer() {
  const year = new Date().getFullYear();

  const launchDate = new Date(2020, 3, 25);
  const diffMs = Date.now() - launchDate.getTime();
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  const yearsActive = Math.floor(diffYears);

  return (
    <footer className="relative w-full bg-[#0b1a0b] text-white overflow-hidden">
      {/* Glow Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-accent-1/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-0 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logoDark} alt="EazyMarkets" className="h-20 w-auto" />
            </div>

            <p className="text-sm md:text-base text-white/70 leading-relaxed mb-4">
              Premium forex and CFD brokerage with institutional-grade execution, competitive spreads, and modern
              trading technology.
            </p>

            <div className="flex items-center gap-3">
              {/* Social icons */}
              {["prime:twitter", "mdi:linkedin", "mdi:instagram"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl transition-all duration-200 hover:scale-110 hover:border-accent-1/60 hover:shadow-[0_0_18px_rgba(126,217,87,0.4)]"
                >
                  <Icon icon={icon} className="w-5 h-5 text-accent-1" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-3">
            {/* Trading */}
            <div>
              <h4 className="font-semibold text-white mb-4">Trading</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/accounts" className="footer-link">
                    Account Types
                  </Link>
                </li>
                <li>
                  <Link to="/bots" className="footer-link">
                    Trading Bots
                  </Link>
                </li>
                <li>
                  <Link to="/platforms" className="footer-link">
                    Platforms
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/education" className="footer-link">
                    Education
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/legal" className="footer-link">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="footer-link">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* Risk text (UNCHANGED content) */}
        <div className="mt-6 space-y-4 text-sm md:text-base leading-relaxed text-justify text-white/70">
          <p>
            <span className="font-semibold text-white">
              Risk Management &amp; Confidence in Every Trade with EazyMarkets.
            </span>{" "}
            At EazyMarkets, we focus on disciplined execution and risk-aware trading. Our technology and strategies are
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
        <div className="mt-6 border-t border-white/10">
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm md:text-base text-white/60 text-center md:text-left">
              <span className="text-2xl font-semibold bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                {yearsActive}&nbsp;
              </span>
              years active
            </p>

            <p className="text-sm md:text-base text-white/60 text-center md:text-right">
              © {year} EazyMarkets. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
