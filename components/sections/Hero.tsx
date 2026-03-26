"use client";

import { motion } from "framer-motion";
import { AvatarFull } from "@/components/Avatar3D";
import ColorfulDots from "@/components/ColorfulDots";
import WavyHills from "@/components/WavyHills";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Edge glow */}
      <div className="absolute inset-0 edge-glow pointer-events-none" />

      {/* Avatar + Dots area */}
      <div className="relative w-full max-w-2xl mx-auto h-[300px] md:h-[360px] mb-8">
        <ColorfulDots />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
          <AvatarFull />
        </div>
      </div>

      {/* Wavy hills at the bottom */}
      <WavyHills className="h-[120px] md:h-[180px]" />

      {/* Content overlay — section heading below the avatar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center section-padding -mt-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, type: "spring", stiffness: 200, damping: 15 }}
          className="text-hotpink uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-4"
        >
          {personalInfo.tagline}
        </motion.h2>
      </motion.div>
    </section>
  );
}
