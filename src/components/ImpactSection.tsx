const impactStats = [
  { value: "15+", label: "Product Categories", desc: "Complete range of packaging solutions" },
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
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Ductile Polymers Pvt. Ltd.</h2>
          <p className="text-muted-foreground">Incorporated in 2024, Ductile Polymers is a Panipat-based industrial packaging manufacturer providing premium stretch films, poly bags, BOPP bags, and complete packaging solutions to businesses across India.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((s) => (
            <div key={s.label} className="glass-card p-6 text-center">
              <div className="font-display text-3xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="font-semibold text-foreground mb-1">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4 text-center">Company Details</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div><span className="text-muted-foreground">Company:</span> <span className="font-medium text-foreground">Ductile Polymers Pvt. Ltd.</span></div>
            <div><span className="text-muted-foreground">CIN:</span> <span className="font-medium text-foreground">U46693HR2024PTC118505</span></div>
            <div><span className="text-muted-foreground">Managing Director:</span> <span className="font-medium text-foreground">Sh. Rahul Goel</span></div>
            <div><span className="text-muted-foreground">Director:</span> <span className="font-medium text-foreground">Sh. Deepak Goel</span></div>
            <div><span className="text-muted-foreground">Incorporated:</span> <span className="font-medium text-foreground">01/02/2024</span></div>
            <div><span className="text-muted-foreground">ROC:</span> <span className="font-medium text-foreground">ROC Delhi</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
