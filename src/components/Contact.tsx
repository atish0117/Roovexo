import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  CheckCircle,
} from 'lucide-react';
import { FaThreads } from "react-icons/fa6";
import { IoLogoWhatsapp,IoLogoInstagram  } from "react-icons/io5";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'roovexo@gmail.com',
      link: 'mailto:roovexo@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+919716436292',
      link: 'tel:+919716436292'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available Worldwide',
      link: '#'
    }
  ];

  const projectTypes = [
    'Business Website',
    'E-commerce Store',
    'Portfolio Website',
    'SaaS Platform',
    'Mobile App',
    'Custom Solution'
  ];

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Get in touch and let's discuss how I can 
            help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{info.title}</div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Response Time */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold text-green-800">Quick Response</div>
                    <div className="text-sm text-green-600">Usually within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Project</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:bg-gray-900 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Prefer a quick chat?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:roovexo@gmail.com"
              className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full border border-gray-300 hover:border-black hover:text-black transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
            <a
              href="https://wa.me/+919716436292"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-all duration-300"
            >
              <IoLogoWhatsapp className="w-5 h-5" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="https://instagram.com/roovexo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full border border-gray-300 hover:border-black hover:text-black transition-all duration-300"
            >
              <IoLogoInstagram className="w-5 h-5" />
              <span>Instagram DM</span>
            </a>
            <a
              href="https://threads.net/@roovexo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full border border-gray-300 hover:border-black hover:text-black transition-all duration-300"
            >
              <FaThreads className="w-5 h-5" />
              
              <span>Threads</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;