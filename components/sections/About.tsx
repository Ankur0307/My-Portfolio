"use client";

import { motion } from "framer-motion";
import { GraduationCap, Heart, Code2 } from "lucide-react";
import { education, personalInfo } from "@/lib/data";

const highlights = [
  {
    icon: GraduationCap,
    title: education.degree,
    detail: `${education.institution} — CGPA: ${education.cgpa}`,
    color: "text-neon-cyan",
  },
  {
    icon: Heart,
    title: "Passionate Builder",
    detail: "Passionate about Data Analytics and Software Development, combining analytical rigor with creative problem-solving.",
    color: "text-hotpink",
  },
  {
    icon: Code2,
    title: "Full-Stack Skills",
    detail: "Skilled in Python, SQL, Power BI, and Web Development — building end-to-end solutions from data to deployment.",
    color: "text-neon-yellow",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-hotpink uppercase tracking-[0.2em] text-xs font-bold mb-10"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="text-navy-200 text-base md:text-lg leading-relaxed max-w-2xl mb-12"
        >
          {personalInfo.intro}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="p-6 rounded-2xl bg-navy-800/60 border border-navy-700/50 hover:border-navy-600 transition-colors duration-300 group"
            >
              <item.icon
                size={24}
                className={`${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
              />
              <h3 className="font-heading text-white font-bold mb-2 text-base">
                {item.title}
              </h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
