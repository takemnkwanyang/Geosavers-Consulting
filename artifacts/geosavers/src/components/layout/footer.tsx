import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group inline-block">
              <div className="bg-primary text-primary-foreground p-2 rounded-sm group-hover:bg-primary/90 transition-colors">
                <span className="font-bold text-xl leading-none">GSI</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight">Geosavers</span>
                <span className="text-xs text-secondary-foreground/70 leading-tight uppercase tracking-wider font-semibold">International</span>
              </div>
            </Link>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed max-w-xs">
              Field-based geoscience, environmental, water, quarry, and regulatory consulting firm serving Cameroon and Africa. Technical expertise grounded in reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
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
                    className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Core Capabilities</h3>
            <ul className="space-y-3">
              <li className="text-sm text-secondary-foreground/80">Quarry Permit Support</li>
              <li className="text-sm text-secondary-foreground/80">Groundwater & Hydrogeology</li>
              <li className="text-sm text-secondary-foreground/80">Environmental Studies</li>
              <li className="text-sm text-secondary-foreground/80">Geological & Geophysical</li>
              <li className="text-sm text-secondary-foreground/80">GIS & Spatial Analysis</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-secondary-foreground/80">
                  Yaoundé, Cameroon
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  +237 6XX XXX XXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  contact@geosavers.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60 text-center md:text-left">
            © {currentYear} Geosavers International. All rights reserved.
          </p>
          <p className="text-sm text-secondary-foreground/60">
            Technical Consulting for Natural Resources
          </p>
        </div>
      </div>
    </footer>
  );
}