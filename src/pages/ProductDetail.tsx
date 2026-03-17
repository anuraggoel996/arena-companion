import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/">
            <Button variant="hero">Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{product.name} — High Land Overseas | Industrial Packaging Manufacturer Panipat</title>
        <meta name="description" content={`${product.description} ${product.keywords.join(", ")}. Buy from High Land Overseas Pvt. Ltd., Panipat, Haryana.`} />
        <meta name="keywords" content={product.keywords.join(", ")} />
      </Helmet>

      <Navbar />
      <div className="container py-12">
        <Link to="/#products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="glass-card overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-[400px] object-cover" />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{product.category}</span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">{product.name}</h1>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="glass-card p-6 space-y-4">
              <h2 className="font-display text-lg font-semibold text-foreground">Specifications</h2>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-muted-foreground">Material:</span> <span className="font-medium text-foreground">{product.material}</span></div>
                {product.thickness && <div><span className="text-muted-foreground">Thickness:</span> <span className="font-medium text-foreground">{product.thickness}</span></div>}
                {product.size && <div><span className="text-muted-foreground">Size:</span> <span className="font-medium text-foreground">{product.size}</span></div>}
                {product.colour && <div><span className="text-muted-foreground">Colour:</span> <span className="font-medium text-foreground">{product.colour}</span></div>}
                <div><span className="text-muted-foreground">Price:</span> <span className="font-medium text-foreground">As per specification</span></div>
                <div><span className="text-muted-foreground">MOQ:</span> <span className="font-medium text-foreground">As per requirement</span></div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Features</h2>
              <div className="space-y-2">
                {product.features.split(". ").filter(Boolean).map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{f.trim().replace(/\.$/, "")}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-2">Usage</h2>
              <p className="text-sm text-muted-foreground">{product.usage}</p>
            </div>

            <div className="glass-card p-6">
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Get a Quote</h2>
              <div className="space-y-2 text-sm">
                <a href="tel:+918950702695" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" /> +91 8950702695
                </a>
                <a href="mailto:CAMUKULGOEL@GMAIL.COM" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" /> CAMUKULGOEL@GMAIL.COM
                </a>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Plot no.1, Sector 29, Near Oxygen Plant, Opposite Satsang Bhawan Teachers Colony, Panipat, Haryana 132103
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map(p => (
                <Link to={`/product/${p.id}`} key={p.id} className="glass-card overflow-hidden group hover:border-primary/30 transition-colors">
                  <div className="h-40 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-foreground text-sm">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
