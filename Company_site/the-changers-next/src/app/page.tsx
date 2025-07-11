'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react"; // Added for FAQAccordion
import UsageChart from "./UsageChart";

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
      {/* Dark/Light Mode Toggle */}
      <button
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-xs font-semibold shadow hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-colors"
        onClick={() => setDark((d) => !d)}
        aria-label="Toggle dark mode"
      >
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-red-500 to-blue-400 dark:from-blue-200 dark:via-red-400 dark:to-blue-400"
        >
          The Changers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-2xl max-w-2xl"
        >
          Building intelligent AI solutions for a changing world. Our mission: Empower organizations with innovative, scalable, and ethical AI.
        </motion.p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-white font-bold text-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-red-400 transition-all duration-300"
        >
          Get Started
        </motion.a>
      </section>

      {/* What We Do */}
      <motion.section
        className="py-16 px-4 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What We Do</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {offerings.map((offering, i) => (
            <motion.div
              key={offering.title}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer border border-gray-200 dark:border-transparent hover:border-blue-400"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <span className="text-5xl mb-4">{offering.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{offering.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Work Done */}
      <motion.section
        className="py-16 px-4 max-w-6xl mx-auto"
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
        className="py-16 px-4 max-w-6xl mx-auto"
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
      <section className="flex flex-col items-center justify-center py-10 px-4 md:px-0">
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
        &copy; {new Date().getFullYear()} The Changers. All rights reserved.
      </footer>
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
