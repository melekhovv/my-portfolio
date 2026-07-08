"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Zap,
  Search,
  Smartphone,
  Target,
  MousePointerClick,
} from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./reveal";

const features = [
  {
    icon: LayoutGrid,
    title: "Продуманная структура",
    description:
      "Информационная архитектура, которая ведет пользователя к целевому действию.",
  },
  {
    icon: MousePointerClick,
    title: "Современный UX",
    description:
      "Интуитивные интерфейсы на основе лучших практик и исследований пользовательского опыта.",
  },
  {
    icon: Zap,
    title: "Высокая скорость",
    description:
      "Оптимизация производительности на каждом уровне. Быстрая загрузка — больше конверсий.",
  },
  {
    icon: Search,
    title: "SEO-ready",
    description:
      "Техническая SEO-оптимизация из коробки. Семантическая вёрстка, метаданные, структура.",
  },
  {
    icon: Smartphone,
    title: "Адаптивность",
    description:
      "Идеальное отображение на всех устройствах. Mobile-first подход к разработке.",
  },
  {
    icon: Target,
    title: "Фокус на конверсии",
    description:
      "Каждый элемент интерфейса работает на превращение посетителя в клиента.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-xl h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal>
            <span className="text-caption text-text-tertiary uppercase tracking-widest">
              Подход
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display mt-4">
              Почему мои сайты работают
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-body-lg text-text-secondary mt-5">
              Каждый проект строится на принципах, которые обеспечивают
              измеримый результат для бизнеса.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.08}
        >
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ y: -4 }}
                data-spotlight
                className="spotlight-card group relative p-8 rounded-2xl glass glow-border h-full transition-all duration-500 hover:bg-white/[0.04]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors duration-500">
                    <feature.icon className="w-5 h-5 text-text-secondary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-heading-sm text-white">
                    {feature.title}
                  </h3>
                  <p className="text-body-sm text-text-tertiary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
