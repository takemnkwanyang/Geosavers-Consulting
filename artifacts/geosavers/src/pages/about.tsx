import { Layout } from "@/components/layout/layout";
import { Target, Shield, Compass, Users } from "lucide-react";
import { useSeo } from "@/lib/useSeo";

const values = [
  {
    icon: Compass,
    title: "Technical Rigor",
    desc: "We rely on proven scientific methods, field-verified data, and thorough analytical processes. Our reports are built on evidence, not assumptions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Honest assessments and transparent reporting, even when findings are unfavorable. Our clients make decisions based on accurate information.",
  },
  {
    icon: Users,
    title: "Field Readiness",
    desc: "We go where the work is. Our expertise is grounded in physical fieldwork across diverse terrain in Cameroon and across Africa.",
  },
  {
    icon: Target,
    title: "Regulatory Fluency",
    desc: "We understand the local permitting landscape and work within it effectively, reducing uncertainty and delays for our clients.",
  },
];

export default function About() {
  useSeo({
    title: "About Us — Field-Based Geoscience Consultants | GeoSavers",
    description:
      "GeoSavers is a field-based geoscience and environmental consulting firm serving Cameroon and Africa. Learn about our team, methodology, and core values.",
    canonicalPath: "/about",
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
            <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Our Firm</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight max-w-2xl">
            About GeoSavers
          </h1>
          <p className="text-white/65 max-w-2xl leading-relaxed text-base">
            A specialized consulting firm delivering rigorous, field-based technical solutions for natural resources, water, and environmental compliance across Cameroon and Africa.
          </p>
        </div>
      </section>

      {/* Identity Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-[2px] bg-accent" />
                <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Who We Are</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Built on Field Experience</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p>
                  GeoSavers operates at the intersection of technical geoscience and practical field execution. We are the firm that government agencies, mining companies, and infrastructure developers trust when they need accurate data from difficult terrain.
                </p>
                <p>
                  We do not rely on generic desktop analysis. Our expertise is built on physical fieldwork, precise data collection, and a deep understanding of local regulatory landscapes in Cameroon and across Africa.
                </p>
                <p>
                  Whether securing a quarry permit, siting a critical groundwater borehole, or conducting comprehensive environmental baseline studies, we deliver reports that clients can confidently stake investments and permits on.
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-border grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">7</div>
                  <div className="text-sm text-muted-foreground">Core technical disciplines</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">Pan-African</div>
                  <div className="text-sm text-muted-foreground">Geographic reach</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-72 overflow-hidden bg-muted border border-border">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
                  alt="Rocky geological terrain — field survey environment"
                  className="w-full h-full object-cover grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
              <div className="relative h-44 overflow-hidden bg-muted border border-border">
                <img
                  src="/images/geo-field-1.webp"
                  alt="Field geologists conducting electrical resistivity survey"
                  className="w-full h-full object-cover grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-secondary/30 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted border-t border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-[2px] bg-accent" />
                <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Mission</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Why We Exist</h2>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                To provide definitive, scientifically sound consulting services that enable responsible resource extraction, sustainable infrastructure development, and strict environmental compliance across Africa.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-background border border-border p-7">
                  <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
