"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Investment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="investment" className="relative py-40 bg-obsidian-900 overflow-hidden">

      {/* Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            className="label mb-6"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          >
            Investment
          </motion.p>
          <motion.h2
            className="font-cormorant text-5xl md:text-6xl font-light"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
          >
            Two paths.
            <br />
            <span className="gold-shimmer">One asset.</span>
          </motion.h2>
        </div>

        {/* Two options */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {/* Lease Option */}
          <motion.div
            className="glass rounded-3xl p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="absolute top-6 right-6">
              <span className="label text-gold/40">Option A</span>
            </div>
            <p className="label mb-4 opacity-50">Lease</p>
            <p className="gold-shimmer font-cormorant text-6xl md:text-7xl font-light leading-none mb-2">
              ₹3.5L
            </p>
            <p className="text-ivory/30 font-dm text-sm mb-10">per month</p>

            <div className="space-y-4">
              {[
                { label: "Security Deposit", value: "₹50 Lakhs" },
                { label: "Lock-in Period", value: "10 Years" },
                { label: "Availability", value: "Immediate" },
                { label: "Annual Revenue", value: "₹42 Lakhs" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-ivory/40 font-dm text-xs">{item.label}</span>
                  <span className="text-ivory/80 font-cormorant text-lg">{item.value}</span>
                </div>
              ))}
            </div>

            <a href="tel:+919495040824" className="btn-outline-gold inline-block mt-8">
              Lease Enquiry
            </a>
          </motion.div>

          {/* Sale Option */}
          <motion.div
            className="glass-gold rounded-3xl p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)" }}
            />

            <div className="absolute top-6 right-6">
              <span className="label text-gold/60">Option B</span>
            </div>

            <p className="label mb-4 opacity-60">Outright Sale</p>
            <p className="gold-shimmer font-cormorant text-6xl md:text-7xl font-light leading-none mb-2">
              ₹8.5 Cr
            </p>
            <p className="text-ivory/30 font-dm text-sm mb-10">including land + parking</p>

            <div className="space-y-4">
              {[
                { label: "Land Included", value: "30 Cents" },
                { label: "Built-up Area", value: "12,000 sq ft" },
                { label: "Parking", value: "Spacious compound" },
                { label: "Title", value: "Clear, municipality" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-gold/10 pb-3">
                  <span className="text-ivory/40 font-dm text-xs">{item.label}</span>
                  <span className="text-ivory/80 font-cormorant text-lg">{item.value}</span>
                </div>
              ))}
            </div>

            <a href="tel:+919495040824" className="btn-gold inline-block mt-8">
              Sale Enquiry
            </a>
          </motion.div>
        </div>

        {/* Full specs bar */}
        <motion.div
          className="glass rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {[
            { val: "12,000", sub: "sq ft total" },
            { val: "30", sub: "cents land" },
            { val: "3", sub: "floors" },
            { val: "100%", sub: "permit ready" },
          ].map((s) => (
            <div key={s.sub}>
              <p className="gold-shimmer font-cormorant text-3xl md:text-4xl font-medium">{s.val}</p>
              <p className="label mt-1 opacity-40">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
