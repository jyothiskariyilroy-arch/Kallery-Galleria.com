"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  { type: "Supermarket", arrow: "→", outcome: "Daily demand. High volume. Repeat footfall — ground floor scale fits perfectly." },
  { type: "Showroom", arrow: "→", outcome: "Main road visibility converts browsers to buyers. Ideal frontage width." },
  { type: "Clinic / Diagnostics", arrow: "→", outcome: "Serves the entire Irinjalakuda corridor. Accessibility + scale." },
  { type: "Bank / Financial Institution", arrow: "→", outcome: "Municipality address. Bus stop footfall. Trust-building location." },
  { type: "Franchise Brand", arrow: "→", outcome: "High-visibility site. Immediate business setup — no setup lag." },
  { type: "Gym / Fitness Studio", arrow: "→", outcome: "Recurring monthly revenue. High customer lifetime value." },
  { type: "Restaurant / Café", arrow: "→", outcome: "Bus stop proximity drives daily covers. Ground floor ready." },
  { type: "Office / Corporate HQ", arrow: "→", outcome: "Multi-floor setup. Professional address in municipality limits." },
];

const bestFor = ["Supermarkets", "Showrooms", "Clinics / Diagnostics", "Banks & Financial Institutions", "Franchise Brands"];

export default function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-40 bg-obsidian-900 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Best Suited For — quick scan block */}
        <motion.div className="glass-gold rounded-2xl p-8 mb-16 flex flex-col md:flex-row gap-8 items-start md:items-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="shrink-0">
            <p className="label mb-2">Best Suited For</p>
            <p className="font-cormorant text-3xl font-light text-ivory/80">Who this is built for</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {bestFor.map(b => (
              <span key={b} className="font-mono text-[0.6rem] uppercase tracking-widest border border-gold/30 text-gold/80 px-4 py-2 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-16">
          <div className="lg:w-1/3">
            <motion.p className="label mb-6"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>Use Cases</motion.p>
            <motion.h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
              What this<br /><span className="gold-shimmer">space enables.</span>
            </motion.h2>
          </div>
          <div className="lg:w-2/3 flex items-end">
            <motion.p className="text-ivory/30 font-dm text-sm leading-relaxed max-w-md"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
              Versatile floor plates. High visibility location. Permitted for all commercial categories.
              Ready to operate — immediate business setup, zero construction lag.
            </motion.p>
          </div>
        </div>

        <div className="space-y-1">
          {cases.map((c, i) => (
            <motion.div key={c.type}
              className="group flex items-center justify-between border border-transparent hover:border-gold/10 rounded-xl px-6 py-5 hover:bg-white/[0.02] transition-all duration-300 cursor-default"
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.06 * i, duration: 0.6 }}>
              <div className="flex items-center gap-6">
                <span className="font-mono text-[0.6rem] text-gold/30 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-cormorant text-xl md:text-2xl text-ivory/80 group-hover:text-ivory transition-colors">{c.type}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gold/30 group-hover:text-gold/60 transition-colors">→</span>
                <span className="text-sm text-ivory/30 group-hover:text-ivory/50 transition-colors font-dm text-right max-w-xs hidden md:block">{c.outcome}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
