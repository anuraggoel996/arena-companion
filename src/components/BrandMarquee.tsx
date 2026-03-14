const keywords = [
  "Stretch Film", "Poly Bags", "BOPP Bags", "Mailer Bags", "Recycled Polybags",
  "Woven Fabric", "Tarpaulin", "Air Bubble Roll", "Adhesive Tape", "Silica Gel",
  "LDPE Bags", "Shrink Wrap", "Pallet Wrap", "Garbage Bags", "Plastic Strap"
];

const BrandMarquee = () => {
  return (
    <section className="py-10 border-y border-border/30 overflow-hidden">
      <p className="text-center text-sm text-muted-foreground mb-6">Complete Range of Industrial Packaging Products</p>
      <div className="relative">
        <div className="flex marquee gap-16 w-max">
          {[...keywords, ...keywords].map((k, i) => (
            <span key={i} className="text-lg font-display font-semibold text-muted-foreground/40 whitespace-nowrap">
              {k}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
