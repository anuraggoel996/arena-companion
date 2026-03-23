import { ArrowRight, Leaf, Recycle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const stats = [
  { value: "47+", label: "Products" },
  { value: "1000+", label: "Clients" },
  { value: "Pan India", label: "Delivery" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] glow-circle rounded-full" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Floating leaf particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute leaf-particle text-primary/20"
          style={{ left: `${15 + i * 18}%`, animationDelay: `${i * 3}s` }}
        >
          <Leaf className="w-6 h-6" />
        </div>
      ))}

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Leaf className="w-4 h-4" />
            Eco-Friendly Packaging Solutions
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-foreground">
            Sustainable{" "}
            <span className="gradient-text">Packaging</span>{" "}
            for a{" "}
            <span className="gradient-text">Greener</span> Future
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg">
            HIGHLAND OVERSEAS Pvt. Ltd. — Leading manufacturer & exporter of eco-friendly stretch films, poly bags, BOPP bags, compostable bags, and industrial packaging materials in Panipat, Haryana.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#products">
              <Button variant="hero" size="lg" className="gap-2">
                Explore Products <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="heroOutline" size="lg" className="gap-2">
                Request Quote
              </Button>
            </a>
          </div>

          <div className="flex gap-10 pt-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-[420px] h-[420px] rounded-full border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center animate-float">
            <div className="w-[220px] h-[220px] rounded-full bg-gradient-to-br from-primary/25 to-accent/15 flex items-center justify-center">
              <Leaf className="w-20 h-20 text-primary" />
            </div>
          </div>

          <motion.div className="float-badge absolute top-10 right-0" whileHover={{ scale: 1.05 }}>
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Recycle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">GRS Certified</div>
              <div className="text-xs text-muted-foreground">Recycled options</div>
            </div>
          </motion.div>

          <motion.div className="float-badge absolute bottom-1/3 left-0" whileHover={{ scale: 1.05 }}>
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Eco-Friendly</div>
              <div className="text-xs text-muted-foreground">Compostable options</div>
            </div>
          </motion.div>

          <motion.div className="float-badge absolute bottom-10 right-10" whileHover={{ scale: 1.05 }}>
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Truck className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Pan India</div>
              <div className="text-xs text-muted-foreground">Fast delivery</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
