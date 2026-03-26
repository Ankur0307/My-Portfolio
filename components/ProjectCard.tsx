"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-2xl border border-white/5 hover:border-purple-500/50 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] flex flex-col lg:flex-row gap-8 lg:gap-12 items-start overflow-hidden"
    >
      {/* Background glow behind card for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Since project image was requested but we don't have real images in data yet, we use a nice placeholder block with animated overlay 
          In reality, we would integrate <Image src={project.image} ... /> if images are added to lib/data.ts 
      */}
      <div className="w-full lg:w-2/5 aspect-video md:aspect-[4/3] relative rounded-xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-purple-500/30 transition-colors duration-500 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#111827] to-[#0f172a] z-0" />
        
        {/* Placeholder UI pattern for images */}
        <div className="absolute inset-0 p-4 flex flex-col items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500 z-10 group-hover:scale-105 transform">
           <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur mb-3">
             <Code2Icon size={24} className="text-purple-400" />
           </div>
           <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">{project.category || "Project Preview"}</p>
        </div>
        
        {/* Dark overlay fade on hover */}
        <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
      </div>

      <div className="w-full lg:w-3/5 flex flex-col relative z-30">
        <p className="text-purple-400 text-sm font-mono font-medium mb-2">
          Case Study {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>

        {/* Problem */}
        <div className="mb-5">
          <h4 className="text-sm font-bold text-gray-200 tracking-wider mb-2">
            The Problem
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-5">
          <h4 className="text-sm font-bold text-gray-200 tracking-wider mb-2">
            The Solution
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            {project.solution}
          </p>
        </div>
        
        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 group-hover:border-purple-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Code2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
