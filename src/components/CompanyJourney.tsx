import { motion } from "framer-motion";
import { Leaf, Factory, Globe, Award, TrendingUp, Users } from "lucide-react";

const milestones = [
  { year: "2010", title: "Foundation", desc: "High Land Overseas established in Panipat, Haryana with a vision to deliver premium packaging solutions.", icon: Factory },
  { year: "2013", title: "Product Expansion", desc: "Expanded to 15+ product categories including stretch films, BOPP bags, and industrial packaging.", icon: TrendingUp },
  { year: "2016", title: "Eco Initiative", desc: "Launched compostable and recycled packaging lines, embracing sustainability as a core value.", icon: Leaf },
  { year: "2018", title: "GRS Certification", desc: "Achieved Global Recycled Standard (GRS) certification for sustainable manufacturing practices.", icon: Award },
  { year: "2021", title: "Pan-India Reach", desc: "Expanded delivery network across India, serving 1000+ businesses in diverse industries.", icon: Globe },
  { year: "2024", title: "Growing Together", desc: "47+ product categories, TPE/TPR compounding, and continuing our commitment to green packaging.", icon: Users },
];

const CompanyJourney = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3">🌱 Our Journey</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Company Journey</h2>
          <p className="text-muted-foreground">From a small packaging unit to a leading eco-friendly industrial packaging manufacturer & exporter.</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  className={`flex items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:flex-row`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div className={`glass-card p-6 inline-block max-w-sm hover:border-primary/40 transition-colors ${isLeft ? "md:ml-auto" : ""}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-display text-2xl font-bold gradient-text">{m.year}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">{m.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background shrink-0 z-10" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyJourney;
