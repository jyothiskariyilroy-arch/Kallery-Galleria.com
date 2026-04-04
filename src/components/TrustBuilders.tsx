"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const trust = [
  { icon: "✓", title: "Municipality Approved", body: "Within Irinjalakuda Municipality limits. Full legal standing for any licensed commercial activity." },
  { icon: "✓", title: "All Permits Cleared", body: "Building permits, electricity, water supply — all active. No approvals pending." },
  { icon: "✓", title: "Fire Safety Certified", body: "Fire extinguisher systems installed. Compliant with commercial safety norms." },
  { icon: "✓", title: "Clear Title", body: "Single ownership. No disputed claims. Ready for lease or sale transfer immediately." },
];

export default function TrustBuilders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 bg-obsidian-900 overflow-hidden">
      <div className="gold-line" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pt-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p className="label mb-4"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
              Verified & Approved
            </motion.p>
            <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light"
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              Legally clear.<br /><span className="gold-shimmer">Operationally ready.</span>
            </motion.h2>
          </div>
          <motion.p className="text-ivory/25 font-dm text-sm max-w-xs"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
            Every document cleared. Walk in and start operating — no delays, no approvals pending.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {trust.map((t, i) => (
            <motion.div
              key={t.title}
              className="glass rounded-xl p-6 border-l-2 border-gold/30 hover:border-gold/60 transition-all duration-400"
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i + 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.22 } }}
            >
              <div className="text-gold text-lg mb-3 font-bold">{t.icon}</div>
              <h3 className="font-cormorant text-lg text-ivory/90 mb-2">{t.title}</h3>
              <p className="text-xs text-ivory/30 font-dm leading-relaxed">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="gold-line mt-14" />
    </section>
  );
}
