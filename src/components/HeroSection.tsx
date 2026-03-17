import { ArrowRight, Factory, Award, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "15+", label: "Product Range" },
  { value: "100%", label: "Customizable" },
  { value: "Pan India", label: "Delivery" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] glow-circle rounded-full" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            🏭 Industrial Packaging Manufacturer
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
            Premium{" "}
            <span className="gradient-text">Packaging</span>{" "}
            Solutions for{" "}
            <span className="gradient-text">Every Industry</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg">
            High Land Overseas Pvt. Ltd. — Leading manufacturer & exporter of stretch films, poly bags, BOPP bags, mailer bags, TPE/TPR granules, and industrial packaging materials in Panipat, Haryana.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#products">
              <Button variant="hero" size="lg" className="gap-2">
                View Products <ArrowRight className="w-4 h-4" />
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
                <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center">
          <div className="w-[420px] h-[420px] rounded-full border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
            <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
              <Factory className="w-16 h-16 text-primary" />
            </div>
          </div>

          <div className="float-badge absolute top-10 right-0">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">ISO Certified</div>
              <div className="text-xs text-muted-foreground">Quality assured</div>
            </div>
          </div>

          <div className="float-badge absolute bottom-1/3 left-0">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Factory className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Custom Mfg.</div>
              <div className="text-xs text-muted-foreground">OEM supplier</div>
            </div>
          </div>

          <div className="float-badge absolute bottom-10 right-10">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Truck className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Fast Delivery</div>
              <div className="text-xs text-muted-foreground">Pan India shipping</div>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-primary/40" />
          <div className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-accent/40" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
