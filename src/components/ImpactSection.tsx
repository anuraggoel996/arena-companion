const impactStats = [
  { value: "47+", label: "Product Categories", desc: "Complete range of packaging solutions" },
  { value: "1000+", label: "Clients Served", desc: "Across India and internationally" },
  { value: "Custom", label: "Manufacturing", desc: "OEM packaging for every industry" },
  { value: "GRS", label: "Certified", desc: "Recycled and eco-friendly options" },
];

const ImpactSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3">About Us</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">High Land Overseas Pvt. Ltd.</h2>
          <p className="text-muted-foreground">High Land Overseas is a Panipat-based industrial packaging manufacturer & exporter providing premium stretch films, poly bags, BOPP bags, TPE/TPR compounds, and complete packaging solutions to businesses across India and worldwide.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((s) => (
            <div key={s.label} className="glass-card p-6 text-center">
              <div className="font-display text-3xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="font-semibold text-foreground mb-1">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
