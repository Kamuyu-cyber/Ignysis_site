'use client';

import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useToast } from "../../hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Calendar,
  Zap
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@ignsys.com",
      description: "Drop us a line anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Drive, Tech Valley, CA 94000",
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 8am - 6pm PST",
      description: "Weekend support available"
    }
  ];

  return (
    <section id="contact" className="py-20 relative text-white">
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
            <MessageSquare className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business with
            <span className="text-yellow-400"> AI Solutions?</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss how ignsys can help you harness the power of real-time AI 
            to drive innovation and growth in your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-[#111827] border-gray-700/50 group">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-yellow-400/10 rounded-lg mr-4 animate-pulse-glow">
                <Send className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                <p className="text-gray-400">We&apos;ll respond within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your AI needs and how we can help..."
                  rows={5}
                  className="w-full"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 py-6"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </Card>
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <Card className="p-8 bg-gradient-to-br from-yellow-400/10 via-black/30 to-black/80 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Button 
                  className="w-full justify-start bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 border-0"
                  
                >
                  <Calendar className="mr-3 w-5 h-5" />
                  Schedule a Demo
                </Button>
                <Button 
                  className="w-full justify-start bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 border-0"
                  
                >
                  <Zap className="mr-3 w-5 h-5" />
                  Start Free Trial
                </Button>
                <Button 
                  className="w-full justify-start bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 border-0"
                  
                >
                  <MessageSquare className="mr-3 w-5 h-5" />
                  Live Chat Support
                </Button>
              </div>
            </Card>
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 bg-[#111827] border-gray-700/50 group">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-yellow-400/10 rounded-lg">
                      <info.icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-white font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-400">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* Response Time Promise */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-[#111827] border-gray-700/50 group">
            <div className="max-w-2xl mx-auto">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Response Time Promise
              </h3>
              <p className="text-gray-400">
                We understand that your time is valuable. That&apos;s why we guarantee a response 
                to all inquiries within 24 hours during business days, and often much sooner.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact; 