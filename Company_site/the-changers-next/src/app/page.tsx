'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react"; // Consolidate imports
import UsageChart from "./UsageChart";
import { ChevronDown } from "lucide-react";
import Nature3DBackground from "./NeuralNetworkBackground";
import { useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionDivider from "./SectionDivider";

const team = [
  { name: "Cheruiyot Elkanah", title: "CEO", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=ceo&backgroundColor=blue,red,white&accessoriesProbability=100" },
  { name: "Frank Kamuyu", title: "CDO", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=cdo&backgroundColor=blue,red,white&accessoriesProbability=100" },
  { name: "Ben Kyalo", title: "CTO", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=cto&backgroundColor=blue,red,white&accessoriesProbability=100" },
];

const partners = [
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", desc: "Music streaming platform" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", desc: "Search and cloud services" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", desc: "Productivity and cloud solutions" },
  { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/OpenAI_Logo.svg", desc: "AI research and deployment" },
  { name: "Jane Doe", logo: "https://randomuser.me/api/portraits/women/44.jpg", desc: "AI Consultant" },
  { name: "John Smith", logo: "https://randomuser.me/api/portraits/men/46.jpg", desc: "Tech Entrepreneur" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", desc: "Streaming entertainment" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", desc: "E-commerce and cloud computing" },
];

const offerings = [
  {
    title: "Machine Learning Systems",
    desc: "Custom ML models for your business needs.",
    icon: "🤖",
  },
  {
    title: "Automation Tools",
    desc: "Streamline workflows with intelligent automation.",
    icon: "⚙️",
  },
  {
    title: "Predictive Analytics",
    desc: "Data-driven insights for smarter decisions.",
    icon: "📈",
  },
  {
    title: "Natural Language Processing",
    desc: "Extract meaning and automate tasks from text and speech.",
    icon: "🗣️",
  },
  {
    title: "Computer Vision",
    desc: "Image and video analysis for real-world applications.",
    icon: "👁️",
  },
  {
    title: "AI Chatbots",
    desc: "Conversational agents for support and engagement.",
    icon: "💬",
  },
  {
    title: "Recommendation Systems",
    desc: "Personalized content and product suggestions.",
    icon: "🎯",
  },
  {
    title: "Data Engineering",
    desc: "Robust pipelines for data collection and processing.",
    icon: "🛠️",
  },
  {
    title: "AI Strategy Consulting",
    desc: "Expert guidance to unlock AI value for your business.",
    icon: "🧠",
  },
  {
    title: "Edge AI Solutions",
    desc: "Deploy AI on devices for real-time intelligence.",
    icon: "📱",
  },
];

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

const workDone = [
  {
    title: "Integrated Health System (IHS)",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400&q=80", // New Unsplash image: healthcare/technology
    category: "HealthTech | AI & Blockchain | Public Sector Innovation",
    desc: [
      "IHS is a digital health platform for Kenya’s public sector, combining AI, blockchain-secured EHR, and smart referrals to improve care coordination and data access in underserved communities.",
      "The platform supports real-time diagnosis, automated referrals, and centralized dashboards for decision-makers, and is being piloted with the Nakuru County Ministry of Health."
    ]
  },
  {
    title: "AI-Powered Crop Disease Detection",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    category: "AgriTech | Computer Vision | Mobile AI",
    desc: [
      "A mobile app that uses deep learning to identify crop diseases from photos, providing instant diagnosis and treatment suggestions to farmers in rural Africa.",
      "The system leverages a large dataset of plant images and is deployed offline for use in low-connectivity areas."
    ]
  },
  {
    title: "Smart City Traffic Optimization",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    category: "UrbanTech | AI & IoT | Public Sector",
    desc: [
      "A real-time traffic management platform using AI and IoT sensors to optimize traffic flow, reduce congestion, and improve emergency response in major cities.",
      "The platform integrates with city infrastructure and provides dashboards for city planners."
    ]
  },
  {
    title: "AI Chatbot for Mental Health",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    category: "HealthTech | NLP | Social Impact",
    desc: [
      "A conversational AI chatbot that provides mental health support, resources, and crisis intervention, available 24/7 via web and mobile.",
      "The chatbot uses natural language processing to understand user needs and escalate to human counselors when necessary."
    ]
  }
];

const services = [
  {
    category: "HealthTech",
    title: "AI-Powered Medical Diagnostics",
    description: "Utilize advanced machine learning algorithms to analyze medical images and provide instant, accurate diagnoses for a wide range of conditions.",
  },
  {
    category: "AgriTech",
    title: "Precision Agriculture Solutions",
    description: "Leverage computer vision and IoT sensors to monitor crop health, predict yields, and optimize farming practices for sustainable agriculture.",
  },
  {
    category: "FinTech",
    title: "Fraud Detection & Risk Assessment",
    description: "Implement robust AI models to detect anomalies, identify suspicious transactions, and assess creditworthiness with high accuracy.",
  },
  {
    category: "EducationTech",
    title: "Smart Learning Platforms",
    description: "Develop intelligent tutoring systems and personalized learning experiences to enhance educational outcomes and engagement.",
  },
  {
    category: "EnergyTech",
    title: "Energy Efficiency Analytics",
    description: "Utilize AI to optimize energy consumption, predict maintenance needs, and reduce operational costs in the energy sector.",
  },
  {
    category: "Manufacturing",
    title: "Predictive Maintenance",
    description: "Implement AI-driven systems to predict equipment failures, optimize production, and reduce downtime in industrial environments.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  // Dark/light mode toggle
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Animation replay on hero in view
  const heroRef = React.useRef(null);
  const inView = useInView(heroRef, { amount: 0.5 });

  const [showChat, setShowChat] = useState(false);

  // Marquee GSAP logic (infinite stream)
  const marqueeRow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRow.current) return;
    gsap.set(marqueeRow.current, { x: 0 });
    const totalWidth = marqueeRow.current.scrollWidth / 2;
    gsap.to(marqueeRow.current, {
      x: -totalWidth,
      duration: 36, // Slower speed
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -totalWidth)
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative p-0 m-0" ref={heroRef}>
        {/* Browser tabs simulation - now a live flowing marquee */}
        <div className="text-white text-xs py-1 px-0 flex items-center gap-0 overflow-hidden" style={{ background: 'transparent' }}>
          <div className="w-full overflow-hidden relative">
            {/* Infinite GSAP Marquee */}
            <div className="relative w-full" style={{ height: 32 }}>
              <div
                ref={marqueeRow}
                className="absolute left-0 top-0 flex whitespace-nowrap"
                style={{ willChange: 'transform' }}
              >
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className="px-6 py-1 text-base font-extrabold tracking-widest uppercase text-white drop-shadow-lg"
                    style={{ letterSpacing: '0.2em' }}
                  >
                    IGNYsis
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Main hero section */}
        <div className="relative h-screen">
          {/* Hero background video */}
          <div className="absolute inset-0 w-full h-full z-0">
            <video
              src="/1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          {/* Overlay content */}
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-4 z-10">
            {/* Nav bar */}
            <nav className="w-full flex justify-center md:justify-between items-center py-4 px-2 md:px-8 absolute top-0 left-0 z-20">
              <span className="text-lg md:text-2xl font-bold tracking-widest">IGNYSIS</span>
              <ul className="hidden md:flex gap-8 text-base font-medium">
                <li><a href="#hero" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Explore our solutions</a></li>
                <li><a href="#workdone" className="hover:text-accent transition-colors">Explore our work</a></li>
                <li><a href="#team" className="hover:text-accent transition-colors">Team</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </nav>
            <div className="max-w-4xl mx-auto mt-24 md:mt-32">
              {/* Top tagline */}
              <p className="text-sm md:text-base font-medium tracking-widest uppercase mb-8 opacity-90">
                Intelligent Solutions, Real Impact
              </p>
              {/* Main heading */}
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 flex justify-center"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{}}
              >
                {/* Swoosh in the first letter, then stagger the rest */}
                <motion.span
                  variants={{
                    hidden: { opacity: 0, x: -120, scale: 2, rotate: -30 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      rotate: 0,
                      transition: { type: 'spring', stiffness: 80, damping: 18, delay: 0.4, duration: 0.9 }
                    }
                  }}
                  className="inline-block text-accent drop-shadow-lg"
                >
                  I
                </motion.span>
                {['G', 'N', 'Y', 's', 'i', 's'].map((char, i) => (
                  <motion.span
                    key={char + i}
                    variants={{
                      hidden: { opacity: 0, x: -40, scale: 0.8 },
                      visible: (custom) => ({
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                          type: 'spring',
                          stiffness: 70,
                          damping: 18,
                          delay: 0.7 + custom * 0.18,
                          duration: 0.7
                        }
                      })
                    }}
                    custom={i}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              {/* Animated subtitle below heading */}
              <motion.p
                className="text-2xl md:text-3xl font-semibold mb-8 opacity-95"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1.9, duration: 0.8, type: 'spring', stiffness: 60 }
                  }
                }}
              >
                Igniting systemic change
              </motion.p>
              {/* Animated tagline */}
              <motion.p
                className="text-lg md:text-xl font-light mb-16 opacity-90"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 2.3, duration: 0.8, type: 'spring', stiffness: 60 }
                  }
                }}
              >
                Building the future with AI for Africa and beyond
              </motion.p>
            </div>
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center animate-bounce">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section id="services" className="relative min-h-screen w-full flex flex-col items-center justify-center px-0 py-0 bg-gray-50 overflow-hidden">
        {/* Blurred video background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src="/2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            style={{ filter: 'blur(16px) brightness(1.2) saturate(1.2)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-white/80 to-blue-400/60 mix-blend-lighten" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto py-16">
          {/* Header with filter and search */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6 px-4">
            <h2 className="text-4xl font-bold text-center md:text-left text-blue-700">Explore our solutions</h2>
            <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto justify-center">
              <button className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 bg-white hover:bg-blue-50 text-gray-800 font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M6 6v12m12-12v12M6 18h12" /></svg>
                Filter by category
              </button>
              <div className="flex items-center border-b border-gray-300 bg-white rounded-full px-3 py-2 w-full md:w-72">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" /></svg>
                <input type="text" placeholder="Search categories" className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500" />
              </div>
            </div>
          </div>
          <div className="text-gray-700 text-sm mb-6 px-4">Displaying 1-8 ({services.length})</div>
          {/* Animated services grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full"
              >
                <div
                  className="group cursor-pointer transition-all duration-200 hover:shadow-lg bg-white border-0 shadow-sm hover:border-blue-400 rounded-xl"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-3">
                      {service.category}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-end">
                      <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider between Explore our Solutions and Explore our Work */}
      <SectionDivider />

      {/* Work Done Section */}
      <section id="workdone" className="relative w-full flex flex-col items-center justify-center px-0 py-0 bg-gray-50 overflow-hidden" style={{marginTop: 0, paddingTop: 0}}>
        {/* Blurred video background, matching services section */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src="/2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            style={{ filter: 'blur(16px) brightness(1.2) saturate(1.2)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-white/80 to-blue-400/60 mix-blend-lighten" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto py-16">
          {/* Header with filter and search */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6 px-4">
            <h2 className="text-4xl font-bold text-center md:text-left text-blue-700">Explore our work</h2>
            <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto justify-center">
              <button className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 bg-white hover:bg-blue-50 text-gray-800 font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M6 6v12m12-12v12M6 18h12" /></svg>
                Filter by category
              </button>
              <div className="flex items-center border-b border-gray-300 bg-white rounded-full px-3 py-2 w-full md:w-72">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" /></svg>
                <input type="text" placeholder="Search by project or category" className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500" />
              </div>
            </div>
          </div>
          <div className="text-gray-700 text-sm mb-6 px-4">Displaying 1-{workDone.length} ({workDone.length})</div>
          {/* Animated work done grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {workDone.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full"
              >
                <div className="group cursor-pointer transition-all duration-200 hover:shadow-lg bg-gray-100 shadow-sm hover:border-blue-400 rounded-xl flex flex-col h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-xl mb-4"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors duration-200">{project.title}</h3>
                    {project.desc.map((d, idx) => (
                      <p key={idx} className="text-gray-600 text-sm leading-relaxed mb-2">{d}</p>
                    ))}
                  </div>
                  <div className="flex items-center justify-end px-6 pb-4">
                    <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Persistent AI Assistant Chat Button */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50 flex items-center justify-center"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2" /><path d="M8 11V7a4 4 0 1 1 8 0v4" /></svg>
      </button>
      {/* AI Assistant Chat Widget */}
      {showChat && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 60 }}
          className="fixed bottom-24 right-6 z-50"
        >
          <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-2xl max-w-md w-full border-t-4 border-blue-600 relative">
            <button
              onClick={() => setShowChat(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-blue-600"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-start space-x-3 mb-4">
              <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2" /><path d="M8 11V7a4 4 0 1 1 8 0v4" /></svg>
              </div>
              <div className="text-sm">
                <p>Hello! I'm your AI assistant. How can I help you today?</p>
              </div>
            </div>
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="mt-4 w-full bg-blue-600 text-white rounded-full py-2 font-semibold hover:bg-blue-700 transition-colors">Send</button>
          </div>
        </motion.div>
      )}

      {/* Why Choose Us - 3D Animated Staircase */}
      <section
        id="whychoose"
        className="relative min-h-screen w-full flex flex-col items-center justify-center px-0 py-0 overflow-hidden"
      >
        {/* Blurred video background, matching 'Explore our work' */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src="/2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            style={{ filter: 'blur(16px) brightness(1.2) saturate(1.2)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-white/80 to-blue-400/60 mix-blend-lighten" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto py-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-20 drop-shadow-lg">Why Choose Us</h2>
          {/* 3D staircase glassmorphism cards with framer-motion */}
          <div className="flex flex-col items-center w-full" style={{ perspective: 1600 }}>
            {whyChoose.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{
                  opacity: 0,
                  y: 120 + i * 30,
                  z: -i * 80,
                  rotateX: 40 - i * 7,
                  scale: 0.85
                }}
                whileInView={{
                  opacity: 1,
                  y: i * 44,
                  z: 0,
                  rotateX: 0,
                  scale: 1
                }}
                transition={{
                  delay: 0.2 + i * 0.22,
                  duration: 1.1,
                  type: "spring",
                  stiffness: 60
                }}
                viewport={{ once: false, amount: 0.2 }}
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
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <motion.section
        id="trustedby"
        className="py-16 px-4 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Trusted By</h2>
        <div className="relative w-full overflow-x-hidden">
          <motion.div
            className="flex gap-12 items-center whitespace-nowrap animate-scroll-x"
            initial={{ x: 0 }}
            animate={{ x: [0, -600] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            style={{ minWidth: 'max-content' }}
          >
            {partners.concat(partners).map((partner, i) => (
              <div key={i} className="flex flex-col items-center min-w-[160px] mx-2">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto rounded bg-white/70 shadow p-2 object-contain border border-gray-200 dark:border-gray-700 mb-2"
                  draggable={false}
                  style={{ maxWidth: 120 }}
                />
                <span className="text-xs text-gray-700 dark:text-gray-300 text-center font-medium">
                  {partner.name}
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 text-center">
                  {partner.desc}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Meet the Team */}
      <motion.section
        id="team"
        className="py-16 px-4 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center w-64 hover:scale-105 transition-transform border border-transparent hover:border-red-400"
              whileHover={{ scale: 1.07 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-600 shadow"
              />
              <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-red-500 font-medium">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Frequently Asked Questions */}
      <motion.section
        id="faq"
        className="py-16 px-4 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <FAQAccordion />
      </motion.section>

      {/* Usage Chart Section */}
      <section id="usage" className="flex flex-col items-center justify-center py-10 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 accent">Live Service Usage</h2>
        <UsageChart dark={dark} />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">* Chart updates live to show how people use our services</p>
      </section>

      {/* Final Call to Action / Contact */}
      <motion.section
        id="contact"
        className="py-20 px-4 text-center bg-gradient-to-r from-blue-600 via-red-500 to-blue-400 dark:from-blue-900 dark:via-red-900 dark:to-blue-900 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform with AI?</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Contact us today to discuss your project or schedule a free consultation with our experts.
        </p>
        <a
          href="mailto:contact@thechangers.ai"
          className="inline-block px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          Reach Out
        </a>
      </motion.section>
      <footer className="w-full py-2 text-center text-xs text-gray-500 dark:text-gray-400 bg-transparent mt-4">
        &copy; {new Date().getFullYear()} Ignysis. All rights reserved.
      </footer>
      {/* Add smooth scrolling to the page */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

function FAQAccordion() {
  const faqs = [
    {
      q: "What industries do you serve?",
      a: "We work with clients in health, agriculture, public sector, finance, and more—anywhere AI can make a difference."
    },
    {
      q: "Do you offer custom AI solutions?",
      a: "Yes! We design, build, and deploy AI systems tailored to your unique business needs."
    },
    {
      q: "How do you ensure data privacy?",
      a: "We follow best practices in data security and comply with all relevant regulations, including Kenya’s Data Protection Act."
    },
    {
      q: "Can you integrate with our existing systems?",
      a: "Absolutely. Our solutions are built for interoperability and seamless integration."
    }
  ];
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <button
            className="w-full text-left px-6 py-4 bg-gray-50 dark:bg-gray-800 font-semibold focus:outline-none focus:bg-blue-100 dark:focus:bg-blue-900 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-panel-${i}`}
          >
            {faq.q}
          </button>
          <div
            id={`faq-panel-${i}`}
            className={`px-6 py-4 text-gray-700 dark:text-gray-300 text-sm bg-white dark:bg-gray-900 transition-all duration-300 ${open === i ? 'block' : 'hidden'}`}
          >
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  );
}
