"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const trust = [
  { icon: "✓", title: "Municipality Approved", body: "Within Irinjalakuda Municipality limits. Full legal standing for any licensed commercial activity." },
  { icon: "✓", title: "All Permits Cleared", body: "Building permits, electricity connection, water supply — all in place. No delays, no approvals pending." },
  { icon: "✓", title: "Fire Safety Certified", body: "Fire extinguisher systems installed and visible. Compliant with commercial safety norms." },
  { icon: "✓", title: "Clear Title Asset", body: "Single ownership. No disputed claims. Ready for immediate lease agreement or sale transfer." },
];

export default function TrustBuilders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-obsidian-900 overflow-hidden">
      <div className="gold-line" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pt-16">
        <div className="text-center mb-14">
          <motion.p className="label mb-4"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>Verified & Approved</motion.p>
          <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Built on <span className="gold-shimmer">solid ground.</span>
          </motion.h2>
          <motion.p className="text-ivory/30 font-dm text-sm mt-3"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            Irinjalakuda's most credentialed commercial asset — legally clear, operationally ready.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trust.map((t, i) => (
            <motion.div key={t.title}
              className="glass rounded-xl p-7 border-l-2 border-gold/40"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}>
              <div className="text-gold text-xl mb-4 font-bold">{t.icon}</div>
              <h3 className="font-cormorant text-lg text-ivory/90 mb-2">{t.title}</h3>
              <p className="text-xs text-ivory/35 font-dm leading-relaxed">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="gold-line mt-16" />
    </section>
  );
}
