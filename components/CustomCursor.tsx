"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for tracking
  const springX = useSpring(0, { stiffness: 500, damping: 28 });
  const springY = useSpring(0, { stiffness: 500, damping: 28 });
  
  // Slower follower spring
  const followerX = useSpring(0, { stiffness: 150, damping: 20 });
  const followerY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    // Hidden on mobile or touch screens
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
      followerX.set(e.clientX - 16);
      followerY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [springX, springY, followerX, followerY]);

  // If no mouse moved yet, hide it
  if (mousePosition.x === 0 && mousePosition.y === 0) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[100]"
        style={{
          x: springX,
          y: springY,
          backgroundColor: isHovering ? "#a78bfa" : "#e5e7eb",
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 0 : 1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-purple-500 pointer-events-none z-[99] mix-blend-screen"
        style={{
          x: followerX,
          y: followerY,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(124, 58, 237, 0.15)" : "transparent",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 1 : 0.4,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
