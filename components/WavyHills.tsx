"use client";

import { motion } from "framer-motion";

interface WavyHillsProps {
  inverted?: boolean;
}

export default function WavyHills({ inverted = false }: WavyHillsProps) {
  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden pointer-events-none z-0 ${
        inverted ? "top-0 -translate-y-[99%]" : "bottom-0 translate-y-[1px]"
      }`}
      style={{ height: "150px" }}
    >
      <svg
        viewBox="0 0 1440 320"
        className={`absolute bottom-0 left-0 w-full h-full preserve-3d ${
          inverted ? "rotate-180" : ""
        }`}
        preserveAspectRatio="none"
      >
        {/* Hill 1 - Deepest */}
        <motion.path
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          fill="#111827"
          d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,250.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
        {/* Hill 2 - Middle */}
        <motion.path
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          fill="#1e293b"
          fillOpacity="0.4"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        {/* Hill 3 - Foreground/Main */}
        <motion.path
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          fill="#0f172a"
          d="M0,256L80,240C160,224,320,192,480,197.3C640,203,800,245,960,250.7C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
  );
}
