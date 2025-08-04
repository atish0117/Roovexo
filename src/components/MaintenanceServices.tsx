import { 
  RefreshCw, 
  Wrench, 
  TrendingUp, 
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Target,
  Award
} from 'lucide-react';

const MaintenanceServices = () => {
  const services = [
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      description: 'Transform your outdated website into a modern masterpiece',
      features: [
        'Stunning modern UI/UX design',
        '100% mobile responsiveness',
        'Blazing-fast loading speed',
        'Clean, clutter-free layouts',
        'Brand-consistent styling',
        'User experience optimization'
      ],
      color: 'from-primary-500 to-secondary-500'
    },
    {
      icon: Wrench,
      title: 'Website Maintenance',
      description: 'Keep your website running smoothly with regular care',
      features: [
        'Regular updates & backups',
        'Security monitoring & fixes',
        'Bug fixes & error handling',
        'Content updates & optimizations',
        'Performance monitoring',
        'Technical support'
      ],
      color: 'from-secondary-500 to-primary-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Boost',
      description: 'Supercharge your website for maximum performance',
      features: [
        'Speed optimization (GTmetrix boost)',
        'SEO enhancements',
        'Core Web Vitals improvement',
        'Chatbot & form integrations',
        'Analytics setup',
        'Conversion optimization'
      ],
      color: 'from-primary-600 to-secondary-400'
    }
  ];

  const targetAudience = [
    { icon: Users, title: 'Businesses with old websites', description: 'Modernize your online presence' },
    { icon: TrendingUp, title: 'Sites with performance issues', description: 'Boost speed and user experience' },
    { icon: Target, title: 'Freelancers needing portfolio revamp', description: 'Stand out from the competition' },
    { icon: RefreshCw, title: 'Anyone needing a website facelift', description: 'Fresh look, better results' }
  ];

  const whyChooseUs = [
    { icon: Award, title: 'Expert in modern tech', description: 'React, WordPress, HTML & more' },
    { icon: Sparkles, title: 'Tailored solutions', description: 'Custom approach for every business' },
    { icon: CheckCircle, title: 'Satisfaction guaranteed', description: '100% money-back guarantee' },
    { icon: Clock, title: 'Quick turnaround', description: 'Fast delivery & affordable pricing' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Wrench className="w-5 h-5" />
            <span>Redesign & Maintenance</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Revamp Your Existing Website
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Give It a Fresh Life!
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl font-semibold text-red-600 mb-6 leading-relaxed">
              Already have a website but it looks outdated or underperforms?
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
              <p className="text-2xl font-bold text-gray-900 mb-4">
                💡 Don't start from scratch — let us transform your existing site into a modern, high-performing powerhouse.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-primary-100/50 hover:border-primary-200 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 relative overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-20 h-20 bg-black rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center group/feature">
                      <CheckCircle className="w-5 h-5 text-black mr-3 flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-300" />
                      <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 group-hover/feature:translate-x-2">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`inline-flex items-center bg-black text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 group-hover:px-8`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Target Audience */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              💼 Who is it for?
            </h3>
            <p className="text-xl text-gray-600">
              Perfect solutions for every type of business and individual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-primary-100/50 hover:border-primary-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                  {audience.title}
                </h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🎁 Why Choose Us?
            </h3>
            <p className="text-xl text-gray-600">
              Experience the difference with our professional approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="group bg-black rounded-2xl p-6 border border-primary-100 hover:border-primary-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <reason.icon className="w-8 h-8 text-black" />
                </div>
                <h4 className="font-bold text-white mb-2 group-hover:text-secondary-700 transition-colors duration-300">
                  {reason.title}
                </h4>
                <p className="text-sm text-gray-300 group-hover:text-gray-500 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">🚀 Ready to Upgrade Your Website?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <CheckCircle className="w-8 h-8 text-green-300 mb-3" />
                <h4 className="font-bold mb-2">Share your current website link</h4>
                <p className="text-white/80 text-sm">Let us analyze what needs improvement</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <CheckCircle className="w-8 h-8 text-green-300 mb-3" />
                <h4 className="font-bold mb-2">Tell us what you need</h4>
                <p className="text-white/80 text-sm">Describe your goals and requirements</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <CheckCircle className="w-8 h-8 text-green-300 mb-3" />
                <h4 className="font-bold mb-2">Get a full plan + pricing within 24 hours</h4>
                <p className="text-white/80 text-sm">Detailed proposal with timeline</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-primary-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <span>📩 Get a Free Website Audit</span>
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceServices;