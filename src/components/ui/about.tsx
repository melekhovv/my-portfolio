"use client";

import React from "react";
import { Reveal, StaggerContainer, StaggerItem } from "./reveal";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Subtle separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-xl h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <Reveal>
              <span className="text-caption text-text-tertiary uppercase tracking-widest">
                Обо мне
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-display mt-4">
                Сайты, которые работают на бизнес
              </h2>
            </Reveal>
          </div>

          {/* Right */}
          <StaggerContainer className="space-y-6" staggerDelay={0.12}>
            <StaggerItem>
              <p className="text-body-lg text-text-secondary leading-relaxed">
                Я создаю сайты, которые становятся инструментом роста бизнеса.
                Для меня сайт — не просто красивый дизайн. Он должен приводить
                клиентов, вызывать доверие и приносить прибыль.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-body-lg text-text-secondary leading-relaxed">
                Каждое решение в интерфейсе должно работать на результат.
                Продуманная структура, правильные акценты, четкий путь
                пользователя — всё это превращает посетителей в клиентов.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-body-lg text-text-secondary leading-relaxed">
                Я работаю с современным стеком технологий и уделяю внимание
                каждой детали: от скорости загрузки до микроанимаций. Результат —
                сайты, которые выглядят на уровне продуктов лучших IT-компаний
                мира.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Node.js",
                  "PostgreSQL",
                  "Figma",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-body-sm px-4 py-2 rounded-xl glass text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}