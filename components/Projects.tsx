"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-container py-24">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-purple-400 text-sm font-mono font-medium mb-3"
      >
        03. Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
        className="font-heading text-3xl font-bold text-gray-100 mb-4"
      >
        Things I&apos;ve built
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-gray-400 text-lg mb-16 max-w-xl leading-relaxed"
      >
        Each project is a case study — here&apos;s the problem, the solution, and what I learned along the way.
      </motion.p>

      <div className="space-y-24">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
