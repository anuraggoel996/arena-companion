import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products, categories } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

const ProductsSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary mb-3">🌿 Product Catalogue</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Eco-Friendly Packaging Solutions</h2>
          <p className="text-muted-foreground">Complete range of sustainable stretch films, poly bags, BOPP bags, compostable packaging, and accessories.</p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((t) => (
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
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/product/${p.id}`} className="glass-card overflow-hidden group hover:border-primary/30 transition-all hover:-translate-y-1 block">
                  <div className="h-48 bg-muted/50 flex items-center justify-center overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{p.category}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">{p.material}</span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{p.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Price: <span className="font-semibold text-foreground">As per spec</span></span>
                      <Button variant="hero" size="sm">View Details</Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
