"use client";
import { useState, useEffect } from "react";

const MESSAGES = [
  "Good locations take a second...",
  "Prime assets don't rush...",
  "Worth the wait — almost ready...",
  "Setting up something valuable...",
];

export default function ImageLoader() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % MESSAGES.length);
        setVisible(true);
      }, 300);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.55) 0%, rgba(20,18,14,0.45) 100%)" }}
      />
      <p
        className="relative font-cormorant text-base md:text-lg text-ivory/55 text-center px-6 leading-snug tracking-wide italic"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {MESSAGES[index]}
      </p>
    </div>
  );
}
