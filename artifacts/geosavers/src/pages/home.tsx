import { Link } from "wouter";
import { ArrowRight, ChevronRight, CheckCircle2, MapPin, FileText, Droplets, Leaf, Mountain, Navigation, Zap, BookOpen } from "lucide-react";
import { Layout } from "@/components/layout/layout";

const services = [
  {
    icon: FileText,
    title: "Quarry Permit Support",
    desc: "Permit search, documentation preparation, acquisition support, and regulatory follow-up.",
  },
  {
    icon: Droplets,
    title: "Groundwater & Hydrogeology",
    desc: "Groundwater exploration, borehole siting, hydrogeological studies, and water resource assessment.",
  },
  {
    icon: Leaf,
    title: "Environmental Studies",
    desc: "Environmental Impact Assessment support, baseline studies, and compliance advisory.",
  },
  {
    icon: Mountain,
    title: "Geological & Geophysical",
    desc: "Geological mapping, geophysical surveys, site evaluation, and field data collection.",
  },
  {
    icon: Navigation,
    title: "GIS & Spatial Analysis",
    desc: "GIS mapping, land-use mapping, resource mapping, and project location analysis.",
  },
  {
    icon: Zap,
    title: "Petroleum Geoscience Advisory",
    desc: "Basin analysis, reservoir characterization, and subsurface interpretation support.",
  },
  {
    icon: BookOpen,
    title: "Technical Documentation",
    desc: "Feasibility reports, regulatory documentation, and project proposal support.",
  },
];

const processSteps = [
  { num: "01", label: "Consultation" },
  { num: "02", label: "Site Visit" },
  { num: "03", label: "Field Data Collection" },
  { num: "04", label: "Technical Analysis" },
  { num: "05", label: "Report Preparation" },
  { num: "06", label: "Submission & Client Support" },
];

const industries = [
  "Government agencies",
  "Construction companies",
  "Quarry operators",
  "Mining companies",
  "NGOs and development partners",
  "Private investors and landowners",
  "Water supply projects",
  "Infrastructure developers",
];

const projects = [
  "Quarry permit documentation support",
  "Groundwater exploration and borehole siting",
  "Environmental baseline study",
  "Geological and geophysical site assessment",
  "GIS mapping and site suitability analysis",
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=2070&auto=format&fit=crop"
            alt="Geological field work"
            className="w-full h-full object-cover opacity-25 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-accent" />
              <span className="text-accent text-xs uppercase tracking-[0.2em] font-semibold">
                Cameroon and Africa
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-7 tracking-tight">
              Technical Consulting for Natural Resources, Water, Environment, and Regulatory Compliance
            </h1>

            <p className="text-base md:text-lg text-white/70 mb-10 max-w-2xl leading-relaxed font-normal">
              We support quarry permits, groundwater exploration, environmental studies, geological projects, and technical documentation through field-based expertise and professional advisory support.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center bg-accent px-8 text-sm font-semibold text-secondary tracking-wide transition-colors hover:bg-accent/90"
              >
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center border border-white/25 px-8 text-sm font-semibold text-white tracking-wide transition-colors hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/30 to-transparent z-10" />
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-[2px] bg-accent" />
                <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">What We Do</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Core Technical Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Specialized expertise across geoscience, environment, water, and regulatory compliance — delivered from the field.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center text-sm text-primary font-semibold hover:text-primary/80 shrink-0">
              All services <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.slice(0, 4).map((service, index) => (
              <div key={index} className="bg-background p-8 group hover:bg-muted transition-colors">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mt-px">
            {services.slice(4).map((service, index) => (
              <div key={index} className="bg-background p-8 group hover:bg-muted transition-colors">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-[2px] bg-accent" />
              <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Methodology</span>
              <div className="w-6 h-[2px] bg-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Approach</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              A systematic process built on field data, technical rigor, and transparent reporting.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 flex items-center justify-center border border-white/20 bg-white/5 mb-4">
                  <span className="text-accent font-bold text-lg font-mono">{step.num}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-[-50%] h-px bg-white/15 z-0" />
                )}
                <h4 className="text-white/90 text-xs font-semibold uppercase tracking-wide leading-tight">{step.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve + Projects */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Industries */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-[2px] bg-accent" />
                <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Clientele</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Who We Serve</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                We provide independent, rigorous consulting to organizations operating in demanding environments across Cameroon and the wider African continent.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {industries.map((industry, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{industry}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/industries" className="inline-flex items-center text-sm text-primary font-semibold hover:text-primary/80">
                  View all sectors <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Project Examples */}
            <div className="bg-secondary text-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-5 translate-x-8 -translate-y-4">
                <MapPin className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-[2px] bg-accent" />
                  <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Portfolio</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Field Experience</h2>
                <p className="text-white/60 mb-8 leading-relaxed text-sm">
                  A selection of technical engagements demonstrating execution capability across multiple disciplines.
                </p>
                <ul className="space-y-4 mb-8">
                  {projects.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <span className="text-accent font-mono text-xs font-bold mt-0.5 shrink-0">0{i + 1}</span>
                      <span className="text-white/85 text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/projects" className="inline-flex items-center text-accent text-sm font-semibold hover:text-accent/80">
                  View full project portfolio <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1">Ready to discuss your project?</h2>
              <p className="text-muted-foreground text-sm">Our technical team is available for initial consultations — no obligation.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center bg-primary px-8 text-sm font-semibold text-white tracking-wide transition-colors hover:bg-primary/90 shrink-0"
            >
              Contact Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
