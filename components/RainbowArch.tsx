"use client";

import { motion } from "framer-motion";

const colors = [
  "#c084fc", // purple
  "#60a5fa", // blue
  "#4ade80", // green
  "#facc15", // yellow
  "#fb923c", // orange
  "#f87171", // red
];

export default function RainbowArch() {
  const arcCount = colors.length;
  const barsPerArc = 20;

  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[80px] w-full max-w-[1200px] h-[500px] pointer-events-none z-0 opacity-60">
      {colors.map((color, arcIndex) => {
        const radius = 350 + arcIndex * 40;
        const arcYOffset = arcIndex * 12;
        
        return (
          <div key={arcIndex} className="absolute inset-0">
            {Array.from({ length: barsPerArc }).map((_, barIndex) => {
              const startAngle = -100;
              const angleStep = 200 / (barsPerArc - 1);
              const angle = startAngle + barIndex * angleStep;
              const angleRad = (angle * Math.PI) / 180;
              
              const x = radius * Math.cos(angleRad);
              const y = (radius * 0.7) * Math.sin(angleRad) + arcYOffset;

              return (
                <motion.div
                  key={barIndex}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + arcIndex * 0.08 + barIndex * 0.02,
                    ease: "backOut",
                  }}
                  className="absolute rounded-full"
                  style={{
                    backgroundColor: color,
                    width: "55px",
                    height: "14px",
                    left: `calc(50% + ${x}px)`,
                    top: `calc(100% - ${y}px)`,
                    transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                    boxShadow: `0 0 15px ${color}33`,
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
