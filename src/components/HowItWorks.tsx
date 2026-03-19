import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Share Requirements", desc: "Tell us your product dimensions, quantities, material preferences, and any custom printing needs." },
  { num: "02", title: "Get Custom Quote", desc: "Our team provides competitive pricing based on your specifications. Transparent, no hidden costs." },
  { num: "03", title: "Eco Manufacturing", desc: "We manufacture with quality control and sustainable practices at every stage." },
  { num: "04", title: "Green Delivery", desc: "Pan-India delivery with optimized logistics from our Panipat facility." },
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3">🔄 Process</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">From Enquiry to Green Delivery</h2>
          <p className="text-muted-foreground">Getting sustainable packaging from High Land Overseas is simple and efficient.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="font-display text-5xl font-bold gradient-text mb-4">{s.num}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
