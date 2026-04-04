"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    no: "01",
    title: "Main Road Frontage",
    body: "Direct visibility on Puthenthodu–Irinjalakuda road. Maximum exposure for any business that depends on foot traffic.",
  },
  {
    no: "02",
    title: "Three Independent Floors",
    body: "Each floor functions as a self-contained commercial unit. Operate as one building or lease each floor separately.",
  },
  {
    no: "03",
    title: "Ready for Immediate Operation",
    body: "Permits cleared. Electricity live. Water active. Fire safety certified. No setup delays.",
  },
  {
    no: "04",
    title: "Municipality Address",
    body: "Within Irinjalakuda Municipality limits. Full legal standing for any licensed commercial activity.",
  },
];

export default function Positioning() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <motion.p className="label mb-5"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
              Why This Building
            </motion.p>
            <motion.h2
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light leading-tight"
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              Built for<br />
              <span className="gold-shimmer">high-volume</span><br />
              commercial use.
            </motion.h2>
            <motion.div className="mt-8 gold-line w-16"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.35 }} />
          </div>

          <div className="flex flex-col gap-3">
            {pillars.map((item, i) => (
              <motion.div
                key={item.no}
                className="glass rounded-xl p-5 flex gap-4 hover:border-gold/20 transition-all duration-400 group"
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.22 } }}
              >
                <span className="font-mono text-xs text-gold/35 mt-0.5 shrink-0">{item.no}</span>
                <div>
                  <h3 className="font-cormorant text-lg text-ivory/90 mb-1">{item.title}</h3>
                  <p className="text-sm text-ivory/35 font-dm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
