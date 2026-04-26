import { Link } from "wouter";
import {
  ArrowRight, ChevronRight, CheckCircle2, MapPin,
  FileText, Droplets, Leaf, Mountain, Navigation, Zap, BookOpen,
  ClipboardList, Drill, TreePine, ScanLine, ScrollText
} from "lucide-react";
import { Layout } from "@/components/layout/layout";
import { useSeo } from "@/lib/useSeo";

const heroTags = [
  { icon: ClipboardList, label: "Quarry Permits" },
  { icon: Drill,         label: "Groundwater Exploration" },
  { icon: TreePine,      label: "Environmental Studies" },
  { icon: ScanLine,      label: "Geological Surveys" },
  { icon: ScrollText,    label: "Regulatory Documentation" },
];

const focusAreas = [
  {
    icon: ClipboardList,
    title: "Quarry Permit Support",
    blurb: "We guide quarry operators and construction firms through permit search, documentation, and regulatory approval — start to finish.",
    items: ["Permit search & classification", "Technical dossier preparation", "Submission & authority follow-up"],
    href: "/services",
  },
  {
    icon: Drill,
    title: "Groundwater Exploration",
    blurb: "We locate and assess underground water resources for infrastructure, agriculture, and water supply projects using proven geophysical methods.",
    items: ["Hydrogeological surveys", "Borehole siting (VES method)", "Water resource assessment"],
    href: "/services",
  },
  {
    icon: TreePine,
    title: "Environmental Studies",
    blurb: "We produce the environmental studies and compliance reports required before any project can legally proceed.",
    items: ["Environmental Impact Assessment support", "Baseline surveys (flora, fauna, soil, water)", "Site suitability assessment"],
    href: "/services",
  },
  {
    icon: ScanLine,
    title: "Geological Surveys",
    blurb: "We map surface and subsurface geology for mining, quarrying, and construction projects that require precise site characterization.",
    items: ["Geological & geophysical mapping", "Quarry and mining site evaluation", "Field data collection & analysis"],
    href: "/services",
  },
  {
    icon: ScrollText,
    title: "Regulatory Documentation",
    blurb: "We produce the technical reports and feasibility documents that investors, regulators, and development partners require.",
    items: ["Feasibility & technical reports", "Regulatory submissions", "Project proposal preparation"],
    href: "/services",
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
  useSeo({
    title: "Quarry Permits, Groundwater & Environmental Consulting — Cameroon | GeoSavers",
    description:
      "Field-based geoscience and environmental consulting for quarry permits, groundwater exploration, environmental studies, geological surveys, and regulatory documentation across Cameroon and Africa.",
    canonicalPath: "/",
  });

  return (
    <Layout>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[84vh] flex items-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=2070&auto=format&fit=crop"
            alt="Geological field work"
            className="w-full h-full object-cover opacity-25 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/55" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="max-w-3xl">
            {/* Region tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-accent" />
              <span className="text-accent text-[11px] uppercase tracking-[0.22em] font-semibold">
                Cameroon and Africa
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.08] mb-6 tracking-tight">
              Field-Based Consulting for Quarry Permits, Groundwater, Environment, and Regulatory Compliance
            </h1>

            <p className="text-[15px] text-white/65 mb-8 max-w-2xl leading-relaxed">
              GeoSavers delivers technical consulting grounded in real field data — not desktop estimates. We work with quarry operators, infrastructure developers, government agencies, and mining companies across Cameroon and Africa.
            </p>

            {/* Service chips — immediately scannable */}
            <div className="flex flex-wrap gap-2 mb-10">
              {heroTags.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/8 border border-white/18 text-white/85 text-[12px] font-medium tracking-wide"
                >
                  <Icon className="w-3.5 h-3.5 text-accent shrink-0" />
                  {label}
                </span>
              ))}
            </div>

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
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do — At a Glance ────────────────────────────────── */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-5 border-b border-border flex items-center gap-3">
            <div className="w-6 h-[2px] bg-accent shrink-0" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-accent">What We Help With</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-border">
            {focusAreas.map((area, i) => (
              <div key={i} className="py-8 px-6 group">
                <div className="w-9 h-9 bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <area.icon className="w-4 h-4" />
                </div>
                <h3 className="text-[13px] font-bold text-foreground mb-2 leading-snug">{area.title}</h3>
                <p className="text-[12px] text-muted-foreground leading-relaxed mb-3">{area.blurb}</p>
                <ul className="space-y-1">
                  {area.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-1.5 text-[11.5px] text-muted-foreground/80">
                      <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-[2px] bg-accent" />
              <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Methodology</span>
              <div className="w-6 h-[2px] bg-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">How We Work</h2>
            <p className="text-white/55 leading-relaxed text-sm">
              A systematic process built on field data, technical rigor, and transparent reporting at every stage.
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
                <h4 className="text-white/85 text-[11px] font-semibold uppercase tracking-wide leading-tight">{step.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve + Projects ──────────────────────────────────── */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Industries */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-[2px] bg-accent" />
                <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Clientele</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Who We Serve</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                We provide independent, rigorous consulting to organizations operating in demanding environments across Cameroon and Africa.
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
                <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Field Experience</h2>
                <p className="text-white/55 mb-8 leading-relaxed text-sm">
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

      {/* ── CTA Banner ──────────────────────────────────────────────── */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1 tracking-tight">Ready to discuss your project?</h2>
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
