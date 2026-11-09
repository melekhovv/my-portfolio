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

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

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
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Centering / scrollable container: clicking empty space closes the modal */}
          <div
            onClick={onClose}
            className="relative flex min-h-full items-center justify-center p-4 sm:p-6 md:p-8 lg:py-10 lg:px-6 cursor-pointer"
          >
            {/* Modal Card: stop propagation so clicks inside do not close */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 32,
                mass: 0.8,
              }}
              onClick={(e) => e.stopPropagation()}
              data-spotlight
              className="spotlight-card relative my-4 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-[0_0_60px_rgba(0,0,0,0.85)] noise cursor-default"
            >
              <button
                onClick={onClose}
                className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-xl glass transition-colors hover:bg-white/10"
                aria-label="Закрыть"
              >
                <X className="h-4 w-4 text-white" />
              </button>

              <div className="relative h-60 overflow-hidden bg-black sm:h-72 md:h-80 lg:h-[22rem]">
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

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
              </div>

              <div className="relative z-10 space-y-8 p-6 sm:p-8 md:p-10">
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

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-6">
                    <div className="space-y-2.5">
                      <h3 className="text-caption uppercase tracking-wider text-text-tertiary">
                        Задача
                      </h3>
                      <p className="text-body leading-relaxed text-text-secondary">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="text-caption uppercase tracking-wider text-text-tertiary">
                        Решение
                      </h3>
                      <p className="text-body leading-relaxed text-text-secondary">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2.5">
                      <h3 className="text-caption uppercase tracking-wider text-text-tertiary">
                        Результат
                      </h3>
                      <p className="text-body leading-relaxed text-text-secondary">
                        {project.result}
                      </p>
                    </div>

                    <div className="space-y-2.5">
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

                <div className="flex flex-col gap-3.5 border-t border-white/[0.08] pt-6 sm:flex-row">
                  {project.url && (
                    <Button
                      variant="primary"
                      size="default"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      Открыть сайт
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    variant="secondary"
                    size="default"
                    onClick={onClose}
                    className="w-full sm:w-auto"
                  >
                    Закрыть
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
