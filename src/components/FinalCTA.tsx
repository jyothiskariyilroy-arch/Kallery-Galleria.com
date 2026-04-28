"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="contact" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.p className="label mb-7"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          Make Your Move
        </motion.p>

        <motion.h2
          className="font-cormorant text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-5"
          initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
          12,000 sq ft.<br /><span className="gold-shimmer">Ready now.</span>
        </motion.h2>

        <motion.p className="text-ivory/30 font-dm text-base leading-relaxed max-w-lg mx-auto mb-14"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
          Main road frontage. Fully permitted. Available for immediate lease or sale. No comparable property exists in this area.
        </motion.p>

        <motion.div
          className="glass-gold rounded-2xl p-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <p className="label mb-2 opacity-40">Direct Contact</p>
          <a href="tel:+919048480370"
            className="font-cormorant text-4xl md:text-5xl gold-shimmer font-light block mb-1.5 hover:opacity-75 transition-opacity duration-300">
            +91 90484 80370
          </a>
          <a href="tel:+918289830824"
            className="font-cormorant text-2xl text-ivory/35 font-light block mb-9 hover:text-ivory/55 transition-colors duration-300">
            +91 82898 30824
          </a>

          <div className="gold-line mb-9" />

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a href="tel:+919048480370" className="btn-gold"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(201,168,76,0.4)" }}
              whileTap={{ scale: 0.98 }}>
              Schedule Site Visit
            </motion.a>
            <motion.a
              href="https://wa.me/919495040824?text=Hi%2C%20I%27m%20interested%20in%20Kallery%20Galleria.%20Please%20share%20details."
              target="_blank" rel="noopener noreferrer" className="btn-outline-gold"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              Request Investment Details
            </motion.a>
          </div>

          <div className="mt-9">
            <p className="label opacity-25 mb-1.5">Location</p>
            <p className="text-ivory/35 font-dm text-sm">
              Puthenthodu, Karuvannur · Irinjalakuda Municipality · Thrissur, Kerala
            </p>
            <p className="text-ivory/20 font-dm text-xs mt-1.5">
              Adjacent to Puthenthodu Bus Stop · Main road frontage
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
