import { Package, Box, Film, Shield, ShoppingBag, Truck } from "lucide-react";

const solutions = [
  { icon: Package, title: "Poly Bags & Mailers", desc: "LDPE bags, courier bags, compostable bags, security bags, recycled polybags, and GRS certified bags for shipping and retail." },
  { icon: Film, title: "Films & Wraps", desc: "Machine stretch film, shrink film, BOPP film, blown film, PVC shrink, agriculture film, and furniture packaging film." },
  { icon: Box, title: "Industrial Packaging", desc: "BOPP woven bags, woven sacks for cement, construction covers, cable drum packaging, and water tank packaging solutions." },
  { icon: Shield, title: "Food Packaging", desc: "Food-grade LDPE bags, bread packaging, milk packaging film, bakery film, and stand-up zipper pouches for food industries." },
  { icon: ShoppingBag, title: "Accessories & Supplies", desc: "Box strapping, adhesive tapes, silica gel, iron clips, cable ties, and barcode labels for complete packaging needs." },
  { icon: Truck, title: "Raw Materials & Compounds", desc: "LDPE granules, reprocessed granules, TPE/TPR compounding and granules for plastic manufacturing industries." },
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
