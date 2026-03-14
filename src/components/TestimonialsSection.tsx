const testimonials = [
  { name: "Textile Manufacturer", role: "Panipat, Haryana", text: "Ductile Polymers provides excellent quality BOPP bags and poly mailers. Their custom printing and prompt delivery make them our preferred packaging supplier." },
  { name: "E-commerce Business", role: "Delhi NCR", text: "We switched to their recycled polybags and mailer bags. The quality is outstanding, and the GRS certification gives our brand eco-friendly credibility." },
  { name: "Construction Company", role: "Haryana", text: "Their tarpaulin sheets and stretch films are top-notch. Reliable supply, competitive pricing, and excellent customer service from the team." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">Trusted by Businesses Across India</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-6">
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg font-display font-bold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
