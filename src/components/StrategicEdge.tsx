"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const edges = [
  { icon: "◈", title: "Main Road Frontage", lines: ["Direct arterial visibility", "Puthenthodu junction", "Maximum footfall exposure"] },
  { icon: "◉", title: "Ample Compound Parking", lines: ["Spacious on-site parking", "Rare at this scale in Irinjalakuda", "Critical for high-footfall tenants"] },
  { icon: "◍", title: "Ready to Operate", lines: ["All permits cleared", "Electricity + water active", "Fire safety certified"] },
  { icon: "◎", title: "Adjacent Bus Stop", lines: ["Puthenthodu bus stop at doorstep", "Limited-stop & ordinary buses halt here", "High daily commuter volume"] },
  { icon: "◆", title: "12,000 Sq Ft — No Comparable", lines: ["Largest single commercial asset nearby", "No similar building within 3 km", "One title, one owner"] },
  { icon: "◇", title: "30-Cent Land Holding", lines: ["Appreciating asset", "Room for future expansion", "Municipality land value backing"] },
];

export default function StrategicEdge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16 max-w-xl">
          <motion.p className="label mb-5"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            Why This Asset Wins
          </motion.p>
          <motion.h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight"
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            Six reasons<br />this property<br /><span className="gold-shimmer">outperforms.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {edges.map((edge, i) => (
            <motion.div
              key={edge.title}
              className="glass rounded-2xl p-7 group cursor-default"
              initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.07 * i + 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.2)", boxShadow: "0 16px 48px rgba(0,0,0,0.35)", transition: { duration: 0.25 } }}
            >
              <div className="text-gold/40 text-2xl mb-4 group-hover:text-gold transition-colors duration-300">{edge.icon}</div>
              <h3 className="font-cormorant text-xl text-ivory/90 mb-3 leading-tight">{edge.title}</h3>
              <ul className="space-y-1.5">
                {edge.lines.map(line => (
                  <li key={line} className="text-xs text-ivory/30 font-dm flex items-start gap-2">
                    <span className="text-gold/25 mt-0.5">—</span>{line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-14 text-center"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          <motion.a
            href="https://wa.me/919495040824?text=Hi%2C%20I%27m%20interested%20in%20Kallery%20Galleria."
            target="_blank" rel="noopener noreferrer" className="btn-outline-gold"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            WhatsApp Us Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
