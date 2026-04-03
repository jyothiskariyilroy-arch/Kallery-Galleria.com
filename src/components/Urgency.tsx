"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const signals = [
  { no: "01", headline: "Single premium asset.", body: "One building. One owner. No comparable 12,000 sq ft commercial block exists within 3 km of this location." },
  { no: "02", headline: "Irinjalakuda is expanding fast.", body: "Infrastructure investment and retail penetration are accelerating in this corridor. Commercial rents are tracking upward." },
  { no: "03", headline: "Available for immediate lease or sale.", body: "Permits cleared. Utilities active. No construction lag. Every month of delay is revenue you are not generating." },
];

const whyWins = [
  "Main road frontage — maximum visibility",
  "12,000 sq ft scale — rare single asset",
  "Ready to operate — immediate business setup",
  "₹3.5L/month rental potential",
  "High local demand — zero vacancy risk zone",
];

export default function Urgency() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-40 bg-obsidian-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          <div>
            <motion.p className="label mb-8"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>Why Now</motion.p>
            <motion.h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light leading-tight"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
              Supply is<br />limited.<br /><span className="gold-shimmer">Demand is not.</span>
            </motion.h2>
            <motion.div className="mt-12 glass-gold rounded-2xl p-7"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}>
              <p className="font-cormorant text-2xl text-ivory/75 font-light leading-snug mb-3">
                "The right commercial asset in this corridor does not come twice."
              </p>
              <p className="label opacity-30">High-demand retail corridor · Thrissur district</p>
            </motion.div>
          </div>

          <div className="space-y-5">
            {signals.map((s, i) => (
              <motion.div key={s.no} className="glass rounded-xl p-7 border-l-2 border-gold/30"
                initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 * i + 0.2, duration: 0.7 }}>
                <div className="flex gap-4 items-start">
                  <span className="font-mono text-[0.6rem] text-gold/40 mt-1 shrink-0">{s.no}</span>
                  <div>
                    <h3 className="font-cormorant text-xl text-ivory/90 mb-2">{s.headline}</h3>
                    <p className="text-sm text-ivory/35 font-dm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why This Wins block */}
        <motion.div className="glass-gold rounded-2xl p-10"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
          <p className="label mb-6 text-center">Why This Asset Wins</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {whyWins.map((w, i) => (
              <div key={w} className="text-center">
                <div className="text-gold/50 text-2xl mb-2">◆</div>
                <p className="font-dm text-xs text-ivory/55 leading-snug">{w}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="tel:+919495040824" className="btn-gold">Call Now — +91 94950 40824</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
