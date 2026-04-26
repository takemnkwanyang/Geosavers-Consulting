import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Top accent */}
      <div className="h-[3px] bg-accent w-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="bg-primary text-white px-2.5 py-1.5">
                <span className="font-bold text-base leading-none tracking-widest">GSI</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[15px] tracking-tight">Geosavers International</span>
                <span className="text-[10px] text-secondary-foreground/50 uppercase tracking-[0.18em] font-medium mt-0.5">
                  Technical Consulting
                </span>
              </div>
            </Link>
            <p className="text-[13px] text-secondary-foreground/65 leading-relaxed max-w-xs">
              Field-based geoscience, environmental, water, quarry, and regulatory consulting serving Cameroon and Africa. Technical expertise grounded in reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary-foreground/50 mb-5">Navigation</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Our Firm" },
                { href: "/services", label: "Technical Services" },
                { href: "/projects", label: "Project Experience" },
                { href: "/industries", label: "Industries Served" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-secondary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary-foreground/50 mb-5">Capabilities</h3>
            <ul className="space-y-3">
              {[
                "Quarry Permit Support",
                "Groundwater & Hydrogeology",
                "Environmental Studies",
                "Geological & Geophysical",
                "GIS & Spatial Analysis",
                "Technical Documentation",
              ].map((s) => (
                <li key={s} className="text-[13px] text-secondary-foreground/65">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary-foreground/50 mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span className="text-[13px] text-secondary-foreground/65">Bamenda, Cameroon</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span className="text-[13px] text-secondary-foreground/65">+237 675 334 971</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span className="text-[13px] text-secondary-foreground/65">geosavers2014@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-secondary-foreground/40 text-center md:text-left">
            © {currentYear} Geosavers International. All rights reserved.
          </p>
          <p className="text-[12px] text-secondary-foreground/40">
            Geoscience · Environment · Water · Regulatory Compliance
          </p>
        </div>
      </div>
    </footer>
  );
}
