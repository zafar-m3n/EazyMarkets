import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/Button";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logoDark.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeroMode, setIsHeroMode] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Accounts", path: "/accounts" },
    { name: "Bots", path: "/bots" },
    { name: "Promotions", path: "/promotions" },
    { name: "Education", path: "/education" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isHomePage = location.pathname === "/";
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) {
        setIsHeroMode(false);
        return;
      }

      setIsHeroMode(window.scrollY < 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const usingLightNavbar = isHomePage && isHeroMode;
  const currentLogo = mobileMenuOpen ? logoDark : usingLightNavbar ? logoDark : logo;
  const navTextClass = usingLightNavbar ? "text-white" : "text-text";
  const navMutedTextClass = usingLightNavbar ? "text-white/75 hover:text-white" : "text-text/70 hover:text-text";
  const navBorderClass = usingLightNavbar ? "border-white/14" : "border-white/10";
  const navBgClass = usingLightNavbar ? "bg-white/8" : "bg-white/6";
  const navShadowClass = usingLightNavbar
    ? "shadow-[0_10px_40px_rgba(0,0,0,0.45),0_0_30px_rgba(255,255,255,0.08)]"
    : "shadow-[0_10px_40px_rgba(0,0,0,0.45),0_0_30px_rgba(250,204,21,0.22)]";

  return (
    <>
      <nav className="fixed left-1/2 top-4 z-50 w-full -translate-x-1/2 px-4">
        <div
          className={`mx-auto max-w-7xl rounded-full border ${navBorderClass} ${navBgClass} py-3 backdrop-blur-2xl transition-all duration-300 ${navShadowClass}`}
        >
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />

          <div className="relative flex items-center justify-between px-6">
            <Link to="/" onClick={scrollToTop} className="flex items-center whitespace-nowrap">
              <img
                src={currentLogo}
                alt="EazyMarkets"
                className="h-10 w-auto object-contain transition-all duration-300 md:h-12"
              />
            </Link>

            <div className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={scrollToTop}
                  className={`group relative text-base font-medium transition-colors duration-200 ${
                    isActive(link.path) ? navTextClass : navMutedTextClass
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-linear-to-r from-accent-1 to-accent-2 transition-all duration-200 ${
                      isActive(link.path) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <Button variant="secondary" onClick={scrollToTop} className="text-sm">
                Login
              </Button>

              <Button variant="primary" className="text-sm">
                Open Account
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`rounded-full border p-2 backdrop-blur-xl transition lg:hidden ${
                usingLightNavbar
                  ? "border-white/20 bg-white/10 text-white hover:bg-white/16"
                  : "border-white/12 bg-white/6 text-text hover:bg-white/10"
              } shadow-[0_0_18px_rgba(250,204,21,0.14)]`}
              aria-label="Toggle menu"
            >
              <Icon icon={mobileMenuOpen ? "mdi:close" : "mdi:menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/78 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />

        <div
          className={`absolute left-4 right-4 top-24 rounded-3xl border border-white/14 bg-[#07111f]/88 p-6 text-white backdrop-blur-2xl shadow-[0_16px_55px_rgba(0,0,0,0.55),0_0_34px_rgba(255,255,255,0.08)] transition-all duration-300 ${
            mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
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
                className={`rounded-xl border px-4 py-2.5 text-base font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "border-white/18 bg-linear-to-r from-white/12 to-white/6 text-white"
                    : "border-transparent text-white/78 hover:border-white/12 hover:bg-white/8 hover:text-white"
                }`}
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

            <Button
              variant="primary"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center text-sm"
            >
              Open Account
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
