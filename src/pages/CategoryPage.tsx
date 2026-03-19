import { useParams, Link } from "react-router-dom";
import { products, categories } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const CategoryPage = () => {
  const { name } = useParams();
  const categoryName = decodeURIComponent(name || "");
  const filtered = products.filter((p) => p.category === categoryName);

  if (filtered.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-6">No products found in "{categoryName}"</p>
          <Link to="/">
            <Button variant="hero">Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{categoryName} — High Land Overseas | Industrial Packaging Manufacturer Panipat</title>
        <meta name="description" content={`Browse ${categoryName} products from High Land Overseas Pvt. Ltd., Panipat. Premium quality packaging solutions.`} />
      </Helmet>

      <Navbar />
      <div className="container py-12">
        <Link to="/#products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to All Products
        </Link>

        <div className="mb-10">
          <h1 className="font-display text-4xl font-bold text-foreground mb-3">{categoryName}</h1>
          <p className="text-muted-foreground">{filtered.length} products in this category</p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.filter(c => c !== "All").map((c) => (
            <Link
              key={c}
              to={`/category/${encodeURIComponent(c)}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                c === categoryName ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </Link>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
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
                  <Button variant="hero" size="sm">View Details</Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
