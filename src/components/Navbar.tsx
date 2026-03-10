import { Recycle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = ["Solutions", "Products", "Sustainability", "About", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-lg">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <Recycle className="w-7 h-7 text-primary" />
          Eco<span className="gradient-text">Pack</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link}
            </a>
          ))}
        </div>

        <Button variant="hero" size="sm" className="hidden md:inline-flex">
          Get Custom Quote
        </Button>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-lg p-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full">Get Custom Quote</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
