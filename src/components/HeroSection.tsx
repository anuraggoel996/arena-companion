import { ArrowRight, Play, Leaf, Recycle, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "50M+", label: "Packages Shipped" },
  { value: "100%", label: "Compostable" },
  { value: "2000+", label: "Happy Brands" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] glow-circle rounded-full" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            🌿 Leading Sustainable Packaging
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
            Packaging that{" "}
            <span className="gradient-text">protects</span>{" "}
            your product &{" "}
            <span className="gradient-text">our planet</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg">
            Custom eco-friendly packaging solutions made from recycled ocean plastics, compostable materials, and sustainable resources. Beautiful packaging that doesn't cost the earth.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="gap-2">
              Explore Products <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="heroOutline" size="lg" className="gap-2">
              <Play className="w-4 h-4" /> Our Story
            </Button>
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

        {/* Right - decorative circle with badges */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="w-[420px] h-[420px] rounded-full border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
            <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
              <Recycle className="w-16 h-16 text-primary" />
            </div>
          </div>

          {/* Floating badges */}
          <div className="float-badge absolute top-10 right-0">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Recycle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Recyclable</div>
              <div className="text-xs text-muted-foreground">100% materials</div>
            </div>
          </div>

          <div className="float-badge absolute bottom-1/3 left-0">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Zero Waste</div>
              <div className="text-xs text-muted-foreground">Fully circular packaging</div>
            </div>
          </div>

          <div className="float-badge absolute bottom-10 right-10">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Droplets className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Ocean Plastic</div>
              <div className="text-xs text-muted-foreground">Rescued & reused</div>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-primary/40" />
          <div className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-accent/40" />
          <div className="absolute top-1/2 right-5 w-2 h-2 rounded-full bg-primary/30" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
