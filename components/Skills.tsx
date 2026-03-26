"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Skills() {
  return (
    <section id="skills" className="section-container py-24">
      <motion.p {...fadeUp} transition={{ duration: 0.6 }} className="text-purple-400 text-sm font-mono font-medium mb-3">
        02. Skills
      </motion.p>
      <motion.h2
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-heading text-3xl font-bold text-gray-100 mb-12"
      >
        Technologies I work with
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(124,58,237,0.1)]"
          >
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-widest mb-5 group-hover:text-white transition-colors">
              {cat.category}
            </h3>
            <ul className="space-y-3">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-gray-400 text-sm flex items-center gap-3 transition-colors group-hover:text-gray-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors flex-shrink-0" />
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
