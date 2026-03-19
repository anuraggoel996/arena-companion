import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 bg-card/50">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground mb-3">
              <Leaf className="w-6 h-6 text-primary" />
              High Land Overseas
            </Link>
            <p className="text-sm text-muted-foreground mb-3">Eco-friendly industrial packaging manufacturer & exporter based in Panipat, Haryana. 🌿</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="flex items-center gap-1"><Phone className="w-3 h-3 text-primary" /> +91 8950702695</p>
              <p className="flex items-center gap-1"><Mail className="w-3 h-3 text-primary" /> CAMUKULGOEL@GMAIL.COM</p>
            </div>
          </div>
          {[
            { title: "Products", links: [
              { label: "Bags & Mailers", href: "/category/Bags%20%26%20Mailers" },
              { label: "Films & Wraps", href: "/category/Films%20%26%20Wraps" },
              { label: "Food Packaging", href: "/category/Food%20Packaging" },
              { label: "Industrial", href: "/category/Industrial" },
              { label: "Raw Materials", href: "/category/Raw%20Materials" },
            ]},
            { title: "Solutions", links: [
              { label: "Compostable Bags", href: "/product/compostable-bags" },
              { label: "Recyclable Bags", href: "/product/recyclable-bags" },
              { label: "GRS Certified", href: "/product/grs-certified-bags" },
              { label: "Stretch Film", href: "/product/machine-stretch-film" },
              { label: "Accessories", href: "/category/Accessories" },
            ]},
            { title: "Company", links: [
              { label: "Our Journey", href: "/#journey" },
              { label: "Contact", href: "/#contact" },
              { label: "Get Quote", href: "/#contact" },
            ]},
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-foreground mb-3">{col.title}</h4>
              <div className="space-y-2">
                {col.links.map((link) => (
                  <Link key={link.label} to={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-border/30 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 High Land Overseas Pvt. Ltd. All rights reserved. 🌱</p>
            <div className="flex items-start gap-1">
              <MapPin className="w-3 h-3 text-primary mt-0.5 shrink-0" />
              <span>Plot no.1, Sector 29, Near Oxygen Plant, Opposite Satsang Bhawan Teachers Colony, Panipat, Haryana — 132103</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
