import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const allTestimonials = [
  { name: "Textile Manufacturer", location: "Panipat, Haryana", text: "HIGHLAND OVERSEAS provides excellent quality BOPP bags and poly mailers. Their custom printing and prompt delivery make them our preferred packaging supplier." },
  { name: "E-commerce Business", location: "Delhi NCR", text: "We switched to their recycled polybags and mailer bags. The quality is outstanding, and the GRS certification gives our brand eco-friendly credibility." },
  { name: "Construction Company", location: "Haryana", text: "Their tarpaulin sheets and stretch films are top-notch. Reliable supply, competitive pricing, and excellent customer service." },
  { name: "Food Processing Unit", location: "Punjab", text: "The food-grade LDPE films and packaging bags are of premium quality. We trust HIGHLAND OVERSEAS for all our food packaging needs." },
  { name: "Agriculture Supplier", location: "Rajasthan", text: "Their agro films and leno bags are durable and affordable. We've been sourcing from them for years with consistent quality." },
  { name: "Courier Company", location: "Mumbai", text: "The tamper-evident courier bags are excellent. Strong adhesive, waterproof, and customizable — exactly what our logistics needs." },
  { name: "Furniture Retailer", location: "Gujarat", text: "Their furniture packaging films protect our products perfectly during transit. Great quality at competitive prices." },
  { name: "Chemical Industry", location: "Uttarakhand", text: "The woven sacks and industrial bags handle heavy loads without any issues. Reliable and strong packaging solutions." },
  { name: "Dairy Business", location: "Haryana", text: "Their milk packaging films are food-safe and work perfectly with our filling machines. Excellent product quality." },
];

const TestimonialsSection = () => {
  const [visibleSet, setVisibleSet] = useState(0);
  const setsCount = Math.ceil(allTestimonials.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSet((prev) => (prev + 1) % setsCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [setsCount]);

  const currentTestimonials = allTestimonials.slice(visibleSet * 3, visibleSet * 3 + 3);

  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary mb-3">⭐ Customer Reviews</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Trusted by Businesses Across India</h2>
          <p className="text-muted-foreground">Real feedback from our valued customers — refreshed dynamically.</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={visibleSet}
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {currentTestimonials.map((t) => (
              <div key={t.name} className="glass-card p-6 hover:border-primary/30 transition-colors">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-lg font-display font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(setsCount)].map((_, i) => (
            <button
              key={i}
              onClick={() => setVisibleSet(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === visibleSet ? "bg-primary" : "bg-primary/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
