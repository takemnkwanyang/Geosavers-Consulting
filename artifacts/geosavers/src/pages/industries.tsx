import { Layout } from "@/components/layout/layout";
import { Landmark, Building2, Pickaxe, Gem, HeartHandshake, Globe2, Briefcase, Map, Droplets, HardHat } from "lucide-react";

const industriesList = [
  {
    icon: Landmark,
    name: "Government Agencies",
    desc: "Providing independent technical review, mapping, and regulatory compliance data to support public sector initiatives and land management."
  },
  {
    icon: Building2,
    name: "Construction Companies",
    desc: "Delivering geotechnical site assessments, material sourcing studies, and environmental compliance documentation for major builds."
  },
  {
    icon: Pickaxe,
    name: "Quarry Operators",
    desc: "End-to-end support for quarrying operations, from initial geological surveys to navigating the complex permit acquisition process."
  },
  {
    icon: Gem,
    name: "Mining Companies",
    desc: "Geological mapping, geophysical surveys, and environmental baseline studies for exploration and active mining phases."
  },
  {
    icon: HeartHandshake,
    name: "NGOs",
    desc: "Technical support for community development projects, particularly in rural water supply and environmental conservation."
  },
  {
    icon: Globe2,
    name: "Development Partners",
    desc: "Rigorous feasibility studies and impact assessments required for internationally funded infrastructure projects."
  },
  {
    icon: Briefcase,
    name: "Private Investors",
    desc: "Due diligence and technical viability assessments for individuals and groups investing in natural resources."
  },
  {
    icon: Map,
    name: "Landowners",
    desc: "Resource evaluation and site suitability analysis to maximize the value and safe utilization of private land."
  },
  {
    icon: Droplets,
    name: "Water Supply Projects",
    desc: "Hydrogeological consulting to locate sustainable groundwater sources for municipal, industrial, or agricultural use."
  },
  {
    icon: HardHat,
    name: "Infrastructure Developers",
    desc: "Comprehensive environmental and geological baseline data to de-risk large-scale infrastructure planning."
  }
];

export default function Industries() {
  return (
    <Layout>
      <section className="bg-secondary py-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Industries We Serve</h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80">
            Our technical expertise spans multiple sectors, providing critical data and advisory services to those who build, extract, govern, and invest.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industriesList.map((industry, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-muted text-foreground rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <industry.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{industry.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}