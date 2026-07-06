"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Send, Mail } from "lucide-react";
import { Reveal } from "./reveal";

const socialLinks = [
  { label: "Telegram", href: "https://t.me/andrei_melekhov", icon: Send },
  { label: "GitHub", href: "https://github.com/melekhovv", icon: Github },
  { label: "Email", href: "mailto:anrewje@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="py-12 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-xl h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <span className="text-heading-sm text-white font-bold tracking-tight">
                Андрей Мелехов
              </span>
              <span className="text-body-sm text-text-tertiary">
                Разработка сайтов для бизнеса
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/[0.08] transition-colors duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4 text-text-tertiary group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-body-sm text-text-tertiary">
              © {new Date().getFullYear()} Андрей Мелехов. Все права защищены.
            </span>
            <span className="text-body-sm text-text-tertiary">
              Сделано с вниманием к каждой детали
            </span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}