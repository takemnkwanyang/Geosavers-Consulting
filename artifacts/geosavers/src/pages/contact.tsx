import { useState } from "react";
import { Layout } from "@/components/layout/layout";
import { Mail, MapPin, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";

export default function Contact() {
  const [location] = useLocation();
  // Extract service from URL if present (e.g. ?service=quarry)
  const defaultService = new URLSearchParams(window.location.search).get("service") || "";
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl">
            Reach out to our technical team to discuss your project requirements, request a consultation, or inquire about our services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Office Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground mt-1">Yaoundé, Cameroon<br/>Operating across Africa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground mt-1">+237 6XX XXX XXX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground mt-1">contact@geosavers.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-muted rounded-xl border border-border mt-8">
                <h3 className="font-bold text-foreground mb-2">Direct Messaging</h3>
                <p className="text-sm text-muted-foreground mb-4">Need a quick response? Reach out to us directly on WhatsApp.</p>
                <a 
                  href="https://wa.me/237600000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-full h-12 items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                
                {isSuccess ? (
                  <div className="bg-green-50 text-green-900 border border-green-200 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Message Sent</h3>
                    <p>Thank you for reaching out. A member of our technical team will review your request and contact you shortly.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 text-green-700 font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                          placeholder="+237 ..."
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-foreground">Service Needed</label>
                        <select 
                          id="service" 
                          defaultValue={defaultService}
                          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
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

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">Message / Project Details</label>
                      <textarea 
                        id="message" 
                        required
                        rows={5}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                        placeholder="Please describe your project or inquiry..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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