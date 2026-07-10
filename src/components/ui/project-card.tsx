"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const statusColor = {
    "Завершен": "bg-emerald-400/20 text-emerald-300",
    "В разработке": "bg-amber-400/20 text-amber-300",
    "Поддержка": "bg-blue-400/20 text-blue-300",
  };

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      <div data-spotlight className="spotlight-card relative overflow-hidden rounded-2xl glass glow-border transition-all duration-500 group-hover:bg-white/[0.05] group-hover:shadow-2xl group-hover:shadow-white/[0.02]">
        <div className="relative h-52 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, hsl(${index * 38 + 188}, 15%, 14%) 0%, hsl(${index * 38 + 220}, 10%, 9%) 100%)`,
            }}
          />

          <Image
            src={project.image}
            alt={`Скриншот проекта ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute left-4 top-4 z-10">
            <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusColor[project.status]}`}>
              {project.status}
            </span>
          </div>

          <div className="absolute right-4 top-4 z-10">
            <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-text-tertiary">
              {project.year}
            </span>
          </div>
        </div>

        <div className="space-y-4 p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1.5">
              <h3 className="text-heading-sm text-white transition-colors group-hover:text-white/90">
                {project.title}
              </h3>
              <p className="text-body-sm text-text-secondary">
                {project.category}
              </p>
            </div>
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl glass transition-all duration-300 group-hover:bg-white/[0.08]">
              <ArrowUpRight className="h-4 w-4 text-text-tertiary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </div>
          </div>

          <p className="line-clamp-2 text-body-sm leading-relaxed text-text-tertiary">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-text-tertiary transition-colors group-hover:bg-white/[0.06] group-hover:text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
