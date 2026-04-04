"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CallFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-8 left-8 z-50 flex items-center gap-3"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href="tel:+919048480370"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center gap-2.5 px-4 py-3 rounded-full glass-gold transition-all duration-300"
        style={{
          boxShadow: hovered
            ? "0 8px 30px rgba(201,168,76,0.35), 0 2px 12px rgba(201,168,76,0.2)"
            : "0 4px 20px rgba(201,168,76,0.12)",
          transform: hovered ? "translateY(-2px) scale(1.03)" : "translateY(0) scale(1)",
        }}
        aria-label="Call us"
      >
        {/* Phone icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gold shrink-0"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="font-mono text-[0.6rem] uppercase tracking-widest text-gold whitespace-nowrap">
          Call
        </span>
      </a>
    </motion.div>
  );
}
