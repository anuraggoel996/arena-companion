const steps = [
  { num: "01", title: "Share Requirements", desc: "Tell us your product dimensions, quantities, material preferences, and any custom printing or branding needs." },
  { num: "02", title: "Get Custom Quote", desc: "Our team provides competitive pricing based on your specifications. No hidden costs, transparent pricing." },
  { num: "03", title: "Manufacturing", desc: "We manufacture your packaging with quality control at every stage. Typical lead time varies by order size." },
  { num: "04", title: "Delivery", desc: "Pan-India delivery with reliable logistics. Bulk orders dispatched directly from our Panipat facility." },
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3">How It Works</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">From enquiry to delivery in 4 steps</h2>
          <p className="text-muted-foreground">Getting custom packaging from Ductile Polymers is simple and efficient.</p>
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
