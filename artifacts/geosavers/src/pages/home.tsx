import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, MapPin, Search, FileText, Droplets, Leaf, Mountain, Navigation, Zap, BookOpen } from "lucide-react";
import { Layout } from "@/components/layout/layout";

const services = [
  {
    icon: FileText,
    title: "Quarry Permit Support",
    desc: "Documentation preparation, permit acquisition support, and regulatory follow-up.",
  },
  {
    icon: Droplets,
    title: "Groundwater and Hydrogeology",
    desc: "Groundwater exploration, borehole siting, and water resource assessment.",
  },
  {
    icon: Leaf,
    title: "Environmental Studies",
    desc: "Environmental baseline studies and compliance advisory.",
  },
  {
    icon: Mountain,
    title: "Geological Services",
    desc: "Geological mapping, geophysical surveys, and site evaluation.",
  },
];

const processSteps = [
  "Consultation",
  "Site Visit",
  "Field Data Collection",
  "Technical Analysis",
  "Report Preparation",
  "Submission and Client Support",
];

const industries = [
  "Government agencies",
  "Construction companies",
  "Quarry operators",
  "Mining companies",
  "NGOs",
  "Development partners",
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=2070&auto=format&fit=crop"
            alt="Geological field work landscape"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/30" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-accent border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Serving Cameroon and Africa</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Technical Consulting for Natural Resources, Water, Environment, and Regulatory Compliance
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-10 max-w-3xl leading-relaxed">
              We support quarry permits, groundwater exploration, environmental studies, geological projects, and technical documentation through field-based expertise and professional advisory support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-base font-semibold text-secondary transition-colors hover:bg-accent/90"
              >
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Technical Services</h2>
              <p className="text-lg text-muted-foreground">
                Grounded expertise across multiple domains of geoscience and environmental consulting.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:text-primary/80">
              See all services <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="group relative bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Methodical Approach</h2>
            <p className="text-lg text-muted-foreground">
              A systematic, field-tested process designed to deliver reliable results and technical compliance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center text-xl font-bold text-primary mb-4 z-10 shadow-sm">
                  {index + 1}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] right-[-40%] h-[2px] bg-border z-0" />
                )}
                <h4 className="font-semibold text-foreground text-sm md:text-base">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries and Projects Split */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Industries */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Who We Serve</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                We provide independent, rigorous consulting to organizations operating in demanding environments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-medium text-foreground">{industry}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/industries" className="inline-flex items-center text-primary font-semibold hover:text-primary/80">
                  View all sectors <ChevronRight className="ml-1 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Project Examples */}
            <div className="bg-secondary text-secondary-foreground rounded-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-16 opacity-5">
                <MapPin className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">Field Experience</h2>
                <p className="text-secondary-foreground/80 mb-8 text-lg">
                  Recent project executions demonstrating our capability on the ground.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2.5 rounded-full bg-accent shrink-0" />
                    <span className="text-white/90">Quarry permit documentation support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2.5 rounded-full bg-accent shrink-0" />
                    <span className="text-white/90">Groundwater exploration and borehole siting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2.5 rounded-full bg-accent shrink-0" />
                    <span className="text-white/90">Environmental baseline study</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2.5 rounded-full bg-accent shrink-0" />
                    <span className="text-white/90">Geological and geophysical site assessment</span>
                  </li>
                </ul>
                <Link href="/projects" className="inline-flex items-center text-accent font-semibold hover:text-accent/80">
                  View project portfolio <ChevronRight className="ml-1 w-5 h-5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}