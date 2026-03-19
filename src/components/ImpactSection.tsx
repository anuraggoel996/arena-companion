import { motion } from "framer-motion";

const impactStats = [
  { value: "47+", label: "Product Categories", desc: "Complete sustainable packaging range" },
  { value: "1000+", label: "Clients Served", desc: "Across India and internationally" },
  { value: "Custom", label: "Manufacturing", desc: "OEM eco-packaging for every industry" },
  { value: "GRS", label: "Certified", desc: "Recycled and compostable options" },
];

const ImpactSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass-card p-6 text-center hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="font-display text-3xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="font-semibold text-foreground mb-1">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
