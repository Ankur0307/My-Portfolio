"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function Skills() {
  return (
    <section id="skills" className="section-container py-24">
      <motion.p {...fadeUp} transition={{ duration: 0.4 }} className="text-accent text-sm font-mono font-medium mb-3">
        02. Skills
      </motion.p>
      <motion.h2
        {...fadeUp}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="font-heading text-3xl font-semibold text-white mb-12"
      >
        Technologies I work with
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="p-6 rounded-xl border border-border hover:border-border-light transition-colors duration-300"
          >
            <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
              {cat.category}
            </h3>
            <ul className="space-y-2">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-foreground-secondary text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
