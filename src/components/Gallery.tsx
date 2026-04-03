"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

const captions = [
  "Main road frontage — maximum visibility",
  "High ceiling — branding-ready space",
  "Wide layout flexibility — open plan",
  "Natural lighting advantage",
  "Spacious floor plate — 4,000 sq ft per floor",
  "Premium finish — ready to operate",
  "Clean lines — immediate setup",
  "Lift + staircase — full accessibility",
];

function GalleryImage({ src, alt, caption, className }: { src: string; alt: string; caption?: string; className?: string }) {
  const [error, setError] = useState(false);
  return (
    <div className={`relative overflow-hidden rounded-xl bg-obsidian-800 group ${className}`}>
      {error ? (
        <div className="img-placeholder w-full h-full flex flex-col items-center justify-center gap-2 min-h-[160px]">
          <div className="text-gold/15 text-3xl">◈</div>
          <p className="label opacity-15 text-center">Loading</p>
        </div>
      ) : (
        <Image src={src} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700"
          unoptimized onError={() => setError(true)} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/60 to-transparent pointer-events-none" />
      {caption && (
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-mono text-[0.55rem] uppercase tracking-widest text-gold/80 bg-obsidian-950/70 px-2 py-1 rounded">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const imgs = images.gallery;

  return (
    <section ref={ref} id="gallery" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <motion.p className="label mb-6"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>Gallery</motion.p>
            <motion.h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
              See the space.<br /><span className="gold-shimmer">Feel the scale.</span>
            </motion.h2>
          </div>
          <motion.p className="text-ivory/25 font-dm text-sm max-w-xs"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
            Hover any image to see what it offers. Every floor built for commercial intensity — ready to operate.
          </motion.p>
        </div>

        <motion.div className="grid grid-cols-12 grid-rows-3 gap-3 h-[700px]"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2, duration: 0.8 }}>
          <GalleryImage src={imgs[0]} alt="Exterior" caption={captions[0]} className="col-span-7 row-span-2" />
          <GalleryImage src={imgs[1]} alt="Ground floor" caption={captions[1]} className="col-span-5 row-span-1" />
          <GalleryImage src={imgs[2]} alt="1st floor" caption={captions[2]} className="col-span-5 row-span-1" />
          <GalleryImage src={imgs[3]} alt="2nd floor" caption={captions[3]} className="col-span-4 row-span-1" />
          <GalleryImage src={imgs[4]} alt="3rd floor" caption={captions[4]} className="col-span-4 row-span-1" />
          <GalleryImage src={imgs[5]} alt="Amenities" caption={captions[5]} className="col-span-4 row-span-1" />
        </motion.div>

        <motion.div className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
          <p className="text-ivory/30 font-dm text-sm mb-6">Single premium asset — no comparable property nearby.</p>
          <a href="tel:+919495040824" className="btn-gold">Schedule Site Visit</a>
        </motion.div>
      </div>
    </section>
  );
}
