import { 
  Code2, 
  Zap, 
  Users, 
  Award, 
  Coffee,
  Sparkles,
  Heart,
  Target
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React & Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-purple-600' },
    { name: 'Tailwind CSS', level: 95, color: 'from-cyan-500 to-teal-500' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'UI/UX Design', level: 80, color: 'from-pink-500 to-rose-500' },
    { name: 'Database Design', level: 85, color: 'from-purple-500 to-indigo-500' }
  ];

  const achievements = [
    { icon: Code2, title: '50+ Projects', description: 'Successfully delivered', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, title: '30+ Clients', description: 'Happy customers worldwide', color: 'from-green-500 to-emerald-500' },
    { icon: Award, title: '2+ Years', description: 'Professional experience', color: 'from-yellow-500 to-orange-500' },
    { icon: Coffee, title: '1000+ Hours', description: 'Of coding excellence', color: 'from-purple-500 to-pink-500' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'Every line of code is written with precision and attention to detail.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your success is my priority. I work closely with you throughout the project.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Zap,
      title: 'Modern Technology',
      description: 'Using the latest tools and frameworks to build future-proof solutions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Sparkles,
      title: 'Fast Delivery',
      description: 'Efficient development process without compromising on quality.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Users className="w-5 h-5" />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Meet The
            <span className="block text-black">
              Developer
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Passionate freelance web developer dedicated to creating exceptional 
            digital experiences that help businesses grow and succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left Column - Story */}
          <div>
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mr-4">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                Hi, I'm a Web Developer
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate freelance web developer who loves creating beautiful, 
                  functional websites that make a real difference for businesses. With expertise 
                  in modern technologies like React, TypeScript, and Tailwind CSS, I bring 
                  ideas to life through clean, efficient code.
                </p>
                <p className="text-lg">
                  Starting my journey as a freelancer, I've had the privilege of working 
                  with diverse clients, from startups to established businesses, helping 
                  them establish a strong online presence and achieve their digital goals.
                </p>
              </div>
            </div>

            {/* Values with Enhanced Design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="group bg-white border border-black rounded-2xl p-6 hover:bg-black hover:text-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                  <div className="w-12 h-12 bg-black group-hover:bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <value.icon className="w-6 h-6 text-white group-hover:text-black" />
                  </div>
                  <h4 className="font-bold mb-2 transition-colors duration-300">{value.title}</h4>
                  <p className="text-sm opacity-80 transition-colors duration-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills & Stats */}
          <div>
            {/* Achievements with 3D Effect */}
            <div className="grid grid-cols-2 gap-6 mb-16">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group text-center p-8 bg-white border border-black rounded-3xl hover:bg-black hover:text-white hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-110 hover:rotate-3"
                >
                  <div className="w-16 h-16 bg-black group-hover:bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    <achievement.icon className="w-8 h-8 text-white group-hover:text-black" />
                  </div>
                  <div className="text-3xl font-black mb-2 transition-colors duration-300">
                    {achievement.title}
                  </div>
                  <div className="text-sm opacity-80 transition-colors duration-300">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Skills Section */}
            <div className="bg-white border border-black rounded-3xl p-8 hover:shadow-xl transition-all duration-500">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Sparkles className="w-6 h-6 text-black mr-3" />
                Technical Skills
              </h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-700 group-hover:text-black transition-colors duration-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 font-bold">{skill.level}%</span>
                    </div>
                    
                    {/* Creative Skill Bar */}
                    <div className="relative">
                      <div className="w-full h-4 bg-white border border-black rounded-full overflow-hidden">
                        <div
                          className="h-full bg-black rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Skill Level Indicator */}
                      <div 
                        className="absolute top-0 w-8 h-8 bg-white rounded-full border-2 border-black shadow-lg transform -translate-y-2 transition-all duration-1000 group-hover:scale-125 flex items-center justify-center"
                        style={{ left: `calc(${skill.level}% - 16px)` }}
                      >
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-black rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Let's Work Together!</h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Ready to bring your vision to life? Let's discuss your project and create something amazing together.
              </p>
              <a
  href="#contact"
  className="group inline-flex items-center bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-black hover:text-white border border-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
>
  <span>Get In Touch</span>

  {/* Normal Heart Icon (visible before hover) */}
  <Heart className="w-5 h-5 ml-2 group-hover:hidden transition duration-200" />

  {/* ❤️ Emoji (visible only on hover) */}
  <span className="hidden group-hover:inline ml-2 text-lg transition duration-200">❤️</span>
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;