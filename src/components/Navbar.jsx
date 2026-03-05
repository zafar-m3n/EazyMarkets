import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/Button";
import favicon from "@/assets/favicon.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Accounts", path: "/accounts" },
    { name: "Bots", path: "/bots" },
    { name: "Education", path: "/education" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Container */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4">
        <div
          className="
            mx-auto max-w-7xl rounded-full
            border border-white/10
            bg-white/6 backdrop-blur-2xl
            shadow-[0_10px_40px_rgba(0,0,0,0.45),0_0_30px_rgba(250,204,21,0.22)]
            py-3
          "
        >
          {/* subtle inner highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />

          <div className="relative flex items-center justify-between px-6">
            {/* Logo */}
            <Link to="/" onClick={scrollToTop} className="whitespace-nowrap flex items-center gap-2">
              <img src={favicon} alt="EazyMarkets" className="w-7 h-7 rounded-md" />
              <span className="text-2xl font-semibold text-text">
                Eazy
                <span className="bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">Markets</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={scrollToTop}
                  className={`
                    group relative text-base font-medium
                    transition-colors duration-200
                    ${isActive(link.path) ? "text-text" : "text-text/70 hover:text-text"}
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute left-0 -bottom-1 h-0.5 w-full rounded-full
                      bg-linear-to-r from-accent-1 to-accent-2
                      transition-all duration-200
                      ${isActive(link.path) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                    `}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="secondary" onClick={scrollToTop} className="text-sm">
                Login
              </Button>

              <Button variant="primary" className="text-sm">
                Open Account
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="
                lg:hidden text-text p-2 rounded-full
                border border-white/12 bg-white/6 backdrop-blur-xl
                shadow-[0_0_18px_rgba(250,204,21,0.14)]
                hover:bg-white/10 transition
              "
              aria-label="Toggle menu"
            >
              <Icon icon={mobileMenuOpen ? "mdi:close" : "mdi:menu"} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden
          transition-opacity duration-300
          ${mobileMenuOpen ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"}
        `}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

        {/* Panel */}
        <div
          className={`
            absolute top-24 left-4 right-4
            bg-white/6 backdrop-blur-2xl
            border border-white/12 rounded-3xl p-6
            shadow-[0_16px_55px_rgba(0,0,0,0.55),0_0_34px_rgba(250,204,21,0.18)]
            transform transition-all duration-300
            ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToTop();
                }}
                className={`
                  text-base font-medium py-2.5 px-4 rounded-xl
                  transition-all duration-200
                  ${
                    isActive(link.path)
                      ? "text-text bg-linear-to-r from-accent-1/15 to-accent-2/15 border border-white/10"
                      : "text-text/75 hover:bg-white/8 hover:text-text border border-transparent hover:border-white/10"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}

            <div className="h-px bg-white/10 my-2" />

            <Button
              variant="secondary"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToTop();
              }}
              className="w-full justify-center text-sm"
            >
              Login
            </Button>

            <Button variant="primary" className="w-full justify-center text-sm">
              Open Account
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
