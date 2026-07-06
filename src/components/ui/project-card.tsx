"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import Image from "next/image";

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
      className="group cursor-pointer relative"
    >
      <div className="relative rounded-2xl overflow-hidden glass glow-border transition-all duration-500 group-hover:bg-white/[0.05] group-hover:shadow-2xl group-hover:shadow-white/[0.02]">
        {/* Project image area */}
        <div className="relative h-52 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, hsl(${index * 50 + 200}, 15%, 14%) 0%, hsl(${index * 50 + 230}, 10%, 9%) 100%)`,
            }}
          />

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Status badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${statusColor[project.status]}`}>
              {project.status}
            </span>
          </div>

          {/* Year */}
          <div className="absolute top-4 right-4 z-10">
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.06] text-text-tertiary">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1.5">
              <h3 className="text-heading-sm text-white group-hover:text-white/90 transition-colors">
                {project.title}
              </h3>
              <p className="text-body-sm text-text-secondary">
                {project.category}
              </p>
            </div>
            <div className="w-9 h-9 rounded-xl glass flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.08] transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-text-tertiary group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <p className="text-body-sm text-text-tertiary leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] text-text-tertiary transition-colors group-hover:text-text-secondary group-hover:bg-white/[0.06]"
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