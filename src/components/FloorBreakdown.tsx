"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

const floors = [
  {
    id: "ground", label: "Ground Floor", tag: "Street Level",
    area: "~4,000 sq ft", height: "High ceiling — branding-ready",
    best: "Supermarket · Showroom · Bank · Retail",
    idealFor: "High-footfall street-level operations. Maximum commercial velocity.",
    caption: ["Wide layout flexibility", "High ceiling for branding", "Direct street access"],
    images: images.groundFloor,
  },
  {
    id: "first", label: "1st Floor", tag: "First Level",
    area: "~4,000 sq ft", height: "Standard — open plan",
    best: "Healthcare · Diagnostics · Restaurant · Gym",
    idealFor: "Service businesses needing flow and open floor space.",
    caption: ["Natural lighting advantage", "Open plan flexibility", "Lift + staircase access"],
    images: images.firstFloor,
  },
  {
    id: "second", label: "2nd Floor", tag: "Second Level",
    area: "~4,000 sq ft", height: "Standard — professional finish",
    best: "Office · Training Institute · Corporate HQ",
    idealFor: "Businesses prioritising focus, professionalism and quiet elevation.",
    caption: ["Professional ambience", "Wide layout flexibility", "Quiet commercial setting"],
    images: images.secondFloor,
  },
  {
    id: "third", label: "3rd Floor", tag: "Top Level",
    area: "Varies — with rooftop access", height: "Panoramic views",
    best: "F&B · Event Space · Premium Office",
    idealFor: "Premium positioning. Exclusive operations. Elevated branding.",
    caption: ["Panoramic views", "Premium exclusivity", "Rooftop access potential"],
    images: images.thirdFloor,
  },
];

function FloorImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="img-placeholder w-full h-full flex flex-col items-center justify-center gap-2">
        <div className="text-gold/20 text-3xl">◈</div>
        <p className="label opacity-15">Image loading</p>
      </div>
    );
  }
  return (
    <Image src={src} alt={alt} fill className="object-cover"
      unoptimized onError={() => setError(true)} />
  );
}

export default function FloorBreakdown() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFloor, setActiveFloor] = useState(0);

  return (
    <section ref={ref} id="floors" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <motion.p className="label mb-6"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>Floor Breakdown</motion.p>
          <motion.h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight max-w-lg"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
            Every floor.<br /><span className="gold-shimmer">Every detail.</span>
          </motion.h2>
        </div>

        <motion.div className="flex gap-2 mb-12 flex-wrap"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
          {floors.map((f, i) => (
            <button key={f.id} onClick={() => setActiveFloor(i)}
              className={`px-5 py-2.5 rounded-full font-mono text-[0.65rem] uppercase tracking-widest transition-all duration-300 ${
                activeFloor === i ? "bg-gold text-obsidian-950 font-bold" : "glass text-ivory/40 hover:text-ivory/70"}`}>
              {f.label}
            </button>
          ))}
        </motion.div>

        {floors.map((floor, fi) => (
          <motion.div key={floor.id} className={activeFloor === fi ? "block" : "hidden"}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Images with captions */}
              <div className="grid grid-cols-2 gap-3">
                {floor.images.slice(0, 4).map((src, i) => (
                  <div key={src} className={`relative rounded-xl overflow-hidden bg-obsidian-800 group ${i === 0 ? "col-span-2 h-64" : "h-44"}`}>
                    <FloorImage src={src} alt={`${floor.label} view ${i + 1}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/50 to-transparent" />
                    {floor.caption[i] && (
                      <div className="absolute bottom-3 left-3">
                        <span className="font-mono text-[0.55rem] uppercase tracking-widest text-gold/70 bg-obsidian-950/60 px-2 py-1 rounded">
                          {floor.caption[i]}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Info */}
              <div className="lg:pl-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="label">{floor.tag}</span>
                  <div className="gold-line flex-1" />
                </div>
                <h3 className="font-cormorant text-4xl md:text-5xl font-light text-ivory mb-3">{floor.label}</h3>
                <p className="text-gold/70 font-dm text-sm mb-2">Ideal for: <span className="text-gold">{floor.best}</span></p>
                <p className="text-ivory/40 font-dm text-sm leading-relaxed mb-8">{floor.idealFor}</p>

                <div className="space-y-4 mb-10">
                  {[
                    { label: "Built-up Area", value: floor.area },
                    { label: "Ceiling / Finish", value: floor.height },
                  ].map(spec => (
                    <div key={spec.label} className="flex items-start gap-4">
                      <span className="label opacity-40 w-32 shrink-0 mt-0.5">{spec.label}</span>
                      <span className="text-ivory/70 font-dm text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <a href="tel:+919495040824" className="btn-gold inline-block">Enquire About This Floor</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
