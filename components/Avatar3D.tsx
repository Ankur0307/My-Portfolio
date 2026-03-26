"use client";

import { motion } from "framer-motion";

interface Avatar3DProps {
  type?: "full" | "bust";
}

export default function Avatar3D({ type = "full" }: Avatar3DProps) {
  return (
    <div className={`relative ${type === "full" ? "w-48 h-64" : "w-32 h-32"}`}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative w-full h-full flex flex-col items-center"
      >
        {/* Head */}
        <div className="relative w-24 h-24 bg-[#ffdbac] rounded-full shadow-inner z-20">
          {/* Hair */}
          <div className="absolute top-[-5px] left-[-5px] right-[-5px] h-12 bg-[#4b2c20] rounded-t-full rounded-b-lg" />
          
          {/* Eyes */}
          <div className="absolute top-12 left-6 w-3 h-3 bg-[#333] rounded-full">
            <motion.div
              animate={{ height: ["100%", "100%", "0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
              className="absolute inset-0 bg-[#ffdbac] origin-top"
            />
          </div>
          <div className="absolute top-12 right-6 w-3 h-3 bg-[#333] rounded-full">
            <motion.div
              animate={{ height: ["100%", "100%", "0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
              className="absolute inset-0 bg-[#ffdbac] origin-top"
            />
          </div>
          
          {/* Blush */}
          <div className="absolute top-16 left-4 w-4 h-2 bg-pink-300/40 rounded-full blur-[2px]" />
          <div className="absolute top-16 right-4 w-4 h-2 bg-pink-300/40 rounded-full blur-[2px]" />
        </div>

        {type === "full" ? (
          <>
            {/* Body - Hoodie */}
            <div className="relative w-28 h-32 bg-[#facc15] rounded-t-3xl rounded-b-xl mt-[-10px] z-10 shadow-lg">
              {/* Arms */}
              <div className="absolute left-[-15px] top-4 w-15 h-20 bg-[#eab308] rounded-full origin-top-right rotate-[15deg] shadow-sm" />
              <div className="absolute right-[-15px] top-4 w-15 h-20 bg-[#eab308] rounded-full origin-top-left -rotate-[15deg] shadow-sm" />
              
              {/* Hands */}
              <div className="absolute left-[20px] bottom-[-5px] w-10 h-10 bg-[#ffdbac] rounded-full z-20 shadow-sm" />
              <div className="absolute right-[20px] bottom-[-5px] w-10 h-10 bg-[#ffdbac] rounded-full z-20 shadow-sm" />
            </div>
            
            {/* Legs - Sitting position */}
            <div className="relative flex gap-8 mt-[-10px]">
              <div className="w-16 h-24 bg-[#1e293b] rounded-full origin-top -rotate-[80deg] translate-x-4 shadow-md" />
              <div className="w-16 h-24 bg-[#1e293b] rounded-full origin-top rotate-[80deg] -translate-x-4 shadow-md" />
            </div>
          </>
        ) : (
          /* Bust for footer */
          <div className="relative w-24 h-16 bg-[#facc15] rounded-t-full mt-[-10px] z-10 shadow-lg">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#facc15] rounded-t-full" />
          </div>
        )}
      </motion.div>
    </div>
  );
}
