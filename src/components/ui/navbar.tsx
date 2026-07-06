"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";

const navLinks = [
  { label: "Проекты", href: "#projects" },
  { label: "Обо мне", href: "#about" },
  { label: "Подход", href: "#features" },
  { label: "Контакт", href: "#cta" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3"
            : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl transition-all duration-500 px-6 py-3",
              scrolled
                ? "glass shadow-lg shadow-black/20"
                : "bg-transparent"
            )}
          >
            <a href="#" className="text-heading-sm text-white font-bold tracking-tight">
              AM
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Magnetic key={link.href} strength={0.15}>
                  <a
                    href={link.href}
                    className="px-4 py-2 text-body-sm text-text-secondary hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </Magnetic>
              ))}
            </div>

            <div className="hidden md:block">
              <Magnetic strength={0.15}>
                <a
                  href="#cta"
                  className="px-5 py-2.5 text-body-sm font-medium text-black bg-white rounded-xl hover:bg-white/90 transition-all duration-300"
                >
                  Связаться
                </a>
              </Magnetic>
            </div>

            <button
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-[1.5px] bg-white origin-center transition-colors"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-5 h-[1.5px] bg-white transition-colors"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-[1.5px] bg-white origin-center transition-colors"
                />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-4 text-display-sm text-white hover:text-text-secondary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileOpen(false)}
                className="mt-6 w-full max-w-xs text-center py-4 bg-white text-black rounded-2xl font-medium text-body-lg"
              >
                Связаться
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}