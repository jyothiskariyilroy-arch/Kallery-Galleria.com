"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const leaseOptions = [
  {
    label: "Option A",
    badge: "Stable Long-term",
    title: "5 Year Lock-in",
    rent: "₹3.5L",
    period: "per month",
    rows: [
      { k: "Lock-in Period", v: "5 Years" },
      { k: "Security Deposit", v: "₹50 Lakhs" },
      { k: "Escalation", v: "Standard" },
      { k: "Availability", v: "Immediate" },
    ],
    highlight: false,
  },
  {
    label: "Option B",
    badge: "Flexible & Scalable",
    title: "4 + 4 Structure",
    rent: "₹3.5L",
    period: "per month",
    rows: [
      { k: "Initial Term", v: "4 Years" },
      { k: "Extension Option", v: "4 Years" },
      { k: "Security Deposit", v: "₹50 Lakhs" },
      { k: "Availability", v: "Immediate" },
    ],
    highlight: false,
  },
  {
    label: "Option C",
    badge: "Maximum Stability",
    title: "10 Year Lock-in",
    rent: "₹3.5L",
    period: "per month",
    rows: [
      { k: "Lock-in Period", v: "10 Years" },
      { k: "Security Deposit", v: "₹50 Lakhs" },
      { k: "Best For", v: "Anchor Tenants" },
      { k: "Availability", v: "Immediate" },
    ],
    highlight: true,
  },
];

export default function Investment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="investment" className="relative py-32 bg-obsidian-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <motion.p className="label mb-4" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            Asset Snapshot
          </motion.p>
          <motion.h2 className="font-cormorant text-5xl md:text-6xl font-light"
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            Choose your lease structure.<br />
            <span className="gold-shimmer">₹3.5L/month — all options.</span>
          </motion.h2>
        </div>

        {/* 3 lease cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {leaseOptions.map((opt, i) => (
            <motion.div key={opt.title}
              className={`rounded-2xl p-8 relative overflow-hidden transition-all duration-500 ${opt.highlight ? "glass-gold" : "glass hover:border-gold/20"}`}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i + 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: opt.highlight ? "0 20px 60px rgba(201,168,76,0.12)" : "0 20px 60px rgba(0,0,0,0.4)" }}>
              {opt.highlight && (
                <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)" }} />
              )}
              <div className="flex items-start justify-between mb-4">
                <span className="label opacity-30">{opt.label}</span>
                <span className={`font-mono text-[0.52rem] uppercase tracking-widest px-3 py-1.5 rounded-full border ${
                  opt.highlight ? "border-gold/40 text-gold/80" : "border-white/10 text-ivory/35"
                }`}>{opt.badge}</span>
              </div>

              <h3 className="font-cormorant text-2xl text-ivory/90 mb-2 leading-tight">{opt.title}</h3>
              <p className="gold-shimmer font-cormorant text-5xl font-light leading-none mb-1">{opt.rent}</p>
              <p className="text-ivory/30 font-dm text-xs mb-7">{opt.period}</p>

              <div className="space-y-3 mb-7">
                {opt.rows.map(row => (
                  <div key={row.k} className={`flex justify-between items-center border-b pb-2.5 ${opt.highlight ? "border-gold/10" : "border-white/5"}`}>
                    <span className="text-ivory/35 font-dm text-xs">{row.k}</span>
                    <span className="text-ivory/80 font-cormorant text-base">{row.v}</span>
                  </div>
                ))}
              </div>

              <motion.a href="tel:+919048480370"
                className={opt.highlight ? "btn-gold inline-block text-sm" : "btn-outline-gold inline-block text-sm"}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                Lease Enquiry
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Specs bar */}
        <motion.div className="glass rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}>
          {[
            { val: "12,000", sub: "sq ft total" },
            { val: "30", sub: "cents land" },
            { val: "3", sub: "floors" },
            { val: "100%", sub: "permit ready" },
          ].map(s => (
            <div key={s.sub}>
              <p className="gold-shimmer font-cormorant text-3xl md:text-4xl font-medium">{s.val}</p>
              <p className="label mt-1 opacity-35">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
