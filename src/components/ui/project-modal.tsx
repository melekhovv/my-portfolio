"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Button } from "./button";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
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
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 flex items-start justify-center overflow-y-auto"
          >
            <div className="w-full max-w-4xl my-4">
              <div className="relative rounded-3xl overflow-hidden bg-surface border border-border noise">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-20 w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {/* Gallery */}
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, hsl(220, 15%, 14%) 0%, hsl(240, 10%, 9%) 100%)`,
                    }}
                  />

                  {/* Gallery placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="text-display text-white/10 font-bold">
                        {project.title}
                      </div>
                      <div className="text-body-sm text-text-tertiary">
                        Экран {currentImage + 1} из {project.gallery.length}
                      </div>
                    </div>
                  </div>

                  {/* Gallery nav */}
                  {project.gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors z-10"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors z-10"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </>
                  )}

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {project.gallery.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === currentImage
                            ? "bg-white w-6"
                            : "bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 space-y-10">
                  {/* Header */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-caption text-text-tertiary uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                      <span className="text-caption text-text-tertiary">
                        {project.year}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                      <span className="text-caption text-text-tertiary">
                        {project.status}
                      </span>
                    </div>
                    <h2 className="text-display-sm text-white">{project.title}</h2>
                    <p className="text-body-lg text-text-secondary max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Details grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-caption text-text-tertiary uppercase tracking-wider">
                          Задача
                        </h3>
                        <p className="text-body text-text-secondary leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-caption text-text-tertiary uppercase tracking-wider">
                          Решение
                        </h3>
                        <p className="text-body text-text-secondary leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-caption text-text-tertiary uppercase tracking-wider">
                          Результат
                        </h3>
                        <p className="text-body text-text-secondary leading-relaxed">
                          {project.result}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-caption text-text-tertiary uppercase tracking-wider">
                          Технологии
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="text-body-sm px-3 py-1.5 rounded-lg bg-white/[0.04] text-text-secondary border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4">
                    {project.url && (
                      <Button variant="primary" size="lg" href={project.url}>
                        Открыть сайт
                        <ExternalLink className="w-4 h-4" />
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