import { Package, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <a href="#" className="flex items-center gap-2 font-display text-lg font-bold text-foreground mb-3">
              <Package className="w-6 h-6 text-primary" />
              High Land Overseas
            </a>
            <p className="text-sm text-muted-foreground mb-3">Industrial packaging manufacturer & exporter based in Panipat, Haryana.</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="flex items-center gap-1"><Phone className="w-3 h-3 text-primary" /> +91 8950702695</p>
              <p className="flex items-center gap-1"><Mail className="w-3 h-3 text-primary" /> CAMUKULGOEL@GMAIL.COM</p>
            </div>
          </div>
          {[
            { title: "Products", links: ["LDPE Bags", "Stretch Film", "BOPP Bags", "Mailer Bags", "Recycled Polybags"] },
            { title: "Solutions", links: ["Poly Bags & Mailers", "Films & Wraps", "Industrial Packaging", "Accessories"] },
            { title: "Company", links: ["About Us", "Contact", "Get Quote"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-foreground mb-3">{col.title}</h4>
              <div className="space-y-2">
                {col.links.map((link) => (
                  <a key={link} href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-border/30 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Ductile Polymers Pvt. Ltd. All rights reserved.</p>
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
