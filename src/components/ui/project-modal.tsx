"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { Button } from "./button";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [project?.id]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const currentImageLabel = currentImage === 0 ? "Desktop" : "Mobile";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
            className="fixed inset-4 z-50 flex items-start justify-center overflow-y-auto md:inset-8 lg:inset-12"
          >
            <div className="my-4 w-full max-w-4xl">
              <div data-spotlight className="spotlight-card relative overflow-hidden rounded-3xl border border-border bg-surface noise">
                <button
                  onClick={onClose}
                  className="absolute right-6 top-6 z-30 flex h-10 w-10 items-center justify-center rounded-xl glass transition-colors hover:bg-white/10"
                  aria-label="Закрыть"
                >
                  <X className="h-4 w-4 text-white" />
                </button>

                <div className="relative h-72 overflow-hidden bg-black md:h-96 lg:h-[28rem]">
                  <Image
                    src={project.gallery[currentImage]}
                    alt={`${project.title}: ${currentImageLabel} версия`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className={currentImage === 0 ? "object-cover object-top" : "object-contain"}
                  />

                  <div className="absolute left-5 top-5 z-10 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white/70 backdrop-blur">
                    {currentImageLabel} версия
                  </div>

                  {project.gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full glass transition-colors hover:bg-white/10"
                        aria-label="Предыдущее изображение"
                      >
                        <ChevronLeft className="h-5 w-5 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full glass transition-colors hover:bg-white/10"
                        aria-label="Следующее изображение"
                      >
                        <ChevronRight className="h-5 w-5 text-white" />
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                    {project.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        aria-label={`Открыть изображение ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentImage
                            ? "w-6 bg-white"
                            : "w-2 bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-surface to-transparent" />
                </div>

                <div className="relative z-10 space-y-10 p-8 md:p-10">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-caption uppercase tracking-wider text-text-tertiary">
                        {project.category}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-text-tertiary" />
                      <span className="text-caption text-text-tertiary">
                        {project.year}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-text-tertiary" />
                      <span className="text-caption text-text-tertiary">
                        {project.status}
                      </span>
                    </div>
                    <h2 className="text-display-sm text-white">{project.title}</h2>
                    <p className="max-w-2xl text-body-lg text-text-secondary">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-caption uppercase tracking-wider text-text-tertiary">
                          Задача
                        </h3>
                        <p className="text-body leading-relaxed text-text-secondary">
                          {project.challenge}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-caption uppercase tracking-wider text-text-tertiary">
                          Решение
                        </h3>
                        <p className="text-body leading-relaxed text-text-secondary">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-caption uppercase tracking-wider text-text-tertiary">
                          Результат
                        </h3>
                        <p className="text-body leading-relaxed text-text-secondary">
                          {project.result}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-caption uppercase tracking-wider text-text-tertiary">
                          Технологии
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg border border-border bg-white/[0.04] px-3 py-1.5 text-body-sm text-text-secondary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                    {project.url && (
                      <Button variant="primary" size="lg" href={project.url}>
                        Открыть сайт
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="secondary" size="lg" onClick={onClose}>
                      Закрыть
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
