import { Layout } from "@/components/layout/layout";
import { FileText, Droplets, Leaf, Mountain, Navigation, Zap, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const servicesList = [
  {
    id: "quarry",
    icon: FileText,
    title: "Quarry Permit Support",
    description: "Comprehensive advisory for quarry operations from initial prospecting to full operational permitting.",
    features: [
      "Quarry permit search",
      "Documentation preparation",
      "Permit acquisition support",
      "Regulatory follow-up",
    ],
  },
  {
    id: "groundwater",
    icon: Droplets,
    title: "Groundwater and Hydrogeology",
    description: "Scientific exploration and assessment of subterranean water resources for reliable supply.",
    features: [
      "Groundwater exploration",
      "Borehole siting",
      "Hydrogeological studies",
      "Water resource assessment",
    ],
  },
  {
    id: "environment",
    icon: Leaf,
    title: "Environmental Studies",
    description: "Rigorous environmental analysis to ensure project compliance and minimize ecological impact.",
    features: [
      "Environmental Impact Assessment support",
      "Environmental baseline studies",
      "Environmental compliance advisory",
      "Site suitability assessment",
    ],
  },
  {
    id: "geology",
    icon: Mountain,
    title: "Geological and Geophysical Services",
    description: "Detailed mapping and subsurface investigation to characterize geological structures.",
    features: [
      "Geological mapping",
      "Geophysical surveys",
      "Quarry and mining site evaluation",
      "Field data collection",
    ],
  },
  {
    id: "gis",
    icon: Navigation,
    title: "GIS and Spatial Analysis",
    description: "Advanced geographic information systems for precise project planning and land use.",
    features: [
      "GIS mapping",
      "Land-use mapping",
      "Resource mapping",
      "Project location analysis",
    ],
  },
  {
    id: "energy",
    icon: Zap,
    title: "Petroleum and Energy Geoscience Advisory",
    description: "Expert technical advisory for complex petroleum and energy extraction initiatives.",
    features: [
      "Basin analysis",
      "Reservoir characterization advisory",
      "Subsurface interpretation support",
      "Technical review of petroleum projects",
    ],
  },
  {
    id: "documentation",
    icon: BookOpen,
    title: "Technical Documentation",
    description: "Professional preparation of technical reports required by investors and regulatory bodies.",
    features: [
      "Feasibility reports",
      "Regulatory documentation",
      "Technical reports",
      "Project proposal support",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[2px] bg-accent" />
            <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Capabilities</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">Technical Services</h1>
          <p className="text-white/65 max-w-2xl leading-relaxed text-base">
            Specialized consulting across seven core disciplines, combining rigorous field data collection with comprehensive analytical reporting.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {servicesList.map((service) => (
              <div key={service.id} className="flex flex-col bg-background p-8 group hover:bg-muted transition-colors">
                <div className="flex-1">
                  <div className="w-11 h-11 bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-2 tracking-tight">{service.title}</h2>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-[13px] text-foreground/75">
                        <div className="w-1 h-1 rounded-full bg-accent mt-1.5 mr-2.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-7 pt-5 border-t border-border">
                  <Link href={`/contact?service=${service.id}`} className="inline-flex items-center text-xs text-primary font-semibold hover:text-primary/80 uppercase tracking-wide">
                    Inquire <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-[2px] bg-accent" />
                <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Get Started</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">Need a custom technical solution?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our team handles complex, multi-disciplinary projects that require expertise across several service areas.
              </p>
            </div>
            <Link href="/contact" className="inline-flex h-11 items-center justify-center bg-primary px-8 text-sm font-semibold text-white tracking-wide transition-colors hover:bg-primary/90 shrink-0">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
