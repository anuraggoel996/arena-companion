import { Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const tabs = ["All", "Mailers", "Boxes", "Pouches", "Accessories"];

const products = [
  { emoji: "🌊", tags: ["Ocean Plastic", "Custom Print"], name: "Pollast!c™ Poly Mailer", desc: "Made from 100% recycled ocean-bound plastic. Waterproof and durable.", rating: 4.9, reviews: 328, price: "$0.35", cat: "Mailers" },
  { emoji: "🌱", tags: ["Home Compostable", "Plant-Based"], name: "Compost Mailer", desc: "Breaks down in home compost within 180 days. Certified compostable.", rating: 4.8, reviews: 256, price: "$0.42", cat: "Mailers" },
  { emoji: "📦", tags: ["FSC Certified", "Recyclable"], name: "Kraft Shipping Box", desc: "Premium kraft boxes with custom printing. FSC-certified cardboard.", rating: 4.9, reviews: 412, price: "$1.20", cat: "Boxes" },
  { emoji: "🍃", tags: ["Reusable", "Food Grade"], name: "Reusable Food Pouch", desc: "BPA-free silicone pouches. Freezer, dishwasher, and microwave safe.", rating: 5, reviews: 189, price: "$2.50", cat: "Pouches" },
  { emoji: "🍯", tags: ["Biodegradable", "Protective"], name: "Honeycomb Wrap", desc: "Expandable paper honeycomb for product protection. Replaces bubble wrap.", rating: 4.7, reviews: 198, price: "$0.15", cat: "Accessories" },
  { emoji: "🎨", tags: ["Soy Ink", "Custom Colors"], name: "Eco Tissue Paper", desc: "Recycled tissue paper with soy-based ink printing. Acid-free.", rating: 4.8, reviews: 145, price: "$0.08", cat: "Accessories" },
];

const ProductsSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.cat === active);

  return (
    <section id="products" className="py-24 bg-card/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary mb-3">Product Range</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Choose your perfect eco packaging</h2>
          <p className="text-muted-foreground">Every product is designed with sustainability at its core.</p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === t ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.name} className="glass-card overflow-hidden group">
              <div className="h-40 bg-secondary/50 flex items-center justify-center text-5xl">
                {p.emoji}
              </div>
              <div className="p-5">
                <div className="flex gap-2 mb-3">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{tag}</span>
                  ))}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-medium text-foreground">{p.rating}</span>
                  <span className="text-xs text-muted-foreground">({p.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">From <span className="font-semibold text-foreground">{p.price}</span>/unit</span>
                  <Button variant="hero" size="sm">Customize</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
