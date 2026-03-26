"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
  reversed?: boolean;
}

export default function ProjectCard({ project, index, reversed }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
        reversed ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Text content */}
      <div className={reversed ? "lg:order-2" : ""}>
        <p className="text-accent text-sm font-mono font-medium mb-2">
          Project {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-6">
          {project.title}
        </h3>

        {/* Problem */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-2">
            The Problem
          </h4>
          <p className="text-foreground-secondary leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-2">
            The Solution
          </h4>
          <p className="text-foreground-secondary leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Features */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-2">
            Key Features
          </h4>
          <ul className="space-y-1.5">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="text-foreground-secondary text-sm flex items-start gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-full border border-border text-foreground-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary hover:text-accent transition-colors"
            >
              <Github size={16} />
              Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary hover:text-accent transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Right side — Challenges & Learnings card */}
      <div className={reversed ? "lg:order-1" : ""}>
        <div className="p-6 rounded-xl bg-background-secondary border border-border">
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-2">
              Challenges
            </h4>
            <p className="text-foreground-secondary text-sm leading-relaxed">
              {project.challenges}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-2">
              What I Learned
            </h4>
            <p className="text-foreground-secondary text-sm leading-relaxed">
              {project.learned}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
