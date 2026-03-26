"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Avatar3DProps {
  type?: "full" | "bust";
}

export default function Avatar3D({ type = "full" }: Avatar3DProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ 
        y: [0, -15, 0], // floating animation
        opacity: 1 
      }}
      transition={{ 
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: { duration: 0.8, delay: 0.5 }
      }}
      className={`relative ${type === "full" ? "w-64 h-64 md:w-80 md:h-80" : "w-32 h-32"} drop-shadow-[0_20px_50px_rgba(124,58,237,0.3)]`}
    >
      <div className={`relative w-full h-full overflow-hidden rounded-3xl ${type === "bust" ? "rounded-full scale-110" : ""}`}>
        <Image
          src="/avatar.png"
          alt="3D Clay Character"
          fill
          className={`object-cover ${type === "bust" ? "translate-y-[-10%]" : ""}`}
          priority
        />
        {/* Subtle vignette/bloom overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}
