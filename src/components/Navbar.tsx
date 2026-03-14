import { Package, Menu, X, Search, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "@/data/products";

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Solutions", href: "/#solutions" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = query.length > 1
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.keywords.some(k => k.toLowerCase().includes(query.toLowerCase())) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs py-1.5 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +91 8950702695</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Panipat, Haryana</span>
          </div>
          <span>Ductile Polymers Pvt. Ltd. — Industrial Packaging Manufacturer</span>
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-border/30 bg-background/95 backdrop-blur-lg">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
            <Package className="w-7 h-7 text-primary" />
            Ductile <span className="gradient-text">Polymers</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-muted-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <a href="tel:+918950702695">
              <Button variant="hero" size="sm" className="hidden md:inline-flex">
                Get Quote
              </Button>
            </a>
            <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Search dropdown */}
        {searchOpen && (
          <div className="border-t border-border/30 bg-background p-4">
            <div className="container">
              <input
                autoFocus
                className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Search products... (e.g., Stretch Film, BOPP Bags, Mailer)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {filtered.length > 0 && (
                <div className="mt-2 max-h-64 overflow-y-auto space-y-1">
                  {filtered.map(p => (
                    <button
                      key={p.id}
                      className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted text-sm text-foreground flex items-center gap-3"
                      onClick={() => { navigate(`/product/${p.id}`); setSearchOpen(false); setQuery(""); }}
                    >
                      <img src={p.image} alt={p.name} className="w-10 h-10 rounded object-cover" />
                      <div>
                        <div className="font-medium">{p.name}</div>
                        <div className="text-xs text-muted-foreground">{p.category}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              {query.length > 1 && filtered.length === 0 && (
                <p className="text-sm text-muted-foreground mt-2 px-4">No products found for "{query}"</p>
              )}
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-lg p-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="text-xs text-muted-foreground pt-2 border-t border-border/30">
              <p className="flex items-center gap-1"><Phone className="w-3 h-3" /> +91 8950702695</p>
              <p className="flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" /> Panipat, Haryana</p>
            </div>
            <a href="tel:+918950702695">
              <Button variant="hero" size="sm" className="w-full">Get Quote</Button>
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
