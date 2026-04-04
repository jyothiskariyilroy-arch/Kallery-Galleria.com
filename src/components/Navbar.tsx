"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { label: "Floors", href: "#floors" },
  { label: "Investment", href: "#investment" },
  { label: "Mockups", href: "#mockups" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4 glass border-b border-white/5" : "py-6 bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-cormorant text-xl font-medium text-ivory/90">Kallery</span>
          <span className="font-mono text-[0.5rem] text-gold uppercase tracking-widest">Galleria</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a key={link.label} href={link.href}
              className="font-mono text-[0.6rem] uppercase tracking-widest text-ivory/35 hover:text-gold transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>

        <motion.a
          href="tel:+919048480370"
          className="hidden md:inline-block btn-gold py-2.5 px-5 text-[0.6rem]"
          whileHover={{ scale: 1.03, boxShadow: "0 6px 24px rgba(201,168,76,0.35)" }}
          whileTap={{ scale: 0.98 }}>
          Call Now
        </motion.a>

        <button className="md:hidden text-ivory/50 hover:text-ivory transition-colors"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className="space-y-1.5 w-6">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <motion.div
        className="md:hidden glass border-t border-white/5 overflow-hidden"
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}>
        <div className="px-6 py-5 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              className="font-mono text-[0.62rem] uppercase tracking-widest text-ivory/45 hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
          <a href="tel:+919048480370" className="btn-gold mt-2 text-center">Call Now</a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
