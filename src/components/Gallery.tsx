"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

const captions = [
  "Main road frontage",
  "Ground floor — 4,000 sq ft",
  "Open floor plate",
  "Natural light advantage",
  "Upper floor — professional finish",
  "Ready for immediate occupation",
  "Open plan layout",
  "Lift + staircase access",
];

function GalleryImage({ src, alt, caption, className }: { src: string; alt: string; caption?: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-xl bg-obsidian-800 group ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 img-placeholder animate-pulse" />
      )}
      {error ? (
        <div className="img-placeholder w-full h-full flex flex-col items-center justify-center gap-2 min-h-[160px]">
          <div className="text-gold/15 text-2xl">◈</div>
        </div>
      ) : (
        <Image
          src={src} alt={alt} fill
          className={`object-cover transition-all duration-700 group-hover:scale-[1.03] ${loaded ? "opacity-100" : "opacity-0"}`}
          unoptimized
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      {/* Very subtle gradient — no text overlay on image */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/40 to-transparent pointer-events-none" />
      {/* Caption BELOW image on hover — not overlaid */}
    </div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const imgs = images.gallery;

  return (
    <section ref={ref} id="gallery" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-8" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <motion.p className="label mb-5"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
              Gallery
            </motion.p>
            <motion.h2
              className="font-cormorant text-5xl md:text-6xl font-light leading-tight"
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              See the space.<br /><span className="gold-shimmer">Feel the scale.</span>
            </motion.h2>
          </div>
          <motion.p className="text-ivory/25 font-dm text-sm max-w-xs leading-relaxed"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
            12,000 sq ft across three floors. Ready for immediate commercial operation.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-12 grid-rows-3 gap-3 h-[680px]"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}>
          <GalleryImage src={imgs[0]} alt="Exterior" className="col-span-7 row-span-2" />
          <GalleryImage src={imgs[1]} alt="Ground floor" className="col-span-5 row-span-1" />
          <GalleryImage src={imgs[2]} alt="1st floor" className="col-span-5 row-span-1" />
          <GalleryImage src={imgs[3]} alt="2nd floor" className="col-span-4 row-span-1" />
          <GalleryImage src={imgs[4]} alt="3rd floor" className="col-span-4 row-span-1" />
          <GalleryImage src={imgs[5]} alt="Detail" className="col-span-4 row-span-1" />
        </motion.div>

        {/* Captions BELOW the grid, not overlaid */}
        <motion.div
          className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
          {captions.slice(0, 4).map((cap) => (
            <p key={cap} className="font-mono text-[0.55rem] uppercase tracking-widest text-ivory/20 text-center">{cap}</p>
          ))}
        </motion.div>

        <motion.div className="mt-10 text-center"
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.55 }}>
          <motion.a
            href="tel:+919048480370"
            className="btn-gold"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(201,168,76,0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Site Visit
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
