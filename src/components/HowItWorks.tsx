const steps = [
  { num: "01", title: "Tell Us Your Needs", desc: "Share your product dimensions, quantities, and branding requirements. Our team will help you find the perfect sustainable solution." },
  { num: "02", title: "Custom Design", desc: "Our design team creates mockups featuring your brand. Choose materials, colors, and finishes that align with your sustainability goals." },
  { num: "03", title: "Production & Delivery", desc: "We manufacture your packaging using renewable energy and ship carbon-neutral. Typical lead time is 2-3 weeks." },
  { num: "04", title: "Delight Customers", desc: "Watch your customers fall in love with your eco-friendly unboxing experience. Track your environmental impact in real-time." },
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3">How It Works</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">From concept to doorstep in 4 steps</h2>
          <p className="text-muted-foreground">Getting started with sustainable packaging is easier than you think.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="font-display text-5xl font-bold gradient-text mb-4">{s.num}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
