"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">

      {/* Background — rendered building image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt="Kallery Galleria"
          fill priority
          className="object-cover object-center"
          unoptimized
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian-950 via-obsidian-900 to-obsidian-800" />
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian-950/70 via-obsidian-950/40 to-obsidian-950/85" />
      <div className="absolute inset-0 z-10 grid-bg opacity-20" />

      {/* Gold ambient */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p className="label mb-6 opacity-60"
          initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 0.2 }}>
          Puthenthodu, Karuvannur · Irinjalakuda Municipality · Thrissur
        </motion.p>

        <motion.h1 className="font-cormorant font-light text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }}>
          <span className="gold-shimmer">Kallery</span><br />
          <span className="text-ivory/90">Galleria</span>
        </motion.h1>

        <motion.p className="font-dm text-base md:text-lg text-ivory/70 mt-6 mb-2 leading-snug"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          12,000 sq ft high-visibility commercial asset — <span className="text-gold">₹3.5L/month lease potential</span>
        </motion.p>
        <motion.p className="font-dm text-sm text-ivory/40 mb-10"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Ideal for supermarkets, showrooms, clinics & branded outlets
        </motion.p>

        {/* Stats */}
        <motion.div className="glass rounded-2xl p-5 mb-8 grid grid-cols-3 gap-0 divide-x divide-white/5"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          {[
            { val: "12,000", sub: "Sq Ft Built-up" },
            { val: "30 Cents", sub: "Land Area" },
            { val: "Ready Now", sub: "Immediate Setup" },
          ].map(s => (
            <div key={s.sub} className="px-4 text-center">
              <p className="gold-shimmer font-cormorant text-3xl md:text-4xl font-medium leading-none">{s.val}</p>
              <p className="label mt-1.5 opacity-50">{s.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <a href="tel:+919048480370" className="btn-gold">Schedule Site Visit</a>
          <a href="https://wa.me/919495040824?text=Hi%2C%20I%27m%20interested%20in%20Kallery%20Galleria.%20Please%20share%20the%20full%20investment%20deck."
            target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
            Get Full Investment Deck
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
        <p className="label opacity-30">Scroll</p>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
