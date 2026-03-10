const brands = ["EcoStore", "GreenLeaf Co", "Nature's Best", "PureEarth", "CleanSea", "BioBlend", "TerraFresh", "GreenWave", "EcoVibe", "PlanetFirst"];

const BrandMarquee = () => {
  return (
    <section className="py-12 border-y border-border/30 overflow-hidden">
      <p className="text-center text-sm text-muted-foreground mb-8">Trusted by 2,000+ sustainable brands worldwide</p>
      <div className="relative">
        <div className="flex marquee gap-16 w-max">
          {[...brands, ...brands].map((brand, i) => (
            <span key={i} className="text-xl font-display font-semibold text-muted-foreground/40 whitespace-nowrap">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
