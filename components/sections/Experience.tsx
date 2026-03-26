"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, ArrowRight } from "lucide-react";
import { experiences } from "@/lib/data";

const iconMap = {
  internship: Briefcase,
  simulation: Award,
  job: Briefcase,
};

const colorMap = {
  internship: "text-neon-green bg-neon-green/10 border-neon-green/20",
  simulation: "text-neon-purple bg-neon-purple/10 border-neon-purple/20",
  job: "text-neon-blue bg-neon-blue/10 border-neon-blue/20",
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-hotpink uppercase tracking-[0.2em] text-xs font-bold mb-10"
        >
          Experience
        </motion.h2>

        <div className="max-w-2xl space-y-6">
          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.type];
            const colors = colorMap[exp.type];

            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: i * 0.15,
                }}
                whileHover={{
                  x: 4,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                className="p-5 md:p-6 rounded-xl bg-navy-800/40 border border-navy-700/50 hover:border-navy-600 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  {/* Icon badge */}
                  <div className={`p-2.5 rounded-xl border ${colors} flex-shrink-0`}>
                    <Icon size={18} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-heading font-bold text-white text-base">
                        {exp.role}
                      </h3>
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 text-navy-400 transition-opacity duration-200"
                      />
                    </div>
                    <p className="text-sm text-neon-cyan font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-navy-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
