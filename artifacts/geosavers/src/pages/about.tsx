import { Layout } from "@/components/layout/layout";
import { motion } from "framer-motion";
import { Target, Shield, Compass, Users } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">About Geosavers International</h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80">
            A specialized consulting firm delivering rigorous, field-based technical solutions for natural resources, water, and environmental compliance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Identity</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Geosavers International operates at the intersection of technical geoscience and practical field execution. We are the firm that government agencies, mining companies, and infrastructure developers trust when they need accurate data from difficult terrain.
                </p>
                <p>
                  We don't rely on generic desktop analysis. Our expertise is built on physical fieldwork, precise data collection, and a deep understanding of local regulatory landscapes in Cameroon and across Africa.
                </p>
                <p>
                  Whether it's securing a quarry permit, siting a critical groundwater borehole, or conducting comprehensive environmental baseline studies, we deliver reports that clients can confidently base their investments and permits on.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop"
                alt="Geologists in the field"
                className="w-full h-full object-cover grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-10 rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide definitive, scientifically sound consulting services that enable responsible resource extraction, sustainable infrastructure development, and strict environmental compliance.
              </p>
            </div>
            
            <div className="bg-card p-10 rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span><strong>Technical Rigor:</strong> We rely on proven scientific methods and accurate data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span><strong>Field Readiness:</strong> We go where the work is, no matter the terrain.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span><strong>Integrity:</strong> Honest assessments and transparent reporting.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}