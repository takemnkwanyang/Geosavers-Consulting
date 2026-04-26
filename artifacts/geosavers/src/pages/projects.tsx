import { Layout } from "@/components/layout/layout";
import { MapPin, FileCheck, Search, Sprout, BarChart, HardHat, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useSeo } from "@/lib/useSeo";

const projects = [
  {
    icon: HardHat,
    title: "Quarry Permit Documentation Support",
    category: "Regulatory & Compliance",
    description:
      "Complete preparation and assembly of technical documentation required for the acquisition of a commercial quarry permit, including geological assessments, site plans, and administrative liaising with local mining authorities.",
  },
  {
    icon: Search,
    title: "Groundwater Exploration and Borehole Siting",
    category: "Hydrogeology",
    description:
      "Conducted comprehensive geophysical surveys using Vertical Electrical Sounding to identify optimal drilling locations for community and industrial water supply projects, ensuring high-yield and sustainable extraction.",
  },
  {
    icon: Sprout,
    title: "Environmental Baseline Study",
    category: "Environmental Consulting",
    description:
      "Executed field surveys to establish pre-development conditions for flora, fauna, soil, and water quality ahead of a major infrastructure project, ensuring compliance with national environmental protection laws.",
  },
  {
    icon: MapPin,
    title: "Geological and Geophysical Site Assessment",
    category: "Geoscience",
    description:
      "Detailed subsurface investigation using geological mapping and geophysical methods to characterize bedrock depth, structural faulting, and rock quality for a proposed mining site.",
  },
  {
    icon: BarChart,
    title: "GIS Mapping and Site Suitability Analysis",
    category: "Spatial Analysis",
    description:
      "Developed comprehensive spatial models integrating topography, hydrology, existing infrastructure, and land-use data to determine the most viable locations for a large-scale agricultural development.",
  },
];

export default function Projects() {
  useSeo({
    title: "Project Portfolio — Field Consulting Experience | GeoSavers",
    description:
      "Selected field engagements by GeoSavers: quarry permit documentation, groundwater borehole siting, environmental baseline studies, geological mapping, and GIS analysis across Cameroon.",
    canonicalPath: "/projects",
  });

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[2px] bg-accent" />
            <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">Project Experience</h1>
          <p className="text-white/65 max-w-2xl leading-relaxed text-base">
            A selection of technical engagements demonstrating our capability to execute field-based research and deliver authoritative reporting.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-px bg-border border border-border">
            {projects.map((project, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-0 bg-background hover:bg-muted transition-colors group">
                {/* Number column */}
                <div className="md:w-20 shrink-0 flex items-start justify-center md:justify-start md:pt-8 pt-8 px-8 md:px-0 md:pl-8">
                  <span className="text-3xl font-bold text-border font-mono">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Icon + Content */}
                <div className="flex-1 p-8 pl-4 md:pl-0 md:p-10 md:pl-2 flex flex-col md:flex-row items-start gap-6 md:gap-8">
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-2.5 py-0.5 bg-accent/20 text-foreground/70 text-[10px] font-bold uppercase tracking-[0.15em] mb-3">
                      {project.category}
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3 tracking-tight">{project.title}</h2>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1 tracking-tight">Have a project to discuss?</h2>
              <p className="text-muted-foreground text-sm">Reach out for an initial technical consultation.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center bg-primary px-8 text-sm font-semibold text-white tracking-wide transition-colors hover:bg-primary/90 shrink-0"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
