import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Container } from "./ui";
import { SERVICES } from "@/lib/site";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", dropdown: true },
  { label: "Solutions", to: "/solutions" },
  { label: "Engineering Teams", to: "/engineering-teams" },
  { label: "Industries", to: "/industries" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServices(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-copper focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-border bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <Container>
          <nav aria-label="Primary" className="flex h-[72px] items-center justify-between gap-4">
            <Logo size={36} />

            <ul className="hidden items-center gap-1 xl:flex">
              {NAV.filter((n) => n.label !== "Contact").map((item) =>
                "dropdown" in item && item.dropdown ? (
                  <li key={item.label} className="relative" onMouseEnter={openServices} onMouseLeave={scheduleClose}>
                    <Link
                      to={item.to}
                      aria-expanded={servicesOpen}
                      className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                        isActive(item.to) ? "text-copper" : "text-muted-foreground hover:text-foreground"
                      }`}
                      onFocus={openServices}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </Link>
                    <div
                      className={`absolute left-1/2 top-[calc(100%+10px)] w-[560px] -translate-x-1/2 origin-top transition-all duration-200 ${
                        servicesOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="panel grid grid-cols-2 gap-1 rounded-2xl p-3 shadow-2xl">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            to="/services/$slug"
                            params={{ slug: s.slug }}
                            className="rounded-xl px-3.5 py-3 transition-colors hover:bg-accent"
                          >
                            <span className="block text-sm font-semibold text-foreground">{s.title}</span>
                            <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                              {s.short}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                        isActive(item.to) ? "text-copper" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link
                to="/contact"
                className="hidden min-h-11 items-center rounded-full bg-copper px-5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-14px_var(--copper)] transition-all hover:brightness-110 sm:inline-flex"
              >
                Let's Talk
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-copper/50 xl:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile navigation */}
      <div
        className={`fixed inset-0 z-40 xl:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-[72px] max-h-[calc(100dvh-72px)] overflow-y-auto border-b border-border bg-background transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <Container className="py-6">
            <ul className="space-y-1">
              {NAV.map((item, i) => (
                <li
                  key={item.label}
                  style={{ transitionDelay: `${open ? i * 35 : 0}ms` }}
                  className={`transition-all duration-300 ${open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"}`}
                >
                  {"dropdown" in item && item.dropdown ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.to}
                          className="flex-1 py-3 font-display text-lg font-semibold text-foreground"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-label={mobileServices ? "Collapse services" : "Expand services"}
                          aria-expanded={mobileServices}
                          onClick={() => setMobileServices((v) => !v)}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>
                      <div
                        className={`grid overflow-hidden transition-all duration-300 ${
                          mobileServices ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <ul className="min-h-0 space-y-1 border-l border-border pl-4">
                          {SERVICES.map((s) => (
                            <li key={s.slug}>
                              <Link
                                to="/services/$slug"
                                params={{ slug: s.slug }}
                                className="block py-2.5 text-sm text-muted-foreground"
                              >
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      className={`block py-3 font-display text-lg font-semibold ${
                        isActive(item.to) ? "text-copper" : "text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-copper px-6 font-semibold text-primary-foreground"
            >
              Let's Talk
            </Link>
          </Container>
        </div>
      </div>
    </>
  );
}
