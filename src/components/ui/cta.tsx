"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { Button } from "./button";

export function CTA() {
  return (
    <section id="cta" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-xl h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-surface" />
          <div className="absolute inset-0 noise" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl border border-border" />

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-20 md:py-28 text-center">
            <Reveal>
              <span className="text-caption text-text-tertiary uppercase tracking-widest">
                Начнём проект
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-display md:text-display-lg mt-6 max-w-3xl mx-auto">
                Нужен сайт, который действительно работает?
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-body-lg text-text-secondary mt-6 max-w-xl mx-auto">
                Давайте обсудим ваш проект и разберёмся, как сайт может
                стать инструментом роста для вашего бизнеса.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Button
                  variant="primary"
                  size="lg"
                  href="https://t.me/username"
                >
                  Написать в Telegram
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="mailto:hello@andreymelekhov.com"
                >
                  Отправить email
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}