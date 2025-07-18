import React from "react";

/**
 * Animated, blurry, modern divider between sections (e.g., between Explore our Solutions and Explore our Work)
 */
export default function SectionDivider() {
  return (
    <div className="relative w-full flex justify-center items-center z-30">
      <div className="h-2 w-3/4 bg-gradient-to-r from-yellow-400 via-white to-black rounded-full blur-md shadow-lg animate-pulse transition-all duration-700" style={{ filter: 'blur(6px)' }} />
      <div className="absolute left-1/2 top-1/2 w-1/2 h-1 bg-gradient-to-r from-yellow-300/60 via-white/40 to-black/60 rounded-full opacity-80 animate-pulse" style={{ transform: 'translate(-50%, -50%)' }} />
    </div>
  );
} 