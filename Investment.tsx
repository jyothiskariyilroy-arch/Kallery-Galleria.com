"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

// ─── Floor-wise data ───────────────────────────────────────────────
const floors = [
  { id: "ground", label: "Ground Floor", area: "~4,000 sq ft", tag: "Street Level", best: "Supermarket · Showroom · Bank" },
  { id: "first",  label: "1st Floor",    area: "~4,000 sq ft", tag: "First Level",  best: "Healthcare · Diagnostics · Restaurant" },
  { id: "second", label: "2nd Floor",    area: "~4,000 sq ft", tag: "Second Level", best: "Office · Training Institute · Corporate" },
  { id: "third",  label: "3rd Floor",    area: "Varies",        tag: "Top Level",    best: "F&B · Events · Premium Office" },
];

const floorLeaseOptions = [
  {
    title: "4 + 4 Structure",
    badge: "Flexible & Scalable",
    desc: "4-year lock-in with optional 4-year extension — flexibility with long-term potential.",
  },
  {
    title: "5 Year Lock-in",
    badge: "Stable Long-term",
    desc: "Stable long-term commitment with predictable returns.",
  },
  {
    title: "10 Year Lock-in",
    badge: "Maximum Stability",
    desc: "Best suited for anchor tenants seeking long-term presence.",
  },
];

// ─── Full Building data ────────────────────────────────────────────
const buildingCards = [
  {
    label: "Option A",
    badge: "Flexible & Scalable",
    title: "4 + 4 Structure",
    rent: "₹3L",
    rows: [
      { k: "Initial Term", v: "4 Years" },
      { k: "Extension Option", v: "4 Years" },
      { k: "Security Deposit", v: "₹50 Lakhs" },
      { k: "Availability", v: "Immediate" },
    ],
    highlight: false,
  },
  {
    label: "Option B",
    badge: "Stable Long-term",
    title: "5 Year Lock-in",
    rent: "₹3L",
    rows: [
      { k: "Lock-in Period", v: "5 Years" },
      { k: "Security Deposit", v: "₹50 Lakhs" },
      { k: "Escalation", v: "Standard" },
      { k: "Availability", v: "Immediate" },
    ],
    highlight: false,
  },
  {
    label: "Option C",
    badge: "Maximum Stability",
    title: "10 Year Lock-in",
    rent: "₹3L",
    rows: [
      { k: "Lock-in Period", v: "10 Years" },
      { k: "Security Deposit", v: "₹50 Lakhs" },
      { k: "Best For", v: "Anchor Tenants" },
      { k: "Availability", v: "Immediate" },
    ],
    highlight: true,
  },
];

