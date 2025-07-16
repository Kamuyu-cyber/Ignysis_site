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

export default function WhyChooseUs() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* More visible, immersive blurred video background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          src="/2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          style={{ filter: "blur(8px) brightness(1.1) saturate(1.3)", opacity: 0.85 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/60 via-white/60 to-blue-400/40 mix-blend-lighten" />
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto py-24 flex flex-col items-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center text-blue-700 mb-20 drop-shadow-lg"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
        >
          Why Choose Us
        </motion.h1>
        {/* 3D staircase glassmorphism cards */}
        <motion.div
          className="flex flex-col items-center w-full"
          style={{ perspective: 1600 }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.22 }
            }
          }}
        >
          {whyChoose.map((point, i) => (
            <motion.div
              key={point.title}
              custom={i}
              initial={{
                opacity: 0,
                y: 120 + i * 30,
                z: -i * 80,
                rotateX: 40 - i * 7,
                scale: 0.85
              }}
              animate={{
                opacity: 1,
                y: i * 44,
                z: 0,
                rotateX: 0,
                scale: 1
              }}
              transition={{
                delay: 0.5 + i * 0.22,
                duration: 1.1,
                type: "spring",
                stiffness: 60
              }}
              className="backdrop-blur-xl bg-white/30 shadow-2xl px-10 py-8 mb-[-32px] rounded-3xl w-full max-w-2xl text-center relative border-none"
              style={{
                zIndex: 10 - i,
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
                border: "none",
                WebkitBackdropFilter: "blur(16px)",
                background: "linear-gradient(120deg, rgba(255,255,255,0.35) 60%, rgba(180,210,255,0.18) 100%)"
              }}
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-2 drop-shadow-sm">{point.title}</h3>
              <p className="text-gray-800 text-lg font-medium drop-shadow-sm">{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 