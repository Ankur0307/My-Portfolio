"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.4 },
};

export default function About() {
  return (
    <section id="about" className="section-container py-24">
      <div className="text-container">
        <motion.p {...fadeUp} className="text-accent text-sm font-mono font-medium mb-3">
          01. About
        </motion.p>
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="font-heading text-3xl font-semibold text-white mb-8"
        >
          A bit about me
        </motion.h2>

        <div className="space-y-5 text-foreground-secondary text-lg leading-relaxed">
          <motion.p {...fadeUp} transition={{ duration: 0.4, delay: 0.1 }}>
            {aboutContent.intro}
          </motion.p>
          <motion.p {...fadeUp} transition={{ duration: 0.4, delay: 0.15 }}>
            {aboutContent.what_i_build}
          </motion.p>
          <motion.p {...fadeUp} transition={{ duration: 0.4, delay: 0.2 }}>
            {aboutContent.interests}
          </motion.p>
          <motion.p {...fadeUp} transition={{ duration: 0.4, delay: 0.25 }}>
            {aboutContent.goal}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
