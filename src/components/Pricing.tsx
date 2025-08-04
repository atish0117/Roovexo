import React, { useState } from 'react';
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Rocket,
  ArrowRight,
  Gift
} from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const packages = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small businesses and personal projects',
      monthlyPrice: 1299,
      annualPrice: 999,
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Contact form',
        'Basic SEO setup',
        'Social media integration',
        '30 days support',
        'Mobile optimization',
        'Fast loading speed'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional',
      icon: Crown,
      description: 'Ideal for growing businesses and e-commerce',
      monthlyPrice: 2499,
      annualPrice: 1999,
      features: [
        'Up to 15 pages',
        'Custom design',
        'E-commerce integration',
        'Advanced SEO',
        'Analytics setup',
        '90 days support',
        'Payment gateway',
        'Admin dashboard',
        'Blog functionality',
        'Email marketing setup'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      icon: Rocket,
      description: 'Complete solution for large businesses',
      monthlyPrice: 4999,
      annualPrice: 3999,
      features: [
        'Unlimited pages',
        'Custom web application',
        'Advanced integrations',
        'Premium SEO package',
        'Performance optimization',
        '6 months support',
        'Custom features',
        'Database design',
        'API development',
        'Priority support',
        'Training included',
        'Maintenance plan'
      ],
      popular: false,
      color: 'green'
    }
  ];

  const addOns = [
    { name: 'Additional Page', price: 199, description: 'Extra custom page design' },
    { name: 'Logo Design', price: 299, description: 'Professional brand identity' },
    { name: 'Content Writing', price: 149, description: 'Per page professional content' },
    { name: 'Advanced Animation', price: 399, description: 'Custom animations and interactions' },
    { name: 'Multi-language Support', price: 599, description: 'Complete translation setup' },
    { name: 'Advanced Security', price: 299, description: 'Enhanced security features' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect package for your needs. All packages include modern design, 
            responsive development, and ongoing support.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`font-medium ${!isAnnual ? 'text-black' : 'text-black'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-black' : 'bg-white border-2 border-black'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full ${isAnnual ? 'bg-white' : 'bg-black'} transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-black' : 'text-black'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                pkg.popular ? 'ring-2 ring-black scale-105' : 'border border-black'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        ${isAnnual ? pkg.annualPrice : pkg.monthlyPrice}
                      </span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-black mt-1">
                        <span className="line-through">${pkg.monthlyPrice}</span>
                        <span className="text-black font-medium ml-2">Save ${pkg.monthlyPrice - pkg.annualPrice}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-black text-white hover:shadow-lg transform hover:-translate-y-1'
                      : 'bg-white border border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="text-center mb-8">
            <Gift className="w-12 h-12 text-black mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Optional Add-ons
            </h3>
            <p className="text-gray-600">
              Enhance your website with these additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="border border-black rounded-xl p-6 hover:bg-black hover:text-white hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold">{addon.name}</h4>
                  <span className="font-bold">${addon.price}</span>
                </div>
                <p className="text-sm opacity-80">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offer */}
        <div className="bg-black rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            🎉 Limited Time Offer
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Get 20% off your first project + Free logo design worth $299
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white border border-white transition-colors duration-300"
            >
              Claim This Offer
            </a>
            <span className="text-sm opacity-75">
              Valid until end of this month
            </span>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full">
            <Check className="w-5 h-5" />
            <span className="font-medium">30-Day Money Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;