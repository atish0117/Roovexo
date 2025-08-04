// import React, { useState, useEffect } from 'react';
// import { ArrowRight, Play, ChevronDown } from 'lucide-react';
// import { Heart } from 'lucide-react';
// const Hero = () => {
//   const [currentText, setCurrentText] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   const rotatingTexts = [
//     'Digital Masterpieces',
//     'Stunning Websites',
//     'Web Applications',
//     'E-commerce Stores',
//     'Portfolio Sites',
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     // <section id="home" className="relative min-h-screen pt-20 pb-16 overflow-hidden bg-black text-white">
//     //   {/* Background Overlay */}
//     //   <div
//     //     className="absolute inset-0 bg-cover bg-center bg-fixed z-0 opacity-20"
//     //     style={{
//     //       backgroundImage:
//     //         "url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920')",
//     //     }}
//     //   ></div>

//     //   {/* Content Container */}
//     //   <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     //     {/* Badge */}
//     //     <div
//     //       className={`inline-flex items-center space-x-2 px-6 py-2 border border-white rounded-full text-sm font-medium mb-8 transition-all duration-1000 ${
//     //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//     //       } group hover:bg-white hover:text-black cursor-pointer`}
//     //     >
//     //       <span>🚀 Available for New Projects</span>
//     //       <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
//     //     </div>

//     //     {/* Heading */}
//     //     <div
//     //       className={`transition-all duration-1000 delay-200 ${
//     //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//     //       } text-center`}
//     //     >
//     //       <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-tight mb-4">
//     //         We Create
//     //         <br />
//     //         <span className="inline-block relative">
//     //           <span className="text-white z-10 relative">{rotatingTexts[currentText]}</span>
//     //           <span className="absolute inset-0 bg-white opacity-10 rounded blur-md"></span>
//     //         </span>
//     //         <br />That Transform Businesses
//     //       </h1>
//     //     </div>

//     //     {/* Subtitle */}
//     //     <p
//     //       className={`max-w-3xl mx-auto text-center text-lg md:text-2xl leading-relaxed mt-8 transition-all duration-1000 delay-400 ${
//     //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//     //       }`}
//     //     >
//     //       <span className="font-bold text-white text-2xl">Roovexo</span> is your premier web development partner,
//     //       crafting exceptional digital experiences. From stunning websites to complex web applications,
//     //       we bring your vision to life.
//     //     </p>

//     //     {/* CTA Buttons */}
//     //     <div
//     //       className={`flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 transition-all duration-1000 delay-600 ${
//     //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//     //       }`}
//     //     >
//     //       <a
//     //         href="#portfolio"
//     //         className="group relative inline-flex items-center px-8 py-4 text-black bg-white border border-white rounded-full font-semibold text-lg overflow-hidden hover:bg-black hover:text-white transition-all duration-300"
//     //       >
//     //         <Play className="mr-3 group-hover:rotate-180 transition-transform duration-500" />
//     //         View My Work
//     //         <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
//     //       </a>

//     //       <a
//     //         href="#contact"
//     //         className="group relative inline-flex items-center px-8 py-4 text-white border border-white rounded-full font-semibold text-lg overflow-hidden hover:bg-white hover:text-black transition-all duration-300"
//     //       >
//     //         <span className="relative z-10">Start Your Project</span>
//     //         <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">❤️</span>
//     //       </a>
//     //     </div>

//     //     {/* Scroll Indicator */}
//     //     <div
//     //       className={`flex flex-col items-center mt-20 animate-bounce-slow transition-all duration-1000 delay-800 ${
//     //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//     //       }`}
//     //     >
//     //       <div
//     //         className="cursor-pointer p-4 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
//     //         onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
//     //       >
//     //         <ChevronDown className="w-8 h-8" />
//     //       </div>
//     //       <span className="mt-2 text-sm text-white/80">Scroll to explore</span>
//     //     </div>
//     //   </div>
//     // </section>

//      <section
//       id="home"
//       className="w-full min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 relative overflow-hidden"
//     >
//       {/* Animated Background Circles */}
//       <div className="absolute w-[500px] h-[500px] bg-white opacity-10 rounded-full top-[-100px] left-[-100px] animate-ping" />
//       <div className="absolute w-[300px] h-[300px] bg-white opacity-10 rounded-full bottom-[-50px] right-[-50px] animate-pulse" />

