import { Check, Mail, Phone, MapPin, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { categories } from "@/data/products";
import { motion } from "framer-motion";

const benefits = [
  "Custom sizes and printing available",
  "Competitive bulk pricing",
  "Pan-India delivery",
  "GRS certified & eco-friendly options",
  "Compostable and recyclable materials",
];

const CTASection = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", company: "", needs: "", message: "" });

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Get in Touch</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">Get a Custom Quote Today</h2>
            <p className="text-muted-foreground mb-8">Contact HIGHLAND OVERSEAS for competitive pricing on eco-friendly stretch films, poly bags, BOPP bags, and all packaging materials.</p>

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
              <a href="mailto:CAMUKULGOEL@GMAIL.COM" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" /> CAMUKULGOEL@GMAIL.COM
              </a>
              <a href="tel:+918950702695" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" /> +91 8950702695
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Plot no.1, Sector 29, Near Oxygen Plant, Opposite Satsang Bhawan Teachers Colony, Panipat, Haryana — 132103</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Request a Quote</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input className="bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                <input className="bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
              </div>
              <input className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <input className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              <select className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" value={formData.needs} onChange={(e) => setFormData({ ...formData, needs: e.target.value })}>
                <option value="">Select a product category</option>
                {categories.filter(c => c !== "All").map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <textarea className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary min-h-[100px] resize-none" placeholder="Tell us your packaging requirements..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              <Button variant="hero" size="lg" className="w-full gap-2">
                <Leaf className="w-4 h-4" /> Send Enquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
