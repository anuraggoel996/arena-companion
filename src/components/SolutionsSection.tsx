import { Package, Box, Film, Shield, ShoppingBag, Truck } from "lucide-react";

const solutions = [
  { icon: Package, title: "Poly Bags & Mailers", desc: "LDPE bags, poly mailers, recycled polybags for shipping and retail. Custom sizes, printing, and eco-friendly options available." },
  { icon: Film, title: "Stretch & Shrink Films", desc: "Machine and manual grade stretch films, pallet wrap, and shrink wrap. 29-60 micron thickness for secure industrial packaging." },
  { icon: Box, title: "BOPP & Woven Bags", desc: "Premium BOPP bags for garments and textiles. HDPE/PP woven fabric for heavy-duty industrial shipping and cement packaging." },
  { icon: Shield, title: "Protective Packaging", desc: "Air bubble rolls, tarpaulin sheets, and honeycomb wraps. Complete protection for fragile and valuable items during transit." },
  { icon: ShoppingBag, title: "Packaging Accessories", desc: "Plastic straps, adhesive tapes, silica gel desiccants, iron clips, and plastic sutli. Everything for complete packaging solutions." },
  { icon: Truck, title: "Custom Manufacturing", desc: "OEM packaging supplier with custom sizes, colours, and printing. Bulk orders with pan-India delivery and global export capability." },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3">Our Solutions</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Complete Packaging Solutions for Every Industry</h2>
          <p className="text-muted-foreground">From stretch films to BOPP bags, we offer a complete range of industrial packaging materials with custom manufacturing.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="glass-card p-6 group hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
