"use client";
import { motion } from "framer-motion";
import React from "react";

const whyChoose = [
  {
    title: "Experienced AI Engineers",
    desc: "Our team brings years of expertise in building scalable AI products.",
  },
  {
    title: "Innovative & Scalable Products",
    desc: "We deliver future-proof solutions tailored to your growth.",
  },
  {
    title: "Client Success Stories",
    desc: "Proven track record with leading organizations.",
  },
  {
    title: "Cutting-edge Technology",
    desc: "We leverage the latest in AI research and development.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Blurred video background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          src="/2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          style={{ filter: "blur(16px) brightness(1.2) saturate(1.2)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-white/80 to-blue-400/60 mix-blend-lighten" />
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto py-24 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-blue-700 mb-20 drop-shadow-lg">Why Choose Us</h1>
        <div className="flex flex-col items-center w-full" style={{ perspective: 1200 }}>
          {whyChoose.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 80, rotateX: 60, scale: 0.8, z: -i * 40 }}
              animate={{ opacity: 1, y: i * 40, rotateX: 0, scale: 1, z: 0 }}
              transition={{ delay: 0.3 + i * 0.25, duration: 0.9, type: "spring", stiffness: 60 }}
              className="bg-white/90 shadow-2xl px-10 py-8 mb-[-40px] rounded-3xl w-full max-w-2xl text-center relative"
              style={{ zIndex: 10 - i, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)" }}
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{point.title}</h3>
              <p className="text-gray-700 text-lg">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 