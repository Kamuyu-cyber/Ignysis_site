'use client';

import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative text-white py-16">
       <div className="absolute inset-0 w-full h-full z-0">
        <video
          src="/3.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/90" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-yellow-400/10 rounded-lg animate-pulse-glow">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-2xl font-bold">ignsys</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering global companies with cutting-edge AI solutions that transform 
              operations through real-time intelligence and predictive analytics.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-yellow-400/10 hover:bg-yellow-400/20 rounded-lg cursor-pointer transition-colors">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="p-2 bg-yellow-400/10 hover:bg-yellow-400/20 rounded-lg cursor-pointer transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="p-2 bg-yellow-400/10 hover:bg-yellow-400/20 rounded-lg cursor-pointer transition-colors">
                <Github className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("hero")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("workdone")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Clients
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">hello@ignsys.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Innovation Drive<br />
                  Tech Valley, CA 94000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © 2024 ignsys. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 