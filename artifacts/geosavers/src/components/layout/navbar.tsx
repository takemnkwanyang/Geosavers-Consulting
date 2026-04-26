import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full shadow-sm">
        {/* Top accent stripe */}
        <div className="h-[3px] bg-accent w-full" />

        <div className="bg-white border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between">
            {/* Logo */}
            <Link href="/" onClick={close} className="flex items-center gap-3 group">
              <div className="bg-primary text-white px-2.5 py-1.5 flex items-center justify-center">
                <span className="font-bold text-base leading-none tracking-widest">GSI</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[14px] sm:text-[15px] text-foreground tracking-tight">Geosavers International</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-[0.18em] font-medium mt-0.5 hidden sm:block">
                  Technical Consulting
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative pb-0.5",
                    location === link.href
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-accent"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div className="h-5 w-px bg-border mx-1" />

              <div className="hidden lg:flex items-center gap-1.5 text-sm text-muted-foreground">
                <Phone className="h-3.5 w-3.5" />
                <span className="text-[13px]">+237 675 334 971</span>
              </div>

              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center bg-primary px-5 text-[13px] font-semibold text-white tracking-wide transition-colors hover:bg-primary/90"
              >
                Request Consultation
              </Link>
            </nav>

            {/* Mobile: phone icon + hamburger */}
            <div className="md:hidden flex items-center gap-1">
              <a
                href="tel:+237675334971"
                className="flex items-center justify-center w-10 h-10 text-foreground"
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-10 h-10 text-foreground"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer — full overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-secondary/60 backdrop-blur-sm"
            onClick={close}
          />

          {/* Drawer panel */}
          <div className="relative z-10 bg-white ml-auto w-full max-w-sm h-full flex flex-col shadow-xl">
            {/* Drawer header */}
            <div className="h-[3px] bg-accent w-full" />
            <div className="flex items-center justify-between px-5 h-[64px] border-b border-border">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-white px-2.5 py-1.5 flex items-center justify-center">
                  <span className="font-bold text-base leading-none tracking-widest">GSI</span>
                </div>
                <span className="font-bold text-[14px] text-foreground">Menu</span>
              </div>
              <button
                onClick={close}
                className="flex items-center justify-center w-10 h-10 text-foreground"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-5 py-4">
              <div className="divide-y divide-border">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className={cn(
                      "flex items-center justify-between py-4 text-[15px] font-medium transition-colors",
                      location === link.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    <span>{link.label}</span>
                    {location === link.href && (
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    )}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Drawer footer — CTAs */}
            <div className="border-t border-border px-5 py-6 space-y-3">
              <Link
                href="/contact"
                onClick={close}
                className="flex items-center justify-center gap-2 h-13 w-full bg-primary text-sm font-semibold text-white tracking-wide transition-colors hover:bg-primary/90"
                style={{ height: "52px" }}
              >
                Request Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/237675334971"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-border text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                style={{ height: "44px" }}
              >
                <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>

              <div className="flex items-center gap-2 pt-2 justify-center">
                <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                <a href="tel:+237675334971" className="text-sm text-muted-foreground font-medium">
                  +237 675 334 971
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
