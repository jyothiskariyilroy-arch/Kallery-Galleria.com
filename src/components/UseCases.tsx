"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  { type: "Supermarket", outcome: "Daily footfall. Repeat customers. Ground floor scale is a direct match." },
  { type: "Showroom", outcome: "Main road visibility converts browsers to buyers. Ideal frontage." },
  { type: "Clinic / Diagnostics", outcome: "Serves the full Irinjalakuda corridor. Accessible, scalable." },
  { type: "Bank / Financial Institution", outcome: "Municipality address. Bus stop proximity. High trust location." },
  { type: "Franchise Brand", outcome: "High-visibility site. No setup lag. Immediate launch." },
  { type: "Gym / Fitness Studio", outcome: "Recurring monthly revenue. Strong customer lifetime value." },
  { type: "Restaurant / Café", outcome: "Bus stop foot traffic drives daily covers. Ground floor ready." },
  { type: "Corporate Office / HQ", outcome: "Multi-floor setup. Professional municipality address." },
];

const bestFor = ["Supermarkets", "Showrooms", "Clinics / Diagnostics", "Banks", "Franchise Brands"];

export default function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[350px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(201,168,76,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Quick scan pills */}
        <motion.div
          className="glass-gold rounded-xl p-6 mb-14 flex flex-col md:flex-row gap-5 items-start md:items-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="shrink-0">
            <p className="label mb-1">Who This Is For</p>
            <p className="font-cormorant text-2xl font-light text-ivory/75">Best-fit business types</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {bestFor.map(b => (
              <span key={b} className="font-mono text-[0.58rem] uppercase tracking-widest border border-gold/25 text-gold/70 px-4 py-2 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-10">
          <div className="lg:w-1/3">
            <motion.p className="label mb-5"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
              Use Cases
            </motion.p>
            <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight"
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              What this<br /><span className="gold-shimmer">space enables.</span>
            </motion.h2>
          </div>
          <div className="lg:w-2/3 flex items-end">
            <motion.p className="text-ivory/30 font-dm text-sm leading-relaxed max-w-md"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
              Flexible floor plates. High-visibility location. Permitted for all commercial categories.
              Ready for immediate setup — no construction lag.
            </motion.p>
          </div>
        </div>

        <div className="space-y-px">
          {cases.map((c, i) => (
            <motion.div
              key={c.type}
              className="group flex items-center justify-between border border-transparent hover:border-gold/10 rounded-xl px-5 py-4 hover:bg-white/[0.02] transition-all duration-300 cursor-default"
              initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.05 * i + 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <div className="flex items-center gap-5">
                <span className="font-mono text-[0.58rem] text-gold/25 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-cormorant text-xl md:text-2xl text-ivory/75 group-hover:text-ivory transition-colors duration-300">{c.type}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gold/25 group-hover:text-gold/50 transition-colors duration-300">→</span>
                <span className="text-sm text-ivory/25 group-hover:text-ivory/45 transition-colors duration-300 font-dm text-right max-w-xs hidden md:block">{c.outcome}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
