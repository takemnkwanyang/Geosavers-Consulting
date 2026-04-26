import { Layout } from "@/components/layout/layout";
import { MapPin, FileCheck, Search, Sprout, BarChart, HardHat } from "lucide-react";

const projects = [
  {
    icon: HardHat,
    title: "Quarry Permit Documentation Support",
    category: "Regulatory & Compliance",
    description: "Complete preparation and assembly of technical documentation required for the acquisition of a commercial quarry permit, including geological assessments, site plans, and administrative liaising with local mining authorities."
  },
  {
    icon: Search,
    title: "Groundwater Exploration and Borehole Siting",
    category: "Hydrogeology",
    description: "Conducted comprehensive geophysical surveys (Vertical Electrical Sounding) to identify optimal drilling locations for community and industrial water supply projects, ensuring high-yield and sustainable extraction."
  },
  {
    icon: Sprout,
    title: "Environmental Baseline Study",
    category: "Environmental Consulting",
    description: "Executed field surveys to establish pre-development conditions for flora, fauna, soil, and water quality ahead of a major infrastructure project, ensuring compliance with national environmental protection laws."
  },
  {
    icon: MapPin,
    title: "Geological and Geophysical Site Assessment",
    category: "Geoscience",
    description: "Detailed subsurface investigation using geological mapping and geophysical methods to characterize bedrock depth, structural faulting, and rock quality for a proposed mining site."
  },
  {
    icon: BarChart,
    title: "GIS Mapping and Site Suitability Analysis",
    category: "Spatial Analysis",
    description: "Developed comprehensive spatial models integrating topography, hydrology, existing infrastructure, and land-use data to determine the most viable locations for a large-scale agricultural development."
  }
];

export default function Projects() {
  return (
    <Layout>
      <section className="bg-secondary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Project Experience</h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80">
            A selection of technical engagements demonstrating our capability to execute field-based research and deliver authoritative reporting.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="shrink-0 flex items-start justify-center md:justify-start">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center border border-border/50 text-primary">
                    <project.icon className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    {project.category}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">{project.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}