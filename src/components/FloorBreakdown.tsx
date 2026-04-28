"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";
import ImageLoader from "./ImageLoader";

const floors = [
  {
    id: "ground", label: "Ground Floor", tag: "Street Level",
    area: "~4,000 sq ft", ceiling: "High ceiling — branding-ready",
    access: "Direct street access · Main road frontage",
    best: "Supermarket · Showroom · Bank · Retail",
    idealFor: "High-footfall street-level retail. Direct road visibility. Ideal for brands that need walk-in traffic.",
    images: images.groundFloor,
  },
  {
    id: "first", label: "1st Floor", tag: "First Level",
    area: "~4,000 sq ft", ceiling: "Standard height — open plan",
    access: "Lift + staircase",
    best: "Healthcare · Diagnostics · Restaurant · Gym",
    idealFor: "Service businesses that need space and flow. Natural light advantage. Accessible via lift.",
    images: images.firstFloor,
  },
  {
    id: "second", label: "2nd Floor", tag: "Second Level",
    area: "~4,000 sq ft", ceiling: "Standard — professional finish",
    access: "Lift + staircase",
    best: "Office · Training Institute · Corporate HQ",
    idealFor: "Professional environments that benefit from quiet elevation and a clean, focused layout.",
    images: images.secondFloor,
  },
  {
    id: "third", label: "3rd Floor", tag: "Top Level",
    area: "Varies · Rooftop access", ceiling: "Panoramic views",
    access: "Lift + staircase · Rooftop potential",
    best: "F&B · Events · Premium Office",
    idealFor: "Premium operations. Exclusive positioning. Elevated branding. Rooftop access potential.",
    images: images.thirdFloor,
  },
];

function FloorImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative rounded-xl overflow-hidden bg-obsidian-800 group ${className}`}>
      {!loaded && !error && <ImageLoader />}
      {!error && (
        <Image
          src={src} alt={alt} fill
          className={`object-cover transition-all duration-500 group-hover:scale-[1.03] ${loaded ? "opacity-100" : "opacity-0"}`}
          unoptimized
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gold/15 text-2xl">◈</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/30 to-transparent pointer-events-none" />
    </div>
  );
}

export default function FloorBreakdown() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFloor, setActiveFloor] = useState(0);

  return (
    <section ref={ref} id="floors" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <motion.p className="label mb-4" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            The Property
          </motion.p>
          <motion.h2
            className="font-cormorant text-5xl md:text-6xl font-light leading-tight"
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            4,000 sq ft per floor.<br />
            <span className="gold-shimmer">Ready for immediate use.</span>
          </motion.h2>
        </div>

        <motion.div className="flex gap-2 mb-10 flex-wrap"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }}>
          {floors.map((f, i) => (
            <button key={f.id} onClick={() => setActiveFloor(i)}
              className={`px-5 py-2.5 rounded-full font-mono text-[0.62rem] uppercase tracking-widest transition-all duration-300 ${
                activeFloor === i
                  ? "bg-gold text-obsidian-950 font-bold shadow-lg"
                  : "glass text-ivory/40 hover:text-ivory/70 hover:border-gold/20"
              }`}>
              {f.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {floors.map((floor, fi) => activeFloor === fi ? (
            <motion.div key={floor.id}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="grid grid-cols-2 gap-3">
                  {floor.images.slice(0, 4).map((src, i) => (
                    <FloorImage key={src} src={src} alt={`${floor.label} view ${i + 1}`}
                      className={i === 0 ? "col-span-2 h-64" : "h-44"} />
                  ))}
                </div>
                <div className="lg:pl-4">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="label opacity-50">{floor.tag}</span>
                    <div className="gold-line flex-1" />
                  </div>
                  <h3 className="font-cormorant text-4xl md:text-5xl font-light text-ivory mb-2">{floor.label}</h3>
                  <p className="text-ivory/40 font-dm text-sm leading-relaxed mb-7">{floor.idealFor}</p>
                  <div className="space-y-3 mb-8">
                    {[
                      { label: "Built-up Area", value: floor.area },
                      { label: "Ceiling", value: floor.ceiling },
                      { label: "Access", value: floor.access },
                      { label: "Suited For", value: floor.best },
                    ].map(spec => (
                      <div key={spec.label} className="flex items-start gap-4 py-2 border-b border-white/[0.04]">
                        <span className="label opacity-35 w-28 shrink-0 mt-0.5">{spec.label}</span>
                        <span className="text-ivory/65 font-dm text-sm">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <motion.a href="tel:+919048480370" className="btn-gold inline-block"
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(201,168,76,0.4)" }}
                    whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                    Enquire About This Floor
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ) : null)}
        </AnimatePresence>
      </div>
    </section>
  );
}
