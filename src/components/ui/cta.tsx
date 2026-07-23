"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { Button } from "./button";

export function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32">
      <div className="absolute left-1/2 top-0 h-px w-2/3 max-w-xl -translate-x-1/2 bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div data-spotlight className="spotlight-card relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-surface" />
          <div className="absolute inset-0 noise" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] max-w-full -translate-x-1/2 rounded-full bg-white/[0.025] blur-[100px]" />
          <div className="absolute inset-0 rounded-3xl border border-border" />

          <div className="relative z-10 px-5 py-16 text-center sm:px-8 md:px-16 md:py-28">
            <Reveal>
              <span className="text-caption uppercase tracking-widest text-text-tertiary">
                Начнем проект
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mx-auto mt-6 max-w-[18rem] text-[clamp(2.1rem,9vw,4.5rem)] font-bold leading-[0.98] tracking-normal text-white sm:max-w-3xl sm:text-[clamp(3rem,7vw,4.5rem)] md:text-display-lg">
                <span className="block sm:inline">Нужен сайт,</span>{" "}
                <span className="block sm:inline">который</span>{" "}
                <span className="block sm:inline">действительно</span>{" "}
                <span className="block sm:inline">работает?</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-body text-text-secondary sm:text-body-lg">
                Давайте обсудим ваш проект и разберемся, как сайт может стать
                инструментом роста для вашего бизнеса.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="primary" size="lg" href="https://t.me/andrei_melekhov" className="w-full max-w-xs rounded-xl sm:w-auto">
                  Написать в Telegram
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="lg" href="mailto:hello@andreymelekhov.com" className="w-full max-w-xs rounded-xl sm:w-auto">
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
