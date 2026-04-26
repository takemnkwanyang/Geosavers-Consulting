import { Layout } from "@/components/layout/layout";
import { FileText, Droplets, Leaf, Mountain, Navigation, Zap, BookOpen } from "lucide-react";
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
      "Regulatory follow-up"
    ]
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
      "Water resource assessment"
    ]
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
      "Site suitability assessment"
    ]
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
      "Field data collection"
    ]
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
      "Project location analysis"
    ]
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
      "Technical review of petroleum projects"
    ]
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
      "Project proposal support"
    ]
  }
];

export default function Services() {
  return (
    <Layout>
      <section className="bg-secondary py-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Technical Services</h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-3xl">
            We provide specialized consulting across seven core disciplines, combining rigorous field data collection with comprehensive analytical reporting.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div key={service.id} className="flex flex-col bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-8 flex-1">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-muted/50 border-t border-border mt-auto">
                  <Link href={`/contact?service=${service.id}`} className="text-primary font-semibold hover:text-primary/80 inline-flex items-center text-sm">
                    Inquire about this service <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a custom technical solution?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Our team is equipped to handle complex, multi-disciplinary projects that require expertise across several of our service areas.
          </p>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-base font-semibold text-secondary transition-colors hover:bg-accent/90">
            Discuss Your Project
          </Link>
        </div>
      </section>
    </Layout>
  );
}