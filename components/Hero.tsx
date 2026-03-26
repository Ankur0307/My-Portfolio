"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Code2, type LucideIcon } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Github, Linkedin, Mail, Code2,
};

export default function Hero() {
  return (
    <section className="section-container pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="text-container">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-accent text-sm font-medium mb-6 font-mono"
        >
          Hi, my name is
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          style={{ whiteSpace: "pre-line" }}
        >
          {personalInfo.headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-lg text-foreground-secondary leading-relaxed mb-10 max-w-xl"
        >
          {personalInfo.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-light hover:bg-background-card text-foreground text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex items-center gap-5"
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            if (!Icon) return null;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-foreground-muted hover:text-accent transition-colors duration-200"
                aria-label={link.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
