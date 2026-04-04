"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "5,000+", label: "Families in catchment", sub: "Within 3 km radius of Puthenthodu junction" },
  { value: "₹45k–70k", label: "Average household income", sub: "Established mid-to-upper consumer base in Irinjalakuda corridor" },
  { value: "10 Yr", label: "Lock-in term available", sub: "Long-duration tenants actively seeking locations in this area" },
  { value: "0", label: "Comparable assets nearby", sub: "No similar scale commercial building within 3 km" },
];

export default function DemandProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden bg-obsidian-900">
      <div className="gold-line" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pt-14">
        <div className="mb-14">
          <motion.p className="label mb-4"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            Market Context
          </motion.p>
          <motion.h2
            className="font-cormorant text-4xl md:text-5xl font-light"
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            The demand is real.<br />
            <span className="gold-shimmer">The numbers back it.</span>
          </motion.h2>
          <motion.p className="text-ivory/30 font-dm text-sm mt-4 max-w-lg"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
            Irinjalakuda is an established commercial corridor with growing retail penetration and no comparable large-format commercial space available.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass rounded-xl p-6"
              initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
            >
              <p className="gold-shimmer font-cormorant text-4xl font-medium leading-none mb-3">{s.value}</p>
              <p className="font-mono text-[0.58rem] uppercase tracking-widest text-gold/60 mb-2 leading-snug">{s.label}</p>
              <p className="text-[0.72rem] text-ivory/30 font-dm leading-relaxed">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="gold-line mt-14" />
    </section>
  );
}
