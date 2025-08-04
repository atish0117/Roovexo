import React from 'react';
import { 
  Code2, 
  Database, 
  Palette, 
  Smartphone, 
  Globe, 
  Shield,
  Star,
  Zap
} from 'lucide-react';

const Technologies = () => {
  const HexagonalProgressBar = ({ tech, index }: { tech: any, index: number }) => (
    <div className="group">
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-white group-hover:text-black transition-colors duration-300">
          {tech.name}
        </span>
        <span className="text-sm text-white group-hover:text-black font-bold">{tech.level}%</span>
      </div>
      
      <div className="relative">
        <div className="w-full h-3 bg-white rounded-full overflow-hidden">
          <div
            className="h-full group-hover:bg-black rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${tech.level}%` }}
          ></div>
        </div>
        
        <div 
          className="absolute top-0 w-6 h-6 bg-white group-hover:bg-black rounded-full border-2 border-black group-hover:border-white shadow-lg transform -translate-y-1.5 transition-all duration-1000 group-hover:scale-125 flex items-center justify-center"
          style={{ left: `calc(${tech.level}% - 12px)` }}
        >
          <div className="w-3 h-3 bg-black group-hover:bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );

  const techCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Modern user interfaces',
      technologies: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Server-side solutions',
      technologies: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 78 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      description: 'Visual design expertise',
      technologies: [
        { name: 'Figma', level: 88 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Photoshop', level: 82 },
        { name: 'Illustrator', level: 80 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform apps',
      technologies: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'iOS Development', level: 70 },
        { name: 'Android Development', level: 72 }
      ]
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Core web standards',
      technologies: [
        { name: 'HTML5', level: 98 },
        { name: 'CSS3', level: 95 },
        { name: 'JavaScript', level: 92 },
        { name: 'PHP', level: 80 }
      ]
    },
    {
      icon: Shield,
      title: 'Security & DevOps',
      description: 'Infrastructure & security',
      technologies: [
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 72 }
      ]
    }
  ];

  const certifications = [
    'Google Analytics Certified',
    'AWS Cloud Practitioner',
    'Meta Frontend Developer',
    'MongoDB Certified Developer',
    'React Professional Certificate',
    'TypeScript Expert Level'
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Code2 className="w-5 h-5" />
            <span>Technologies</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Technologies We
            <span className="block text-white">
              Master
            </span>
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            We stay at the forefront of technology, using the latest tools and frameworks 
            to build cutting-edge solutions that give your business a competitive advantage.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-black border border-white rounded-3xl p-8 hover:bg-white hover:text-black transition-all duration-700 transform hover:-translate-y-4 hover:scale-105"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white group-hover:bg-black rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <category.icon className="w-8 h-8 text-black group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-black transition-colors duration-500">{category.title}</h3>
                  <p className="text-white group-hover:text-black text-sm">{category.description}</p>
                </div>
              </div>

              {/* Technologies with Custom Progress Bars */}
              <div className="space-y-8">
                {category.technologies.map((tech, techIndex) => (
                  <HexagonalProgressBar key={tech.name} tech={tech} index={techIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-black border border-white rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Certifications & Expertise
            </h3>
            <p className="text-white text-lg">
              Continuously learning and certified in the latest technologies and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex items-center space-x-4 p-6 bg-black border border-white rounded-2xl hover:bg-white hover:text-black transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="w-12 h-12 bg-white group-hover:bg-black rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Star className="w-6 h-6 text-black group-hover:text-white" />
                </div>
                <span className="font-semibold text-white group-hover:text-black transition-colors duration-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
              <Zap className="w-10 h-10 text-black" />
            </div>
            <div className="text-4xl font-black text-white mb-2 transition-colors duration-300">99.9%</div>
            <div className="text-white text-sm">Uptime Guarantee</div>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
              <Globe className="w-10 h-10 text-black" />
            </div>
            <div className="text-4xl font-black text-white mb-2 transition-colors duration-300">&lt;3s</div>
            <div className="text-white text-sm">Page Load Time</div>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
              <Smartphone className="w-10 h-10 text-black" />
            </div>
            <div className="text-4xl font-black text-white mb-2 transition-colors duration-300">100%</div>
            <div className="text-white text-sm">Mobile Responsive</div>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
              <Shield className="w-10 h-10 text-black" />
            </div>
            <div className="text-4xl font-black text-white mb-2 transition-colors duration-300">A+</div>
            <div className="text-white text-sm">Security Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;