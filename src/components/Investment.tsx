"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Investment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="investment" className="relative py-32 bg-obsidian-900 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <motion.p className="label mb-4"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            Asset Snapshot
          </motion.p>
          <motion.h2 className="font-cormorant text-5xl md:text-6xl font-light"
            {...(inView ? fadeUp(0.1) : { initial: { opacity: 0, y: 28 } })}>
            Lease or buy.<br />
            <span className="gold-shimmer">Numbers that work.</span>
          </motion.h2>
        </div>

        {/* Two options */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">

          {/* Lease */}
          <motion.div
            className="glass rounded-2xl p-8 relative overflow-hidden hover:border-gold/20 transition-all duration-500"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "transform" }}
            whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
          >
            <div className="absolute top-5 right-5">
              <span className="label text-gold/30">Option A</span>
            </div>
            <p className="label mb-3 opacity-40">Lease</p>
            <p className="gold-shimmer font-cormorant text-6xl font-light leading-none mb-1">₹3.5L</p>
            <p className="text-ivory/30 font-dm text-xs mb-8">per month · 10-year lock-in available</p>
            <div className="space-y-3">
              {[
                { label: "Security Deposit", value: "₹50 Lakhs" },
                { label: "Lock-in Period", value: "Up to 10 Years" },
                { label: "Availability", value: "Immediate" },
                { label: "Annual Rental Income", value: "₹42 Lakhs" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-2.5">
                  <span className="text-ivory/35 font-dm text-xs">{item.label}</span>
                  <span className="text-ivory/80 font-cormorant text-lg">{item.value}</span>
                </div>
              ))}
            </div>
            <a href="tel:+919495040824" className="btn-outline-gold inline-block mt-7 text-sm">
              Lease Enquiry
            </a>
          </motion.div>

          {/* Sale */}
          <motion.div
            className="glass-gold rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(201,168,76,0.12)" }}
          >
            <div
              className="absolute -top-16 -right-16 w-52 h-52 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)" }}
            />
            <div className="absolute top-5 right-5">
              <span className="label text-gold/50">Option B</span>
            </div>
            <p className="label mb-3 opacity-50">Outright Sale</p>
            <p className="gold-shimmer font-cormorant text-6xl font-light leading-none mb-1">₹8.5 Cr</p>
            <p className="text-ivory/30 font-dm text-xs mb-8">land + building + parking included</p>
            <div className="space-y-3">
              {[
                { label: "Land", value: "30 Cents" },
                { label: "Built-up Area", value: "12,000 sq ft" },
                { label: "Parking", value: "Spacious compound" },
                { label: "Title", value: "Clear · Municipality approved" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-gold/10 pb-2.5">
                  <span className="text-ivory/35 font-dm text-xs">{item.label}</span>
                  <span className="text-ivory/80 font-cormorant text-lg">{item.value}</span>
                </div>
              ))}
            </div>
            <a href="tel:+919495040824" className="btn-gold inline-block mt-7 text-sm">
              Sale Enquiry
            </a>
          </motion.div>
        </div>

        {/* Specs bar */}
        <motion.div
          className="glass rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {[
            { val: "12,000", sub: "sq ft total" },
            { val: "30", sub: "cents land" },
            { val: "3", sub: "floors" },
            { val: "100%", sub: "permit ready" },
          ].map((s) => (
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
