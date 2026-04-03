"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "₹42L", label: "Annual Revenue Potential", sub: "At ₹3.5L/month lease" },
  { value: "8–10%", label: "Yield Opportunity", sub: "Strong ROI on ₹8.5Cr asset" },
  { value: "Zero", label: "Vacancy Risk Zone", sub: "High-demand retail corridor — no comparable nearby" },
  { value: "10 Yr", label: "Lock-in Available", sub: "Long-term income security for investors" },
];

export default function DemandProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-obsidian-900">
      <div className="gold-line" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.p className="label mb-4"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
            Demand Proof
          </motion.p>
          <motion.h2 className="font-cormorant text-5xl md:text-6xl font-light"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
            <span className="gold-shimmer">₹42 Lakhs</span> Annual Revenue Potential
          </motion.h2>
          <motion.p className="text-ivory/35 font-dm text-sm mt-4"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
            High-demand retail corridor · Available for immediate lease or sale
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="glass-gold rounded-2xl p-7 text-center"
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.7 }}>
              <p className="gold-shimmer font-cormorant text-5xl md:text-6xl font-medium leading-none mb-3">{s.value}</p>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest text-gold/70 mb-2">{s.label}</p>
              <p className="text-xs text-ivory/30 leading-relaxed">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Repeat CTA */}
        <motion.div className="mt-12 text-center"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          <a href="tel:+919495040824" className="btn-gold">Call Now — +91 94950 40824</a>
        </motion.div>
      </div>
      <div className="gold-line mt-12" />
    </section>
  );
}