// ─── Floor accordion card ──────────────────────────────────────────
function FloorCard({ floor, index, isOpen, onToggle }: {
  floor: typeof floors[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className={`glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${isOpen ? "border-gold/25" : "hover:border-gold/15"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 + 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header — always visible */}
      <div
        className="flex items-center justify-between p-7 select-none"
        onClick={onToggle}
      >
        <div className="flex items-center gap-5">
          <div>
            <p className="label opacity-35 mb-0.5">{floor.tag}</p>
            <h3 className="font-cormorant text-2xl text-ivory/90">{floor.label}</h3>
            <p className="font-dm text-xs text-ivory/30 mt-1">{floor.area} · {floor.best}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-gold/50 text-xl leading-none shrink-0 ml-4"
        >
          +
        </motion.div>
      </div>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-7 pb-7 border-t border-white/[0.05]">
              <p className="label opacity-30 mt-5 mb-4">Lease Options</p>
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                {floorLeaseOptions.map((opt) => (
                  <div
                    key={opt.title}
                    className="glass rounded-xl p-4 border border-white/[0.04] hover:border-gold/15 transition-colors duration-300"
                  >
                    <span className="font-mono text-[0.5rem] uppercase tracking-widest text-gold/50 block mb-2">
                      {opt.badge}
                    </span>
                    <p className="font-cormorant text-lg text-ivory/85 mb-1">{opt.title}</p>
                    <p className="font-dm text-[0.7rem] text-ivory/30 leading-relaxed">{opt.desc}</p>
                  </div>
                ))}
              </div>
              <motion.a
                href="tel:+919048480370"
                className="btn-gold inline-block text-sm"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(201,168,76,0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Site Visit
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main component ────────────────────────────────────────────────
export default function Investment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [view, setView] = useState<"floor" | "building">("floor");
  const [openFloor, setOpenFloor] = useState<string | null>(null);

  const toggleFloor = (id: string) => setOpenFloor(prev => prev === id ? null : id);

  return (
    <section ref={ref} id="investment" className="relative py-32 bg-obsidian-900 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-12">
          <motion.p className="label mb-4" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            Asset Snapshot
          </motion.p>
          <motion.h2
            className="font-cormorant text-5xl md:text-6xl font-light"
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Choose your lease structure.<br />
            <span className="gold-shimmer">Floor-wise or full building.</span>
          </motion.h2>
        </div>

        {/* Toggle */}
        <motion.div
          className="inline-flex glass rounded-full p-1 mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {(["floor", "building"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setView(tab)}
              className={`relative px-6 py-2.5 rounded-full font-mono text-[0.62rem] uppercase tracking-widest transition-all duration-300 ${
                view === tab ? "text-obsidian-950" : "text-ivory/35 hover:text-ivory/60"
              }`}
            >
              {view === tab && (
                <motion.span
                  layoutId="toggle-pill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="relative">
                {tab === "floor" ? "Floor-wise Lease" : "Full Building Lease"}
              </span>
            </button>
          ))}
        </motion.div>

        {/* View content */}
        <AnimatePresence mode="wait">

          {/* ── Floor-wise view ── */}
          {view === "floor" && (
            <motion.div
              key="floor"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col gap-3">
                {floors.map((floor, i) => (
                  <FloorCard
                    key={floor.id}
                    floor={floor}
                    index={i}
                    isOpen={openFloor === floor.id}
                    onToggle={() => toggleFloor(floor.id)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Full Building view ── */}
          {view === "building" && (
            <motion.div
              key="building"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid md:grid-cols-3 gap-5">
                {buildingCards.map((opt, i) => (
                  <motion.div
                    key={opt.title}
                    className={`rounded-2xl p-8 relative overflow-hidden transition-all duration-300 ${opt.highlight ? "glass-gold" : "glass hover:border-gold/20"}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 + 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4, boxShadow: opt.highlight ? "0 20px 60px rgba(201,168,76,0.12)" : "0 20px 60px rgba(0,0,0,0.4)" }}
                  >
                    {opt.highlight && (
                      <div
                        className="absolute -top-16 -right-16 w-52 h-52 rounded-full pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)" }}
                      />
                    )}
                    <div className="flex items-start justify-between mb-4">
                      <span className="label opacity-30">{opt.label}</span>
                      <span className={`font-mono text-[0.52rem] uppercase tracking-widest px-3 py-1.5 rounded-full border ${
                        opt.highlight ? "border-gold/40 text-gold/80" : "border-white/10 text-ivory/35"
                      }`}>{opt.badge}</span>
                    </div>

                    <h3 className="font-cormorant text-2xl text-ivory/90 mb-2 leading-tight">{opt.title}</h3>
                    <p className="gold-shimmer font-cormorant text-5xl font-light leading-none mb-1">{opt.rent}</p>
                    <p className="text-ivory/30 font-dm text-xs mb-7">per month</p>

                    <div className="space-y-3 mb-7">
                      {opt.rows.map(row => (
                        <div key={row.k} className={`flex justify-between items-center border-b pb-2.5 ${opt.highlight ? "border-gold/10" : "border-white/5"}`}>
                          <span className="text-ivory/35 font-dm text-xs">{row.k}</span>
                          <span className="text-ivory/80 font-cormorant text-base">{row.v}</span>
                        </div>
                      ))}
                    </div>

                    <motion.a
                      href="tel:+919048480370"
                      className={opt.highlight ? "btn-gold inline-block text-sm" : "btn-outline-gold inline-block text-sm"}
                      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                    >
                      Lease Enquiry
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Specs bar — always visible */}
        <motion.div
          className="glass rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { val: "12,000", sub: "sq ft total" },
            { val: "30", sub: "cents land" },
            { val: "3", sub: "floors" },
            { val: "100%", sub: "permit ready" },
          ].map(s => (
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
