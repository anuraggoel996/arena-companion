import { motion } from "framer-motion";
import { Leaf, Handshake, Globe, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Leaf, title: "Sustainability First", desc: "We champion compostable, recyclable, and GRS-certified packaging to reduce environmental impact." },
  { icon: Handshake, title: "Partnership Driven", desc: "We grow with our clients — offering custom OEM solutions, flexible MOQs, and dedicated support." },
  { icon: Globe, title: "Community Impact", desc: "Supporting local manufacturing in Panipat while delivering packaging solutions across India and beyond." },
  { icon: Sprout, title: "Innovation & Growth", desc: "Continuously developing new eco-friendly materials and packaging technologies for a greener tomorrow." },
];

const GrowTogether = () => {
  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-primary mb-3">🌍 Our Vision</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Grow <span className="gradient-text">Highland</span> Together
          </h2>
          <p className="text-lg text-muted-foreground">
            At HIGHLAND OVERSEAS, we believe packaging should protect both your products and our planet. 
            Together, we're building a sustainable future — one package at a time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                className="glass-card p-6 text-center hover:border-primary/40 transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#contact">
            <Button variant="hero" size="lg" className="gap-2">
              <Leaf className="w-4 h-4" /> Join Our Green Journey
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowTogether;
