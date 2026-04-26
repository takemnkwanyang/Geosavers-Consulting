import { useState } from "react";
import { Layout } from "@/components/layout/layout";
import { Mail, MapPin, Phone, MessageSquare, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const defaultService = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("service") || ""
    : "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const inputClass =
    "flex h-10 w-full border border-input bg-white px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors";

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
            <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">Contact Us</h1>
          <p className="text-white/65 max-w-2xl leading-relaxed text-base">
            Reach out to our technical team to discuss your project requirements, request a consultation, or inquire about our services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-10">

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-0">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-[2px] bg-accent" />
                <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Office</span>
              </div>

              <div className="space-y-0 divide-y divide-border border border-border">
                <div className="flex items-start gap-4 p-6">
                  <div className="w-9 h-9 bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Yaoundé, Cameroon<br />Operating across Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6">
                  <div className="w-9 h-9 bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">+237 6XX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6">
                  <div className="w-9 h-9 bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">contact@geosavers.com</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-muted border border-border mt-6">
                <h3 className="text-sm font-bold text-foreground mb-1">Direct via WhatsApp</h3>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">For faster communication, reach us directly on WhatsApp.</p>
                <a
                  href="https://wa.me/237600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full h-11 items-center justify-center gap-2 bg-[#25D366] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1eb854]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-[2px] bg-accent" />
                <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Send a Message</span>
              </div>

              <div className="bg-white border border-border p-8">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center text-center py-10">
                    <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Message Received</h3>
                    <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                      Thank you for reaching out. A member of our technical team will review your request and contact you shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 text-sm text-primary font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-wider">Full Name *</label>
                        <input type="text" id="name" required className={inputClass} placeholder="Full name" />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-foreground uppercase tracking-wider">Email Address *</label>
                        <input type="email" id="email" required className={inputClass} placeholder="email@organisation.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold text-foreground uppercase tracking-wider">Phone Number</label>
                        <input type="tel" id="phone" className={inputClass} placeholder="+237 ..." />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="service" className="text-xs font-semibold text-foreground uppercase tracking-wider">Service Needed</label>
                        <select
                          id="service"
                          defaultValue={defaultService}
                          className={inputClass + " cursor-pointer"}
                        >
                          <option value="">General Inquiry</option>
                          <option value="quarry">Quarry Permit Support</option>
                          <option value="groundwater">Groundwater and Hydrogeology</option>
                          <option value="environment">Environmental Studies</option>
                          <option value="geology">Geological and Geophysical</option>
                          <option value="gis">GIS and Spatial Analysis</option>
                          <option value="energy">Petroleum and Energy</option>
                          <option value="documentation">Technical Documentation</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-foreground uppercase tracking-wider">Message / Project Details *</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className={inputClass + " h-auto resize-none"}
                        placeholder="Please describe your project, the region of work, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-11 w-full items-center justify-center bg-primary px-8 text-sm font-semibold text-white tracking-wide transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
