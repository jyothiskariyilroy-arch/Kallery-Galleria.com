"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const edges = [
  { icon: "◈", title: "Main Road Frontage", lines: ["Direct arterial visibility", "Puthenthodu junction", "Maximum footfall exposure"] },
  { icon: "◉", title: "Ample Parking", lines: ["Spacious compound parking", "Rare at this scale in Irinjalakuda", "Critical for high-footfall tenants"] },
  { icon: "◍", title: "Ready to Operate", lines: ["All permits cleared", "Electricity + water active", "Fire safety certified — walk in, start"] },
  { icon: "◎", title: "Transport Node", lines: ["Adjacent to Puthenthodu bus stop", "Limited-stop & ordinary buses halt here", "High daily commuter volume"] },
  { icon: "◆", title: "12,000 Sq Ft Scale", lines: ["Single asset, one clear title", "No comparable within 3 km", "Entire building under one ownership"] },
  { icon: "◇", title: "30-Cent Land Holding", lines: ["Significant appreciating asset", "Expansion headroom", "Backed by municipality land value"] },
];

export default function StrategicEdge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-20 max-w-xl">
          <motion.p className="label mb-6"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            Why This Asset Wins
          </motion.p>
          <motion.h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
            Six reasons
            <br />this property
            <br /><span className="gold-shimmer">outperforms.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {edges.map((edge, i) => (
            <motion.div key={edge.title}
              className="glass rounded-2xl p-8 hover:border-gold/20 transition-all duration-500 group cursor-default"
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.7 }}
              style={{ minHeight: i % 3 === 1 ? "220px" : "180px" }}>
              <div className="text-gold/50 text-2xl mb-5 group-hover:text-gold transition-colors">{edge.icon}</div>
              <h3 className="font-cormorant text-2xl text-ivory/90 mb-4 leading-tight">{edge.title}</h3>
              <ul className="space-y-1">
                {edge.lines.map(line => (
                  <li key={line} className="text-xs text-ivory/35 font-dm flex items-start gap-2">
                    <span className="text-gold/30 mt-0.5">—</span>{line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Repeat CTA */}
        <motion.div className="mt-16 text-center"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          <a href="https://wa.me/919495040824?text=Hi%2C%20I%27m%20interested%20in%20Kallery%20Galleria.%20Please%20share%20details."
            target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
            WhatsApp Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
