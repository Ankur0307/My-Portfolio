"use client";

export default function WavyHills({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-auto block"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back hill — darkest */}
        <path
          d="M0,224 C180,120 360,280 540,200 C720,120 900,260 1080,180 C1200,130 1350,220 1440,160 L1440,320 L0,320 Z"
          fill="hsl(210, 30%, 6%)"
          opacity="0.7"
        />
        {/* Middle hill */}
        <path
          d="M0,260 C200,180 400,300 600,240 C800,180 1000,290 1200,220 C1320,180 1400,260 1440,230 L1440,320 L0,320 Z"
          fill="hsl(210, 28%, 8%)"
          opacity="0.85"
        />
        {/* Front hill — lightest dark */}
        <path
          d="M0,280 C240,220 480,310 720,260 C900,220 1100,300 1300,250 C1380,230 1420,270 1440,260 L1440,320 L0,320 Z"
          fill="hsl(210, 25%, 10%)"
        />
      </svg>
    </div>
  );
}
