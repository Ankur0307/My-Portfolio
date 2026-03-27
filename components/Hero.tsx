"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Code2, type LucideIcon } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";
import WavyHills from "./WavyHills";
import RainbowArch from "./RainbowArch";
import Avatar3D from "./Avatar3D";

const iconMap: Record<string, LucideIcon> = {
  Github, Linkedin, Mail, Code2,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden section-container pt-32 pb-48 md:pt-40 md:pb-64 min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none -z-10" />
      <RainbowArch />
      <WavyHills />

      {/* 3D Clay Character - Centered right focal point */}
      <div className="hidden lg:block absolute right-[3%] bottom-[100px] z-10 origin-bottom">
        <Avatar3D type="full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="text-container relative z-10 w-full lg:w-3/5"
      >
        <motion.p
          variants={itemVariants}
          className="text-purple-400 text-sm md:text-base font-medium mb-6 font-mono"
        >
          Hi, my name is Ankur
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          style={{ whiteSpace: "pre-line" }}
        >
          {personalInfo.headline}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(124,58,237,0.4)]"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:bg-white/5 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6"
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
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:-translate-y-1 transform inline-block"
                aria-label={link.label}
              >
                <Icon size={22} />
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
