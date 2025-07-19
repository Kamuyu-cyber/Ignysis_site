import { useState, ReactNode, MouseEventHandler, FormEvent, ChangeEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Zap } from "lucide-react";

type CardProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
const Card = ({ children, className = "", onClick }: CardProps) => (
  <div className={`rounded-2xl shadow-lg bg-black/60 border border-gray-700 ${className}`} onClick={onClick} tabIndex={onClick ? 0 : undefined} style={onClick ? { cursor: 'pointer' } : {}}>{children}</div>
);
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };
const Button = ({ children, ...props }: ButtonProps) => <button className="rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 transition-all duration-300" {...props}>{children}</button>;
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
const Input = (props: InputProps) => <input className="rounded-lg border border-gray-700 bg-black/30 text-white px-4 py-2 w-full" {...props} />;
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
const Textarea = (props: TextareaProps) => <textarea className="rounded-lg border border-gray-700 bg-black/30 text-white px-4 py-2 w-full" {...props} />;

type ToastType = { title: string; description: string } | null;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [toast, setToast] = useState<ToastType>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setToast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setTimeout(() => setToast(null), 4000);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      description: "Drop us a line anytime",
      action: () => window.open("mailto:hello@ignsys.com", "_blank")
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      action: () => window.open("tel:+15551234567", "_blank")
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Drive, Tech Valley, CA 94000",
      description: "Our headquarters",
      action: () => window.open("https://www.google.com/maps/search/?api=1&query=123+Innovation+Drive,+Tech+Valley,+CA+94000", "_blank")
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 8am - 6pm PST",
      description: "Weekend support available",
      action: null // informational only
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
            <MessageSquare className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business with
            <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent"> AI Solutions?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how ignsys can help you harness the power of real-time AI 
            to drive innovation and growth in your organization.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 hover:shadow-yellow-400/40 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-yellow-400/30 to-yellow-600/40 rounded-lg mr-4 animate-pulse-glow">
                <Send className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                <p className="text-gray-300">We'll respond within 24 hours</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name *</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email Address *</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">Company Name</label>
                <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message *</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your AI needs and how we can help..." rows={5} />
              </div>
              <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-6">
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </Card>
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Button className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-0">
                  <Calendar className="mr-3 w-5 h-5" />
                  Schedule a Demo
                </Button>
                <Button className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-0">
                  <Zap className="mr-3 w-5 h-5" />
                  Start Free Trial
                </Button>
                <Button className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-0">
                  <MessageSquare className="mr-3 w-5 h-5" />
                  Live Chat Support
                </Button>
              </div>
            </Card>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-yellow-400/30" onClick={info.action ? info.action : undefined}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-yellow-400/10 rounded-lg">
                      <info.icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-white font-medium mb-1">{info.content}</p>
                      <p className="text-sm text-gray-300">{info.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gray-900/80">
            <div className="max-w-2xl mx-auto">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Response Time Promise</h3>
              <p className="text-gray-300">
                We understand that your time is valuable. That's why we guarantee a response 
                to all inquiries within 24 hours during business days, and often much sooner.
              </p>
            </div>
          </Card>
        </div>
      </div>
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 text-yellow-400 px-6 py-4 rounded-xl shadow-lg flex flex-col items-center animate-fade-in-up">
          <div className="font-bold text-lg mb-1">{toast.title}</div>
          <div className="text-sm text-yellow-200">{toast.description}</div>
        </div>
      )}
    </section>
  );
};

export default Contact; 