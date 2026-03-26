"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function About() {
  return (
    <section id="about" className="section-container py-24">
      <div className="text-container">
        <motion.p {...fadeUp} className="text-purple-400 text-sm font-mono font-medium mb-3">
          01. About
        </motion.p>
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="font-heading text-3xl font-bold text-gray-100 mb-8"
        >
          A bit about me
        </motion.h2>

        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}>
            {aboutContent.intro}
          </motion.p>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}>
            {aboutContent.what_i_build}
          </motion.p>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}>
            {aboutContent.interests}
          </motion.p>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}>
            {aboutContent.goal}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
