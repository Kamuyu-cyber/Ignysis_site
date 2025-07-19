import { Brain, Cpu, Globe, Zap, Target, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI",
      description: "Cutting-edge machine learning algorithms that adapt and evolve with your business needs."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast data processing with sub-millisecond response times for critical operations."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Distributed infrastructure serving companies across 50+ countries with 99.9% uptime."
    },
    {
      icon: Target,
      title: "Precision Analytics",
      description: "Actionable insights powered by advanced analytics and predictive modeling."
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Distributed processing at the edge for minimal latency and maximum performance."
    },
    {
      icon: Users,
      title: "Enterprise Ready",
      description: "Built for enterprise scale with security, compliance, and reliability at the core."
    }
  ];

  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col items-center justify-center px-0 py-0 bg-black overflow-hidden">
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
      <div className="relative z-10 w-full max-w-7xl mx-auto py-16 px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 mb-6">
            <Brain className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">About ignsys</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Redefining AI for the 
            <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent"> Modern Enterprise</span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Founded in 2020, ignsys has emerged as a leader in real-time AI solutions, 
            partnering with Fortune 500 companies to transform their operations through 
            intelligent automation and predictive analytics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-300">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">$2.5B</div>
            <div className="text-gray-300">Cost Savings Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-300">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Uptime SLA</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl shadow-md bg-gray-900/80 backdrop-blur-sm border border-gray-700 group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-yellow-400/20 rounded-lg group-hover:animate-pulse-glow transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">Our Mission</h3>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              To democratize AI technology and make real-time intelligence accessible 
              to businesses of all sizes, driving innovation and efficiency across industries.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 