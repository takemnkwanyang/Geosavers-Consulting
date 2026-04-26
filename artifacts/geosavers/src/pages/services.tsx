import { Layout } from "@/components/layout/layout";
import {
  FileText, Droplets, Leaf, Mountain, Navigation, Zap, BookOpen,
  ArrowRight, ClipboardCheck, ScrollText
} from "lucide-react";
import { Link } from "wouter";
import { useSeo } from "@/lib/useSeo";

const categories = [
  {
    id: "regulatory",
    label: "Regulatory & Permitting",
    tagline: "Permits, documentation, and regulatory submissions — handled from start to finish.",
    services: [
      {
        id: "quarry",
        icon: ClipboardCheck,
        title: "Quarry Permit Support",
        overview:
          "Obtaining a quarry permit in Cameroon involves navigating multiple regulatory bodies, technical requirements, and administrative procedures. We guide operators through every step, from identifying the correct permit category to the final approval — reducing delays and ensuring the dossier meets all legal and technical standards.",
        includes: [
          {
            name: "Permit Search and Classification",
            detail:
              "Determine which permit category applies to your site, cross-referenced with current mining and quarry regulations.",
          },
          {
            name: "Technical Dossier Preparation",
            detail:
              "Compile and format all required documents — geological reports, site plans, maps, ownership records — to the standards required by the competent authority.",
          },
          {
            name: "Permit Acquisition Support",
            detail:
              "Accompany and represent the client through administrative processes, coordinating with relevant ministries and departments.",
          },
          {
            name: "Regulatory Follow-up",
            detail:
              "Track the status of submissions and respond to requests for additional information until a decision is issued.",
          },
        ],
        deliverable: "Complete permit dossier + administrative follow-up report",
        whoFor: "Quarry operators, construction companies, mining investors",
      },
      {
        id: "documentation",
        icon: ScrollText,
        title: "Technical Documentation",
        overview:
          "Many projects stall not because of poor execution, but because the supporting documentation does not meet the standards required by regulators, financiers, or development partners. We produce clear, technically sound reports that withstand scrutiny and move projects forward.",
        includes: [
          {
            name: "Feasibility Reports",
            detail:
              "Structured technical and economic feasibility studies for resource extraction, water, or infrastructure projects.",
          },
          {
            name: "Regulatory Documentation",
            detail:
              "Preparation of all technical annexes and supporting files needed for permit applications and ministry submissions.",
          },
          {
            name: "Technical Project Reports",
            detail:
              "Field-data-backed reports summarizing investigation findings, methodology, and recommendations in a professional format.",
          },
          {
            name: "Project Proposal Support",
            detail:
              "Technical write-up and data packaging for grant applications, investor presentations, or development partner submissions.",
          },
        ],
        deliverable: "Formatted technical reports ready for submission or presentation",
        whoFor: "NGOs, development partners, private investors, government agencies",
      },
    ],
  },
  {
    id: "water",
    label: "Water Resources & Hydrogeology",
    tagline: "Locate, assess, and document groundwater resources with field-verified geophysical methods.",
    services: [
      {
        id: "groundwater",
        icon: Droplets,
        title: "Groundwater and Hydrogeology",
        overview:
          "Access to reliable groundwater is critical for communities, agriculture, and industry — yet locating productive aquifers requires rigorous scientific investigation. We use geophysical techniques including Vertical Electrical Sounding (VES) to identify the best drilling locations, reducing the risk of dry or low-yield boreholes and ensuring long-term water security.",
        includes: [
          {
            name: "Hydrogeological Desk Study",
            detail:
              "Review of regional geology, existing borehole records, and hydrogeological maps to build a conceptual model before fieldwork begins.",
          },
          {
            name: "Geophysical Survey (VES/ERT)",
            detail:
              "Vertical Electrical Sounding and Electrical Resistivity Tomography surveys to image the subsurface and identify productive zones.",
          },
          {
            name: "Borehole Siting",
            detail:
              "Selection and staking of optimal drilling locations based on geophysical results, minimizing risk and maximizing expected yield.",
          },
          {
            name: "Water Resource Assessment Report",
            detail:
              "Comprehensive report detailing findings, recommended drilling depths, expected yield, and water quality considerations.",
          },
        ],
        deliverable: "Geophysical survey data + borehole siting report with drilling recommendations",
        whoFor: "Water supply projects, municipalities, NGOs, agricultural developers, infrastructure investors",
      },
    ],
  },
  {
    id: "environmental",
    label: "Environmental Consulting",
    tagline: "The environmental studies required for project approval, regulatory compliance, and responsible development.",
    services: [
      {
        id: "environment",
        icon: Leaf,
        title: "Environmental Studies",
        overview:
          "Any project that modifies land use, water resources, or natural habitats in Cameroon is legally required to demonstrate environmental compliance. We conduct field-based environmental assessments that meet national regulatory standards and the expectations of international development partners — providing the documentation projects need to proceed.",
        includes: [
          {
            name: "Environmental Impact Assessment (EIA) Support",
            detail:
              "Structured support for the EIA process: scoping, field surveys, impact prediction, and report preparation in line with applicable regulations.",
          },
          {
            name: "Environmental Baseline Study",
            detail:
              "Field surveys of existing environmental conditions — flora, fauna, soil quality, surface water, air quality — before a project begins.",
          },
          {
            name: "Environmental Compliance Advisory",
            detail:
              "Advice on how to structure project activities to meet environmental conditions attached to permits and approvals.",
          },
          {
            name: "Site Suitability Assessment",
            detail:
              "Evaluation of whether a proposed site is environmentally appropriate for its intended use, with identification of constraints and mitigation measures.",
          },
        ],
        deliverable: "Environmental baseline report or EIA support document ready for regulatory submission",
        whoFor: "Mining companies, infrastructure developers, quarry operators, NGOs, government agencies",
      },
    ],
  },
  {
    id: "geoscience",
    label: "Geoscience & Spatial Analysis",
    tagline: "Subsurface characterization, geological mapping, GIS analysis, and petroleum geoscience advisory.",
    services: [
      {
        id: "geology",
        icon: Mountain,
        title: "Geological and Geophysical Services",
        overview:
          "Sound decisions about resource extraction, construction, or land use depend on knowing what lies beneath the surface. We characterize subsurface geology through direct mapping and indirect geophysical methods, delivering the site understanding that engineers, geologists, and investors need before committing resources.",
        includes: [
          {
            name: "Geological Mapping",
            detail:
              "Field-based mapping of surface geology, rock types, structural features, and formations relevant to the project.",
          },
          {
            name: "Geophysical Surveys",
            detail:
              "Application of resistivity, seismic refraction, or magnetic methods to image subsurface conditions without excavation.",
          },
          {
            name: "Quarry and Mining Site Evaluation",
            detail:
              "Assessment of rock quality, deposit extent, overburden characteristics, and extraction viability for quarry and mining sites.",
          },
          {
            name: "Field Data Collection and Logging",
            detail:
              "Systematic collection, documentation, and digitization of field observations, samples, and measurements.",
          },
        ],
        deliverable: "Geological map, geophysical profiles, and site characterization report",
        whoFor: "Mining and quarry companies, construction firms, land developers",
      },
      {
        id: "gis",
        icon: Navigation,
        title: "GIS and Spatial Analysis",
        overview:
          "Spatial data is fundamental to resource planning, land management, and project siting decisions. We build and analyse GIS datasets that integrate multiple data layers — topography, hydrology, geology, infrastructure, land use — giving clients a reliable spatial foundation for planning and regulatory submissions.",
        includes: [
          {
            name: "GIS Database Development",
            detail:
              "Creation and management of project-specific GIS databases combining field data, satellite imagery, and third-party datasets.",
          },
          {
            name: "Land-Use and Resource Mapping",
            detail:
              "Mapping of current land use, resource distribution, and sensitive areas to support planning and permitting.",
          },
          {
            name: "Site Suitability and Constraint Analysis",
            detail:
              "Multi-criteria spatial analysis to identify optimal locations and flag environmental or logistical constraints.",
          },
          {
            name: "Project Location Analysis and Maps",
            detail:
              "Production of professional cartographic outputs for inclusion in technical reports and permit dossiers.",
          },
        ],
        deliverable: "GIS project files + printed/digital maps for reports and submissions",
        whoFor: "Government agencies, project developers, agricultural and infrastructure investors",
      },
      {
        id: "energy",
        icon: Zap,
        title: "Petroleum and Energy Geoscience Advisory",
        overview:
          "Petroleum and energy projects require specialized geoscience interpretation that goes beyond standard field consulting. We provide technical advisory support on subsurface data interpretation, reservoir characterization, and project review — serving as an independent technical voice for companies operating in the Central African sedimentary basins.",
        includes: [
          {
            name: "Basin and Play Analysis",
            detail:
              "Review of basin stratigraphy, structural style, and petroleum system elements to evaluate exploration potential.",
          },
          {
            name: "Reservoir Characterization Advisory",
            detail:
              "Technical review and advisory on reservoir properties, connectivity, and fluid distribution based on available well and seismic data.",
          },
          {
            name: "Subsurface Interpretation Support",
            detail:
              "Support for seismic interpretation, structural mapping, and subsurface model development.",
          },
          {
            name: "Independent Technical Review",
            detail:
              "Third-party review of petroleum geoscience reports, prospect inventories, and resource estimates for internal quality control or investor due diligence.",
          },
        ],
        deliverable: "Technical advisory notes, review reports, or independent assessment memoranda",
        whoFor: "Petroleum companies, energy investors, development finance institutions",
      },
    ],
  },
];

