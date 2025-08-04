import React from 'react';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Palette, 
  Zap, 
  Shield,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Premium Website Development',
      description: 'Cutting-edge websites built with React, Next.js, TypeScript, and modern frameworks. Every pixel crafted to perfection.',
      features: ['React & Next.js', 'TypeScript Integration', 'Advanced Animations', 'Performance Optimized', 'SEO Ready', 'Mobile-First Design'],
      color: 'primary-600',
      bgColor: 'primary-50'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Powerhouses',
      description: 'Full-featured online stores with advanced payment systems, inventory management, and powerful admin dashboards.',
      features: ['Stripe & PayPal Integration', 'Advanced Inventory', 'Analytics Dashboard', 'Multi-vendor Support', 'Order Management', 'Customer Portal'],
      color: 'primary-700',
      bgColor: 'primary-100'
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps',
      description: 'Native app-like experiences that work seamlessly across all devices with offline capabilities and push notifications.',
      features: ['Offline Functionality', 'Push Notifications', 'App-like Experience', 'Cross-Platform', 'Fast Loading', 'Installable'],
      color: 'primary-500',
      bgColor: 'primary-50'
    },
    {
      icon: Palette,
      title: 'UI/UX Excellence',
      description: 'Award-winning designs that combine stunning visuals with intuitive user experiences to maximize conversions.',
      features: ['User Research & Testing', 'Interactive Prototypes', 'Design Systems', 'Conversion Optimization', 'Accessibility Focus', 'Brand Integration'],
      color: 'primary-800',
      bgColor: 'primary-100'
    },
    {
      icon: Zap,
      title: 'Performance & SEO Mastery',
      description: 'Lightning-fast websites with advanced SEO strategies that rank higher and convert better than the competition.',
      features: ['Core Web Vitals', 'Advanced SEO', 'Speed Optimization', 'Analytics Setup', 'Performance Monitoring', 'Technical SEO'],
      color: 'primary-600',
      bgColor: 'primary-50'
    },
    {
      icon: Shield,
      title: 'Enterprise Support',
      description: 'Comprehensive maintenance, security monitoring, and 24/7 support to ensure your website performs flawlessly.',
      features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization', 'Content Updates', 'Backup & Recovery', 'Priority Support'],
      color: 'primary-700',
      bgColor: 'primary-100'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-5 h-5" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 leading-tight">
            Services That
            <span className="block text-black">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            From concept to launch, we provide comprehensive web development services 
            to help your business succeed online with cutting-edge technology and creative excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-black hover:bg-black hover:text-white hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 overflow-hidden"
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Icon with 3D Effect */}
                <div className="w-20 h-20 bg-black group-hover:bg-white rounded-3xl flex items-center justify-center mb-8 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 shadow-lg group-hover:shadow-2xl relative overflow-hidden">
                  <service.icon className="w-10 h-10 text-white group-hover:text-black relative z-10" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black group-hover:text-white mb-4 transition-colors duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-black group-hover:text-white mb-8 leading-relaxed transition-colors duration-500">
                  {service.description}
                </p>

                {/* Features with Creative Design */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center group/feature">
                      <div className="w-2 h-2 bg-black group-hover:bg-white rounded-full mr-4 group-hover/feature:scale-150 transition-transform duration-300"></div>
                      <span className="text-black group-hover:text-white transition-colors duration-300 group-hover/feature:translate-x-2">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center bg-black group-hover:bg-white text-white group-hover:text-black px-6 py-3 rounded-2xl font-semibold transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 group-hover:px-8"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-black rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together. 
                Get a free consultation and see how we can help you succeed.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-black hover:text-white border border-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;