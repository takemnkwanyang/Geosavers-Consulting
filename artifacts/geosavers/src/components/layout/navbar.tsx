import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, Phone } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top accent stripe */}
      <div className="h-[3px] bg-accent w-full" />

      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary text-white px-2.5 py-1.5 flex items-center justify-center">
              <span className="font-bold text-base leading-none tracking-widest">GSI</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-[15px] text-foreground tracking-tight">Geosavers International</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.18em] font-medium mt-0.5">
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
              <span className="text-[13px]">+237 6XX XXX XXX</span>
            </div>

            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center bg-primary px-5 text-[13px] font-semibold text-white tracking-wide transition-colors hover:bg-primary/90"
            >
              Request Consultation
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between py-3 text-sm font-medium border-b border-border last:border-0",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
              >
                {link.label}
                <ChevronRight className="h-4 w-4 opacity-40" />
              </Link>
            ))}
            <div className="pt-4 mt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex h-11 items-center justify-center bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Request Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
