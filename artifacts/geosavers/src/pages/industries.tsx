import { Layout } from "@/components/layout/layout";
import { Landmark, Building2, Pickaxe, Gem, HeartHandshake, Globe2, Briefcase, Map, Droplets, HardHat, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useSeo } from "@/lib/useSeo";

const industriesList = [
  {
    icon: Landmark,
    name: "Government Agencies",
    desc: "Independent technical review, mapping, and regulatory compliance data to support public sector initiatives and land management.",
  },
  {
    icon: Building2,
    name: "Construction Companies",
    desc: "Geotechnical site assessments, material sourcing studies, and environmental compliance documentation for major builds.",
  },
  {
    icon: Pickaxe,
    name: "Quarry Operators",
    desc: "End-to-end support for quarrying operations, from initial geological surveys to navigating the complex permit acquisition process.",
  },
  {
    icon: Gem,
    name: "Mining Companies",
    desc: "Geological mapping, geophysical surveys, and environmental baseline studies for exploration and active mining phases.",
  },
  {
    icon: HeartHandshake,
    name: "NGOs",
    desc: "Technical support for community development projects, particularly in rural water supply and environmental conservation.",
  },
  {
    icon: Globe2,
    name: "Development Partners",
    desc: "Rigorous feasibility studies and impact assessments required for internationally funded infrastructure projects.",
  },
  {
    icon: Briefcase,
    name: "Private Investors",
    desc: "Due diligence and technical viability assessments for individuals and groups investing in natural resources.",
  },
  {
    icon: Map,
    name: "Landowners",
    desc: "Resource evaluation and site suitability analysis to maximize the value and safe utilization of private land.",
  },
  {
    icon: Droplets,
    name: "Water Supply Projects",
    desc: "Hydrogeological consulting to locate sustainable groundwater sources for municipal, industrial, or agricultural use.",
  },
  {
    icon: HardHat,
    name: "Infrastructure Developers",
    desc: "Comprehensive environmental and geological baseline data to de-risk large-scale infrastructure planning.",
  },
];

export default function Industries() {
  useSeo({
    title: "Industries We Serve — Mining, Construction, Water & NGOs | Geosavers International",
    description:
      "We serve quarry operators, construction companies, mining firms, government agencies, NGOs, development partners, and private investors across Cameroon and Africa.",
    canonicalPath: "/industries",
  });

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[2px] bg-accent" />
            <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Clientele</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">Industries We Serve</h1>
          <p className="text-white/65 max-w-2xl leading-relaxed text-base">
            Our technical expertise spans multiple sectors, providing critical data and advisory services to those who build, extract, govern, and invest.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border border border-border">
            {industriesList.map((industry, i) => (
              <div key={i} className="bg-background p-7 group hover:bg-muted transition-colors">
                <div className="w-11 h-11 bg-muted text-foreground flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors border border-border group-hover:border-primary">
                  <industry.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 tracking-tight">{industry.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.desc}
                </p>
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
              <h2 className="text-2xl font-bold text-foreground mb-1 tracking-tight">Is your sector not listed?</h2>
              <p className="text-muted-foreground text-sm">We take on multi-disciplinary engagements. Get in touch to discuss your specific needs.</p>
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
