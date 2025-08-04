import { 
  MessageSquare, 
  Lightbulb, 
  Code, 
  Rocket, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery & Consultation',
      description: 'We start with an in-depth consultation to understand your business goals, target audience, and project requirements.',
      details: [
        'Business analysis and goal setting',
        'Target audience research',
        'Competitor analysis',
        'Technical requirements gathering',
        'Timeline and budget planning'
      ],
      duration: '1-2 days',
      color: 'black',
      textColor: 'text-white'
    },
    {
      icon: Lightbulb,
      title: 'Strategy & Design',
      description: 'Our team creates wireframes, mockups, and prototypes that align with your brand and user experience goals.',
      details: [
        'Information architecture',
        'Wireframing and user flows',
        'Visual design and branding',
        'Interactive prototypes',
        'Design system creation'
      ],
      duration: '3-5 days',
      color: 'white',
      textColor: 'text-black'

    },
    {
      icon: Code,
      title: 'Development & Testing',
      description: 'We bring your design to life with clean, efficient code and rigorous testing across all devices and browsers.',
      details: [
        'Frontend development',
        'Backend integration',
        'Database setup',
        'Cross-browser testing',
        'Performance optimization'
      ],
      duration: '1-3 weeks',
      color: 'black',
      textColor: 'text-white'

    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We deploy your website and provide ongoing support to ensure everything runs smoothly and stays up-to-date.',
      details: [
        'Domain and hosting setup',
        'SSL certificate installation',
        'SEO optimization',
        'Analytics integration',
        'Training and documentation'
      ],
      duration: '1-2 days',
      color: 'white',
      textColor: 'text-black'


    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      black: 'from-gray-800 to-gray-700',
      white: 'from-white to-white',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure every project is delivered on time, 
            within budget, and exceeds expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 to-purple-200"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-lg">
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                    index % 2 === 0 ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    <span>Step {index + 1}</span>
                    <span>•</span>
                    <span>{step.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Icon */}
                <div className="relative">
                  <div className={`w-24 h-24 bg-gradient-to-r ${getColorClasses(step.color)} rounded-full flex items-center justify-center shadow-lg`}>
                    <step.icon className={`w-12 h-12 ${step.textColor}`} />

                  </div>
                  
                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
                    </div>
                  )}
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 lg:max-w-lg hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life. 
              Get a free consultation and project estimate today.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;