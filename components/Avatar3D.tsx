"use client";

import dynamic from "next/dynamic";

const ClayCharacterScene = dynamic(() => import("./ClayCharacter"), { ssr: false });

interface Avatar3DProps {
  type?: "full" | "bust";
}

export default function Avatar3D({ type = "full" }: Avatar3DProps) {
  return (
    <div
      className={`relative ${
        type === "full"
          ? "w-[320px] h-[380px] md:w-[400px] md:h-[480px]"
          : "w-[160px] h-[160px]"
      } drop-shadow-[0_20px_50px_rgba(124,58,237,0.3)]`}
    >
      <ClayCharacterScene bust={type === "bust"} />
    </div>
  );
}
