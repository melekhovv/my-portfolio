"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { Reveal } from "./reveal";
import type { Project } from "@/data/projects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="max-w-2xl mb-20">
            <Reveal>
              <span className="text-caption text-text-tertiary uppercase tracking-widest">
                Портфолио
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-display mt-4">
                Избранные проекты
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-body-lg text-text-secondary mt-5">
                Каждый проект — это решение конкретной бизнес-задачи.
                Не просто красивые страницы, а инструменты роста.
              </p>
            </Reveal>
          </div>

          {/* Projects grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => openProject(project)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={closeProject}
      />
    </>
  );
}