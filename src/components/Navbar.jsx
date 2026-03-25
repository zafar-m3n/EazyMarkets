import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/Button";
import logo from "@/assets/logo.png";

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
      <nav className="fixed top-4 left-1/2 z-50 w-full -translate-x-1/2 px-4">
        <div
          className="
            mx-auto max-w-7xl rounded-full
            border border-white/10
            bg-white/6 backdrop-blur-2xl
            py-3
            shadow-[0_10px_40px_rgba(0,0,0,0.45),0_0_30px_rgba(250,204,21,0.22)]
          "
        >
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />

          <div className="relative flex items-center justify-between px-6">
            {/* Logo */}
            <Link to="/" onClick={scrollToTop} className="flex items-center whitespace-nowrap">
              <img src={logo} alt="EazyMarkets" className="h-10 md:h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-6 lg:flex">
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
            <div className="hidden items-center gap-3 lg:flex">
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
                rounded-full border border-white/12 bg-white/6 p-2 text-text
                backdrop-blur-xl transition hover:bg-white/10
                shadow-[0_0_18px_rgba(250,204,21,0.14)]
                lg:hidden
              "
              aria-label="Toggle menu"
            >
              <Icon icon={mobileMenuOpen ? "mdi:close" : "mdi:menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-40 transition-opacity duration-300 lg:hidden
          ${mobileMenuOpen ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"}
        `}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

        <div
          className={`
            absolute left-4 right-4 top-24
            rounded-3xl border border-white/12
            bg-white/6 p-6 backdrop-blur-2xl
            shadow-[0_16px_55px_rgba(0,0,0,0.55),0_0_34px_rgba(250,204,21,0.18)]
            transition-all duration-300
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
                  rounded-xl border py-2.5 px-4 text-base font-medium
                  transition-all duration-200
                  ${
                    isActive(link.path)
                      ? "border-white/10 bg-linear-to-r from-accent-1/15 to-accent-2/15 text-text"
                      : "border-transparent text-text/75 hover:border-white/10 hover:bg-white/8 hover:text-text"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}

            <div className="my-2 h-px bg-white/10" />

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
