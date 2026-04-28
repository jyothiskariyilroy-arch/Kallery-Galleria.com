"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "48,000+", label: "Population within 5 km" },
  { value: "23,500+", label: "Population within 2 km" },
  { value: "0", label: "Organised supermarkets within 3–4 km" },
  { value: "5–7 km", label: "Distance to nearest competitors" },
  { value: "High NRI", label: "Income market — above-average spending" },
  { value: "4-Lane", label: "Highway upgrade underway — frontage appreciation" },
];

export default function DemandProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden bg-obsidian-900">
      <div className="gold-line" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pt-14">
        <div className="mb-14">
          <motion.p className="label mb-4" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            Market Context
          </motion.p>
          <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light"
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            The demand is real.<br />
            <span className="gold-shimmer">The numbers back it.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              className="glass rounded-xl p-7 border-l-2 border-gold/20 hover:border-gold/50 transition-all duration-300"
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i + 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.22 } }}>
              <p className="gold-shimmer font-cormorant text-4xl font-medium leading-none mb-2">{s.value}</p>
              <p className="font-mono text-[0.58rem] uppercase tracking-widest text-ivory/40 leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="gold-line mt-14" />
    </section>
  );
}
