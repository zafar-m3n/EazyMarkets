import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/Button";
import logo from "@/assets/logo.webp";
import logoDark from "@/assets/logoDark.webp";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [desktopOpenDropdown, setDesktopOpenDropdown] = useState(null);
  const [isHeroMode, setIsHeroMode] = useState(false);
  const [isFooterMode, setIsFooterMode] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Markets",
      path: "/markets",
      children: [
        { name: "Forex", path: "/markets/forex" },
        { name: "Commodities", path: "/markets/commodities" },
        { name: "Indices", path: "/markets/indices" },
        { name: "Stocks", path: "/markets/stocks" },
        { name: "Cryptocurrency", path: "/markets/crypto" },
      ],
    },
    { name: "Accounts", path: "/accounts" },
    { name: "Bots", path: "/bots" },
    {
      name: "Rewards",
      path: "/rewards",
      children: [
        { name: "Promotions", path: "/promotions" },
        { name: "Introducing Broker", path: "/introducing-broker" },
        { name: "Refer A Friend", path: "/refer-a-friend" },
      ],
    },
    {
      name: "Education",
      path: "/education",
      children: [
        { name: "Forex Basics", path: "/education/forex-basics" },
        { name: "AI Trading", path: "/education/ai-trading" },
        { name: "Economic Calendar", path: "/education/economic-calendar" },
        { name: "Fundamental Analysis", path: "/education/fundamental-analysis" },
        { name: "Technical Analysis", path: "/education/technical-analysis" },
      ],
    },
    {
      name: "Company",
      path: "/company",
      children: [
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Legal", path: "/legal" },
      ],
    },
  ];

  const isHomePage = location.pathname === "/";

  const isActive = (path, children = []) => {
    if (location.pathname === path) return true;
    return children.some((child) => location.pathname === child.path);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) {
        setIsHeroMode(false);
      } else {
        setIsHeroMode(window.scrollY < 300);
      }

      const footer = document.querySelector("footer");

      if (!footer) {
        setIsFooterMode(false);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const navbarTopOffset = 16;
      const navbarApproxHeight = 72;
      const navbarBottom = navbarTopOffset + navbarApproxHeight;

      setIsFooterMode(footerRect.top <= navbarBottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isHomePage]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileOpenDropdown(null);
    setDesktopOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileOpenDropdown(null);
    }
  }, [mobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const useInvertedNavbar = mobileMenuOpen || (isHomePage && isHeroMode) || isFooterMode;

  const currentLogo = useInvertedNavbar ? logoDark : logo;
  const navTextClass = useInvertedNavbar ? "text-white" : "text-text";
  const navMutedTextClass = useInvertedNavbar ? "text-white/75 hover:text-white" : "text-text/70 hover:text-text";
  const navBorderClass = useInvertedNavbar ? "border-white/14" : "border-white/10";
  const navBgClass = useInvertedNavbar ? "bg-white/8" : "bg-white/6";
  const navShadowClass = useInvertedNavbar
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
              {navLinks.map((link) => {
                if (link.children) {
                  const parentActive = isActive(link.path, link.children);
                  const isDropdownOpen = desktopOpenDropdown === link.path;

                  return (
                    <div
                      key={link.path}
                      className="relative"
                      onMouseEnter={() => setDesktopOpenDropdown(link.path)}
                      onMouseLeave={() => setDesktopOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        className={`group relative flex items-center gap-1 text-base font-medium transition-colors duration-200 ${
                          parentActive ? navTextClass : navMutedTextClass
                        }`}
                      >
                        <span>{link.name}</span>
                        <Icon
                          icon="mdi:chevron-down"
                          className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                        />

                        <span
                          className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-linear-to-r from-accent-1 to-accent-2 transition-all duration-200 ${
                            parentActive || isDropdownOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </button>

                      <div
                        className={`absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 rounded-2xl border border-black/8 bg-white/95 p-2 text-text backdrop-blur-2xl shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all duration-200 ${
                          isDropdownOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                        }`}
                      >
                        <div className="flex flex-col gap-1">
                          {link.children.map((child) => {
                            const childActive = location.pathname === child.path;

                            return (
                              <Link
                                key={child.path}
                                to={child.path}
                                onClick={() => {
                                  setDesktopOpenDropdown(null);
                                  scrollToTop();
                                }}
                                className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                                  childActive ? "bg-black/6 text-text" : "text-text/75 hover:bg-black/4 hover:text-text"
                                }`}
                              >
                                {child.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
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
                );
              })}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <Button
                variant="secondary"
                onClick={() => {
                  window.open("https://portal.eazymarkets.com/login", "_blank");
                }}
                className="text-sm"
              >
                Login
              </Button>

              <Button
                variant="primary"
                onClick={() => {
                  window.open("https://portal.eazymarkets.com/signup", "_blank");
                }}
                className="text-sm"
              >
                Open Account
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`rounded-full border p-2 backdrop-blur-xl transition lg:hidden ${
                useInvertedNavbar
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
            {navLinks.map((link) => {
              if (link.children) {
                const parentActive = isActive(link.path, link.children);
                const isDropdownOpen = mobileOpenDropdown === link.path;

                return (
                  <div
                    key={link.path}
                    className={`rounded-2xl border transition-all duration-200 ${
                      parentActive || isDropdownOpen
                        ? "border-white/18 bg-linear-to-r from-white/12 to-white/6"
                        : "border-transparent bg-transparent"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setMobileOpenDropdown((prev) => (prev === link.path ? null : link.path))}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-2.5 text-left text-base font-medium transition-all duration-200 ${
                        parentActive ? "text-white" : "text-white/78 hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      <Icon
                        icon="mdi:chevron-down"
                        className={`h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isDropdownOpen ? "max-h-96 opacity-100 pb-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-1 px-2">
                        {link.children.map((child) => {
                          const childActive = location.pathname === child.path;

                          return (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileOpenDropdown(null);
                                scrollToTop();
                              }}
                              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                                childActive
                                  ? "bg-white/12 text-white"
                                  : "text-white/72 hover:bg-white/8 hover:text-white"
                              }`}
                            >
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileOpenDropdown(null);
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
              );
            })}

            <div className="my-2 h-px bg-white/10" />

            <Button
              variant="secondary"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileOpenDropdown(null);
                window.open("https://portal.eazymarkets.com/login", "_blank");
              }}
              className="w-full justify-center text-sm"
            >
              Login
            </Button>

            <Button
              variant="primary"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileOpenDropdown(null);
                window.open("https://portal.eazymarkets.com/signup", "_blank");
              }}
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
