"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

const mockupLabels = [
  { title: "Supermarket Setup", sub: "Ground floor — full retail layout" },
  { title: "Showroom Interior", sub: "High ceiling — branding-ready" },
  { title: "Clinic & Diagnostics", sub: "1st floor — service flow layout" },
  { title: "Corporate Office", sub: "2nd floor — professional finish" },
  { title: "Restaurant / Café", sub: "Street level — bus stop proximity" },
  { title: "Premium Gym", sub: "Open plan — high-traffic fit" },
];

function MockupImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="img-placeholder w-full h-full flex flex-col items-center justify-center gap-3 min-h-[240px]">
        <div className="text-gold/20 text-4xl">◈</div>
        <p className="label opacity-20">AI Mockup</p>
      </div>
    );
  }

  return (
    <>
      {!loaded && <div className="absolute inset-0 img-placeholder animate-pulse" />}
      <Image
        src={src} alt={alt} fill
        className={`object-cover transition-all duration-700 group-hover:scale-[1.03] ${loaded ? "opacity-100" : "opacity-0"}`}
        unoptimized
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </>
  );
}

export default function Mockups() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="mockups" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <motion.p className="label mb-5"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
              AI Mockups
            </motion.p>
            <motion.h2
              className="font-cormorant text-5xl md:text-6xl font-light leading-tight"
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              Imagine the<br /><span className="gold-shimmer">possibilities.</span>
            </motion.h2>
          </div>
          <motion.p className="text-ivory/25 font-dm text-sm max-w-xs leading-relaxed"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
            AI-rendered visualisations showing how each floor could operate across different business categories.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.mockups.map((src, i) => (
            <motion.div
              key={src}
              className="group relative overflow-hidden rounded-2xl bg-obsidian-800 cursor-default"
              style={{ aspectRatio: "4/3" }}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.07 * i + 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <MockupImage src={src} alt={mockupLabels[i]?.title ?? `Mockup ${i + 1}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/75 via-obsidian-950/10 to-transparent pointer-events-none" />

              {/* Label — stays on image for mockups since it's labelling the concept */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-cormorant text-xl text-ivory/90 leading-tight">{mockupLabels[i]?.title}</p>
                <p className="font-mono text-[0.52rem] uppercase tracking-widest text-gold/55 mt-1">{mockupLabels[i]?.sub}</p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-mono text-[0.52rem] uppercase tracking-widest text-gold/70 bg-obsidian-950/80 px-2 py-1 rounded">
                  AI Rendered
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
          <p className="text-ivory/20 font-dm text-sm mb-6">Every floor is ready for immediate commercial operation — adaptable to your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href="tel:+919048480370" className="btn-gold"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(201,168,76,0.4)" }}
              whileTap={{ scale: 0.98 }}>
              Schedule Site Visit
            </motion.a>
            <motion.a
              href="https://wa.me/919048480370?text=Hi%2C%20I%27m%20interested%20in%20Kallery%20Galleria.%20Please%20share%20the%20mockup%20deck."
              target="_blank" rel="noopener noreferrer" className="btn-outline-gold"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              Request Full Mockup Deck
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
