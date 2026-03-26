"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-hotpink uppercase tracking-[0.2em] text-xs font-bold mb-10"
        >
          Projects
        </motion.h2>

        {/* Article-style project list (like Josh's blog entries) */}
        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: i * 0.1,
              }}
              className="group"
            >
              {/* Category + tech badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-medium uppercase tracking-wider text-neon-cyan">
                  {project.category}
                </span>
                <span className="text-navy-600">·</span>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded bg-navy-800 text-navy-300 border border-navy-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-200">
                <a href={project.github || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  {project.title}
                  <ArrowRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                  />
                </a>
              </h3>

              {/* Subtitle */}
              {project.subtitle && (
                <p className="text-sm text-navy-400 italic mb-3">{project.subtitle}</p>
              )}

              {/* Description */}
              <p className="text-navy-300 text-sm md:text-base leading-relaxed max-w-2xl mb-4">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-400 hover:text-white transition-colors"
                  >
                    <Github size={14} /> Source Code
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </motion.a>
                )}
              </div>

              {/* Separator */}
              {i < projects.length - 1 && (
                <div className="mt-10 border-b border-navy-700/50" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
