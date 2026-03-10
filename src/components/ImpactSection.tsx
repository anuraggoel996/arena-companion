const impactStats = [
  { value: "12M kg", label: "Ocean Plastic Rescued", desc: "Collected from coastal waterways across Southeast Asia" },
  { value: "50K+", label: "Trees Planted", desc: "Through our partnership with forest restoration projects" },
  { value: "78%", label: "Carbon Reduction", desc: "Lower carbon footprint vs. traditional packaging" },
  { value: "15+", label: "Certifications", desc: "Including B-Corp, FSC, OK Compost, and more" },
];

const timeline = [
  { year: "2018", text: "Founded with a mission to eliminate packaging waste" },
  { year: "2019", text: "Launched first compostable mailer product line" },
  { year: "2020", text: "Reached 1M sustainable packages shipped" },
  { year: "2021", text: "B-Corp certified & expanded to 15 countries" },
  { year: "2022", text: "Rescued 5M kg of ocean-bound plastic" },
  { year: "2023", text: "Hit 50M packages shipped, carbon neutral operations" },
  { year: "2024", text: "Launched fully circular packaging program" },
];

const ImpactSection = () => {
  return (
    <section id="sustainability" className="py-24 bg-card/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3">Our Impact</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Real impact, measurable results</h2>
          <p className="text-muted-foreground">We believe transparency is key. Here's how our sustainable packaging is making a real difference.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((s) => (
            <div key={s.label} className="glass-card p-6 text-center">
              <div className="font-display text-3xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="font-semibold text-foreground mb-1">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Our Journey</h3>
          <div className="space-y-6">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-6 items-start">
                <div className="font-display text-lg font-bold text-primary min-w-[60px]">{t.year}</div>
                <div className="relative pt-1">
                  <div className="w-3 h-3 rounded-full bg-primary absolute -left-[30px] top-1.5" />
                  <p className="text-muted-foreground text-sm">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
