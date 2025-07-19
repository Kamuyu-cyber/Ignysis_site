'use client';

import React, { useState, useEffect, useRef } from "react"; // Consolidate imports
import { ChevronDown } from "lucide-react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionDivider from "./SectionDivider";
import UsageChart from "./UsageChart";
import { BarChart3, Hexagon, Users } from "lucide-react";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import About from "./About";
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import Contact from "./Contact";

function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white py-10 px-4 mt-0 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-yellow-400/20 rounded-lg animate-pulse-glow">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-2xl font-bold">ignsys</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering global companies with cutting-edge AI solutions that transform 
              operations through real-time intelligence and predictive analytics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer transition-colors">
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h3>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("hero")}
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("workdone")}
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">hello@ignsys.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Innovation Drive<br />
                  Tech Valley, CA 94000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © 2024 ignsys. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

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

  // Add state for dropdowns
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

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

  const [activeTab, setActiveTab] = useState("AI Usage");

  // Live data for each chart type
  const [aiUsageData, setAiUsageData] = useState([
    { name: 'Jan', value: 1200 },
    { name: 'Feb', value: 1500 },
    { name: 'Mar', value: 1700 },
    { name: 'Apr', value: 1400 },
    { name: 'May', value: 2100 },
    { name: 'Jun', value: 1800 },
    { name: 'Jul', value: 2200 },
    { name: 'Aug', value: 2000 },
    { name: 'Sep', value: 2300 },
    { name: 'Oct', value: 2500 },
    { name: 'Nov', value: 2400 },
    { name: 'Dec', value: 2600 },
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setAiUsageData((prev) => {
        const next = prev.slice(1).concat({
          name: prev[prev.length - 1].name,
          value: Math.max(1000, Math.round(prev[prev.length - 1].value + (Math.random() - 0.5) * 300)),
        });
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [modelInsightsData, setModelInsightsData] = useState([
    { name: 'Model A', value: 400 },
    { name: 'Model B', value: 300 },
    { name: 'Model C', value: 200 },
    { name: 'Model D', value: 278 },
    { name: 'Model E', value: 189 },
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setModelInsightsData((prev) => prev.map(d => ({ ...d, value: Math.max(100, d.value + Math.round((Math.random() - 0.5) * 40)) })));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const [userStatsData, setUserStatsData] = useState([
    { name: 'Week 1', value: 300 },
    { name: 'Week 2', value: 500 },
    { name: 'Week 3', value: 700 },
    { name: 'Week 4', value: 600 },
    { name: 'Week 5', value: 800 },
    { name: 'Week 6', value: 900 },
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setUserStatsData((prev) => prev.map(d => ({ ...d, value: Math.max(100, d.value + Math.round((Math.random() - 0.5) * 30)) })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // FAQ data and open state
  const faqs = [
    { q: "How does Ignysis use AI?", a: "We leverage AI to deliver scalable, real-world solutions for businesses and organizations." },
    { q: "What analytics do you provide?", a: "We provide live usage, model insights, and user engagement analytics for all our AI services." },
    { q: "Is my data secure?", a: "Yes, we follow best practices in data privacy and security." },
    { q: "Can I integrate Ignysis AI with my platform?", a: "Absolutely! Our APIs and solutions are designed for easy integration." }
  ];
  const [open, setOpen] = useState<number | null>(null);

  let chartElement = null;
  if (activeTab === "AI Usage") {
    chartElement = (
      <LineChart data={aiUsageData || []} margin={{ top: 30, right: 40, left: 0, bottom: 0 }}>
        <CartesianGrid stroke="#FFD70033" strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#06b6d4" fontSize={14} tickLine={false} axisLine={{ stroke: '#FFD700' }} />
        <YAxis stroke="#06b6d4" fontSize={14} tickLine={false} axisLine={{ stroke: '#FFD700' }} />
        <Tooltip contentStyle={{ background: '#222', color: '#FFD700', borderRadius: 12, border: 'none', fontSize: 15, boxShadow: '0 4px 24px #FFD70022' }} />
        <Line type="monotone" dataKey="value" stroke="#FFD700" strokeWidth={3} dot={{ r: 4, fill: '#06b6d4', stroke: '#fff', strokeWidth: 2 }} isAnimationActive={true} />
      </LineChart>
    );
  } else if (activeTab === "Model Insights") {
    chartElement = (
      <BarChart data={modelInsightsData || []} margin={{ top: 30, right: 40, left: 0, bottom: 0 }}>
        <CartesianGrid stroke="#FFD70033" strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#06b6d4" fontSize={14} tickLine={false} axisLine={{ stroke: '#FFD700' }} />
        <YAxis stroke="#06b6d4" fontSize={14} tickLine={false} axisLine={{ stroke: '#FFD700' }} />
        <Tooltip contentStyle={{ background: '#222', color: '#FFD700', borderRadius: 12, border: 'none', fontSize: 15, boxShadow: '0 4px 24px #FFD70022' }} />
        <Bar dataKey="value" fill="#FFD700" radius={[8, 8, 0, 0]} isAnimationActive={true} />
      </BarChart>
    );
  } else if (activeTab === "User Stats") {
    chartElement = (
      <AreaChart data={userStatsData || []} margin={{ top: 30, right: 40, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="userStatsGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4}/>
            <stop offset="95%" stopColor="#FFD700" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#FFD70033" strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#06b6d4" fontSize={14} tickLine={false} axisLine={{ stroke: '#FFD700' }} />
        <YAxis stroke="#06b6d4" fontSize={14} tickLine={false} axisLine={{ stroke: '#FFD700' }} />
        <Tooltip contentStyle={{ background: '#222', color: '#FFD700', borderRadius: 12, border: 'none', fontSize: 15, boxShadow: '0 4px 24px #FFD70022' }} />
        <Area type="monotone" dataKey="value" stroke="#06b6d4" fill="url(#userStatsGradient)" strokeWidth={3} isAnimationActive={true} />
      </AreaChart>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Remove the sticky navbar here, as it is now globally rendered in layout.tsx */}

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
                    IGNYSYS
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
                {['G', 'N', 'Y', 's', 'y', 's'].map((char, i) => (
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

      <About />

      {/* Services We Offer Section */}
      <section id="services" className="relative min-h-screen w-full flex flex-col items-center justify-center px-0 py-0 bg-black overflow-hidden">
        {/* Blurred video background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src="/3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            style={{ filter: 'blur(20px) brightness(0.7) saturate(1.1)' }}
          />
          {/* Darker, more opaque gradient overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/90 to-black/95" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto py-16">
          {/* Header with filter and search */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6 px-4">
            <h2 className="text-4xl font-bold text-center md:text-left text-yellow-400 drop-shadow-lg">Explore our solutions</h2>
            <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto justify-center">
              <button className="flex items-center gap-2 border border-yellow-300 rounded-full px-5 py-2 bg-white hover:bg-yellow-50 text-gray-800 font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M6 6v12m12-12v12M6 18h12" /></svg>
                Filter by category
              </button>
              <div className="flex items-center border-b border-yellow-300 bg-white rounded-full px-3 py-2 w-full md:w-72">
                <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" /></svg>
                <input type="text" placeholder="Search categories" className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500" />
              </div>
            </div>
          </div>
          <div className="text-gray-200 text-sm mb-6 px-4">Displaying 1-8 ({services.length})</div>
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
                  className="group cursor-pointer transition-all duration-200 hover:shadow-lg bg-black/60 border-0 shadow-sm hover:border-yellow-400 rounded-xl"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="text-xs font-medium text-yellow-400 uppercase tracking-wide mb-3">
                      {service.category}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 leading-tight group-hover:text-yellow-400 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-end">
                      <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all duration-200" />
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
      <section id="workdone" className="relative min-h-screen w-full flex flex-col items-center justify-center px-0 py-0 bg-black overflow-hidden" style={{marginTop: 0, paddingTop: 0}}>
        {/* Blurred video background, matching services section */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src="/3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            style={{ filter: 'blur(20px) brightness(0.7) saturate(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/90 to-black/95" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto py-16">
          {/* Header with filter and search */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6 px-4">
            <h2 className="text-4xl font-bold text-center md:text-left text-yellow-400 drop-shadow-lg">Explore our work</h2>
            <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto justify-center">
              <button className="flex items-center gap-2 border border-yellow-300 rounded-full px-5 py-2 bg-white hover:bg-yellow-50 text-gray-800 font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M6 6v12m12-12v12M6 18h12" /></svg>
                Filter by category
              </button>
              <div className="flex items-center border-b border-yellow-300 bg-white rounded-full px-3 py-2 w-full md:w-72">
                <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" /></svg>
                <input type="text" placeholder="Search by project or category" className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500" />
              </div>
            </div>
          </div>
          <div className="text-gray-200 text-sm mb-6 px-4">Displaying 1-{workDone.length} ({workDone.length})</div>
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
                <div className="group cursor-pointer transition-all duration-200 hover:shadow-lg bg-black/60 shadow-sm hover:border-yellow-400 rounded-xl flex flex-col h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-xl mb-4"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs font-medium text-yellow-400 uppercase tracking-wide mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold text-white mb-2 leading-tight group-hover:text-yellow-400 transition-colors duration-200">{project.title}</h3>
                    {project.desc.map((d, idx) => (
                      <p key={idx} className="text-gray-200 text-sm leading-relaxed mb-2">{d}</p>
                    ))}
                  </div>
                  <div className="flex items-center justify-end px-6 pb-4">
                    <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all duration-200" />
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

      {/* Why Choose Us Section */}
      <section id="whychoose" className="relative min-h-screen w-full flex flex-col items-center justify-center px-0 py-0 overflow-hidden bg-black">
        {/* Blurred video background, matching 'Why Choose Us' */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src="/3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            style={{ filter: 'blur(20px) brightness(0.7) saturate(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/90 to-black/95" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto py-24 flex flex-col items-center">
          <h2
            className="text-5xl md:text-6xl font-bold text-center mb-16"
            style={{ color: '#d4af37' }}
          >
            Why Choose Us
          </h2>
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
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 w-full max-w-2xl text-center relative mb-[-32px]"
                style={{
                  zIndex: 10 - i,
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
                  WebkitBackdropFilter: "blur(16px)"
                }}
              >
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: '#d4af37' }}
                >
                  {point.title}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <TrustedBySection />

      {/* Contact Section */}
      <Contact />

      {/* AI Analytics FAQ Section */}
      <section id="ai-analytics-faq" className="relative w-full min-h-screen flex flex-col items-center justify-center px-0 py-0 overflow-hidden bg-black">
        {/* Blurred video background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src="/3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            style={{ filter: 'blur(20px) brightness(0.7) saturate(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/90 to-black/95" />
        </div>
        <div className="relative z-10 max-w-5xl w-full mx-auto py-20 px-4 flex flex-col items-center justify-center">
          {/* AI Analytics Dashboard */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-cyan-400 drop-shadow-lg">Ignysis AI Analytics Dashboard</h2>
            <div className="flex justify-center mb-8">
              <div className="flex bg-gray-800/50 rounded-lg p-1 backdrop-blur-sm border border-gray-700">
                {[{ name: "AI Usage", icon: BarChart3 }, { name: "Model Insights", icon: Hexagon }, { name: "User Stats", icon: Users }].map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-300 ${activeTab === tab.name ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"}`}
                  >
                    <tab.icon size={16} />
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-screen h-[60vh] p-0 m-0 bg-black rounded-3xl border-2 border-yellow-400 relative overflow-hidden shadow-2xl flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                {chartElement || <div />}
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-6 text-cyan-300 text-lg font-semibold">
              {activeTab === "AI Usage" && "Live AI Service Usage Across Our Platform"}
              {activeTab === "Model Insights" && "Insights from Our Latest AI Models"}
              {activeTab === "User Stats" && "User Engagement & Growth Analytics"}
            </div>
          </div>
          {/* FAQ Section */}
          <div className="bg-gray-800/40 rounded-2xl p-8 border border-gray-700 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-4 bg-gray-900 font-semibold focus:outline-none focus:bg-cyan-900/30 transition-colors text-cyan-200"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    aria-controls={`faq-panel-${i}`}
                  >
                    {faq.q}
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={`px-6 py-4 text-cyan-100 text-sm bg-gray-900 transition-all duration-300 ${open === i ? 'block' : 'hidden'}`}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes flow {
            0% { opacity: 0.3; transform: scaleY(0.8); }
            50% { opacity: 0.8; transform: scaleY(1.1); }
            100% { opacity: 0.3; transform: scaleY(0.8); }
          }
        `}</style>
      </section>

      {/* Modern Multi-Column Footer */}
      <Footer />
    </div>
  );
}

function TrustedBySection() {
  // List of real open-source/global tech company logos (SVGs from public or CDN)
  const logos = [
    { name: "Google", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Microsoft", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" },
    { name: "Meta", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
    { name: "IBM", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg" },
    { name: "Red Hat", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg" },
    { name: "Mozilla", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg" },
    { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Amazon AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Apple", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
    { name: "Slack", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    { name: "Twitter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Ubuntu", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
    { name: "OpenAI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg" },
    { name: "Vercel", src: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
    { name: "Android", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { name: "Bitbucket", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
    { name: "DigitalOcean", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
    { name: "GitLab", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    { name: "Heroku", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
    { name: "Jenkins", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  ];
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-0 py-0 overflow-hidden">
      {/* Blurred video background, matching new dark style */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          src="/3.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          style={{ filter: 'blur(20px) brightness(0.7) saturate(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/90 to-black/95" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto text-center py-16 px-4 md:px-8 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          Trusted Companies and Partners
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          These global and open-source leaders trust us for real-time network support.
        </p>
        {/* Animated logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 items-center justify-center">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ y: i % 2 === 0 ? 30 : -30, opacity: 0 }}
              animate={{ y: i % 2 === 0 ? -30 : 30, opacity: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2.5 + (i % 5) * 0.3,
                delay: i * 0.12,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center"
            >
              <img src={logo.src} alt={logo.name} className="h-14 w-14 object-contain mb-2" />
              <span className="text-xs font-semibold text-gray-300">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
