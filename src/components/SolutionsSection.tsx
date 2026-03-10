import { Package, Box, Palette, Shield, ShoppingBag, Truck } from "lucide-react";

const solutions = [
  { icon: Package, title: "Custom Poly Mailers", desc: "Made from 100% recycled ocean-bound plastic. Fully customizable with your brand design, waterproof and tear-resistant." },
  { icon: Box, title: "Compostable Boxes", desc: "Corrugated boxes made from FSC-certified materials. Home compostable and printed with soy-based inks." },
  { icon: Palette, title: "Branded Packaging", desc: "Full custom branding solutions from tissue paper to stickers. Make your unboxing experience unforgettable." },
  { icon: Shield, title: "Protective Wrapping", desc: "Honeycomb paper wraps and biodegradable void fill. Superior protection with zero plastic waste." },
  { icon: ShoppingBag, title: "Reusable Pouches", desc: "Multi-use food-grade pouches perfect for snacks, meal prep, and on-the-go. Washable and designed to last." },
  { icon: Truck, title: "Shipping Solutions", desc: "End-to-end sustainable shipping with carbon-neutral delivery options. From warehouse to doorstep, guilt-free." },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3">Our Solutions</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Sustainable packaging for every need</h2>
          <p className="text-muted-foreground">From custom poly mailers to compostable boxes, we offer a complete range of eco-friendly packaging solutions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="glass-card p-6 group hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <a href="#" className="inline-block mt-4 text-sm text-primary hover:underline">Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
