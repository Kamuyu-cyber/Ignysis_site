'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react"; // Added for FAQAccordion
import UsageChart from "./UsageChart";
import { ChevronDown } from "lucide-react";
import Nature3DBackground from "./NeuralNetworkBackground";

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

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative p-0 m-0">
        {/* Browser tabs simulation - now a live flowing marquee */}
        <div className="bg-gray-800 text-white text-xs py-1 px-0 flex items-center gap-0 overflow-hidden">
          <div className="w-full overflow-hidden relative">
            <div className="flex gap-1 animate-ignysis-marquee whitespace-nowrap" style={{ minWidth: 'max-content' }}>
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="whitespace-nowrap px-3 py-1 bg-gray-700 rounded-t-sm">
                  IGNYsis: AI SOLUTIONS ★
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Main hero section */}
        <div className="relative h-screen">
          {/* Hero background image restored */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img src="/wallhaven-xel95o.jpg" alt="Hero Background" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          {/* Overlay content */}
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-4 z-10">
            {/* Nav bar */}
            <nav className="w-full flex justify-center md:justify-between items-center py-4 px-2 md:px-8 absolute top-0 left-0 z-20">
              <span className="text-lg md:text-2xl font-bold tracking-widest">IGNYSIS</span>
              <ul className="hidden md:flex gap-8 text-base font-medium">
                <li><a href="#hero" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#whatwedo" className="hover:text-accent transition-colors">What We Do</a></li>
                <li><a href="#workdone" className="hover:text-accent transition-colors">Work Done</a></li>
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
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6">
                IGNYsis
              </h1>
              {/* New subtitle below heading */}
              <p className="text-2xl md:text-3xl font-semibold mb-8 opacity-95">
                Igniting systemic change
              </p>
              {/* Subtitle */}
              <p className="text-lg md:text-xl font-light mb-16 opacity-90">
                Building the future with AI for Africa and beyond
              </p>
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

      {/* Blurred border line between hero and What We Do */}
      <div className="w-full h-0.5 bg-blue-200/60 backdrop-blur-md shadow-[0_0_16px_2px_rgba(59,130,246,0.15)] my-0 z-30 relative"></div>

      {/* What We Do */}
      <section
        id="whatwedo"
        className="relative min-h-screen w-full flex items-center justify-center px-0 py-0 overflow-hidden"
      >
        {/* Background image */}
        <Image
          src="/2.jpg"
          alt="AI background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Content */}
        <div className="relative z-20 w-full px-2 md:px-8 lg:px-16 flex flex-col items-center justify-center text-center text-white min-h-screen">
          <div className="max-w-3xl mx-auto space-y-4 mb-6">
            <p className="text-xs font-medium tracking-widest uppercase text-gray-200">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">AI Solutions for Real Impact</h2>
            <p className="text-gray-200 leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
              We deliver cutting-edge AI, automation, and analytics to help you innovate, scale, and succeed. Explore our core offerings below.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-base font-semibold tracking-wide border-b-2 border-white pb-1 hover:pl-2 transition-all group w-fit mx-auto">
              Get in Touch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3 w-full max-w-5xl mx-auto">
            {offerings.map((offering, i) => (
              <div
                key={offering.title}
                className="bg-white/80 rounded-xl shadow-lg p-4 flex flex-col items-center border border-solid border-[3.5px] border-blue-200/60 backdrop-blur-2xl hover:shadow-[0_0_24px_4px_rgba(59,130,246,0.25)] hover:border-blue-400 transition-all duration-200 min-h-[160px] text-black"
              >
                <span className="text-3xl mb-2">{offering.icon}</span>
                <h3 className="text-lg font-semibold mb-1 text-center font-serif">{offering.title}</h3>
                <p className="text-gray-700 text-center text-sm">{offering.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Done */}
      <motion.section
        id="workdone"
        className="py-16 px-4 max-w-6xl mx-auto mt-24 mb-24 bg-white text-black rounded-3xl shadow-xl border border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Work Done</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {workDone.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 hover:scale-[1.02] transition-transform border border-transparent hover:border-blue-400"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-40 h-32 object-cover rounded-lg shadow mb-4 md:mb-0"
              />
              <div>
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-300 mb-1">{project.category}</div>
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                {project.desc.map((d, idx) => (
                  <p key={idx} className="text-gray-800 dark:text-gray-200 text-sm mb-2">{d}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        id="whychoose"
        className="py-16 px-4 max-w-6xl mx-auto mt-24 mb-24 bg-white text-black rounded-3xl shadow-xl border border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((point, i) => (
            <motion.div
              key={point.title}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

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
