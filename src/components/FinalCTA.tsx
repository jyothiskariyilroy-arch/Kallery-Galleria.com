"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="contact" className="relative py-48 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)" }} />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.p className="label mb-8"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>Make Your Move</motion.p>

        <motion.h2 className="font-cormorant text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
          This is your<br /><span className="gold-shimmer">commercial edge.</span>
        </motion.h2>

        <motion.p className="text-ivory/30 font-dm text-base leading-relaxed max-w-lg mx-auto mb-16"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
          12,000 sq ft. Main road. High-visibility location. Fully permitted. Available for immediate lease or sale.
          Single premium asset — no comparable property nearby.
        </motion.p>

        <motion.div className="glass-gold rounded-3xl p-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
          <p className="label mb-3 opacity-50">Direct Contact</p>
          <a href="tel:+919495040824"
            className="font-cormorant text-4xl md:text-5xl gold-shimmer font-light block mb-2 hover:opacity-80 transition-opacity">
            +91 94950 40824
          </a>
          <a href="tel:+918289830824"
            className="font-cormorant text-2xl text-ivory/40 font-light block mb-10 hover:text-ivory/60 transition-colors">
            +91 82898 30824
          </a>

          <div className="gold-line mb-10" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919495040824" className="btn-gold">Schedule Site Visit</a>
            <a href="https://wa.me/919495040824?text=Hi%2C%20I%27m%20interested%20in%20Kallery%20Galleria.%20Please%20share%20details."
              target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
              Request Investment Details
            </a>
          </div>

          <div className="mt-10">
            <p className="label opacity-30 mb-2">Location</p>
            <p className="text-ivory/40 font-dm text-sm">
              Puthenthodu, Karuvannur · Irinjalakuda Municipality · Thrissur, Kerala
            </p>
            <p className="text-ivory/25 font-dm text-xs mt-2">
              Adjacent to Puthenthodu Bus Stop · Main road frontage · High-visibility location
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