//       {/* Hero Content */}
//       <div className="text-center z-10">
//         <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//           Scale Your <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text animate-gradient">Ideas</span><br />
//           From <span className="underline decoration-white decoration-dashed underline-offset-4">Zero</span> to <span className="text-pink-400 animate-bounce">Millions</span>
//         </h1>

//         <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-10 animate-fadeIn">
//           We build scalable solutions that help startups and businesses reach millions with speed and style.
//         </p>

//         <a
//           href="#contact"
//           className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-black hover:text-white border border-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group"
//         >
//           <span className="transition-all duration-300 group-hover:scale-105">Get In Touch</span>
//           <Heart className="w-5 h-5 ml-1 transition-transform duration-300 transform group-hover:rotate-12 group-hover:text-red-500" />
//         </a>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
//           <div className="w-2 h-2 bg-white rounded-full animate-scroll" />
//         </div>
//       </div>

//       {/* Animations */}
//       <style>{`
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradientShift 3s ease infinite;
//         }

//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         .animate-scroll {
//           animation: scrollDown 1.2s infinite;
//         }

//         @keyframes scrollDown {
//           0%, 100% { transform: translateY(0); opacity: 0.6; }
//           50% { transform: translateY(6px); opacity: 1; }
//         }

//         .animate-fadeIn {
//           animation: fadeInUp 1.5s ease-in-out;
//         }

//         @keyframes fadeInUp {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;


import { Play, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const rotatingTexts = [
    'Digital Masterpieces',
    'Stunning Websites',
    'Web Applications',
    'E-commerce Stores',
    'Portfolio Sites'
  ];
 const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 relative overflow-hidden"
    >
      {/* Animated Background Circles */}
      <div className="absolute w-[500px] h-[500px] bg-white opacity-10 rounded-full top-[-100px] left-[-100px] animate-ping" />
      <div className="absolute w-[300px] h-[300px] bg-white opacity-10 rounded-full bottom-[-50px] right-[-50px] animate-pulse" />

      {/* Hero Content */}
      <div className="text-center z-10">
        {/* Rotating Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          We Create <br />
          <span className="relative inline-block text-white">
            <span className="relative z-10 text-pink-400 animate-fadeInUp duration-500">
              {rotatingTexts[currentText]}
            </span>
            <span className="absolute inset-x-0 -bottom-1 h-[3px] bg-gradient-to-r from-pink-400 to-purple-500 rounded animate-gradientSlide"></span>
          </span>
          <br /> That Drive Growth
        </h1>

        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-10 animate-fadeIn">
          At <span className="font-bold text-white text-2xl">Roovexo</span>, we transform ideas into real, scalable digital products
          that engage and convert. Websites, platforms, and systems built to grow.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
          <a
            href="#portfolio"
            className="group relative inline-flex items-center px-8 py-4 text-black bg-white border border-white rounded-full font-semibold text-lg overflow-hidden hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <Play className="mr-3 group-hover:rotate-180 transition-transform duration-500" />
            View My Work
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center px-8 py-4 text-white border border-white rounded-full font-semibold text-lg overflow-hidden hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <span className="relative z-10 transition-all duration-300 group-hover:scale-105">Start Your Project</span>
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">❤️</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
     <div
          className={`flex flex-col items-center mt-20 animate-bounce-slow transition-all duration-1000 delay-800 
            ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }
          `}
        >
          <div
            className="cursor-pointer p-4 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8" />
          </div>
          <span className="mt-2 text-sm text-white/80">Scroll to explore</span>
        </div>

      {/* Animations */}
      <style>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-scroll {
          animation: scrollDown 1.2s infinite;
        }

        @keyframes scrollDown {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(6px); opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeInUp 1.5s ease-in-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-in-out;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-gradientSlide {
          animation: slideGradient 2s ease-in-out infinite;
        }

        @keyframes slideGradient {
          0%, 100% { transform: scaleX(0); opacity: 0; }
          50% { transform: scaleX(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

