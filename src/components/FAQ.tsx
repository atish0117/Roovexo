import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'The timeline depends on the complexity of your project. A basic website typically takes 1-2 weeks, while more complex projects with custom features can take 3-6 weeks. We provide a detailed timeline during our initial consultation and keep you updated throughout the process.'
    },
    {
      question: 'What is included in the website development cost?',
      answer: 'Our packages include everything needed for a complete website: design, development, responsive optimization, basic SEO setup, contact forms, social media integration, and initial support. Additional features like e-commerce, custom integrations, or advanced animations may have additional costs.'
    },
    {
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Yes! All our packages include free support for the specified period. After that, we offer affordable maintenance plans starting at $99/month that include updates, security monitoring, backups, and technical support to keep your website running smoothly.'
    },
    {
      question: 'Will my website be mobile-friendly and responsive?',
      answer: 'Absolutely! Every website we build is mobile-first and fully responsive. We ensure your site looks and functions perfectly on all devices - smartphones, tablets, and desktops. We also test across different browsers to guarantee compatibility.'
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Yes, we include basic SEO optimization in all our packages, including meta tags, site structure, and performance optimization. For advanced SEO and digital marketing services, we offer additional packages that include keyword research, content strategy, and ongoing optimization.'
    },
    {
      question: 'What if I need changes after the website is completed?',
      answer: 'We include a certain number of revisions in each package, and minor changes during the support period are free. For major changes or new features after project completion, we provide affordable hourly rates or can create a custom quote based on your needs.'
    },
    {
      question: 'Do you work with clients internationally?',
      answer: 'Yes, we work with clients worldwide! We use modern communication tools and project management systems to ensure smooth collaboration regardless of time zones. We\'re experienced in working remotely and maintaining clear communication throughout the project.'
    },
    {
      question: 'What technologies do you use to build websites?',
      answer: 'We use modern, industry-standard technologies including React, Next.js, TypeScript, Tailwind CSS, and Node.js. We choose the best technology stack for each project based on your specific needs, ensuring optimal performance, security, and scalability.'
    },
    {
      question: 'Can you integrate third-party services and APIs?',
      answer: 'Absolutely! We have extensive experience integrating various third-party services including payment gateways (Stripe, PayPal), CRM systems, email marketing tools, social media platforms, analytics tools, and custom APIs to enhance your website\'s functionality.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'We typically work with a 50% upfront payment to begin the project and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept various payment methods including bank transfers, PayPal, and credit cards for your convenience.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Here are the most common questions 
            our clients ask about our web development services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-black rounded-2xl hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-black flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-black flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-black pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white border border-black rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? We're here to help! 
              Get in touch and we'll respond within 24 hours.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Contact Us</span>
              <ChevronDown className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;