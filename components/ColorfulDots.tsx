"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const COLORS = [
  "hsl(340, 95%, 60%)",  // hot pink
  "hsl(185, 100%, 55%)", // cyan
  "hsl(50, 100%, 55%)",  // yellow
  "hsl(145, 80%, 55%)",  // green
  "hsl(260, 80%, 65%)",  // purple
  "hsl(220, 90%, 65%)",  // blue
  "hsl(30, 90%, 55%)",   // orange
];

interface Dot {
  x: number;
  y: number;
  color: string;
  size: number;
  delay: number;
}

export default function ColorfulDots() {
  const dots: Dot[] = useMemo(() => {
    // Create arching array of dots behind the character
    const result: Dot[] = [];
    const rows = 6;
    const dotsPerRow = [5, 7, 8, 7, 5, 3];
    
    for (let row = 0; row < rows; row++) {
      const count = dotsPerRow[row];
      const rowY = 15 + row * 14;

      for (let col = 0; col < count; col++) {
        const spreadFactor = 1 + (rows - row) * 0.15;
        const centerOffset = (col - (count - 1) / 2) * 22 * spreadFactor;
        const archCurve = -Math.pow((col - (count - 1) / 2) / count, 2) * 30;

        result.push({
          x: 50 + centerOffset,
          y: rowY + archCurve,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: 8 + Math.random() * 6,
          delay: (row * 0.1) + (col * 0.05),
        });
      }
    }
    return result;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 12,
            delay: 0.5 + dot.delay,
          }}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            animation: `dotFloat ${3 + Math.random() * 2}s ease-in-out ${dot.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
