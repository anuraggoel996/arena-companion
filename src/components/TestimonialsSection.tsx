const testimonials = [
  { name: "Sarah Chen", role: "Founder, GreenLeaf Cosmetics", text: "Switching to EcoPack was the best decision for our brand. Our customers love the compostable mailers and it perfectly aligns with our values. The quality is outstanding." },
  { name: "Marcus Rivera", role: "CEO, TerraFresh Foods", text: "The reusable food pouches are a game-changer. Durable, beautiful design, and our customers keep coming back specifically for the sustainable packaging. Sales up 30%." },
  { name: "Emma Wilson", role: "Brand Director, PureEarth Skincare", text: "EcoPack helped us redesign our entire packaging line. The custom kraft boxes with soy ink printing look absolutely premium. We've eliminated 95% of our plastic packaging." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">Loved by brands worldwide</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-6">
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">
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
