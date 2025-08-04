import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'ecommerce',
      description: 'Modern online store with payment integration and admin dashboard',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Restaurant Website',
      category: 'business',
      description: 'Elegant restaurant website with online reservation system',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind', 'Firebase', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'portfolio',
      description: 'Creative portfolio for a digital artist with interactive galleries',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Sanity CMS', 'GSAP'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'saas',
      description: 'Analytics dashboard with real-time data visualization',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      category: 'business',
      description: 'Property listing platform with advanced search and filters',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Fitness App',
      category: 'mobile',
      description: 'Progressive web app for fitness tracking and workout plans',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'PWA', 'Chart.js', 'Local Storage'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'business', label: 'Business' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'saas', label: 'SaaS' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Here are some of the projects I've worked on recently. Each one represents 
            a unique challenge and creative solution.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-black text-white shadow-lg transform scale-105'
                    : 'bg-white text-black hover:bg-black hover:text-white border border-black'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-black"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-white text-black px-4 py-2 rounded-lg font-medium text-center hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 bg-black text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-black text-white text-sm rounded-full font-medium hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center text-black font-semibold hover:text-black transition-colors duration-200"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;