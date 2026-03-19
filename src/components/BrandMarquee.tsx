import { useNavigate } from "react-router-dom";
import { categories } from "@/data/products";

const marqueeWords = [
  { label: "Stretch Film", category: "Films & Wraps" },
  { label: "Poly Bags", category: "Bags & Mailers" },
  { label: "BOPP Bags", category: "Bags & Mailers" },
  { label: "Courier Bags", category: "Bags & Mailers" },
  { label: "Compostable Bags", category: "Bags & Mailers" },
  { label: "Woven Sacks", category: "Industrial" },
  { label: "Air Bubble Film", category: "Films & Wraps" },
  { label: "Adhesive Tape", category: "Accessories" },
  { label: "Silica Gel", category: "Accessories" },
  { label: "Cable Ties", category: "Accessories" },
  { label: "LDPE Bags", category: "Bags & Mailers" },
  { label: "Shrink Wrap", category: "Films & Wraps" },
  { label: "Food Packaging", category: "Food Packaging" },
  { label: "Garbage Bags", category: "Bags & Mailers" },
  { label: "Box Strapping", category: "Accessories" },
  { label: "TPE Granules", category: "Raw Materials" },
  { label: "TPR Granules", category: "Raw Materials" },
  { label: "Leno Bags", category: "Bags & Mailers" },
  { label: "Security Bags", category: "Bags & Mailers" },
  { label: "Zipper Pouch", category: "Food Packaging" },
];

const BrandMarquee = () => {
  const navigate = useNavigate();

  const handleClick = (category: string) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <section className="py-10 border-y border-border/30 overflow-hidden bg-primary/5">
      <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
        🌿 Click any product to explore the category
      </p>
      <div className="relative">
        <div className="flex marquee gap-12 w-max">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <button
              key={i}
              onClick={() => handleClick(w.category)}
              className="text-lg font-display font-semibold text-primary/40 whitespace-nowrap hover:text-primary transition-colors duration-300 cursor-pointer hover:scale-110 transform"
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
