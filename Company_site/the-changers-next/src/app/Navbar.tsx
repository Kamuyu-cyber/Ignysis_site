'use client';

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const services = [
  "AI-Powered Medical Diagnostics",
  "Precision Agriculture Solutions",
  "Fraud Detection & Risk Assessment",
  "Smart Learning Platforms",
  "Energy Efficiency Analytics",
  "Predictive Maintenance",
];
const workDone = [
  "Integrated Health System (IHS)",
  "AI-Powered Crop Disease Detection",
  "Smart City Traffic Optimization",
  "AI Chatbot for Mental Health",
];

export default function Navbar() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  return (
    <nav className="w-full flex justify-center md:justify-between items-center py-3 px-2 md:px-8 sticky top-0 z-50 bg-transparent shadow-md border-b border-white/10">
      <span className="text-base md:text-lg font-bold tracking-widest text-white">IGNYSIS</span>
      <ul className="hidden md:flex gap-6 text-sm font-normal text-white">
        <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
        <li className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
          <button className="hover:text-accent transition-colors flex items-center gap-1">Explore our solutions <ChevronDown className="w-4 h-4" /></button>
          {solutionsOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded-xl shadow-xl py-2 z-50">
              {services.map((service, idx) => (
                <a key={idx} href="/#services" className="block px-5 py-2 hover:bg-blue-50 text-sm font-medium">{service}</a>
              ))}
            </div>
          )}
        </li>
        <li className="relative" onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
          <button className="hover:text-accent transition-colors flex items-center gap-1">Explore our work <ChevronDown className="w-4 h-4" /></button>
          {workOpen && (
            <div className="absolute left-0 mt-2 w-72 bg-white text-black rounded-xl shadow-xl py-2 z-50">
              {workDone.map((work, idx) => (
                <a key={idx} href="/#workdone" className="block px-5 py-2 hover:bg-blue-50 text-sm font-medium">{work}</a>
              ))}
            </div>
          )}
        </li>
        <li><a href="/#contact" className="hover:text-accent transition-colors">Contact</a></li>
        <li><a href="/trusted-by" className="hover:text-accent transition-colors">Trusted By</a></li>
      </ul>
    </nav>
  );
} 