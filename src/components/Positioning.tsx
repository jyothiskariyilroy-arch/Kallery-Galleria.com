"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Positioning() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: headline */}
          <div>
            <motion.p
              className="label mb-6"
              custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            >
              Positioning
            </motion.p>

            <motion.h2
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light leading-tight"
              custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            >
              Built for
              <br />
              <span className="gold-shimmer">high-volume</span>
              <br />
              commercial
              <br />
              operations.
            </motion.h2>

            <motion.div
              className="mt-10 gold-line w-20"
              custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            />
          </div>

          {/* Right: positioning pillars */}
          <div className="flex flex-col gap-6">
            {[
              {
                no: "01",
                title: "Main Road Frontage",
                body: "Direct visibility on Puthenthodu–Irinjalakuda road. Maximum exposure, minimum friction for customers.",
              },
              {
                no: "02",
                title: "3 Independent Floors",
                body: "Each floor functions as a self-contained commercial unit. Operate as one entity or lease by floor.",
              },
              {
                no: "03",
                title: "Zero Setup Delay",
                body: "Permits cleared. Electricity live. Water supply active. Fire safety in place. Walk in, operate.",
              },
              {
                no: "04",
                title: "Municipality Grade Asset",
                body: "Within Irinjalakuda Municipality limits. Full legal standing for any licensed commercial activity.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.no}
                className="glass rounded-xl p-6 flex gap-5 group hover:border-gold/20 transition-all duration-300"
                custom={i + 2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              >
                <span className="font-mono text-xs text-gold/40 mt-1 shrink-0">{item.no}</span>
                <div>
                  <h3 className="font-cormorant text-xl text-ivory/90 mb-1">{item.title}</h3>
                  <p className="text-sm text-ivory/40 font-dm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
