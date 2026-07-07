"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "./button";

const featuredCases = [
  {
    title: "Клиника крови",
    type: "медицинский сервис",
    metric: "донорство онлайн",
  },
  {
    title: "BuildEstate",
    type: "недвижимость",
    metric: "3D-подбор квартир",
  },
  {
    title: "CraftStore",
    type: "e-commerce",
    metric: "заказы без Instagram",
  },
];

const stats = [
  { value: "30+", label: "проектов" },
  { value: "4 года", label: "опыта" },
  { value: "5 сфер", label: "бизнеса" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-white/[0.06] bg-[#070707] pt-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:112px_112px]" />
        <div className="absolute inset-y-0 right-[-12%] w-2/5 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.13),transparent)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.1)_0%,rgba(7,7,7,0.8)_100%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center gap-10 px-6 pb-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(430px,0.8fr)] lg:gap-14">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-gradient max-w-4xl text-6xl font-semibold leading-[0.96] tracking-normal md:text-7xl lg:text-8xl"
          >
            Андрей
            <br />
            Мелехов
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 max-w-xl border-t border-white/[0.08] pt-6 text-base leading-7 text-white/62 md:text-lg"
          >
            Сразу показываю кейсы: интерфейсы, визуальный уровень и бизнес-задачи.
            За пару секунд понятно, подходит ли вам мой подход.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-7 flex flex-wrap gap-4"
          >
            <Button href="#projects" variant="primary" size="lg" className="rounded-md shadow-[0_0_34px_rgba(255,255,255,0.12)]">
              Посмотреть проекты
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button href="#cta" variant="secondary" size="lg" className="rounded-md border-white/[0.12] bg-white/[0.035]">
              Связаться
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-24 border-l border-white/10 pl-4">
                <div className="text-xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-[11px] uppercase text-white/38">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid gap-3 self-center lg:pt-32"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {featuredCases.map((item, index) => (
              <a
                key={item.title}
                href="#projects"
                className={
                  index === 0
                    ? "group relative min-h-72 overflow-hidden rounded-md border border-white/[0.1] bg-white/[0.04] p-5 shadow-[0_0_60px_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-white/25 sm:col-span-2"
                    : "group relative min-h-44 overflow-hidden rounded-md border border-white/[0.08] bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065]"
                }
              >
                {index === 0 ? (
                  <Image
                    src="/projects/project-1.jpg"
                    alt="Превью проекта Клиника крови"
                    fill
                    priority
                    className="object-cover opacity-[0.72] transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.035)_45%,rgba(255,255,255,0.09))]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/10" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] uppercase text-white/52">{item.type}</span>
                    <ArrowUpRight className="h-4 w-4 text-white/55 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </div>
                  <div>
                    <h2 className={index === 0 ? "text-3xl font-semibold text-white" : "text-xl font-semibold text-white"}>
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm text-white/58">{item.metric}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