export default function Services() {
  useSeo({
    title: "Technical Services — Quarry, Groundwater, Environment & Geology | Geosavers International",
    description:
      "Explore our consulting services: quarry permit support, groundwater hydrogeology, environmental impact assessment, geological surveys, GIS spatial analysis, and regulatory documentation in Cameroon.",
    canonicalPath: "/services",
  });

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[2px] bg-accent" />
            <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Capabilities</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">Technical Services</h1>
          <p className="text-white/65 max-w-2xl leading-relaxed text-base">
            Seven core disciplines organized into four practice areas — each grounded in field execution and structured technical reporting.
          </p>

          {/* Quick-jump nav */}
          <div className="flex flex-wrap gap-3 mt-8">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center px-4 py-2 bg-white/8 border border-white/15 text-white/80 text-[12px] font-medium tracking-wide hover:bg-white/14 transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="scroll-mt-20">
          {/* Category header */}
          <div className="bg-muted border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="flex items-start gap-4">
                <div className="w-1 self-stretch bg-accent shrink-0" />
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-1">
                    {category.label}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{category.tagline}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services within this category */}
          <div className="bg-background divide-y divide-border border-b border-border">
            {category.services.map((service) => (
              <div key={service.id} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

                  {/* Left — title + overview + meta */}
                  <div className="lg:col-span-4">
                    <div className="w-11 h-11 bg-primary/10 text-primary flex items-center justify-center mb-5">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{service.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed mb-6">
                      {service.overview}
                    </p>

                    <div className="space-y-4 pt-5 border-t border-border">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted-foreground block mb-1">Delivered as</span>
                        <span className="text-[13px] text-foreground font-medium">{service.deliverable}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted-foreground block mb-1">Typically for</span>
                        <span className="text-[13px] text-foreground">{service.whoFor}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        href={`/contact?service=${service.id}`}
                        className="inline-flex items-center h-9 bg-primary px-5 text-[12px] font-semibold text-white tracking-wide transition-colors hover:bg-primary/90"
                      >
                        Inquire about this service
                        <ArrowRight className="ml-2 w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right — What's included */}
                  <div className="lg:col-span-8">
                    <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted-foreground mb-5">
                      What's included
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                      {service.includes.map((item, idx) => (
                        <div key={idx} className="bg-background p-6 hover:bg-muted transition-colors">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-5 h-5 bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            </div>
                            <h4 className="text-[13px] font-bold text-foreground leading-snug">{item.name}</h4>
                          </div>
                          <p className="text-[12.5px] text-muted-foreground leading-relaxed pl-8">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-muted border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-[2px] bg-accent" />
                <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Get Started</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">
                Need a multi-disciplinary solution?
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                Many projects require expertise across several of these areas — for example, a quarry project may need geological assessment, environmental studies, and permit support together. We handle these as integrated engagements.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center bg-primary px-8 text-sm font-semibold text-white tracking-wide transition-colors hover:bg-primary/90 shrink-0"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
