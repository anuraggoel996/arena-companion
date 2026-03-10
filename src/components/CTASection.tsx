import { Check, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const benefits = [
  "Free sample kit with your first inquiry",
  "Custom design mockups within 48 hours",
  "No minimum order for first-time customers",
  "Carbon-neutral shipping on all orders",
];

const CTASection = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", company: "", needs: "", message: "" });

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">Ready to make your packaging sustainable?</h2>
            <p className="text-muted-foreground mb-8">Join 2,000+ brands already making a difference. Get a free sample kit and custom quote.</p>

            <div className="space-y-4 mb-10">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{b}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <a href="mailto:hello@ecopack.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 text-primary" /> hello@ecopack.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 text-primary" /> +1 (234) 567-890
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="glass-card p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Get Your Free Quote</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input className="bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                <input className="bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
              </div>
              <input className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <input className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              <select className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" value={formData.needs} onChange={(e) => setFormData({ ...formData, needs: e.target.value })}>
                <option value="">Select a product category</option>
                <option value="mailers">Custom Poly Mailers</option>
                <option value="boxes">Compostable Boxes</option>
                <option value="pouches">Reusable Pouches</option>
                <option value="branded">Branded Packaging</option>
                <option value="full">Full Packaging Solution</option>
              </select>
              <textarea className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary min-h-[100px] resize-none" placeholder="Tell us about your packaging needs..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              <Button variant="hero" size="lg" className="w-full">Send Request</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
