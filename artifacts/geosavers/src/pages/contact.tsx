import { useState } from "react";
import { Layout } from "@/components/layout/layout";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { useSeo } from "@/lib/useSeo";

export default function Contact() {
  useSeo({
    title: "Contact Us — Request a Technical Consultation | GeoSavers",
    description:
      "Get in touch with GeoSavers for quarry permit support, groundwater exploration, environmental studies, and geological consulting. Contact us by email, phone, or WhatsApp.",
    canonicalPath: "/contact",
  });

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

  // text-base prevents iOS from auto-zooming into inputs (needs font-size >= 16px)
  const inputClass =
    "flex h-12 w-full border border-input bg-white px-4 py-2 text-base text-foreground placeholder:text-muted-foreground/55 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors rounded-none";

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[2px] bg-accent" />
            <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Contact Us</h1>
          <p className="text-white/65 max-w-2xl leading-relaxed text-[15px]">
            Reach out to our technical team to discuss your project, request a consultation, or ask about any of our services.
          </p>
        </div>
      </section>

      {/* WhatsApp banner — pinned near top on mobile */}
      <div className="bg-[#075E54] border-b border-[#064d45]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#25D366] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-[13px] font-semibold leading-tight">Prefer a faster response?</p>
                <p className="text-white/70 text-[12px]">Message us directly on WhatsApp</p>
              </div>
            </div>
            <a
              href="https://wa.me/237675334971"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb854] transition-colors text-white text-sm font-semibold px-5 w-full sm:w-auto"
              style={{ height: "44px" }}
            >
              Open WhatsApp
            </a>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

            {/* Contact Information */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-[2px] bg-accent" />
                <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Office Details</span>
              </div>

              <div className="divide-y divide-border border border-border">
                <div className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Bamenda, Cameroon<br />Operating across Africa</p>
                  </div>
                </div>

                <a href="tel:+237675334971" className="flex items-start gap-4 p-5 hover:bg-muted transition-colors group">
                  <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">+237 675 334 971</p>
                  </div>
                </a>

                <a href="mailto:geosavers2014@gmail.com" className="flex items-start gap-4 p-5 hover:bg-muted transition-colors group">
                  <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">geosavers2014@gmail.com</p>
                  </div>
                </a>
              </div>

              {/* Availability note */}
              <div className="mt-5 p-5 bg-muted border border-border">
                <h4 className="text-[12px] font-semibold text-foreground uppercase tracking-wide mb-1">Availability</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Monday – Friday, 8:00 am – 5:00 pm (WAT). We typically respond to all enquiries within one business day.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-[2px] bg-accent" />
                <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Send a Message</span>
              </div>

              <div className="bg-white border border-border p-5 sm:p-8">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center text-center py-10">
                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
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
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-[11px] font-semibold text-foreground uppercase tracking-wider">
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          autoComplete="name"
                          className={inputClass}
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-[11px] font-semibold text-foreground uppercase tracking-wider">
                          Email Address <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          autoComplete="email"
                          className={inputClass}
                          placeholder="email@organisation.com"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-[11px] font-semibold text-foreground uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          autoComplete="tel"
                          className={inputClass}
                          placeholder="+237 ..."
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="block text-[11px] font-semibold text-foreground uppercase tracking-wider">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          defaultValue={defaultService}
                          className={inputClass + " cursor-pointer appearance-none"}
                          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
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

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-[11px] font-semibold text-foreground uppercase tracking-wider">
                        Message / Project Details <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className={inputClass + " h-auto resize-none py-3"}
                        placeholder="Describe your project — region of work, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center w-full bg-primary text-sm font-semibold text-white tracking-wide transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none"
                      style={{ height: "52px" }}
                    >
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </button>

                    <p className="text-center text-[11px] text-muted-foreground">
                      We respond within one business day. Fields marked <span className="text-destructive">*</span> are required.
                    </p>
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
