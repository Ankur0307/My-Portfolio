"use client";

import { motion } from "framer-motion";

// An animated 3D-style character built purely with CSS/SVG
// This creates a cute sitting character similar to a 3D avatar

export function AvatarFull() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
      className="relative w-48 h-56 md:w-56 md:h-64"
    >
      {/* Body */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        {/* Legs (crossed) */}
        <div className="relative w-32 h-12 md:w-36 md:h-14">
          <div className="absolute left-2 bottom-0 w-14 h-10 md:w-16 md:h-12 bg-slate-800 rounded-2xl transform -rotate-12" />
          <div className="absolute right-2 bottom-0 w-14 h-10 md:w-16 md:h-12 bg-slate-800 rounded-2xl transform rotate-12" />
          {/* Shoes */}
          <div className="absolute left-0 bottom-0 w-8 h-5 bg-white rounded-lg transform -rotate-6" />
          <div className="absolute right-0 bottom-0 w-8 h-5 bg-white rounded-lg transform rotate-6" />
        </div>

        {/* Torso */}
        <div className="relative -mb-2">
          <div className="w-28 h-24 md:w-32 md:h-28 mx-auto bg-amber-500 rounded-t-3xl rounded-b-2xl relative overflow-hidden">
            {/* Hoodie front detail */}
            <div className="absolute inset-x-6 top-2 bottom-0 bg-slate-300 rounded-t-2xl opacity-80" />
            {/* Hoodie pocket */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-6 border-2 border-amber-600 rounded-lg opacity-40" />
          </div>
        </div>

        {/* Head */}
        <div className="relative -mb-6 flex justify-center">
          <motion.div
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 bg-amber-200 rounded-[2rem] relative mx-auto">
              {/* Eyes */}
              <div className="absolute top-8 left-5 md:top-9 md:left-6 flex gap-6 md:gap-7">
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="w-3 h-3 bg-slate-800 rounded-full"
                />
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="w-3 h-3 bg-slate-800 rounded-full"
                />
              </div>
              {/* Blush */}
              <div className="absolute top-12 left-3 w-4 h-2.5 bg-pink-300 rounded-full opacity-60" />
              <div className="absolute top-12 right-3 w-4 h-2.5 bg-pink-300 rounded-full opacity-60" />
              {/* Smile */}
              <div className="absolute top-[3.2rem] left-1/2 -translate-x-1/2 w-4 h-2 border-b-2 border-slate-700 rounded-b-full" />
              {/* Hair */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-14 md:w-32 md:h-16 bg-amber-900 rounded-t-[2rem] rounded-b-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function AvatarBust() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative w-24 h-28"
    >
      {/* Torso (just top) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-amber-500 rounded-t-2xl" />
      {/* Head */}
      <div className="relative flex justify-center">
        <div className="w-16 h-16 bg-amber-200 rounded-[1.2rem] relative">
          {/* Eyes */}
          <div className="absolute top-5 left-3 flex gap-4">
            <div className="w-2 h-2 bg-slate-800 rounded-full" />
            <div className="w-2 h-2 bg-slate-800 rounded-full" />
          </div>
          {/* Blush */}
          <div className="absolute top-7 left-1.5 w-3 h-1.5 bg-pink-300 rounded-full opacity-60" />
          <div className="absolute top-7 right-1.5 w-3 h-1.5 bg-pink-300 rounded-full opacity-60" />
          {/* Smile */}
          <div className="absolute top-[1.8rem] left-1/2 -translate-x-1/2 w-3 h-1.5 border-b-2 border-slate-700 rounded-b-full" />
          {/* Hair */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-9 bg-amber-900 rounded-t-[1.2rem] rounded-b-md" />
          {/* Graduation cap */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            <div className="w-20 h-3 bg-slate-800 transform -skew-x-2" />
            <div className="w-10 h-6 bg-slate-800 mx-auto -mt-1 rounded-b" />
            <div className="absolute -top-1 right-2 w-1 h-4 bg-neon-yellow origin-bottom transform rotate-12">
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-neon-yellow rounded-full scale-50" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
