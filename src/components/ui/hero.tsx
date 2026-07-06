"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "./button";
import { projects } from "@/data/projects";

const miniCards = projects.slice(0, 3);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-caption text-text-secondary tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Открыт для проектов
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-display-lg max-lg:text-display leading-[1.05]"
              >
                <span className="text-gradient">Андрей</span>
                <br />
                <span className="text-gradient">Мелехов</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-body-lg text-text-secondary max-w-md leading-relaxed"
              >
                Разработчик сайтов, которые помогают бизнесу расти.
                <br />
                <span className="text-text-tertiary">
                  Сайт должен приносить деньги, а не высасывать их.
                </span>
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Button href="#projects" variant="primary" size="lg">
                Посмотреть проекты
                <ArrowDown className="w-4 h-4" />
              </Button>
              <Button href="#cta" variant="secondary" size="lg">
                Связаться
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-8 pt-4"
            >
              {[
                { value: "30+", label: "Проектов" },
                { value: "4 года", label: "Опыта" },
                { value: "100%", label: "Результат" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-heading text-white">{stat.value}</div>
                  <div className="text-caption text-text-tertiary uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — project preview cards */}
          <div className="relative">
            <div className="space-y-4">
              {miniCards.map((project, index) => (
                <motion.a
                  key={project.id}
                  href="#projects"
                  initial={{ opacity: 0, x: 60, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.12,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{ scale: 1.02, x: -4 }}
                  className="group block glass rounded-2xl p-5 cursor-pointer transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10"
                >
                  <div className="flex items-start gap-4">
                    {/* Colored placeholder for project thumbnail */}
                    <div className="w-16 h-16 rounded-xl bg-surface-lighter flex-shrink-0 overflow-hidden relative">
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          background: `linear-gradient(135deg, hsl(${index * 60}, 20%, 30%) 0%, hsl(${index * 60 + 30}, 15%, 15%) 100%)`,
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-caption text-text-tertiary font-semibold">
                        {project.title.charAt(0)}{project.title.charAt(project.title.indexOf(" ") + 1) || project.title.charAt(1)}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <h3 className="text-heading-sm text-white truncate group-hover:text-white/90 transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-text-tertiary group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                      </div>
                      <p className="text-body-sm text-text-secondary truncate">
                        {project.category}
                      </p>
                      <div className="flex gap-2 mt-2.5 flex-wrap">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-text-tertiary font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Fade overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />

            {/* Ambient decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/[0.01] rounded-full blur-[60px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}