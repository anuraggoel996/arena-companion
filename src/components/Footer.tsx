import { Recycle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <a href="#" className="flex items-center gap-2 font-display text-lg font-bold text-foreground mb-3">
              <Recycle className="w-6 h-6 text-primary" />
              EcoPack
            </a>
            <p className="text-sm text-muted-foreground">Sustainable packaging solutions for a better future.</p>
          </div>
          {[
            { title: "Products", links: ["Poly Mailers", "Compostable Boxes", "Reusable Pouches", "Branded Packaging"] },
            { title: "Company", links: ["About Us", "Sustainability", "Careers", "Blog"] },
            { title: "Support", links: ["Contact", "FAQ", "Shipping Info", "Returns"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-foreground mb-3">{col.title}</h4>
              <div className="space-y-2">
                {col.links.map((link) => (
                  <a key={link} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-border/30 pt-6 text-center text-sm text-muted-foreground">
          © 2024 EcoPack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
