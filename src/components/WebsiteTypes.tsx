import React from "react";
import {
  Store,
  Briefcase,
  User,
  GraduationCap,
  Heart,
  Utensils,
  Building,
  Camera,
  Music,
  Gamepad2,
  Newspaper,
  Stethoscope,
  Car,
  Home,
  Plane,
  BookOpen,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const WebsiteTypes = () => {
  const websiteTypes = [
    {
      icon: Store,
      title: "E-commerce Stores",
      description:
        "Complete online shopping experiences with payment integration, inventory management, and customer accounts.",
      features: [
        "Payment Gateway Integration",
        "Product Catalog",
        "Shopping Cart",
        "Order Management",
        "Customer Reviews",
        "Inventory Tracking",
      ],
      examples: [
        "Fashion Stores",
        "Electronics Shop",
        "Handmade Crafts",
        "Digital Products",
      ],
      color: "green",
    },
    {
      icon: Briefcase,
      title: "Business Websites",
      description:
        "Professional corporate websites that establish credibility and showcase your services to potential clients.",
      features: [
        "Professional Design",
        "Service Pages",
        "Team Profiles",
        "Contact Forms",
        "Testimonials",
        "Company Blog",
      ],
      examples: [
        "Consulting Firms",
        "Law Offices",
        "Marketing Agencies",
        "Financial Services",
      ],
      color: "blue",
    },
    {
      icon: User,
      title: "Portfolio Websites",
      description:
        "Stunning showcases for creative professionals to display their work and attract new opportunities.",
      features: [
        "Gallery Layouts",
        "Project Showcases",
        "About Section",
        "Contact Integration",
        "Resume Download",
        "Social Links",
      ],
      examples: ["Photographers", "Designers", "Artists", "Developers"],
      color: "purple",
    },
    {
      icon: Utensils,
      title: "Restaurant Websites",
      description:
        "Appetizing websites with online menus, reservations, and ordering systems for food businesses.",
      features: [
        "Digital Menus",
        "Online Reservations",
        "Food Ordering",
        "Location Maps",
        "Special Events",
        "Customer Reviews",
      ],
      examples: ["Fine Dining", "Fast Food", "Cafes", "Food Trucks"],
      color: "orange",
    },
    {
      icon: Heart,
      title: "Healthcare Websites",
      description:
        "HIPAA-compliant medical websites with appointment booking and patient information systems.",
      features: [
        "Appointment Booking",
        "Patient Portal",
        "Service Information",
        "Doctor Profiles",
        "Health Resources",
        "Contact Forms",
      ],
      examples: [
        "Clinics",
        "Dental Offices",
        "Therapy Centers",
        "Wellness Spas",
      ],
      color: "red",
    },
    {
      icon: GraduationCap,
      title: "Educational Platforms",
      description:
        "Learning management systems and educational websites with course management and student portals.",
      features: [
        "Course Catalogs",
        "Student Portals",
        "Online Learning",
        "Progress Tracking",
        "Certification",
        "Discussion Forums",
      ],
      examples: [
        "Online Schools",
        "Training Centers",
        "Tutoring Services",
        "Skill Platforms",
      ],
      color: "indigo",
    },
    {
      icon: Building,
      title: "Real Estate Websites",
      description:
        "Property listing platforms with advanced search, virtual tours, and lead generation systems.",
      features: [
        "Property Listings",
        "Advanced Search",
        "Virtual Tours",
        "Agent Profiles",
        "Mortgage Calculator",
        "Lead Forms",
      ],
      examples: [
        "Real Estate Agencies",
        "Property Managers",
        "Rental Platforms",
        "Commercial Real Estate",
      ],
      color: "teal",
    },
    {
      icon: Camera,
      title: "Photography Websites",
      description:
        "Visual-focused websites with stunning galleries, booking systems, and client management tools.",
      features: [
        "Photo Galleries",
        "Booking System",
        "Client Portals",
        "Package Pricing",
        "Blog Integration",
        "Social Sharing",
      ],
      examples: [
        "Wedding Photography",
        "Portrait Studios",
        "Event Photography",
        "Commercial Photography",
      ],
      color: "pink",
    },
    {
      icon: Music,
      title: "Entertainment Websites",
      description:
        "Dynamic websites for artists, musicians, and entertainment businesses with media integration.",
      features: [
        "Media Players",
        "Event Calendars",
        "Ticket Sales",
        "Fan Engagement",
        "Merchandise Store",
        "Social Integration",
      ],
      examples: [
        "Musicians",
        "Event Venues",
        "Entertainment Companies",
        "Artists",
      ],
      color: "yellow",
    },
    {
      icon: Newspaper,
      title: "News & Blog Websites",
      description:
        "Content management systems with publishing tools, commenting systems, and subscription features.",
      features: [
        "Content Management",
        "Article Publishing",
        "Comment System",
        "Newsletter Signup",
        "Social Sharing",
        "SEO Optimization",
      ],
      examples: [
        "News Sites",
        "Personal Blogs",
        "Magazine Sites",
        "Industry Publications",
      ],
      color: "gray",
    },
    {
      icon: Car,
      title: "Automotive Websites",
      description:
        "Vehicle showcase websites with inventory management, financing calculators, and service booking.",
      features: [
        "Vehicle Inventory",
        "Search & Filters",
        "Financing Calculator",
        "Service Booking",
        "Trade-in Forms",
        "Dealer Locator",
      ],
      examples: [
        "Car Dealerships",
        "Auto Repair Shops",
        "Car Rental",
        "Motorcycle Dealers",
      ],
      color: "slate",
    },
    {
      icon: Plane,
      title: "Travel & Tourism",
      description:
        "Booking platforms and travel websites with itinerary management and payment processing.",
      features: [
        "Booking System",
        "Itinerary Planning",
        "Payment Processing",
        "Review System",
        "Photo Galleries",
        "Location Maps",
      ],
      examples: [
        "Travel Agencies",
        "Hotels",
        "Tour Operators",
        "Vacation Rentals",
      ],
      color: "cyan",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "from-green-500 to-green-600",
      blue: "from-primary-500 to-primary-600",
      purple: "from-secondary-500 to-secondary-600",
      orange: "from-orange-500 to-orange-600",
      red: "from-red-500 to-red-600",
      indigo: "from-indigo-500 to-indigo-600",
      teal: "from-teal-500 to-teal-600",
      pink: "from-pink-500 to-pink-600",
      yellow: "from-yellow-500 to-yellow-600",
      gray: "from-gray-500 to-gray-600",
      slate: "from-slate-500 to-slate-600",
      cyan: "from-cyan-500 to-cyan-600",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Every Type of Website You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From simple landing pages to complex web applications, we create
            websites for every industry and business need. No project is too big
            or too small for our expertise.
          </p>
        </div>

        {/* Website Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {websiteTypes.map((type, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-black hover:bg-black hover:text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden"
            >
              {/* Animated Background Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-black group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <type.icon className="w-8 h-8 text-white group-hover:text-black" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="mb-6 leading-relaxed opacity-80">
                  {type.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm opacity-80"
                      >
                        <CheckCircle className="w-4 h-4 text-black group-hover:text-white mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Examples */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, exampleIndex) => (
                      <span
                        key={exampleIndex}
                        className="px-3 py-1 bg-black group-hover:bg-white text-white group-hover:text-black text-xs rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center font-semibold transition-colors duration-200"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solutions */}
        <div className="bg-white border border-black rounded-2xl p-8 text-center shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Something Custom?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Don't see your industry listed? No problem! We specialize in
              creating custom solutions for unique business needs. Whether it's
              a specialized web application, custom integrations, or
              industry-specific features, we can build exactly what you need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-black" />
                <span className="text-gray-700 font-medium">
                  Custom Web Applications
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-black" />
                <span className="text-gray-700 font-medium">
                  API Integrations
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-black" />
                <span className="text-gray-700 font-medium">
                  Database Solutions
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="group relative items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 inline-flex space-x-3 overflow-hidden hover:bg-gray-900 border border-white/20"
            >
              {/* Dark overlay - z-0 */}
              <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></div>

              {/* Text and icon - z-10 */}
              <span className="relative z-10">Discuss Your Custom Project</span>
              <ArrowRight className="w-5 h-5 ml-2 relative z-10" />

              {/* Shine effect - z-10 */}
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 z-10"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteTypes;
