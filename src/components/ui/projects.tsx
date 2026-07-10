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
      <section id="projects" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-2xl">
            <Reveal>
              <span className="text-caption uppercase tracking-widest text-text-tertiary">
                Портфолио
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-display">
                Избранные проекты
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-body-lg text-text-secondary">
                Каждый проект — это решение конкретной бизнес-задачи.
                Не просто красивые страницы, а инструменты роста.
              </p>
            </Reveal>
          </div>

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
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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
